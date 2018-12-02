const graphql = require('graphql');
const chai    = require('chai');

const Product = require('./products');

const expect = chai.expect;

describe('Product', () => {
  // Tests
  it('should have an id field of type string', () => {
    expect(Product.type.getFields()).to.have.property('id');
    expect(Product.type.getFields().id.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a name field of type String', () => {
    expect(Product.type.getFields()).to.have.property('name');
    expect(Product.type.getFields().name.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a price field of type Integer', () => {
    expect(Product.type.getFields()).to.have.property('price');
    expect(Product.type.getFields().price.type).to.deep.equals(graphql.GraphQLInt);
  });
});
