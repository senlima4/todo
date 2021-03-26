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
import { DeleteNoteMutationNode } from '@/mutations/DeleteNote'

type PropsType = {
  nodeId: string
}

export default function DeleteBtn({ nodeId }: PropsType) {
  const [note, setNote] = useAtom(noteAtom)
  const [, setRefresh] = useAtom(refreshNoteAtom)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [commit, isInFlight] = useMutation(DeleteNoteMutationNode)

  const handleDelete = () => {
    commit({
      variables: {
        input: { nodeId },
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
