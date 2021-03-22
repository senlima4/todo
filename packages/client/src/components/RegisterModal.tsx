import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'

import Register from './Register'

export default function RegisterModal() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })

  const onRegisterSuccess = () => {
    window.location.reload()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      closeOnEsc={false}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent py={4}>
        <ModalHeader textAlign="center">Setup user</ModalHeader>
        <ModalBody>
          <Register onRegistered={onRegisterSuccess} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
