const { ApolloServer, gql } = require('apollo-server');

const typeDefs = require('./schema');
const QuoteAPI=require('./datasources/quote');
const TagsAPI=require('./datasources/tag');
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs,resolvers, dataSources: () => ({
  quoteAPI: new QuoteAPI(),
  tagAPI: new TagsAPI(),
  // userAPI: new UserAPI({ store })
}) });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

  