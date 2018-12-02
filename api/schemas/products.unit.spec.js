const graphql = require('graphql');
const chai    = require('chai');
const sinon   = require('sinon');

const Product     = require('./products');
const BackendTest = require('../app/clients/backendtest');

const expect = chai.expect;

const sandbox = sinon.sandbox.create();

describe('Product', () => {
  // Tests
  it('should have an id field of type string', () => {
    expect(Product.type.getFields()).to.have.property('id');
    expect(Product.type.getFields().id.type).to.deep.equals(graphql.GraphQLInt);
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

describe('Resolve', () => {
  beforeEach(() => {
    console.log(BackendTest)
    sandbox.stub(BackendTest, 'getProducts');
  });

  afterEach(() => sandbox.restore());

  it('Should call getProducts', () => {
    Product.resolve(null, { id : 'id' });
    expect(BackendTest.getProducts.calledWith('id')).to.equal(true);;
  });
});
