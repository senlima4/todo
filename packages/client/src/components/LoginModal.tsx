import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'

import Login from './Login'

type PropsType = {
  onComplete: () => void
}

export default function LoginModal({ onComplete }: PropsType) {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })

  const onLoginSuccess = () => {
    onComplete()
    onClose()
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
        <ModalHeader textAlign="center">Welcome back</ModalHeader>
        <ModalBody>
          <Login onClose={onLoginSuccess} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
