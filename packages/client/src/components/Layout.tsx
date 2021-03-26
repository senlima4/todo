import { ReactNode, Suspense } from 'react'
import { NotFoundBoundary } from 'react-navi'
import { Box, useColorModeValue } from '@chakra-ui/react'

import NotFound from '@/pages/NotFound'

type PropsType = {
  children: ReactNode
}

export default function Layout({ children }: PropsType) {
  const bgColor = useColorModeValue('white', 'black')

  return (
    <Box w="full" h="100vh" bgColor={bgColor} overflow="none">
      <NotFoundBoundary render={NotFound}>
        <Suspense fallback="Loading...">{children}</Suspense>
      </NotFoundBoundary>
    </Box>
  )
}
