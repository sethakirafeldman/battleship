//https://www.hasbro.com/common/instruct/Battleship.PDF
const gameBoardObj = {};
const gamePieces = {
    carrier: ['carrier', 5],
    battleship: ['battleship', 4],
    cruiser: ['cruiser', 3],
    submarine: ['submarine', 3],
    destroyer: ['destroyer', 2]
};

const xAx = [1,2,3,4,5,6,7,8];
const yAx = ["A","B", "C", "D", "E", "F", "G"];

// const clearEvents = (el, parent) => {
    
//     let clone = el.cloneNode(true);
//     parent.replaceChild(clone, el);
    
// };

const clearEvents = () => {
    Object.keys(gameBoardObj["playerOne"]).forEach( (key) => {
        let el = document.getElementById(`playerOne-${key}`);
        let clone = el.cloneNode(true);
        document.getElementById("grid-one").replaceChild(clone, el);
    });    
};



const elFactory = (type, id, innerText, parStr, appendType) => {
    const element = document.createElement(type);
    let parent = document.getElementById(parStr);
    element.id = id;
    element.innerText = innerText;

    if (appendType == "appendChild") {
        parent.appendChild(element);
    }
    else if (appendType == "prepend"){
        parent.prepend(element);
    }

    return element;
};

const gameBoard = {
    board: (player, nums, letters) => {
      // A-G, 1-8
        let boardArr = [];
        gameBoardObj[player] = {};
        // generates and stores x and y axis
        for (let i=0; i <= nums.length; i++) {
            for ( let j = 0; j <= letters.length; j++ ) {
                let letNum = letters[i]+nums[j];
                boardArr.push(letNum);
            }    
    };
        // updates gameboards.
        for (let k=0; k < letters.length * nums.length; k++) {
            gameBoardObj[player][boardArr[k]] = {
                controlled: "no",
                type: "open"    
            };
            
        };
        return gameBoardObj[player];
        },
};

const players = {
    playerOne: {
        name: "player one",
        type: "human",
        board: gameBoard.board("playerOne",xAx,yAx),
        ships: []
    },
    playerTwo: {
        name: "computer",
        type: "computer",
        board: gameBoard.board("playerTwo",xAx,yAx),
        ships: []
    }
};

const ships = {
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
                shipSquare.classList.add('ship');

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

let selectedShip = gamePieces["carrier"];
const buildDOM = {

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
        // only grabs playerOne squares.
        if (gameBoardObj["direction"] == "horizontal") {
            gameBoardObj["allowPlacement"] = [];
            clearEvents();
            // goes through each playerOne square
            Object.keys(gameBoardObj["playerOne"]).forEach( (key)=> {
                let divMod = document.getElementById(`playerOne-${key}`);
                let getPositions = (event, str) => {
                    let firstPos = event.target.id.slice(-2); 
                    let lastPos = Number(firstPos.slice(-1)) + selectedShip[1]; // last square of to be placed ship
                    let firstLetter = firstPos.charAt(0); // first character, eg. A, B, etc.
                    let firstDig = Number(firstPos.slice(-1)); // first digit 
                 
                    for (let i= lastPos - 1; i >= firstDig; i--) {
                            document.getElementById(`playerOne-${firstLetter}${i}`).classList.add(str);
                    }   
                }; //grabs A1, etc.
           
                let placedArr = [];
                //adds mouseenter event to each playerOne square. 
                divMod.addEventListener("mouseenter", (event) => {
                    getPositions(event, "ship");
                    gameBoardObj["allowPlacement"] = []; // creates or empties array that will track placement potential
                    // extends ship select length to match length of chosen ship
               
                });


                divMod.addEventListener("click", (event) => {
                    if (gameBoardObj["allowPlacement"].includes(false) ) {
                        // console.log(gameBoardObj["allowPlacement"]);
                    }
                    else {
                        getPositions(event, "placed-ship");
                        placedArr.push(`${firstLetter}${i}`);

                        if (placedArr.length == selectedShip[1] ) {
                            ships.placeShip(selectedShip, placedArr, "playerOne");
                            console.log(gameBoardObj["playerOne"]);
                        }
                    }
                });   
 
                divMod.addEventListener("mouseleave", (event) => {
            
                    let firstPos = event.target.id.slice(-2); 
                    let lastPos = Number(firstPos.slice(-1)) + selectedShip[1]; // last square of to be placed ship
                    let firstLetter = firstPos.charAt(0); // first character, eg. A, B, etc.
                    let firstDig = Number(firstPos.slice(-1)); // first digit 
                 
                    for (let i= lastPos - 1; i >= firstDig; i--) {
                            document.getElementById(`playerOne-${firstLetter}${i}`).classList.remove("ship");
                    }   
                
                });
            })
        }

        else if (gameBoardObj["direction"] == "vertical") {
            gameBoardObj["allowPlacement"] = [];
            // Object.keys(gameBoardObj["playerOne"]).forEach( (key)=> {
                
            //     let divMod = document.getElementById(`playerOne-${key}`);
            //     //remove  event listeners within grid-one
            //     clearEvents(divMod, document.getElementById("grid-one"));
            //     // gameBoardObj["allowPlacement"] = [];
                
            // });
            clearEvents();
            // add events to playerOne squares.
            
            Object.keys(gameBoardObj["playerOne"]).forEach( (key)=> {
                let divMod = document.getElementById(`playerOne-${key}`);
                divMod.addEventListener("mouseenter", (event) => {
                let firstLetter = key.charAt(0);
                let endNumb= key.charAt(1); //stays static
                let placedArr = []; // store A1, B1, etc.
                firstLetter = yAx.indexOf(firstLetter);

                for ( let i = firstLetter + selectedShip[1] - 1; i >= firstLetter ; i-- ) {
                    let shipPlace = document.getElementById(`playerOne-${yAx[i]}${endNumb}`); 
                    gameBoardObj["allowPlacement"] = [];

                    if (shipPlace == null) {
                        gameBoardObj["allowPlacement"].push(false);
                    }

                    else if (shipPlace !== null ) { // 
                        shipPlace.classList.add("ship");   
                        gameBoardObj["allowPlacement"].push(true);

                        divMod.addEventListener("mouseleave", (event) => {
                            shipPlace.classList.remove("ship");


                            divMod.addEventListener("click", (e) => {
                                shipPlace.classList.add("placed-ship");
                            });
                        });
                    }
                


                }
                });
               
            });

        }
    }
};



// gameBoard.board(xAx,yAx);

// ships.hit("playerOne","A",1);
// hit("A",3);
// ships.hit("playerOne","A",2);
// hit("A",1);
// hit("A",4);
buildDOM.buildGrid("playerOne");
buildDOM.buildGrid("playerTwo");
buildDOM.buildDrop();

// module.exports.gameBoard = gameBoard.board;
module.exports.genShip = ships.genShip;
module.exports.placeShip = ships.placeShip;
module.exports.gamePieces = gamePieces;
module.exports.hit = ships.hit;
module.exports.isSunk = ships.isSunk;
module.exports.players = players;