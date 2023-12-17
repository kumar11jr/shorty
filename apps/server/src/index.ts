import { Collection } from 'mongoose';
import run from './db/conn'
import data from './db/schema';
const express = require('express');

const app = express();

app.get('/',(req:any, res:any) => {
  run()
  res.send("hijkhuygtf")
})


app.get('/api/data',async(req:any,res:any)=>{
  try {
    run(); // Assuming this connects to MongoDB (run your connection logic)
    
    // Assuming "Collection" is your Mongoose model
    data.insertOne({url:"www.google.com",hashcode:"hdsdgvsdglg"});
    console.log("insett")
    // Retrieve all data from the collection
    // res.json(data); // Send retrieved data as JSON
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
})

app.listen(8080);
