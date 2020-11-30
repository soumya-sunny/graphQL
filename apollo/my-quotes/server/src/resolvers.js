module.exports = {
    Query: {
        quotes: (_, __, { dataSources }) =>
        dataSources.quoteAPI.getAllQuotes(),
    tags: (_, __, { dataSources }) =>
        dataSources.tagAPI.getAllTags()
    }
  };
  