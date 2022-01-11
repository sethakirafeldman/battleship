// // ship obj properties:
// length
// where hit 
// sunk or not sunk
//https://www.hasbro.com/common/instruct/Battleship.PDF
const gameBoardObj = {};
const ships = [];

const gamePieces = {
    carrier: ['carrier', 5],
    battleship: ['battleship', 4],
    cruiser: ['cruiser' ,3],
    submarine: ['submarine' ,3],
    destroyer: ['destroyer ',2]
};

const xAx = [1,2,3,4,5,6,7,8];
const yAx = ["A","B", "C", "D", "E", "F", "G"];

const gameBoard = {
    board: (nums, letters) => {
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
        },

    ship: (gamePiece, boardLocation, player) => {
        return {
            gamePiece,
            boardLocation, 
            player, 
            status: {}
         }        
    }
};

const placeShip = (piece, placement, player) => {
    let shipObject = gameBoard.ship(piece, placement, player);
    ships.push(shipObject);
        shipObject.boardLocation.forEach(value => {
            //updates gameBoardObj 
            gameBoardObj[value].controlled = shipObject.player;
            gameBoardObj[value].type = shipObject.gamePiece[0];
            gameBoardObj[value].length = shipObject.gamePiece[1];
          });
        return gameBoardObj;
};

gameBoard.board(xAx,yAx);
placeShip(gamePieces.carrier, ['A1', 'A2', 'A3', 'A4', 'A5'], "player 1");

const isSunk = () => {
    let hitCheck = [];
    console.log("isSunk");
    // go through each ship in ships[]
    ships.forEach((ship)=>{

        ship.boardLocation.forEach((pos)=> {
            if (ship.status[pos] == "hit") {
                hitCheck.push(true);
                console.log(ship.gamePiece[0]+" has been hit at "+ pos);
                if (hitCheck.length ===ship.boardLocation.length){
                    console.log(ship.gamePiece[0]+" has been sunk");
                    return ship.gamePiece[0]+" has been sunk";
                }
            }
            else if (ship.status[pos] !== "hit") {
                // console.log(ship.gamePiece[0]+" has not been hit at "+ pos);
            }
        });
    });

    // check if full length of board location have status of hit
};

const hit = (y, x) => {  
     let strike = y+x;
     gameBoardObj[strike].status = "hit";
     ships.forEach(ship => {
        if (gameBoardObj[strike].status == "hit") {
               return ship.status[strike] = "hit";     
           }
    });
    isSunk();
};

hit("A",5);
hit("A",3);
hit("A",2);
hit("A",1);
// hit("A",4);

// module.exports.gameBoard = gameBoard.board;
module.exports.ship = gameBoard.ship;
module.exports.placeShip = placeShip;
module.exports.gamePieces = gamePieces;
module.exports.hit = hit;
// module.exports.isSunk = isSunk;