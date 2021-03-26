import { readInlineData } from 'relay-runtime'
import { graphql } from 'babel-plugin-relay/macro'

export const useAuth = humanRef => {
  const human = readInlineData(
    graphql`
      fragment useAuth_human on Human @inline {
        id
        username
      }
    `,
    humanRef
  )

  return !!human
}
