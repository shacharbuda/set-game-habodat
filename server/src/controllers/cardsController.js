import { Router } from 'express';
const router = Router();
import cardService from '../BL/cardService';
import globals from '../globals'


router.put('/set', (req, res, next) => {
  if(req.body.name) {
    let player = globals.players.find(player => player.name == req.body.name);
    console.log(player)
    player.points += 3
  }
  let set = req.body.set;
  let cards = cardService.getNextCards(set.length)
  cards.forEach((card, index) => {
    card.location = set[index]
  });
  globals.sse.send({cards, players: globals.players, locations: set}, 'set');
  res.send();
});

router.get('/board', (req, res, next) => {
  res.send(cardService.getGlobalBoard());
});

export default router;
