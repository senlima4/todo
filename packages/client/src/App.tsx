import { Box, Text } from '@chakra-ui/react'
import { graphql } from 'babel-plugin-relay/macro'
import { usePreloadedQuery, PreloadedQuery } from 'react-relay/hooks'

import type { AppQuery as AppQueryType } from '@/__generated__/AppQuery.graphql'

import Login from '@/components/Login'
import Register from '@/components/Register'

type PropsType = {
  queryRef: PreloadedQuery<AppQueryType>
}

export default function App({ queryRef }: PropsType) {
  const data = usePreloadedQuery(
    graphql`
      query AppQuery {
        currentHuman {
          id
        }
        allHumans {
          nodes {
            username
          }
        }
      }
    `,
    queryRef
  )

  return (
    <Box>
      {data.allHumans?.nodes.length === 0 ? (
        <Register />
      ) : (
        !data.currentHuman?.id && <Login />
      )}

      <Text>{JSON.stringify(data)}</Text>
    </Box>
  )
}
