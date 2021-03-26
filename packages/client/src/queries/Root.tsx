import { graphql } from 'babel-plugin-relay/macro'

export const RootQueryNode = graphql`
  query RootQuery {
    ...NotesList_query
    allHumans {
      totalCount
    }
    currentHuman {
      ...useAuth_human
    }
  }
`
