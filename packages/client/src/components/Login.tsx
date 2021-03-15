import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { graphql } from 'babel-plugin-relay/macro'
import { useMutation } from 'react-relay/hooks'

import type { AuthenticateInput } from '@/__generated__/LoginMutation.graphql'

import LoginForm from './LoginForm'

export default function Login() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  const [commit, isInFlight] = useMutation(graphql`
    mutation LoginMutation($input: AuthenticateInput!) {
      authenticate(input: $input) {
        jwtToken
      }
    }
  `)

  const login = (input: AuthenticateInput) => {
    commit({
      variables: { input },
      onCompleted: () => {
        onClose()
      },
    })
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
        <ModalHeader textAlign="center">👋 Welcome</ModalHeader>

        <ModalBody>
          <LoginForm isInFlight={isInFlight} submitFunc={login} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
