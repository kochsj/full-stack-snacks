module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/LoginForm.js":
/*!***************************************!*\
  !*** ./pages/components/LoginForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/stephen/codefellows/401/labs/lab42/full-stack-snacks/full_stack_snacks/pages/components/LoginForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const url = 'http://167.172.203.221:8000/api/';

class LoginForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.obtainTokens = this.obtainTokens.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async obtainTokens(event) {
    event.preventDefault();

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(url + 'token/', {
        username: this.state.username,
        password: this.state.password
      });
      this.props.onSuccess(response.data);
    } catch (error) {
      console.error('ugh', error);
    }
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
      onSubmit: this.obtainTokens,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("input", {
      name: "username",
      type: "text",
      value: this.state.username,
      placeholder: "username",
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), __jsx("input", {
      name: "password",
      type: "password",
      value: this.state.password,
      placeholder: "password",
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "ok")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./pages/components/snackDetail.js":
/*!*****************************************!*\
  !*** ./pages/components/snackDetail.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _snackForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snackForm */ "./pages/components/snackForm.js");
var _jsxFileName = "/Users/stephen/codefellows/401/labs/lab42/full-stack-snacks/full_stack_snacks/pages/components/snackDetail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: `/`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Home"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "ID: ", props.snack.id), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "SNACK: ", props.snack.title), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "DESCRIPTION: ", props.snack.description), __jsx("button", {
  onClick: props.deleteHandler,
  value: props.snack.id,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "delete"), __jsx(_snackForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
  idNum: props.snack.id,
  name: props.snack.title,
  desc: props.snack.description,
  doneHandler: props.doneHandler,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})));

/***/ }),

/***/ "./pages/components/snackForm.js":
/*!***************************************!*\
  !*** ./pages/components/snackForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SnackForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/stephen/codefellows/401/labs/lab42/full-stack-snacks/full_stack_snacks/pages/components/snackForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class SnackForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackName: props.name,
      description: props.desc
    };
    this.doneHandler = props.doneHandler;
    this.updateHandler = this.updateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  updateHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitHandler(event) {
    event.preventDefault(); // submission of NEW snack

    if (!this.props.idNum) {
      let newId = Date.now();
      let newSnack = {
        id: newId,
        title: this.state.snackName,
        description: this.state.description
      };
      this.doneHandler(newSnack);
      this.setState({
        snackName: '',
        description: ''
      }); // Updating snack
    } else {
      let newSnack = {
        id: this.props.idNum,
        title: this.state.snackName,
        description: this.state.description
      };
      this.doneHandler(newSnack);
      this.setState({
        snackName: this.state.snackName,
        description: this.state.description
      });
    }
  }

  render() {
    return __jsx("form", {
      onSubmit: this.submitHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      name: "snackName",
      value: this.state.snackName,
      onChange: this.updateHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx("input", {
      type: "text",
      name: "description",
      value: this.state.description,
      onChange: this.updateHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), __jsx("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "ok"));
  }

}

/***/ }),

/***/ "./pages/components/snackList.js":
/*!***************************************!*\
  !*** ./pages/components/snackList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _snackForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snackForm */ "./pages/components/snackForm.js");
var _jsxFileName = "/Users/stephen/codefellows/401/labs/lab42/full-stack-snacks/full_stack_snacks/pages/components/snackList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, props.snacks.map(snack => __jsx(ListItem, {
  key: snack.id,
  snack: snack,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}))), __jsx(_snackForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
  name: '',
  desc: '',
  doneHandler: props.doneHandler,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})));

function ListItem(props) {
  return __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: `/${props.snack.id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.snack.title)));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LoginForm */ "./pages/components/LoginForm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_snackDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/snackDetail */ "./pages/components/snackDetail.js");
/* harmony import */ var _components_snackList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/snackList */ "./pages/components/snackList.js");
/* harmony import */ var _components_snackForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/snackForm */ "./pages/components/snackForm.js");
var _jsxFileName = "/Users/stephen/codefellows/401/labs/lab42/full-stack-snacks/full_stack_snacks/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import './App.css';





const url = 'http://167.172.203.221:8000/api/';
class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: '',
      refreshToken: '',
      snacks: null // snacks: [
      //   {id: 1234, name: "abcd", desc: "yaya"},
      //   {id: 5678, name: "efgh", desc: "nana"},
      // ]      

    };
    this.renderSnackDetail = this.renderSnackDetail.bind(this);
    this.formHandler = this.formHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }

  async loginHandler({
    access,
    refresh
  }) {
    this.setState({
      accessToken: access,
      refreshToken: refresh
    });

    try {
      const headers = {
        headers: {
          Authorization: `Bearer ${this.state.accessToken}`
        }
      };
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url + 'v1/', headers);
      console.log(response.data);
      this.setState({
        snacks: response.data
      });
    } catch (error) {
      console.error('ruhroh');
    }
  }

  renderSnackDetail(props) {
    if (!this.state.accessToken) {
      return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      });
    }

    const snackId = parseInt(props.match.params.id);
    const snack = this.state.snacks && this.state.snacks.find(snack => snack.id === snackId);
    console.log('trying to render {snack}: ', snack);

    if (snack) {
      return __jsx(_components_snackDetail__WEBPACK_IMPORTED_MODULE_4__["default"], {
        snack: snack,
        doneHandler: this.updateHandler,
        deleteHandler: this.deleteHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      });
    } else {
      return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      });
    }
  }

  async formHandler(snack) {
    let newSnack = snack;
    let newList = this.state.snacks;
    newList.push(newSnack);
    this.setState({
      snacks: newList
    });
  }

  async updateHandler(snack) {
    console.log('input update: ', snack);
    this.setState({
      snacks: this.state.snacks.map(snk => {
        if (snk.id === snack.id) {
          return snack;
        } else {
          return snk;
        }
      })
    });
  }

  async deleteHandler(event) {
    let snackToDelete = event.target.value;
    console.log('should be id: ', snackToDelete);
    const lst = this.state.snacks.filter(snack => snack.id !== Number(snackToDelete));
    this.setState({
      snacks: lst
    });
  }

  render() {
    return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "Hello World"), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, this.state.snacks ? __jsx(_components_snackList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      snacks: this.state.snacks,
      doneHandler: this.formHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }) : __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSuccess: this.loginHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    })), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      path: "/:id",
      render: this.renderSnackDetail,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stephen/codefellows/401/labs/lab42/full-stack-snacks/full_stack_snacks/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map