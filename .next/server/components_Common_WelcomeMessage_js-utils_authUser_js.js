exports.id = "components_Common_WelcomeMessage_js-utils_authUser_js";
exports.ids = ["components_Common_WelcomeMessage_js-utils_authUser_js"];
exports.modules = {

/***/ "./components/Common/WelcomeMessage.js":
/*!*********************************************!*\
  !*** ./components/Common/WelcomeMessage.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMessage": function() { return /* binding */ HeaderMessage; },
/* harmony export */   "FooterMessage": function() { return /* binding */ FooterMessage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor_project\\Voiceless_saints\\components\\Common\\WelcomeMessage.js";



const HeaderMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "/signup";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: true,
    color: "dark blue",
    header: signupRoute ? "Get Started" : "Welcome Back!!",
    icon: signupRoute ? "settings" : "privacy",
    content: signupRoute ? "Create New Account" : "Login with Email and Password"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 8
  }, undefined);
};
const FooterMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "/signup";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: signupRoute ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
        color: "teal",
        attached: "bottom",
        warning: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
          name: "help"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), "Existing User?", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/login",
          children: "Login Here Instead"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
        attached: "bottom",
        danger: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
          name: "lock"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined), "Existing User?", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/reset",
          children: "Forgot Password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
        attached: "bottom",
        color: "yellow",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
          name: "help"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined), "New User?", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/signup",
          children: "Signup Here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined), "Instead", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)
  }, void 0, false);
};

/***/ }),

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUser": function() { return /* binding */ registerUser; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);





const registerUser = async (user, profilePicUrl, setError, setLoading) => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/signup`, {
      user,
      profilePicUrl
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }
};
const loginUser = async (user, setError, setLoading) => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/auth`, {
      user
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }
};

const setToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("token", token);
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
};

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg = '';

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZU1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL3V0aWxzL2F1dGhVc2VyLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi91dGlscy9jYXRjaEVycm9ycy5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2lnbm9yZWR8QzpcXFVzZXJzXFxOaXNoYSBZYWRhdlxcRGVza3RvcFxcTWlub3JfcHJvamVjdFxcVm9pY2VsZXNzX3NhaW50c1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkhlYWRlck1lc3NhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaWdudXBSb3V0ZSIsInBhdGhuYW1lIiwiRm9vdGVyTWVzc2FnZSIsInJlZ2lzdGVyVXNlciIsInVzZXIiLCJwcm9maWxlUGljVXJsIiwic2V0RXJyb3IiLCJzZXRMb2FkaW5nIiwicmVzIiwiYXhpb3MiLCJiYXNlVXJsIiwic2V0VG9rZW4iLCJkYXRhIiwiZXJyb3IiLCJlcnJvck1zZyIsImNhdGNoRXJyb3JzIiwibG9naW5Vc2VyIiwidG9rZW4iLCJjb29raWUiLCJSb3V0ZXIiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJyZXF1ZXN0IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR08sTUFBTUEsYUFBYSxHQUFDLE1BQUk7QUFDNUIsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU1DLFdBQVcsR0FBQ0YsTUFBTSxDQUFDRyxRQUFQLEtBQWtCLFNBQXBDO0FBRUEsc0JBQ0ks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QUVFLEdBTEQsQ0FLQyxPQUFNQyxLQUFOLEVBQVk7QUFDWCxVQUFNQyxRQUFRLEdBQUdDLHFEQUFXLENBQUNGLEtBQUQsQ0FBNUI7QUFDQVAsWUFBUSxDQUFDUSxRQUFELENBQVI7QUFDRDtBQUNKLENBVk07O0FBV1AsTUFBTUgsUUFBUSxHQUFDTSxLQUFLLElBQUU7QUFDbEJDLHNEQUFBLENBQVcsT0FBWCxFQUFtQkQsS0FBbkI7QUFDQUUseURBQUEsQ0FBWSxHQUFaO0FBQ0gsQ0FIRCxDOzs7Ozs7Ozs7Ozs7QUM3QkEsTUFBTVQsT0FBTyxHQUFFLHVCQUFmO0FBRUEsK0RBQWVBLE9BQWYsRTs7Ozs7Ozs7Ozs7O0FDRkEsTUFBTUssV0FBVyxHQUFJRixLQUFELElBQVc7QUFDN0IsTUFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBRUEsTUFBSUQsS0FBSyxDQUFDTyxRQUFWLEVBQW9CO0FBQ2xCO0FBRUFOLFlBQVEsR0FBR0QsS0FBSyxDQUFDTyxRQUFOLENBQWVSLElBQTFCO0FBRUFTLFdBQU8sQ0FBQ1IsS0FBUixDQUFjQyxRQUFkO0FBQ0QsR0FORCxNQU1PLElBQUlELEtBQUssQ0FBQ1MsT0FBVixFQUFtQjtBQUN4QjtBQUNBUixZQUFRLEdBQUdELEtBQUssQ0FBQ1MsT0FBakI7QUFFQUQsV0FBTyxDQUFDUixLQUFSLENBQWNDLFFBQWQ7QUFDRCxHQUxNLE1BS0E7QUFDTDtBQUNBQSxZQUFRLEdBQUdELEtBQUssQ0FBQ1UsT0FBakI7QUFFQUYsV0FBTyxDQUFDUixLQUFSLENBQWNDLFFBQWQ7QUFDRDs7QUFDRixTQUFPQSxRQUFQO0FBQ0EsQ0FyQkQ7O0FBdUJBLCtEQUFlQyxXQUFmLEU7Ozs7Ozs7Ozs7QUN2QkEsZSIsImZpbGUiOiJjb21wb25lbnRzX0NvbW1vbl9XZWxjb21lTWVzc2FnZV9qcy11dGlsc19hdXRoVXNlcl9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SWNvbixNZXNzYWdlLERpdmlkZXJ9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJNZXNzYWdlPSgpPT57XHJcbiAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgIGNvbnN0IHNpZ251cFJvdXRlPXJvdXRlci5wYXRobmFtZT09PVwiL3NpZ251cFwiXHJcblxyXG4gICByZXR1cm4oXHJcbiAgICAgICA8TWVzc2FnZSBhdHRhY2hlZCBcclxuICAgICAgIGNvbG9yPVwiZGFyayBibHVlXCJcclxuICAgICAgIGhlYWRlcj17c2lnbnVwUm91dGUgPyBcIkdldCBTdGFydGVkXCI6XCJXZWxjb21lIEJhY2shIVwifSBcclxuICAgICAgIGljb249e3NpZ251cFJvdXRlPyBcInNldHRpbmdzXCI6XCJwcml2YWN5XCJ9XHJcbiAgICAgICBjb250ZW50PXtzaWdudXBSb3V0ZT9cIkNyZWF0ZSBOZXcgQWNjb3VudFwiOlwiTG9naW4gd2l0aCBFbWFpbCBhbmQgUGFzc3dvcmRcIn1cclxuICAgICAgIC8+XHJcblxyXG4gICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3Rlck1lc3NhZ2U9KCk9PntcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qgc2lnbnVwUm91dGU9cm91dGVyLnBhdGhuYW1lPT09XCIvc2lnbnVwXCJcclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7c2lnbnVwUm91dGUgPyAoIDw+XHJcbiAgICAgICAgPE1lc3NhZ2UgY29sb3I9XCJ0ZWFsXCIgYXR0YWNoZWQ9XCJib3R0b21cIiB3YXJuaW5nPlxyXG4gICAgICAgICAgPEljb24gbmFtZT1cImhlbHBcIiAvPlxyXG4gICAgICAgICAgRXhpc3RpbmcgVXNlcj97XCIgXCJ9XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICBMb2dpbiBIZXJlIEluc3RlYWRcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lc3NhZ2U+XHJcbiAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+ICAgIFxyXG4gICAgICAgIDwvPiBcclxuICAgICAgICApOihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxNZXNzYWdlIGF0dGFjaGVkPVwiYm90dG9tXCIgZGFuZ2VyPlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwibG9ja1wiIC8+XHJcbiAgICAgICAgICAgIEV4aXN0aW5nIFVzZXI/XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzZXRcIj5cclxuICAgICAgICAgICAgRm9yZ290IFBhc3N3b3JkP1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L01lc3NhZ2U+IFxyXG5cclxuICAgICAgICAgIDxNZXNzYWdlIGF0dGFjaGVkPVwiYm90dG9tXCIgY29sb3I9XCJ5ZWxsb3dcIj5cclxuICAgICAgICAgIDxJY29uIG5hbWU9XCJoZWxwXCIgLz5cclxuICAgICAgICAgIE5ldyBVc2VyP1xyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgIFNpZ251cCBIZXJlXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICBJbnN0ZWFke1wiIFwifVxyXG4gICAgICAgIDwvTWVzc2FnZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICAgICApICBcclxufTsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gJy4vY2F0Y2hFcnJvcnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXI9YXN5bmModXNlcixwcm9maWxlUGljVXJsLHNldEVycm9yLHNldExvYWRpbmcpPT57XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXM9YXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwYCx7dXNlcixwcm9maWxlUGljVXJsfSlcclxuXHJcbiAgIHNldFRva2VuKHJlcy5kYXRhKTtcclxuXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICBjb25zdCBlcnJvck1zZz0gIGNhdGNoRXJyb3JzKGVycm9yKVxyXG4gICAgICBzZXRFcnJvcihlcnJvck1zZylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlcj1hc3luYyh1c2VyLHNldEVycm9yLHNldExvYWRpbmcpPT57XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXM9YXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvYXV0aGAse3VzZXJ9KVxyXG5cclxuICAgc2V0VG9rZW4ocmVzLmRhdGEpO1xyXG5cclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnN0IGVycm9yTXNnPSAgY2F0Y2hFcnJvcnMoZXJyb3IpXHJcbiAgICAgIHNldEVycm9yKGVycm9yTXNnKVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IHNldFRva2VuPXRva2VuPT57XHJcbiAgICBjb29raWUuc2V0KFwidG9rZW5cIix0b2tlbilcclxuICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxufSIsImNvbnN0IGJhc2VVcmwgPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlVXJsO1xyXG4iLCJjb25zdCBjYXRjaEVycm9ycyA9IChlcnJvcikgPT4ge1xyXG4gIGxldCBlcnJvck1zZyA9ICcnO1xyXG5cclxuICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgIC8vIElmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIG5vdCByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlIGluIHRoZSByYW5nZSBvZiAyeHhcclxuXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAvLyBpZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgbm8gcmVzcG9uc2Ugd2FzIHJlY2V2aWVkIGZyb20gc2VydmVyXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlcXVlc3Q7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGlmIHNvbWV0aGluZyBlbHNlIGhhcHBlbmVkIHdoaWxlIG1ha2luZyB0aGUgcmVxdWVzdFxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5tZXNzYWdlO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxuIHJldHVybiBlcnJvck1zZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9