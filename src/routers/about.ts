import * as express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
  res.json({
    'Output': 'THIS IS ABOUT'
  });
});

export default router;