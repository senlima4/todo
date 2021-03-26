import { graphql } from 'babel-plugin-relay/macro'

export const UpdateNoteMutationNode = graphql`
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
`
