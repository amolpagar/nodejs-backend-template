const mongoose = require('mongoose');
const { Pool } = require('pg');
const redis = require('redis');
const dbConfig = require('../config/dbConfig');

const connectMongoDB = async () => {
  try {
    await mongoose.connect(dbConfig.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

const connectPostgres = () => {
  const pool = new Pool({ connectionString: dbConfig.postgresURI });
  pool.on('connect', () => {
    console.log('Postgres connected');
  });
  return pool;
};

const connectRedis = () => {
  const client = redis.createClient({ url: dbConfig.redisURI });
  client.on('connect', () => {
    console.log('Redis connected');
  });
  return client;
};

module.exports = { connectMongoDB, connectPostgres, connectRedis };