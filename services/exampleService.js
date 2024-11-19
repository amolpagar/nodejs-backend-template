const exampleModel = require('../models/exampleModel');

const getExampleData = async () => {
  return await exampleModel.find();
};

module.exports = { getExampleData };