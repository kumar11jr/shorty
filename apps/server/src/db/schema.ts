const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  url: { type: String, required: true },
  hashcode: { type: String, required: true },
});

const data = mongoose.model('data', dataSchema);

module.exports = data;
