self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Post/CommentInputField.js":
/*!**********************************************!*\
  !*** ./components/Post/CommentInputField.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor_pro\\Voiceless_Saints\\components\\Post\\CommentInputField.js",
    _s = $RefreshSig$();





function CommentInputField(_ref) {
  _s();

  var postId = _ref.postId,
      user = _ref.user,
      setComments = _ref.setComments;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      text = _useState[0],
      setText = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {
    reply: true,
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
        return C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                setLoading(true);
                _context.next = 4;
                return (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_4__.postComment)(postId, user, text, setComments, setText);

              case 4:
                setLoading(false);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Input, {
      value: text,
      onChange: function onChange(e) {
        return setText(e.target.value);
      },
      placeholder: "Add Comment",
      action: {
        color: "blue",
        icon: "edit",
        loading: loading,
        disabled: text === "" || loading
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_s(CommentInputField, "zOQ0RuwA9kan70rhL0xkCo75hac=");

_c = CommentInputField;
/* harmony default export */ __webpack_exports__["default"] = (CommentInputField);

var _c;

$RefreshReg$(_c, "CommentInputField");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L0NvbW1lbnRJbnB1dEZpZWxkLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRJbnB1dEZpZWxkIiwicG9zdElkIiwidXNlciIsInNldENvbW1lbnRzIiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdENvbW1lbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yIiwiaWNvbiIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsaUJBQVQsT0FBMEQ7QUFBQTs7QUFBQSxNQUE3QkMsTUFBNkIsUUFBN0JBLE1BQTZCO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTs7QUFBQSxrQkFDaENDLCtDQUFRLENBQUMsRUFBRCxDQUR3QjtBQUFBLE1BQ2pEQyxJQURpRDtBQUFBLE1BQzNDQyxPQUQyQzs7QUFBQSxtQkFFMUJGLCtDQUFRLENBQUMsS0FBRCxDQUZrQjtBQUFBLE1BRWpERyxPQUZpRDtBQUFBLE1BRXhDQyxVQUZ3Qzs7QUFJeEQsc0JBQ0UsOERBQUMsbURBQUQ7QUFDRSxTQUFLLE1BRFA7QUFFRSxZQUFRO0FBQUEsa1VBQUUsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQSxpQkFBQyxDQUFDQyxjQUFGO0FBQ0FGLDBCQUFVLENBQUMsSUFBRCxDQUFWO0FBRlE7QUFBQSx1QkFHRkcsK0RBQVcsQ0FBQ1YsTUFBRCxFQUFTQyxJQUFULEVBQWVHLElBQWYsRUFBcUJGLFdBQXJCLEVBQWtDRyxPQUFsQyxDQUhUOztBQUFBO0FBS1JFLDBCQUFVLENBQUMsS0FBRCxDQUFWOztBQUxRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGVjtBQUFBLDJCQVVFLDhEQUFDLHlEQUFEO0FBRUUsV0FBSyxFQUFFSCxJQUZUO0FBR0UsY0FBUSxFQUFFLGtCQUFBSSxDQUFDO0FBQUEsZUFBSUgsT0FBTyxDQUFDRyxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQUEsT0FIYjtBQUlFLGlCQUFXLEVBQUMsYUFKZDtBQUtFLFlBQU0sRUFBRTtBQUNOQyxhQUFLLEVBQUUsTUFERDtBQUVOQyxZQUFJLEVBQUUsTUFGQTtBQUdOUixlQUFPLEVBQUVBLE9BSEg7QUFJTlMsZ0JBQVEsRUFBRVgsSUFBSSxLQUFLLEVBQVQsSUFBZUU7QUFKbkI7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUJEOztHQTdCUVAsaUI7O0tBQUFBLGlCO0FBK0JULCtEQUFlQSxpQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMTdmMDJjNDZhYjZiM2U5NmRlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgcG9zdENvbW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIENvbW1lbnRJbnB1dEZpZWxkKHsgcG9zdElkLCB1c2VyLCBzZXRDb21tZW50cyB9KSB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgcmVwbHlcclxuICAgICAgb25TdWJtaXQ9e2FzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGF3YWl0IHBvc3RDb21tZW50KHBvc3RJZCwgdXNlciwgdGV4dCwgc2V0Q29tbWVudHMsIHNldFRleHQpO1xyXG5cclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICBcclxuICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBDb21tZW50XCJcclxuICAgICAgICBhY3Rpb249e3tcclxuICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcclxuICAgICAgICAgIGljb246IFwiZWRpdFwiLFxyXG4gICAgICAgICAgbG9hZGluZzogbG9hZGluZyxcclxuICAgICAgICAgIGRpc2FibGVkOiB0ZXh0ID09PSBcIlwiIHx8IGxvYWRpbmdcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRJbnB1dEZpZWxkO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==