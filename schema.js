const { gql } = require("apollo-server-lambda");

const { getArticleById, getArticleBySlug } = require("./resolvers/article");

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
    description: String
    imageUrl: String
    brand: String
    price: Float
    price_rrp: Float
    slug: String
    # stockItems: [StockItem!]!
  }

  type Query {
    product(id: ID!): Product
    productBySlug(slug: String!): Product
  }
`;

const resolvers = {
  Query: {
    product(obj, args, context, info) {
      return getArticleById(args.id);
    },
    productBySlug(obj, args, context, info) {
      return getArticleBySlug(args.slug);
    }
  }
};

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
  Image: () => ({
    source:
      "https://www.11teamsports.com/at-de/Data/Images/Big/nike-air-vapormax-flyknit-3-weiss-f102-aj6900.jpg"
  })
};

module.exports = {
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: false,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  })
};
