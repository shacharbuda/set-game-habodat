import SSE from 'express-sse';
const sse = new SSE();

let players = []

let playersNum

let board

export default {
    sse,
    playersNum,
    players,
    board
}