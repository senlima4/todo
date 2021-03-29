import {
  Box,
  Text,
  Flex,
  Spacer,
  Center,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { Suspense } from 'react'
import { mount, route } from 'navi'
import { loadQuery, usePreloadedQuery, PreloadedQuery } from 'react-relay'

import { DashboardQuery } from '@/__generated__/DashboardQuery.graphql'
import { DashboardQueryNode } from '@/queries/Dashboard'
import RelayEnvironment from '@/utils/relayEnv'
import { noteAtom } from '@/utils/atom'
import useAuth from '@/hooks/useAuth'
import NotesList from '@/components/NotesList'
import NoteEditor from '@/components/NoteEditor'
import ColorButton from '@/components/ColorButton'
import LogoutButton from '@/components/LogoutButton'
import AddNoteButton from '@/components/AddNoteButton'

function Dashboard({ rootRef }: { rootRef: PreloadedQuery<DashboardQuery> }) {
  const [currentNoteId] = useAtom(noteAtom)
  const themeColor = useColorModeValue('white', 'black')
  const data = usePreloadedQuery<DashboardQuery>(DashboardQueryNode, rootRef)

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
      <Flex w="full" h="full" flex="auto" flexDir="column">
        {currentNoteId ? (
          <Suspense fallback="Load note">
            <NoteEditor />
          </Suspense>
        ) : (
          <Center w="full" h="100%">
            <Text>Select Note</Text>
          </Center>
        )}
      </Flex>
    </Flex>
  )
}

export default mount({
  '/': route(() => ({
    title: 'Lander - Dashboard',
    view: (
      <Dashboard
        rootRef={loadQuery<DashboardQuery>(
          RelayEnvironment,
          DashboardQueryNode,
          {},
          { fetchPolicy: 'store-and-network' }
        )}
      />
    ),
  })),
})
