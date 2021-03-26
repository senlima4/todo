import {
  Box,
  Flex,
  Text,
  Spacer,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { graphql } from 'babel-plugin-relay/macro'
import { useLazyLoadQuery } from 'react-relay/hooks'

import { DashboardQuery } from '@/__generated__/DashboardQuery.graphql'

import ColorButton from './ColorButton'
import NotesList from './note/NotesList'
import AddNoteBtn from './note/AddBtn'
import NoteEditor from './note/Editor'

type PropsType = {
  humanId: string
}

export default function Dashboard({ humanId }: PropsType) {
  const dashboardBg = useColorModeValue('white', 'black')
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
    <Box bg={dashboardBg}>
      <Flex w="full" h="100vh">
        <Flex w="275px" flex="none" flexDir="column">
          <Box
            w="full"
            h={12}
            flex="none"
            top="0"
            pos="sticky"
            bg={dashboardBg}
          >
            <Flex px={4} w="full" h={12} align="center">
              <Text fontWeight="bold">todo</Text>
              <Spacer />
              <HStack spacing={2} align="center">
                <ColorButton />
                <AddNoteBtn humanId={humanId} />
              </HStack>
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
          <NoteEditor />
        </Box>
      </Flex>
    </Box>
  )
}
