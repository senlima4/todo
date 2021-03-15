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

import type {
  RegisterHumanInput,
  RegisterHumanMutation,
} from '__generated__/RegisterHumanMutation.graphql'

import RegisterForm from './RegisterForm'

const RegisterHuman = () => {
  const { isOpen, onClose } = useDisclosure()
  const [commit, isInFlight] = useMutation<RegisterHumanMutation>(graphql`
    mutation RegisterHumanMutation($input: RegisterHumanInput!) {
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
      <ModalContent>
        <ModalHeader>Create Admin</ModalHeader>

        <ModalBody>
          <RegisterForm isInFlight={isInFlight} submitFunc={register} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default RegisterHuman
