const request = require('request-promise');
const path    = require('path');
const Promise = require('bluebird');

const BASE_PATH = 'http://localhost:3000';

function getProducts(id) {
  return request({
    uri    : `${BASE_PATH}/getProducts?id=${id}`,
    method : 'GET',
    json   : true
  });
};

function addProducts(data) {
  return request({
    uri    : `${BASE_PATH}/addProducts`,
    method : 'POST',
    json   : true,
    data
  });
};

module.exports = {
  getProducts,
  addProducts
};
