
const gameFunc = require("./ship");
const ship = gameFunc.ship;
const placeShip = gameFunc.placeShip;
const gamePieces = gameFunc.gamePieces;
const board = gameFunc.gameBoard.board;

// const xAx = [1,2,3,4,5,6,7,8];
// const yAx = ["A","B", "C", "D", "E", "F", "G"];

test('ship test', () =>{
    expect(ship(gamePieces.destroyer,"OK", "['d6','d7']", "player 1")).toEqual({"boardLocation": "['d6','d7']", "gamePiece": ["destroyer ", 2], "player": "player 1", "status": "OK"});
});

test('ship gen', ()=> {
    expect(placeShip(gamePieces.carrier, "OK", ['A1', 'A2', 'A3', 'A4', 'A5'], "player 1")).toEqual({"A1": {"controlled": "player 1", "length": 5, "type": "carrier"}, "A2": {"controlled": "player 1", "length": 5, "type": "carrier"}, "A3": {"controlled": "player 1", "length": 5, "type": "carrier"}, "A4": {"controlled": "player 1", "length": 5, "type": "carrier"}, "A5": {"controlled": "player 1", "length": 5, "type": "carrier"}, "A6": {"controlled": "no", "type": "open"}, "A7": {"controlled": "no", "type": "open"}, "A8": {"controlled": "no", "type": "open"}, "B1": {"controlled": "no", "type": "open"}, "B2": {"controlled": "no", "type": "open"}, "B3": {"controlled": "no", "type": "open"}, "B4": {"controlled": "no", "type": "open"}, "B5": {"controlled": "no", "type": "open"}, "B6": {"controlled": "no", "type": "open"}, "B7": {"controlled": "no", "type": "open"}, "B8": {"controlled": "no", "type": "open"}, "C1": {"controlled": "no", "type": "open"}, "C2": {"controlled": "no", "type": "open"}, "C3": {"controlled": "no", "type": "open"}, "C4": {"controlled": "no", "type": "open"}, "C5": {"controlled": "no", "type": "open"}, "C6": {"controlled": "no", "type": "open"}, "C7": {"controlled": "no", "type": "open"}, "C8": {"controlled": "no", "type": "open"}, "D1": {"controlled": "no", "type": "open"}, "D2": {"controlled": "no", "type": "open"}, "D3": {"controlled": "no", "type": "open"}, "D4": {"controlled": "no", "type": "open"}, "D5": {"controlled": "no", "type": "open"}, "D6": {"controlled": "no", "type": "open"}, "D7": {"controlled": "no", "type": "open"}, "D8": {"controlled": "no", "type": "open"}, "E1": {"controlled": "no", "type": "open"}, "E2": {"controlled": "no", "type": "open"}, "E3": {"controlled": "no", "type": "open"}, "E4": {"controlled": "no", "type": "open"}, "E5": {"controlled": "no", "type": "open"}, "E6": {"controlled": "no", "type": "open"}, "E7": {"controlled": "no", "type": "open"}, "E8": {"controlled": "no", "type": "open"}, "F1": {"controlled": "no", "type": "open"}, "F2": {"controlled": "no", "type": "open"}, "F3": {"controlled": "no", "type": "open"}, "F4": {"controlled": "no", "type": "open"}, "F5": {"controlled": "no", "type": "open"}, "F6": {"controlled": "no", "type": "open"}, "F7": {"controlled": "no", "type": "open"}, "F8": {"controlled": "no", "type": "open"}, "G1": {"controlled": "no", "type": "open"}, "G2": {"controlled": "no", "type": "open"}, "G3": {"controlled": "no", "type": "open"}, "G4": {"controlled": "no", "type": "open"}, "G5": {"controlled": "no", "type": "open"}, "G6": {"controlled": "no", "type": "open"}, "G7": {"controlled": "no", "type": "open"}, "G8": {"controlled": "no", "type": "open"}});
});




// test('board test', ()=> {
//     expect(board(xAx, yAx)).toEqual({"x": xAx, "y": yAx});
// });