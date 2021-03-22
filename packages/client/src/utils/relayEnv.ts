import {
  Store,
  Network,
  Environment,
  RecordSource,
  FetchFunction,
} from 'relay-runtime'

const relayFetcher: FetchFunction = async (params, variables) => {
  const token = localStorage.getItem('todo-access')
  if (token === 'null') localStorage.removeItem('todo-access')

  const response = await fetch('http://localhost:8000/graphql', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  })

  const result = await response.json()

  return result
}

export default new Environment({
  store: new Store(new RecordSource()),
  network: Network.create(relayFetcher),
})
