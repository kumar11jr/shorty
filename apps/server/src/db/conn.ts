import mongoose from 'mongoose';
require('dotenv').config();

async function connect() {
  return mongoose.connect(`${process.env.DB_KEY}`);
}

module.exports = {
  connect,
};
