//https://www.hasbro.com/common/instruct/Battleship.PDF
export const gameBoardObj = {};

export const gamePieces = {
    carrier: ['carrier', 5],
    battleship: ['battleship', 4],
    cruiser: ['cruiser', 3],
    submarine: ['submarine', 3],
    destroyer: ['destroyer', 2]
};

export const xAx = [1,2,3,4,5,6,7,8];
export const yAx = ["A","B", "C", "D", "E", "F", "G"];

export const clearEvents = () => {
    Object.keys(gameBoardObj["playerOne"]).forEach( (key) => {
        let el = document.getElementById(`playerOne-${key}`);
        let clone = el.cloneNode(true);
        document.getElementById("grid-one").replaceChild(clone, el);
    });    
};



export const elFactory = (type, id, innerText, parStr, appendType) => {
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

export const gameBoard = {
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

export const players = {
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