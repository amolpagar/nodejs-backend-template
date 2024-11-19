const securityConfig = require('../config/securityConfig');

const securityMiddleware = (app) => {
  securityConfig(app);
};

module.exports = securityMiddleware;