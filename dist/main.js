/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#grid-one, #grid-two{\\r\\n    display: inline-grid;\\r\\n    grid-template-columns: repeat(9, auto);\\r\\n    padding: 10px;\\r\\n}\\r\\n.grid-item {\\r\\n    border: 1px solid rgba(0, 0, 0, 0.8);\\r\\n    padding: 20px;\\r\\n    font-size: 30px;\\r\\n    align-content:center;\\r\\n}\\r\\n\\r\\n.grid-heading {\\r\\n    text-align:center;\\r\\n}\\r\\n\\r\\n.letter-heading {\\r\\n    padding: 10px 0;\\r\\n}\\r\\n\\r\\n.hit {\\r\\n    background-color: red;\\r\\n}\\r\\n\\r\\n.ship {\\r\\n    background-color: lightblue;\\r\\n}\\r\\n\\r\\n.placed-ship {\\r\\n\\r\\n    background-color: blue;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/buildModule.js":
/*!****************************!*\
  !*** ./src/buildModule.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildDOM\": () => (/* binding */ buildDOM)\n/* harmony export */ });\n/* harmony import */ var _globalVar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalVar.js */ \"./src/globalVar.js\");\n/* harmony import */ var _shipModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipModule.js */ \"./src/shipModule.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet selectedShip = _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gamePieces.carrier;\r\n// console.log(typeof(selectedShip));\r\nconst buildDOM = {\r\n\r\n    buildDrop: () => {\r\n        // type, id, innerText, parStr, appendType\r\n        (0,_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", \"dropdown-menu\", \"\", \"grid-container\", \"prepend\");\r\n        (0,_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"select\", \"ship-selector\",\"\", \"dropdown-menu\",\"appendChild\");\r\n\r\n        let sel = document.getElementById(\"ship-selector\");\r\n\r\n        Object.keys(_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gamePieces).forEach( (piece)=> {\r\n            let menuItem = document.createElement(\"option\");\r\n            menuItem.value = piece;\r\n            menuItem.innerText = piece;\r\n            sel.appendChild(menuItem);\r\n        });\r\n        sel.addEventListener('change', ()=> {\r\n            selectedShip = _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gamePieces[sel.value];\r\n            console.log(\"change\");\r\n        });\r\n        // type, id, innerText, parStr, appendType\r\n        (0,_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"div\", \"direction-menu\", \"\", \"grid-container\", \"prepend\");\r\n        (0,_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"select\", \"dir-selector\", \"\", \"direction-menu\", \"appendChild\");\r\n        (0,_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"option\", \"horiz-opt\", \"horizontal\", \"dir-selector\", \"appendChild\");\r\n        (0,_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.elFactory)(\"option\", \"vert-opt\", \"vertical\", \"dir-selector\", \"appendChild\");\r\n        _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj.direction = \"horizontal\";\r\n        buildDOM.addPlacement();\r\n\r\n        let dirSel = document.getElementById(\"dir-selector\");\r\n        document.getElementById(\"vert-opt\").value =\"vertical\";\r\n        document.getElementById(\"horiz-opt\").value =\"horizontal\";\r\n        dirSel.addEventListener('change', () => {\r\n            _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj.direction = dirSel.value;\r\n            buildDOM.addPlacement();\r\n        });\r\n    },\r\n\r\n    buildGrid: (pName) => {\r\n        let numSuffix = pName.slice(-3).toLowerCase();\r\n        let mkGrid = document.getElementById(`grid-${numSuffix}`);\r\n        let placeHolder = document.createElement(\"div\");\r\n        mkGrid.append(placeHolder);\r\n        _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.xAx.forEach((numb)=> { \r\n            let numHead = document.createElement(\"div\");\r\n            numHead.innerText = numb;\r\n            numHead.classList.add(\"grid-heading\");\r\n            mkGrid.append(numHead);\r\n        });\r\n\r\n        Object.keys(_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj[pName]).forEach((one) => {\r\n            let gridDiv = document.createElement(\"div\");\r\n            gridDiv.id = `${pName}-${one}`;\r\n            gridDiv.classList.add(\"grid-item\");\r\n            mkGrid.append(gridDiv);\r\n        });\r\n    \r\n        _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.yAx.forEach((lett)=>{\r\n            let lettHead = document.createElement(\"div\");\r\n            lettHead.innerText = lett;\r\n            lettHead.classList.add(\"letter-heading\");\r\n            \r\n            let getLetter = document.getElementById(`${pName}-${lett}1`);\r\n            lettHead.innerText = lett;\r\n            getLetter.before(lettHead); \r\n        });\r\n    },\r\n\r\n    addPlacement: () => {\r\n        // only grabs playerOne squares.\r\n        if (_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj.direction == \"horizontal\") {\r\n            _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj.allowPlacement = [];\r\n            (0,_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.clearEvents)();\r\n            // goes through each playerOne square\r\n            Object.keys(_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj.playerOne).forEach( (key)=> {\r\n                let divMod = document.getElementById(`playerOne-${key}`);\r\n                const getPositions = (event, str) => {\r\n                    let firstPos = event.target.id.slice(-2); \r\n                    let lastPos = Number(firstPos.slice(-1)) + selectedShip[1]; // last square of to be placed ship\r\n                    let firstLetter = firstPos.charAt(0); // first character, eg. A, B, etc.\r\n                    let firstDig = Number(firstPos.slice(-1)); // first digit \r\n                 \r\n                    for (let i= lastPos - 1; i >= firstDig; i--) {\r\n                        let targSquare = document.getElementById(`playerOne-${firstLetter}${i}`);\r\n\r\n                        if (targSquare !== null && str == \"enter\") {\r\n                            targSquare.classList.add(\"ship\");\r\n                        }\r\n\r\n                        else if (targSquare !== null && str == \"leave\") {\r\n                            targSquare.classList.remove(\"ship\");\r\n                        }\r\n                        else if (targSquare !== null && str == \"click\") {\r\n                            if (targSquare.classList.contains(\"placed-ship\") !== true) {\r\n                                targSquare.classList.add(\"placed-ship\");\r\n                                let select = document.getElementById(\"ship-selector\");\r\n                                // remove placed ship from drop-down.\r\n                                for (let j =0; j < select.length; j++) {\r\n\r\n                                    if (select[j].innerText === selectedShip[0]) {\r\n                                        select[j].remove();   \r\n                                        selectedShip =\"\";\r\n                                    };\r\n                                }\r\n                            }; \r\n                        }\r\n\r\n\r\n                        else if (targSquare == null ) {\r\n                            return _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj.allowPlacement = false;\r\n                        }\r\n                    };\r\n                    // sets selectedShip to the currently selected\r\n                    return selectedShip = _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gamePieces[document.getElementById(\"ship-selector\")[0].innerText];\r\n                };   \r\n              \r\n                let placedArr = [];\r\n                //adds mouseenter event to each playerOne square. \r\n                divMod.addEventListener(\"mouseenter\", (event) => {\r\n                    // extends ship select length to match length of chosen ship\r\n                    getPositions(event, \"enter\");\r\n               \r\n                });\r\n\r\n\r\n                divMod.addEventListener(\"click\", (event) => {                    \r\n                    if (_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj.allowPlacement === false) {\r\n                        // prevents placement when not allowed.\r\n                    }\r\n                    else {\r\n                        getPositions(event, \"click\");\r\n                        Object.keys(_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj.playerOne).forEach( (key) => {\r\n                            if ( document.getElementById(`playerOne-${key}`).classList.contains(\"placed-ship\") ) {\r\n                                placedArr.push(key);\r\n                                _shipModule_js__WEBPACK_IMPORTED_MODULE_1__.ships.placeShip(selectedShip, placedArr, \"playerOne\");\r\n                            }\r\n                        });\r\n                    }\r\n                });   \r\n \r\n                divMod.addEventListener(\"mouseleave\", (event) => {\r\n                    _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj.allowPlacement = \"\"; \r\n                    getPositions(event, \"leave\"); \r\n                });\r\n            })\r\n        }\r\n\r\n        else if (_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj.direction == \"vertical\") {\r\n            _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj.allowPlacement = \"\";\r\n            (0,_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.clearEvents)();\r\n            // add events to playerOne squares.\r\n            Object.keys(_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj.playerOne).forEach( (key)=> {\r\n                let divMod = document.getElementById(`playerOne-${key}`);\r\n                let placedArr = []; // store A1, B1, etc.\r\n\r\n                const getVert = (str) => {\r\n\r\n                    let firstLetter = key.charAt(0);\r\n                    let endNumb= key.charAt(1); //stays static\r\n                    firstLetter = _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.yAx.indexOf(firstLetter);\r\n                    \r\n                    for ( let i = firstLetter + selectedShip[1] - 1; i >= firstLetter ; i-- ) {\r\n                        let shipPlace = document.getElementById(`playerOne-${_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.yAx[i]}${endNumb}`); \r\n                        _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj.allowPlacement = [];\r\n                        // console.log(shipPlace);\r\n\r\n                        if (shipPlace == null) {\r\n                            return _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj.allowPlacement = false;\r\n                        }\r\n                        else if (shipPlace !== null && str == \"enter\" ) { // \r\n                            shipPlace.classList.add(\"ship\");   \r\n                        }\r\n                        else if (shipPlace !== null && str == \"leave\") {\r\n                            shipPlace.classList.remove(\"ship\");   \r\n                        }\r\n                        else if (shipPlace !== null && str == \"click\") {\r\n                            shipPlace.classList.add(\"placed-ship\");\r\n                            let select = document.getElementById(\"ship-selector\");\r\n                            for (let j =0; j< select.length; j++) {\r\n                                if (select[j].innerText === selectedShip[0]) {\r\n                                   select[j].remove();\r\n                                   selectedShip =\"\";\r\n                                }\r\n                            };    \r\n                        }\r\n                    };\r\n                    return selectedShip = _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gamePieces[document.getElementById(\"ship-selector\")[0].innerText];\r\n\r\n\r\n                };\r\n                    divMod.addEventListener(\"mouseenter\", (event) => {  \r\n                        getVert(\"enter\");\r\n                });\r\n                    divMod.addEventListener(\"mouseleave\", (event) => {\r\n                        getVert(\"leave\");\r\n                    });\r\n                    divMod.addEventListener(\"click\", (event) => {\r\n                        getVert(\"click\");\r\n                        Object.keys(_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj.playerOne).forEach( (key) => {\r\n                            if ( document.getElementById(`playerOne-${key}`).classList.contains(\"placed-ship\") ) {\r\n                                placedArr.push(key);\r\n                                _shipModule_js__WEBPACK_IMPORTED_MODULE_1__.ships.placeShip(selectedShip, placedArr, \"playerOne\");\r\n                            }\r\n                        });\r\n                    });\r\n                });            \r\n        }\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://battleship/./src/buildModule.js?");

/***/ }),

/***/ "./src/globalVar.js":
/*!**************************!*\
  !*** ./src/globalVar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameBoardObj\": () => (/* binding */ gameBoardObj),\n/* harmony export */   \"gamePieces\": () => (/* binding */ gamePieces),\n/* harmony export */   \"xAx\": () => (/* binding */ xAx),\n/* harmony export */   \"yAx\": () => (/* binding */ yAx),\n/* harmony export */   \"clearEvents\": () => (/* binding */ clearEvents),\n/* harmony export */   \"elFactory\": () => (/* binding */ elFactory),\n/* harmony export */   \"gameBoard\": () => (/* binding */ gameBoard),\n/* harmony export */   \"players\": () => (/* binding */ players)\n/* harmony export */ });\n//https://www.hasbro.com/common/instruct/Battleship.PDF\r\nconst gameBoardObj = {};\r\n\r\nconst gamePieces = {\r\n    carrier: ['carrier', 5],\r\n    battleship: ['battleship', 4],\r\n    cruiser: ['cruiser', 3],\r\n    submarine: ['submarine', 3],\r\n    destroyer: ['destroyer', 2]\r\n};\r\n\r\nconst xAx = [1,2,3,4,5,6,7,8];\r\nconst yAx = [\"A\",\"B\", \"C\", \"D\", \"E\", \"F\", \"G\"];\r\n\r\nconst clearEvents = () => {\r\n    Object.keys(gameBoardObj[\"playerOne\"]).forEach( (key) => {\r\n        let el = document.getElementById(`playerOne-${key}`);\r\n        let clone = el.cloneNode(true);\r\n        document.getElementById(\"grid-one\").replaceChild(clone, el);\r\n    });    \r\n};\r\n\r\n\r\n\r\nconst elFactory = (type, id, innerText, parStr, appendType) => {\r\n    const element = document.createElement(type);\r\n    let parent = document.getElementById(parStr);\r\n    element.id = id;\r\n    element.innerText = innerText;\r\n\r\n    if (appendType == \"appendChild\") {\r\n        parent.appendChild(element);\r\n    }\r\n    else if (appendType == \"prepend\"){\r\n        parent.prepend(element);\r\n    }\r\n\r\n    return element;\r\n};\r\n\r\nconst gameBoard = {\r\n    board: (player, nums, letters) => {\r\n      // A-G, 1-8\r\n        let boardArr = [];\r\n        gameBoardObj[player] = {};\r\n        // generates and stores x and y axis\r\n        for (let i=0; i <= nums.length; i++) {\r\n            for ( let j = 0; j <= letters.length; j++ ) {\r\n                let letNum = letters[i]+nums[j];\r\n                boardArr.push(letNum);\r\n            }    \r\n    };\r\n        // updates gameboards.\r\n        for (let k=0; k < letters.length * nums.length; k++) {\r\n            gameBoardObj[player][boardArr[k]] = {\r\n                controlled: \"no\",\r\n                type: \"open\"    \r\n            };\r\n            \r\n        };\r\n        return gameBoardObj[player];\r\n        },\r\n};\r\n\r\nconst players = {\r\n    playerOne: {\r\n        name: \"player one\",\r\n        type: \"human\",\r\n        board: gameBoard.board(\"playerOne\",xAx,yAx),\r\n        ships: []\r\n    },\r\n    playerTwo: {\r\n        name: \"computer\",\r\n        type: \"computer\",\r\n        board: gameBoard.board(\"playerTwo\",xAx,yAx),\r\n        ships: []\r\n    }\r\n};\n\n//# sourceURL=webpack://battleship/./src/globalVar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buildModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildModule.js */ \"./src/buildModule.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n// import { gamePieces } from \"./globalVar.js\";\r\n// import { gameBoardObj } from \"./globalVar.js\";\r\n// import { xAx } from \"./globalVar.js\";\r\n// import { yAx } from \"./globalVar.js\";\r\n// import { clearEvents } from \"./globalVar.js\";\r\n// import { elFactory } from \"./globalVar.js\";\r\n// import { gameBoard } from \"./globalVar.js\";\r\n// import { players } from \"./globalVar.js\";\r\n// import { selectedShip } from \"./globalVar\";\r\n\r\n\r\n\r\n// import { ships } from \"./shipModule.js\";\r\n\r\n\r\n\r\n_buildModule_js__WEBPACK_IMPORTED_MODULE_0__.buildDOM.buildGrid(\"playerOne\");\r\n_buildModule_js__WEBPACK_IMPORTED_MODULE_0__.buildDOM.buildGrid(\"playerTwo\");\r\n_buildModule_js__WEBPACK_IMPORTED_MODULE_0__.buildDOM.buildDrop();\r\n\r\n\r\n\r\n// console.log(players)\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/shipModule.js":
/*!***************************!*\
  !*** ./src/shipModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ships\": () => (/* binding */ ships)\n/* harmony export */ });\n/* harmony import */ var _globalVar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalVar.js */ \"./src/globalVar.js\");\n// import { gamePieces } from \"./globalVar.js\";\r\n\r\n// import { xAx } from \"./globalVar.js\";\r\n// import { yAx } from \"./globalVar.js\";\r\n// import { clearEvents } from \"./globalVar.js\";\r\n// import { elFactory } from \"./globalVar.js\";\r\n// import { gameBoard } from \"./globalVar.js\";\r\n\r\n\r\n\r\n\r\nconst ships = {\r\n    genShip: (gamePiece, boardLocation, player) => {\r\n        return {\r\n            gamePiece,\r\n            boardLocation, \r\n            player, \r\n            status: {}\r\n         }        \r\n    },\r\n    placeShip: (piece, placement, player) => {\r\n        let shipObject = ships.genShip(piece, placement, player);\r\n\r\n        _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.players[player].ships.push(shipObject);\r\n            shipObject.boardLocation.forEach(value => {\r\n                let shipSquare = document.getElementById(`${shipObject.player}-${value}`);\r\n                // shipSquare.classList.add('ship');\r\n\r\n                //updates gameBoardObj \r\n                _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.players[player].board[value].controlled = shipObject.player;\r\n                _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.players[player].board[value].type = shipObject.gamePiece[0];\r\n                _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.players[player].board[value].length = shipObject.gamePiece[1];\r\n              });\r\n            return shipObject;\r\n    },\r\n    isSunk: (player) => {\r\n        let hitCheck = [];\r\n        // go through each ship in ships[]\r\n        _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.players[player].ships.forEach((ship)=>{\r\n            ship.boardLocation.forEach((pos)=> {\r\n                if (ship.status[pos] == \"hit\") {\r\n                    hitCheck.push(true);\r\n                    console.log(ship.gamePiece[0]+\" has been hit at \"+ pos);\r\n                    if (hitCheck.length ===ship.boardLocation.length){\r\n                        return true;\r\n                    }\r\n                }\r\n                else {\r\n                    return false;\r\n                }\r\n            });\r\n        });\r\n    },\r\n    hit: (player, y, x) => {  \r\n        let strike = y+x;\r\n        if ( _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj[player][strike].controlled !== 'no') { \r\n            _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj[player][strike][\"status\"] = \"hit\";\r\n            let hitSquare = document.getElementById(`${player}-${strike}`);\r\n            hitSquare.classList.add('hit');\r\n\r\n            _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.players[player].ships.forEach(ship => {\r\n                if (_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj[player][strike].status == \"hit\") {\r\n                    return ship.status[strike] = \"hit\";     \r\n                } \r\n            });\r\n        }\r\n        else {\r\n            _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.gameBoardObj[player][strike].status = \"missed\";\r\n            return \"miss\";\r\n        }\r\n        ships.isSunk(player);\r\n        return strike + \" has been hit\";\r\n    }\r\n\r\n};\n\n//# sourceURL=webpack://battleship/./src/shipModule.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;