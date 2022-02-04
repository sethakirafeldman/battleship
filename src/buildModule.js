import { gamePieces } from "./globalVar.js";
import { gameBoardObj } from "./globalVar.js";
import { xAx } from "./globalVar.js";
import { yAx } from "./globalVar.js";
import { clearEvents } from "./globalVar.js";
import { elFactory } from "./globalVar.js";
import { gameBoard } from "./globalVar.js";
import { players } from "./globalVar.js";
import { ships } from "./shipModule.js";

// let sel = document.getElementById("ship-selector");

let selectedShip ="";

export const buildDOM = {

    buildDrop: () => {
        // type, id, innerText, parStr, appendType
        elFactory("div", "dropdown-menu", "", "grid-container", "prepend");
        elFactory("select", "ship-selector","", "dropdown-menu","appendChild");

        let sel = document.getElementById("ship-selector");

        Object.keys(gamePieces).forEach( (piece)=> {
            let menuItem = document.createElement("option");
            menuItem.value = piece;
            menuItem.innerText = piece;
            sel.appendChild(menuItem);
        });
        sel.addEventListener('change', ()=> {
            selectedShip = gamePieces[sel.value];
            console.log(selectedShip);
        });
        // type, id, innerText, parStr, appendType
        elFactory("div", "direction-menu", "", "grid-container", "prepend");
        elFactory("select", "dir-selector", "", "direction-menu", "appendChild");
        elFactory("option", "horiz-opt", "horizontal", "dir-selector", "appendChild");
        elFactory("option", "vert-opt", "vertical", "dir-selector", "appendChild");
        gameBoardObj["direction"] = "horizontal";
        buildDOM.addPlacement();

        let dirSel = document.getElementById("dir-selector");
        document.getElementById("vert-opt").value ="vertical";
        document.getElementById("horiz-opt").value ="horizontal";
        dirSel.addEventListener('change', () => {
            gameBoardObj["direction"] = dirSel.value;
            buildDOM.addPlacement();
        });
    },

    buildGrid: (pName) => {
        let numSuffix = pName.slice(-3).toLowerCase();
        let mkGrid = document.getElementById(`grid-${numSuffix}`);
        let placeHolder = document.createElement("div");
        mkGrid.append(placeHolder);
        xAx.forEach((numb)=> { 
            let numHead = document.createElement("div");
            numHead.innerText = numb;
            numHead.classList.add("grid-heading");
            mkGrid.append(numHead);
        });

        Object.keys(gameBoardObj[pName]).forEach((one) => {
            let gridDiv = document.createElement("div");
            gridDiv.id = `${pName}-${one}`;
            gridDiv.classList.add("grid-item");
            mkGrid.append(gridDiv);
        });
    
        yAx.forEach((lett)=>{
            let lettHead = document.createElement("div");
            lettHead.innerText = lett;
            lettHead.classList.add("letter-heading");
            
            let getLetter = document.getElementById(`${pName}-${lett}1`);
            lettHead.innerText = lett;
            getLetter.before(lettHead); 
        });
    },
    
    addPlacement: () => {
        // let selectedShip = gamePieces["carrier"];
        selectedShip = document.getElementById("ship-selector")[0];
        // only grabs playerOne squares.
        if (gameBoardObj["direction"] == "horizontal") {
            gameBoardObj["allowPlacement"] = [];
            clearEvents();
            // goes through each playerOne square
            Object.keys(gameBoardObj["playerOne"]).forEach( (key)=> {
                let divMod = document.getElementById(`playerOne-${key}`);
                const getPositions = (event, str) => {
                    let firstPos = event.target.id.slice(-2); 
                    let lastPos = Number(firstPos.slice(-1)) + selectedShip[1]; // last square of to be placed ship
                    let firstLetter = firstPos.charAt(0); // first character, eg. A, B, etc.
                    let firstDig = Number(firstPos.slice(-1)); // first digit 
                 
                    for (let i= lastPos - 1; i >= firstDig; i--) {
                        let targSquare = document.getElementById(`playerOne-${firstLetter}${i}`);

                        if (targSquare !== null && str == "enter") {
                            targSquare.classList.add("ship");           
                        }

                        else if (targSquare !== null && str == "leave") {
                            targSquare.classList.remove("ship");
                        }
                        else if (targSquare !== null && str == "click") {
                            if (targSquare.classList.contains("placed-ship") !== true) {
                                targSquare.classList.add("placed-ship");
                                let select = document.getElementById("ship-selector");
                                // remove placed ship from drop-down.
                                for (let j =0; j < select.length; j++) {

                                    if (select[j].innerText === selectedShip[0]) {
                                        select[j].remove();   
                                        selectedShip ="";
                                    };
                                }
                            }; 
                        }

                        else if (targSquare == null || targSquare.classList.contains("placed-ship") === true ) {
                            console.log("cannot place here");
                            return gameBoardObj["allowPlacement"] = false;
                        }
                    };
                    // sets selectedShip to the currently selected
                    return selectedShip = gamePieces[document.getElementById("ship-selector")[0].innerText];
                };   
              
                let placedArr = [];
                //adds mouseenter event to each playerOne square. 
                divMod.addEventListener("mouseenter", (event) => {
                    // extends ship select length to match length of chosen ship
                    getPositions(event, "enter");
               
                });


                divMod.addEventListener("click", (event) => {                    
                    if (gameBoardObj["allowPlacement"] === false) {
                        // prevents placement when not allowed.
                    }
                    else {
                        getPositions(event, "click");
                        Object.keys(gameBoardObj["playerOne"]).forEach( (key) => {
                            if ( document.getElementById(`playerOne-${key}`).classList.contains("placed-ship") ) {
                                placedArr.push(key);
                                ships.placeShip(selectedShip, placedArr, "playerOne");
                            }
                        });
                    }
                });   
 
                divMod.addEventListener("mouseleave", (event) => {
                    gameBoardObj["allowPlacement"] = ""; 
                    getPositions(event, "leave"); 
                });
            })
        }

        else if (gameBoardObj["direction"] == "vertical") {
            gameBoardObj["allowPlacement"] = "";
            clearEvents();
            // add events to playerOne squares.
            Object.keys(gameBoardObj["playerOne"]).forEach( (key)=> {
                let divMod = document.getElementById(`playerOne-${key}`);
                let placedArr = []; // store A1, B1, etc.

                const getVert = (str) => {

                    let firstLetter = key.charAt(0);
                    let endNumb= key.charAt(1); //stays static
                    firstLetter = yAx.indexOf(firstLetter);
                    
                    for ( let i = firstLetter + selectedShip[1] - 1; i >= firstLetter ; i-- ) {
                        let shipPlace = document.getElementById(`playerOne-${yAx[i]}${endNumb}`); 
                        gameBoardObj["allowPlacement"] = [];
                        // console.log(shipPlace);

                        if (shipPlace == null) {
                            return gameBoardObj["allowPlacement"] = false;
                        }
                        else if (shipPlace !== null && str == "enter" ) { // 
                            shipPlace.classList.add("ship");   
                        }
                        else if (shipPlace !== null && str == "leave") {
                            shipPlace.classList.remove("ship");   
                        }
                        else if (shipPlace !== null && str == "click") {
                            shipPlace.classList.add("placed-ship");
                            let select = document.getElementById("ship-selector");
                            for (let j =0; j< select.length; j++) {
                                if (select[j].innerText === selectedShip[0]) {
                                   select[j].remove();
                                   selectedShip ="";
                                }
                            };    
                        }
                    };
                    return selectedShip = gamePieces[document.getElementById("ship-selector")[0].innerText];


                };
                    divMod.addEventListener("mouseenter", (event) => {  
                        getVert("enter");
                });
                    divMod.addEventListener("mouseleave", (event) => {
                        getVert("leave");
                    });
                    divMod.addEventListener("click", (event) => {
                        getVert("click");
                        Object.keys(gameBoardObj["playerOne"]).forEach( (key) => {
                            if ( document.getElementById(`playerOne-${key}`).classList.contains("placed-ship") ) {
                                placedArr.push(key);
                                ships.placeShip(selectedShip, placedArr, "playerOne");
                            }
                        });
                    });
                });            
        }
    }
};
