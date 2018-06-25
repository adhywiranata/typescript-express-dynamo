import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as morgan from 'morgan';

import routes from './routes';

const app = express();


if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('combined'));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', routes);

export default app;

