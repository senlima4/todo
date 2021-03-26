import { graphql } from 'babel-plugin-relay/macro'

export const AllHumansQueryNode = graphql`
  query AllHumansQuery {
    allHumans {
      totalCount
    }
  }
`
