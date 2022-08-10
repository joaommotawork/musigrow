import express from 'express';
import {
	httpGetAllExamples,
	httpAddNewExample,
	httpDeleteExample,
} from '@routes/examples/examples.controller';

const exampleRouter = express.Router();

exampleRouter.get('/', httpGetAllExamples);
exampleRouter.post('/', httpAddNewExample);
exampleRouter.delete('/:id', httpDeleteExample);

export default exampleRouter;
