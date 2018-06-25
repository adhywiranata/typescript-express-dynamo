import * as express from 'express';

const router = express.Router();

import rootRoute from './routers/root';
import aboutRoute from './routers/about';
import productRoute from './routers/product';

router.use('/', rootRoute);
router.use('/products', productRoute);
router.use('/about', aboutRoute);

export default router;