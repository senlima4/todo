import { useState, useCallback, Suspense } from 'react'
import { Box } from '@chakra-ui/react'

import { QueryOptions } from '@/interfaces'
import EntryPoint from '@/components/EntryPoint'

export default function App() {
  const [
    refreshedQueryOptions,
    setRefreshedQueryOptions,
  ] = useState<QueryOptions>({ fetchPolicy: 'network-only' })

  const refresh = useCallback(() => {
    setRefreshedQueryOptions(prev => ({
      fetchKey: (prev?.fetchKey ?? 0) + 1,
      fetchPolicy: 'network-only',
    }))
  }, [])

  return (
    <Box>
      <Suspense fallback="Loading...">
        <EntryPoint
          refresh={refresh}
          queryOptions={refreshedQueryOptions ?? {}}
        />
      </Suspense>
    </Box>
  )
}
