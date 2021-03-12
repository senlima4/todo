import express from 'express'
import cors from 'cors'
import { postgraphile } from 'postgraphile'

const { PORT, NODE_ENV, SECRET_KEY, DATABASE_URL } = process.env

const isDev = NODE_ENV === 'development'

const app = express()

app.use(cors())
app.use(
  postgraphile(
    DATABASE_URL || 'postgresql://root:password@localhost:5432/todos',
    ['app_public', 'app_private'],
    {
      allowExplain: true,
      dynamicJson: true,
      enhanceGraphiql: isDev,
      exportGqlSchemaPath: `${__dirname}/schema.graphql`,
      extendedErrors: ['hint', 'detail', 'errcode'],
      graphiql: isDev,
      ignoreRBAC: false,
      jwtPgTypeIdentifier: 'app_public.jwt_token',
      jwtSecret: SECRET_KEY || 'random-secret-word',
      legacyRelations: 'omit',
      pgDefaultRole: 'anonymous_human',
      setofFunctionsContainNulls: false,
      showErrorStack: 'json',
      subscriptions: true,
      sortExport: true,
      watchPg: isDev,
    }
  )
)

app.listen(parseInt(PORT, 10) || 8000, () => {
  console.log('listening on port 8000')
})
