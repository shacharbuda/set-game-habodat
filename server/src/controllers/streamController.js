import express from 'express';
const router = express.Router();
import globals from '../globals'

router.get('/', globals.sse.init);

export default router;
