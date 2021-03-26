import { useEffect } from 'react'
import { FragmentRef } from 'react-relay'
import { useNavigation } from 'react-navi'
import { readInlineData } from 'relay-runtime'
import { graphql } from 'babel-plugin-relay/macro'

import {
  useAuth_human,
  useAuth_human$data,
} from '@/__generated__/useAuth_human.graphql'

export const useAuth = (humanRef: FragmentRef<useAuth_human>) => {
  const navigation = useNavigation()
  const human = readInlineData<useAuth_human$data>(
    graphql`
      fragment useAuth_human on Human @inline {
        id
        username
      }
    `,
    humanRef
  )

  const isAuthenticated = !!human

  useEffect(() => {
    if (!isAuthenticated) navigation.navigate('/login')
  }, [])

  return human
}
