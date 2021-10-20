self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Post/PostComments.js":
/*!*****************************************!*\
  !*** ./components/Post/PostComments.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor_pro\\Voiceless_Saints\\components\\Post\\PostComments.js",
    _s = $RefreshSig$();



 //import { deleteComment } from "../../utils/postActions";

function PostComments(_ref) {
  _s();

  var comment = _ref.comment,
      user = _ref.user,
      setComments = _ref.setComments,
      postId = _ref.postId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      disabled = _useState[0],
      setDisabled = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Comment.Group, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Comment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Comment.Avatar, {
          src: comment.user.profilePicUrl
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Comment.Content, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Comment.Author, {
            as: "a",
            href: "/".concat(comment.user.username),
            children: comment.user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Comment.Metadata, {
            children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__.default)(comment.date)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Comment.Text, {
            children: comment.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Comment.Actions, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Comment.Action, {
              children: (user.role === "root" || comment.user._id === user._id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                disabled: disabled,
                color: "red",
                name: "trash"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(PostComments, "5W82NUQ3Xqz75UbGysMcuZnIguI=");

_c = PostComments;
/* harmony default export */ __webpack_exports__["default"] = (PostComments);

var _c;

$RefreshReg$(_c, "PostComments");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L1Bvc3RDb21tZW50cy5qcyJdLCJuYW1lcyI6WyJQb3N0Q29tbWVudHMiLCJjb21tZW50IiwidXNlciIsInNldENvbW1lbnRzIiwicG9zdElkIiwidXNlU3RhdGUiLCJkaXNhYmxlZCIsInNldERpc2FibGVkIiwicHJvZmlsZVBpY1VybCIsInVzZXJuYW1lIiwibmFtZSIsImNhbGN1bGF0ZVRpbWUiLCJkYXRlIiwidGV4dCIsInJvbGUiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUVBLFNBQVNBLFlBQVQsT0FBOEQ7QUFBQTs7QUFBQSxNQUF0Q0MsT0FBc0MsUUFBdENBLE9BQXNDO0FBQUEsTUFBN0JDLElBQTZCLFFBQTdCQSxJQUE2QjtBQUFBLE1BQXZCQyxXQUF1QixRQUF2QkEsV0FBdUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQUEsa0JBQzVCQywrQ0FBUSxDQUFDLEtBQUQsQ0FEb0I7QUFBQSxNQUNyREMsUUFEcUQ7QUFBQSxNQUMzQ0MsV0FEMkM7O0FBRzVELHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsNERBQUQ7QUFBQSw2QkFDRSw4REFBQyxzREFBRDtBQUFBLGdDQUNFLDhEQUFDLDZEQUFEO0FBQWdCLGFBQUcsRUFBRU4sT0FBTyxDQUFDQyxJQUFSLENBQWFNO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyw4REFBRDtBQUFBLGtDQUNFLDhEQUFDLDZEQUFEO0FBQWdCLGNBQUUsRUFBQyxHQUFuQjtBQUF1QixnQkFBSSxhQUFNUCxPQUFPLENBQUNDLElBQVIsQ0FBYU8sUUFBbkIsQ0FBM0I7QUFBQSxzQkFDR1IsT0FBTyxDQUFDQyxJQUFSLENBQWFRO0FBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSw4REFBQywrREFBRDtBQUFBLHNCQUFtQkMsNkRBQWEsQ0FBQ1YsT0FBTyxDQUFDVyxJQUFUO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFNRSw4REFBQywyREFBRDtBQUFBLHNCQUFlWCxPQUFPLENBQUNZO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkYsZUFRRSw4REFBQyw4REFBRDtBQUFBLG1DQUNFLDhEQUFDLDZEQUFEO0FBQUEsd0JBQ0csQ0FBQ1gsSUFBSSxDQUFDWSxJQUFMLEtBQWMsTUFBZCxJQUF3QmIsT0FBTyxDQUFDQyxJQUFSLENBQWFhLEdBQWIsS0FBcUJiLElBQUksQ0FBQ2EsR0FBbkQsa0JBQ0MsOERBQUMsbURBQUQ7QUFDRSx3QkFBUSxFQUFFVCxRQURaO0FBRUUscUJBQUssRUFBQyxLQUZSO0FBR0Usb0JBQUksRUFBQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBOEJEOztHQWpDUU4sWTs7S0FBQUEsWTtBQW1DVCwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMTNiYTZmY2I4MGRhM2RiOTYxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbW1lbnQsIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuLy9pbXBvcnQgeyBkZWxldGVDb21tZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBQb3N0Q29tbWVudHMoeyBjb21tZW50LCB1c2VyLCBzZXRDb21tZW50cywgcG9zdElkIH0pIHtcclxuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb21tZW50Lkdyb3VwPlxyXG4gICAgICAgIDxDb21tZW50PlxyXG4gICAgICAgICAgPENvbW1lbnQuQXZhdGFyIHNyYz17Y29tbWVudC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgICA8Q29tbWVudC5Db250ZW50PlxyXG4gICAgICAgICAgICA8Q29tbWVudC5BdXRob3IgYXM9XCJhXCIgaHJlZj17YC8ke2NvbW1lbnQudXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICB7Y29tbWVudC51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgIDwvQ29tbWVudC5BdXRob3I+XHJcbiAgICAgICAgICAgIDxDb21tZW50Lk1ldGFkYXRhPntjYWxjdWxhdGVUaW1lKGNvbW1lbnQuZGF0ZSl9PC9Db21tZW50Lk1ldGFkYXRhPlxyXG5cclxuICAgICAgICAgICAgPENvbW1lbnQuVGV4dD57Y29tbWVudC50ZXh0fTwvQ29tbWVudC5UZXh0PlxyXG5cclxuICAgICAgICAgICAgPENvbW1lbnQuQWN0aW9ucz5cclxuICAgICAgICAgICAgICA8Q29tbWVudC5BY3Rpb24+XHJcbiAgICAgICAgICAgICAgICB7KHVzZXIucm9sZSA9PT0gXCJyb290XCIgfHwgY29tbWVudC51c2VyLl9pZCA9PT0gdXNlci5faWQpICYmIChcclxuICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQ29tbWVudC5BY3Rpb24+XHJcbiAgICAgICAgICAgIDwvQ29tbWVudC5BY3Rpb25zPlxyXG4gICAgICAgICAgPC9Db21tZW50LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9Db21tZW50PlxyXG4gICAgICA8L0NvbW1lbnQuR3JvdXA+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q29tbWVudHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=