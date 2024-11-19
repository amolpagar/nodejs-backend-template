const helmet = require('helmet');

const securityConfig = (app) => {
  app.use(helmet());
};

module.exports = securityConfig;
