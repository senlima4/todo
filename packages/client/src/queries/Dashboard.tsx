import { graphql } from 'babel-plugin-relay/macro'

export const DashboardQueryNode = graphql`
  query DashboardQuery {
    ...NotesList_query
    allHumans {
      totalCount
    }
    currentHuman {
      ...useAuth_human
    }
  }
`
