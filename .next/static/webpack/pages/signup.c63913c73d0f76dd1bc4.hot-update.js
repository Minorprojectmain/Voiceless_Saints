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
      lineNumber: 17,
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
      lineNumber: 27,
      columnNumber: 9
    }, this), showSocialLinks && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 10
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
        icon: "facebook f",
        iconPosition: "left",
        name: "facebook",
        value: facebook,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 10
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
        icon: "instagram",
        iconPosition: "left",
        name: "instagram",
        value: instagram,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
        icon: "twitter",
        iconPosition: "left",
        name: "twitter",
        value: twitter,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
        icon: "youtube play",
        iconPosition: "left",
        name: "youtube",
        value: youtube,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
        icon: "attention",
        info: true,
        size: "small",
        header: "Social Media Links are Optional"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vQ29tbW9uSW5wdXRzLmpzIl0sIm5hbWVzIjpbIkNvbW1vbklucHV0cyIsInVzZXIiLCJiaW8iLCJhZGRyZXNzIiwiaW5zdGFncmFtIiwiZmFjZWJvb2siLCJ0d2l0dGVyIiwieW91dHViZSIsImhhbmRsZUNoYW5nZSIsInNob3dTb2NpYWxMaW5rcyIsInNldFNob3dTb2NpYWxMaW5rcyIsIlRleHRBcmVhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsWUFBVCxPQUErSDtBQUFBLHVCQUF4R0MsSUFBd0c7QUFBQSxNQUFsR0MsR0FBa0csYUFBbEdBLEdBQWtHO0FBQUEsTUFBOUZDLE9BQThGLGFBQTlGQSxPQUE4RjtBQUFBLE1BQXRGQyxTQUFzRixhQUF0RkEsU0FBc0Y7QUFBQSxNQUE1RUMsUUFBNEUsYUFBNUVBLFFBQTRFO0FBQUEsTUFBbkVDLE9BQW1FLGFBQW5FQSxPQUFtRTtBQUFBLE1BQTNEQyxPQUEyRCxhQUEzREEsT0FBMkQ7QUFBQSxNQUFsREMsWUFBa0QsUUFBbERBLFlBQWtEO0FBQUEsTUFBckNDLGVBQXFDLFFBQXJDQSxlQUFxQztBQUFBLE1BQXJCQyxrQkFBcUIsUUFBckJBLGtCQUFxQjtBQUMzSCxzQkFDSTtBQUFBLDRCQUNBLDhEQUFDLHlEQUFEO0FBQ0EsY0FBUSxNQURSO0FBRUEsYUFBTyxFQUFFQyx1REFGVDtBQUdBLFVBQUksRUFBQyxTQUhMO0FBSUEsV0FBSyxFQUFFUixPQUpQO0FBS0EsY0FBUSxFQUFFSyxZQUxWO0FBTUEsaUJBQVcsRUFBQztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQVNBLDhEQUFDLHlEQUFEO0FBQ0EsY0FBUSxNQURSO0FBRUEsYUFBTyxFQUFFRyx1REFGVDtBQUdBLFVBQUksRUFBQyxLQUhMO0FBSUEsV0FBSyxFQUFFVCxHQUpQO0FBS0EsY0FBUSxFQUFFTSxZQUxWO0FBTUEsaUJBQVcsRUFBQztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUQSxlQW1CQSw4REFBQyxxREFBRDtBQUFRLGFBQU8sRUFBQyxrQkFBaEI7QUFBbUMsV0FBSyxFQUFDLEtBQXpDO0FBQStDLFVBQUksRUFBQyxJQUFwRDtBQUF5RCxVQUFJLEVBQUMsUUFBOUQ7QUFBdUUsYUFBTyxFQUFFO0FBQUEsZUFBSUUsa0JBQWtCLENBQUMsQ0FBQ0QsZUFBRixDQUF0QjtBQUFBO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkEsRUFxQkNBLGVBQWUsaUJBQUk7QUFBQSw4QkFDbkIsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURtQixlQUVuQiw4REFBQyx5REFBRDtBQUNDLFlBQUksRUFBQyxZQUROO0FBRUMsb0JBQVksRUFBQyxNQUZkO0FBR0MsWUFBSSxFQUFDLFVBSE47QUFJQyxhQUFLLEVBQUVKLFFBSlI7QUFLQyxnQkFBUSxFQUFFRztBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGbUIsZUFTcEIsOERBQUMseURBQUQ7QUFDRSxZQUFJLEVBQUMsV0FEUDtBQUVFLG9CQUFZLEVBQUMsTUFGZjtBQUdFLFlBQUksRUFBQyxXQUhQO0FBSUUsYUFBSyxFQUFFSixTQUpUO0FBS0UsZ0JBQVEsRUFBRUk7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVG9CLGVBZ0JwQiw4REFBQyx5REFBRDtBQUNFLFlBQUksRUFBQyxTQURQO0FBRUUsb0JBQVksRUFBQyxNQUZmO0FBR0UsWUFBSSxFQUFDLFNBSFA7QUFJRSxhQUFLLEVBQUVGLE9BSlQ7QUFLRSxnQkFBUSxFQUFFRTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQm9CLGVBd0JwQiw4REFBQyx5REFBRDtBQUNFLFlBQUksRUFBQyxjQURQO0FBRUUsb0JBQVksRUFBQyxNQUZmO0FBR0UsWUFBSSxFQUFDLFNBSFA7QUFJRSxhQUFLLEVBQUVELE9BSlQ7QUFLRSxnQkFBUSxFQUFFQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4Qm9CLGVBZ0NwQiw4REFBQyxzREFBRDtBQUFTLFlBQUksRUFBQyxXQUFkO0FBQTBCLFlBQUksTUFBOUI7QUFBK0IsWUFBSSxFQUFDLE9BQXBDO0FBQTRDLGNBQU0sRUFBQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaENvQjtBQUFBLG9CQXJCcEI7QUFBQSxrQkFESjtBQTBESDs7S0EzRFFSLFk7QUE2RFQsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmM2MzkxM2M3M2QwZjc2ZGQxYmM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Rm9ybSxCdXR0b24sU2VnbWVudCxNZXNzYWdlLFRleHRBcmVhLERpdmlkZXJ9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuXHJcblxyXG5mdW5jdGlvbiBDb21tb25JbnB1dHMoe3VzZXI6e2JpbyxhZGRyZXNzLGluc3RhZ3JhbSxmYWNlYm9vayx0d2l0dGVyLHlvdXR1YmV9LGhhbmRsZUNoYW5nZSxzaG93U29jaWFsTGlua3Msc2V0U2hvd1NvY2lhbExpbmtzfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxGb3JtLkZpZWxkXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cclxuICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgdmFsdWU9e2FkZHJlc3N9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cImFkZHJlc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvcm0uRmllbGRcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIGNvbnRyb2w9e1RleHRBcmVhfVxyXG4gICAgICAgIG5hbWU9XCJiaW9cIlxyXG4gICAgICAgIHZhbHVlPXtiaW99XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cImJpb1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJBZGQgU29jaWFsIExpbmtzXCIgY29sb3I9XCJyZWRcIiBpY29uPVwiYXRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCk9PnNldFNob3dTb2NpYWxMaW5rcyghc2hvd1NvY2lhbExpbmtzKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtzaG93U29jaWFsTGlua3MgJiYgPD5cclxuICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgIGljb249XCJmYWNlYm9vayBmXCJcclxuICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgbmFtZT1cImZhY2Vib29rXCJcclxuICAgICAgICAgIHZhbHVlPXtmYWNlYm9va31cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgaWNvbj1cImluc3RhZ3JhbVwiXHJcbiAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIG5hbWU9XCJpbnN0YWdyYW1cIlxyXG4gICAgICAgICAgdmFsdWU9e2luc3RhZ3JhbX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgaWNvbj1cInR3aXR0ZXJcIlxyXG4gICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICBuYW1lPVwidHdpdHRlclwiXHJcbiAgICAgICAgICB2YWx1ZT17dHdpdHRlcn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgaWNvbj1cInlvdXR1YmUgcGxheVwiXHJcbiAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIG5hbWU9XCJ5b3V0dWJlXCJcclxuICAgICAgICAgIHZhbHVlPXt5b3V0dWJlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8TWVzc2FnZSBpY29uPVwiYXR0ZW50aW9uXCIgaW5mbyBzaXplPVwic21hbGxcIiBoZWFkZXI9XCJTb2NpYWwgTWVkaWEgTGlua3MgYXJlIE9wdGlvbmFsXCIgLz5cclxuICAgICAgICA8Lz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1vbklucHV0c1xyXG4iXSwic291cmNlUm9vdCI6IiJ9