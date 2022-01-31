// import { gamePieces } from "./globalVar.js";
import { gameBoardObj } from "./globalVar.js";
// import { xAx } from "./globalVar.js";
// import { yAx } from "./globalVar.js";
// import { clearEvents } from "./globalVar.js";
// import { elFactory } from "./globalVar.js";
// import { gameBoard } from "./globalVar.js";
import { players } from "./globalVar.js";
// import { selectedShip } from "./globalVar";


export const ships = {
    genShip: (gamePiece, boardLocation, player) => {
        return {
            gamePiece,
            boardLocation, 
            player, 
            status: {}
         }        
    },
    placeShip: (piece, placement, player) => {
        let shipObject = ships.genShip(piece, placement, player);

        players[player].ships.push(shipObject);
            shipObject.boardLocation.forEach(value => {
                let shipSquare = document.getElementById(`${shipObject.player}-${value}`);
                // shipSquare.classList.add('ship');

                //updates gameBoardObj 
                players[player].board[value].controlled = shipObject.player;
                players[player].board[value].type = shipObject.gamePiece[0];
                players[player].board[value].length = shipObject.gamePiece[1];
              });
            return shipObject;
    },
    isSunk: (player) => {
        let hitCheck = [];
        // go through each ship in ships[]
        players[player].ships.forEach((ship)=>{
            ship.boardLocation.forEach((pos)=> {
                if (ship.status[pos] == "hit") {
                    hitCheck.push(true);
                    console.log(ship.gamePiece[0]+" has been hit at "+ pos);
                    if (hitCheck.length ===ship.boardLocation.length){
                        return true;
                    }
                }
                else {
                    return false;
                }
            });
        });
    },
    hit: (player, y, x) => {  
        let strike = y+x;
        if ( gameBoardObj[player][strike].controlled !== 'no') { 
            gameBoardObj[player][strike]["status"] = "hit";
            let hitSquare = document.getElementById(`${player}-${strike}`);
            hitSquare.classList.add('hit');

            players[player].ships.forEach(ship => {
                if (gameBoardObj[player][strike].status == "hit") {
                    return ship.status[strike] = "hit";     
                } 
            });
        }
        else {
            gameBoardObj[player][strike].status = "missed";
            return "miss";
        }
        ships.isSunk(player);
        return strike + " has been hit";
    }

};