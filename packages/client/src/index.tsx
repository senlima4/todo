import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'jotai'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import relayEnv from './utils/relayEnv'

import './css/extra.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const rootNode = document.getElementById('root')

ReactDOM.render(
  <>
    <ColorModeScript />
    <ChakraProvider>
      <RelayEnvironmentProvider environment={relayEnv}>
        <Provider>
          <App />
        </Provider>
      </RelayEnvironmentProvider>
    </ChakraProvider>
  </>,
  rootNode
)

reportWebVitals()
