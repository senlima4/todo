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

import type { RegisterHumanInput } from '@/__generated__/RegisterMutation.graphql'

import RegisterForm from './RegisterForm'

export default function Register() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  const [commit, isInFlight] = useMutation(graphql`
    mutation RegisterMutation($input: RegisterHumanInput!) {
      registerHuman(input: $input) {
        human {
          username
        }
      }
    }
  `)

  const register = (input: RegisterHumanInput) => {
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
        <ModalHeader textAlign="center">Create Admin</ModalHeader>

        <ModalBody>
          <RegisterForm isInFlight={isInFlight} submitFunc={register} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
