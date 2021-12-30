// // ship obj properties:
// length
// where hit 
// sunk or not sunk
//https://www.hasbro.com/common/instruct/Battleship.PDF
const gameBoardObj = {};
const ships = [];

const xAx = [1,2,3,4,5,6,7,8];
const yAx = ["A","B", "C", "D", "E", "F", "G"];

const gameBoard = (nums, letters) => {
    // A-G, 1-8
    let boardArr = [];
    for (let i=0; i <= nums.length; i++) {
        for ( let j = 0; j <= letters.length; j++ ) {
            let letNum = letters[i]+nums[j];
            boardArr.push(letNum);
        }    
    };

    for (let k=0; k < letters.length * nums.length; k++) {  
        gameBoardObj[boardArr[k]] = {
            controlled: "no",
            type: "open"    
        };
    };

    return gameBoardObj;
}

gameBoard(xAx,yAx);

const ship = (length, status, boardLocation) => {
    return {
        length,
        status,
        boardLocation,
        pushTo: (ship) => {
            ships.push(ship)
        } 
    }
    console.log(ship);
    
}

const hit = (y, x) => {
    // this needs the gameboard
    
    //isSunk function inside to check when BS is sunk.
};

module.exports.gameBoard = gameBoard;
module.exports.ship = ship;