import {
  Flex,
  Input,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { AuthenticateInput } from '@/__generated__/LoginMutation.graphql'

type PropsType = {
  isLoading: boolean
  submitFunc: (data: AuthenticateInput) => void
}

export function Form({ isLoading, submitFunc }: PropsType) {
  const { register, errors, handleSubmit } = useForm({
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = (data: AuthenticateInput) => {
    submitFunc(data)
  }

  return (
    <Flex
      as="form"
      align="center"
      flexDir="column"
      onSubmit={handleSubmit(onSubmit)}
    >
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

      <Button mb={4} type="submit" isLoading={isLoading}>
        Login
      </Button>
    </Flex>
  )
}
