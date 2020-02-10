import  express from 'express';
const router = express.Router();
import globals from '../globals'

/* GET home page. */
router.get('/', function(req, res, next) {
  globals.sse.send('hello', 'move')
  res.json({ keyZoe: 'valZoe' });
});


export default router

