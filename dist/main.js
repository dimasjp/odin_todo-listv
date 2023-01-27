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
    console.log(projectsArray)
}

const removeProject = (index) => {
    projectsArray.splice(index, 1);
    (0,_display__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(projectsArray);
    updateStorage();
    console.log(projectsArray)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLElBQUksb0RBQWE7QUFDakI7QUFDQSxJQUFJLHdEQUFhO0FBQ2pCLGdCQUFnQixvREFBYTtBQUM3Qjs7QUFFQTtBQUNBLElBQUksb0RBQWE7QUFDakIsSUFBSSw0REFBa0IsQ0FBQyxvREFBYTtBQUNwQyxJQUFJLHdEQUFhO0FBQ2pCLGdCQUFnQixvREFBYTtBQUM3Qjs7QUFFQTtBQUNBLElBQUksb0RBQWE7QUFDakIsSUFBSSxvREFBYTtBQUNqQixJQUFJLG9EQUFhO0FBQ2pCLElBQUksNERBQWtCLENBQUMsb0RBQWE7QUFDcEMsSUFBSSx3REFBYTtBQUNqQixnQkFBZ0Isb0RBQWE7QUFDN0I7OztBQUcwRDs7Ozs7OztVQ2hDMUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0EyQztBQUNnQztBQUN0RDtBQUMyQjs7QUFFaEQsMERBQWU7QUFDZixZQUFZLG9EQUFhO0FBQ3pCLHdEQUFjLENBQUMsb0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluX3RvZG8tbGlzdHYvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5fdG9kby1saXN0di93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5fdG9kby1saXN0di93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLWxpc3R2Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXNsYXRlLWdyYXk6ICM2NDc0OEI7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRBM0I4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGlzcGxheS1ub25lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tc2xhdGUtZ3JheTogIzY0NzQ4QjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NEEzQjg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5kaXNwbGF5LW5vbmUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RzQXJyYXksIHJlbW92ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgb3Blbk1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcbmltcG9ydCB7IGNyZWF0ZUVkaXRGb3JtLCBjcmVhdGVQcm9qZWN0Rm9ybSwgY3JlYXRlVGFza0RldGFpbCwgY3JlYXRlVGFza0Zvcm0gfSBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgeyByZW1vdmVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcblxuY29uc3Qgb3BlblByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLXByb2plY3QtbW9kYWwnKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZm9ybScpO1xuXG5vcGVuUHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbCgpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtJyk7XG4gICAgY3JlYXRlUHJvamVjdEZvcm0oKTtcbn0pXG5cbmNvbnN0IHJlbmRlclByb2plY3RzID0gKHByb2plY3RzKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIHByb2plY3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBwcm9qZWN0SW5kZXgsIHRhc2tzKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY2FyZCcpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcblxuICAgICAgICBwcm9qZWN0Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0LCBwcm9qZWN0SW5kZXgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2plY3RDYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICBwcm9qZWN0Q2FyZFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmRUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcm9qZWN0UmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcmVtb3ZlLWJ0bicpO1xuICAgICAgICBwcm9qZWN0UmVtb3ZlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0UmVtb3ZlQnV0dG9uKTtcblxuICAgICAgICBwcm9qZWN0UmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0SW5kZXgpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmNvbnN0IHJlbmRlclByb2plY3RUYXNrcyA9IChwcm9qZWN0LCBwcm9qZWN0SW5kZXgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgcHJvamVjdFBhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHByb2plY3RQYWdlSGVhZGVyKTtcblxuICAgIGNvbnN0IHByb2plY3RQYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0UGFnZVRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBwcm9qZWN0UGFnZUhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0UGFnZVRpdGxlKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICBwcm9qZWN0UGFnZUhlYWRlci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG9wZW5Nb2RhbCgpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybScpO1xuICAgICAgICBjcmVhdGVUYXNrRm9ybShwcm9qZWN0SW5kZXgpXG4gICAgfSlcblxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcblxuICAgIHByb2plY3QucHJvamVjdFRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgdGFza0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRHVlLnRleHRDb250ZW50ID0gdGFzay5kYXRlO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrRHVlKTtcblxuICAgICAgICBjb25zdCB0YXNrUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrUHJpby50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tQcmlvKTtcblxuICAgICAgICBjb25zdCB0YXNrRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tEZXRhaWwudGV4dENvbnRlbnQgPSAnRGV0YWlsJztcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza0RldGFpbClcblxuICAgICAgICB0YXNrRGV0YWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgb3Blbk1vZGFsKCk7XG4gICAgICAgICAgICBjcmVhdGVUYXNrRGV0YWlsKHByb2plY3RJbmRleCwgaW5kZXgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHRhc2tFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tFZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZWRpdC1idG4nKTtcbiAgICAgICAgdGFza0VkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRURJVCc7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tFZGl0QnV0dG9uKTtcblxuICAgICAgICB0YXNrRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG9wZW5Nb2RhbCgpO1xuICAgICAgICAgICAgY3JlYXRlRWRpdEZvcm0ocHJvamVjdEluZGV4LCBpbmRleCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgdGFza1JlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YXNrUmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stcmVtb3ZlLWJ0bicpO1xuICAgICAgICB0YXNrUmVtb3ZlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrUmVtb3ZlQnV0dG9uKTtcblxuICAgICAgICB0YXNrUmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlVGFzayhwcm9qZWN0SW5kZXgsIGluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0cywgcmVuZGVyUHJvamVjdFRhc2tzIH0iLCJpbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMsIHJlbmRlclByb2plY3RUYXNrcyB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2ssIHVwZGF0ZVRhc2sgfSBmcm9tIFwiLi90YXNrc1wiO1xuXG5jb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50Jyk7XG5jb25zdCBmb3JtRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZm9ybScpO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBmb3JtRmllbGQuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9ybUZpZWxkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybScpO1xuXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXRpdGxlJyk7XG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFByb2plY3RcIjtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlByb2plY3RcIjtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlLWlucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUtaW5wdXQnKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tc3VibWl0LWZvcm0nKTtcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LXByb2plY3QnKTtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuXG4gICAgZm9ybUZpZWxkLmFwcGVuZChmb3JtVGl0bGUsIHRpdGxlSW5wdXQsIHN1Ym1pdEJ1dHRvbik7XG4gIFxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdCh0aXRsZUlucHV0LnZhbHVlKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHNBcnJheSk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzdWJtaXQtcHJvamVjdCcpO1xuICAgICAgICBmb3JtRmllbGQucmVzZXQoKTtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH0pXG59XG5cbmNvbnN0IGNyZWF0ZVRhc2tGb3JtID0gKHByb2plY3RJbmRleCkgPT4ge1xuICAgIGZvcm1GaWVsZC5pbm5lckhUTUwgPSAnJztcbiAgICBmb3JtRmllbGQuY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtJyk7XG5cbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUnKTtcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBOZXcgVGFza1wiO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFza1wiO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUtaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZS1pbnB1dCcpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlLWlucHV0Jyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlLWlucHV0Jyk7XG5cbiAgICBjb25zdCBwcmlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcHJpb0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgIHByaW9JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW8tbG93Jyk7XG4gICAgcHJpb0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvLWlucHV0Jyk7XG4gICAgcHJpb0lucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG5cbiAgICBjb25zdCBwcmlvSW5wdXRXID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByaW9JbnB1dFcuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgcHJpb0lucHV0Vy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW8taGlnaCcpO1xuICAgIHByaW9JbnB1dFcuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW8taW5wdXQnKTtcbiAgICBwcmlvSW5wdXRXLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bi1zdWJtaXQtZm9ybScpO1xuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtdGFzaycpO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cbiAgICBmb3JtRmllbGQuYXBwZW5kKGZvcm1UaXRsZSwgdGl0bGVJbnB1dCwgZGF0ZUlucHV0LCBwcmlvSW5wdXQsIHByaW9JbnB1dFcsIHN1Ym1pdEJ1dHRvbik7XG5cbiAgICBjb25zdCByYWRpb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInByaW8taW5wdXRcIl0nKTtcblxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHByaW87XG4gICAgICAgIHJhZGlvSW5wdXQuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgaWYgKGEuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHByaW8gPSBhLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjcmVhdGVUYXNrKHByb2plY3RJbmRleCwgdGl0bGVJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBwcmlvKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3RzQXJyYXlbcHJvamVjdEluZGV4XSwgcHJvamVjdEluZGV4KTtcbiAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Ym1pdC10YXNrJyk7XG4gICAgICAgIGZvcm1GaWVsZC5yZXNldCgpO1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfSlcbn1cblxuY29uc3QgY3JlYXRlVGFza0RldGFpbCA9IChwcm9qZWN0SW5kZXgsIHRhc2tJbmRleCkgPT4ge1xuICAgIGZvcm1GaWVsZC5pbm5lckhUTUwgPSAnJztcbiAgICBmb3JtRmllbGQuY2xhc3NMaXN0LmFkZCgndGFzay1kZXRhaWwnKTtcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdkZXRhaWwtdGFzay10aXRsZScpO1xuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RzQXJyYXlbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3NbdGFza0luZGV4XS5uYW1lO1xuXG4gICAgY29uc3QgdGFza0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEdWUuY2xhc3NMaXN0LmFkZCgnZGV0YWlsLXRhc2stZGF0ZScpO1xuICAgIHRhc2tEdWUudGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzW3Rhc2tJbmRleF0uZGF0ZTtcblxuICAgIGNvbnN0IHRhc2tQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1ByaW8uY2xhc3NMaXN0LmFkZCgnZGV0YWlsLXRhc2stcHJpbycpO1xuICAgIHRhc2tQcmlvLnRleHRDb250ZW50ID0gcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5O1xuXG4gICAgZm9ybUZpZWxkLmFwcGVuZCh0YXNrVGl0bGUsIHRhc2tEdWUsIHRhc2tQcmlvKTtcbn1cblxuY29uc3QgY3JlYXRlRWRpdEZvcm0gPSAocHJvamVjdEluZGV4LCBpbmRleCkgPT4ge1xuICAgIGZvcm1GaWVsZC5pbm5lckhUTUwgPSAnJztcbiAgICBmb3JtRmllbGQuY2xhc3NMaXN0LmFkZCgnZWRpdC1mb3JtJyk7XG5cbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUnKTtcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkVkaXQgVGFza1wiO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LXRpdGxlJyk7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZWRpdC10aXRsZScpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LWRhdGUnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VkaXQtZGF0ZScpO1xuXG4gICAgY29uc3QgcHJpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByaW9JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICBwcmlvSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvLWxvdycpO1xuICAgIHByaW9JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZWRpdC1wcmlvJyk7XG4gICAgcHJpb0lucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG5cbiAgICBjb25zdCBwcmlvSW5wdXRXID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByaW9JbnB1dFcuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgcHJpb0lucHV0Vy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW8taGlnaCcpO1xuICAgIHByaW9JbnB1dFcuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VkaXQtcHJpbycpO1xuICAgIHByaW9JbnB1dFcuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLXN1Ym1pdC1mb3JtJyk7XG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1lZGl0Jyk7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG5cbiAgICBmb3JtRmllbGQuYXBwZW5kKGZvcm1UaXRsZSwgdGl0bGVJbnB1dCwgZGF0ZUlucHV0LCBwcmlvSW5wdXQsIHByaW9JbnB1dFcsIHN1Ym1pdEJ1dHRvbik7XG5cbiAgICB0aXRsZUlucHV0LnZhbHVlID0gcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1tpbmRleF0ubmFtZTtcbiAgICBkYXRlSW5wdXQudmFsdWUgPSBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzW2luZGV4XS5kYXRlO1xuXG4gICAgY29uc3QgcmFkaW9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJlZGl0LXByaW9cIl0nKTtcblxuICAgIHJhZGlvSW5wdXQuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICBpZiAoYS52YWx1ZSA9PT0gcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1tpbmRleF0ucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGEuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgcHJpbztcbiAgICAgICAgcmFkaW9JbnB1dC5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcHJpbyA9IGEudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHVwZGF0ZVRhc2socHJvamVjdEluZGV4LCBpbmRleCwgdGl0bGVJbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBwcmlvKVxuICAgICAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc3VibWl0LWVkaXQnKTtcbiAgICAgICAgZm9ybUZpZWxkLnJlc2V0KCk7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9KVxufVxuXG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RGb3JtLCBjcmVhdGVUYXNrRm9ybSwgY3JlYXRlVGFza0RldGFpbCwgY3JlYXRlRWRpdEZvcm0gfSIsIlxuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNsb3NlLW1vZGFsJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZvcm0nKTtcbmNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKTtcblxuY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXktbm9uZScpO1xuICAgIFxufVxuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCB8fCBldmVudC50YXJnZXQgPT09IGNsb3NlQnV0dG9uKSB7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9XG59KVxuXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgncHJvamVjdC1mb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLWZvcm0nKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stZGV0YWlsJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0LWZvcm0nKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZGlzcGxheS1ub25lJylcbiAgICBmb3JtLmlubmVySFRNTCA9ICcnO1xufVxuXG5leHBvcnQge29wZW5Nb2RhbCwgY2xvc2VNb2RhbH0iLCJpbXBvcnQgeyByZW5kZXJQcm9qZWN0cywgcmVuZGVyUHJvamVjdFRhc2tzIH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IHsgdGFza0ZhY3RvcnkgfSBmcm9tIFwiLi90YXNrc1wiO1xuXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IFtdO1xuXG4gICAgcmV0dXJuIHsgdGl0bGUsIHByb2plY3RUYXNrcyB9O1xufVxuXG5sZXQgcHJvamVjdHNBcnJheSA9IFtdO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlKTtcbiAgICBwcm9qZWN0c0FycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgdXBkYXRlU3RvcmFnZSgpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpXG59XG5cbmNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBwcm9qZWN0c0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHNBcnJheSk7XG4gICAgdXBkYXRlU3RvcmFnZSgpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpXG59XG5cbmNvbnN0IHVwZGF0ZVN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgbGV0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0FycmF5KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBpdGVtKTtcbn1cblxuY29uc3QgcmV0cmlldmVTdG9yYWdlID0gKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSA9PT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTm8gcHJvamVjdHMgZm91bmQnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0aW5nIFdvdyBwcm9qZWN0Jyk7XG4gICAgICAgIGNyZWF0ZVByb2plY3QoJ1dvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzRnJvbVN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICAgICAgcHJvamVjdHNBcnJheSA9IHByb2plY3RzRnJvbVN0b3JhZ2U7XG4gICAgfVxufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0RmFjdG9yeSwgcHJvamVjdHNBcnJheSwgcmVtb3ZlUHJvamVjdCwgdXBkYXRlU3RvcmFnZSwgcmV0cmlldmVTdG9yYWdlIH1cblxuXG4iLCJpbXBvcnQgeyByZW5kZXJQcm9qZWN0VGFza3MgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5LCB1cGRhdGVTdG9yYWdlIH0gZnJvbSBcIi4vcHJvamVjdHNcIlxuXG5jb25zdCB0YXNrRmFjdG9yeSA9IChuYW1lLCBkYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIHJldHVybiB7IG5hbWUgLCBkYXRlLCBwcmlvcml0eX1cbn1cblxuY29uc3QgY3JlYXRlVGFzayA9IChwcm9qZWN0SW5kZXgsIG5hbWUsIGRhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2tGYWN0b3J5KG5hbWUsIGRhdGUsIHByaW9yaXR5KTtcbiAgICBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgY29uc29sZS5sb2cocHJpb3JpdHkpO1xuICAgIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KVxufVxuXG5jb25zdCByZW1vdmVUYXNrID0gKHByb2plY3RJbmRleCwgdGFza0luZGV4KSA9PiB7XG4gICAgcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICByZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLCBwcm9qZWN0SW5kZXgpO1xuICAgIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KVxufVxuXG5jb25zdCB1cGRhdGVUYXNrID0gKHByb2plY3RJbmRleCwgdGFza0luZGV4LCBuZXdOYW1lLCBuZXdEYXRlLCBuZXdQcmlvKSA9PiB7XG4gICAgcHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1t0YXNrSW5kZXhdLm5hbWUgPSBuZXdOYW1lO1xuICAgIHByb2plY3RzQXJyYXlbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3NbdGFza0luZGV4XS5kYXRlID0gbmV3RGF0ZTtcbiAgICBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHkgPSBuZXdQcmlvO1xuICAgIHJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0sIHByb2plY3RJbmRleCk7XG4gICAgdXBkYXRlU3RvcmFnZSgpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpXG59XG5cblxuZXhwb3J0IHsgdGFza0ZhY3RvcnksIGNyZWF0ZVRhc2ssIHJlbW92ZVRhc2ssIHVwZGF0ZVRhc2sgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMgfSBmcm9tICcuL2Rpc3BsYXknO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHNBcnJheSwgcmV0cmlldmVTdG9yYWdlIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZVRhc2ssIHRhc2tzTGlzdCB9IGZyb20gJy4vdGFza3MnO1xuXG5yZXRyaWV2ZVN0b3JhZ2UoKTtcbmNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xucmVuZGVyUHJvamVjdHMocHJvamVjdHNBcnJheSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=