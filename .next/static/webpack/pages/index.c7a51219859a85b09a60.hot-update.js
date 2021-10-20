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
          src: "{comment.user.profilePicUrl}"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Comment.Content, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Comment.Author, {
            as: "a",
            href: "/".concat(comment.user.username),
            children: comment.user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Comment.Metadata, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__.default)(comment.date)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Comment.Text, {
            children: comment.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Comment.Actions, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Comment.Action, {
              children: (user.role === "root" || comment.user._id === user._id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                disabled: disabled,
                color: "red",
                name: "trash"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 14
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L1Bvc3RDb21tZW50cy5qcyJdLCJuYW1lcyI6WyJQb3N0Q29tbWVudHMiLCJjb21tZW50IiwidXNlciIsInNldENvbW1lbnRzIiwicG9zdElkIiwidXNlU3RhdGUiLCJkaXNhYmxlZCIsInNldERpc2FibGVkIiwidXNlcm5hbWUiLCJuYW1lIiwiY2FsY3VsYXRlVGltZSIsImRhdGUiLCJ0ZXh0Iiwicm9sZSIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBRUEsU0FBU0EsWUFBVCxPQUF5RDtBQUFBOztBQUFBLE1BQWxDQyxPQUFrQyxRQUFsQ0EsT0FBa0M7QUFBQSxNQUExQkMsSUFBMEIsUUFBMUJBLElBQTBCO0FBQUEsTUFBckJDLFdBQXFCLFFBQXJCQSxXQUFxQjtBQUFBLE1BQVRDLE1BQVMsUUFBVEEsTUFBUzs7QUFBQSxrQkFFckJDLCtDQUFRLENBQUMsS0FBRCxDQUZhO0FBQUEsTUFFOUNDLFFBRjhDO0FBQUEsTUFFcENDLFdBRm9DOztBQUtyRCxzQkFDSTtBQUFBLDJCQUNKLDhEQUFDLDREQUFEO0FBQUEsNkJBQ0EsOERBQUMsc0RBQUQ7QUFBQSxnQ0FDRSw4REFBQyw2REFBRDtBQUFnQixhQUFHLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLDhEQUFEO0FBQUEsa0NBQ0UsOERBQUMsNkRBQUQ7QUFBZ0IsY0FBRSxFQUFDLEdBQW5CO0FBQXVCLGdCQUFJLGFBQU1OLE9BQU8sQ0FBQ0MsSUFBUixDQUFhTSxRQUFuQixDQUEzQjtBQUFBLHNCQUEyRFAsT0FBTyxDQUFDQyxJQUFSLENBQWFPO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRSw4REFBQywrREFBRDtBQUFBLG1DQUNFO0FBQUEsd0JBQU1DLDZEQUFhLENBQUNULE9BQU8sQ0FBQ1UsSUFBVDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUtFLDhEQUFDLDJEQUFEO0FBQUEsc0JBQWVWLE9BQU8sQ0FBQ1c7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixlQU1FLDhEQUFDLDhEQUFEO0FBQUEsbUNBQ0UsOERBQUMsNkRBQUQ7QUFBQSx3QkFDQyxDQUFDVixJQUFJLENBQUNXLElBQUwsS0FBWSxNQUFaLElBQXNCWixPQUFPLENBQUNDLElBQVIsQ0FBYVksR0FBYixLQUFtQlosSUFBSSxDQUFDWSxHQUEvQyxrQkFDRSw4REFBQyxtREFBRDtBQUFNLHdCQUFRLEVBQUVSLFFBQWhCO0FBQTBCLHFCQUFLLEVBQUMsS0FBaEM7QUFBc0Msb0JBQUksRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESSxtQkFESjtBQXdCSDs7R0E3QlFOLFk7O0tBQUFBLFk7QUErQlQsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzdhNTEyMTk4NTlhODViMDlhNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb21tZW50LCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XHJcbi8vaW1wb3J0IHsgZGVsZXRlQ29tbWVudCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gUG9zdENvbW1lbnRzKHtjb21tZW50LHVzZXIsc2V0Q29tbWVudHMscG9zdElkfSkge1xyXG4gICAgXHJcbiAgICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICA8Q29tbWVudC5Hcm91cD5cclxuICAgIDxDb21tZW50PlxyXG4gICAgICA8Q29tbWVudC5BdmF0YXIgc3JjPSd7Y29tbWVudC51c2VyLnByb2ZpbGVQaWNVcmx9JyAvPlxyXG4gICAgICA8Q29tbWVudC5Db250ZW50PlxyXG4gICAgICAgIDxDb21tZW50LkF1dGhvciBhcz0nYScgaHJlZj17YC8ke2NvbW1lbnQudXNlci51c2VybmFtZX1gfT57Y29tbWVudC51c2VyLm5hbWV9PC9Db21tZW50LkF1dGhvcj5cclxuICAgICAgICA8Q29tbWVudC5NZXRhZGF0YT5cclxuICAgICAgICAgIDxkaXY+e2NhbGN1bGF0ZVRpbWUoY29tbWVudC5kYXRlKX08L2Rpdj5cclxuICAgICAgICA8L0NvbW1lbnQuTWV0YWRhdGE+XHJcbiAgICAgICAgPENvbW1lbnQuVGV4dD57Y29tbWVudC50ZXh0fTwvQ29tbWVudC5UZXh0PlxyXG4gICAgICAgIDxDb21tZW50LkFjdGlvbnM+XHJcbiAgICAgICAgICA8Q29tbWVudC5BY3Rpb24+XHJcbiAgICAgICAgICB7KHVzZXIucm9sZT09PVwicm9vdFwiIHx8IGNvbW1lbnQudXNlci5faWQ9PT11c2VyLl9pZCkgJiYgXHJcbiAgICAgICAgICAgICg8SWNvbiBkaXNhYmxlZD17ZGlzYWJsZWR9IGNvbG9yPVwicmVkXCIgbmFtZT1cInRyYXNoXCIgLz4pfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDwvQ29tbWVudC5BY3Rpb24+XHJcbiAgICAgICAgPC9Db21tZW50LkFjdGlvbnM+XHJcbiAgICAgIDwvQ29tbWVudC5Db250ZW50PlxyXG4gICAgPC9Db21tZW50PlxyXG4gICAgPC9Db21tZW50Lkdyb3VwPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q29tbWVudHNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==