const { RESTDataSource } = require('apollo-datasource-rest');

class TagsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.quotable.io/';
    this.initialize({})
  }


  
  tagReducer(quote) {
    return {
      id: quote._id|| 0,
    //   cursor: `${launch.launch_date_unix}`,
      tag: quote.name,
    //   author:quote.author      
    };
  }

  


   
  async getAllTags() {
    console.log(1)
  const response = await this.get('tags');
  console.log(response)
  return Array.isArray(response)
    ? response.map(tag => this.tagReducer(tag))
    : [];
}
  
}

module.exports = TagsAPI;