# todo

m from old

docker-compose just for development

### Tech

- Monorepo: lerna
- Database: Postgres
- Code Language: Typescript
- Framework / Library choose:

  - landing: Vanilla
  - product web: React
  - server: Express + PostGraphile

- Bundle tool:
  - landing: vitejs
  - product web: create-react-app
  - server: tsc

### Expect

**Must be GraphQL Relay**

1. Deploy landing to S3
2. Deploy product web to S3
3. Deploy server docker image to AWS ECS
4. Use AWS RDS Postgres for production

### Before you start

You need to change `./db/init.sql` Line 55's `'xyz'` to another random word
