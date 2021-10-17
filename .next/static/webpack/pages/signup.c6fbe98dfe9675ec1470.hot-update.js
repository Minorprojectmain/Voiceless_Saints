self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./components/Common/CommonInputs.js":
/*!*******************************************!*\
  !*** ./components/Common/CommonInputs.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor_project\\Voiceless_saints\\components\\Common\\CommonInputs.js";




function CommonInputs(_ref) {
  var _ref$user = _ref.user,
      bio = _ref$user.bio,
      address = _ref$user.address,
      instagram = _ref$user.instagram,
      facebook = _ref$user.facebook,
      twitter = _ref$user.twitter,
      youtube = _ref$user.youtube,
      handleChange = _ref.handleChange,
      showSocialLinks = _ref.showSocialLinks,
      setShowSocialLinks = _ref.setShowSocialLinks;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
      required: true,
      label: "address",
      control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.TextArea,
      name: "address",
      value: address,
      onChange: handleChange,
      placeholder: "address"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
      required: true,
      control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.TextArea,
      name: "bio",
      value: bio,
      onChange: handleChange,
      placeholder: "bio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
      content: "Add Social Links",
      color: "red",
      icon: "at",
      type: "button",
      onClick: function onClick() {
        return setShowSocialLinks(!showSocialLinks);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, this), showSocialLinks && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 10
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
        icon: "facebook f",
        iconPosition: "left",
        name: "facebook",
        value: facebook,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 10
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
        icon: "instagram",
        iconPosition: "left",
        name: "instagram",
        value: instagram,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
        icon: "twitter",
        iconPosition: "left",
        name: "twitter",
        value: twitter,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
        icon: "youtube play",
        iconPosition: "left",
        name: "youtube",
        value: youtube,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
        icon: "attention",
        info: true,
        size: "small",
        header: "Social Media Links are Optional"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)]
    }, void 0, true)]
  }, void 0, true);
}

_c = CommonInputs;
/* harmony default export */ __webpack_exports__["default"] = (CommonInputs);

var _c;

$RefreshReg$(_c, "CommonInputs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vQ29tbW9uSW5wdXRzLmpzIl0sIm5hbWVzIjpbIkNvbW1vbklucHV0cyIsInVzZXIiLCJiaW8iLCJhZGRyZXNzIiwiaW5zdGFncmFtIiwiZmFjZWJvb2siLCJ0d2l0dGVyIiwieW91dHViZSIsImhhbmRsZUNoYW5nZSIsInNob3dTb2NpYWxMaW5rcyIsInNldFNob3dTb2NpYWxMaW5rcyIsIlRleHRBcmVhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsWUFBVCxPQUErSDtBQUFBLHVCQUF4R0MsSUFBd0c7QUFBQSxNQUFsR0MsR0FBa0csYUFBbEdBLEdBQWtHO0FBQUEsTUFBOUZDLE9BQThGLGFBQTlGQSxPQUE4RjtBQUFBLE1BQXRGQyxTQUFzRixhQUF0RkEsU0FBc0Y7QUFBQSxNQUE1RUMsUUFBNEUsYUFBNUVBLFFBQTRFO0FBQUEsTUFBbkVDLE9BQW1FLGFBQW5FQSxPQUFtRTtBQUFBLE1BQTNEQyxPQUEyRCxhQUEzREEsT0FBMkQ7QUFBQSxNQUFsREMsWUFBa0QsUUFBbERBLFlBQWtEO0FBQUEsTUFBckNDLGVBQXFDLFFBQXJDQSxlQUFxQztBQUFBLE1BQXJCQyxrQkFBcUIsUUFBckJBLGtCQUFxQjtBQUMzSCxzQkFDSTtBQUFBLDRCQUNBLDhEQUFDLHlEQUFEO0FBQ0EsY0FBUSxNQURSO0FBRUEsV0FBSyxFQUFDLFNBRk47QUFHQSxhQUFPLEVBQUVDLHVEQUhUO0FBSUEsVUFBSSxFQUFDLFNBSkw7QUFLQSxXQUFLLEVBQUVSLE9BTFA7QUFNQSxjQUFRLEVBQUVLLFlBTlY7QUFPQSxpQkFBVyxFQUFDO0FBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBVUEsOERBQUMseURBQUQ7QUFDQSxjQUFRLE1BRFI7QUFFQSxhQUFPLEVBQUVHLHVEQUZUO0FBR0EsVUFBSSxFQUFDLEtBSEw7QUFJQSxXQUFLLEVBQUVULEdBSlA7QUFLQSxjQUFRLEVBQUVNLFlBTFY7QUFNQSxpQkFBVyxFQUFDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZBLGVBb0JBLDhEQUFDLHFEQUFEO0FBQVEsYUFBTyxFQUFDLGtCQUFoQjtBQUFtQyxXQUFLLEVBQUMsS0FBekM7QUFBK0MsVUFBSSxFQUFDLElBQXBEO0FBQXlELFVBQUksRUFBQyxRQUE5RDtBQUF1RSxhQUFPLEVBQUU7QUFBQSxlQUFJRSxrQkFBa0IsQ0FBQyxDQUFDRCxlQUFGLENBQXRCO0FBQUE7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCQSxFQXNCQ0EsZUFBZSxpQkFBSTtBQUFBLDhCQUNuQiw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRG1CLGVBRW5CLDhEQUFDLHlEQUFEO0FBQ0MsWUFBSSxFQUFDLFlBRE47QUFFQyxvQkFBWSxFQUFDLE1BRmQ7QUFHQyxZQUFJLEVBQUMsVUFITjtBQUlDLGFBQUssRUFBRUosUUFKUjtBQUtDLGdCQUFRLEVBQUVHO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZtQixlQVNwQiw4REFBQyx5REFBRDtBQUNFLFlBQUksRUFBQyxXQURQO0FBRUUsb0JBQVksRUFBQyxNQUZmO0FBR0UsWUFBSSxFQUFDLFdBSFA7QUFJRSxhQUFLLEVBQUVKLFNBSlQ7QUFLRSxnQkFBUSxFQUFFSTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUb0IsZUFnQnBCLDhEQUFDLHlEQUFEO0FBQ0UsWUFBSSxFQUFDLFNBRFA7QUFFRSxvQkFBWSxFQUFDLE1BRmY7QUFHRSxZQUFJLEVBQUMsU0FIUDtBQUlFLGFBQUssRUFBRUYsT0FKVDtBQUtFLGdCQUFRLEVBQUVFO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCb0IsZUF3QnBCLDhEQUFDLHlEQUFEO0FBQ0UsWUFBSSxFQUFDLGNBRFA7QUFFRSxvQkFBWSxFQUFDLE1BRmY7QUFHRSxZQUFJLEVBQUMsU0FIUDtBQUlFLGFBQUssRUFBRUQsT0FKVDtBQUtFLGdCQUFRLEVBQUVDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCb0IsZUFnQ3BCLDhEQUFDLHNEQUFEO0FBQVMsWUFBSSxFQUFDLFdBQWQ7QUFBMEIsWUFBSSxNQUE5QjtBQUErQixZQUFJLEVBQUMsT0FBcEM7QUFBNEMsY0FBTSxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQ29CO0FBQUEsb0JBdEJwQjtBQUFBLGtCQURKO0FBMkRIOztLQTVEUVIsWTtBQThEVCwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuYzZmYmU5OGRmZTk2NzVlYzE0NzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtGb3JtLEJ1dHRvbixTZWdtZW50LE1lc3NhZ2UsVGV4dEFyZWEsRGl2aWRlcn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENvbW1vbklucHV0cyh7dXNlcjp7YmlvLGFkZHJlc3MsaW5zdGFncmFtLGZhY2Vib29rLHR3aXR0ZXIseW91dHViZX0saGFuZGxlQ2hhbmdlLHNob3dTb2NpYWxMaW5rcyxzZXRTaG93U29jaWFsTGlua3N9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEZvcm0uRmllbGRcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIGxhYmVsPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgY29udHJvbD17VGV4dEFyZWF9XHJcbiAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxyXG4gICAgICAgIHZhbHVlPXthZGRyZXNzfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJhZGRyZXNzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cclxuICAgICAgICBuYW1lPVwiYmlvXCJcclxuICAgICAgICB2YWx1ZT17YmlvfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJiaW9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiQWRkIFNvY2lhbCBMaW5rc1wiIGNvbG9yPVwicmVkXCIgaWNvbj1cImF0XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT5zZXRTaG93U29jaWFsTGlua3MoIXNob3dTb2NpYWxMaW5rcyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7c2hvd1NvY2lhbExpbmtzICYmIDw+XHJcbiAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICBpY29uPVwiZmFjZWJvb2sgZlwiXHJcbiAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIG5hbWU9XCJmYWNlYm9va1wiXHJcbiAgICAgICAgICB2YWx1ZT17ZmFjZWJvb2t9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgIGljb249XCJpbnN0YWdyYW1cIlxyXG4gICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICBuYW1lPVwiaW5zdGFncmFtXCJcclxuICAgICAgICAgIHZhbHVlPXtpbnN0YWdyYW19XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgIGljb249XCJ0d2l0dGVyXCJcclxuICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgbmFtZT1cInR3aXR0ZXJcIlxyXG4gICAgICAgICAgdmFsdWU9e3R3aXR0ZXJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgIGljb249XCJ5b3V0dWJlIHBsYXlcIlxyXG4gICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICBuYW1lPVwieW91dHViZVwiXHJcbiAgICAgICAgICB2YWx1ZT17eW91dHViZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPE1lc3NhZ2UgaWNvbj1cImF0dGVudGlvblwiIGluZm8gc2l6ZT1cInNtYWxsXCIgaGVhZGVyPVwiU29jaWFsIE1lZGlhIExpbmtzIGFyZSBPcHRpb25hbFwiIC8+XHJcbiAgICAgICAgPC8+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tb25JbnB1dHNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==