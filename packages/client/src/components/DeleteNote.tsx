import { ROOT_ID, RecordProxy, ConnectionHandler } from 'relay-runtime'
import { graphql } from 'babel-plugin-relay/macro'
import { useMutation } from 'react-relay/hooks'
import { useAtom } from 'jotai'
import {
  useDisclosure,
  Text,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react'

import { noteAtom, refreshNoteAtom } from '@/utils/atom'
import { DeleteNoteMutation } from '@/__generated__/DeleteNoteMutation.graphql'

type PropsType = {
  nodeId: string
}

export default function DeleteNote({ nodeId }: PropsType) {
  const [note, setNote] = useAtom(noteAtom)
  const [, setRefresh] = useAtom(refreshNoteAtom)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [commit, isInFlight] = useMutation<DeleteNoteMutation>(graphql`
    mutation DeleteNoteMutation($input: DeleteNoteInput!) {
      deleteNote(input: $input) {
        deletedNoteId
      }
    }
  `)

  const handleDelete = () => {
    commit({
      variables: {
        input: { nodeId },
      },
      updater: store => {
        const payload = store.getRootField('deleteNote')
        const deletedNoteId = payload.getValue('deletedNoteId')

        if (deletedNoteId) {
          // eslint-disable-next-line
          const rootRecord = store.get(ROOT_ID) as Readonly<RecordProxy<any>>
          const connection = ConnectionHandler.getConnection(
            rootRecord,
            'Notes_allNotes'
          )
          if (connection) {
            ConnectionHandler.deleteNode(connection, deletedNoteId)
          }
        }
      },
      onCompleted: () => {
        if (note.nodeId === nodeId) {
          setNote({
            id: '',
            nodeId: '',
            content: '',
            createdAt: '',
            updatedAt: '',
          })
          setRefresh(true)
          onClose()
        }
      },
    })
  }

  return (
    <>
      <Button onClick={onOpen}>Delete</Button>
      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalBody>
            <Text>Click Confirm to delete note.</Text>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              color="red"
              variant="ghost"
              onClick={handleDelete}
              isLoading={isInFlight}
            >
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
