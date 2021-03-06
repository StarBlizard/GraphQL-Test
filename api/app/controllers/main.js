'use strict';

const path = require('path');

module.exports.alive = function(req, res){
  res.status(200).send('Ok');
};

module.exports.index = function(req, res){
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
};

module.exports.home = function(req, res){
  res.sendFile(path.join(__dirname, '../public', 'home.html'));
};
