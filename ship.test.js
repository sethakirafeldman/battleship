
const gameFunc = require("./ship");
const ship = gameFunc.ship;
const board = gameFunc.gameBoard.board;

// const xAx = [1,2,3,4,5,6,7,8];
// const yAx = ["A","B", "C", "D", "E", "F", "G"];

test('ship test', () =>{
    expect(ship("2","OK", "['d6','d7']")).toEqual({"length": "2", "status": "OK", "boardLocation":"['d6','d7']"});
});

// test('board test', ()=> {
//     expect(board(xAx, yAx)).toEqual({"x": xAx, "y": yAx});
// });