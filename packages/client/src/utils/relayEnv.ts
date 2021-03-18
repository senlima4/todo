import {
  Store,
  Network,
  Environment,
  RecordSource,
  FetchFunction,
} from 'relay-runtime'

const source = new RecordSource()
const store = new Store(source)

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
  store,
  network: Network.create(relayFetcher),
})
