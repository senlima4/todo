import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'jotai'
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import 'draft-js/dist/Draft.css'
import './css/extra.css'

import App from './App'
import relayEnv from './utils/relayEnv'
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
