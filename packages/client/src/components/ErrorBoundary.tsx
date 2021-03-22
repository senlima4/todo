import React from 'react'

type PropsType = {
  children: React.ReactNode
}

type StatesType = {
  error: Record<string, string> | null
}
export default class ErrorBoundary extends React.Component<
  PropsType,
  StatesType
> {
  constructor(props: PropsType) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    const { children } = this.props
    const { error } = this.state

    if (error != null) {
      return (
        <div>
          <div>Error: {error.message}</div>
          <div>
            <pre>{JSON.stringify(error.source, null, 2)}</pre>
          </div>
        </div>
      )
    }

    return children
  }
}
