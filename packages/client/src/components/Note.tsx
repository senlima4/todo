import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { Box, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import { useAtom } from 'jotai'

import { noteAtom } from '@/utils/atom'
import { Note_note$key } from '@/__generated__/Note_note.graphql'

type PropsType = {
  note: Note_note$key
}

export default function Note({ note }: PropsType) {
  const [currentNote, setNote] = useAtom(noteAtom)
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
      bgColor={data.id === currentNote.id ? 'blue.500' : 'black'}
    >
      <Text mb={2} fontSize="sm" noOfLines={2} color="gray.100">
        {data.content}
      </Text>
      <Text fontSize="10px" color="gray.300">
        latest updated at{' '}
        {format(new Date(data.updatedAt as string), 'yyyy-MM-dd hh:mm')}
      </Text>
    </Box>
  )
}
