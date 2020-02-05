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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0gV5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SnackForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
      onSubmit: this.submitHandler
    }, __jsx("input", {
      type: "text",
      name: "snackName",
      value: this.state.snackName,
      onChange: this.updateHandler
    }), __jsx("input", {
      type: "text",
      name: "description",
      value: this.state.description,
      onChange: this.updateHandler
    }), __jsx("button", null, "ok"));
  }

}

/***/ }),

/***/ "4Smr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if ( true && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config); // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.

        navigator.serviceWorker.ready.then(() => {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://bit.ly/CRA-PWA');
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("taSG");


/***/ }),

/***/ "EQZF":
/***/ (function(module, exports) {



/***/ }),

/***/ "Y3F2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
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
      onSubmit: this.obtainTokens
    }, __jsx("input", {
      name: "username",
      type: "text",
      value: this.state.username,
      placeholder: "username",
      onChange: this.changeHandler
    }), __jsx("input", {
      name: "password",
      type: "password",
      value: this.state.password,
      placeholder: "password",
      onChange: this.changeHandler
    }), __jsx("button", null, "ok")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "a59Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Y3F2");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("EQZF");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oncg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_snackDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("qczZ");
/* harmony import */ var _components_snackList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("jnHE");
/* harmony import */ var _components_snackForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("0gV5");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








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
      return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
        to: "/"
      });
    }

    const snackId = parseInt(props.match.params.id);
    const snack = this.state.snacks && this.state.snacks.find(snack => snack.id === snackId);
    console.log('trying to render {snack}: ', snack);

    if (snack) {
      return __jsx(_components_snackDetail__WEBPACK_IMPORTED_MODULE_5__["default"], {
        snack: snack,
        doneHandler: this.updateHandler,
        deleteHandler: this.deleteHandler
      });
    } else {
      return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
        to: "/"
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
    return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], null, __jsx("h1", null, "Hello World"), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      exact: true,
      path: "/"
    }, this.state.snacks ? __jsx(_components_snackList__WEBPACK_IMPORTED_MODULE_6__["default"], {
      snacks: this.state.snacks,
      doneHandler: this.formHandler
    }) : __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSuccess: this.loginHandler
    })), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      path: "/:id",
      render: this.renderSnackDetail
    })));
  }

}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "jnHE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oncg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _snackForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0gV5");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", null, props.snacks.map(snack => __jsx(ListItem, {
  key: snack.id,
  snack: snack
}))), __jsx(_snackForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
  name: '',
  desc: '',
  doneHandler: props.doneHandler
})));

function ListItem(props) {
  return __jsx("li", null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: `/${props.snack.id}`
  }, __jsx("p", null, props.snack.title)));
}

/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "qczZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oncg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _snackForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0gV5");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: `/`
}, "Home"), __jsx("p", null, "ID: ", props.snack.id), __jsx("p", null, "SNACK: ", props.snack.title), __jsx("p", null, "DESCRIPTION: ", props.snack.description), __jsx("button", {
  onClick: props.deleteHandler,
  value: props.snack.id
}, "delete"), __jsx(_snackForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
  idNum: props.snack.id,
  name: props.snack.title,
  desc: props.snack.description,
  doneHandler: props.doneHandler
})));

/***/ }),

/***/ "taSG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xueu");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a59Y");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Smr");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(__jsx(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "xueu":
/***/ (function(module, exports) {



/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });