const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  name: String,
  value: Number,
});

const Example = mongoose.model('Example', exampleSchema);

module.exports = Example;