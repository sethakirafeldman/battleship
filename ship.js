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

const hit = (targ) => {
    // this needs the gameboard
    
    //isSunk function inside to check when BS is sunk.
};


const gameBoard = (nums, letters) => {
    // A-G, 1-8
    // build obj with x(numbers) and y (letters) axis
    let gameBoardObj = {
        x:  nums,
        y: letters    
    };

    return gameBoardObj;
}

module.exports.ship = ship;
module.exports.gameBoard = gameBoard;