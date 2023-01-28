/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/ChiKareGo2.ttf */ "./src/assets/fonts/ChiKareGo2.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/button.svg */ "./src/assets/button.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --slate-gray: #64748B;\n    --col-white: #FFFFFF;\n    --col-black: #000000;\n    --col-grey: #A5A5A5;\n    --col-darkgrey: #B6B7B8;\n}\n\n@font-face {\n    font-family: Chicago-12;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml {\n    min-height: 100%;\n    margin: 0;\n}\n\nbody {\n    min-height: 100vh;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(90deg, var(--col-white) 21px, transparent 1%) center, linear-gradient(var(--col-white) 21px, transparent 1%) center, var(--col-black);\n    background-size: 22px 22px;\n}\n\n#content {\n    height: 50%;\n    width: 50%;\n    display: grid;\n    grid-template-columns: max-content 1fr;\n    grid-template-rows: max-content 1fr;\n    grid-template-areas: \n    'head head'\n    'nav main';\n    border: 0.1em solid var(--col-black);\n}\n\n.title-bar {\n    grid-area: head;\n    flex: none;\n    display: flex;\n    align-items: center;\n    height: 1.5rem;\n    padding: 0.2rem 0.1rem;\n    background: linear-gradient(var(--col-black) 50%, transparent 50%);\n    background-size: 6.6666666667% 13.3333333333%;\n    background-clip: content-box;\n    border-bottom: solid 1px var(--col-black);\n}\n\n.page-title {\n    padding: 0 0.5em;\n    margin: 0 auto;\n    font-size: 1.5rem;\n    font-weight: bold;\n    line-height: 1.1;\n    text-align: center;\n    background: var(--col-white);\n    cursor: default;\n    font-family: Chicago-12;\n}\n\n.nav-container {\n    grid-area: nav;\n    padding: 1.5rem;\n    width: 250px;\n    border-right: solid 1px var(--col-black);\n}\n\nh1 {\n    font-family: Chicago-12;\n    margin: 0;\n}\n\n.main {\n    grid-area: main;\n    padding: 1.5rem;\n}\n\n.btn {\n    min-height: 20px;\n    min-width: 59px;\n    padding: 0 20px;\n    font-family: Chicago-12;\n    font-size: 18px;\n    text-align: center;\n    text-decoration: none;\n    background: var(--col-white);\n    border: solid 5.5px;\n    border-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") 30 stretch;\n    color: var(--col-black);\n}\n\n.project-head {\n    display: flex;\n    flex-direction: row;\n    margin: 0;\n    padding: 0;\n}\n\n.modal {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal-content {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    margin: 15% auto;\n    height: fit-content;\n    width: fit-content;\n    border-radius: 5px;\n    border: 1px solid red;\n    background-color: white;\n}\n\ninput {\n    border: 1.5px solid var(--col-black);\n    font-family: Chicago-12;\n    font-size: 18px;\n    padding-left: 5px;\n}\n\ninput[type=\"text\"]:focus-visible,\ninput[type=\"date\"]:focus-visible,\ntextarea:focus {\n    background: var(--col-black);\n    color: var(--col-white);\n}\n\n.display-none {\n    display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,oBAAoB;IACpB,oBAAoB;IACpB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,4CAAuC;AAC3C;;AAEA;IACI,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iKAAiK;IACjK,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,UAAU;IACV,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC;;cAEU;IACV,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,sBAAsB;IACtB,kEAAkE;IAClE,6CAA6C;IAC7C,4BAA4B;IAC5B,yCAAyC;AAC7C;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,4BAA4B;IAC5B,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,eAAe;IACf,YAAY;IACZ,wCAAwC;AAC5C;;AAEA;IACI,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,qBAAqB;IACrB,4BAA4B;IAC5B,mBAAmB;IACnB,gEAAiD;IACjD,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,WAAW;IACX,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,oCAAoC;IACpC,uBAAuB;IACvB,eAAe;IACf,iBAAiB;AACrB;;AAEA;;;IAGI,4BAA4B;IAC5B,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB","sourcesContent":[":root {\n    --slate-gray: #64748B;\n    --col-white: #FFFFFF;\n    --col-black: #000000;\n    --col-grey: #A5A5A5;\n    --col-darkgrey: #B6B7B8;\n}\n\n@font-face {\n    font-family: Chicago-12;\n    src: url(./assets/fonts/ChiKareGo2.ttf);\n}\n\nhtml {\n    min-height: 100%;\n    margin: 0;\n}\n\nbody {\n    min-height: 100vh;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(90deg, var(--col-white) 21px, transparent 1%) center, linear-gradient(var(--col-white) 21px, transparent 1%) center, var(--col-black);\n    background-size: 22px 22px;\n}\n\n#content {\n    height: 50%;\n    width: 50%;\n    display: grid;\n    grid-template-columns: max-content 1fr;\n    grid-template-rows: max-content 1fr;\n    grid-template-areas: \n    'head head'\n    'nav main';\n    border: 0.1em solid var(--col-black);\n}\n\n.title-bar {\n    grid-area: head;\n    flex: none;\n    display: flex;\n    align-items: center;\n    height: 1.5rem;\n    padding: 0.2rem 0.1rem;\n    background: linear-gradient(var(--col-black) 50%, transparent 50%);\n    background-size: 6.6666666667% 13.3333333333%;\n    background-clip: content-box;\n    border-bottom: solid 1px var(--col-black);\n}\n\n.page-title {\n    padding: 0 0.5em;\n    margin: 0 auto;\n    font-size: 1.5rem;\n    font-weight: bold;\n    line-height: 1.1;\n    text-align: center;\n    background: var(--col-white);\n    cursor: default;\n    font-family: Chicago-12;\n}\n\n.nav-container {\n    grid-area: nav;\n    padding: 1.5rem;\n    width: 250px;\n    border-right: solid 1px var(--col-black);\n}\n\nh1 {\n    font-family: Chicago-12;\n    margin: 0;\n}\n\n.main {\n    grid-area: main;\n    padding: 1.5rem;\n}\n\n.btn {\n    min-height: 20px;\n    min-width: 59px;\n    padding: 0 20px;\n    font-family: Chicago-12;\n    font-size: 18px;\n    text-align: center;\n    text-decoration: none;\n    background: var(--col-white);\n    border: solid 5.5px;\n    border-image: url(./assets/button.svg) 30 stretch;\n    color: var(--col-black);\n}\n\n.project-head {\n    display: flex;\n    flex-direction: row;\n    margin: 0;\n    padding: 0;\n}\n\n.modal {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal-content {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    margin: 15% auto;\n    height: fit-content;\n    width: fit-content;\n    border-radius: 5px;\n    border: 1px solid red;\n    background-color: white;\n}\n\ninput {\n    border: 1.5px solid var(--col-black);\n    font-family: Chicago-12;\n    font-size: 18px;\n    padding-left: 5px;\n}\n\ninput[type=\"text\"]:focus-visible,\ninput[type=\"date\"]:focus-visible,\ntextarea:focus {\n    background: var(--col-black);\n    color: var(--col-white);\n}\n\n.display-none {\n    display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/create-element.js":
/*!*******************************!*\
  !*** ./src/create-element.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const element = (() => {
    const createDiv = (className) => {
        const div = document.createElement('div');
        div.classList.add(className);
        return div
    };

    const createH1 = (className) => {
        const h1 = document.createElement('h1');
        h1.classList.add(className);
        return h1
    }

    const createPara = (className) => {
        const para = document.createElement('p');
        para.classList.add(className);
        return para;
    };

    const createInput = (inputType, inputId) => {
        const input = document.createElement('input');
        input.setAttribute('type', inputType);
        input.setAttribute('id', `${inputId}-input`);
        input.setAttribute('name', `${inputId}-input`);
        return input
    };

    const createButton = (className) => {
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.classList.add(className);
        return btn;
    };

    return {
        createDiv,
        createH1,
        createPara,
        createInput,
        createButton
    };
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (element);

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjectTasks": () => (/* binding */ renderProjectTasks),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-element */ "./src/create-element.js");






const openProjectModal = document.querySelector('.open-project-modal');
const main = document.querySelector('.main');

openProjectModal.addEventListener('click', () => {
    (0,_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('project-form');
    (0,_modal__WEBPACK_IMPORTED_MODULE_1__.createProjectForm)();
})

const renderProjects = (projects) => {
    const projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML = '';

    projects.forEach((project, projectIndex, tasks) => {
        const projectCard = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createDiv('project-card');
        projectContainer.appendChild(projectCard);

        projectCard.addEventListener('click', () => {
            renderProjectTasks(project, projectIndex);
        })

        const projectCardTitle = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createPara('project-title');
        projectCardTitle.textContent = project.title;

        const projectRemoveButton = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createButton('btn-project-remove');
        projectRemoveButton.textContent = 'X';

        projectCard.append(projectCardTitle, projectRemoveButton);

        projectRemoveButton.addEventListener('click', () => {
            (0,_projects__WEBPACK_IMPORTED_MODULE_0__.removeProject)(projectIndex);
        })
    })
}

const renderProjectTasks = (project, projectIndex) => {
    const main = document.querySelector('.main');
    main.innerHTML = '';

    const projectPageHeader = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createDiv('project-head');
    main.appendChild(projectPageHeader);

    const projectPageTitle = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createH1('project-head-title');
    projectPageTitle.textContent = project.title;

    const addTaskButton = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createButton('btn-task-add');
    addTaskButton.textContent = 'Add Task';

    projectPageHeader.append(projectPageTitle, addTaskButton);

    addTaskButton.addEventListener('click', () => {
        (0,_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('task-form');
        (0,_modal__WEBPACK_IMPORTED_MODULE_1__.createTaskForm)(projectIndex)
    })

    const taskContainer = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createDiv('task-container');
    main.appendChild(taskContainer);

    project.projectTasks.forEach((task, index) => {
        const taskCard = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createDiv('task-card');
        taskContainer.appendChild(taskCard);

        const taskTitle = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createPara('task-title');
        const taskDue = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createPara('task-date');
        const taskPrio = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createPara('task-prio');
        const taskDetailBtn = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createButton('btn-task-detail');
        const taskEditBtn = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createButton('btn-task-edit');
        const taskRemoveBtn = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createButton('btn-task-remove');

        taskTitle.textContent = task.name;
        taskDue.textContent = task.date;
        taskPrio.textContent = task.priority;
        taskDetailBtn.textContent = 'Detail';
        taskEditBtn.textContent = 'Edit';
        taskRemoveBtn.textContent = 'X';

        taskCard.append(taskTitle, taskDue, taskPrio, taskDetailBtn, taskEditBtn, taskRemoveBtn)

        taskDetailBtn.addEventListener('click', () => {
            ;(0,_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('task-detail');
            (0,_modal__WEBPACK_IMPORTED_MODULE_1__.createTaskDetail)(projectIndex, index);
        })

        taskEditBtn.addEventListener('click', () => {
            ;(0,_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('task-edit');
            (0,_modal__WEBPACK_IMPORTED_MODULE_1__.createEditForm)(projectIndex, index);
        })

        taskRemoveBtn.addEventListener('click', () => {
            ;(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.removeTask)(projectIndex, index);
        })
    })
}



/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "createEditForm": () => (/* binding */ createEditForm),
/* harmony export */   "createProjectForm": () => (/* binding */ createProjectForm),
/* harmony export */   "createTaskDetail": () => (/* binding */ createTaskDetail),
/* harmony export */   "createTaskForm": () => (/* binding */ createTaskForm),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-element */ "./src/create-element.js");





const modal = document.querySelector('.modal');
const form = document.querySelector('#modal-form');

const openModal = (className) => {
    form.classList.add(className);
    modal.classList.remove('display-none');
}

document.addEventListener('click', (event) => {
    if (event.target === modal || event.target.classList.contains('btn-close-form')) {
        closeModal();
    }
})

const closeModal = () => {
    form.reset();
    form.removeAttribute('class');
    modal.classList.add('display-none')
    form.innerHTML = '';
}

const createProjectForm = () => {
    form.innerHTML = '';

    const formTitle = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createPara('form-title');
    const titleInput = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createInput('text', 'title');
    const closeButton = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createButton('btn-close-form');
    const submitButton = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createButton('btn-submit-form');

    formTitle.textContent = 'Add New Project';
    closeButton.textContent = 'Cancel';
    submitButton.textContent = 'Submit';

    form.append(formTitle, titleInput, closeButton, submitButton);

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(titleInput.value);
        (0,_display__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray);
        closeModal();
    })
}

const createTaskForm = (projectIndex) => {
    form.innerHTML = '';

    const formTitle = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createPara('form-title');
    const titleInput = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createInput('text', 'title');
    const dateInput = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createInput('date', 'date');
    const prioInputL = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createInput('radio', 'prio');
    const prioInputH = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createInput('radio', 'prio');
    const closeButton = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createButton('btn-close-form');
    const submitButton = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createButton('btn-submit-form');

    formTitle.textContent = 'Add New Task';
    prioInputL.setAttribute('value', 'low');
    prioInputH.setAttribute('value', 'high');
    closeButton.textContent = 'Cancel';
    submitButton.textContent = 'Submit';

    form.append(formTitle, titleInput, dateInput, prioInputL, prioInputH, closeButton, submitButton);

    const radioInput = document.querySelectorAll('input[name="prio-input"]');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        let prio;
        radioInput.forEach((a) => {
            if (a.checked === true) {
                prio = a.value;
            }
        })
        ;(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.createTask)(projectIndex, titleInput.value, dateInput.value, prio);
        (0,_display__WEBPACK_IMPORTED_MODULE_1__.renderProjectTasks)(_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray[projectIndex], projectIndex);
        closeModal();
    })
}

const createTaskDetail = (projectIndex, taskIndex) => {
    form.innerHTML = '';
 
    const taskTitle = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createPara('detail-task-title');
    const taskDue = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createPara('detail-task-date');
    const taskPrio = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createPara('detail-task-prio');

    taskTitle.textContent = _projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray[projectIndex].projectTasks[taskIndex].name;
    taskDue.textContent = _projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray[projectIndex].projectTasks[taskIndex].date;
    taskPrio.textContent = _projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray[projectIndex].projectTasks[taskIndex].priority;

    form.append(taskTitle, taskDue, taskPrio);
}

const createEditForm = (projectIndex, index) => {
    form.innerHTML = '';

    const formTitle = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createPara('form-title');
    const titleInput = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createInput('text', 'title');
    const dateInput = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createInput('date', 'date');
    const prioInputL = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createInput('radio', 'prio');
    const prioInputH = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createInput('radio', 'prio');
    const closeButton = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createButton('btn-close-form');
    const submitButton = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createButton('btn-submit-form');

    formTitle.textContent = 'Edit Task';
    prioInputL.setAttribute('value', 'low');
    prioInputH.setAttribute('value', 'high');
    closeButton.textContent = 'Cancel';
    submitButton.textContent = 'Edit';

    form.append(formTitle, titleInput, dateInput, prioInputL, prioInputH, closeButton, submitButton);

    titleInput.value = _projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray[projectIndex].projectTasks[index].name;
    dateInput.value = _projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray[projectIndex].projectTasks[index].date;

    const radioInput = document.querySelectorAll('input[name="prio-input"]');

    radioInput.forEach((a) => {
        if (a.value === _projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray[projectIndex].projectTasks[index].priority) {
            a.checked = true;
        }
    })

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        let prio;
        radioInput.forEach((a) => {
            if (a.checked === true) {
                prio = a.value;
            }
        })
        ;(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.updateTask)(projectIndex, index, titleInput.value, dateInput.value, prio)
        closeModal();
    })
}



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory),
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "retrieveStorage": () => (/* binding */ retrieveStorage),
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");



const main = document.querySelector('.main');

const projectFactory = (title) => {
    const projectTasks = [];

    return { title, projectTasks };
}

let projectsArray = [];

const createProject = (title) => {
    const newProject = projectFactory(title);
    projectsArray.push(newProject);
    updateStorage();
    console.log(projectsArray);
}

const removeProject = (index) => {
    projectsArray.splice(index, 1);
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(projectsArray);
    main.textContent = '';
    updateStorage();
    console.log(projectsArray);
}

const updateStorage = () => {
    let item = JSON.stringify(projectsArray);
    localStorage.setItem('projects', item);
}

const retrieveStorage = () => {
    if (localStorage.getItem('projects') === null) {
        console.log('No projects found');
        console.log('Creating Wow project');
        createProject('Wow');
    } else {
        const projectsFromStorage = JSON.parse(localStorage.getItem('projects'));
        projectsArray = projectsFromStorage;
    }
}






/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "removeTask": () => (/* binding */ removeTask),
/* harmony export */   "taskFactory": () => (/* binding */ taskFactory),
/* harmony export */   "updateTask": () => (/* binding */ updateTask)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



const taskFactory = (name, date, priority) => {
    return { name , date, priority}
}

const createTask = (projectIndex, name, date, priority) => {
    const newTask = taskFactory(name, date, priority);
    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex].projectTasks.push(newTask);
    console.log(priority);
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
    console.log(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray)
}

const removeTask = (projectIndex, taskIndex) => {
    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex].projectTasks.splice(taskIndex, 1);
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.renderProjectTasks)(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex], projectIndex);
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
    console.log(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray)
}

const updateTask = (projectIndex, taskIndex, newName, newDate, newPrio) => {
    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex].projectTasks[taskIndex].name = newName;
    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex].projectTasks[taskIndex].date = newDate;
    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex].projectTasks[taskIndex].priority = newPrio;
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.renderProjectTasks)(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex], projectIndex);
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.updateStorage)();
    console.log(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray)
}





/***/ }),

/***/ "./src/assets/button.svg":
/*!*******************************!*\
  !*** ./src/assets/button.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "692d8269c01a5c4053ec.svg";

/***/ }),

/***/ "./src/assets/fonts/ChiKareGo2.ttf":
/*!*****************************************!*\
  !*** ./src/assets/fonts/ChiKareGo2.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e04a2c65ef398e7f618.ttf";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");





(0,_projects__WEBPACK_IMPORTED_MODULE_1__.retrieveStorage)();
console.log(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
(0,_display__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTJDO0FBQ2dDO0FBQ3REO0FBQzJCOztBQUVoRCwwREFBZTtBQUNmLFlBQVksb0RBQWE7QUFDekIsd0RBQWMsQ0FBQyxvREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL3NyYy9jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW5fdG9kby1saXN0di93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQ2hpS2FyZUdvMi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9idXR0b24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1zbGF0ZS1ncmF5OiAjNjQ3NDhCO1xcbiAgICAtLWNvbC13aGl0ZTogI0ZGRkZGRjtcXG4gICAgLS1jb2wtYmxhY2s6ICMwMDAwMDA7XFxuICAgIC0tY29sLWdyZXk6ICNBNUE1QTU7XFxuICAgIC0tY29sLWRhcmtncmV5OiAjQjZCN0I4O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IENoaWNhZ28tMTI7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWNvbC13aGl0ZSkgMjFweCwgdHJhbnNwYXJlbnQgMSUpIGNlbnRlciwgbGluZWFyLWdyYWRpZW50KHZhcigtLWNvbC13aGl0ZSkgMjFweCwgdHJhbnNwYXJlbnQgMSUpIGNlbnRlciwgdmFyKC0tY29sLWJsYWNrKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMnB4IDIycHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICdoZWFkIGhlYWQnXFxuICAgICduYXYgbWFpbic7XFxuICAgIGJvcmRlcjogMC4xZW0gc29saWQgdmFyKC0tY29sLWJsYWNrKTtcXG59XFxuXFxuLnRpdGxlLWJhciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZDtcXG4gICAgZmxleDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjFyZW07XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1jb2wtYmxhY2spIDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA2LjY2NjY2NjY2NjclIDEzLjMzMzMzMzMzMzMlO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tY29sLWJsYWNrKTtcXG59XFxuXFxuLnBhZ2UtdGl0bGUge1xcbiAgICBwYWRkaW5nOiAwIDAuNWVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsaW5lLWhlaWdodDogMS4xO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbC13aGl0ZSk7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgZm9udC1mYW1pbHk6IENoaWNhZ28tMTI7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCB2YXIoLS1jb2wtYmxhY2spO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtZmFtaWx5OiBDaGljYWdvLTEyO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi5idG4ge1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDU5cHg7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgZm9udC1mYW1pbHk6IENoaWNhZ28tMTI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbC13aGl0ZSk7XFxuICAgIGJvcmRlcjogc29saWQgNS41cHg7XFxuICAgIGJvcmRlci1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSAzMCBzdHJldGNoO1xcbiAgICBjb2xvcjogdmFyKC0tY29sLWJsYWNrKTtcXG59XFxuXFxuLnByb2plY3QtaGVhZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tY29sLWJsYWNrKTtcXG4gICAgZm9udC1mYW1pbHk6IENoaWNhZ28tMTI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cy12aXNpYmxlLFxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTpmb2N1cy12aXNpYmxlLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sLWJsYWNrKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbC13aGl0ZSk7XFxufVxcblxcbi5kaXNwbGF5LW5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpS0FBaUs7SUFDakssMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQzs7Y0FFVTtJQUNWLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGtFQUFrRTtJQUNsRSw2Q0FBNkM7SUFDN0MsNEJBQTRCO0lBQzVCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsZ0VBQWlEO0lBQ2pELHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0ksNEJBQTRCO0lBQzVCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXNsYXRlLWdyYXk6ICM2NDc0OEI7XFxuICAgIC0tY29sLXdoaXRlOiAjRkZGRkZGO1xcbiAgICAtLWNvbC1ibGFjazogIzAwMDAwMDtcXG4gICAgLS1jb2wtZ3JleTogI0E1QTVBNTtcXG4gICAgLS1jb2wtZGFya2dyZXk6ICNCNkI3Qjg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogQ2hpY2Fnby0xMjtcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvZm9udHMvQ2hpS2FyZUdvMi50dGYpO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tY29sLXdoaXRlKSAyMXB4LCB0cmFuc3BhcmVudCAxJSkgY2VudGVyLCBsaW5lYXItZ3JhZGllbnQodmFyKC0tY29sLXdoaXRlKSAyMXB4LCB0cmFuc3BhcmVudCAxJSkgY2VudGVyLCB2YXIoLS1jb2wtYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIycHggMjJweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgJ2hlYWQgaGVhZCdcXG4gICAgJ25hdiBtYWluJztcXG4gICAgYm9yZGVyOiAwLjFlbSBzb2xpZCB2YXIoLS1jb2wtYmxhY2spO1xcbn1cXG5cXG4udGl0bGUtYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkO1xcbiAgICBmbGV4OiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMC4ycmVtIDAuMXJlbTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWNvbC1ibGFjaykgNTAlLCB0cmFuc3BhcmVudCA1MCUpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYuNjY2NjY2NjY2NyUgMTMuMzMzMzMzMzMzMyU7XFxuICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1jb2wtYmxhY2spO1xcbn1cXG5cXG4ucGFnZS10aXRsZSB7XFxuICAgIHBhZGRpbmc6IDAgMC41ZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sLXdoaXRlKTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBmb250LWZhbWlseTogQ2hpY2Fnby0xMjtcXG59XFxuXFxuLm5hdi1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHZhcigtLWNvbC1ibGFjayk7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6IENoaWNhZ28tMTI7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIG1pbi13aWR0aDogNTlweDtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBmb250LWZhbWlseTogQ2hpY2Fnby0xMjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sLXdoaXRlKTtcXG4gICAgYm9yZGVyOiBzb2xpZCA1LjVweDtcXG4gICAgYm9yZGVyLWltYWdlOiB1cmwoLi9hc3NldHMvYnV0dG9uLnN2ZykgMzAgc3RyZXRjaDtcXG4gICAgY29sb3I6IHZhcigtLWNvbC1ibGFjayk7XFxufVxcblxcbi5wcm9qZWN0LWhlYWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWNvbC1ibGFjayk7XFxuICAgIGZvbnQtZmFtaWx5OiBDaGljYWdvLTEyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMtdmlzaWJsZSxcXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Zm9jdXMtdmlzaWJsZSxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbC1ibGFjayk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2wtd2hpdGUpO1xcbn1cXG5cXG4uZGlzcGxheS1ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuY29uc3QgZWxlbWVudCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlRGl2ID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIGRpdlxuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVIMSA9IChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoMS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiBoMVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVBhcmEgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmEuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gcGFyYTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlSW5wdXQgPSAoaW5wdXRUeXBlLCBpbnB1dElkKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRUeXBlKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGAke2lucHV0SWR9LWlucHV0YCk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke2lucHV0SWR9LWlucHV0YCk7XG4gICAgICAgIHJldHVybiBpbnB1dFxuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiBidG47XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZURpdixcbiAgICAgICAgY3JlYXRlSDEsXG4gICAgICAgIGNyZWF0ZVBhcmEsXG4gICAgICAgIGNyZWF0ZUlucHV0LFxuICAgICAgICBjcmVhdGVCdXR0b25cbiAgICB9O1xufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50OyIsImltcG9ydCB7IHByb2plY3RzQXJyYXksIHJlbW92ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgb3Blbk1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcbmltcG9ydCB7IGNyZWF0ZUVkaXRGb3JtLCBjcmVhdGVQcm9qZWN0Rm9ybSwgY3JlYXRlVGFza0RldGFpbCwgY3JlYXRlVGFza0Zvcm0gfSBmcm9tIFwiLi9tb2RhbFwiO1xuaW1wb3J0IHsgcmVtb3ZlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgZWxlbWVudCBmcm9tIFwiLi9jcmVhdGUtZWxlbWVudFwiO1xuXG5jb25zdCBvcGVuUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tcHJvamVjdC1tb2RhbCcpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbm9wZW5Qcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKCdwcm9qZWN0LWZvcm0nKTtcbiAgICBjcmVhdGVQcm9qZWN0Rm9ybSgpO1xufSlcblxuY29uc3QgcmVuZGVyUHJvamVjdHMgPSAocHJvamVjdHMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIHByb2plY3RJbmRleCwgdGFza3MpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBlbGVtZW50LmNyZWF0ZURpdigncHJvamVjdC1jYXJkJyk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuXG4gICAgICAgIHByb2plY3RDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3QsIHByb2plY3RJbmRleCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcHJvamVjdENhcmRUaXRsZSA9IGVsZW1lbnQuY3JlYXRlUGFyYSgncHJvamVjdC10aXRsZScpO1xuICAgICAgICBwcm9qZWN0Q2FyZFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0UmVtb3ZlQnV0dG9uID0gZWxlbWVudC5jcmVhdGVCdXR0b24oJ2J0bi1wcm9qZWN0LXJlbW92ZScpO1xuICAgICAgICBwcm9qZWN0UmVtb3ZlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuXG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZChwcm9qZWN0Q2FyZFRpdGxlLCBwcm9qZWN0UmVtb3ZlQnV0dG9uKTtcblxuICAgICAgICBwcm9qZWN0UmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0SW5kZXgpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmNvbnN0IHJlbmRlclByb2plY3RUYXNrcyA9IChwcm9qZWN0LCBwcm9qZWN0SW5kZXgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgcHJvamVjdFBhZ2VIZWFkZXIgPSBlbGVtZW50LmNyZWF0ZURpdigncHJvamVjdC1oZWFkJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0UGFnZUhlYWRlcik7XG5cbiAgICBjb25zdCBwcm9qZWN0UGFnZVRpdGxlID0gZWxlbWVudC5jcmVhdGVIMSgncHJvamVjdC1oZWFkLXRpdGxlJyk7XG4gICAgcHJvamVjdFBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZWxlbWVudC5jcmVhdGVCdXR0b24oJ2J0bi10YXNrLWFkZCcpO1xuICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuXG4gICAgcHJvamVjdFBhZ2VIZWFkZXIuYXBwZW5kKHByb2plY3RQYWdlVGl0bGUsIGFkZFRhc2tCdXR0b24pO1xuXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgb3Blbk1vZGFsKCd0YXNrLWZvcm0nKTtcbiAgICAgICAgY3JlYXRlVGFza0Zvcm0ocHJvamVjdEluZGV4KVxuICAgIH0pXG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZWxlbWVudC5jcmVhdGVEaXYoJ3Rhc2stY29udGFpbmVyJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcblxuICAgIHByb2plY3QucHJvamVjdFRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZWxlbWVudC5jcmVhdGVEaXYoJ3Rhc2stY2FyZCcpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBlbGVtZW50LmNyZWF0ZVBhcmEoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGFza0R1ZSA9IGVsZW1lbnQuY3JlYXRlUGFyYSgndGFzay1kYXRlJyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvID0gZWxlbWVudC5jcmVhdGVQYXJhKCd0YXNrLXByaW8nKTtcbiAgICAgICAgY29uc3QgdGFza0RldGFpbEJ0biA9IGVsZW1lbnQuY3JlYXRlQnV0dG9uKCdidG4tdGFzay1kZXRhaWwnKTtcbiAgICAgICAgY29uc3QgdGFza0VkaXRCdG4gPSBlbGVtZW50LmNyZWF0ZUJ1dHRvbignYnRuLXRhc2stZWRpdCcpO1xuICAgICAgICBjb25zdCB0YXNrUmVtb3ZlQnRuID0gZWxlbWVudC5jcmVhdGVCdXR0b24oJ2J0bi10YXNrLXJlbW92ZScpO1xuXG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgICAgICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZTtcbiAgICAgICAgdGFza1ByaW8udGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICB0YXNrRGV0YWlsQnRuLnRleHRDb250ZW50ID0gJ0RldGFpbCc7XG4gICAgICAgIHRhc2tFZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgICAgICB0YXNrUmVtb3ZlQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuXG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZCh0YXNrVGl0bGUsIHRhc2tEdWUsIHRhc2tQcmlvLCB0YXNrRGV0YWlsQnRuLCB0YXNrRWRpdEJ0biwgdGFza1JlbW92ZUJ0bilcblxuICAgICAgICB0YXNrRGV0YWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgb3Blbk1vZGFsKCd0YXNrLWRldGFpbCcpO1xuICAgICAgICAgICAgY3JlYXRlVGFza0RldGFpbChwcm9qZWN0SW5kZXgsIGluZGV4KTtcbiAgICAgICAgfSlcblxuICAgICAgICB0YXNrRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG9wZW5Nb2RhbCgndGFzay1lZGl0Jyk7XG4gICAgICAgICAgICBjcmVhdGVFZGl0Rm9ybShwcm9qZWN0SW5kZXgsIGluZGV4KTtcbiAgICAgICAgfSlcblxuICAgICAgICB0YXNrUmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlVGFzayhwcm9qZWN0SW5kZXgsIGluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0cywgcmVuZGVyUHJvamVjdFRhc2tzIH0iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzLCByZW5kZXJQcm9qZWN0VGFza3MgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrLCB1cGRhdGVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCBlbGVtZW50IGZyb20gXCIuL2NyZWF0ZS1lbGVtZW50XCI7XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZvcm0nKTtcblxuY29uc3Qgb3Blbk1vZGFsID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1jbG9zZS1mb3JtJykpIHtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbn0pXG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGZvcm0ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktbm9uZScpXG4gICAgZm9ybS5pbm5lckhUTUwgPSAnJztcbn1cblxuY29uc3QgY3JlYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgZm9ybS5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGVsZW1lbnQuY3JlYXRlUGFyYSgnZm9ybS10aXRsZScpO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBlbGVtZW50LmNyZWF0ZUlucHV0KCd0ZXh0JywgJ3RpdGxlJyk7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBlbGVtZW50LmNyZWF0ZUJ1dHRvbignYnRuLWNsb3NlLWZvcm0nKTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBlbGVtZW50LmNyZWF0ZUJ1dHRvbignYnRuLXN1Ym1pdC1mb3JtJyk7XG5cbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIE5ldyBQcm9qZWN0JztcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgZm9ybS5hcHBlbmQoZm9ybVRpdGxlLCB0aXRsZUlucHV0LCBjbG9zZUJ1dHRvbiwgc3VibWl0QnV0dG9uKTtcblxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdCh0aXRsZUlucHV0LnZhbHVlKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHNBcnJheSk7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9KVxufVxuXG5jb25zdCBjcmVhdGVUYXNrRm9ybSA9IChwcm9qZWN0SW5kZXgpID0+IHtcbiAgICBmb3JtLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZWxlbWVudC5jcmVhdGVQYXJhKCdmb3JtLXRpdGxlJyk7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGVsZW1lbnQuY3JlYXRlSW5wdXQoJ3RleHQnLCAndGl0bGUnKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBlbGVtZW50LmNyZWF0ZUlucHV0KCdkYXRlJywgJ2RhdGUnKTtcbiAgICBjb25zdCBwcmlvSW5wdXRMID0gZWxlbWVudC5jcmVhdGVJbnB1dCgncmFkaW8nLCAncHJpbycpO1xuICAgIGNvbnN0IHByaW9JbnB1dEggPSBlbGVtZW50LmNyZWF0ZUlucHV0KCdyYWRpbycsICdwcmlvJyk7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBlbGVtZW50LmNyZWF0ZUJ1dHRvbignYnRuLWNsb3NlLWZvcm0nKTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBlbGVtZW50LmNyZWF0ZUJ1dHRvbignYnRuLXN1Ym1pdC1mb3JtJyk7XG5cbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIE5ldyBUYXNrJztcbiAgICBwcmlvSW5wdXRMLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG4gICAgcHJpb0lucHV0SC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgZm9ybS5hcHBlbmQoZm9ybVRpdGxlLCB0aXRsZUlucHV0LCBkYXRlSW5wdXQsIHByaW9JbnB1dEwsIHByaW9JbnB1dEgsIGNsb3NlQnV0dG9uLCBzdWJtaXRCdXR0b24pO1xuXG4gICAgY29uc3QgcmFkaW9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJwcmlvLWlucHV0XCJdJyk7XG5cbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBwcmlvO1xuICAgICAgICByYWRpb0lucHV0LmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgIGlmIChhLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwcmlvID0gYS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY3JlYXRlVGFzayhwcm9qZWN0SW5kZXgsIHRpdGxlSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgcHJpbyk7XG4gICAgICAgIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0sIHByb2plY3RJbmRleCk7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9KVxufVxuXG5jb25zdCBjcmVhdGVUYXNrRGV0YWlsID0gKHByb2plY3RJbmRleCwgdGFza0luZGV4KSA9PiB7XG4gICAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiBcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBlbGVtZW50LmNyZWF0ZVBhcmEoJ2RldGFpbC10YXNrLXRpdGxlJyk7XG4gICAgY29uc3QgdGFza0R1ZSA9IGVsZW1lbnQuY3JlYXRlUGFyYSgnZGV0YWlsLXRhc2stZGF0ZScpO1xuICAgIGNvbnN0IHRhc2tQcmlvID0gZWxlbWVudC5jcmVhdGVQYXJhKCdkZXRhaWwtdGFzay1wcmlvJyk7XG5cbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzW3Rhc2tJbmRleF0ubmFtZTtcbiAgICB0YXNrRHVlLnRleHRDb250ZW50ID0gcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1t0YXNrSW5kZXhdLmRhdGU7XG4gICAgdGFza1ByaW8udGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHk7XG5cbiAgICBmb3JtLmFwcGVuZCh0YXNrVGl0bGUsIHRhc2tEdWUsIHRhc2tQcmlvKTtcbn1cblxuY29uc3QgY3JlYXRlRWRpdEZvcm0gPSAocHJvamVjdEluZGV4LCBpbmRleCkgPT4ge1xuICAgIGZvcm0uaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBmb3JtVGl0bGUgPSBlbGVtZW50LmNyZWF0ZVBhcmEoJ2Zvcm0tdGl0bGUnKTtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZWxlbWVudC5jcmVhdGVJbnB1dCgndGV4dCcsICd0aXRsZScpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGVsZW1lbnQuY3JlYXRlSW5wdXQoJ2RhdGUnLCAnZGF0ZScpO1xuICAgIGNvbnN0IHByaW9JbnB1dEwgPSBlbGVtZW50LmNyZWF0ZUlucHV0KCdyYWRpbycsICdwcmlvJyk7XG4gICAgY29uc3QgcHJpb0lucHV0SCA9IGVsZW1lbnQuY3JlYXRlSW5wdXQoJ3JhZGlvJywgJ3ByaW8nKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGVsZW1lbnQuY3JlYXRlQnV0dG9uKCdidG4tY2xvc2UtZm9ybScpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGVsZW1lbnQuY3JlYXRlQnV0dG9uKCdidG4tc3VibWl0LWZvcm0nKTtcblxuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xuICAgIHByaW9JbnB1dEwuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcbiAgICBwcmlvSW5wdXRILnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuXG4gICAgZm9ybS5hcHBlbmQoZm9ybVRpdGxlLCB0aXRsZUlucHV0LCBkYXRlSW5wdXQsIHByaW9JbnB1dEwsIHByaW9JbnB1dEgsIGNsb3NlQnV0dG9uLCBzdWJtaXRCdXR0b24pO1xuXG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IHByb2plY3RzQXJyYXlbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3NbaW5kZXhdLm5hbWU7XG4gICAgZGF0ZUlucHV0LnZhbHVlID0gcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1tpbmRleF0uZGF0ZTtcblxuICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwicHJpby1pbnB1dFwiXScpO1xuXG4gICAgcmFkaW9JbnB1dC5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgIGlmIChhLnZhbHVlID09PSBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzW2luZGV4XS5wcmlvcml0eSkge1xuICAgICAgICAgICAgYS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBwcmlvO1xuICAgICAgICByYWRpb0lucHV0LmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgIGlmIChhLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwcmlvID0gYS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdXBkYXRlVGFzayhwcm9qZWN0SW5kZXgsIGluZGV4LCB0aXRsZUlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW8pXG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9KVxufVxuXG5leHBvcnQge29wZW5Nb2RhbCwgY2xvc2VNb2RhbCwgY3JlYXRlUHJvamVjdEZvcm0sIGNyZWF0ZVRhc2tGb3JtLCBjcmVhdGVUYXNrRGV0YWlsLCBjcmVhdGVFZGl0Rm9ybX0iLCJpbXBvcnQgeyByZW5kZXJQcm9qZWN0cywgcmVuZGVyUHJvamVjdFRhc2tzIH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgdGFza0ZhY3RvcnkgfSBmcm9tIFwiLi90YXNrc1wiO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBbXTtcblxuICAgIHJldHVybiB7IHRpdGxlLCBwcm9qZWN0VGFza3MgfTtcbn1cblxubGV0IHByb2plY3RzQXJyYXkgPSBbXTtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aXRsZSk7XG4gICAgcHJvamVjdHNBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAgIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbn1cblxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIHByb2plY3RzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0c0FycmF5KTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgdXBkYXRlU3RvcmFnZSgpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xufVxuXG5jb25zdCB1cGRhdGVTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxldCBpdGVtID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgaXRlbSk7XG59XG5cbmNvbnN0IHJldHJpZXZlU3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgPT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIHByb2plY3RzIGZvdW5kJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBXb3cgcHJvamVjdCcpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0KCdXb3cnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0Zyb21TdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gICAgICAgIHByb2plY3RzQXJyYXkgPSBwcm9qZWN0c0Zyb21TdG9yYWdlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdEZhY3RvcnksIHByb2plY3RzQXJyYXksIHJlbW92ZVByb2plY3QsIHVwZGF0ZVN0b3JhZ2UsIHJldHJpZXZlU3RvcmFnZSB9XG5cblxuIiwiaW1wb3J0IHsgcmVuZGVyUHJvamVjdFRhc2tzIH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgcHJvamVjdHNBcnJheSwgdXBkYXRlU3RvcmFnZSB9IGZyb20gXCIuL3Byb2plY3RzXCJcblxuY29uc3QgdGFza0ZhY3RvcnkgPSAobmFtZSwgZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICByZXR1cm4geyBuYW1lICwgZGF0ZSwgcHJpb3JpdHl9XG59XG5cbmNvbnN0IGNyZWF0ZVRhc2sgPSAocHJvamVjdEluZGV4LCBuYW1lLCBkYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrRmFjdG9yeShuYW1lLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIGNvbnNvbGUubG9nKHByaW9yaXR5KTtcbiAgICB1cGRhdGVTdG9yYWdlKCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSlcbn1cblxuY29uc3QgcmVtb3ZlVGFzayA9IChwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCkgPT4ge1xuICAgIHByb2plY3RzQXJyYXlbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgcmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3RzQXJyYXlbcHJvamVjdEluZGV4XSwgcHJvamVjdEluZGV4KTtcbiAgICB1cGRhdGVTdG9yYWdlKCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSlcbn1cblxuY29uc3QgdXBkYXRlVGFzayA9IChwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCwgbmV3TmFtZSwgbmV3RGF0ZSwgbmV3UHJpbykgPT4ge1xuICAgIHByb2plY3RzQXJyYXlbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3NbdGFza0luZGV4XS5uYW1lID0gbmV3TmFtZTtcbiAgICBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzW3Rhc2tJbmRleF0uZGF0ZSA9IG5ld0RhdGU7XG4gICAgcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5ID0gbmV3UHJpbztcbiAgICByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLCBwcm9qZWN0SW5kZXgpO1xuICAgIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KVxufVxuXG5cbmV4cG9ydCB7IHRhc2tGYWN0b3J5LCBjcmVhdGVUYXNrLCByZW1vdmVUYXNrLCB1cGRhdGVUYXNrIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyByZW5kZXJQcm9qZWN0cyB9IGZyb20gJy4vZGlzcGxheSc7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0c0FycmF5LCByZXRyaWV2ZVN0b3JhZ2UgfSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlVGFzaywgdGFza3NMaXN0IH0gZnJvbSAnLi90YXNrcyc7XG5cbnJldHJpZXZlU3RvcmFnZSgpO1xuY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG5yZW5kZXJQcm9qZWN0cyhwcm9qZWN0c0FycmF5KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==