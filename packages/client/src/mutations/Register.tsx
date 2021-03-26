import { graphql } from 'babel-plugin-relay/macro'

export const RegisterMutationNode = graphql`
  mutation RegisterMutation($input: RegisterHumanInput!) {
    registerHuman(input: $input) {
      human {
        username
      }
    }
  }
`
