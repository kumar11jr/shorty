require('dotenv').config();
const { Shortner } = require('./db/schema');
const express = require('express');
const { connectDB } = require('./db/conn');

const app = express();

connectDB();

app.get('/', (req: any, res: any) => {
  res.send('This is Test Route');
});

app.get('/api/data', async (req: any, res: any) => {
  const newData = new Shortner({
    url: 'www.google.com',
    hashcode: 'oggo.cm',
  });

  newData
    .save()
    .then((savedData: any) => {
      console.log('Saved:', savedData);
    })
    .catch((error: any) => {
      console.error('Error saving data:', error);
    });
  res.send('okiee');
});

app.listen(4000);
