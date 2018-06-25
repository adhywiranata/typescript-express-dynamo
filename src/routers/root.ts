import * as express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
  res.json({
    'Output': 'WELCOME TO API'
  });
});

export default router;