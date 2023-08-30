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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/petr-sevcovic-cafebg-unsplash.jpg */ \"./src/images/petr-sevcovic-cafebg-unsplash.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    font-family: \"Arial\";\r\n}\r\n\r\n/* Navigation styles */\r\n#nav_bar {\r\n    background-color: rgb(21, 18, 14);\r\n    padding-top: 15px;\r\n    padding-bottom: 10px;\r\n\r\n    display: flex;\r\n    align-items: center; /* vertical axis*/\r\n    justify-content: space-between; /* horizontal axis*/\r\n\r\n}\r\n\r\n#nav_logo {\r\n    font-size: 45px; \r\n    font-weight: bold;\r\n    margin-left: 25px;\r\n    color:white;\r\n}\r\n    \r\nul {\r\n    margin-right: 25px;\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n    font-size: 25px; \r\n    color: white;\r\n}\r\n\r\nli:hover {\r\n    /* text-decoration: underline; */\r\n    color: lightgreen;\r\n}\r\n\r\n/* Footer Styles*/\r\n\r\n#footer_container {\r\n    background-color: rgb(21, 18, 14);\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100vw;\r\n    text-align: center;\r\n}\r\n\r\n#note_one {\r\n    color: white;\r\n    font-size: 15px;\r\n}\r\n\r\n/* Home page styles */\r\n\r\n#home_container {\r\n    background-color: rgb(21, 18, 14);\r\n    opacity: 0.85;\r\n\r\n    margin-top: 27vh;\r\n    padding-top: 20px;\r\n    padding-bottom: 25px;\r\n    \r\n    text-align: center;\r\n}\r\n\r\n#home_header, #home_motto, #home_description {\r\n    color: white;\r\n}\r\n\r\n#home_header{\r\n    font-size: 55px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n#home_motto{\r\n    font-size: 20px;\r\n    font-style: italic;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n#home_description {\r\n    width: 500px;\r\n    margin: 15px auto;\r\n    \r\n    font-size: 15px;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n/* Drinks/Pastries Page Styles */\r\n\r\n#menu_container, #contact_container { /*id also in pastries page*/\r\n    background-color: rgb(21, 18, 14);\r\n    opacity: 0.85;\r\n\r\n    margin-top: 27vh;\r\n    padding-top: 20px;\r\n    padding-bottom: 25px;\r\n    \r\n    text-align: center;\r\n}\r\n\r\n#drinks_header, #pastries_header, #contactus_header {\r\n    color: white;\r\n    font-size: 55px;\r\n}\r\n\r\n#greentea, #blacktea, #lemonade, #croissant, #doughnut, #pudding{ /*container for green tea, black tea, lemonade items*/\r\n    color: white;\r\n    font-size: 30px;\r\n\r\n    width: 45vw;\r\n    margin: 5px auto; /* 5px top bottom and auto between for centering container*/\r\n    /* text-align: left; */\r\n}\r\n\r\n#greentea_head, #blacktea_head, #lemonade_head, #croissant_head, #doughnut_head, #pudding_head {\r\n    display: flex;\r\n    align-items: center; /* vertical axis*/\r\n    justify-content: space-between; /* horizontal axis ; puts the name and price on the respective ends of greatea head*/ \r\n}\r\n\r\n#greentea_name, #blacktea_name, #lemonade_name, #croissant_name, #doughnut_name, #pudding_name {\r\n    white-space: nowrap; /*stop things from going to next line if container width not big enough*/\r\n    overflow: hidden;     /*doesn't add a scrollbar when things in a container are more than the size of the container width; overflow none just cuts it off*/\r\n}\r\n#greentea_name::after, #blacktea_name::after, #lemonade_name::after, #croissant_name::after, #doughnut_name::after, #pudding_name::after{\r\n    content: \".................................................................................................................................\";\r\n}\r\n\r\n#greentea_description, #blacktea_description, #lemonade_description, #croissant_description, #doughnut_description, #pudding_description {\r\n    font-size: 15px;\r\n    font-style: italic;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    color: white;\r\n    text-align: left;\r\n    width: 90%;\r\n    margin-left: 3%;\r\n}\r\n\r\n/* Contact Page Styles */\r\n\r\n#contact_one, #contact_two, #contact_three, #business_hours {\r\n    color: white;\r\n    font-size: 30px;\r\n\r\n    width: 600px;;\r\n    margin: 5px auto; \r\n\r\n    text-align: left;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://multi_page_meu/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://multi_page_meu/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://multi_page_meu/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://multi_page_meu/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://multi_page_meu/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://multi_page_meu/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://multi_page_meu/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://multi_page_meu/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://multi_page_meu/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://multi_page_meu/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://multi_page_meu/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contactUs.js":
/*!**************************!*\
  !*** ./src/contactUs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactUsTabClick: () => (/* binding */ contactUsTabClick)\n/* harmony export */ });\n/* harmony import */ var _helperFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFuncs */ \"./src/helperFuncs.js\");\n\r\n\r\nconst contactElems = () => {\r\n    const contentDiv = document.getElementById('content');\r\n    // while (contentDiv.hasChildNodes() && contentDiv.lastChild.id != \"nav_bar\") {\r\n    //     contentDiv.removeChild(contentDiv.lastChild);\r\n    // }\r\n    (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.delPageContent)(contentDiv);\r\n\r\n    const contactContainer = document.createElement('div');\r\n    contactContainer.id = \"contact_container\";\r\n\r\n    const contactHeader = document.createElement('h2');\r\n    contactHeader.id = \"contactus_header\";\r\n    contactHeader.innerText = \"Contact Us\";\r\n\r\n    const contactOne = document.createElement('div');\r\n    contactOne.id = \"contact_one\";\r\n    contactOne.innerText = \"Phone: (111) 222-3333\"\r\n\r\n    const contactTwo = document.createElement('div');\r\n    contactTwo.id = \"contact_two\";\r\n    contactTwo.innerText = \"Email: SomeEmail@realemail.com\"\r\n\r\n    const contactThree = document.createElement('div');\r\n    contactThree.id = \"contact_three\";\r\n    contactThree.innerText = \"Fax: (555) 666-7777\"\r\n\r\n    const businessHours = document.createElement('div');\r\n    businessHours.id = \"business_hours\";\r\n    businessHours.innerText = \"Business Hours: 7 AM - 5 PM (Mon - Sat)\"\r\n\r\n    contactContainer.appendChild(contactHeader);\r\n    contactContainer.appendChild(contactOne);\r\n    contactContainer.appendChild(contactTwo);\r\n    contactContainer.appendChild(contactThree);\r\n    contactContainer.appendChild(businessHours);\r\n\r\n    contentDiv.appendChild(contactContainer);\r\n}\r\n\r\nconst contactUsTabClick = () => {\r\n    const contactUsTab = document.getElementById('contactus_tab');\r\n\r\n    contactUsTab.addEventListener('click', ()=> {\r\n        contactElems();\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://multi_page_meu/./src/contactUs.js?");

/***/ }),

/***/ "./src/drinksMenu.js":
/*!***************************!*\
  !*** ./src/drinksMenu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drinkTabClick: () => (/* binding */ drinkTabClick)\n/* harmony export */ });\n/* harmony import */ var _helperFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFuncs */ \"./src/helperFuncs.js\");\n\r\n\r\nconst drinkMenuElems = () => {\r\n\r\n    const contentDiv = document.getElementById('content');\r\n    // while (contentDiv.hasChildNodes() && contentDiv.lastChild.id != \"nav_bar\") {\r\n    //     contentDiv.removeChild(contentDiv.lastChild);\r\n    // }\r\n    (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.delPageContent)(contentDiv);\r\n    \r\n    //I suggest putting all the below into a single container div for ease of removal\r\n    const menuHeader = document.createElement('h2');\r\n    menuHeader.id = \"drinks_header\";\r\n    menuHeader.innerText = \"Drinks\";\r\n\r\n    // greentea Item generation-----------------------------\r\n    // const greenTeaElem = document.createElement('div');\r\n    // greenTeaElem.id = \"greentea\";\r\n\r\n    // const greenTeaHead = document.createElement('div');\r\n    // greenTeaHead.id = 'greentea_head';\r\n\r\n    // const greenTeaName = document.createElement('div');\r\n    // greenTeaName.id = 'greentea_name';\r\n    // greenTeaName.innerText = \"Green Tea\";\r\n    \r\n    // const greenTeaPrice = document.createElement('div');\r\n    // greenTeaPrice.id = \"greentea_price\";\r\n    // greenTeaPrice.innerText = \"$5.99\";\r\n\r\n    // greenTeaHead.appendChild(greenTeaName);\r\n    // greenTeaHead.appendChild(greenTeaPrice);\r\n\r\n    // const greenTeaDescription = document.createElement('p');\r\n    // greenTeaDescription.id = \"greentea_description\";\r\n    // greenTeaDescription.innerText = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \"\r\n\r\n    // greenTeaElem.appendChild(greenTeaHead);\r\n    // greenTeaElem.appendChild(greenTeaDescription);\r\n    // greentea item generation-------------------------------\r\n\r\n\r\n    const greenTeaElem = (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.menuItemGen)('greentea', \"Green Tea\", \"$5.99\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \");\r\n    const blackTeaElem = (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.menuItemGen)('blacktea', \"Black Tea\", \"$5.99\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \");\r\n    const lemonadeElem = (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.menuItemGen)('lemonade', \"Lemonade\", \"$3.99\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \");\r\n    // const blackTeaElem = document.createElement('div');\r\n    // blackTeaElem.id = \"black_tea\";\r\n    // blackTeaElem.innerText = \"Black Tea\";\r\n\r\n    // const lemonadeElem = document.createElement('div');\r\n    // lemonadeElem.id = \"lemonade\";\r\n    // lemonadeElem.innerText = \"Lemonade\";\r\n\r\n    const menuContainer = document.createElement('div');\r\n    menuContainer.id = 'menu_container'\r\n\r\n    //update: single container finished\r\n    menuContainer.appendChild(menuHeader);\r\n    menuContainer.appendChild(greenTeaElem);\r\n    \r\n    menuContainer.appendChild(blackTeaElem);\r\n    menuContainer.appendChild(lemonadeElem);\r\n\r\n    contentDiv.appendChild(menuContainer);\r\n}\r\n\r\nconst drinkTabClick = () => {\r\n    const drinkTab = document.getElementById('drinks_tab');\r\n\r\n    drinkTab.addEventListener('click', () => {\r\n        drinkMenuElems();\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://multi_page_meu/./src/drinksMenu.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footerElem: () => (/* binding */ footerElem)\n/* harmony export */ });\nconst footerElem = () => {\r\n    const footerDiv = document.getElementById('footer_content');\r\n\r\n    const footerContainer = document.createElement('div');\r\n    footerContainer.id = 'footer_container';\r\n\r\n    const unorderedListFooterNotes = document.createElement('ul');\r\n    unorderedListFooterNotes.id = \"footer_list\";\r\n\r\n    const noteOne = document.createElement('li');\r\n    noteOne.id = 'note_one';\r\n    noteOne.innerText = \"Based on The Odin Project's Restaurant Page Project\"\r\n\r\n    // const noteTwo = document.createElement('li');\r\n    // noteTwo.id = 'note_two';\r\n    // noteTwo.innerText = \"\"\r\n\r\n    unorderedListFooterNotes.appendChild(noteOne);\r\n\r\n    footerContainer.appendChild(unorderedListFooterNotes);\r\n\r\n    footerDiv.appendChild(footerContainer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://multi_page_meu/./src/footer.js?");

/***/ }),

/***/ "./src/helperFuncs.js":
/*!****************************!*\
  !*** ./src/helperFuncs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   delPageContent: () => (/* binding */ delPageContent),\n/* harmony export */   menuItemGen: () => (/* binding */ menuItemGen)\n/* harmony export */ });\n\r\nfunction delPageContent(insertedElem) {\r\n    while (insertedElem.hasChildNodes() && insertedElem.lastChild.id != \"nav_bar\") {\r\n        insertedElem.removeChild(insertedElem.lastChild);\r\n    }\r\n}\r\n\r\nfunction menuItemGen(id, name, price, description){\r\n    const itemElem = document.createElement('div');\r\n    itemElem.id = `${id}`;\r\n\r\n    const itemHead = document.createElement('div');\r\n    itemHead.id = `${id}_head`;\r\n\r\n    const itemName = document.createElement('div');\r\n    itemName.id = `${id}_name`;\r\n    itemName.innerText = `${name}`;\r\n\r\n    const itemPrice = document.createElement('div');\r\n    itemPrice.id = `${id}_price`;\r\n    itemPrice.innerText = `${price}`;\r\n\r\n    itemHead.appendChild(itemName);\r\n    itemHead.appendChild(itemPrice);\r\n\r\n    const itemDescription = document.createElement('p');\r\n    itemDescription.id = `${id}_description`\r\n    itemDescription.innerText = `${description}`\r\n\r\n    itemElem.appendChild(itemHead);\r\n    itemElem.appendChild(itemDescription);\r\n\r\n    return itemElem;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://multi_page_meu/./src/helperFuncs.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeContentElems: () => (/* binding */ homeContentElems),\n/* harmony export */   homeTabClick: () => (/* binding */ homeTabClick)\n/* harmony export */ });\n/* harmony import */ var _helperFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFuncs */ \"./src/helperFuncs.js\");\n\r\n\r\nconst homeContentElems = () => {\r\n    const contentDiv = document.getElementById('content');\r\n    (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.delPageContent)(contentDiv);\r\n\r\n\r\n    const homeContainer = document.createElement('div');\r\n    homeContainer.id = \"home_container\";\r\n\r\n    const homeHeader = document.createElement('h2');\r\n    homeHeader.id = 'home_header';\r\n    homeHeader.innerText = 'Welcome to Some Cafe!'\r\n\r\n    const homeMotto = document.createElement('div');\r\n    homeMotto.id = 'home_motto';\r\n    homeMotto.innerText = 'Some Motto and Some Catchphrase'\r\n\r\n    const homeDescription = document.createElement('p');\r\n    homeDescription.id = 'home_description';\r\n    homeDescription.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\r\n\r\n    homeContainer.appendChild(homeHeader);\r\n    homeContainer.appendChild(homeMotto);\r\n    homeContainer.appendChild(homeDescription);\r\n\r\n    contentDiv.appendChild(homeContainer);\r\n}\r\n\r\nconst homeTabClick = () => {\r\n    const homeTab = document.getElementById('home_tab');\r\n\r\n    homeTab.addEventListener('click', ()=> {\r\n        homeContentElems();\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://multi_page_meu/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _drinksMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drinksMenu */ \"./src/drinksMenu.js\");\n/* harmony import */ var _pastriesMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pastriesMenu */ \"./src/pastriesMenu.js\");\n/* harmony import */ var _contactUs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactUs */ \"./src/contactUs.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n// Notes: \r\n// There should be a module for each tab of content. Each module will export a function that creats a div element, adds the appropriate content and styles to that element then appent it to the dom\r\n// The module may be referring to the es6 module, not the module pattern\r\n// In es6 module, the whole file acts as the module/factory pattern, with the functions intended to be used publicly getting exported instead of returned.\r\n// The module pattern in function expression (aka IIFE) becomes unnecessary, but can still be used.\r\n// Normal function expression becomes the preference. \r\n// The convension is that the file itself becomes the constructor in a sense, with the file name becoming the constructor name. <- this understanding needs to be double checked.\r\n// However, that does not mean we cannot hold factory functions, classes, and object constructors inside the modules files.\r\n// We can still definitley hold them as well as export them from the files. \r\n// The files just become a more overarching module pattern, so to speak.\r\n\r\n// There is a tutorial on this in the es6 modules section of odin project, the setup is exactly like the restuarant page.\r\n\r\n//practice from tutorial\r\n// import myName from './myName';\r\n\r\n// function component() {\r\n//     const content = document.createElement('div')\r\n//     content.textContent = myName('Cody');\r\n//     return content;\r\n// }\r\n\r\n// document.getElementById('content').appendChild(component());\r\n\r\n//index.js will run all the functions from the other es6 module files.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_navBar__WEBPACK_IMPORTED_MODULE_0__.navBar)();\r\n(0,_footer__WEBPACK_IMPORTED_MODULE_5__.footerElem)()\r\n;(0,_home__WEBPACK_IMPORTED_MODULE_1__.homeContentElems)();\r\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.homeTabClick)();\r\n(0,_drinksMenu__WEBPACK_IMPORTED_MODULE_2__.drinkTabClick)();\r\n(0,_pastriesMenu__WEBPACK_IMPORTED_MODULE_3__.pastriesTabClick)();\r\n(0,_contactUs__WEBPACK_IMPORTED_MODULE_4__.contactUsTabClick)();\n\n//# sourceURL=webpack://multi_page_meu/./src/index.js?");

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navBar: () => (/* binding */ navBar)\n/* harmony export */ });\nconst navBar = () => {\r\n    const contentDiv = document.getElementById('content');\r\n\r\n    //insert navbar html into html here\r\n    const navElem = document.createElement('nav');\r\n    navElem.id = \"nav_bar\";\r\n\r\n    const navLogo = document.createElement('div');\r\n    navLogo.id = \"nav_logo\";\r\n    navLogo.innerText = \"SomeCafe\"\r\n\r\n\r\n    const unorderedListElem = document.createElement('ul');\r\n\r\n    const listItemHome = document.createElement('li');\r\n    listItemHome.id = 'home_tab';\r\n    listItemHome.innerText = 'Home';\r\n\r\n    const listItemDrinks = document.createElement('li');\r\n    listItemDrinks.id = 'drinks_tab';\r\n    listItemDrinks.innerText = \"Drinks\";\r\n\r\n    const listItemPastries = document.createElement('li');\r\n    listItemPastries.id = 'pastries_tab';\r\n    listItemPastries.innerText = \"Pastries\";\r\n\r\n    const listItemAboutUs = document.createElement('li');\r\n    listItemAboutUs.id = 'contactus_tab';\r\n    listItemAboutUs.innerText = \"Contact\"\r\n\r\n    //append list items into the unorderd list\r\n    unorderedListElem.appendChild(listItemHome);\r\n    unorderedListElem.appendChild(listItemDrinks);\r\n    unorderedListElem.appendChild(listItemPastries);\r\n    unorderedListElem.appendChild(listItemAboutUs);\r\n\r\n\r\n    //append logo into nav element\r\n    navElem.appendChild(navLogo);\r\n    //append the unordered list into nav element\r\n    navElem.appendChild(unorderedListElem);\r\n\r\n    //append the nav element into the content div\r\n    contentDiv.appendChild(navElem);\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack://multi_page_meu/./src/navBar.js?");

/***/ }),

/***/ "./src/pastriesMenu.js":
/*!*****************************!*\
  !*** ./src/pastriesMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pastriesTabClick: () => (/* binding */ pastriesTabClick)\n/* harmony export */ });\n/* harmony import */ var _helperFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFuncs */ \"./src/helperFuncs.js\");\n\r\n\r\nconst pastriesMenuElems = () => {\r\n\r\n    const contentDiv = document.getElementById('content');\r\n    (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.delPageContent)(contentDiv);\r\n    \r\n    const menuHeader = document.createElement('h2');\r\n    menuHeader.id = \"pastries_header\";\r\n    menuHeader.innerText = \"Pastries\";\r\n\r\n    // const croissantElem = document.createElement('div');\r\n    // croissantElem.id = \"croissant\";\r\n    // croissantElem.innerText = \"Croissant\";\r\n\r\n    // const doughnutElem = document.createElement('div');\r\n    // doughnutElem.id = \"doughnut\";\r\n    // doughnutElem.innerText = \"Doughnut\";\r\n\r\n    // const puddingElem = document.createElement('div');\r\n    // puddingElem.id = \"pudding\";\r\n    // puddingElem.innerText = \"Pudding\";\r\n\r\n    const croissantElem = (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.menuItemGen)('croissant', \"Croissant\", \"$4.99\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \");\r\n    const doughnutElem = (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.menuItemGen)('doughnut', \"Doughnut\", \"$2.99\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \");\r\n    const puddingElem = (0,_helperFuncs__WEBPACK_IMPORTED_MODULE_0__.menuItemGen)('pudding', \"Pudding\", \"$6.99\", \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \");\r\n\r\n    const menuContainer = document.createElement('div');\r\n    menuContainer.id = 'menu_container'\r\n\r\n    menuContainer.appendChild(menuHeader);\r\n    menuContainer.appendChild(croissantElem);\r\n    menuContainer.appendChild(doughnutElem);\r\n    menuContainer.appendChild(puddingElem);\r\n\r\n    contentDiv.appendChild(menuContainer);\r\n}\r\n\r\nconst pastriesTabClick = () => {\r\n    const pastriesTab = document.getElementById('pastries_tab');\r\n\r\n    pastriesTab.addEventListener('click', () => {\r\n        pastriesMenuElems();\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://multi_page_meu/./src/pastriesMenu.js?");

/***/ }),

/***/ "./src/images/petr-sevcovic-cafebg-unsplash.jpg":
/*!******************************************************!*\
  !*** ./src/images/petr-sevcovic-cafebg-unsplash.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eeca6ceef60b6b758436.jpg\";\n\n//# sourceURL=webpack://multi_page_meu/./src/images/petr-sevcovic-cafebg-unsplash.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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