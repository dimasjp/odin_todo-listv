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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --slate-gray: #64748B;\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #94A3B8;\n}\n\n#content {\n    height: 70vh;\n    width: 60vw;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    border: 1px solid red;\n}\n\n.header {\n    border: 1px solid blue;\n}\n\n.main {\n    border: 1px solid blue;\n}\n\n.modal {\n    display: flex;\n    position: fixed;\n    z-index: 1;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal-content {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    margin: 15% auto;\n    height: fit-content;\n    width: fit-content;\n    border-radius: 5px;\n    border: 1px solid red;\n    background-color: white;\n}\n\n.display-none {\n    display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,aAAa;IACb,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB","sourcesContent":[":root {\n    --slate-gray: #64748B;\n}\n\nbody {\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #94A3B8;\n}\n\n#content {\n    height: 70vh;\n    width: 60vw;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    border: 1px solid red;\n}\n\n.header {\n    border: 1px solid blue;\n}\n\n.main {\n    border: 1px solid blue;\n}\n\n.modal {\n    display: flex;\n    position: fixed;\n    z-index: 1;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal-content {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    margin: 15% auto;\n    height: fit-content;\n    width: fit-content;\n    border-radius: 5px;\n    border: 1px solid red;\n    background-color: white;\n}\n\n.display-none {\n    display: none;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");





const openProjectModal = document.querySelector('.open-project-modal');
const form = document.querySelector('#modal-form');

openProjectModal.addEventListener('click', () => {
    (0,_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)();
    form.classList.add('project-form');
    (0,_form__WEBPACK_IMPORTED_MODULE_2__.createProjectForm)();
})

const renderProjects = (projects) => {
    const projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML = '';

    projects.forEach((project, projectIndex, tasks) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectContainer.appendChild(projectCard);

        projectCard.addEventListener('click', () => {
            renderProjectTasks(project, projectIndex);
        })

        const projectCardTitle = document.createElement('p');
        projectCardTitle.classList.add('project-title');
        projectCardTitle.textContent = project.title;
        projectCard.appendChild(projectCardTitle);

        const projectRemoveButton = document.createElement('button');
        projectRemoveButton.classList.add('project-remove-btn');
        projectRemoveButton.textContent = 'X';
        projectCard.appendChild(projectRemoveButton);

        projectRemoveButton.addEventListener('click', () => {
            (0,_projects__WEBPACK_IMPORTED_MODULE_0__.removeProject)(projectIndex);
        })
    })
}

const renderProjectTasks = (project, projectIndex) => {
    const main = document.querySelector('.main');
    main.innerHTML = '';

    const projectPageHeader = document.createElement('div');
    main.appendChild(projectPageHeader);

    const projectPageTitle = document.createElement('div');
    projectPageTitle.textContent = project.title;
    projectPageHeader.appendChild(projectPageTitle);

    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task';
    projectPageHeader.appendChild(addTaskButton);

    addTaskButton.addEventListener('click', () => {
        (0,_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)();
        form.classList.add('task-form');
        (0,_form__WEBPACK_IMPORTED_MODULE_2__.createTaskForm)(projectIndex)
    })

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    main.appendChild(taskContainer);

    project.projectTasks.forEach((task, index) => {
        const taskCard = document.createElement('div');
        taskContainer.appendChild(taskCard);

        const taskTitle = document.createElement('div');
        taskTitle.textContent = task.name;
        taskCard.appendChild(taskTitle);

        const taskDue = document.createElement('div');
        taskDue.textContent = task.date;
        taskCard.appendChild(taskDue);

        const taskPrio = document.createElement('div');
        taskPrio.textContent = task.priority;
        taskCard.appendChild(taskPrio);

        const taskDetail = document.createElement('button');
        taskDetail.textContent = 'Detail';
        taskCard.appendChild(taskDetail)

        taskDetail.addEventListener('click', () => {
            ;(0,_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)();
            (0,_form__WEBPACK_IMPORTED_MODULE_2__.createTaskDetail)(projectIndex, index);
        })

        const taskEditButton = document.createElement('button');
        taskEditButton.classList.add('task-edit-btn');
        taskEditButton.textContent = 'EDIT';
        taskCard.appendChild(taskEditButton);

        taskEditButton.addEventListener('click', () => {
            (0,_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)();
            (0,_form__WEBPACK_IMPORTED_MODULE_2__.createEditForm)(projectIndex, index);
        })

        const taskRemoveButton = document.createElement('button');
        taskRemoveButton.classList.add('task-remove-btn');
        taskRemoveButton.textContent = 'X';
        taskCard.appendChild(taskRemoveButton);

        taskRemoveButton.addEventListener('click', () => {
            (0,_tasks__WEBPACK_IMPORTED_MODULE_3__.removeTask)(projectIndex, index);
        })
    })
}



/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEditForm": () => (/* binding */ createEditForm),
/* harmony export */   "createProjectForm": () => (/* binding */ createProjectForm),
/* harmony export */   "createTaskDetail": () => (/* binding */ createTaskDetail),
/* harmony export */   "createTaskForm": () => (/* binding */ createTaskForm)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");





const modalContainer = document.querySelector('.modal-content');
const formField = document.querySelector('#modal-form');

const createProjectForm = () => {
    formField.innerHTML = '';
    formField.classList.add('project-form');

    const formTitle = document.createElement('p');
    formTitle.classList.add('form-title');
    formTitle.textContent = "Add New Project";

    const titleInput = document.createElement('input');
    titleInput.placeholder = "Project";
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title-input');
    titleInput.setAttribute('name', 'title-input');

    const submitButton = document.createElement('button');
    submitButton.classList.add('btn-submit-form');
    submitButton.classList.add('submit-project');
    submitButton.textContent = "Submit";

    formField.append(formTitle, titleInput, submitButton);
  
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        (0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProject)(titleInput.value);
        console.log(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
        (0,_display__WEBPACK_IMPORTED_MODULE_2__.renderProjects)(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
        submitButton.classList.remove('submit-project');
        formField.reset();
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
    })
}

const createTaskForm = (projectIndex) => {
    formField.innerHTML = '';
    formField.classList.add('task-form');

    const formTitle = document.createElement('p');
    formTitle.classList.add('form-title');
    formTitle.textContent = "Add New Task";

    const titleInput = document.createElement('input');
    titleInput.placeholder = "Task";
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title-input');
    titleInput.setAttribute('name', 'title-input');

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'date-input');
    dateInput.setAttribute('name', 'date-input');

    const prioInput = document.createElement('input')
    prioInput.setAttribute('type', 'radio');
    prioInput.setAttribute('id', 'prio-low');
    prioInput.setAttribute('name', 'prio-input');
    prioInput.setAttribute('value', 'low');

    const prioInputW = document.createElement('input')
    prioInputW.setAttribute('type', 'radio');
    prioInputW.setAttribute('id', 'prio-high');
    prioInputW.setAttribute('name', 'prio-input');
    prioInputW.setAttribute('value', 'high');

    const submitButton = document.createElement('button');
    submitButton.classList.add('btn-submit-form');
    submitButton.classList.add('submit-task');
    submitButton.textContent = "Submit";

    formField.append(formTitle, titleInput, dateInput, prioInput, prioInputW, submitButton);

    const radioInput = document.querySelectorAll('input[name="prio-input"]');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        let prio;
        radioInput.forEach((a) => {
            if (a.checked === true) {
                prio = a.value;
            }
        })
        ;(0,_tasks__WEBPACK_IMPORTED_MODULE_3__.createTask)(projectIndex, titleInput.value, dateInput.value, prio);
        (0,_display__WEBPACK_IMPORTED_MODULE_2__.renderProjectTasks)(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex], projectIndex);
        submitButton.classList.remove('submit-task');
        formField.reset();
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
    })
}

const createTaskDetail = (projectIndex, taskIndex) => {
    formField.innerHTML = '';
    formField.classList.add('task-detail');

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('detail-task-title');
    taskTitle.textContent = _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex].projectTasks[taskIndex].name;

    const taskDue = document.createElement('div');
    taskDue.classList.add('detail-task-date');
    taskDue.textContent = _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex].projectTasks[taskIndex].date;

    const taskPrio = document.createElement('div');
    taskPrio.classList.add('detail-task-prio');
    taskPrio.textContent = _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex].projectTasks[taskIndex].priority;

    formField.append(taskTitle, taskDue, taskPrio);
}

const createEditForm = (projectIndex, index) => {
    formField.innerHTML = '';
    formField.classList.add('edit-form');

    const formTitle = document.createElement('p');
    formTitle.classList.add('form-title');
    formTitle.textContent = "Edit Task";

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'edit-title');
    titleInput.setAttribute('name', 'edit-title');

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'edit-date');
    dateInput.setAttribute('name', 'edit-date');

    const prioInput = document.createElement('input')
    prioInput.setAttribute('type', 'radio');
    prioInput.setAttribute('id', 'prio-low');
    prioInput.setAttribute('name', 'edit-prio');
    prioInput.setAttribute('value', 'low');

    const prioInputW = document.createElement('input')
    prioInputW.setAttribute('type', 'radio');
    prioInputW.setAttribute('id', 'prio-high');
    prioInputW.setAttribute('name', 'edit-prio');
    prioInputW.setAttribute('value', 'high');

    const submitButton = document.createElement('button');
    submitButton.classList.add('btn-submit-form');
    submitButton.classList.add('submit-edit');
    submitButton.textContent = "Edit";

    formField.append(formTitle, titleInput, dateInput, prioInput, prioInputW, submitButton);

    titleInput.value = _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex].projectTasks[index].name;
    dateInput.value = _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex].projectTasks[index].date;

    const radioInput = document.querySelectorAll('input[name="edit-prio"]');

    radioInput.forEach((a) => {
        if (a.value === _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex].projectTasks[index].priority) {
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
        ;(0,_tasks__WEBPACK_IMPORTED_MODULE_3__.updateTask)(projectIndex, index, titleInput.value, dateInput.value, prio)
        submitButton.classList.remove('submit-edit');
        formField.reset();
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
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
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });


const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.btn-close-modal');
const form = document.querySelector('#modal-form');
const modalContainer = document.querySelector('.modal-content');

const openModal = () => {
    modal.classList.remove('display-none');
    
}



document.addEventListener('click', (event) => {
    if (event.target === modal || event.target === closeButton) {
        closeModal();
    }
})

const closeModal = () => {
    form.classList.remove('project-form');
    form.classList.remove('task-form');
    form.classList.remove('task-detail');
    form.classList.remove('edit-form');
    form.reset();
    modal.classList.add('display-none')
    form.innerHTML = '';
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
/* harmony export */   "saveToStorage": () => (/* binding */ saveToStorage)
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
    saveToStorage();
}

const removeProject = (index) => {
    projectsArray.splice(index, 1);
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(projectsArray);
}

const saveToStorage = () => {
    let item = JSON.stringify(projectsArray);
    localStorage.setItem('projects', item);
}

const retrieveStorage = () => {
    if (localStorage.getItem('projects') === null) {
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
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.saveToStorage)();
}

const removeTask = (projectIndex, taskIndex) => {
    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex].projectTasks.splice(taskIndex, 1);
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.renderProjectTasks)(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex], projectIndex);
}

const updateTask = (projectIndex, taskIndex, newName, newDate, newPrio) => {
    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex].projectTasks[taskIndex].name = newName;
    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex].projectTasks[taskIndex].date = newDate;
    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex].projectTasks[taskIndex].priority = newPrio;
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.renderProjectTasks)(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[projectIndex], projectIndex);
}





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsSUFBSSxvREFBYTtBQUNqQjtBQUNBLElBQUksd0RBQWE7QUFDakI7O0FBRUE7QUFDQSxJQUFJLG9EQUFhO0FBQ2pCLElBQUksNERBQWtCLENBQUMsb0RBQWE7QUFDcEM7O0FBRUE7QUFDQSxJQUFJLG9EQUFhO0FBQ2pCLElBQUksb0RBQWE7QUFDakIsSUFBSSxvREFBYTtBQUNqQixJQUFJLDREQUFrQixDQUFDLG9EQUFhO0FBQ3BDOzs7QUFHMEQ7Ozs7Ozs7VUMzQjFEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBMkM7QUFDZ0M7QUFDdEQ7QUFDMkI7O0FBRWhELDBEQUFlO0FBQ2YsWUFBWSxvREFBYTtBQUN6Qix3REFBYyxDQUFDLG9EQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1zbGF0ZS1ncmF5OiAjNjQ3NDhCO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0QTNCODtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDcwdmg7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5tYWluIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRpc3BsYXktbm9uZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXNsYXRlLWdyYXk6ICM2NDc0OEI7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRBM0I4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGlzcGxheS1ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0c0FycmF5LCByZW1vdmVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IG9wZW5Nb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XG5pbXBvcnQgeyBjcmVhdGVFZGl0Rm9ybSwgY3JlYXRlUHJvamVjdEZvcm0sIGNyZWF0ZVRhc2tEZXRhaWwsIGNyZWF0ZVRhc2tGb3JtIH0gZnJvbSBcIi4vZm9ybVwiO1xuaW1wb3J0IHsgcmVtb3ZlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5cbmNvbnN0IG9wZW5Qcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1wcm9qZWN0LW1vZGFsJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZvcm0nKTtcblxub3BlblByb2plY3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvcGVuTW9kYWwoKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybScpO1xuICAgIGNyZWF0ZVByb2plY3RGb3JtKCk7XG59KVxuXG5jb25zdCByZW5kZXJQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgcHJvamVjdEluZGV4LCB0YXNrcykgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhcmQnKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG5cbiAgICAgICAgcHJvamVjdENhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdCwgcHJvamVjdEluZGV4KTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcm9qZWN0Q2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgcHJvamVjdENhcmRUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RDYXJkVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RSZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvamVjdFJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXJlbW92ZS1idG4nKTtcbiAgICAgICAgcHJvamVjdFJlbW92ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdFJlbW92ZUJ1dHRvbik7XG5cbiAgICAgICAgcHJvamVjdFJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZVByb2plY3QocHJvamVjdEluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5jb25zdCByZW5kZXJQcm9qZWN0VGFza3MgPSAocHJvamVjdCwgcHJvamVjdEluZGV4KSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHByb2plY3RQYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0UGFnZUhlYWRlcik7XG5cbiAgICBjb25zdCBwcm9qZWN0UGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgcHJvamVjdFBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2VUaXRsZSk7XG5cbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgcHJvamVjdFBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBvcGVuTW9kYWwoKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcbiAgICAgICAgY3JlYXRlVGFza0Zvcm0ocHJvamVjdEluZGV4KVxuICAgIH0pXG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbiAgICBwcm9qZWN0LnByb2plY3RUYXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza0R1ZSk7XG5cbiAgICAgICAgY29uc3QgdGFza1ByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1ByaW8udGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrUHJpbyk7XG5cbiAgICAgICAgY29uc3QgdGFza0RldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YXNrRGV0YWlsLnRleHRDb250ZW50ID0gJ0RldGFpbCc7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tEZXRhaWwpXG5cbiAgICAgICAgdGFza0RldGFpbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG9wZW5Nb2RhbCgpO1xuICAgICAgICAgICAgY3JlYXRlVGFza0RldGFpbChwcm9qZWN0SW5kZXgsIGluZGV4KTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB0YXNrRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YXNrRWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXQtYnRuJyk7XG4gICAgICAgIHRhc2tFZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VESVQnO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrRWRpdEJ1dHRvbik7XG5cbiAgICAgICAgdGFza0VkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBvcGVuTW9kYWwoKTtcbiAgICAgICAgICAgIGNyZWF0ZUVkaXRGb3JtKHByb2plY3RJbmRleCwgaW5kZXgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHRhc2tSZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza1JlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLXJlbW92ZS1idG4nKTtcbiAgICAgICAgdGFza1JlbW92ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza1JlbW92ZUJ1dHRvbik7XG5cbiAgICAgICAgdGFza1JlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZVRhc2socHJvamVjdEluZGV4LCBpbmRleCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdHMsIHJlbmRlclByb2plY3RUYXNrcyB9IiwiaW1wb3J0IHsgY2xvc2VNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzLCByZW5kZXJQcm9qZWN0VGFza3MgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrLCB1cGRhdGVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcblxuY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpO1xuY29uc3QgZm9ybUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZvcm0nKTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgZm9ybUZpZWxkLmlubmVySFRNTCA9ICcnO1xuICAgIGZvcm1GaWVsZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWZvcm0nKTtcblxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZScpO1xuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBQcm9qZWN0XCI7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0XCI7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZS1pbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlLWlucHV0Jyk7XG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLXN1Ym1pdC1mb3JtJyk7XG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1wcm9qZWN0Jyk7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcblxuICAgIGZvcm1GaWVsZC5hcHBlbmQoZm9ybVRpdGxlLCB0aXRsZUlucHV0LCBzdWJtaXRCdXR0b24pO1xuICBcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNyZWF0ZVByb2plY3QodGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xuICAgICAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0c0FycmF5KTtcbiAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Ym1pdC1wcm9qZWN0Jyk7XG4gICAgICAgIGZvcm1GaWVsZC5yZXNldCgpO1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfSlcbn1cblxuY29uc3QgY3JlYXRlVGFza0Zvcm0gPSAocHJvamVjdEluZGV4KSA9PiB7XG4gICAgZm9ybUZpZWxkLmlubmVySFRNTCA9ICcnO1xuICAgIGZvcm1GaWVsZC5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcblxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZScpO1xuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBUYXNrXCI7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrXCI7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZS1pbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlLWlucHV0Jyk7XG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUtaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUtaW5wdXQnKTtcblxuICAgIGNvbnN0IHByaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBwcmlvSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgcHJpb0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpby1sb3cnKTtcbiAgICBwcmlvSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW8taW5wdXQnKTtcbiAgICBwcmlvSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcblxuICAgIGNvbnN0IHByaW9JbnB1dFcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcHJpb0lucHV0Vy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICBwcmlvSW5wdXRXLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpby1oaWdoJyk7XG4gICAgcHJpb0lucHV0Vy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpby1pbnB1dCcpO1xuICAgIHByaW9JbnB1dFcuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLXN1Ym1pdC1mb3JtJyk7XG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC10YXNrJyk7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcblxuICAgIGZvcm1GaWVsZC5hcHBlbmQoZm9ybVRpdGxlLCB0aXRsZUlucHV0LCBkYXRlSW5wdXQsIHByaW9JbnB1dCwgcHJpb0lucHV0Vywgc3VibWl0QnV0dG9uKTtcblxuICAgIGNvbnN0IHJhZGlvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwicHJpby1pbnB1dFwiXScpO1xuXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgcHJpbztcbiAgICAgICAgcmFkaW9JbnB1dC5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcHJpbyA9IGEudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNyZWF0ZVRhc2socHJvamVjdEluZGV4LCB0aXRsZUlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW8pO1xuICAgICAgICByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLCBwcm9qZWN0SW5kZXgpO1xuICAgICAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc3VibWl0LXRhc2snKTtcbiAgICAgICAgZm9ybUZpZWxkLnJlc2V0KCk7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9KVxufVxuXG5jb25zdCBjcmVhdGVUYXNrRGV0YWlsID0gKHByb2plY3RJbmRleCwgdGFza0luZGV4KSA9PiB7XG4gICAgZm9ybUZpZWxkLmlubmVySFRNTCA9ICcnO1xuICAgIGZvcm1GaWVsZC5jbGFzc0xpc3QuYWRkKCd0YXNrLWRldGFpbCcpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2RldGFpbC10YXNrLXRpdGxlJyk7XG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1t0YXNrSW5kZXhdLm5hbWU7XG5cbiAgICBjb25zdCB0YXNrRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0R1ZS5jbGFzc0xpc3QuYWRkKCdkZXRhaWwtdGFzay1kYXRlJyk7XG4gICAgdGFza0R1ZS50ZXh0Q29udGVudCA9IHByb2plY3RzQXJyYXlbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3NbdGFza0luZGV4XS5kYXRlO1xuXG4gICAgY29uc3QgdGFza1ByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrUHJpby5jbGFzc0xpc3QuYWRkKCdkZXRhaWwtdGFzay1wcmlvJyk7XG4gICAgdGFza1ByaW8udGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHk7XG5cbiAgICBmb3JtRmllbGQuYXBwZW5kKHRhc2tUaXRsZSwgdGFza0R1ZSwgdGFza1ByaW8pO1xufVxuXG5jb25zdCBjcmVhdGVFZGl0Rm9ybSA9IChwcm9qZWN0SW5kZXgsIGluZGV4KSA9PiB7XG4gICAgZm9ybUZpZWxkLmlubmVySFRNTCA9ICcnO1xuICAgIGZvcm1GaWVsZC5jbGFzc0xpc3QuYWRkKCdlZGl0LWZvcm0nKTtcblxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZScpO1xuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiRWRpdCBUYXNrXCI7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtdGl0bGUnKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdlZGl0LXRpdGxlJyk7XG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXQtZGF0ZScpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZWRpdC1kYXRlJyk7XG5cbiAgICBjb25zdCBwcmlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcHJpb0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgIHByaW9JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW8tbG93Jyk7XG4gICAgcHJpb0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdlZGl0LXByaW8nKTtcbiAgICBwcmlvSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcblxuICAgIGNvbnN0IHByaW9JbnB1dFcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcHJpb0lucHV0Vy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICBwcmlvSW5wdXRXLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpby1oaWdoJyk7XG4gICAgcHJpb0lucHV0Vy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZWRpdC1wcmlvJyk7XG4gICAgcHJpb0lucHV0Vy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tc3VibWl0LWZvcm0nKTtcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWVkaXQnKTtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblxuICAgIGZvcm1GaWVsZC5hcHBlbmQoZm9ybVRpdGxlLCB0aXRsZUlucHV0LCBkYXRlSW5wdXQsIHByaW9JbnB1dCwgcHJpb0lucHV0Vywgc3VibWl0QnV0dG9uKTtcblxuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzW2luZGV4XS5uYW1lO1xuICAgIGRhdGVJbnB1dC52YWx1ZSA9IHByb2plY3RzQXJyYXlbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3NbaW5kZXhdLmRhdGU7XG5cbiAgICBjb25zdCByYWRpb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cImVkaXQtcHJpb1wiXScpO1xuXG4gICAgcmFkaW9JbnB1dC5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgIGlmIChhLnZhbHVlID09PSBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzW2luZGV4XS5wcmlvcml0eSkge1xuICAgICAgICAgICAgYS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBwcmlvO1xuICAgICAgICByYWRpb0lucHV0LmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgIGlmIChhLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwcmlvID0gYS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdXBkYXRlVGFzayhwcm9qZWN0SW5kZXgsIGluZGV4LCB0aXRsZUlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW8pXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzdWJtaXQtZWRpdCcpO1xuICAgICAgICBmb3JtRmllbGQucmVzZXQoKTtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH0pXG59XG5cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdEZvcm0sIGNyZWF0ZVRhc2tGb3JtLCBjcmVhdGVUYXNrRGV0YWlsLCBjcmVhdGVFZGl0Rm9ybSB9IiwiXG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2xvc2UtbW9kYWwnKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZm9ybScpO1xuY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpO1xuXG5jb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJyk7XG4gICAgXG59XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsIHx8IGV2ZW50LnRhcmdldCA9PT0gY2xvc2VCdXR0b24pIHtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbn0pXG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0LWZvcm0nKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgndGFzay1kZXRhaWwnKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXQtZm9ybScpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKVxuICAgIGZvcm0uaW5uZXJIVE1MID0gJyc7XG59XG5cbmV4cG9ydCB7b3Blbk1vZGFsLCBjbG9zZU1vZGFsfSIsImltcG9ydCB7IHJlbmRlclByb2plY3RzIH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgdGFza0ZhY3RvcnkgfSBmcm9tIFwiLi90YXNrc1wiO1xuXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IFtdO1xuXG4gICAgcmV0dXJuIHsgdGl0bGUsIHByb2plY3RUYXNrcyB9O1xufVxuXG5sZXQgcHJvamVjdHNBcnJheSA9IFtdO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlKTtcbiAgICBwcm9qZWN0c0FycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgc2F2ZVRvU3RvcmFnZSgpO1xufVxuXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgcHJvamVjdHNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJlbmRlclByb2plY3RzKHByb2plY3RzQXJyYXkpO1xufVxuXG5jb25zdCBzYXZlVG9TdG9yYWdlID0gKCkgPT4ge1xuICAgIGxldCBpdGVtID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgaXRlbSk7XG59XG5cbmNvbnN0IHJldHJpZXZlU3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykgPT09IG51bGwpIHtcbiAgICAgICAgY3JlYXRlUHJvamVjdCgnV293Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNGcm9tU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgICAgICBwcm9qZWN0c0FycmF5ID0gcHJvamVjdHNGcm9tU3RvcmFnZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QsIHByb2plY3RGYWN0b3J5LCBwcm9qZWN0c0FycmF5LCByZW1vdmVQcm9qZWN0LCBzYXZlVG9TdG9yYWdlLCByZXRyaWV2ZVN0b3JhZ2UgfVxuXG5cbiIsImltcG9ydCB7IHJlbmRlclByb2plY3RUYXNrcyB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7IHByb2plY3RzQXJyYXksIHNhdmVUb1N0b3JhZ2UgfSBmcm9tIFwiLi9wcm9qZWN0c1wiXG5cbmNvbnN0IHRhc2tGYWN0b3J5ID0gKG5hbWUsIGRhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgcmV0dXJuIHsgbmFtZSAsIGRhdGUsIHByaW9yaXR5fVxufVxuXG5jb25zdCBjcmVhdGVUYXNrID0gKHByb2plY3RJbmRleCwgbmFtZSwgZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBuZXdUYXNrID0gdGFza0ZhY3RvcnkobmFtZSwgZGF0ZSwgcHJpb3JpdHkpO1xuICAgIHByb2plY3RzQXJyYXlbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3MucHVzaChuZXdUYXNrKTtcbiAgICBjb25zb2xlLmxvZyhwcmlvcml0eSk7XG4gICAgc2F2ZVRvU3RvcmFnZSgpO1xufVxuXG5jb25zdCByZW1vdmVUYXNrID0gKHByb2plY3RJbmRleCwgdGFza0luZGV4KSA9PiB7XG4gICAgcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLCBwcm9qZWN0SW5kZXgpO1xufVxuXG5jb25zdCB1cGRhdGVUYXNrID0gKHByb2plY3RJbmRleCwgdGFza0luZGV4LCBuZXdOYW1lLCBuZXdEYXRlLCBuZXdQcmlvKSA9PiB7XG4gICAgcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1t0YXNrSW5kZXhdLm5hbWUgPSBuZXdOYW1lO1xuICAgIHByb2plY3RzQXJyYXlbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3NbdGFza0luZGV4XS5kYXRlID0gbmV3RGF0ZTtcbiAgICBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHkgPSBuZXdQcmlvO1xuICAgIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0sIHByb2plY3RJbmRleCk7XG59XG5cblxuZXhwb3J0IHsgdGFza0ZhY3RvcnksIGNyZWF0ZVRhc2ssIHJlbW92ZVRhc2ssIHVwZGF0ZVRhc2sgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMgfSBmcm9tICcuL2Rpc3BsYXknO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHNBcnJheSwgcmV0cmlldmVTdG9yYWdlIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZVRhc2ssIHRhc2tzTGlzdCB9IGZyb20gJy4vdGFza3MnO1xuXG5yZXRyaWV2ZVN0b3JhZ2UoKTtcbmNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xucmVuZGVyUHJvamVjdHMocHJvamVjdHNBcnJheSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=