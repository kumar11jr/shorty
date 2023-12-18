require('dotenv').config()
const model = require("./db/schema")
const express = require('express');
const {connectToDB} = require('./db/conn')


const app = express();
// console.log(process.env.DB_PASS)
connectToDB(`mongodb+srv://kumarshahil828:${process.env.DB_KEY}@cluster0.9ryvhye.mongodb.net/test?retryWrites=true&w=majority`)

app.get('/',(req:any, res:any) => {
  // run()
  res.send("hijkhuygtf")
})


app.get('/api/data', async (req: any, res: any) => {
  const newData = new model({
    url: 'www.google.com',
    hashcode: 'hello World'
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
