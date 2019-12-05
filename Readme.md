# serverless graphql server

Powered by [Apollo Server Lambda](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-lambda) -
Check [the docs here](https://www.apollographql.com/docs/apollo-server/deployment/lambda/)

## Installation

run `npm install` or `yarn`

## npm scripts

`npm run dev`: start graphiql dev server

## deployment

### via serverless

install [serverless](https://serverless.com/):
`npm i -g serverless`

run `sls deploy`

### via aws-cli

(make sure you have your [aws-cli](https://aws.amazon.com/de/cli/) setup and configured)

run `./deploy.sh`

### AWS Setup

The resolver currently fetches Data from a DynamoDB, you'll need to setup your AWS credentials for local testing in a `.env` file or add IAM permissions accordingly on the deployed lambda on the AWS console.
