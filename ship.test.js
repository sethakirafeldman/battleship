
const gameFunc = require("./ship");
const ship = gameFunc.ship;
const placeShip = gameFunc.placeShip;
const gamePieces = gameFunc.gamePieces;
const hit = gameFunc.hit;
const isSunk = gameFunc.isSunk;
const players = gameFunc.players;
// const board = gameFunc.gameBoard;

test('ship test', () =>{
    expect(ship(gamePieces.destroyer,"['d6','d7']","playerOne")).toEqual("");
});

test('ship gen', ()=> {
    expect(placeShip(gamePieces.carrier, ['A1', 'A2', 'A3', 'A4', 'A5'], "player 1")).toEqual({"boardLocation": ["A1", "A2", "A3", "A4", "A5"], "gamePiece": ["carrier", 5], "player": "player 1", "status": {}});
});

test('hit test', () => {
    expect(hit("A","1")).toEqual("A1 has been hit");
});


test('miss test', () => {
    expect(hit("D","1")).toEqual("miss");
});

// test('sunk check', ()=> {
//     expect(isSunk()).toEqual("something");
// });

test('players', () => {
    expect(console.log(players.playerOne)).toBe("test");
});