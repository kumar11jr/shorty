require('dotenv').config();
const { Shortner } = require('./db/schema');
import Express from "express";
const { connectDB } = require('./db/conn');
import {TypedRequestBody} from './types/ITypedReq'

const app = Express();
app.use(Express.json());
connectDB();

app.get('/', (_req: Express.Request, res: Express.Response) => {
  res.status(200).send("OK");
});


app.post('/api/data', async (req: TypedRequestBody<{url: string, hashcode: string}>, res: Express.Response) => {
  try{
    const userInput = {
      url: req.body.url,
      hashcode: req.body.hashcode
    };
  
    const short = await Shortner.create(userInput);

    res.status(201).send(short);
  }catch(err:any){
    res.status(400).send("Error")
  }
});

app.listen(4000);
