import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import exampleRouter from '@routes/examples/examples.router';

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(morgan('combined'));

app.use(express.json());

app.use('/examples', exampleRouter);

export default app;
