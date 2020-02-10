import cardsStack from '../cardsStack';
import { initCardsDeck } from "../util/cardsUtil";
import globals from '../globals'
import { NUMBERS_OF_CARDS_IN_BOARD } from '../consts';

export default {
    getNextCards(nNextCards) {
        const nextCards = cardsStack.stack.splice(0, nNextCards);

        // Let client know of cards left in stack, as it recieves new cards.
        globals.sse.send(cardsStack.stack.length, 'cardsCount');

        return (nextCards)
    },
    // Use when board is refreshed as no combinations are found
    addBackCards(cardsArr) {
        cardsArr.forEach(element => {
            cardsStack.stack.push(element);
        });
    },
    getGlobalBoard() {
        if (!globals.board) {
            globals.board = this.getNextCards(NUMBERS_OF_CARDS_IN_BOARD);
        }
        
        // Let client know of cards left in stack, as it recieves new cards.
        globals.sse.send(cardsStack.stack.length, 'cardsCount');

        return (globals.board);
    }, 
    restart() {
            cardsStack.stack = initCardsDeck();
    }
}

