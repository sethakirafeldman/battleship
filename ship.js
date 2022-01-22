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
                players[player].board[value].controlled =shipObject.player;
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
    //ships will need to be an array under each player to keep
//hits separate.
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
        // type, id, innerText, place, appendType
        // elFactory("div", "dropdown-menu", "");
        let dropDown = document.createElement("div");
        dropDown.id = "dropdown-menu";
        let sel = document.createElement("select");
        sel.id = "ship-selector";
        // let dropDown = document.getElementById("dropdown-menu");
        document.getElementById("grid-container").prepend(dropDown);
        dropDown.appendChild(sel);

        Object.keys(gamePieces).forEach( (piece)=> {
            let menuItem = document.createElement("option");
            menuItem.value = piece;
            menuItem.innerText = piece;
            sel.appendChild(menuItem);
        });
        sel.addEventListener('change', ()=> {
            selectedShip = gamePieces[sel.value];
            // console.log(selectedShip);
        });
        // type, id, innerText, parStr, appendType
        elFactory("div", "direction-menu", "", "grid-container", "prepend");
        elFactory("select", "dir-selector", "", "direction-menu", "appendChild");
       
        elFactory("option", "vert-opt", "vertical", "dir-selector", "appendChild");
        elFactory("option", "horiz-opt", "horizontal", "dir-selector", "appendChild");

        document.getElementById("vert-opt").value ="vertical";
        document.getElementById("horiz-opt").value ="horizontal";
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

            gridDiv.addEventListener("mouseenter", (e) =>{
                let shipPlace = "";
                //horizontal
                let firstPos = e.target.id.slice(-2);//grabs A1
                let lastPos = Number(firstPos.slice(-1)) + selectedShip[1];
                let firstLetter = firstPos.charAt(0);
                let firstDig = Number(firstPos.slice(-1));
                // increment to letter + targ.
                for (let i = firstDig; i < lastPos; i++) {
                    shipPlace = document.getElementById(`playerOne-${firstLetter}${i}`)
                    shipPlace.classList.add("ship");
                }
            });

            gridDiv.addEventListener("mouseleave", (e) => {
                let firstPos = e.target.id.slice(-2);//grabs A1
                let lastPos = Number(firstPos.slice(-1)) + selectedShip[1];
                let firstLetter = firstPos.charAt(0);
                let firstDig = Number(firstPos.slice(-1));

                for (let i = firstDig; i < lastPos; i++) {
                    shipPlace = document.getElementById(`playerOne-${firstLetter}${i}`)
                    if (shipPlace.classList.contains("ship")){
                        shipPlace.classList.remove("ship");
                    }
                }
            });
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
    }
};

// gameBoard.board(xAx,yAx);

// ships.placeShip(gamePieces.carrier, ['A1', 'A2', 'A3', 'A4', 'A5'], "playerOne");
// ships.placeShip(gamePieces.carrier, ['B1', 'B2', 'B3', 'B4', 'B5'], "playerTwo");

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