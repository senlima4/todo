import {
  Store,
  Network,
  Environment,
  RecordSource,
  FetchFunction,
} from 'relay-runtime'

const relayFetcher: FetchFunction = async (params, variables) => {
  const response = await fetch('http://localhost:8000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
  network: Network.create(relayFetcher),
  store: new Store(new RecordSource()),
})
