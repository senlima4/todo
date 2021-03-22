import {
  Flex,
  Input,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'

import { RegisterHumanInput } from '@/__generated__/RegisterMutation.graphql'

type PropsType = {
  onRegistered: () => void
}

export default function Register({ onRegistered }: PropsType) {
  const { register, errors, handleSubmit } = useForm({
    defaultValues: { username: '', email: '', password: '' },
  })
  const [commit, isInFlight] = useMutation(graphql`
    mutation RegisterMutation($input: RegisterHumanInput!) {
      registerHuman(input: $input) {
        human {
          username
        }
      }
    }
  `)

  const onSubmit = (input: RegisterHumanInput) => {
    commit({
      variables: { input },
      onCompleted: () => {
        onRegistered()
      },
    })
  }

  return (
    <Flex
      as="form"
      align="center"
      flexDir="column"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl mb={4} isInvalid={Boolean(errors.username)}>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          ref={register({
            required: 'Required field',
            minLength: { value: 5, message: 'At least 5 characters' },
          })}
          size="sm"
          type="text"
          name="username"
        />
        <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
      </FormControl>

      <FormControl mb={4} isInvalid={Boolean(errors.email)}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          ref={register({
            required: 'Required field',
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Invaild email address',
            },
          })}
          size="sm"
          type="email"
          name="email"
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl mb={8} isInvalid={Boolean(errors.password)}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          ref={register({
            required: 'Required field',
            minLength: { value: 8, message: 'At least 8 characters' },
          })}
          size="sm"
          type="password"
          name="password"
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      <Button mb={4} type="submit" isLoading={isInFlight}>
        Confirm
      </Button>
    </Flex>
  )
}
