const exampleService = require('../services/exampleService');

const getExample = async (req, res) => {
  try {
    const data = await exampleService.getExampleData();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data' });
  }
};

module.exports = { getExample };