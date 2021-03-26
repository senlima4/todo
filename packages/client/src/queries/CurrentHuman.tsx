import { graphql } from 'babel-plugin-relay/macro'

export const CurrentHumanQueryNode = graphql`
  query CurrentHumanQuery {
    currentHuman {
      id
    }
  }
`
