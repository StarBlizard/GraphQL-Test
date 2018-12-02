'use strict';

const path        = require('path');
const { graphql } = require('graphql');
const Products    = require(path.join(process.env.PWD, '/schemas/products'));
const rootSchema  = require('../../schemas/root');

/*
module.exports.add = (req, res) => {
  const graphqlQuery = req.body.query;

  if (!graphqlQuery) { return res.status(500).send("You must specify your product fields"); }

  return graphql(rootSchema, graphqlQuery)
    .then(response => response.data)
    .then(data => res.status(200).send(data))
    .catch((err) => { return res.status(500).send(error) });
};
*/

module.exports.get = (req, res) => {
  const graphqlQuery = req.query.query || "{ product { id name price } }";

  return graphql(rootSchema, graphqlQuery)
    .then(response => response.data)
    .then(data => res.status(200).send(data))
    .catch((err) => { return res.status(500).send(error) });
};
