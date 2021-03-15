import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { loadQuery, RelayEnvironmentProvider } from 'react-relay/hooks'

import relayEnv from './utils/relayEnv'
import AppQueryNode from './__generated__/AppQuery.graphql'

import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <>
    <ColorModeScript />
    <ChakraProvider>
      <RelayEnvironmentProvider environment={relayEnv}>
        <Suspense fallback="Loading...">
          <App
            queryRef={loadQuery(
              relayEnv,
              AppQueryNode,
              {},
              { fetchPolicy: 'network-only' }
            )}
          />
        </Suspense>
      </RelayEnvironmentProvider>
    </ChakraProvider>
  </>,
  document.getElementById('root')
)

reportWebVitals()
