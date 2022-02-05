// import { gamePieces } from "./globalVar.js";
// import { gameBoardObj } from "./globalVar.js";
// import { xAx } from "./globalVar.js";
// import { yAx } from "./globalVar.js";
// import { clearEvents } from "./globalVar.js";
// import { elFactory } from "./globalVar.js";
// import { gameBoard } from "./globalVar.js";
// import { players } from "./globalVar.js";
// import { selectedShip } from "./globalVar";

import { buildDOM } from "./buildModule.js";
import { horiz } from "./computer.js";

// import { ships } from "./shipModule.js";



buildDOM.buildGrid("playerOne");
buildDOM.buildGrid("playerTwo");
buildDOM.buildDrop();
horiz();


import "./index.css";

