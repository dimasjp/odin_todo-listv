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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --slate-gray: #64748B;\n    --col-white: #FFFFFF;\n    --col-black: #000000;\n    --col-grey: #A5A5A5;\n    --col-darkgrey: #B6B7B8;\n}\n\n@font-face {\n    font-family: Chicago-12;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n    margin: 0;\n}\n\nhtml {\n    min-height: 100%;\n    margin: 0;\n}\n\nbody {\n    min-height: 100vh;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(90deg, var(--col-white) 21px, transparent 1%) center, linear-gradient(var(--col-white) 21px, transparent 1%) center, var(--col-black);\n    background-size: 22px 22px;\n}\n\n#content {\n    height: 60%;\n    width: 60%;\n    max-width: 1200px; \n    max-height: 800px;\n    display: grid;\n    grid-template-columns: max-content 1fr;\n    grid-template-rows: max-content max-content;\n    grid-template-areas: \n    'head head'\n    'nav main';\n    border: 0.1em solid var(--col-black);\n}\n\n.title-bar {\n    grid-area: head;\n    flex: none;\n    display: flex;\n    align-items: center;\n    height: 1.5rem;\n    padding: 0.2rem 0.1rem;\n    background: linear-gradient(var(--col-black) 50%, transparent 50%);\n    background-size: 6.6666666667% 13.3333333333%;\n    background-clip: content-box;\n    border-bottom: solid 1px var(--col-black);\n}\n\n.page-title {\n    padding: 0 0.5em;\n    margin: 0 auto;\n    font-size: 1.5rem;\n    font-weight: bold;\n    line-height: 1.1;\n    text-align: center;\n    background: var(--col-white);\n    cursor: default;\n    font-family: Chicago-12;\n}\n\n.nav-container {\n    grid-area: nav;\n    padding: 1.5rem;\n    width: 250px;\n    border-right: solid 1px var(--col-black);\n    display: flex;\n}\n\n#project-nav {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.project-container {\n    list-style: none;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n}\n\n.project-card {\n    display: flex;\n    flex-direction: row;\n    font-family: Chicago-12;\n    font-size: 24px;\n}\n\nh1 {\n    font-family: Chicago-12;\n    margin: 0;\n}\n\n.main {\n    grid-area: main;\n    padding: 1.5rem;\n    height: 100%;\n}\n\n.btn {\n    min-height: 20px;\n    min-width: 59px;\n    padding: 0 20px;\n    font-family: Chicago-12;\n    font-size: 18px;\n    text-align: center;\n    text-decoration: none;\n    background: var(--col-white);\n    border: solid 5.5px;\n    border-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") 30 stretch;\n    color: var(--col-black);\n}\n\n.project-head {\n    display: flex;\n    flex-direction: row;\n    margin: 0;\n    padding: 0;\n}\n\n.task-card {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    background: var(--col-white);\n    border: solid 1px var(--col-black);\n    margin: 5px;\n}\n\n.task-card-left {\n    display: flex;\n    flex-direction: row;\n}\n\n.modal {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal-content {\n    display: flex;\n    flex-direction: column;\n    height: fit-content;\n    width: fit-content;\n    background: var(--col-white);\n    border: 0.1em solid var(--col-black);\n}\n\n.form-title {\n    padding: 0 0.5em;\n    margin: 0 auto;\n    font-size: 1.5rem;\n    font-weight: bold;\n    line-height: 1.1;\n    text-align: center;\n    background: var(--col-white);\n    cursor: default;\n    font-family: Chicago-12;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\ninput {\n    border: 1.5px solid var(--col-black);\n    font-family: Chicago-12;\n    font-size: 18px;\n    padding-left: 5px;\n}\n\ninput[type=\"text\"]:focus-visible,\ninput[type=\"date\"]:focus-visible,\ntextarea:focus {\n    background: var(--col-black);\n    color: var(--col-white);\n}\n\n.display-none {\n    display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,oBAAoB;IACpB,oBAAoB;IACpB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,4CAAuC;AAC3C;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iKAAiK;IACjK,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,UAAU;IACV,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;IACb,sCAAsC;IACtC,2CAA2C;IAC3C;;cAEU;IACV,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,sBAAsB;IACtB,kEAAkE;IAClE,6CAA6C;IAC7C,4BAA4B;IAC5B,yCAAyC;AAC7C;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,4BAA4B;IAC5B,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,eAAe;IACf,YAAY;IACZ,wCAAwC;IACxC,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,qBAAqB;IACrB,4BAA4B;IAC5B,mBAAmB;IACnB,gEAAiD;IACjD,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,8BAA8B;IAC9B,4BAA4B;IAC5B,kCAAkC;IAClC,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,WAAW;IACX,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,4BAA4B;IAC5B,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,4BAA4B;IAC5B,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,oCAAoC;IACpC,uBAAuB;IACvB,eAAe;IACf,iBAAiB;AACrB;;AAEA;;;IAGI,4BAA4B;IAC5B,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB","sourcesContent":[":root {\n    --slate-gray: #64748B;\n    --col-white: #FFFFFF;\n    --col-black: #000000;\n    --col-grey: #A5A5A5;\n    --col-darkgrey: #B6B7B8;\n}\n\n@font-face {\n    font-family: Chicago-12;\n    src: url(./assets/fonts/ChiKareGo2.ttf);\n}\n\n* {\n    margin: 0;\n}\n\nhtml {\n    min-height: 100%;\n    margin: 0;\n}\n\nbody {\n    min-height: 100vh;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(90deg, var(--col-white) 21px, transparent 1%) center, linear-gradient(var(--col-white) 21px, transparent 1%) center, var(--col-black);\n    background-size: 22px 22px;\n}\n\n#content {\n    height: 60%;\n    width: 60%;\n    max-width: 1200px; \n    max-height: 800px;\n    display: grid;\n    grid-template-columns: max-content 1fr;\n    grid-template-rows: max-content max-content;\n    grid-template-areas: \n    'head head'\n    'nav main';\n    border: 0.1em solid var(--col-black);\n}\n\n.title-bar {\n    grid-area: head;\n    flex: none;\n    display: flex;\n    align-items: center;\n    height: 1.5rem;\n    padding: 0.2rem 0.1rem;\n    background: linear-gradient(var(--col-black) 50%, transparent 50%);\n    background-size: 6.6666666667% 13.3333333333%;\n    background-clip: content-box;\n    border-bottom: solid 1px var(--col-black);\n}\n\n.page-title {\n    padding: 0 0.5em;\n    margin: 0 auto;\n    font-size: 1.5rem;\n    font-weight: bold;\n    line-height: 1.1;\n    text-align: center;\n    background: var(--col-white);\n    cursor: default;\n    font-family: Chicago-12;\n}\n\n.nav-container {\n    grid-area: nav;\n    padding: 1.5rem;\n    width: 250px;\n    border-right: solid 1px var(--col-black);\n    display: flex;\n}\n\n#project-nav {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.project-container {\n    list-style: none;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n}\n\n.project-card {\n    display: flex;\n    flex-direction: row;\n    font-family: Chicago-12;\n    font-size: 24px;\n}\n\nh1 {\n    font-family: Chicago-12;\n    margin: 0;\n}\n\n.main {\n    grid-area: main;\n    padding: 1.5rem;\n    height: 100%;\n}\n\n.btn {\n    min-height: 20px;\n    min-width: 59px;\n    padding: 0 20px;\n    font-family: Chicago-12;\n    font-size: 18px;\n    text-align: center;\n    text-decoration: none;\n    background: var(--col-white);\n    border: solid 5.5px;\n    border-image: url(./assets/button.svg) 30 stretch;\n    color: var(--col-black);\n}\n\n.project-head {\n    display: flex;\n    flex-direction: row;\n    margin: 0;\n    padding: 0;\n}\n\n.task-card {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    background: var(--col-white);\n    border: solid 1px var(--col-black);\n    margin: 5px;\n}\n\n.task-card-left {\n    display: flex;\n    flex-direction: row;\n}\n\n.modal {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal-content {\n    display: flex;\n    flex-direction: column;\n    height: fit-content;\n    width: fit-content;\n    background: var(--col-white);\n    border: 0.1em solid var(--col-black);\n}\n\n.form-title {\n    padding: 0 0.5em;\n    margin: 0 auto;\n    font-size: 1.5rem;\n    font-weight: bold;\n    line-height: 1.1;\n    text-align: center;\n    background: var(--col-white);\n    cursor: default;\n    font-family: Chicago-12;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\ninput {\n    border: 1.5px solid var(--col-black);\n    font-family: Chicago-12;\n    font-size: 18px;\n    padding-left: 5px;\n}\n\ninput[type=\"text\"]:focus-visible,\ninput[type=\"date\"]:focus-visible,\ntextarea:focus {\n    background: var(--col-black);\n    color: var(--col-white);\n}\n\n.display-none {\n    display: none;\n}\n"],"sourceRoot":""}]);
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

    const createLi = (className) => {
        const li = document.createElement('li');
        li.classList.add(className);
        return li;
    }

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
        createLi,
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
        const projectCard = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createLi('project-card');
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

        const cardLeft = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createDiv('task-card-left');
        const cardRight = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createDiv('task-card-right');
        taskCard.append(cardLeft, cardRight);

        const taskTitle = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createPara('task-title');
        const taskDue = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createPara('task-date');
        const taskPrio = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createPara('task-prio');
        const taskEditBtn = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createButton('btn-task-edit');
        const taskRemoveBtn = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createButton('btn-task-remove');

        taskTitle.textContent = task.name;
        taskDue.textContent = task.date;
        taskPrio.textContent = task.priority;
        taskEditBtn.textContent = 'Edit';
        taskRemoveBtn.textContent = 'X';

        cardLeft.append(taskTitle, taskDue, taskPrio)
        cardRight.append(taskEditBtn, taskRemoveBtn);

        taskEditBtn.addEventListener('click', () => {
            (0,_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('task-edit');
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
/* harmony export */   "createTaskForm": () => (/* binding */ createTaskForm),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-element */ "./src/create-element.js");





const modal = document.querySelector('.modal');
const form = document.querySelector('#modal-form');
const formHead = document.querySelector('.form-head');

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
    formHead.innerHTML = '';

    const formTitle = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createH1('form-title');
    formHead.appendChild(formTitle);

    const titleInput = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createInput('text', 'title');
    const closeButton = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createButton('btn-close-form');
    const submitButton = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createButton('btn-submit-form');

    formTitle.textContent = 'Add New Project';
    closeButton.textContent = 'Cancel';
    submitButton.textContent = 'Submit';

    form.append(titleInput, closeButton, submitButton);

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        (0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(titleInput.value);
        (0,_display__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray);
        closeModal();
    })
}

const createTaskForm = (projectIndex) => {
    formHead.innerHTML = '';

    const formTitle = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createH1('form-title');
    formHead.appendChild(formTitle);

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

    form.append(titleInput, dateInput, prioInputL, prioInputH, closeButton, submitButton);

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

const createEditForm = (projectIndex, index) => {
    formHead.innerHTML = '';

    const formTitle = _create_element__WEBPACK_IMPORTED_MODULE_3__["default"].createH1('form-title');
    formHead.appendChild(formTitle);

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

    form.append(titleInput, dateInput, prioInputL, prioInputH, closeButton, submitButton);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBMkM7QUFDZ0M7QUFDdEQ7QUFDMkI7O0FBRWhELDBEQUFlO0FBQ2YsWUFBWSxvREFBYTtBQUN6Qix3REFBYyxDQUFDLG9EQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vc3JjL2NyZWF0ZS1lbGVtZW50LmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9DaGlLYXJlR28yLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2J1dHRvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXNsYXRlLWdyYXk6ICM2NDc0OEI7XFxuICAgIC0tY29sLXdoaXRlOiAjRkZGRkZGO1xcbiAgICAtLWNvbC1ibGFjazogIzAwMDAwMDtcXG4gICAgLS1jb2wtZ3JleTogI0E1QTVBNTtcXG4gICAgLS1jb2wtZGFya2dyZXk6ICNCNkI3Qjg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogQ2hpY2Fnby0xMjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tY29sLXdoaXRlKSAyMXB4LCB0cmFuc3BhcmVudCAxJSkgY2VudGVyLCBsaW5lYXItZ3JhZGllbnQodmFyKC0tY29sLXdoaXRlKSAyMXB4LCB0cmFuc3BhcmVudCAxJSkgY2VudGVyLCB2YXIoLS1jb2wtYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIycHggMjJweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7IFxcbiAgICBtYXgtaGVpZ2h0OiA4MDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAnaGVhZCBoZWFkJ1xcbiAgICAnbmF2IG1haW4nO1xcbiAgICBib3JkZXI6IDAuMWVtIHNvbGlkIHZhcigtLWNvbC1ibGFjayk7XFxufVxcblxcbi50aXRsZS1iYXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWQ7XFxuICAgIGZsZXg6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC4xcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tY29sLWJsYWNrKSA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNi42NjY2NjY2NjY3JSAxMy4zMzMzMzMzMzMzJTtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWNvbC1ibGFjayk7XFxufVxcblxcbi5wYWdlLXRpdGxlIHtcXG4gICAgcGFkZGluZzogMCAwLjVlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2wtd2hpdGUpO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIGZvbnQtZmFtaWx5OiBDaGljYWdvLTEyO1xcbn1cXG5cXG4ubmF2LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggdmFyKC0tY29sLWJsYWNrKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3Byb2plY3QtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmb250LWZhbWlseTogQ2hpY2Fnby0xMjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtZmFtaWx5OiBDaGljYWdvLTEyO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIG1pbi13aWR0aDogNTlweDtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBmb250LWZhbWlseTogQ2hpY2Fnby0xMjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sLXdoaXRlKTtcXG4gICAgYm9yZGVyOiBzb2xpZCA1LjVweDtcXG4gICAgYm9yZGVyLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIDMwIHN0cmV0Y2g7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2wtYmxhY2spO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udGFzay1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2wtd2hpdGUpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jb2wtYmxhY2spO1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRhc2stY2FyZC1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sLXdoaXRlKTtcXG4gICAgYm9yZGVyOiAwLjFlbSBzb2xpZCB2YXIoLS1jb2wtYmxhY2spO1xcbn1cXG5cXG4uZm9ybS10aXRsZSB7XFxuICAgIHBhZGRpbmc6IDAgMC41ZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sLXdoaXRlKTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBmb250LWZhbWlseTogQ2hpY2Fnby0xMjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1jb2wtYmxhY2spO1xcbiAgICBmb250LWZhbWlseTogQ2hpY2Fnby0xMjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzLXZpc2libGUsXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdOmZvY3VzLXZpc2libGUsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2wtYmxhY2spO1xcbiAgICBjb2xvcjogdmFyKC0tY29sLXdoaXRlKTtcXG59XFxuXFxuLmRpc3BsYXktbm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlLQUFpSztJQUNqSywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QywyQ0FBMkM7SUFDM0M7O2NBRVU7SUFDVixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrRUFBa0U7SUFDbEUsNkNBQTZDO0lBQzdDLDRCQUE0QjtJQUM1Qix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLHdDQUF3QztJQUN4QyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLGdFQUFpRDtJQUNqRCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLGtDQUFrQztJQUNsQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBOzs7SUFHSSw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tc2xhdGUtZ3JheTogIzY0NzQ4QjtcXG4gICAgLS1jb2wtd2hpdGU6ICNGRkZGRkY7XFxuICAgIC0tY29sLWJsYWNrOiAjMDAwMDAwO1xcbiAgICAtLWNvbC1ncmV5OiAjQTVBNUE1O1xcbiAgICAtLWNvbC1kYXJrZ3JleTogI0I2QjdCODtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBDaGljYWdvLTEyO1xcbiAgICBzcmM6IHVybCguL2Fzc2V0cy9mb250cy9DaGlLYXJlR28yLnR0Zik7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1jb2wtd2hpdGUpIDIxcHgsIHRyYW5zcGFyZW50IDElKSBjZW50ZXIsIGxpbmVhci1ncmFkaWVudCh2YXIoLS1jb2wtd2hpdGUpIDIxcHgsIHRyYW5zcGFyZW50IDElKSBjZW50ZXIsIHZhcigtLWNvbC1ibGFjayk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjJweCAyMnB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDsgXFxuICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICdoZWFkIGhlYWQnXFxuICAgICduYXYgbWFpbic7XFxuICAgIGJvcmRlcjogMC4xZW0gc29saWQgdmFyKC0tY29sLWJsYWNrKTtcXG59XFxuXFxuLnRpdGxlLWJhciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZDtcXG4gICAgZmxleDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjFyZW07XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1jb2wtYmxhY2spIDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA2LjY2NjY2NjY2NjclIDEzLjMzMzMzMzMzMzMlO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0tY29sLWJsYWNrKTtcXG59XFxuXFxuLnBhZ2UtdGl0bGUge1xcbiAgICBwYWRkaW5nOiAwIDAuNWVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsaW5lLWhlaWdodDogMS4xO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbC13aGl0ZSk7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgZm9udC1mYW1pbHk6IENoaWNhZ28tMTI7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1hcmVhOiBuYXY7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCB2YXIoLS1jb2wtYmxhY2spO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jcHJvamVjdC1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnByb2plY3QtY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZvbnQtZmFtaWx5OiBDaGljYWdvLTEyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6IENoaWNhZ28tMTI7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgbWluLWhlaWdodDogMjBweDtcXG4gICAgbWluLXdpZHRoOiA1OXB4O1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBDaGljYWdvLTEyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2wtd2hpdGUpO1xcbiAgICBib3JkZXI6IHNvbGlkIDUuNXB4O1xcbiAgICBib3JkZXItaW1hZ2U6IHVybCguL2Fzc2V0cy9idXR0b24uc3ZnKSAzMCBzdHJldGNoO1xcbiAgICBjb2xvcjogdmFyKC0tY29sLWJsYWNrKTtcXG59XFxuXFxuLnByb2plY3QtaGVhZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnRhc2stY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sLXdoaXRlKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sLWJsYWNrKTtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi50YXNrLWNhcmQtbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbC13aGl0ZSk7XFxuICAgIGJvcmRlcjogMC4xZW0gc29saWQgdmFyKC0tY29sLWJsYWNrKTtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcbiAgICBwYWRkaW5nOiAwIDAuNWVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsaW5lLWhlaWdodDogMS4xO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbC13aGl0ZSk7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgZm9udC1mYW1pbHk6IENoaWNhZ28tMTI7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tY29sLWJsYWNrKTtcXG4gICAgZm9udC1mYW1pbHk6IENoaWNhZ28tMTI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cy12aXNpYmxlLFxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTpmb2N1cy12aXNpYmxlLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sLWJsYWNrKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbC13aGl0ZSk7XFxufVxcblxcbi5kaXNwbGF5LW5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5jb25zdCBlbGVtZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVEaXYgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gZGl2XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUgxID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGgxLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIGgxXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlUGFyYSA9IChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiBwYXJhO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVMaSA9IChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiBsaTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVJbnB1dCA9IChpbnB1dFR5cGUsIGlucHV0SWQpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dFR5cGUpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aW5wdXRJZH0taW5wdXRgKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7aW5wdXRJZH0taW5wdXRgKTtcbiAgICAgICAgcmV0dXJuIGlucHV0XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIGJ0bjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlRGl2LFxuICAgICAgICBjcmVhdGVIMSxcbiAgICAgICAgY3JlYXRlUGFyYSxcbiAgICAgICAgY3JlYXRlTGksXG4gICAgICAgIGNyZWF0ZUlucHV0LFxuICAgICAgICBjcmVhdGVCdXR0b25cbiAgICB9O1xufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50OyIsImltcG9ydCB7IHByb2plY3RzQXJyYXksIHJlbW92ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgb3Blbk1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcbmltcG9ydCB7IGNyZWF0ZUVkaXRGb3JtLCBjcmVhdGVQcm9qZWN0Rm9ybSwgY3JlYXRlVGFza0Zvcm0gfSBmcm9tIFwiLi9tb2RhbFwiO1xuaW1wb3J0IHsgcmVtb3ZlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgZWxlbWVudCBmcm9tIFwiLi9jcmVhdGUtZWxlbWVudFwiO1xuXG5jb25zdCBvcGVuUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tcHJvamVjdC1tb2RhbCcpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbm9wZW5Qcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKCdwcm9qZWN0LWZvcm0nKTtcbiAgICBjcmVhdGVQcm9qZWN0Rm9ybSgpO1xufSlcblxuY29uc3QgcmVuZGVyUHJvamVjdHMgPSAocHJvamVjdHMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIHByb2plY3RJbmRleCwgdGFza3MpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBlbGVtZW50LmNyZWF0ZUxpKCdwcm9qZWN0LWNhcmQnKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG5cbiAgICAgICAgcHJvamVjdENhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdCwgcHJvamVjdEluZGV4KTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZFRpdGxlID0gZWxlbWVudC5jcmVhdGVQYXJhKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIHByb2plY3RDYXJkVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RSZW1vdmVCdXR0b24gPSBlbGVtZW50LmNyZWF0ZUJ1dHRvbignYnRuLXByb2plY3QtcmVtb3ZlJyk7XG4gICAgICAgIHByb2plY3RSZW1vdmVCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG5cbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kKHByb2plY3RDYXJkVGl0bGUsIHByb2plY3RSZW1vdmVCdXR0b24pO1xuXG4gICAgICAgIHByb2plY3RSZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0KHByb2plY3RJbmRleCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuY29uc3QgcmVuZGVyUHJvamVjdFRhc2tzID0gKHByb2plY3QsIHByb2plY3RJbmRleCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBwcm9qZWN0UGFnZUhlYWRlciA9IGVsZW1lbnQuY3JlYXRlRGl2KCdwcm9qZWN0LWhlYWQnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHByb2plY3RQYWdlSGVhZGVyKTtcblxuICAgIGNvbnN0IHByb2plY3RQYWdlVGl0bGUgPSBlbGVtZW50LmNyZWF0ZUgxKCdwcm9qZWN0LWhlYWQtdGl0bGUnKTtcbiAgICBwcm9qZWN0UGFnZVRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBlbGVtZW50LmNyZWF0ZUJ1dHRvbignYnRuLXRhc2stYWRkJyk7XG4gICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG5cbiAgICBwcm9qZWN0UGFnZUhlYWRlci5hcHBlbmQocHJvamVjdFBhZ2VUaXRsZSwgYWRkVGFza0J1dHRvbik7XG5cbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBvcGVuTW9kYWwoJ3Rhc2stZm9ybScpO1xuICAgICAgICBjcmVhdGVUYXNrRm9ybShwcm9qZWN0SW5kZXgpXG4gICAgfSlcblxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBlbGVtZW50LmNyZWF0ZURpdigndGFzay1jb250YWluZXInKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gICAgcHJvamVjdC5wcm9qZWN0VGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0NhcmQgPSBlbGVtZW50LmNyZWF0ZURpdigndGFzay1jYXJkJyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXG4gICAgICAgIGNvbnN0IGNhcmRMZWZ0ID0gZWxlbWVudC5jcmVhdGVEaXYoJ3Rhc2stY2FyZC1sZWZ0Jyk7XG4gICAgICAgIGNvbnN0IGNhcmRSaWdodCA9IGVsZW1lbnQuY3JlYXRlRGl2KCd0YXNrLWNhcmQtcmlnaHQnKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kKGNhcmRMZWZ0LCBjYXJkUmlnaHQpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGVsZW1lbnQuY3JlYXRlUGFyYSgndGFzay10aXRsZScpO1xuICAgICAgICBjb25zdCB0YXNrRHVlID0gZWxlbWVudC5jcmVhdGVQYXJhKCd0YXNrLWRhdGUnKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW8gPSBlbGVtZW50LmNyZWF0ZVBhcmEoJ3Rhc2stcHJpbycpO1xuICAgICAgICBjb25zdCB0YXNrRWRpdEJ0biA9IGVsZW1lbnQuY3JlYXRlQnV0dG9uKCdidG4tdGFzay1lZGl0Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tSZW1vdmVCdG4gPSBlbGVtZW50LmNyZWF0ZUJ1dHRvbignYnRuLXRhc2stcmVtb3ZlJyk7XG5cbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgICAgICB0YXNrRHVlLnRleHRDb250ZW50ID0gdGFzay5kYXRlO1xuICAgICAgICB0YXNrUHJpby50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgIHRhc2tFZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgICAgICB0YXNrUmVtb3ZlQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuXG4gICAgICAgIGNhcmRMZWZ0LmFwcGVuZCh0YXNrVGl0bGUsIHRhc2tEdWUsIHRhc2tQcmlvKVxuICAgICAgICBjYXJkUmlnaHQuYXBwZW5kKHRhc2tFZGl0QnRuLCB0YXNrUmVtb3ZlQnRuKTtcblxuICAgICAgICB0YXNrRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG9wZW5Nb2RhbCgndGFzay1lZGl0Jyk7XG4gICAgICAgICAgICBjcmVhdGVFZGl0Rm9ybShwcm9qZWN0SW5kZXgsIGluZGV4KTtcbiAgICAgICAgfSlcblxuICAgICAgICB0YXNrUmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlVGFzayhwcm9qZWN0SW5kZXgsIGluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0cywgcmVuZGVyUHJvamVjdFRhc2tzIH0iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzLCByZW5kZXJQcm9qZWN0VGFza3MgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrLCB1cGRhdGVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCBlbGVtZW50IGZyb20gXCIuL2NyZWF0ZS1lbGVtZW50XCI7XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZvcm0nKTtcbmNvbnN0IGZvcm1IZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0taGVhZCcpO1xuXG5jb25zdCBvcGVuTW9kYWwgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJyk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuLWNsb3NlLWZvcm0nKSkge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfVxufSlcblxuY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgZm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJylcbiAgICBmb3JtLmlubmVySFRNTCA9ICcnO1xufVxuXG5jb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBmb3JtSGVhZC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGVsZW1lbnQuY3JlYXRlSDEoJ2Zvcm0tdGl0bGUnKTtcbiAgICBmb3JtSGVhZC5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGVsZW1lbnQuY3JlYXRlSW5wdXQoJ3RleHQnLCAndGl0bGUnKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGVsZW1lbnQuY3JlYXRlQnV0dG9uKCdidG4tY2xvc2UtZm9ybScpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGVsZW1lbnQuY3JlYXRlQnV0dG9uKCdidG4tc3VibWl0LWZvcm0nKTtcblxuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICdBZGQgTmV3IFByb2plY3QnO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5cbiAgICBmb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBjbG9zZUJ1dHRvbiwgc3VibWl0QnV0dG9uKTtcblxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdCh0aXRsZUlucHV0LnZhbHVlKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHNBcnJheSk7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9KVxufVxuXG5jb25zdCBjcmVhdGVUYXNrRm9ybSA9IChwcm9qZWN0SW5kZXgpID0+IHtcbiAgICBmb3JtSGVhZC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGVsZW1lbnQuY3JlYXRlSDEoJ2Zvcm0tdGl0bGUnKTtcbiAgICBmb3JtSGVhZC5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGVsZW1lbnQuY3JlYXRlSW5wdXQoJ3RleHQnLCAndGl0bGUnKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBlbGVtZW50LmNyZWF0ZUlucHV0KCdkYXRlJywgJ2RhdGUnKTtcbiAgICBjb25zdCBwcmlvSW5wdXRMID0gZWxlbWVudC5jcmVhdGVJbnB1dCgncmFkaW8nLCAncHJpbycpO1xuICAgIGNvbnN0IHByaW9JbnB1dEggPSBlbGVtZW50LmNyZWF0ZUlucHV0KCdyYWRpbycsICdwcmlvJyk7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBlbGVtZW50LmNyZWF0ZUJ1dHRvbignYnRuLWNsb3NlLWZvcm0nKTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBlbGVtZW50LmNyZWF0ZUJ1dHRvbignYnRuLXN1Ym1pdC1mb3JtJyk7XG5cbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIE5ldyBUYXNrJztcbiAgICBwcmlvSW5wdXRMLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG4gICAgcHJpb0lucHV0SC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgZm9ybS5hcHBlbmQodGl0bGVJbnB1dCwgZGF0ZUlucHV0LCBwcmlvSW5wdXRMLCBwcmlvSW5wdXRILCBjbG9zZUJ1dHRvbiwgc3VibWl0QnV0dG9uKTtcblxuICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwicHJpby1pbnB1dFwiXScpO1xuXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgcHJpbztcbiAgICAgICAgcmFkaW9JbnB1dC5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcHJpbyA9IGEudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNyZWF0ZVRhc2socHJvamVjdEluZGV4LCB0aXRsZUlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW8pO1xuICAgICAgICByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLCBwcm9qZWN0SW5kZXgpO1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfSlcbn1cblxuY29uc3QgY3JlYXRlRWRpdEZvcm0gPSAocHJvamVjdEluZGV4LCBpbmRleCkgPT4ge1xuICAgIGZvcm1IZWFkLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZWxlbWVudC5jcmVhdGVIMSgnZm9ybS10aXRsZScpO1xuICAgIGZvcm1IZWFkLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZWxlbWVudC5jcmVhdGVJbnB1dCgndGV4dCcsICd0aXRsZScpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGVsZW1lbnQuY3JlYXRlSW5wdXQoJ2RhdGUnLCAnZGF0ZScpO1xuICAgIGNvbnN0IHByaW9JbnB1dEwgPSBlbGVtZW50LmNyZWF0ZUlucHV0KCdyYWRpbycsICdwcmlvJyk7XG4gICAgY29uc3QgcHJpb0lucHV0SCA9IGVsZW1lbnQuY3JlYXRlSW5wdXQoJ3JhZGlvJywgJ3ByaW8nKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGVsZW1lbnQuY3JlYXRlQnV0dG9uKCdidG4tY2xvc2UtZm9ybScpO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGVsZW1lbnQuY3JlYXRlQnV0dG9uKCdidG4tc3VibWl0LWZvcm0nKTtcblxuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xuICAgIHByaW9JbnB1dEwuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcbiAgICBwcmlvSW5wdXRILnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuXG4gICAgZm9ybS5hcHBlbmQodGl0bGVJbnB1dCwgZGF0ZUlucHV0LCBwcmlvSW5wdXRMLCBwcmlvSW5wdXRILCBjbG9zZUJ1dHRvbiwgc3VibWl0QnV0dG9uKTtcblxuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzW2luZGV4XS5uYW1lO1xuICAgIGRhdGVJbnB1dC52YWx1ZSA9IHByb2plY3RzQXJyYXlbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3NbaW5kZXhdLmRhdGU7XG5cbiAgICBjb25zdCByYWRpb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInByaW8taW5wdXRcIl0nKTtcblxuICAgIHJhZGlvSW5wdXQuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICBpZiAoYS52YWx1ZSA9PT0gcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1tpbmRleF0ucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGEuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgcHJpbztcbiAgICAgICAgcmFkaW9JbnB1dC5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcHJpbyA9IGEudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHVwZGF0ZVRhc2socHJvamVjdEluZGV4LCBpbmRleCwgdGl0bGVJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBwcmlvKVxuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfSlcbn1cblxuZXhwb3J0IHtvcGVuTW9kYWwsIGNsb3NlTW9kYWwsIGNyZWF0ZVByb2plY3RGb3JtLCBjcmVhdGVUYXNrRm9ybSwgY3JlYXRlRWRpdEZvcm19IiwiaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMsIHJlbmRlclByb2plY3RUYXNrcyB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vdGFza3NcIjtcblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBbXTtcblxuICAgIHJldHVybiB7IHRpdGxlLCBwcm9qZWN0VGFza3MgfTtcbn1cblxubGV0IHByb2plY3RzQXJyYXkgPSBbXTtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aXRsZSk7XG4gICAgcHJvamVjdHNBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAgIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbn1cblxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIHByb2plY3RzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0c0FycmF5KTtcbiAgICB1cGRhdGVTdG9yYWdlKCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG59XG5cbmNvbnN0IHVwZGF0ZVN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgbGV0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBpdGVtKTtcbn1cblxuY29uc3QgcmV0cmlldmVTdG9yYWdlID0gKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSA9PT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTm8gcHJvamVjdHMgZm91bmQnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIFdvdyBwcm9qZWN0Jyk7XG4gICAgICAgIGNyZWF0ZVByb2plY3QoJ1dvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzRnJvbVN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICAgICAgcHJvamVjdHNBcnJheSA9IHByb2plY3RzRnJvbVN0b3JhZ2U7XG4gICAgfVxufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0RmFjdG9yeSwgcHJvamVjdHNBcnJheSwgcmVtb3ZlUHJvamVjdCwgdXBkYXRlU3RvcmFnZSwgcmV0cmlldmVTdG9yYWdlIH1cblxuXG4iLCJpbXBvcnQgeyByZW5kZXJQcm9qZWN0VGFza3MgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5LCB1cGRhdGVTdG9yYWdlIH0gZnJvbSBcIi4vcHJvamVjdHNcIlxuXG5jb25zdCB0YXNrRmFjdG9yeSA9IChuYW1lLCBkYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIHJldHVybiB7IG5hbWUgLCBkYXRlLCBwcmlvcml0eX1cbn1cblxuY29uc3QgY3JlYXRlVGFzayA9IChwcm9qZWN0SW5kZXgsIG5hbWUsIGRhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2tGYWN0b3J5KG5hbWUsIGRhdGUsIHByaW9yaXR5KTtcbiAgICBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgY29uc29sZS5sb2cocHJpb3JpdHkpO1xuICAgIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KVxufVxuXG5jb25zdCByZW1vdmVUYXNrID0gKHByb2plY3RJbmRleCwgdGFza0luZGV4KSA9PiB7XG4gICAgcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLCBwcm9qZWN0SW5kZXgpO1xuICAgIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KVxufVxuXG5jb25zdCB1cGRhdGVUYXNrID0gKHByb2plY3RJbmRleCwgdGFza0luZGV4LCBuZXdOYW1lLCBuZXdEYXRlLCBuZXdQcmlvKSA9PiB7XG4gICAgcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1t0YXNrSW5kZXhdLm5hbWUgPSBuZXdOYW1lO1xuICAgIHByb2plY3RzQXJyYXlbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3NbdGFza0luZGV4XS5kYXRlID0gbmV3RGF0ZTtcbiAgICBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHkgPSBuZXdQcmlvO1xuICAgIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0sIHByb2plY3RJbmRleCk7XG4gICAgdXBkYXRlU3RvcmFnZSgpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpXG59XG5cblxuZXhwb3J0IHsgdGFza0ZhY3RvcnksIGNyZWF0ZVRhc2ssIHJlbW92ZVRhc2ssIHVwZGF0ZVRhc2sgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHJlbmRlclByb2plY3RzIH0gZnJvbSAnLi9kaXNwbGF5JztcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHByb2plY3RzQXJyYXksIHJldHJpZXZlU3RvcmFnZSB9IGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVUYXNrLCB0YXNrc0xpc3QgfSBmcm9tICcuL3Rhc2tzJztcblxucmV0cmlldmVTdG9yYWdlKCk7XG5jb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbnJlbmRlclByb2plY3RzKHByb2plY3RzQXJyYXkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9