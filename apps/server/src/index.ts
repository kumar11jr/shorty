require('dotenv').config();
const { Shortner } = require('./db/schema');
import Express from "express";
const { connectDB } = require('./db/conn');
import {TypedRequestBody} from './types/ITypedReq'

const app = Express();

connectDB();

app.get('/', (_req: Express.Request, res: Express.Response) => {
  res.status(200).send("OK");
});

app.get('/api/data', async (_req: TypedRequestBody<{url: string, hashcode: string}>, res: Express.Response) => {
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
