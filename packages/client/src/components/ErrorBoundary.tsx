import React from 'react'

type FComponentProps = {
  error: Error
}

type PropsType = {
  children: React.ReactNode
  fallback: React.FC<FComponentProps>
}

type StatesType = {
  error: Error | null
}

export default class ErrorBoundary extends React.Component<
  PropsType,
  StatesType
> {
  constructor(props: PropsType) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch(error: Error | null) {
    this.setState({ error })
  }

  render() {
    const { children, fallback } = this.props
    const { error } = this.state

    if (error) return fallback({ error })
    return children
  }
}
