const Logger = require('./lib/logger');

require('./services/configuration').init();
require('./services/server').init();

require('./app/routes');
