exports.id = "components_Common_WelcomeMessage_js-utils_baseUrl_js";
exports.ids = ["components_Common_WelcomeMessage_js-utils_baseUrl_js"];
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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZU1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL3V0aWxzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9pZ25vcmVkfEM6XFxVc2Vyc1xcTmlzaGEgWWFkYXZcXERlc2t0b3BcXE1pbm9yX3Byb2plY3RcXFZvaWNlbGVzc19zYWludHNcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJIZWFkZXJNZXNzYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwic2lnbnVwUm91dGUiLCJwYXRobmFtZSIsIkZvb3Rlck1lc3NhZ2UiLCJiYXNlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHTyxNQUFNQSxhQUFhLEdBQUMsTUFBSTtBQUM1QixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsV0FBVyxHQUFDRixNQUFNLENBQUNHLFFBQVAsS0FBa0IsU0FBcEM7QUFFQSxzQkFDSSw4REFBQyxzREFBRDtBQUFTLFlBQVEsTUFBakI7QUFDQSxTQUFLLEVBQUMsV0FETjtBQUVBLFVBQU0sRUFBRUQsV0FBVyxHQUFHLGFBQUgsR0FBaUIsZ0JBRnBDO0FBR0EsUUFBSSxFQUFFQSxXQUFXLEdBQUUsVUFBRixHQUFhLFNBSDlCO0FBSUEsV0FBTyxFQUFFQSxXQUFXLEdBQUMsb0JBQUQsR0FBc0I7QUFKMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBU0YsQ0FiTTtBQWVBLE1BQU1FLGFBQWEsR0FBQyxNQUFJO0FBRTNCLFFBQU1KLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxXQUFXLEdBQUNGLE1BQU0sQ0FBQ0csUUFBUCxLQUFrQixTQUFwQztBQUdBLHNCQUNJO0FBQUEsY0FDQ0QsV0FBVyxnQkFBSztBQUFBLDhCQUNqQiw4REFBQyxzREFBRDtBQUFTLGFBQUssRUFBQyxNQUFmO0FBQXNCLGdCQUFRLEVBQUMsUUFBL0I7QUFBd0MsZUFBTyxNQUEvQztBQUFBLGdDQUNFLDhEQUFDLG1EQUFEO0FBQU0sY0FBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixvQkFFaUIsR0FGakIsZUFHRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUIsZUFRakIsOERBQUMsc0RBQUQ7QUFBUyxjQUFNO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSaUI7QUFBQSxvQkFBTCxnQkFXWjtBQUFBLDhCQUNBLDhEQUFDLHNEQUFEO0FBQVMsZ0JBQVEsRUFBQyxRQUFsQjtBQUEyQixjQUFNLE1BQWpDO0FBQUEsZ0NBQ0ksOERBQUMsbURBQUQ7QUFBTSxjQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGlDQUdJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBU0UsOERBQUMsc0RBQUQ7QUFBUyxnQkFBUSxFQUFDLFFBQWxCO0FBQTJCLGFBQUssRUFBQyxRQUFqQztBQUFBLGdDQUNBLDhEQUFDLG1EQUFEO0FBQU0sY0FBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQSw0QkFHQSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhBLGFBTVEsR0FOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQTtBQVpBLG1CQURKO0FBbUNILENBekNNLEM7Ozs7Ozs7Ozs7OztBQ3BCUCxNQUFNRyxPQUFPLEdBQUUsdUJBQWY7QUFFQSwrREFBZUEsT0FBZixFOzs7Ozs7Ozs7O0FDRkEsZSIsImZpbGUiOiJjb21wb25lbnRzX0NvbW1vbl9XZWxjb21lTWVzc2FnZV9qcy11dGlsc19iYXNlVXJsX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJY29uLE1lc3NhZ2UsRGl2aWRlcn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlck1lc3NhZ2U9KCk9PntcclxuICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgY29uc3Qgc2lnbnVwUm91dGU9cm91dGVyLnBhdGhuYW1lPT09XCIvc2lnbnVwXCJcclxuXHJcbiAgIHJldHVybihcclxuICAgICAgIDxNZXNzYWdlIGF0dGFjaGVkIFxyXG4gICAgICAgY29sb3I9XCJkYXJrIGJsdWVcIlxyXG4gICAgICAgaGVhZGVyPXtzaWdudXBSb3V0ZSA/IFwiR2V0IFN0YXJ0ZWRcIjpcIldlbGNvbWUgQmFjayEhXCJ9IFxyXG4gICAgICAgaWNvbj17c2lnbnVwUm91dGU/IFwic2V0dGluZ3NcIjpcInByaXZhY3lcIn1cclxuICAgICAgIGNvbnRlbnQ9e3NpZ251cFJvdXRlP1wiQ3JlYXRlIE5ldyBBY2NvdW50XCI6XCJMb2dpbiB3aXRoIEVtYWlsIGFuZCBQYXNzd29yZFwifVxyXG4gICAgICAgLz5cclxuXHJcbiAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyTWVzc2FnZT0oKT0+e1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBzaWdudXBSb3V0ZT1yb3V0ZXIucGF0aG5hbWU9PT1cIi9zaWdudXBcIlxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtzaWdudXBSb3V0ZSA/ICggPD5cclxuICAgICAgICA8TWVzc2FnZSBjb2xvcj1cInRlYWxcIiBhdHRhY2hlZD1cImJvdHRvbVwiIHdhcm5pbmc+XHJcbiAgICAgICAgICA8SWNvbiBuYW1lPVwiaGVscFwiIC8+XHJcbiAgICAgICAgICBFeGlzdGluZyBVc2VyP3tcIiBcIn1cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgIExvZ2luIEhlcmUgSW5zdGVhZFxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTWVzc2FnZT5cclxuICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz4gICAgXHJcbiAgICAgICAgPC8+IFxyXG4gICAgICAgICk6KFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPE1lc3NhZ2UgYXR0YWNoZWQ9XCJib3R0b21cIiBkYW5nZXI+XHJcbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJsb2NrXCIgLz5cclxuICAgICAgICAgICAgRXhpc3RpbmcgVXNlcj9cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXNldFwiPlxyXG4gICAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmQ/XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVzc2FnZT4gXHJcblxyXG4gICAgICAgICAgPE1lc3NhZ2UgYXR0YWNoZWQ9XCJib3R0b21cIiBjb2xvcj1cInllbGxvd1wiPlxyXG4gICAgICAgICAgPEljb24gbmFtZT1cImhlbHBcIiAvPlxyXG4gICAgICAgICAgTmV3IFVzZXI/XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgU2lnbnVwIEhlcmVcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIEluc3RlYWR7XCIgXCJ9XHJcbiAgICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICkgIFxyXG59OyIsImNvbnN0IGJhc2VVcmwgPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlVXJsO1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9