import { graphql } from 'babel-plugin-relay/macro'

export const DeleteNoteMutationNode = graphql`
  mutation DeleteNoteMutation($input: DeleteNoteInput!) {
    deleteNote(input: $input) {
      deletedNoteId @deleteRecord
    }
  }
`
