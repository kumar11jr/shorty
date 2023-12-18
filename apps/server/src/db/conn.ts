const Mongoose = require('mongoose');
require('dotenv').config();

const uri = `${process.env.DB_KEY}`;

export const connectDB = async () => {
  await Mongoose.connect(uri);
};
