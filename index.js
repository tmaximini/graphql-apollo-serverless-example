const { ApolloServer } = require("apollo-server-lambda");

const schema = require("./schema");

const server = new ApolloServer(schema);

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: "*",
    credentials: false
  },
  endpointURL: "/dev/graphql"
});
