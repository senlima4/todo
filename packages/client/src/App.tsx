import { useEffect, useCallback, Suspense } from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'
import { useQueryLoader } from 'react-relay/hooks'

import AuthNode, { AuthQuery } from '@/__generated__/AuthQuery.graphql'

import Auth from '@/components/Auth'
import DashboardSkeleton from '@/components/DashboardSkeleton'

export default function App() {
  const [queryRef, loadQuery] = useQueryLoader<AuthQuery>(AuthNode)

  useEffect(() => {
    loadQuery({}, { fetchPolicy: 'network-only' })
  }, [])

  const refresh = useCallback(() => {
    loadQuery({}, { fetchPolicy: 'network-only' })
  }, [])

  return (
    <Box>
      {queryRef && (
        <Suspense fallback={<DashboardSkeleton />}>
          <Auth refresh={refresh} queryRef={queryRef}>
            <Flex w="full" h="100vh">
              <Box flex="none" w="275px">
                <Text>Notes</Text>
              </Box>
              <Box flex="auto" w="full" px={8} py={12}>
                <Box mx="auto" w="90%" maxW="968px" h="full">
                  <Text>Content</Text>
                </Box>
              </Box>
            </Flex>
          </Auth>
        </Suspense>
      )}
    </Box>
  )
}
