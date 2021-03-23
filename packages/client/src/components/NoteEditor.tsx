import { useAtom } from 'jotai'
import { Flex, Center, Text, Textarea } from '@chakra-ui/react'

import { noteAtom } from '@/utils/atom'

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
      <Textarea defaultValue={note.content} />
    </Flex>
  )
}
