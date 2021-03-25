import { useAtom } from 'jotai'
import { Text, Flex, Center } from '@chakra-ui/react'

import { noteAtom } from '@/utils/atom'
import DeleteNoteBtn from './DeleteNote'
import UpdateNoteArea from './UpdateNote'

export default function NoteEditor() {
  const [note] = useAtom(noteAtom)

  if (note.id.length === 0) {
    return (
      <Center w="full" h="100%">
        <Text>Select Note</Text>
      </Center>
    )
  }

  return (
    <Flex mx="auto" w="75%" maxW="968px" flexDir="column" align="center">
      {note.id && (
        <Flex w="full" justify="flex-end" transform="translateY(-100%)">
          <DeleteNoteBtn nodeId={note.nodeId} />
        </Flex>
      )}
      <UpdateNoteArea />
    </Flex>
  )
}
