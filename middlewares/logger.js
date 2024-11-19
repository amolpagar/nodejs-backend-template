const morgan = require('morgan');
const logger = require('../config/loggerConfig');

const stream = {
  write: (message) => logger.info(message.trim()),
};

const loggerMiddleware = morgan('combined', { stream });

module.exports = loggerMiddleware;