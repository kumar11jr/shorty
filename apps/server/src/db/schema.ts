const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const ShortSchema = new Schema({
  url: { type: String, required: true },
  hashcode: { type: String, required: true },
});

export const Shortner = Mongoose.model('shortner', ShortSchema);
