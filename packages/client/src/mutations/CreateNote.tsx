import { graphql } from 'babel-plugin-relay/macro'
import { ROOT_ID, RecordProxy, ConnectionHandler } from 'relay-runtime'

export const CreateNoteMutationNode = graphql`
  mutation CreateNoteMutation($input: CreateNoteInput!) {
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
`

export const CreateNoteUpdater = store => {
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
}
