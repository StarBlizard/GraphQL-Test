const graphql     = require('graphql');
const backendTest = require('../app/clients/backendtest');

const Products = new graphql.GraphQLObjectType({
  name : 'products',
  fields : {
    id : {
      type : graphql.GraphQLString
    },
    name : {
      type : graphql.GraphQLString
    },
    price : {
      type : graphql.GraphQLInt
    },
    formattedPrice : {
      type : graphql.GraphQLInt,
      resolve : product => product.price ? `$ ${product.price}.00` : ''
    }
  }
});

module.exports = {
  type : Products,
  args : {
    id : {
      type : graphql.GraphQLInt
    }
  },
  resolve : (root, args) => {
    return backendTest.getProducts();
  }
};
