import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { usePreloadedQuery, PreloadedQuery } from 'react-relay/hooks'

import { AuthQuery } from '@/__generated__/AuthQuery.graphql'

import Login from './Login'
import Register from './Register'

type PropsType = {
  refresh: () => void
  children: JSX.Element
  queryRef: PreloadedQuery<AuthQuery>
}

export default function Auth({ refresh, queryRef, children }: PropsType) {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  const [mode, setMode] = useState('login')
  const data = usePreloadedQuery(
    graphql`
      query AuthQuery {
        currentHuman {
          id
        }
        allHumans {
          nodes {
            username
          }
        }
      }
    `,
    queryRef
  )

  useEffect(() => {
    if (data.allHumans?.nodes.length === 0) {
      setMode('register')
    } else if (!data.currentHuman?.id) {
      setMode('login')
    }
  }, [])

  const onSwitchMode = (newMode: string) => () => setMode(() => newMode)

  const onLoginSuccess = () => {
    refresh()
    onClose()
  }

  const onRegisterSuccess = () => {
    refresh()
    setMode(() => 'login')
  }

  if (data.currentHuman?.id) return children

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      closeOnEsc={false}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent py={4}>
        <ModalHeader textAlign="center">
          {mode === 'login' ? 'Welcome' : 'Create Admin'}
        </ModalHeader>

        <ModalBody>
          {mode === 'login' ? (
            <Login
              toRegister={onSwitchMode('register')}
              onClose={onLoginSuccess}
            />
          ) : (
            <Register
              toLogin={onSwitchMode('login')}
              onRegistered={onRegisterSuccess}
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
