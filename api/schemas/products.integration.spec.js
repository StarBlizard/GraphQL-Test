'use strict';

const request           = require('request-promise');
const integrationServer = require("../lib/integrationServer");
const chai              = require('chai');

const expect = chai.expect;

describe('Product integration', () => {
  let app;

  beforeEach((done) => {
    app = integrationServer.start(done);
  });

  afterEach((done) => {
    integrationServer.stop(app, done);
  });

 it('Should resolve shirt', () => {
    const query = `{
      product(id:1) {
        id
        name
        price
        formattedPrice
      }
    }`;

    const expected = {
      "product": {
        "id": 1,
        "name": "shirt",
        "price": 150,
        "formattedPrice": "$150.00",
      }
    };

    return integrationServer
      .graphqlQuery(app, query)
      .then((response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.have.deep.equals(expected);
      });
  });

  /*
  it('Should resolve 20 pokemons', () => {
    const query = `{
      pokemons {
        id
        name
        order
        img
      }
    }`;

    const firstPokemon = {
      "id": "1",
      "name": "bulbasaur",
      "order": 1,
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    };

    return integrationServer
      .graphqlQuery(app, query)
      .then((response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.body.pokemons[0]).to.deep.equal(firstPokemon);
        expect(response.body.pokemons.length).to.equal(20);
      });
  });
  */
});
