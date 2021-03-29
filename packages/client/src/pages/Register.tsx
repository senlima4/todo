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

import { RegisterHumanInput } from '@/__generated__/RegisterMutation.graphql'
import { AllHumansQuery } from '@/__generated__/AllHumansQuery.graphql'
import { RegisterMutationNode } from '@/mutations/Register'
import { AllHumansQueryNode } from '@/queries/AllHumans'
import RegisterForm from '@/components/RegisterForm'
import RelayEnvironment from '@/utils/relayEnv'

type PropTypes = {
  countRef: PreloadedQuery<AllHumansQuery>
}

function Register({ countRef }: PropTypes) {
  const data = usePreloadedQuery<AllHumansQuery>(AllHumansQueryNode, countRef)
  const [commit, isInFlight] = useMutation(RegisterMutationNode)
  const navigation = useNavigation()

  useEffect(() => {
    if (data.allHumans && data.allHumans.totalCount > 0)
      navigation.navigate('/login')
  }, [])

  const register = (input: RegisterHumanInput) => {
    commit({
      variables: { input },
      onCompleted: () => {
        window.location.reload()
      },
    })
  }

  return (
    <Center w="full" h="full">
      <RegisterForm submitFunc={register} isLoading={isInFlight} />
    </Center>
  )
}

export default mount({
  '/': route(() => ({
    title: 'Lander - Register',
    view: (
      <Register
        countRef={loadQuery<AllHumansQuery>(
          RelayEnvironment,
          AllHumansQueryNode,
          {},
          { fetchPolicy: 'network-only' }
        )}
      />
    ),
  })),
})
