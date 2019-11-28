const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Image {
    source: String # Url scalar
    description: String
    thumbnailSource(width: Int, height: Int): String # Url scalar
  }

  enum Currency {
    EUR
    CHF
    USD
  }

  type Price {
    amount: Int
    currency: Currency
  }

  type StockItem {
    productId: String!
    size: String
    quantity: Int
  }

  type Product @cacheControl(maxAge: 300) {
    id: ID!
    name: String
    description(format: String, locale: String): String
    image: Image
    brand: String
    price(currency: String): Price
    stockItems: [StockItem!]!
  }

  type Query {
    product(id: ID!): Product
    productBySlug(slug: String!): Product
  }
`;

const resolvers = {};

const mocks = {
  StockItem: () => ({
    productId: "abc",
    size: "M",
    quantity: 12
  }),
  Price: () => ({
    amount: 1230,
    currency: "EUR"
  }),
  Product: () => ({
    name: "Nike Air Vapormax SuperFly Dope"
  }),
  Image: () => ({
    source:
      "https://www.11teamsports.com/at-de/Data/Images/Big/nike-air-vapormax-flyknit-3-weiss-f102-aj6900.jpg"
  })
};

module.exports = {
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: true,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  })
};
