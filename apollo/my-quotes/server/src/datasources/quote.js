const { RESTDataSource } = require('apollo-datasource-rest');

class QuoteAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.quotable.io/';
    this.initialize({})
  }

  quoteReducer(quote) {
    return {
      id: quote._id|| 0,
    //   cursor: `${launch.launch_date_unix}`,
      content: quote.content,
      author:quote.author      
    };
  }
  
  
  
  async getAllQuotes() {
    const response = await this.get('quotes');
    return Array.isArray(response.results)
      ? response.results.map(quote => this.quoteReducer(quote))
      : [];
  } 
  
}

module.exports = QuoteAPI;