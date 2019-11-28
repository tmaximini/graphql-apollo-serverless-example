# serverless graphql server

Powered by [Apollo Server Lambda](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-lambda)
See https://www.apollographql.com/docs/apollo-server/deployment/lambda/ for docs

## Installation

run `npm install` or `yarn`

install [serverless](https://serverless.com/):
`npm i -g serverless`

## npm scripts

`npm run dev`: start graphiql dev server

## deployment

run `sls deploy`

(make sure you have your [aws-cli](https://aws.amazon.com/de/cli/) setup and configured)

## dev endpoint

https://7nilhhyhq2.execute-api.us-east-1.amazonaws.com/dev/graphql

example query:

```graphql
{
  product(id: "abc") {
    image {
      source
    }
    name
    price {
      amount
      currency
    }
    stockItems {
      quantity
      size
    }
  }
}
```
