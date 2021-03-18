import { Box, Flex, Skeleton } from '@chakra-ui/react'

export default function DashboardSkeleton() {
  return (
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
  )
}
