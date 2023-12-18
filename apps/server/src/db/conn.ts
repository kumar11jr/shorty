import mongoose from 'mongoose';
require('dotenv').config();

async function connect(){
  return mongoose.connect(`${process.env.DB_KEY}`)
}

// const DB = 'mongodb+srv://kumarshahil828:Randi123@cluster0.9ryvhye.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(DB).then(() => {
//   console.log("Connected to MongoDB");
// }).catch((err: any) => {
//   console.error("Error connecting to MongoDB:", err);
// });

module.exports = {
  connect
}
