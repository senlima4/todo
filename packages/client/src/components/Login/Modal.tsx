import {
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Modal as BaseModal,
} from '@chakra-ui/react'
import { useMutation } from 'react-relay/hooks'

import {
  LoginMutation,
  AuthenticateInput,
} from '@/__generated__/LoginMutation.graphql'
import { LoginMutationNode } from '@/mutations/Login'
import { Form } from './Form'

export function Modal() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  const [commit, isInFlight] = useMutation<LoginMutation>(LoginMutationNode)

  const login = (input: AuthenticateInput) => {
    commit({
      variables: { input },
      onCompleted: res => {
        if (res.authenticate) {
          localStorage.setItem(
            'todo-access',
            res.authenticate.jwtToken as string
          )
          onClose()
        }
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
        <ModalHeader textAlign="center">Welcome back</ModalHeader>
        <ModalBody>
          <Form isLoading={isInFlight} submitFunc={login} />
        </ModalBody>
      </ModalContent>
    </BaseModal>
  )
}
