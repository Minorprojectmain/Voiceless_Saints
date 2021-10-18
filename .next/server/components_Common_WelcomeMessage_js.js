exports.id = "components_Common_WelcomeMessage_js";
exports.ids = ["components_Common_WelcomeMessage_js"];
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


var _jsxFileName = "C:\\Users\\Om Bindal\\Desktop\\New folder (13)\\Voiceless_Saints\\components\\Common\\WelcomeMessage.js";



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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZU1lc3NhZ2UuanMiXSwibmFtZXMiOlsiSGVhZGVyTWVzc2FnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInNpZ251cFJvdXRlIiwicGF0aG5hbWUiLCJGb290ZXJNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHTyxNQUFNQSxhQUFhLEdBQUMsTUFBSTtBQUM1QixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsV0FBVyxHQUFDRixNQUFNLENBQUNHLFFBQVAsS0FBa0IsU0FBcEM7QUFFQSxzQkFDSSw4REFBQyxzREFBRDtBQUFTLFlBQVEsTUFBakI7QUFDQSxTQUFLLEVBQUMsV0FETjtBQUVBLFVBQU0sRUFBRUQsV0FBVyxHQUFHLGFBQUgsR0FBaUIsZ0JBRnBDO0FBR0EsUUFBSSxFQUFFQSxXQUFXLEdBQUUsVUFBRixHQUFhLFNBSDlCO0FBSUEsV0FBTyxFQUFFQSxXQUFXLEdBQUMsb0JBQUQsR0FBc0I7QUFKMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBU0YsQ0FiTTtBQWVBLE1BQU1FLGFBQWEsR0FBQyxNQUFJO0FBRTNCLFFBQU1KLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxXQUFXLEdBQUNGLE1BQU0sQ0FBQ0csUUFBUCxLQUFrQixTQUFwQztBQUdBLHNCQUNJO0FBQUEsY0FDQ0QsV0FBVyxnQkFBSztBQUFBLDhCQUNqQiw4REFBQyxzREFBRDtBQUFTLGFBQUssRUFBQyxNQUFmO0FBQXNCLGdCQUFRLEVBQUMsUUFBL0I7QUFBd0MsZUFBTyxNQUEvQztBQUFBLGdDQUNFLDhEQUFDLG1EQUFEO0FBQU0sY0FBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixvQkFFaUIsR0FGakIsZUFHRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUIsZUFRakIsOERBQUMsc0RBQUQ7QUFBUyxjQUFNO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSaUI7QUFBQSxvQkFBTCxnQkFXWjtBQUFBLDhCQUNBLDhEQUFDLHNEQUFEO0FBQVMsZ0JBQVEsRUFBQyxRQUFsQjtBQUEyQixjQUFNLE1BQWpDO0FBQUEsZ0NBQ0ksOERBQUMsbURBQUQ7QUFBTSxjQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGlDQUdJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBU0UsOERBQUMsc0RBQUQ7QUFBUyxnQkFBUSxFQUFDLFFBQWxCO0FBQTJCLGFBQUssRUFBQyxRQUFqQztBQUFBLGdDQUNBLDhEQUFDLG1EQUFEO0FBQU0sY0FBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQSw0QkFHQSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhBLGFBTVEsR0FOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQTtBQVpBLG1CQURKO0FBbUNILENBekNNLEMiLCJmaWxlIjoiY29tcG9uZW50c19Db21tb25fV2VsY29tZU1lc3NhZ2VfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ljb24sTWVzc2FnZSxEaXZpZGVyfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyTWVzc2FnZT0oKT0+e1xyXG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICBjb25zdCBzaWdudXBSb3V0ZT1yb3V0ZXIucGF0aG5hbWU9PT1cIi9zaWdudXBcIlxyXG5cclxuICAgcmV0dXJuKFxyXG4gICAgICAgPE1lc3NhZ2UgYXR0YWNoZWQgXHJcbiAgICAgICBjb2xvcj1cImRhcmsgYmx1ZVwiXHJcbiAgICAgICBoZWFkZXI9e3NpZ251cFJvdXRlID8gXCJHZXQgU3RhcnRlZFwiOlwiV2VsY29tZSBCYWNrISFcIn0gXHJcbiAgICAgICBpY29uPXtzaWdudXBSb3V0ZT8gXCJzZXR0aW5nc1wiOlwicHJpdmFjeVwifVxyXG4gICAgICAgY29udGVudD17c2lnbnVwUm91dGU/XCJDcmVhdGUgTmV3IEFjY291bnRcIjpcIkxvZ2luIHdpdGggRW1haWwgYW5kIFBhc3N3b3JkXCJ9XHJcbiAgICAgICAvPlxyXG5cclxuICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJNZXNzYWdlPSgpPT57XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHNpZ251cFJvdXRlPXJvdXRlci5wYXRobmFtZT09PVwiL3NpZ251cFwiXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAge3NpZ251cFJvdXRlID8gKCA8PlxyXG4gICAgICAgIDxNZXNzYWdlIGNvbG9yPVwidGVhbFwiIGF0dGFjaGVkPVwiYm90dG9tXCIgd2FybmluZz5cclxuICAgICAgICAgIDxJY29uIG5hbWU9XCJoZWxwXCIgLz5cclxuICAgICAgICAgIEV4aXN0aW5nIFVzZXI/e1wiIFwifVxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgTG9naW4gSGVyZSBJbnN0ZWFkXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPiAgICBcclxuICAgICAgICA8Lz4gXHJcbiAgICAgICAgKTooXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZD1cImJvdHRvbVwiIGRhbmdlcj5cclxuICAgICAgICAgICAgPEljb24gbmFtZT1cImxvY2tcIiAvPlxyXG4gICAgICAgICAgICBFeGlzdGluZyBVc2VyP1xyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc2V0XCI+XHJcbiAgICAgICAgICAgIEZvcmdvdCBQYXNzd29yZD9cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZXNzYWdlPiBcclxuXHJcbiAgICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZD1cImJvdHRvbVwiIGNvbG9yPVwieWVsbG93XCI+XHJcbiAgICAgICAgICA8SWNvbiBuYW1lPVwiaGVscFwiIC8+XHJcbiAgICAgICAgICBOZXcgVXNlcj9cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICBTaWdudXAgSGVyZVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgSW5zdGVhZHtcIiBcIn1cclxuICAgICAgICA8L01lc3NhZ2U+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgKSAgXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==