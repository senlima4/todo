import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import { mount, route } from 'navi'
import { useNavigation } from 'react-navi'
import { loadQuery, usePreloadedQuery, PreloadedQuery } from 'react-relay'

import { AllHumansQuery } from '@/__generated__/AllHumansQuery.graphql'
import { AllHumansQueryNode } from '@/queries/AllHumans'
import RegisterModal from '@/components/Register'
import RelayEnvironment from '@/utils/relayEnv'

type PropTypes = {
  countRef: PreloadedQuery<AllHumansQuery>
}

function Register({ countRef }: PropTypes) {
  const data = usePreloadedQuery<AllHumansQuery>(AllHumansQueryNode, countRef)
  const navigation = useNavigation()

  useEffect(() => {
    if (data.allHumans && data.allHumans.totalCount > 0) {
      navigation.navigate('/login')
    }
  })

  return (
    <Box>
      <RegisterModal />
    </Box>
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
