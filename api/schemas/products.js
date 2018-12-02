const graphql     = require('graphql');
const backendTest = require('../app/clients/backendtest');

const Products = new graphql.GraphQLObjectType({
  name : 'products',
  fields : {
    id : {
      type : graphql.GraphQLInt
    },
    name : {
      type : graphql.GraphQLString
    },
    price : {
      type : graphql.GraphQLInt
    },
    formattedPrice : {
      type : graphql.GraphQLString,
      resolve : data => {
        console.log(data.price)
        return data.price*1 ? `$${data.price}.00` : '';
      }
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
  resolve : (root, args, req, res, next) => {
    if (args && args.id){ return backendTest.getProducts(args.id) }
    return backendTest.getProducts();
  }
};
