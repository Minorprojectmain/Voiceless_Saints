self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./components/Post/CreatePost.js":
/*!***************************************!*\
  !*** ./components/Post/CreatePost.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor_pro\\Voiceless_Saints\\components\\Post\\CreatePost.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 //import { submitNewPost } from "../../utils/postActions";

function CreatePost(_ref) {
  _s();

  var user = _ref.user,
      setPosts = _ref.setPosts;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    text: "",
    location: ""
  }),
      newPost = _useState[0],
      setNewPost = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      error = _useState3[0],
      setError = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      highlighted = _useState4[0],
      setHighlighted = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      media = _useState5[0],
      setMedia = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      mediaPreview = _useState6[0],
      setMediaPreview = _useState6[1];

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value,
        files = _e$target.files;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setNewPost(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, (0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, name, value));
    });
  };

  var addStyles = function addStyles() {
    return {
      textAlign: "center",
      height: "150px",
      width: "150px",
      border: "dotted",
      paddingTop: media === null && "60px",
      cursor: "pointer",
      borderColor: highlighted ? "green" : "black"
    };
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      return C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault(); // setLoading(true);
              // let picUrl;
              // if (media !== null) {
              //   picUrl = await uploadPic(media);
              //   if (!picUrl) {
              //     setLoading(false);
              //     return setError("Error Uploading Image");
              //   }
              // }
              // await submitNewPost(
              //   newPost.text,
              //   newPost.location,
              //   picUrl,
              //   setPosts,
              //   setNewPost,
              //   setError
              // );
              // setMedia(null);
              // setMediaPreview(null);
              // setLoading(false);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {
      error: error !== null,
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {
        error: true,
        onDismiss: function onDismiss() {
          return setError(null);
        },
        content: error,
        header: "Oops!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {
          src: user.profilePicUrl,
          circular: true,
          avatar: true,
          inline: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.TextArea, {
          placeholder: "Whats Happening",
          name: "text",
          value: newPost.text,
          onChange: handleChange,
          rows: 4,
          width: 14
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Input, {
          value: newPost.location,
          name: "location",
          onChange: handleChange,
          label: "Add Location",
          icon: "map marker alternate",
          placeholder: "Want to add Location?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          ref: inputRef,
          onChange: handleChange,
          name: "media",
          style: {
            display: "none"
          },
          type: "file",
          accept: "image/*"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: addStyles(),
        children: media === null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {
          name: "plus",
          onClick: function onClick() {
            return inputRef.current.click();
          },
          size: "big"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 13
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {
            style: {
              height: "150px",
              width: "150px"
            },
            src: mediaPreview,
            alt: "PostImage",
            centered: true,
            size: "medium",
            onClick: function onClick() {
              return inputRef.current.click();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
        circular: true,
        disabled: newPost.text === "" || loading,
        content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Post"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 20
        }, this),
        style: {
          backgroundColor: "#1DA1F2",
          color: "white"
        },
        icon: "send",
        loading: loading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(CreatePost, "by+KBMXCHSd54idWKFQNAenHJTk=");

_c = CreatePost;
/* harmony default export */ __webpack_exports__["default"] = (CreatePost);

var _c;

$RefreshReg$(_c, "CreatePost");

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


/***/ }),

/***/ "./utils/uploadPicToCloudinary.js":
/*!****************************************!*\
  !*** ./utils/uploadPicToCloudinary.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);




var uploadPic = /*#__PURE__*/function () {
  var _ref = (0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(media) {
    var form, res;
    return C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            form = new FormData();
            form.append('file', media);
            form.append('upload_preset', 'voiceless_saints');
            form.append('cloud_name', 'nishayadav');
            _context.next = 7;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().post("https://api.cloudinary.com/v1_1/nishayadav/image/upload", form);

          case 7:
            res = _context.sent;
            return _context.abrupt("return", res.data.url);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return");

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function uploadPic(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (uploadPic);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3QvQ3JlYXRlUG9zdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXBsb2FkUGljVG9DbG91ZGluYXJ5LmpzIl0sIm5hbWVzIjpbIkNyZWF0ZVBvc3QiLCJ1c2VyIiwic2V0UG9zdHMiLCJ1c2VTdGF0ZSIsInRleHQiLCJsb2NhdGlvbiIsIm5ld1Bvc3QiLCJzZXROZXdQb3N0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJpbnB1dFJlZiIsInVzZVJlZiIsImVycm9yIiwic2V0RXJyb3IiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwibWVkaWEiLCJzZXRNZWRpYSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInByZXYiLCJhZGRTdHlsZXMiLCJ0ZXh0QWxpZ24iLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlciIsInBhZGRpbmdUb3AiLCJjdXJzb3IiLCJib3JkZXJDb2xvciIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicHJvZmlsZVBpY1VybCIsImRpc3BsYXkiLCJjdXJyZW50IiwiY2xpY2siLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInVwbG9hZFBpYyIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsImF4aW9zIiwicHJvY2VzcyIsInJlcyIsImRhdGEiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7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QWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUlBOztBQUVBLElBQU02QyxTQUFTO0FBQUEsNlRBQUMsaUJBQU03QixLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVI4QixnQkFGUSxHQUVILElBQUlDLFFBQUosRUFGRztBQUdkRCxnQkFBSSxDQUFDRSxNQUFMLENBQVksTUFBWixFQUFtQmhDLEtBQW5CO0FBQ0E4QixnQkFBSSxDQUFDRSxNQUFMLENBQVksZUFBWixFQUE0QixrQkFBNUI7QUFDQUYsZ0JBQUksQ0FBQ0UsTUFBTCxDQUFZLFlBQVosRUFBeUIsWUFBekI7QUFMYztBQUFBLG1CQU9FQyxpREFBQSxDQUFXQyx5REFBWCxFQUFzQ0osSUFBdEMsQ0FQRjs7QUFBQTtBQU9SSyxlQVBRO0FBQUEsNkNBUVBBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxHQVJGOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQ7O0FBQUEsa0JBQVRSLFNBQVM7QUFBQTtBQUFBO0FBQUEsR0FBZjs7QUFlQSwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zOGYyMGJkOTZhMGE1MWE4YmU0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbWFnZSwgRGl2aWRlciwgTWVzc2FnZSwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgdXBsb2FkUGljIGZyb20gXCIuLi8uLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnlcIjtcclxuLy9pbXBvcnQgeyBzdWJtaXROZXdQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBDcmVhdGVQb3N0KHsgdXNlciwgc2V0UG9zdHMgfSkge1xyXG4gIGNvbnN0IFtuZXdQb3N0LCBzZXROZXdQb3N0XSA9IHVzZVN0YXRlKHsgdGV4dDogXCJcIiwgbG9jYXRpb246IFwiXCIgfSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21lZGlhUHJldmlldywgc2V0TWVkaWFQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIGZpbGVzIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBpZiAobmFtZSA9PT0gXCJtZWRpYVwiKSB7XHJcbiAgICAgIHNldE1lZGlhKGZpbGVzWzBdKTtcclxuICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROZXdQb3N0KHByZXYgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkU3R5bGVzID0gKCkgPT4gKHtcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGhlaWdodDogXCIxNTBweFwiLFxyXG4gICAgd2lkdGg6IFwiMTUwcHhcIixcclxuICAgIGJvcmRlcjogXCJkb3R0ZWRcIixcclxuICAgIHBhZGRpbmdUb3A6IG1lZGlhID09PSBudWxsICYmIFwiNjBweFwiLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIGJvcmRlckNvbG9yOiBoaWdobGlnaHRlZCA/IFwiZ3JlZW5cIiA6IFwiYmxhY2tcIlxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAvLyBsZXQgcGljVXJsO1xyXG5cclxuICAgIC8vIGlmIChtZWRpYSAhPT0gbnVsbCkge1xyXG4gICAgLy8gICBwaWNVcmwgPSBhd2FpdCB1cGxvYWRQaWMobWVkaWEpO1xyXG4gICAgLy8gICBpZiAoIXBpY1VybCkge1xyXG4gICAgLy8gICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgLy8gICAgIHJldHVybiBzZXRFcnJvcihcIkVycm9yIFVwbG9hZGluZyBJbWFnZVwiKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGF3YWl0IHN1Ym1pdE5ld1Bvc3QoXHJcbiAgICAvLyAgIG5ld1Bvc3QudGV4dCxcclxuICAgIC8vICAgbmV3UG9zdC5sb2NhdGlvbixcclxuICAgIC8vICAgcGljVXJsLFxyXG4gICAgLy8gICBzZXRQb3N0cyxcclxuICAgIC8vICAgc2V0TmV3UG9zdCxcclxuICAgIC8vICAgc2V0RXJyb3JcclxuICAgIC8vICk7XHJcblxyXG4gICAgLy8gc2V0TWVkaWEobnVsbCk7XHJcbiAgICAvLyBzZXRNZWRpYVByZXZpZXcobnVsbCk7XHJcbiAgICAvLyBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0gZXJyb3I9e2Vycm9yICE9PSBudWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3IobnVsbCl9XHJcbiAgICAgICAgICBjb250ZW50PXtlcnJvcn1cclxuICAgICAgICAgIGhlYWRlcj1cIk9vcHMhXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3VzZXIucHJvZmlsZVBpY1VybH0gY2lyY3VsYXIgYXZhdGFyIGlubGluZSAvPlxyXG4gICAgICAgICAgPEZvcm0uVGV4dEFyZWFcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0cyBIYXBwZW5pbmdcIlxyXG4gICAgICAgICAgICBuYW1lPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LnRleHR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgIHdpZHRoPXsxNH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LmxvY2F0aW9ufVxyXG4gICAgICAgICAgICBuYW1lPVwibG9jYXRpb25cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBsYWJlbD1cIkFkZCBMb2NhdGlvblwiXHJcbiAgICAgICAgICAgIGljb249XCJtYXAgbWFya2VyIGFsdGVybmF0ZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2FudCB0byBhZGQgTG9jYXRpb24/XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIG5hbWU9XCJtZWRpYVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e2FkZFN0eWxlcygpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAge21lZGlhID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwicGx1c1wiIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX0gc2l6ZT1cImJpZ1wiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjE1MHB4XCIsIHdpZHRoOiBcIjE1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17bWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiUG9zdEltYWdlXCJcclxuICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNpcmN1bGFyXHJcbiAgICAgICAgICBkaXNhYmxlZD17bmV3UG9zdC50ZXh0ID09PSBcIlwiIHx8IGxvYWRpbmd9XHJcbiAgICAgICAgICBjb250ZW50PXs8c3Ryb25nPlBvc3Q8L3N0cm9uZz59XHJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzFEQTFGMlwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICBpY29uPVwic2VuZFwiXHJcbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVBvc3Q7XHJcblxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbmNvbnN0IHVwbG9hZFBpYz1hc3luYyBtZWRpYT0+e1xyXG50cnl7XHJcbiAgY29uc3QgZm9ybT1uZXcgRm9ybURhdGEoKTtcclxuICBmb3JtLmFwcGVuZCgnZmlsZScsbWVkaWEpO1xyXG4gIGZvcm0uYXBwZW5kKCd1cGxvYWRfcHJlc2V0Jywndm9pY2VsZXNzX3NhaW50cycpXHJcbiAgZm9ybS5hcHBlbmQoJ2Nsb3VkX25hbWUnLCduaXNoYXlhZGF2Jyk7XHJcblxyXG4gIGNvbnN0IHJlcz1hd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkNMT1VESU5BUllfVVJMLGZvcm0pO1xyXG4gIHJldHVybiByZXMuZGF0YS51cmw7XHJcblxyXG59Y2F0Y2goZXJyb3Ipe1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwbG9hZFBpYzsiXSwic291cmNlUm9vdCI6IiJ9