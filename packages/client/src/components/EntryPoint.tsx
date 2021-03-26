import { Suspense } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { Box, Flex, Skeleton } from '@chakra-ui/react'

import { QueryOptions } from '@/interfaces'
import { EntryPointQuery } from '@/__generated__/EntryPointQuery.graphql'

import Register from './Register'
import Login from './Login'
import Dashboard from './Dashboard'

type PropsType = {
  refresh: () => void
  queryOptions: QueryOptions
}

// eslint-disable-next-line
export default function EntryPoint({ refresh, queryOptions }: PropsType) {
  const data = useLazyLoadQuery<EntryPointQuery>(
    graphql`
      query EntryPointQuery {
        allHumans {
          totalCount
        }
        currentHuman {
          id
        }
      }
    `,
    {},
    queryOptions
  )

  if (data.allHumans && data.allHumans.totalCount === 0) return <Register />

  return (
    <>
      {data.allHumans &&
      data.currentHuman &&
      data.allHumans.totalCount > 0 &&
      data.currentHuman.id ? (
        <Suspense
          fallback={
            <Flex w="full" h="100vh">
              <Box flex="none" w="275px" px={6} py={12}>
                <Skeleton borderRadius="lg" w="full" h="full" />
              </Box>
              <Box flex="auto" w="full" px={8} py={12}>
                <Box mx="auto" w="90%" maxW="968px" h="full">
                  <Skeleton borderRadius="lg" w="full" h="full" />
                </Box>
              </Box>
            </Flex>
          }
        >
          <Dashboard humanId={data.currentHuman.id as string} />
        </Suspense>
      ) : (
        <Login />
      )}
    </>
  )
}
