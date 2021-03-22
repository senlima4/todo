import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { Box, Text } from '@chakra-ui/react'
import { format } from 'date-fns'

import { Note_note$key } from '@/__generated__/Note_note.graphql'

type PropsType = {
  note: Note_note$key
}

export default function Note({ note }: PropsType) {
  const data = useFragment(
    graphql`
      fragment Note_note on Note {
        id
        content
        createdAt
        updatedAt
      }
    `,
    note
  )

  return (
    <Box px={2} py={3}>
      <Text mb={2} noOfLines={2}>
        {data.content}
      </Text>
      <Text fontSize="xs">
        latest updated at{' '}
        {format(new Date(data.updatedAt as string), 'yyyy-MM-dd hh:mm')}
      </Text>
    </Box>
  )
}
