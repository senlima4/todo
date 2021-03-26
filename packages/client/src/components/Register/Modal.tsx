import {
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Modal as BaseModal,
} from '@chakra-ui/react'
import { useMutation } from 'react-relay/hooks'

import { RegisterHumanInput } from '@/__generated__/RegisterMutation.graphql'
import { RegisterMutationNode } from '@/mutations/Register'
import { Form } from './Form'

export function Modal() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  const [commit, isInFlight] = useMutation(RegisterMutationNode)

  const register = (input: RegisterHumanInput) => {
    commit({
      variables: { input },
      onCompleted: () => {
        window.location.reload()
      },
    })
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      closeOnEsc={false}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent py={4}>
        <ModalHeader textAlign="center">Register</ModalHeader>
        <ModalBody>
          <Form submitFunc={register} isLoading={isInFlight} />
        </ModalBody>
      </ModalContent>
    </BaseModal>
  )
}
