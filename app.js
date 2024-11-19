const express = require('express');
const dotenv = require('dotenv');
const loggerMiddleware = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const securityMiddleware = require('./middlewares/security');
const healthCheck = require('./middlewares/healthCheck');
const exampleRoutes = require('./routes/exampleRoutes');
const { connectMongoDB, connectPostgres, connectRedis } = require('./utils/db');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(loggerMiddleware);
securityMiddleware(app);

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API Information',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', exampleRoutes);
app.get('/health', healthCheck);

app.use(errorHandler);

connectMongoDB();
const postgresPool = connectPostgres();
const redisClient = connectRedis();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});