import { useMutation } from 'react-relay/hooks'
import { useEffect } from 'react'
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

import { noteAtom, refetchNotesAtom } from '@/utils/atom'
import { DeleteNoteMutationNode } from '@/mutations/DeleteNote'

type PropsType = {
  nodeId: string
}

export default function DeleteNoteButton({ nodeId }: PropsType) {
  const [, setRefetch] = useAtom(refetchNotesAtom)
  const [currentNoteId, setNoteId] = useAtom(noteAtom)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [commit, isInFlight] = useMutation(DeleteNoteMutationNode)

  useEffect(() => {
    if (!currentNoteId) onClose()
  }, [])

  const handleDelete = () => {
    commit({
      variables: {
        input: { nodeId },
      },
      onCompleted: () => {
        setNoteId(null)
        setRefetch(true)
      },
    })
  }

  return (
    <>
      <Button size="sm" onClick={onOpen}>
        Delete
      </Button>
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
