'use strict';

const path        = require('path');
const { graphql } = require('graphql');
const Products    = require(path.join(process.env.PWD, '/schemas/products'));

module.exports.add = (req, res) => {
  let data = req.body;
  Products.create(data).then( () => {
    return res.status(200).send(true);
  });
};

module.exports.get = (req, res) => {
  const graphqlQuery = req.query.graphqlQuery || "{ human(id: '1000') { name height }";

  return graphql(rootSchema, graphqlQuery)
    .then(response => response.data)
    .then((data) => res.json(data))
    .catch((err) => console.error(err));
};
