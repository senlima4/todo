import { useAtom } from 'jotai'
import { useMutation } from 'react-relay/hooks'
import {
  Text,
  Flex,
  Center,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRef, useState, useEffect, ChangeEventHandler } from 'react'

import { UpdateNoteMutation } from '@/__generated__/UpdateNoteMutation.graphql'
import { UpdateNoteMutationNode } from '@/mutations/UpdateNote'
import { noteAtom } from '@/utils/atom'

export default function NoteEditor() {
  const sender = useRef<number | null>(null)
  const saveHintColor = useColorModeValue('gray.700', 'gray.300')
  const [note, setNote] = useAtom(noteAtom)
  const [saving, setSaving] = useState(false)
  const [firstLoad, setFirst] = useState(true)
  const [commit] = useMutation<UpdateNoteMutation>(UpdateNoteMutationNode)

  useEffect(() => {
    if (sender.current) clearTimeout(sender.current)
    if (!firstLoad) {
      setSaving(true)
      sender.current = window.setTimeout(
        () =>
          commit({
            variables: {
              input: {
                nodeId: note.nodeId,
                notePatch: {
                  id: note.id,
                  content: note.content,
                },
              },
            },
            optimisticResponse: {
              note: {
                id: note.id,
                content: note.content,
                updatedAt: new Date().toISOString(),
              },
            },
            onCompleted: () => {
              setSaving(false)
            },
          }),
        1000
      )
    }
  }, [note])

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
    if (firstLoad) setFirst(false)
    setNote({ ...note, content: e.target.value })
  }

  if (note.id.length === 0) {
    return (
      <Center w="full" h="100%">
        <Text>Select Note</Text>
      </Center>
    )
  }

  return (
    <Flex
      pos="relative"
      mx="auto"
      w="75%"
      maxW="968px"
      align="center"
      flexDir="column"
    >
      {saving && (
        <Text
          top={0}
          right={0}
          pos="absolute"
          color={saveHintColor}
          transform="translateY(-100%)"
        >
          Saving..
        </Text>
      )}
      <Textarea value={note.content} onChange={onChange} />
    </Flex>
  )
}
