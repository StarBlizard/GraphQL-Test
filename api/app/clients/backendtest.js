const request = require('request-promise');
const path    = require('path');
const Promise = require('bluebird');

const BASE_PATH = '0.0.0.0:3000';

function getProducts() {
  return request({
    uri : BASE_PATH,
    json : true
  });
}

module.exports = {
  getProducts
};
