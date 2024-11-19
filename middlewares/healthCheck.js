const healthCheck = (req, res) => {
    res.status(200).send({ status: 'UP' });
  };
  
  module.exports = healthCheck;