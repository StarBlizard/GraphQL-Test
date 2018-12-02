const path               = require('path');
const { app }            = require(path.join(process.env.PWD, '/services/server'));
const { alive }          = require('./controllers/main');
const productsController = require('./controllers/products');

/*
 *  Controllers
 * */

// Views

// WatchDog
app.get('/alive', alive);

// Products
app.get('/products/get' , productsController.get);
// app.post('/products/add', productsController.add);
// app.post('/removeProduct', productsController.remove);
