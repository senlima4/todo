import { graphql } from 'babel-plugin-relay/macro'

export const LoginMutationNode = graphql`
  mutation LoginMutation($input: AuthenticateInput!) {
    authenticate(input: $input) {
      jwtToken
    }
  }
`
