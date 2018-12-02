const graphql  = require('graphql');
const Products = require('./products');

module.exports = new graphql.GraphQLSchema({
  query : new graphql.GraphQLObjectType({
    name : 'Query',
    fields : {
      product : Products
    },
    resolve : Products.resolve
  })
});
