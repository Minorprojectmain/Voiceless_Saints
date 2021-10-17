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
      label: "Address",
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
      label: "Bio",
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
      lineNumber: 29,
      columnNumber: 9
    }, this), showSocialLinks && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 10
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
        icon: "facebook f",
        iconPosition: "left",
        name: "facebook",
        value: facebook,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 10
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
        icon: "instagram",
        iconPosition: "left",
        name: "instagram",
        value: instagram,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
        icon: "twitter",
        iconPosition: "left",
        name: "twitter",
        value: twitter,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
        icon: "youtube play",
        iconPosition: "left",
        name: "youtube",
        value: youtube,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
        icon: "attention",
        info: true,
        size: "small",
        header: "Social Media Links are Optional"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vQ29tbW9uSW5wdXRzLmpzIl0sIm5hbWVzIjpbIkNvbW1vbklucHV0cyIsInVzZXIiLCJiaW8iLCJhZGRyZXNzIiwiaW5zdGFncmFtIiwiZmFjZWJvb2siLCJ0d2l0dGVyIiwieW91dHViZSIsImhhbmRsZUNoYW5nZSIsInNob3dTb2NpYWxMaW5rcyIsInNldFNob3dTb2NpYWxMaW5rcyIsIlRleHRBcmVhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsWUFBVCxPQUErSDtBQUFBLHVCQUF4R0MsSUFBd0c7QUFBQSxNQUFsR0MsR0FBa0csYUFBbEdBLEdBQWtHO0FBQUEsTUFBOUZDLE9BQThGLGFBQTlGQSxPQUE4RjtBQUFBLE1BQXRGQyxTQUFzRixhQUF0RkEsU0FBc0Y7QUFBQSxNQUE1RUMsUUFBNEUsYUFBNUVBLFFBQTRFO0FBQUEsTUFBbkVDLE9BQW1FLGFBQW5FQSxPQUFtRTtBQUFBLE1BQTNEQyxPQUEyRCxhQUEzREEsT0FBMkQ7QUFBQSxNQUFsREMsWUFBa0QsUUFBbERBLFlBQWtEO0FBQUEsTUFBckNDLGVBQXFDLFFBQXJDQSxlQUFxQztBQUFBLE1BQXJCQyxrQkFBcUIsUUFBckJBLGtCQUFxQjtBQUMzSCxzQkFDSTtBQUFBLDRCQUNBLDhEQUFDLHlEQUFEO0FBQ0EsY0FBUSxNQURSO0FBRUEsV0FBSyxFQUFDLFNBRk47QUFHQSxhQUFPLEVBQUVDLHVEQUhUO0FBSUEsVUFBSSxFQUFDLFNBSkw7QUFLQSxXQUFLLEVBQUVSLE9BTFA7QUFNQSxjQUFRLEVBQUVLLFlBTlY7QUFPQSxpQkFBVyxFQUFDO0FBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBVUEsOERBQUMseURBQUQ7QUFDQSxjQUFRLE1BRFI7QUFFQSxXQUFLLEVBQUMsS0FGTjtBQUdBLGFBQU8sRUFBRUcsdURBSFQ7QUFJQSxVQUFJLEVBQUMsS0FKTDtBQUtBLFdBQUssRUFBRVQsR0FMUDtBQU1BLGNBQVEsRUFBRU0sWUFOVjtBQU9BLGlCQUFXLEVBQUM7QUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkEsZUFxQkEsOERBQUMscURBQUQ7QUFBUSxhQUFPLEVBQUMsa0JBQWhCO0FBQW1DLFdBQUssRUFBQyxLQUF6QztBQUErQyxVQUFJLEVBQUMsSUFBcEQ7QUFBeUQsVUFBSSxFQUFDLFFBQTlEO0FBQXVFLGFBQU8sRUFBRTtBQUFBLGVBQUlFLGtCQUFrQixDQUFDLENBQUNELGVBQUYsQ0FBdEI7QUFBQTtBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJBLEVBdUJDQSxlQUFlLGlCQUFJO0FBQUEsOEJBQ25CLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEbUIsZUFFbkIsOERBQUMseURBQUQ7QUFDQyxZQUFJLEVBQUMsWUFETjtBQUVDLG9CQUFZLEVBQUMsTUFGZDtBQUdDLFlBQUksRUFBQyxVQUhOO0FBSUMsYUFBSyxFQUFFSixRQUpSO0FBS0MsZ0JBQVEsRUFBRUc7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRm1CLGVBU3BCLDhEQUFDLHlEQUFEO0FBQ0UsWUFBSSxFQUFDLFdBRFA7QUFFRSxvQkFBWSxFQUFDLE1BRmY7QUFHRSxZQUFJLEVBQUMsV0FIUDtBQUlFLGFBQUssRUFBRUosU0FKVDtBQUtFLGdCQUFRLEVBQUVJO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRvQixlQWdCcEIsOERBQUMseURBQUQ7QUFDRSxZQUFJLEVBQUMsU0FEUDtBQUVFLG9CQUFZLEVBQUMsTUFGZjtBQUdFLFlBQUksRUFBQyxTQUhQO0FBSUUsYUFBSyxFQUFFRixPQUpUO0FBS0UsZ0JBQVEsRUFBRUU7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJvQixlQXdCcEIsOERBQUMseURBQUQ7QUFDRSxZQUFJLEVBQUMsY0FEUDtBQUVFLG9CQUFZLEVBQUMsTUFGZjtBQUdFLFlBQUksRUFBQyxTQUhQO0FBSUUsYUFBSyxFQUFFRCxPQUpUO0FBS0UsZ0JBQVEsRUFBRUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJvQixlQWdDcEIsOERBQUMsc0RBQUQ7QUFBUyxZQUFJLEVBQUMsV0FBZDtBQUEwQixZQUFJLE1BQTlCO0FBQStCLFlBQUksRUFBQyxPQUFwQztBQUE0QyxjQUFNLEVBQUM7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhDb0I7QUFBQSxvQkF2QnBCO0FBQUEsa0JBREo7QUE0REg7O0tBN0RRUixZO0FBK0RULCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC5jZTYzNzc1M2Y1OTc0YThjMjg2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0Zvcm0sQnV0dG9uLFNlZ21lbnQsTWVzc2FnZSxUZXh0QXJlYSxEaXZpZGVyfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gQ29tbW9uSW5wdXRzKHt1c2VyOntiaW8sYWRkcmVzcyxpbnN0YWdyYW0sZmFjZWJvb2ssdHdpdHRlcix5b3V0dWJlfSxoYW5kbGVDaGFuZ2Usc2hvd1NvY2lhbExpbmtzLHNldFNob3dTb2NpYWxMaW5rc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Rm9ybS5GaWVsZFxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgbGFiZWw9XCJBZGRyZXNzXCJcclxuICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cclxuICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgdmFsdWU9e2FkZHJlc3N9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cImFkZHJlc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvcm0uRmllbGRcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIGxhYmVsPVwiQmlvXCJcclxuICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cclxuICAgICAgICBuYW1lPVwiYmlvXCJcclxuICAgICAgICB2YWx1ZT17YmlvfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJiaW9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiQWRkIFNvY2lhbCBMaW5rc1wiIGNvbG9yPVwicmVkXCIgaWNvbj1cImF0XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT5zZXRTaG93U29jaWFsTGlua3MoIXNob3dTb2NpYWxMaW5rcyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7c2hvd1NvY2lhbExpbmtzICYmIDw+XHJcbiAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICBpY29uPVwiZmFjZWJvb2sgZlwiXHJcbiAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIG5hbWU9XCJmYWNlYm9va1wiXHJcbiAgICAgICAgICB2YWx1ZT17ZmFjZWJvb2t9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgIGljb249XCJpbnN0YWdyYW1cIlxyXG4gICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICBuYW1lPVwiaW5zdGFncmFtXCJcclxuICAgICAgICAgIHZhbHVlPXtpbnN0YWdyYW19XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgIGljb249XCJ0d2l0dGVyXCJcclxuICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgbmFtZT1cInR3aXR0ZXJcIlxyXG4gICAgICAgICAgdmFsdWU9e3R3aXR0ZXJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgIGljb249XCJ5b3V0dWJlIHBsYXlcIlxyXG4gICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICBuYW1lPVwieW91dHViZVwiXHJcbiAgICAgICAgICB2YWx1ZT17eW91dHViZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPE1lc3NhZ2UgaWNvbj1cImF0dGVudGlvblwiIGluZm8gc2l6ZT1cInNtYWxsXCIgaGVhZGVyPVwiU29jaWFsIE1lZGlhIExpbmtzIGFyZSBPcHRpb25hbFwiIC8+XHJcbiAgICAgICAgPC8+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tb25JbnB1dHNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==