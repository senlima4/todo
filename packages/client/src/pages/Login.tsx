import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import { mount, route } from 'navi'
import { useNavigation } from 'react-navi'
import { loadQuery, usePreloadedQuery, PreloadedQuery } from 'react-relay'

import { CurrentHumanQuery } from '@/__generated__/CurrentHumanQuery.graphql'
import { CurrentHumanQueryNode } from '@/queries/CurrentHuman'
import RelayEnvironment from '@/utils/relayEnv'
import LoginModal from '@/components/Login'

type PropTypes = {
  humanRef: PreloadedQuery<CurrentHumanQuery>
}

function Login({ humanRef }: PropTypes) {
  const navigation = useNavigation()
  const data = usePreloadedQuery<CurrentHumanQuery>(
    CurrentHumanQueryNode,
    humanRef
  )

  useEffect(() => {
    if (data.currentHuman && data.currentHuman.id) {
      navigation.navigate('/')
    }
  }, [])

  return (
    <Box>
      <LoginModal />
    </Box>
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
