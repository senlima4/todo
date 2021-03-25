import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { useColorModeValue, Box, Text } from '@chakra-ui/react'
import { add, format } from 'date-fns'
import { useCallback } from 'react'
import { useAtom } from 'jotai'

import { noteAtom } from '@/utils/atom'
import { Note_note$key } from '@/__generated__/Note_note.graphql'

type PropsType = {
  note: Note_note$key
}

export default function Note({ note }: PropsType) {
  const [currentNote, setNote] = useAtom(noteAtom)
  const blockBg = useColorModeValue('gray.100', 'gray.900')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const data = useFragment(
    graphql`
      fragment Note_note on Note {
        id
        nodeId
        content
        createdAt
        updatedAt
      }
    `,
    note
  )
  const isSelected = useCallback(() => data.id === currentNote.id, [
    currentNote,
  ])

  const onSelect = () => {
    setNote({
      ...currentNote,
      id: data.id as string,
      nodeId: data.nodeId as string,
      content: data.content as string,
      createdAt: data.createdAt as string,
      updatedAt: data.updatedAt as string,
    })
  }

  return (
    <Box
      px={4}
      py={3}
      onClick={onSelect}
      color={isSelected() ? 'white' : textColor}
      bgColor={isSelected() ? 'blue.500' : blockBg}
    >
      <Text mb={2} fontSize="sm" noOfLines={2}>
        {data.content}
      </Text>
      <Text fontSize="10px">
        latest updated at{' '}
        {format(
          add(new Date(data.updatedAt as string), { hours: 8 }),
          'yyyy-MM-dd kk:mm'
        )}
      </Text>
    </Box>
  )
}
