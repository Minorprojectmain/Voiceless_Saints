self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_project_Voiceless_saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_project_Voiceless_saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nisha_Yadav_Desktop_Minor_project_Voiceless_saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_project_Voiceless_saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_project_Voiceless_saints_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor_project\\Voiceless_saints\\pages\\signup.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Nisha_Yadav_Desktop_Minor_project_Voiceless_saints_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
var cancel;

function Signup() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: ""
  }),
      user = _useState[0],
      setUser = _useState[1];

  var name = user.name,
      email = user.email,
      password = user.password,
      bio = user.bio;

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value,
        files = _e$target.files;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, (0,C_Users_Nisha_Yadav_Desktop_Minor_project_Voiceless_saints_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, name, value));
    });
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      showSocialLinks = _useState2[0],
      setShowSocialLinks = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      showPassword = _useState3[0],
      setShowPassword = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      errorMsg = _useState4[0],
      setErrorMsg = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      formLoading = _useState5[0],
      setFormLoading = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),
      submitDisabled = _useState6[0],
      setSubmitDisabled = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      username = _useState7[0],
      setUsername = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      usernameLoading = _useState8[0],
      setUsernameLoading = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      usernameAvailable = _useState9[0],
      setUsernameAvailable = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      media = _useState10[0],
      setMedia = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      mediaPreview = _useState11[0],
      setMediaPreview = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      highlighted = _useState12[0],
      setHighlighted = _useState12[1];

  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var isUser = Object.values({
      name: name,
      email: email,
      password: password,
      bio: bio
    }).every(function (item) {
      return Boolean(item);
    });
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  var checkUsername = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Nisha_Yadav_Desktop_Minor_project_Voiceless_saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Nisha_Yadav_Desktop_Minor_project_Voiceless_saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var CancelToken, res;
      return C_Users_Nisha_Yadav_Desktop_Minor_project_Voiceless_saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setUsernameLoading(true);
              _context.prev = 1;
              cancel && cancel();
              CancelToken = (axios__WEBPACK_IMPORTED_MODULE_8___default().CancelToken);
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_8___default().get("".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_9__.default, "/api/signup/").concat(username), {
                cancelToken: new CancelToken(function (canceler) {
                  cancel = canceler;
                })
              });

            case 6:
              res = _context.sent;
              if (errorMsg !== null) setErrorMsg(null);

              if (res.data === "Available") {
                setUsernameAvailable(true);
                setUser(function (prev) {
                  return _objectSpread(_objectSpread({}, prev), {}, {
                    username: username
                  });
                });
              }

              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              setErrorMsg("Username Not Available");
              setUsernameAvailable(false);

            case 15:
              setUsernameLoading(false);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function checkUsername() {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    username === "" ? setUsernameAvailable(false) : checkUsername();
  }, [username]);

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Nisha_Yadav_Desktop_Minor_project_Voiceless_saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Nisha_Yadav_Desktop_Minor_project_Voiceless_saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {
      var profilePicUrl;
      return C_Users_Nisha_Yadav_Desktop_Minor_project_Voiceless_saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              setFormLoading(true);

              if (!(media !== null)) {
                _context2.next = 6;
                break;
              }

              _context2.next = 5;
              return (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_11__.default)(media);

            case 5:
              profilePicUrl = _context2.sent;

            case 6:
              if (!(media !== null && !profilePicUrl)) {
                _context2.next = 9;
                break;
              }

              setFormLoading(false);
              return _context2.abrupt("return", setErrorMsg("Error Uploading Image"));

            case 9:
              _context2.next = 11;
              return (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_10__.registerUser)(user, profilePicUrl, setErrorMsg, setFormLoading);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_7__.HeaderMessage, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Form, {
      loading: formLoading,
      error: errorMsg !== null,
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Message, {
        error: true,
        header: "Oops!",
        content: errorMsg,
        onDismiss: function onDismiss() {
          return setErrorMsg(null);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Segment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_6__.default, {
          mediaPreview: mediaPreview,
          setMediaPreview: setMediaPreview,
          setMedia: setMedia,
          inputRef: inputRef,
          highlighted: highlighted,
          setHighlighted: setHighlighted,
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Form.Input, {
          required: true,
          label: "Name",
          placeholder: "Name",
          name: "name",
          value: name,
          onChange: handleChange,
          fluid: true,
          icon: "user",
          iconPosition: "left"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Form.Input, {
          required: true,
          label: "Email",
          placeholder: "Email",
          name: "email",
          value: email,
          onChange: handleChange,
          fluid: true,
          icon: "envelope",
          iconPosition: "left",
          type: "email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Form.Input, {
          label: "Password",
          placeholder: "Password",
          name: "password",
          value: password,
          onChange: handleChange,
          fluid: true,
          icon: {
            name: "eye",
            circular: true,
            link: true,
            onClick: function onClick() {
              return setShowPassword(!showPassword);
            }
          },
          iconPosition: "left",
          type: showPassword ? "text" : "password",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Form.Input, {
          loading: usernameLoading,
          error: !usernameAvailable,
          required: true,
          label: "Username",
          placeholder: "Username",
          value: username,
          onChange: function onChange(e) {
            setUsername(e.target.value);

            if (regexUserName.test(e.target.value)) {
              setUsernameAvailable(true);
            } else {
              setUsernameAvailable(false);
            }
          },
          fluid: true,
          icon: usernameAvailable ? "check" : "close",
          iconPosition: "left"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_5__.default, {
          user: user,
          showSocialLinks: showSocialLinks,
          setShowSocialLinks: setShowSocialLinks,
          handleChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Divider, {
          hidden: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {
          icon: "signup",
          content: "Signup",
          type: "submit",
          color: "orange",
          disabled: submitDisabled || !usernameAvailable
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_7__.FooterMessage, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Signup, "xqnVRUgynKXTDD3QF8c3euok9UA=");

_c = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c;

$RefreshReg$(_c, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInJlZ2V4VXNlck5hbWUiLCJjYW5jZWwiLCJTaWdudXAiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYmlvIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwidHdpdHRlciIsImluc3RhZ3JhbSIsInVzZXIiLCJzZXRVc2VyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmlsZXMiLCJzZXRNZWRpYSIsInNldE1lZGlhUHJldmlldyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInByZXYiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInN1Ym1pdERpc2FibGVkIiwic2V0U3VibWl0RGlzYWJsZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcm5hbWVMb2FkaW5nIiwic2V0VXNlcm5hbWVMb2FkaW5nIiwidXNlcm5hbWVBdmFpbGFibGUiLCJzZXRVc2VybmFtZUF2YWlsYWJsZSIsIm1lZGlhIiwibWVkaWFQcmV2aWV3IiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsImlucHV0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaXNVc2VyIiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJpdGVtIiwiQm9vbGVhbiIsImNoZWNrVXNlcm5hbWUiLCJDYW5jZWxUb2tlbiIsImF4aW9zIiwiYmFzZVVybCIsImNhbmNlbFRva2VuIiwiY2FuY2VsZXIiLCJyZXMiLCJkYXRhIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1cGxvYWRQaWMiLCJwcm9maWxlUGljVXJsIiwicmVnaXN0ZXJVc2VyIiwiY2lyY3VsYXIiLCJsaW5rIiwi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Q0FBcEI7QUFDRCxhQUZELE1BRU87QUFDTEEsa0NBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNEO0FBQ0YsV0FkSDtBQWVFLGVBQUssTUFmUDtBQWdCRSxjQUFJLEVBQUVELGlCQUFpQixHQUFHLE9BQUgsR0FBYSxPQWhCdEM7QUFpQkUsc0JBQVksRUFBQztBQWpCZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJERixlQXlFRSw4REFBQyxvRUFBRDtBQUNFLGNBQUksRUFBRTFCLElBRFI7QUFFRSx5QkFBZSxFQUFFWSxlQUZuQjtBQUdFLDRCQUFrQixFQUFFQyxrQkFIdEI7QUFJRSxzQkFBWSxFQUFFWDtBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpFRixlQWdGRSw4REFBQyx1REFBRDtBQUFTLGdCQUFNO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoRkYsZUFpRkUsOERBQUMsc0RBQUQ7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGlCQUFPLEVBQUMsUUFGVjtBQUdFLGNBQUksRUFBQyxRQUhQO0FBSUUsZUFBSyxFQUFDLFFBSlI7QUFLRSxrQkFBUSxFQUFFa0IsY0FBYyxJQUFJLENBQUNNO0FBTC9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBcUdFLDhEQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyR0Y7QUFBQSxrQkFERjtBQXlHRDs7R0F4TVFwQyxNOztLQUFBQSxNO0FBME1ULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC43ZWJlODFhZjgzNDU5NGMzZjU5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIE1lc3NhZ2UsIFNlZ21lbnQsIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IENvbW1vbklucHV0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vQ29tbW9uSW5wdXRzXCI7XHJcbmltcG9ydCBJbWFnZURyb3BEaXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL0ltYWdlRHJvcERpdlwiO1xyXG5pbXBvcnQgeyBIZWFkZXJNZXNzYWdlLCBGb290ZXJNZXNzYWdlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVNZXNzYWdlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJVc2VyIH0gZnJvbSBcIi4uL3V0aWxzL2F1dGhVc2VyXCI7XHJcbmltcG9ydCB1cGxvYWRQaWMgZnJvbSBcIi4uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeVwiO1xyXG5jb25zdCByZWdleFVzZXJOYW1lID0gL14oPyEuKlxcLlxcLikoPyEuKlxcLiQpW15cXFddW1xcdy5dezAsMjl9JC87XHJcbmxldCBjYW5jZWw7XHJcblxyXG5mdW5jdGlvbiBTaWdudXAoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBiaW86IFwiXCIsXHJcbiAgICBmYWNlYm9vazogXCJcIixcclxuICAgIHlvdXR1YmU6IFwiXCIsXHJcbiAgICB0d2l0dGVyOiBcIlwiLFxyXG4gICAgaW5zdGFncmFtOiBcIlwiXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBiaW8gfSA9IHVzZXI7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgZmlsZXMgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIGlmIChuYW1lID09PSBcIm1lZGlhXCIpIHtcclxuICAgICAgc2V0TWVkaWEoZmlsZXNbMF0pO1xyXG4gICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXIocHJldiA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbc2hvd1NvY2lhbExpbmtzLCBzZXRTaG93U29jaWFsTGlua3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZm9ybUxvYWRpbmcsIHNldEZvcm1Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3VibWl0RGlzYWJsZWQsIHNldFN1Ym1pdERpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1c2VybmFtZUxvYWRpbmcsIHNldFVzZXJuYW1lTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXJuYW1lQXZhaWxhYmxlLCBzZXRVc2VybmFtZUF2YWlsYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21lZGlhUHJldmlldywgc2V0TWVkaWFQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtoaWdobGlnaHRlZCwgc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpc1VzZXIgPSBPYmplY3QudmFsdWVzKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBiaW8gfSkuZXZlcnkoaXRlbSA9PlxyXG4gICAgICBCb29sZWFuKGl0ZW0pXHJcbiAgICApO1xyXG4gICAgaXNVc2VyID8gc2V0U3VibWl0RGlzYWJsZWQoZmFsc2UpIDogc2V0U3VibWl0RGlzYWJsZWQodHJ1ZSk7XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgY29uc3QgY2hlY2tVc2VybmFtZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFVzZXJuYW1lTG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNhbmNlbCAmJiBjYW5jZWwoKTtcclxuXHJcbiAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3NpZ251cC8ke3VzZXJuYW1lfWAsIHtcclxuICAgICAgICBjYW5jZWxUb2tlbjogbmV3IENhbmNlbFRva2VuKGNhbmNlbGVyID0+IHtcclxuICAgICAgICAgIGNhbmNlbCA9IGNhbmNlbGVyO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGVycm9yTXNnICE9PSBudWxsKSBzZXRFcnJvck1zZyhudWxsKTtcclxuXHJcbiAgICAgIGlmIChyZXMuZGF0YSA9PT0gXCJBdmFpbGFibGVcIikge1xyXG4gICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKHRydWUpO1xyXG4gICAgICAgIHNldFVzZXIocHJldiA9PiAoeyAuLi5wcmV2LCB1c2VybmFtZSB9KSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yTXNnKFwiVXNlcm5hbWUgTm90IEF2YWlsYWJsZVwiKTtcclxuICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUoZmFsc2UpO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIHNldFVzZXJuYW1lTG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVzZXJuYW1lID09PSBcIlwiID8gc2V0VXNlcm5hbWVBdmFpbGFibGUoZmFsc2UpIDogY2hlY2tVc2VybmFtZSgpO1xyXG4gIH0sIFt1c2VybmFtZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEZvcm1Mb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGxldCBwcm9maWxlUGljVXJsO1xyXG4gICAgaWYgKG1lZGlhICE9PSBudWxsKSB7XHJcbiAgICAgIHByb2ZpbGVQaWNVcmwgPSBhd2FpdCB1cGxvYWRQaWMobWVkaWEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtZWRpYSAhPT0gbnVsbCAmJiAhcHJvZmlsZVBpY1VybCkge1xyXG4gICAgICBzZXRGb3JtTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHJldHVybiBzZXRFcnJvck1zZyhcIkVycm9yIFVwbG9hZGluZyBJbWFnZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCByZWdpc3RlclVzZXIodXNlciwgcHJvZmlsZVBpY1VybCwgc2V0RXJyb3JNc2csIHNldEZvcm1Mb2FkaW5nKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlck1lc3NhZ2UgLz5cclxuICAgICAgPEZvcm0gbG9hZGluZz17Zm9ybUxvYWRpbmd9IGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICBoZWFkZXI9XCJPb3BzIVwiXHJcbiAgICAgICAgICBjb250ZW50PXtlcnJvck1zZ31cclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3JNc2cobnVsbCl9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICA8SW1hZ2VEcm9wRGl2XHJcbiAgICAgICAgICAgIG1lZGlhUHJldmlldz17bWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgICBzZXRNZWRpYVByZXZpZXc9e3NldE1lZGlhUHJldmlld31cclxuICAgICAgICAgICAgc2V0TWVkaWE9e3NldE1lZGlhfVxyXG4gICAgICAgICAgICBpbnB1dFJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkPXtoaWdobGlnaHRlZH1cclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQ9e3NldEhpZ2hsaWdodGVkfVxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPVwidXNlclwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj1cImVudmVsb3BlXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJleWVcIixcclxuICAgICAgICAgICAgICBjaXJjdWxhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICBsaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGxvYWRpbmc9e3VzZXJuYW1lTG9hZGluZ31cclxuICAgICAgICAgICAgZXJyb3I9eyF1c2VybmFtZUF2YWlsYWJsZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlZ2V4VXNlck5hbWUudGVzdChlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUF2YWlsYWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt1c2VybmFtZUF2YWlsYWJsZSA/IFwiY2hlY2tcIiA6IFwiY2xvc2VcIn1cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxDb21tb25JbnB1dHNcclxuICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgc2hvd1NvY2lhbExpbmtzPXtzaG93U29jaWFsTGlua3N9XHJcbiAgICAgICAgICAgIHNldFNob3dTb2NpYWxMaW5rcz17c2V0U2hvd1NvY2lhbExpbmtzfVxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGljb249XCJzaWdudXBcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiU2lnbnVwXCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdERpc2FibGVkIHx8ICF1c2VybmFtZUF2YWlsYWJsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICA8Rm9vdGVyTWVzc2FnZSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9