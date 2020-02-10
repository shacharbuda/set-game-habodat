import  express from 'express';
const router = express.Router();
import globals from '../globals';
import {NUMBERS_OF_CARDS_IN_BOARD} from '../consts';
import cardService from '../BL/cardService';

router.put('/restart',  (req, res, next) => {
    try{globals.playersNum = null;
    globals.players = [];
    cardService.restart()
    globals.board = null;
    res.send();}
    catch(e) {
        console.log(e)
    }
  })

router.post('/players', function(req, res, next) {
    if(!globals.playersNum) {
        globals.playersNum = req.body.playersNum
    }
    if (globals.players.length < globals.playersNum) {
        globals.players.push({name: req.body.name, points: 0})
    }

    if(globals.players.length == globals.playersNum) {
        globals.sse.send(globals.players, 'play')
    }

    res.send();
});


export default router

