require('dotenv').config();
const { Shortner } = require('./db/schema');
import Express from 'express';
const { connectDB } = require('./db/conn');
import { TypedRequestBody } from './types/ITypedReq';
const cors = require('cors');
const bodyParser = require('body-parser');

const app = Express();
app.use(Express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


connectDB();

app.get('/', (_req: Express.Request, res: Express.Response) => {
	res.status(200).json({ msg: 'Ok Success' });
});

app.post('/api/data', async (req: TypedRequestBody<{ url: string; hashcode: string }>, res: Express.Response) => {
	try {
		// Inserts Data into the Db along with the Hashcode.
		const userInput = {
			url: req.body.url,
			hashcode: req.body.hashcode,
		};
		const short = await Shortner.create(userInput);

		res.status(201).send(short);
	} catch (err: any) {
		res.status(400).send('Error');
	}
});

app.post('/redirect', async (req: TypedRequestBody<{ hashcode: string }>, res: Express.Response) => {
	try {
		//returns The data according to the hashcode.
		const url = req.body.hashcode;
		const data = await Shortner.find({ hashcode: url });
		res.status(200).send(data);
	} catch (err: any) {
		res.status(404).send('No data available');
	}
});

app.get('/all', async (req: Express.Request, res: Express.Response) => {
	try {
		const data = await Shortner.find({});
		res.status(200).send(data);
	} catch (error) {
		res.status(400).send('error');
	}
});

app.listen(4000);
