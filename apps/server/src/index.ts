require('dotenv').config()
const model = require("./db/schema")
const express = require('express');
const {connect} = require('./db/conn')


const app = express();

connect();

app.get('/',(req:any, res:any) => {
  res.send("hijkhuygtf")
})


app.get('/api/data', async (req: any, res: any) => {
  const newData = new model({
    url: 'www.google.com',
    hashcode: 'gg.com'
  });
  
  
  newData.save()
    .then((savedData: any) => {
      console.log('Saved:', savedData);
    })
    .catch((error: any) => {
      console.error('Error saving data:', error);
    });

    res.send('okiee')
});


app.listen(4000);
