
const gameFunc = require("./ship");
const genShip = gameFunc.genShip;
const placeShip = gameFunc.placeShip;
const gamePieces = gameFunc.gamePieces;
const hit = gameFunc.hit;
const isSunk = gameFunc.isSunk;
const players = gameFunc.players;
// const board = gameFunc.gameBoard;
const objTest = (obj) => {
    return obj;
};

test('ship test', () =>{
    expect(genShip(gamePieces.destroyer,"['d6','d7']","playerOne")).toEqual({"boardLocation": "['d6','d7']", "gamePiece": ["destroyer", 2], "player": "playerOne", "status": {}});
});

// test('obj test', () => {
//     expect(objTest(players.playerOne.ships)).toEqual([]);
// });


test('ship place', ()=> {
    expect(placeShip(gamePieces.carrier, ['A1', 'A2', 'A3', 'A4', 'A5'], "playerOne")).toEqual({"boardLocation": ["A1", "A2", "A3", "A4", "A5"], "gamePiece": ["carrier", 5], "player": "playerOne", "status": {}});
});

test('hit test', () => {
    expect(hit("playerOne","A","1")).toEqual("A1 has been hit");
});


test('miss test', () => {
    expect(hit("playerOne","D","1")).toEqual("miss");
});

// test('sunk check', ()=> {
//     expect(isSunk()).toEqual("something");
// });

// test('players', () => {
//     expect(console.log(players.playerOne)).toBe("test");
// });