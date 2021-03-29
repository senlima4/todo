import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { useColorModeValue, Text, ListItem } from '@chakra-ui/react'
import { add, format } from 'date-fns'
import { useCallback } from 'react'
import { useAtom } from 'jotai'

import { noteAtom } from '@/utils/atom'
import { Note_note$key } from '@/__generated__/Note_note.graphql'

type PropTypes = {
  note: Note_note$key
}

export default function NoteItem({ note }: PropTypes) {
  const [currentNoteId, focusNote] = useAtom(noteAtom)
  const blockBg = useColorModeValue('gray.100', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const data = useFragment(
    graphql`
      fragment Note_note on Note {
        id
        nodeId
        content
        updatedAt
      }
    `,
    note
  )
  const isSelected = useCallback(() => data.id === currentNoteId, [
    currentNoteId,
  ])

  const onSelect = () => {
    focusNote(data.id as string)
  }

  return (
    <ListItem
      px={4}
      py={3}
      role="option"
      onClick={onSelect}
      aria-selected={isSelected()}
      color={isSelected() ? 'white' : textColor}
      bgColor={isSelected() ? 'blue.500' : blockBg}
    >
      <Text mb={2} fontSize="sm" noOfLines={2} userSelect="none">
        {data.content}
      </Text>
      <Text fontSize="10px" userSelect="none">
        latest updated at{' '}
        {format(
          add(new Date(data.updatedAt as string), { hours: 8 }),
          'yyyy-MM-dd kk:mm'
        )}
      </Text>
    </ListItem>
  )
}
