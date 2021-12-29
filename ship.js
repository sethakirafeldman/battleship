// // ship obj properties:
// length
// where hit 
// sunk or not sunk
//https://www.hasbro.com/common/instruct/Battleship.PDF

const ship = (length, status, boardLocation) => {
    return {
        length,
        status,
        boardLocation
    }
}

const hit = (y, x) => {
    // this needs the gameboard
    
    //isSunk function inside to check when BS is sunk.
};


const gameBoard = (nums, letters) => {
    // A-G, 1-8
    let gameBoardObj = {};
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

module.exports.ship = ship;
module.exports.gameBoard = gameBoard;