import { useAtom } from 'jotai'
import { useMutation } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { Flex, Text, Textarea } from '@chakra-ui/react'
import { useRef, useState, useEffect, ChangeEventHandler } from 'react'

import { noteAtom } from '@/utils/atom'
import { UpdateNoteMutation } from '@/__generated__/UpdateNoteMutation.graphql'

export default function UpdateNote() {
  const sender = useRef<number | null>(null)
  const [note, setNote] = useAtom(noteAtom)
  const [firstLoad, setFirst] = useState(true)
  const [saving, setSaving] = useState(false)
  const [commit] = useMutation<UpdateNoteMutation>(graphql`
    mutation UpdateNoteMutation($input: UpdateNoteInput!) {
      updateNote(input: $input) {
        note {
          id
          nodeId
          content
          createdAt
          updatedAt
        }
      }
    }
  `)

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
    setNote({
      ...note,
      content: e.target.value,
    })
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
        <Text pos="absolute" color="gray.300" top={0} right={4}>
          Saving..
        </Text>
      )}
      <Textarea value={note.content} onChange={onChange} />
    </Flex>
  )
}
