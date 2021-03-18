import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { RelayEnvironmentProvider } from 'react-relay/hooks'

import relayEnv from './utils/relayEnv'

import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <>
    <ColorModeScript />
    <ChakraProvider>
      <RelayEnvironmentProvider environment={relayEnv}>
        <App />
      </RelayEnvironmentProvider>
    </ChakraProvider>
  </>,
  document.getElementById('root')
)

reportWebVitals()
