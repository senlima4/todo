import { useEffect } from 'react'
import { mount, route } from 'navi'
import { useNavigation } from 'react-navi'
import {
  loadQuery,
  PreloadedQuery,
  useMutation,
  usePreloadedQuery,
} from 'react-relay'
import { Center } from '@chakra-ui/react'

import {
  LoginMutation,
  AuthenticateInput,
} from '@/__generated__/LoginMutation.graphql'
import { LoginMutationNode } from '@/mutations/Login'
import { CurrentHumanQuery } from '@/__generated__/CurrentHumanQuery.graphql'
import { CurrentHumanQueryNode } from '@/queries/CurrentHuman'
import RelayEnvironment from '@/utils/relayEnv'
import LoginForm from '@/components/LoginForm'

type PropTypes = {
  humanRef: PreloadedQuery<CurrentHumanQuery>
}

function Login({ humanRef }: PropTypes) {
  const navigation = useNavigation()
  const [commit, isInFlight] = useMutation<LoginMutation>(LoginMutationNode)
  const data = usePreloadedQuery<CurrentHumanQuery>(
    CurrentHumanQueryNode,
    humanRef
  )

  const login = (input: AuthenticateInput) => {
    commit({
      variables: { input },
      onCompleted: res => {
        if (res.authenticate) {
          localStorage.setItem(
            'todo-access',
            res.authenticate.jwtToken as string
          )
          navigation.navigate('/')
        }
      },
    })
  }

  useEffect(() => {
    if (data.currentHuman && data.currentHuman.id) navigation.navigate('/')
  }, [])

  return (
    <Center w="full" h="full">
      <LoginForm isLoading={isInFlight} submitFunc={login} />
    </Center>
  )
}

export default mount({
  '/': route(() => ({
    title: 'Lander - Login',
    view: (
      <Login
        humanRef={loadQuery<CurrentHumanQuery>(
          RelayEnvironment,
          CurrentHumanQueryNode,
          {},
          { fetchPolicy: 'network-only' }
        )}
      />
    ),
  })),
})
