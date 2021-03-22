import { graphql } from 'babel-plugin-relay/macro'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { useColorModeValue, Box, Flex, Text, Spacer } from '@chakra-ui/react'

import { DashboardQuery } from '@/__generated__/DashboardQuery.graphql'

import AddNote from './AddNote'
import NotesList from './NotesList'

type PropsType = {
  humanId: string
}

export default function Dashboard({ humanId }: PropsType) {
  const headerBg = useColorModeValue('gray.100', 'gray.700')
  const data = useLazyLoadQuery<DashboardQuery>(
    graphql`
      query DashboardQuery {
        ...NotesList_query
      }
    `,
    {},
    { fetchPolicy: 'store-and-network' }
  )

  return (
    <Box bg="black">
      <Flex w="full" h="100vh">
        <Flex w="275px" flex="none" flexDir="column">
          <Box
            w="full"
            h="50px"
            flex="none"
            px={4}
            top="0"
            pos="sticky"
            bg={headerBg}
            borderBottomRadius="xl"
          >
            <Flex w="full" h="50px" align="center">
              <Text fontWeight="bold">todo</Text>
              <Spacer />
              <AddNote humanId={humanId} />
            </Flex>
          </Box>
          <Box
            h="100%"
            flex="auto"
            overflowY="scroll"
            className="scrollbar-hidden"
          >
            <NotesList query={data} />
          </Box>
        </Flex>

        <Box flex="auto" w="100%" pt={12}>
          <Text>test</Text>
        </Box>
      </Flex>
    </Box>
  )
}
