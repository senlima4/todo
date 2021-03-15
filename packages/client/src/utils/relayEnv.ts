import {
  Store,
  Network,
  Environment,
  RecordSource,
  FetchFunction,
} from 'relay-runtime'

type FetcherHeaderType = Record<string, string>

const relayFetcher: FetchFunction = async (params, variables) => {
  const token = localStorage.getItem('todo_access')

  const headers: FetcherHeaderType = {
    'Content-Type': 'application/json',
  }

  if (token) headers.Authorization = `Bearer ${token}`

  const response = await fetch('http://localhost:8000/graphql', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  })

  const result = await response.json()

  if (Array.isArray(result.errors)) {
    throw new Error(
      `Error fetching GraphQL query '${
        params.name
      }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
        result.errors
      )}`
    )
  }

  return result
}

export default new Environment({
  network: Network.create(relayFetcher),
  store: new Store(new RecordSource()),
})
