import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as uuidv4 from 'uuid/v4';
import { map } from 'lodash';

const app = express();

import { model } from './models';
import {
  objectKeysPascalToCamel,
  objectKeysCamelToPascal,
} from './utils/formatter';

app.use(bodyParser.json());

let PRODUCT_TABLE = 'DB.Dev.Products';

if (process.env.NODE_ENV === 'production') {
  PRODUCT_TABLE = 'DB.Prod.Products';
}

app.get('/products', async (req, res) => {
  try {
    const products = await model(PRODUCT_TABLE).findAll();
    res.json(map(products, objectKeysPascalToCamel));
  } catch(err) {
    res.json({ err });
  }
});

app.post('/products', async (req, res) => {
  const newCourse = {
    courseId: uuidv4(),
    title: req.body.title,
  };

  try {
    await model(PRODUCT_TABLE).put(objectKeysCamelToPascal(newCourse));
    res.json(newCourse);
  } catch (err) {
    res.json({ err });
  }
});

app.get('/products/:courseId', async (req, res) => {
  try {
    const course = await model(PRODUCT_TABLE).findByKey({ CourseId: req.params.courseId });
    res.json(objectKeysPascalToCamel(course));
  } catch(err) {
    res.json({ err });
  }
});

app.delete('/products/:courseId', async (req, res) => {
  try {
    const resp = await model(PRODUCT_TABLE).delete({ CourseId: req.params.courseId });
    res.json(resp);
  } catch (err) {
    res.json({ err });
  }
});

app.get('/', (req, res) => {
  res.json({
    'Output': 'THIS IS A SAMPLE API'
  });
});

export default app;

