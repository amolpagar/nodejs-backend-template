require('dotenv').config();

const dbConfig = {
  mongoURI: process.env.MONGO_URI,
  postgresURI: process.env.POSTGRES_URI,
  redisURI: process.env.REDIS_URI,
};

module.exports = dbConfig;