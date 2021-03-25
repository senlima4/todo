import { FiPlusCircle } from 'react-icons/fi'
import { IconButton } from '@chakra-ui/react'
import { useMutation } from 'react-relay/hooks'
import { ConnectionHandler, ROOT_ID, RecordProxy } from 'relay-runtime'
import { graphql } from 'babel-plugin-relay/macro'

import { AddNoteMutation } from '@/__generated__/AddNoteMutation.graphql'

type PropsType = {
  humanId: string
}

export default function AddNote({ humanId }: PropsType) {
  const [commit, isInFlight] = useMutation<AddNoteMutation>(graphql`
    mutation AddNoteMutation($input: CreateNoteInput!) {
      createNote(input: $input) {
        note {
          id
          nodeId
          content
          createdAt
          updatedAt
        }
        noteEdge {
          node {
            id
            nodeId
            content
            updatedAt
            createdAt
          }
        }
      }
    }
  `)

  const onAdd = () => {
    commit({
      variables: {
        input: {
          note: {
            humanId,
            content: 'init',
          },
        },
      },
      updater: store => {
        // eslint-disable-next-line
        const rootRecord = store.get(ROOT_ID) as Readonly<RecordProxy<any>>
        const connectionRecord = ConnectionHandler.getConnection(
          rootRecord,
          'Notes_allNotes'
        )

        if (connectionRecord) {
          const payload = store.getRootField('createNote')
          const serverEdge = payload.getLinkedRecord('noteEdge')

          const newEdge = ConnectionHandler.buildConnectionEdge(
            store,
            connectionRecord,
            serverEdge
          )

          if (newEdge) {
            ConnectionHandler.insertEdgeBefore(connectionRecord, newEdge)
          }
        }
      },
    })
  }

  return (
    <IconButton
      isRound
      size="sm"
      variant="ghost"
      aria-label="add note"
      icon={<FiPlusCircle />}
      onClick={onAdd}
      isLoading={isInFlight}
    />
  )
}
