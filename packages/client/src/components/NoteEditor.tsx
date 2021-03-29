import { useAtom } from 'jotai'
import { useRef, useEffect, useCallback } from 'react'
import { useMutation, useLazyLoadQuery } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Flex } from '@chakra-ui/react'

import { noteAtom } from '@/utils/atom'
import { UpdateNoteMutationNode } from '@/mutations/UpdateNote'
import { NoteEditorQuery } from '@/__generated__/NoteEditorQuery.graphql'
import { UpdateNoteMutation } from '@/__generated__/UpdateNoteMutation.graphql'
import NoteBar from './NoteBar'
import NoteInput from './NoteInput'

export default function NoteEditor() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [currentNoteId] = useAtom(noteAtom)
  const [commit, isSaving] = useMutation<UpdateNoteMutation>(
    UpdateNoteMutationNode
  )
  const data = useLazyLoadQuery<NoteEditorQuery>(
    graphql`
      query NoteEditorQuery($id: UUID!) {
        noteById(id: $id) {
          nodeId
          content
        }
      }
    `,
    { id: currentNoteId },
    { fetchPolicy: 'store-and-network' }
  )

  const updateNote = useCallback(() => {
    commit({
      variables: {
        input: {
          nodeId: data.noteById?.nodeId as string,
          notePatch: { content: textareaRef.current?.value },
        },
      },
    })
  }, [currentNoteId])

  useEffect(() => {
    if (textareaRef.current)
      textareaRef.current.value = data.noteById?.content as string
  }, [data, currentNoteId])

  return (
    <Flex w="full" h="full" flexDir="column">
      <NoteBar
        nodeId={data.noteById?.nodeId as string}
        saveFunc={updateNote}
        isSaving={isSaving}
      />
      <Flex
        mx="auto"
        w="75%"
        flex="auto"
        h="100%"
        maxW="968px"
        align="center"
        flexDir="column"
      >
        <NoteInput ref={textareaRef} />
      </Flex>
    </Flex>
  )
}
