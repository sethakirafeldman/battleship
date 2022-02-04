import { random } from "lodash";
import Yallist from "yallist";
import { gamePieces } from "./globalVar.js";
import { gameBoardObj } from "./globalVar.js";
import { xAx } from "./globalVar.js";
import { yAx } from "./globalVar.js";
import { clearEvents } from "./globalVar.js";
import { elFactory } from "./globalVar.js";
import { gameBoard } from "./globalVar.js";
import { players } from "./globalVar.js";
import { ships } from "./shipModule.js";


console.log(gamePieces);
let allowedHor= {

}

const horOpt = ()=> {
    let allowed = {};
    let arr = [];

    Object.values(gamePieces).forEach((piece)=> {
        let max = 8; 
        let min = piece[1]; //gamePiece length
        let ship = piece[0];
        let i = min;
        // loops through to get allowed placement for each type of ship.
        while (i <= max) {
            arr.push(i);
            i++;
        }   

        yAx.forEach( (lett) => {
            // arr.map(j => lett+j);
            allowed[ship] = arr; 
            allowedHor[lett] = [];
            allowedHor[lett] = allowed;
        });
        arr = [];
        return allowedHor;
    });
    // console.log(allowedHor);
};

horOpt();


export const AI = () => {

    // random horizontal placement.
    Object.values(gamePieces).forEach( (e)=> {

        let randomLett = yAx[Math.floor(Math.random() * yAx.length)];
        let piece = e; // loop through this
        let ship = piece[0]; // increment last index
        let arr = []

        let placeCoords = allowedHor[randomLett][ship];
        let randPlace = placeCoords[Math.floor(Math.random() * placeCoords.length)];

        // randPlace - piece length = place
        for ( let j = randPlace; j > randPlace - piece[1]; j-- ) {
            // console.log(randomLett+j);
            arr.push(randomLett+j);
        }
        console.log(arr);

        ships.placeShip(piece, arr, "playerTwo");

    });

    console.log(gameBoardObj["playerTwo"]);

};

// console.log(allowedHor["A"]["battleship"]);

// horizontal options: letter for each must be locked
// carrier = 8,7,6,5
// battleship = 8,7,6,5,4 
// 8,7,6,5,4,3
// 8,7,6,5,4,3
// 8,7,6,5,4,3,2 

// vertical number for each must be locked
// G, F, E
// G, F, E, D
// G, F, E
// G, F, E, D, C
// G, F, E, D, C
// G, F, E, D, C, B