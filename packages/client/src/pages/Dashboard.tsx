import {
  Box,
  Text,
  Flex,
  Spacer,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { mount, route } from 'navi'
import { loadQuery, usePreloadedQuery, PreloadedQuery } from 'react-relay'

import { RootQuery } from '@/__generated__/RootQuery.graphql'
import { RootQueryNode } from '@/queries/Root'
import RelayEnvironment from '@/utils/relayEnv'
import NotesList from '@/components/NotesList'
import NoteEditor from '@/components/NoteEditor'
import ColorButton from '@/components/ColorButton'
import LogoutButton from '@/components/LogoutButton'
import AddNoteButton from '@/components/AddNoteButton'
import { useAuth } from '@/hooks/useAuth'

type PropTypes = {
  rootRef: PreloadedQuery<RootQuery>
}

function Dashboard({ rootRef }: PropTypes) {
  const themeColor = useColorModeValue('white', 'black')
  const data = usePreloadedQuery<RootQuery>(RootQueryNode, rootRef)

  if (!data.currentHuman) return null
  const human = useAuth(data.currentHuman)

  if (!human) return null

  return (
    <Flex w="full" h="100vh" pos="relative">
      <Flex w="275px" h="100%" flex="none" flexDir="column">
        <Box
          w="full"
          h={12}
          top="0"
          pos="sticky"
          flex="none"
          bg={themeColor}
          zIndex={5}
        >
          <Flex px={4} w="full" h={12} align="center">
            <Text fontWeight="bold">todo</Text>
            <Spacer />
            <HStack spacing={2} align="center">
              <ColorButton />
              <LogoutButton />
              <AddNoteButton humanId={human.id as string} />
            </HStack>
          </Flex>
        </Box>
        <Box h="100%" flex="auto" pos="relative">
          <NotesList query={data} />
        </Box>
      </Flex>
      <Flex w="100%" flex="auto" flexDir="column" pt={12}>
        <NoteEditor />
      </Flex>
    </Flex>
  )
}

export default mount({
  '/': route(() => ({
    title: 'Lander - Dashboard',
    view: (
      <Dashboard
        rootRef={loadQuery<RootQuery>(
          RelayEnvironment,
          RootQueryNode,
          {},
          { fetchPolicy: 'store-and-network' }
        )}
      />
    ),
  })),
})
