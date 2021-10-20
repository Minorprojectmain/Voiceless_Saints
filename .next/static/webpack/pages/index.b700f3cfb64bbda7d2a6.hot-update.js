self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Layout/Toastr.js":
/*!*************************************!*\
  !*** ./components/Layout/Toastr.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDeleteToastr": function() { return /* binding */ PostDeleteToastr; },
/* harmony export */   "ErrorToastr": function() { return /* binding */ ErrorToastr; },
/* harmony export */   "MsgSentToastr": function() { return /* binding */ MsgSentToastr; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor_pro\\Voiceless_Saints\\components\\Layout\\Toastr.js",
    _this = undefined;


var PostDeleteToastr = function PostDeleteToastr() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    children: react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.info("Deleted Successfully", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};
_c = PostDeleteToastr;
var ErrorToastr = function ErrorToastr(_ref) {
  var error = _ref.error;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    children: react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};
_c2 = ErrorToastr;
var MsgSentToastr = function MsgSentToastr() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    children: react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Sent successfully", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 3
  }, _this);
};
_c3 = MsgSentToastr;

var _c, _c2, _c3;

$RefreshReg$(_c, "PostDeleteToastr");
$RefreshReg$(_c2, "ErrorToastr");
$RefreshReg$(_c3, "MsgSentToastr");

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

/***/ "./components/Post/CardPost.js":
/*!*************************************!*\
  !*** ./components/Post/CardPost.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor_pro\\Voiceless_Saints\\components\\Post\\CardPost.js",
    _s = $RefreshSig$();









function CardPost(_ref) {
  _s();

  var _this = this;

  var post = _ref.post,
      user = _ref.user,
      setPosts = _ref.setPosts,
      setShowToastr = _ref.setShowToastr;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(post.likes),
      likes = _useState[0],
      setLikes = _useState[1];

  var isLiked = likes.length > 0 && likes.filter(function (like) {
    return like.user === user._id;
  }).length > 0;

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(post.comments),
      comments = _useState2[0],
      setComments = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      error = _useState3.error,
      setError = _useState3.setError;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Segment, {
      basic: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card, {
        color: "black",
        fluid: true,
        children: [post.picUrl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Image, {
          src: post.picUrl,
          style: {
            cursor: "pointer"
          },
          floated: "left",
          wrapped: true,
          ui: false,
          alt: "PostImage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 27
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card.Content, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Image, {
            floated: "left",
            src: post.user.profilePicUrl,
            avatar: true,
            circular: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 10
          }, this), (user.role === "root" || post.user._id === user._id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Popup, {
              on: "click",
              position: "right",
              trigger: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Image, {
                src: "/deleteIcon.svg",
                style: {
                  cursor: "pointer"
                },
                size: "mini",
                floated: "right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 9
              }, this),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Header, {
                as: "h4",
                content: "Are you sure?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "This action is irreversible"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
                color: "red",
                icon: "trash",
                content: "Delete",
                onClick: function onClick() {
                  return (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_6__.deletePost)(post._id, setPosts, setShowToastr);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 10
            }, this)
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card.Header, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/".concat(post.user.username),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: post.user.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card.Meta, {
            children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(post.createdAt)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 8
          }, this), post.location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card.Meta, {
            content: post.location
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 26
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card.Description, {
            style: {
              fontSize: "37px",
              letterSpacing: "0.1px",
              wordSpacing: "0.35px"
            },
            children: post.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card.Content, {
          extra: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Icon, {
            name: isLiked ? "heart" : "heart outline",
            color: "red",
            style: {
              cursor: "pointer"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 11
          }, this), likes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "spanlikeslist",
            children: "".concat(likes.length, " ").concat(likes.length === 1 ? "like" : "likes")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Icon, {
            name: "comment outline",
            style: {
              marginLeft: "7px"
            },
            color: "blue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }, this), comments.length > 0 && comments.map(function (comment, i) {
            return i < 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostComments__WEBPACK_IMPORTED_MODULE_2__.default, {
              comment: comment,
              postId: post._id,
              user: user,
              setComments: setComments
            }, comment._id, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 16
            }, _this);
          }), comments.length > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
            content: "View More",
            color: "teal",
            basic: true,
            circular: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {
            hidden: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__.default, {
            user: user,
            postId: post._id,
            setComments: setComments
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 8
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {
      hidden: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(CardPost, "yJBmaxC/OCnguixbIKbjYTNbqio=");

_c = CardPost;
/* harmony default export */ __webpack_exports__["default"] = (CardPost);

var _c;

$RefreshReg$(_c, "CardPost");

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Post/CreatePost */ "./components/Post/CreatePost.js");
/* harmony import */ var _components_Post_CardPost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Post/CardPost */ "./components/Post/CardPost.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor_pro\\Voiceless_Saints\\pages\\index.js",
    _s = $RefreshSig$();











function Index(_ref) {
  _s();

  var _this = this;

  var user = _ref.user,
      postsData = _ref.postsData,
      errorLoading = _ref.errorLoading;
  // console.log({user,userFollowStats});
  console.log(postsData);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(postsData),
      posts = _useState[0],
      setPosts = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      showToastr = _useState2[0],
      setShowToastr = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    document.title = "Welcome, ".concat(user.name.split(" ")[0]);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    showToastr && setTimeout(function () {
      return setShowToastr(false);
    }, 3000);
  }, [showToastr]);
  if (posts.length == 0 || errorLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_9__.NoPosts, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 48
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [showToastr && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_10__.PostDeleteToastr, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 20
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Segment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_6__.default, {
        user: user,
        setPosts: setPosts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this), "console.log(posts)", posts.map(function (post) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_7__.default, {
          post: post,
          user: user,
          setPosts: setPosts,
          setShowToastr: setShowToastr
        }, post._id, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 23
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(Index, "h+bURI0T1D27B6QGQbZOx54pkK4=");

_c = Index;

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {
    var _parseCookies, token, res;

    return C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _parseCookies = (0,nookies__WEBPACK_IMPORTED_MODULE_8__.parseCookies)(ctx), token = _parseCookies.token;
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_4___default().get("".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__.default, "/api/posts"), {
              headers: {
                Authorization: token
              }
            });

          case 4:
            res = _context.sent;
            return _context.abrupt("return", {
              postsData: res.data
            });

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              errorLoading: true
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addClass; }
/* harmony export */ });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0,_hasClass__WEBPACK_IMPORTED_MODULE_0__.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ hasClass; }
/* harmony export */ });
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeClass; }
/* harmony export */ });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/react-toastify/dist/react-toastify.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/react-toastify.esm.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bounce": function() { return /* binding */ Bounce; },
/* harmony export */   "Flip": function() { return /* binding */ Flip; },
/* harmony export */   "Slide": function() { return /* binding */ Slide; },
/* harmony export */   "ToastContainer": function() { return /* binding */ ToastContainer; },
/* harmony export */   "Zoom": function() { return /* binding */ Zoom; },
/* harmony export */   "collapseToast": function() { return /* binding */ collapseToast; },
/* harmony export */   "cssTransition": function() { return /* binding */ cssTransition; },
/* harmony export */   "toast": function() { return /* binding */ toast; },
/* harmony export */   "useToast": function() { return /* binding */ useToast; },
/* harmony export */   "useToastContainer": function() { return /* binding */ useToastContainer; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);






function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function isNum(v) {
  return typeof v === 'number' && !isNaN(v);
}
function isBool(v) {
  return typeof v === 'boolean';
}
function isStr(v) {
  return typeof v === 'string';
}
function isFn(v) {
  return typeof v === 'function';
}
function parseClassName(v) {
  return isStr(v) || isFn(v) ? v : null;
}
function objectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
}
function hasToastId(toastId) {
  return toastId === 0 || toastId;
}
function getAutoCloseDelay(toastAutoClose, containerAutoClose) {
  return toastAutoClose === false || isNum(toastAutoClose) && toastAutoClose > 0 ? toastAutoClose : containerAutoClose;
}
var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function canBeRendered(content) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(content) || isStr(content) || isFn(content) || isNum(content);
}

var POSITION = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center'
};
var TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  DEFAULT: 'default',
  DARK: 'dark'
};

/**
 * Used to collapse toast after exit animation
 */
function collapseToast(node, done, duration
/* COLLAPSE_DURATION */
) {
  if (duration === void 0) {
    duration = 300;
  }

  var height = node.scrollHeight;
  var style = node.style;
  requestAnimationFrame(function () {
    style.minHeight = 'initial';
    style.height = height + 'px';
    style.transition = "all " + duration + "ms";
    requestAnimationFrame(function () {
      style.height = '0';
      style.padding = '0';
      style.margin = '0';
      setTimeout(function () {
        return done();
      }, duration);
    });
  });
}

function cssTransition(_ref) {
  var enter = _ref.enter,
      exit = _ref.exit,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 750 : _ref$duration,
      _ref$appendPosition = _ref.appendPosition,
      appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition,
      _ref$collapse = _ref.collapse,
      collapse = _ref$collapse === void 0 ? true : _ref$collapse,
      _ref$collapseDuration = _ref.collapseDuration,
      collapseDuration = _ref$collapseDuration === void 0 ? 300 : _ref$collapseDuration;
  var enterDuration, exitDuration;

  if (Array.isArray(duration) && duration.length === 2) {
    enterDuration = duration[0];
    exitDuration = duration[1];
  } else {
    enterDuration = exitDuration = duration;
  }

  return function ToastTransition(_ref2) {
    var children = _ref2.children,
        position = _ref2.position,
        preventExitTransition = _ref2.preventExitTransition,
        done = _ref2.done,
        props = _objectWithoutPropertiesLoose(_ref2, ["children", "position", "preventExitTransition", "done"]);

    var enterClassName = appendPosition ? enter + "--" + position : enter;
    var exitClassName = appendPosition ? exit + "--" + position : exit;

    var onEnter = function onEnter() {
      var node = props.nodeRef.current;

      if (node) {
        node.classList.add(enterClassName);
        node.style.animationFillMode = 'forwards';
        node.style.animationDuration = enterDuration + "ms";
      }
    };

    var onEntered = function onEntered() {
      var node = props.nodeRef.current;

      if (node) {
        node.classList.remove(enterClassName);
        node.style.removeProperty('animationFillMode');
        node.style.removeProperty('animationDuration');
      }
    };

    var onExited = function onExited() {
      var node = props.nodeRef.current;

      if (node) {
        node.removeEventListener('animationend', onExited);
        collapse ? collapseToast(node, done, collapseDuration) : done();
      }
    };

    var onExit = function onExit() {
      var node = props.nodeRef.current;

      if (node) {
        node.classList.add(exitClassName);
        node.style.animationFillMode = 'forwards';
        node.style.animationDuration = exitDuration + "ms";
        node.addEventListener('animationend', onExited);
      }
    };

    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_transition_group__WEBPACK_IMPORTED_MODULE_4__.Transition, Object.assign({}, props, {
      timeout: preventExitTransition ? collapse ? collapseDuration : 50
      /* DEBOUNCE_DURATION */
      : {
        enter: enterDuration,
        exit: collapse ? exitDuration + collapseDuration : exitDuration + 50
        /* DEBOUNCE_DURATION */

      },
      onEnter: onEnter,
      onEntered: onEntered,
      onExit: preventExitTransition ? onExited : onExit,
      unmountOnExit: true
    }), children);
  };
}

var eventManager = {
  list: /*#__PURE__*/new Map(),
  emitQueue: /*#__PURE__*/new Map(),
  on: function on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off: function off(event, callback) {
    if (callback) {
      var cb = this.list.get(event).filter(function (cb) {
        return cb !== callback;
      });
      this.list.set(event, cb);
      return this;
    }

    this.list["delete"](event);
    return this;
  },
  cancelEmit: function cancelEmit(event) {
    var timers = this.emitQueue.get(event);

    if (timers) {
      timers.forEach(function (timer) {
        return clearTimeout(timer);
      });
      this.emitQueue["delete"](event);
    }

    return this;
  },

  /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */
  emit: function emit(event) {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.list.has(event) && this.list.get(event).forEach(function (callback) {
      var timer = setTimeout(function () {
        // @ts-ignore
        callback.apply(void 0, args);
      }, 0);
      _this.emitQueue.has(event) || _this.emitQueue.set(event, []);

      _this.emitQueue.get(event).push(timer);
    });
  }
};

/**
 * `useKeeper` is a helper around `useRef`.
 *
 * You don't need to access the `.current`property to get the value
 * If refresh is set to true. The ref will be updated every render
 */

function useKeeper(arg, refresh) {
  if (refresh === void 0) {
    refresh = false;
  }

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(arg);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (refresh) ref.current = arg;
  });
  return ref.current;
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [].concat(state, [action.toastId]).filter(function (id) {
        return id !== action.staleId;
      });

    case 'REMOVE':
      return hasToastId(action.toastId) ? state.filter(function (id) {
        return id !== action.toastId;
      }) : [];
  }
}

function useToastContainer(props) {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(function (x) {
    return x + 1;
  }, 0),
      forceUpdate = _useReducer[1];

  var _useReducer2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, []),
      toast = _useReducer2[0],
      dispatch = _useReducer2[1];

  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var toastCount = useKeeper(0);
  var queue = useKeeper([]);
  var collection = useKeeper({});
  var instance = useKeeper({
    toastKey: 1,
    displayedToast: 0,
    props: props,
    containerId: null,
    isToastActive: isToastActive,
    getToast: function getToast(id) {
      return collection[id] || null;
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    instance.containerId = props.containerId;
    eventManager.cancelEmit(3
    /* WillUnmount */
    ).on(0
    /* Show */
    , buildToast).on(1
    /* Clear */
    , function (toastId) {
      return containerRef.current && removeToast(toastId);
    }).on(5
    /* ClearWaitingQueue */
    , clearWaitingQueue).emit(2
    /* DidMount */
    , instance);
    return function () {
      return eventManager.emit(3
      /* WillUnmount */
      , instance);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    instance.isToastActive = isToastActive;
    instance.displayedToast = toast.length;
    eventManager.emit(4
    /* Change */
    , toast.length, props.containerId);
  }, [toast]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    instance.props = props;
  });

  function isToastActive(id) {
    return toast.indexOf(id) !== -1;
  }

  function clearWaitingQueue(_ref) {
    var containerId = _ref.containerId;
    var _instance$props = instance.props,
        limit = _instance$props.limit,
        enableMultiContainer = _instance$props.enableMultiContainer;

    if (limit && (!containerId || instance.containerId === containerId && enableMultiContainer)) {
      toastCount -= queue.length;
      queue = [];
    }
  }

  function removeToast(toastId) {
    var queueLen = queue.length;
    toastCount = hasToastId(toastId) ? toastCount - 1 : toastCount - instance.displayedToast;
    if (toastCount < 0) toastCount = 0;

    if (queueLen > 0) {
      var freeSlot = hasToastId(toastId) ? 1 : instance.props.limit;

      if (queueLen === 1 || freeSlot === 1) {
        instance.displayedToast++;
        dequeueToast();
      } else {
        var toDequeue = freeSlot > queueLen ? queueLen : freeSlot;
        instance.displayedToast = toDequeue;

        for (var i = 0; i < toDequeue; i++) {
          dequeueToast();
        }
      }
    }

    dispatch({
      type: 'REMOVE',
      toastId: toastId
    });
  }

  function dequeueToast() {
    var _queue$shift = queue.shift(),
        toastContent = _queue$shift.toastContent,
        toastProps = _queue$shift.toastProps,
        staleId = _queue$shift.staleId; // ensure that exit transition has been completed, hence the timeout


    setTimeout(function () {
      appendToast(toastContent, toastProps, staleId);
    }, 500);
  }
  /**
   * check if a container is attached to the dom
   * check for multi-container, build only if associated
   * check for duplicate toastId if no update
   */


  function isNotValid(_ref2) {
    var containerId = _ref2.containerId,
        toastId = _ref2.toastId,
        updateId = _ref2.updateId;
    return !containerRef.current || instance.props.enableMultiContainer && containerId !== instance.props.containerId || instance.isToastActive(toastId) && updateId == null ? true : false;
  } // this function and all the function called inside needs to rely on ref(`useKeeper`)


  function buildToast(content, _ref3) {
    var delay = _ref3.delay,
        staleId = _ref3.staleId,
        options = _objectWithoutPropertiesLoose(_ref3, ["delay", "staleId"]);

    if (!canBeRendered(content) || isNotValid(options)) return;
    var toastId = options.toastId,
        updateId = options.updateId;
    var props = instance.props,
        isToastActive = instance.isToastActive;

    var closeToast = function closeToast() {
      return removeToast(toastId);
    };

    var isNotAnUpdate = !isToastActive(toastId);
    if (isNotAnUpdate) toastCount++;
    var toastProps = {
      toastId: toastId,
      updateId: updateId,
      key: options.key || instance.toastKey++,
      type: options.type,
      closeToast: closeToast,
      closeButton: options.closeButton,
      rtl: props.rtl,
      position: options.position || props.position,
      transition: options.transition || props.transition,
      className: parseClassName(options.className || props.toastClassName),
      bodyClassName: parseClassName(options.bodyClassName || props.bodyClassName),
      style: options.style || props.toastStyle,
      bodyStyle: options.bodyStyle || props.bodyStyle,
      onClick: options.onClick || props.onClick,
      pauseOnHover: isBool(options.pauseOnHover) ? options.pauseOnHover : props.pauseOnHover,
      pauseOnFocusLoss: isBool(options.pauseOnFocusLoss) ? options.pauseOnFocusLoss : props.pauseOnFocusLoss,
      draggable: isBool(options.draggable) ? options.draggable : props.draggable,
      draggablePercent: isNum(options.draggablePercent) ? options.draggablePercent : props.draggablePercent,
      closeOnClick: isBool(options.closeOnClick) ? options.closeOnClick : props.closeOnClick,
      progressClassName: parseClassName(options.progressClassName || props.progressClassName),
      progressStyle: options.progressStyle || props.progressStyle,
      autoClose: getAutoCloseDelay(options.autoClose, props.autoClose),
      hideProgressBar: isBool(options.hideProgressBar) ? options.hideProgressBar : props.hideProgressBar,
      progress: options.progress,
      role: isStr(options.role) ? options.role : props.role,
      deleteToast: function deleteToast() {
        removeFromCollection(toastId);
      }
    };
    if (isFn(options.onOpen)) toastProps.onOpen = options.onOpen;
    if (isFn(options.onClose)) toastProps.onClose = options.onClose;
    var closeButton = props.closeButton;

    if (options.closeButton === false || canBeRendered(options.closeButton)) {
      closeButton = options.closeButton;
    } else if (options.closeButton === true) {
      closeButton = canBeRendered(props.closeButton) ? props.closeButton : true;
    }

    toastProps.closeButton = closeButton;
    var toastContent = content;

    if ((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(content) && !isStr(content.type)) {
      toastContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(content, {
        closeToast: closeToast,
        toastProps: toastProps
      });
    } else if (isFn(content)) {
      toastContent = content({
        closeToast: closeToast,
        toastProps: toastProps
      });
    } // not handling limit + delay by design. Waiting for user feedback first


    if (props.limit && props.limit > 0 && toastCount > props.limit && isNotAnUpdate) {
      queue.push({
        toastContent: toastContent,
        toastProps: toastProps,
        staleId: staleId
      });
    } else if (isNum(delay) && delay > 0) {
      setTimeout(function () {
        appendToast(toastContent, toastProps, staleId);
      }, delay);
    } else {
      appendToast(toastContent, toastProps, staleId);
    }
  }

  function appendToast(content, toastProps, staleId) {
    var toastId = toastProps.toastId;
    collection[toastId] = {
      content: content,
      props: toastProps
    };
    dispatch({
      type: 'ADD',
      toastId: toastId,
      staleId: staleId
    });
  }

  function removeFromCollection(toastId) {
    delete collection[toastId];
    forceUpdate();
  }

  function getToastToRender(cb) {
    var toastToRender = {};
    var toastList = props.newestOnTop ? Object.keys(collection).reverse() : Object.keys(collection);

    for (var i = 0; i < toastList.length; i++) {
      var _toast = collection[toastList[i]];
      var position = _toast.props.position;
      toastToRender[position] || (toastToRender[position] = []);
      toastToRender[position].push(_toast);
    }

    return Object.keys(toastToRender).map(function (p) {
      return cb(p, toastToRender[p]);
    });
  }

  return {
    getToastToRender: getToastToRender,
    collection: collection,
    containerRef: containerRef,
    isToastActive: isToastActive
  };
}

function getX(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}

function getY(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}

function useToast(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      isRunning = _useState[0],
      setIsRunning = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      preventExitTransition = _useState2[0],
      setPreventExitTransition = _useState2[1];

  var toastRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var drag = useKeeper({
    start: 0,
    x: 0,
    y: 0,
    deltaX: 0,
    removalDistance: 0,
    canCloseOnClick: true,
    canDrag: false,
    boundingRect: null
  });
  var syncProps = useKeeper(props, true);
  var autoClose = props.autoClose,
      pauseOnHover = props.pauseOnHover,
      closeToast = props.closeToast,
      onClick = props.onClick,
      closeOnClick = props.closeOnClick;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isFn(props.onOpen)) props.onOpen((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(props.children) && props.children.props);
    return function () {
      if (isFn(syncProps.onClose)) syncProps.onClose((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(syncProps.children) && syncProps.children.props);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    props.draggable && bindDragEvents();
    return function () {
      props.draggable && unbindDragEvents();
    };
  }, [props.draggable]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    props.pauseOnFocusLoss && bindFocusEvents();
    return function () {
      props.pauseOnFocusLoss && unbindFocusEvents();
    };
  }, [props.pauseOnFocusLoss]);

  function onDragStart(e) {
    var toast = toastRef.current;
    drag.canCloseOnClick = true;
    drag.canDrag = true;
    drag.boundingRect = toast.getBoundingClientRect();
    toast.style.transition = '';
    drag.start = drag.x = getX(e.nativeEvent);
    drag.removalDistance = toast.offsetWidth * (props.draggablePercent / 100);
  }

  function onDragTransitionEnd() {
    if (drag.boundingRect) {
      var _drag$boundingRect = drag.boundingRect,
          top = _drag$boundingRect.top,
          bottom = _drag$boundingRect.bottom,
          left = _drag$boundingRect.left,
          right = _drag$boundingRect.right;

      if (props.pauseOnHover && drag.x >= left && drag.x <= right && drag.y >= top && drag.y <= bottom) {
        pauseToast();
      } else {
        playToast();
      }
    }
  }

  function playToast() {
    setIsRunning(true);
  }

  function pauseToast() {
    setIsRunning(false);
  }

  function bindFocusEvents() {
    window.addEventListener('focus', playToast);
    window.addEventListener('blur', pauseToast);
  }

  function unbindFocusEvents() {
    window.removeEventListener('focus', playToast);
    window.removeEventListener('blur', pauseToast);
  }

  function bindDragEvents() {
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    document.addEventListener('touchmove', onDragMove);
    document.addEventListener('touchend', onDragEnd);
  }

  function unbindDragEvents() {
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', onDragEnd);
    document.removeEventListener('touchmove', onDragMove);
    document.removeEventListener('touchend', onDragEnd);
  }

  function onDragMove(e) {
    e.preventDefault();
    var toast = toastRef.current;

    if (drag.canDrag) {
      if (isRunning) pauseToast();
      drag.x = getX(e);
      drag.deltaX = drag.x - drag.start;
      drag.y = getY(e); // prevent false positif during a toast click

      if (drag.start !== drag.x) drag.canCloseOnClick = false;
      toast.style.transform = "translateX(" + drag.deltaX + "px)";
      toast.style.opacity = "" + (1 - Math.abs(drag.deltaX / drag.removalDistance));
    }
  }

  function onDragEnd() {
    var toast = toastRef.current;

    if (drag.canDrag) {
      drag.canDrag = false;

      if (Math.abs(drag.deltaX) > drag.removalDistance) {
        setPreventExitTransition(true);
        props.closeToast();
        return;
      }

      toast.style.transition = 'transform 0.2s, opacity 0.2s';
      toast.style.transform = 'translateX(0)';
      toast.style.opacity = '1';
    }
  }

  var eventHandlers = {
    onMouseDown: onDragStart,
    onTouchStart: onDragStart,
    onMouseUp: onDragTransitionEnd,
    onTouchEnd: onDragTransitionEnd
  };

  if (autoClose && pauseOnHover) {
    eventHandlers.onMouseEnter = pauseToast;
    eventHandlers.onMouseLeave = playToast;
  } // prevent toast from closing when user drags the toast


  if (closeOnClick) {
    eventHandlers.onClick = function (e) {
      onClick && onClick(e);
      drag.canCloseOnClick && closeToast();
    };
  }

  return {
    playToast: playToast,
    pauseToast: pauseToast,
    isRunning: isRunning,
    preventExitTransition: preventExitTransition,
    toastRef: toastRef,
    eventHandlers: eventHandlers
  };
}

function CloseButton(_ref) {
  var closeToast = _ref.closeToast,
      type = _ref.type,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? 'close' : _ref$ariaLabel;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button " + "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button--" + type,
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      closeToast(e);
    },
    "aria-label": ariaLabel
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}

function ProgressBar(_ref) {
  var _ref2, _animationEvent;

  var delay = _ref.delay,
      isRunning = _ref.isRunning,
      closeToast = _ref.closeToast,
      type = _ref.type,
      hide = _ref.hide,
      className = _ref.className,
      userStyle = _ref.style,
      controlledProgress = _ref.controlledProgress,
      progress = _ref.progress,
      rtl = _ref.rtl,
      isIn = _ref.isIn;

  var style = _extends({}, userStyle, {
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? 'running' : 'paused',
    opacity: hide ? 0 : 1
  });

  if (controlledProgress) style.transform = "scaleX(" + progress + ")";
  var defaultClassArr = ["Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar", controlledProgress ? "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--controlled" : "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--animated", "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--" + type, (_ref2 = {}, _ref2["Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--rtl"] = rtl, _ref2)];
  var classNames = isFn(className) ? className({
    rtl: rtl,
    type: type,
    defaultClassName: clsx__WEBPACK_IMPORTED_MODULE_1__.default.apply(void 0, defaultClassArr)
  }) : clsx__WEBPACK_IMPORTED_MODULE_1__.default.apply(void 0, [].concat(defaultClassArr, [className])); // 🧐 controlledProgress is derived from progress
  // so if controlledProgress is set
  // it means that this is also the case for progress

  var animationEvent = (_animationEvent = {}, _animationEvent[controlledProgress && progress >= 1 ? 'onTransitionEnd' : 'onAnimationEnd'] = controlledProgress && progress < 1 ? null : function () {
    isIn && closeToast();
  }, _animationEvent);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", Object.assign({
    className: classNames,
    style: style
  }, animationEvent));
}
ProgressBar.defaultProps = {
  type: TYPE.DEFAULT,
  hide: false
};

var Toast = function Toast(props) {
  var _ref;

  var _useToast = useToast(props),
      isRunning = _useToast.isRunning,
      preventExitTransition = _useToast.preventExitTransition,
      toastRef = _useToast.toastRef,
      eventHandlers = _useToast.eventHandlers;

  var closeButton = props.closeButton,
      children = props.children,
      autoClose = props.autoClose,
      onClick = props.onClick,
      type = props.type,
      hideProgressBar = props.hideProgressBar,
      closeToast = props.closeToast,
      Transition = props.transition,
      position = props.position,
      className = props.className,
      style = props.style,
      bodyClassName = props.bodyClassName,
      bodyStyle = props.bodyStyle,
      progressClassName = props.progressClassName,
      progressStyle = props.progressStyle,
      updateId = props.updateId,
      role = props.role,
      progress = props.progress,
      rtl = props.rtl,
      toastId = props.toastId,
      deleteToast = props.deleteToast;
  var defaultClassArr = ["Toastify"
  /* CSS_NAMESPACE */
  + "__toast", "Toastify"
  /* CSS_NAMESPACE */
  + "__toast--" + type, (_ref = {}, _ref["Toastify"
  /* CSS_NAMESPACE */
  + "__toast--rtl"] = rtl, _ref)];
  var cssClasses = isFn(className) ? className({
    rtl: rtl,
    position: position,
    type: type,
    defaultClassName: clsx__WEBPACK_IMPORTED_MODULE_1__.default.apply(void 0, defaultClassArr)
  }) : clsx__WEBPACK_IMPORTED_MODULE_1__.default.apply(void 0, [].concat(defaultClassArr, [className]));
  var controlledProgress = !!progress;

  function renderCloseButton(closeButton) {
    if (!closeButton) return;
    var props = {
      closeToast: closeToast,
      type: type
    };
    if (isFn(closeButton)) return closeButton(props);
    if ((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(closeButton)) return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(closeButton, props);
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Transition, {
    "in": props["in"],
    appear: true,
    done: deleteToast,
    position: position,
    preventExitTransition: preventExitTransition,
    nodeRef: toastRef
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", Object.assign({
    id: toastId,
    onClick: onClick,
    className: cssClasses || undefined
  }, eventHandlers, {
    style: style,
    ref: toastRef
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", Object.assign({}, props["in"] && {
    role: role
  }, {
    className: isFn(bodyClassName) ? bodyClassName({
      type: type
    }) : (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-body", bodyClassName),
    style: bodyStyle
  }), children), renderCloseButton(closeButton), (autoClose || controlledProgress) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ProgressBar, Object.assign({}, updateId && !controlledProgress ? {
    key: "pb-" + updateId
  } : {}, {
    rtl: rtl,
    delay: autoClose,
    isRunning: isRunning,
    isIn: props["in"],
    closeToast: closeToast,
    hide: hideProgressBar,
    type: type,
    style: progressStyle,
    className: progressClassName,
    controlledProgress: controlledProgress,
    progress: progress
  }))));
};

var Bounce = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-exit",
  appendPosition: true
});
var Slide = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "__slide-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "__slide-exit",
  duration: [450, 750],
  appendPosition: true
});
var Zoom = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "__zoom-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "__zoom-exit"
});
var Flip = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "__flip-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "__flip-exit"
});

var ToastPositioner = function ToastPositioner(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "className", "style"]);

  // Monkey patch react-transition-group
  // As exit transition is broken with strict mode
  delete rest["in"];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className,
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (child) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, rest);
  }));
};

var ToastContainer = function ToastContainer(props) {
  var _useToastContainer = useToastContainer(props),
      getToastToRender = _useToastContainer.getToastToRender,
      containerRef = _useToastContainer.containerRef,
      isToastActive = _useToastContainer.isToastActive;

  var className = props.className,
      style = props.style,
      rtl = props.rtl,
      containerId = props.containerId;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: containerRef,
    className: "Toastify"
    /* CSS_NAMESPACE */
    ,
    id: containerId
  }, getToastToRender(function (position, toastList) {
    var _cx, _cx2;

    var swag = {
      className: isFn(className) ? className({
        position: position,
        rtl: rtl,
        defaultClassName: (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)("Toastify"
        /* CSS_NAMESPACE */
        + "__toast-container", "Toastify"
        /* CSS_NAMESPACE */
        + "__toast-container--" + position, (_cx = {}, _cx["Toastify"
        /* CSS_NAMESPACE */
        + "__toast-container--rtl"] = rtl, _cx))
      }) : (0,clsx__WEBPACK_IMPORTED_MODULE_1__.default)("Toastify"
      /* CSS_NAMESPACE */
      + "__toast-container", "Toastify"
      /* CSS_NAMESPACE */
      + "__toast-container--" + position, (_cx2 = {}, _cx2["Toastify"
      /* CSS_NAMESPACE */
      + "__toast-container--rtl"] = rtl, _cx2), parseClassName(className)),
      style: toastList.length === 0 ? _extends({}, style, {
        pointerEvents: 'none'
      }) : _extends({}, style)
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToastPositioner, Object.assign({}, swag, {
      key: "container-" + position
    }), toastList.map(function (_ref) {
      var content = _ref.content,
          toastProps = _ref.props;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toast, Object.assign({}, toastProps, {
        "in": isToastActive(toastProps.toastId),
        key: "toast-" + toastProps.key,
        closeButton: toastProps.closeButton === true ? CloseButton : toastProps.closeButton
      }), content);
    }));
  }));
};

if (true) {
  // @ts-ignore
  ToastContainer.propTypes = {
    // @ts-ignore
    position: /*#__PURE__*/prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf( /*#__PURE__*/objectValues(POSITION)),
    // @ts-ignore
    autoClose: /*#__PURE__*/prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)]),
    // @ts-ignore
    closeButton: /*#__PURE__*/prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)]),
    hideProgressBar: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    pauseOnHover: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    closeOnClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    newestOnTop: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
    style: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    toastClassName: /*#__PURE__*/prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
    bodyClassName: /*#__PURE__*/prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
    progressClassName: /*#__PURE__*/prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
    progressStyle: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    transition: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    rtl: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    draggable: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    draggablePercent: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    pauseOnFocusLoss: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    enableMultiContainer: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    containerId: /*#__PURE__*/prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)]),
    role: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
  };
}

ToastContainer.defaultProps = {
  position: POSITION.TOP_RIGHT,
  transition: Bounce,
  rtl: false,
  autoClose: 5000,
  hideProgressBar: false,
  closeButton: CloseButton,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80,
  role: 'alert'
};

var containers = /*#__PURE__*/new Map();
var latestInstance;
var containerDomNode;
var containerConfig;
var queue = [];
var lazy = false;
/**
 * Check whether any container is currently mounted in the DOM
 */

function isAnyContainerMounted() {
  return containers.size > 0;
}
/**
 * Get the container by id. Returns the last container declared when no id is given.
 */


function getContainer(containerId) {
  if (!isAnyContainerMounted()) return null;
  return containers.get(!containerId ? latestInstance : containerId);
}
/**
 * Get the toast by id, given it's in the DOM, otherwise returns null
 */


function getToast(toastId, _ref) {
  var containerId = _ref.containerId;
  var container = getContainer(containerId);
  if (!container) return null;
  return container.getToast(toastId);
}
/**
 * Generate a random toastId
 */


function generateToastId() {
  return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10);
}
/**
 * Generate a toastId or use the one provided
 */


function getToastId(options) {
  if (options && (isStr(options.toastId) || isNum(options.toastId))) {
    return options.toastId;
  }

  return generateToastId();
}
/**
 * If the container is not mounted, the toast is enqueued and
 * the container lazy mounted
 */


function dispatchToast(content, options) {
  if (isAnyContainerMounted()) {
    eventManager.emit(0
    /* Show */
    , content, options);
  } else {
    queue.push({
      content: content,
      options: options
    });

    if (lazy && canUseDom) {
      lazy = false;
      containerDomNode = document.createElement('div');
      document.body.appendChild(containerDomNode);
      (0,react_dom__WEBPACK_IMPORTED_MODULE_3__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToastContainer, Object.assign({}, containerConfig)), containerDomNode);
    }
  }

  return options.toastId;
}
/**
 * Merge provided options with the defaults settings and generate the toastId
 */


function mergeOptions(type, options) {
  return _extends({}, options, {
    type: options && options.type || type,
    toastId: getToastId(options)
  });
}

var toast = function toast(content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, options));
};

toast.success = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.SUCCESS, options));
};

toast.info = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.INFO, options));
};

toast.error = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.ERROR, options));
};

toast.warning = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.WARNING, options));
};

toast.dark = function (content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DARK, options));
};
/**
 * Maybe I should remove warning in favor of warn, I don't know
 */


toast.warn = toast.warning;
/**
 * Remove toast programmaticaly
 */

toast.dismiss = function (id) {
  return isAnyContainerMounted() && eventManager.emit(1
  /* Clear */
  , id);
};
/**
 * Clear waiting queue when limit is used
 */


toast.clearWaitingQueue = function (params) {
  if (params === void 0) {
    params = {};
  }

  return isAnyContainerMounted() && eventManager.emit(5
  /* ClearWaitingQueue */
  , params);
};
/**
 * return true if one container is displaying the toast
 */


toast.isActive = function (id) {
  var isToastActive = false;
  containers.forEach(function (container) {
    if (container.isToastActive && container.isToastActive(id)) {
      isToastActive = true;
    }
  });
  return isToastActive;
};

toast.update = function (toastId, options) {
  if (options === void 0) {
    options = {};
  }

  // if you call toast and toast.update directly nothing will be displayed
  // this is why I defered the update
  setTimeout(function () {
    var toast = getToast(toastId, options);

    if (toast) {
      var oldOptions = toast.props,
          oldContent = toast.content;

      var nextOptions = _extends({}, oldOptions, options, {
        toastId: options.toastId || toastId,
        updateId: generateToastId()
      });

      if (nextOptions.toastId !== toastId) nextOptions.staleId = toastId;
      var content = typeof nextOptions.render !== 'undefined' ? nextOptions.render : oldContent;
      delete nextOptions.render;
      dispatchToast(content, nextOptions);
    }
  }, 0);
};
/**
 * Used for controlled progress bar.
 */


toast.done = function (id) {
  toast.update(id, {
    progress: 1
  });
};
/**
 * Track changes. The callback get the number of toast displayed
 *
 */


toast.onChange = function (callback) {
  if (isFn(callback)) {
    eventManager.on(4
    /* Change */
    , callback);
  }

  return function () {
    isFn(callback) && eventManager.off(4
    /* Change */
    , callback);
  };
};
/**
 * Configure the ToastContainer when lazy mounted
 */


toast.configure = function (config) {
  if (config === void 0) {
    config = {};
  }

  lazy = true;
  containerConfig = config;
};

toast.POSITION = POSITION;
toast.TYPE = TYPE;
/**
 * Wait until the ToastContainer is mounted to dispatch the toast
 * and attach isActive method
 */

eventManager.on(2
/* DidMount */
, function (containerInstance) {
  latestInstance = containerInstance.containerId || containerInstance;
  containers.set(latestInstance, containerInstance);
  queue.forEach(function (item) {
    eventManager.emit(0
    /* Show */
    , item.content, item.options);
  });
  queue = [];
}).on(3
/* WillUnmount */
, function (containerInstance) {
  containers["delete"](containerInstance.containerId || containerInstance);

  if (containers.size === 0) {
    eventManager.off(0
    /* Show */
    ).off(1
    /* Clear */
    ).off(5
    /* ClearWaitingQueue */
    );
  }

  if (canUseDom && containerDomNode) {
    document.body.removeChild(containerDomNode);
  }
});


//# sourceMappingURL=react-toastify.esm.js.map


/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__.default)(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, _Transition__WEBPACK_IMPORTED_MODULE_7__.default.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
}) : 0;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_3___default().Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default().findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default().Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_5__.default, props, inProp ? react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}((react__WEBPACK_IMPORTED_MODULE_3___default().Component));

ReplaceTransition.propTypes =  true ? {
  in: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_3___default().Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modes": function() { return /* binding */ modes; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__.ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__.ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__.ENTERED, react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__.ENTERED, react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_3__.ENTERED,
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_3__.ENTERING && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__.ENTERING
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__.EXITING
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition__WEBPACK_IMPORTED_MODULE_3__.ENTERING:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__.EXITING:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__.ENTERED:
        component = current;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__.default.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().element.isRequired)])
} : 0;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UNMOUNTED": function() { return /* binding */ UNMOUNTED; },
/* harmony export */   "EXITED": function() { return /* binding */ EXITED; },
/* harmony export */   "ENTERING": function() { return /* binding */ ENTERING; },
/* harmony export */   "ENTERED": function() { return /* binding */ ENTERED; },
/* harmony export */   "EXITING": function() { return /* binding */ EXITING; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_4___default().findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__.default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default().findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__.default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_4___default().findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__.default.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(react__WEBPACK_IMPORTED_MODULE_3___default().Children.only(children), childProps))
    );
  };

  return Transition;
}((react__WEBPACK_IMPORTED_MODULE_3___default().Component));

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__.default;
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    current: typeof Element === 'undefined' ? (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any) : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element.isRequired)]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Enable or disable enter transitions.
   */
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Enable or disable exit transitions.
   */
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_7__.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
} : 0; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__.default)(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_6__.getInitialChildMapping)(nextProps, handleExited) : (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_6__.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_6__.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__.default.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__.default.Provider, {
      value: contextValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(Component, props, children));
  };

  return TransitionGroup;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any),

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
} : 0;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSTransition": function() { return /* reexport safe */ _CSSTransition__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "ReplaceTransition": function() { return /* reexport safe */ _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "SwitchTransition": function() { return /* reexport safe */ _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "TransitionGroup": function() { return /* reexport safe */ _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "Transition": function() { return /* reexport safe */ _Transition__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "config": function() { return /* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_5__.default; }
/* harmony export */ });
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");







/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChildMapping": function() { return /* binding */ getChildMapping; },
/* harmony export */   "mergeChildMappings": function() { return /* binding */ mergeChildMappings; },
/* harmony export */   "getInitialChildMapping": function() { return /* binding */ getInitialChildMapping; },
/* harmony export */   "getNextChildMapping": function() { return /* binding */ getNextChildMapping; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeoutsShape": function() { return /* binding */ timeoutsShape; },
/* harmony export */   "classNamesShape": function() { return /* binding */ classNamesShape; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
}).isRequired]) : 0;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
})]) : 0;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvVG9hc3RyLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3QvQ2FyZFBvc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2FkZENsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL2hhc0NsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL3JlbW92ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdG9hc3RpZnkvZGlzdC9yZWFjdC10b2FzdGlmeS5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9DU1NUcmFuc2l0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vUmVwbGFjZVRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9Td2l0Y2hUcmFuc2l0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL1RyYW5zaXRpb25Hcm91cC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL1RyYW5zaXRpb25Hcm91cENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL3V0aWxzL0NoaWxkTWFwcGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL3V0aWxzL1Byb3BUeXBlcy5qcyJdLCJuYW1lcyI6WyJQb3N0RGVsZXRlVG9hc3RyIiwidG9hc3QiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiRXJyb3JUb2FzdHIiLCJlcnJvciIsIk1zZ1NlbnRUb2FzdHIiLCJDYXJkUG9zdCIsInBvc3QiLCJ1c2VyIiwic2V0UG9zdHMiLCJzZXRTaG93VG9hc3RyIiwidXNlU3RhdGUiLCJsaWtlcyIsInNldExpa2VzIiwiaXNMaWtlZCIsImxlbmd0aCIsImZpbHRlciIsImxpa2UiLCJfaWQiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwic2V0RXJyb3IiLCJwaWNVcmwiLCJjdXJzb3IiLCJwcm9maWxlUGljVXJsIiwicm9sZSIsImRlbGV0ZVBvc3QiLCJ1c2VybmFtZSIsIm5hbWUiLCJjYWxjdWxhdGVUaW1lIiwiY3JlYXRlZEF0IiwibG9jYXRpb24iLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJ3b3JkU3BhY2luZyIsInRleHQiLCJtYXJnaW5MZWZ0IiwibWFwIiwiY29tbWVudCIsImkiLCJJbmRleCIsInBvc3RzRGF0YSIsImVycm9yTG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0cyIsInNob3dUb2FzdHIiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInRpdGxlIiwic3BsaXQiLCJzZXRUaW1lb3V0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicGFyc2VDb29raWVzIiwidG9rZW4iLCJheGlvcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlcyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQ3BDLHNCQUNFLDhEQUFDLDBEQUFEO0FBQ0UsWUFBUSxFQUFDLGVBRFg7QUFFRSxhQUFTLEVBQUUsSUFGYjtBQUdFLG1CQUFlLEVBQUUsS0FIbkI7QUFJRSxlQUFXLEVBQUUsS0FKZjtBQUtFLGdCQUFZLE1BTGQ7QUFNRSxPQUFHLEVBQUUsS0FOUDtBQU9FLG9CQUFnQixNQVBsQjtBQVFFLGFBQVMsTUFSWDtBQVNFLGdCQUFZLEVBQUUsS0FUaEI7QUFBQSxjQVVHQyxzREFBQSxDQUFXLHNCQUFYLEVBQW1DO0FBQ2xDQyxjQUFRLEVBQUUsZUFEd0I7QUFFbENDLGVBQVMsRUFBRSxJQUZ1QjtBQUdsQ0MscUJBQWUsRUFBRSxLQUhpQjtBQUlsQ0Msa0JBQVksRUFBRSxJQUpvQjtBQUtsQ0Msa0JBQVksRUFBRSxLQUxvQjtBQU1sQ0MsZUFBUyxFQUFFLElBTnVCO0FBT2xDQyxjQUFRLEVBQUVDO0FBUHdCLEtBQW5DO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBdkJNO0tBQU1ULGdCO0FBeUJOLElBQU1VLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDeEMsc0JBQ0UsOERBQUMsMERBQUQ7QUFDRSxZQUFRLEVBQUMsZUFEWDtBQUVFLGFBQVMsRUFBRSxJQUZiO0FBR0UsbUJBQWUsRUFBRSxLQUhuQjtBQUlFLGVBQVcsRUFBRSxLQUpmO0FBS0UsZ0JBQVksTUFMZDtBQU1FLE9BQUcsRUFBRSxLQU5QO0FBT0Usb0JBQWdCLE1BUGxCO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saURBQU0sQ0FBQyxvREFBYSxpQ0FBaUM7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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REFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQixtREFBWTtBQUNsQztBQUNBLE9BQU87QUFDUCxLQUFLLGdDQUFnQyxxREFBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbURBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSW1DO0FBQzVCLG9CQUFvQixLQUFxQyxHQUFHLDJEQUFtQixFQUFFLDBEQUFnQixFQUFFLHVEQUFlO0FBQ3pILFNBQVMsMERBQWdCO0FBQ3pCLFFBQVEsMERBQWdCO0FBQ3hCLFVBQVUsMERBQWdCO0FBQzFCLENBQUMsaUJBQWlCLENBQUk7QUFDZixzQkFBc0IsS0FBcUMsR0FBRywyREFBbUIsRUFBRSwwREFBZ0IsRUFBRSx1REFBZTtBQUMzSCxTQUFTLDBEQUFnQjtBQUN6QixRQUFRLDBEQUFnQjtBQUN4QixVQUFVLDBEQUFnQjtBQUMxQixDQUFDLEdBQUcsdURBQWU7QUFDbkIsU0FBUywwREFBZ0I7QUFDekIsYUFBYSwwREFBZ0I7QUFDN0IsZUFBZSwwREFBZ0I7QUFDL0IsUUFBUSwwREFBZ0I7QUFDeEIsWUFBWSwwREFBZ0I7QUFDNUIsY0FBYywwREFBZ0I7QUFDOUIsQ0FBQyxNQUFNLENBQUksQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNzAwZjNjZmI2NGJiZGE3ZDJhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdERlbGV0ZVRvYXN0ciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRvYXN0Q29udGFpbmVyXHJcbiAgICAgIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiXHJcbiAgICAgIGF1dG9DbG9zZT17MzAwMH1cclxuICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cclxuICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxyXG4gICAgICBjbG9zZU9uQ2xpY2tcclxuICAgICAgcnRsPXtmYWxzZX1cclxuICAgICAgcGF1c2VPbkZvY3VzTG9zc1xyXG4gICAgICBkcmFnZ2FibGVcclxuICAgICAgcGF1c2VPbkhvdmVyPXtmYWxzZX0+XHJcbiAgICAgIHt0b2FzdC5pbmZvKFwiRGVsZXRlZCBTdWNjZXNzZnVsbHlcIiwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZFxyXG4gICAgICB9KX1cclxuICAgIDwvVG9hc3RDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBFcnJvclRvYXN0ciA9ICh7IGVycm9yIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRvYXN0Q29udGFpbmVyXHJcbiAgICAgIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiXHJcbiAgICAgIGF1dG9DbG9zZT17MzAwMH1cclxuICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cclxuICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxyXG4gICAgICBjbG9zZU9uQ2xpY2tcclxuICAgICAgcnRsPXtmYWxzZX1cclxuICAgICAgcGF1c2VPbkZvY3VzTG9zc1xyXG4gICAgICBkcmFnZ2FibGVcclxuICAgICAgcGF1c2VPbkhvdmVyPXtmYWxzZX0+XHJcbiAgICAgIHt0b2FzdC5lcnJvcihlcnJvciwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1jZW50ZXJcIixcclxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZFxyXG4gICAgICB9KX1cclxuICAgIDwvVG9hc3RDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNc2dTZW50VG9hc3RyID0gKCkgPT4gKFxyXG4gIDxUb2FzdENvbnRhaW5lclxyXG4gICAgcG9zaXRpb249XCJib3R0b20tY2VudGVyXCJcclxuICAgIGF1dG9DbG9zZT17MzAwMH1cclxuICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XHJcbiAgICBuZXdlc3RPblRvcD17ZmFsc2V9XHJcbiAgICBjbG9zZU9uQ2xpY2tcclxuICAgIHJ0bD17ZmFsc2V9XHJcbiAgICBwYXVzZU9uRm9jdXNMb3NzXHJcbiAgICBkcmFnZ2FibGVcclxuICAgIHBhdXNlT25Ib3Zlcj17ZmFsc2V9PlxyXG4gICAge3RvYXN0LnN1Y2Nlc3MoXCJTZW50IHN1Y2Nlc3NmdWxseVwiLCB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1jZW50ZXJcIixcclxuICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgcHJvZ3Jlc3M6IHVuZGVmaW5lZFxyXG4gICAgfSl9XHJcbiAgPC9Ub2FzdENvbnRhaW5lcj5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIEljb24sXHJcbiAgICBEaXZpZGVyLFxyXG4gICAgU2VnbWVudCxcclxuICAgIEJ1dHRvbixcclxuICAgIFBvcHVwLFxyXG4gICAgSGVhZGVyLFxyXG4gICAgTW9kYWwsXHJcbiAgICBJbWFnZVxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgUG9zdENvbW1lbnRzIGZyb20gJy4vUG9zdENvbW1lbnRzJztcclxuaW1wb3J0IENvbW1lbnRJbnB1dEZpZWxkIGZyb20gJy4vQ29tbWVudElucHV0RmllbGQnO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiXHJcbmltcG9ydCBMaW5rICBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBkZWxldGVQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XHJcbmZ1bmN0aW9uIENhcmRQb3N0KHtwb3N0LHVzZXIsc2V0UG9zdHMsc2V0U2hvd1RvYXN0cn0pIHtcclxuICBcclxuICAgIGNvbnN0IFtsaWtlcyxzZXRMaWtlc109dXNlU3RhdGUocG9zdC5saWtlcyk7XHJcbiAgICBjb25zdCBpc0xpa2VkID0gXHJcbiAgICAgbGlrZXMubGVuZ3RoID4gMCAmJiBsaWtlcy5maWx0ZXIobGlrZT0+bGlrZS51c2VyID09PSB1c2VyLl9pZCkubGVuZ3RoID4gMDtcclxuICAgIGNvbnN0IFtjb21tZW50cyxzZXRDb21tZW50c109dXNlU3RhdGUocG9zdC5jb21tZW50cylcclxuICAgIGNvbnN0IHtlcnJvcixzZXRFcnJvcn0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBcclxuICBcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8U2VnbWVudCBiYXNpYz5cclxuICAgICAgICA8Q2FyZCBjb2xvcj1cImJsYWNrXCIgZmx1aWQ+XHJcbiAgICAgICAge3Bvc3QucGljVXJsICYmICggPEltYWdlIFxyXG4gICAgICAgIHNyYz17cG9zdC5waWNVcmx9IFxyXG4gICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19IFxyXG4gICAgICAgIGZsb2F0ZWQ9XCJsZWZ0XCJcclxuICAgICAgICB3cmFwcGVkIFxyXG4gICAgICAgIHVpPXtmYWxzZX0gXHJcbiAgICAgICAgYWx0PVwiUG9zdEltYWdlXCIgLz4pfVxyXG4gICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgIDxJbWFnZSBmbG9hdGVkPVwibGVmdFwiIHNyYz17cG9zdC51c2VyLnByb2ZpbGVQaWNVcmx9IGF2YXRhciBjaXJjdWxhciAvPlxyXG4gICAgICAgICB7KHVzZXIucm9sZT09PVwicm9vdFwiIHx8IHBvc3QudXNlci5faWQ9PT11c2VyLl9pZCkgJiYgKFxyXG4gICAgICAgICA8PlxyXG4gICAgICAgICA8UG9wdXAgXHJcbiAgICAgICAgIG9uPVwiY2xpY2tcIiBcclxuICAgICAgICAgcG9zaXRpb249XCJyaWdodFwiIFxyXG4gICAgICAgICB0cmlnZ2VyPXtcclxuICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgc3JjPVwiL2RlbGV0ZUljb24uc3ZnXCIgXHJcbiAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fSBcclxuICAgICAgICAgICBzaXplPVwibWluaVwiXHJcbiAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCIgLz5cclxuICAgICAgICB9PlxyXG4gICAgICAgIDxIZWFkZXIgYXM9XCJoNFwiIGNvbnRlbnQ9XCJBcmUgeW91IHN1cmU/XCIgLz5cclxuICAgICAgICA8cD5UaGlzIGFjdGlvbiBpcyBpcnJldmVyc2libGU8L3A+XHJcbiAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICBjb2xvcj1cInJlZFwiIFxyXG4gICAgICAgIGljb249XCJ0cmFzaFwiIFxyXG4gICAgICAgIGNvbnRlbnQ9XCJEZWxldGVcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVBvc3QocG9zdC5faWQsIHNldFBvc3RzLCBzZXRTaG93VG9hc3RyKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICA8L1BvcHVwPlxyXG4gICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgIDxhPntwb3N0LnVzZXIubmFtZX08L2E+XHJcbiAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG5cclxuICAgICAgIDxDYXJkLk1ldGE+e2NhbGN1bGF0ZVRpbWUocG9zdC5jcmVhdGVkQXQpfTwvQ2FyZC5NZXRhPlxyXG4gICAgICAgXHJcbiAgICAgICB7cG9zdC5sb2NhdGlvbiAmJiA8Q2FyZC5NZXRhIGNvbnRlbnQ9e3Bvc3QubG9jYXRpb259IC8+fVxyXG4gICAgICAgPENhcmQuRGVzY3JpcHRpb24gXHJcbiAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgIGZvbnRTaXplOlwiMzdweFwiLFxyXG4gICAgICAgICAgIGxldHRlclNwYWNpbmc6XCIwLjFweFwiLFxyXG4gICAgICAgICAgIHdvcmRTcGFjaW5nOlwiMC4zNXB4XCIgXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICB7cG9zdC50ZXh0fVxyXG4gICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcblxyXG4gICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICAgIDxJY29uIFxyXG4gICAgICAgICAgbmFtZT17aXNMaWtlZD8gXCJoZWFydFwiOlwiaGVhcnQgb3V0bGluZVwifVxyXG4gICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICB7bGlrZXMubGVuZ3RoPjAgJiYoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbmxpa2VzbGlzdFwiPlxyXG4gICAgICAgICAgICAgIHsgYCR7bGlrZXMubGVuZ3RofSAke2xpa2VzLmxlbmd0aD09PTE/XCJsaWtlXCI6XCJsaWtlc1wifWB9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8SWNvbiBcclxuICAgICAgICAgIG5hbWU9XCJjb21tZW50IG91dGxpbmVcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI3cHhcIn19XHJcbiAgICAgICAgICBjb2xvcj1cImJsdWVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmIFxyXG4gICAgICAgICAgIGNvbW1lbnRzLm1hcCgoY29tbWVudCxpKT0+XHJcbiAgICAgICAgICAgICAgIGk8MyAmJiAoXHJcbiAgICAgICAgICAgICAgIDxQb3N0Q29tbWVudHMgXHJcbiAgICAgICAgICAgICAgIGtleT17Y29tbWVudC5faWR9XHJcbiAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cclxuICAgICAgICAgICAgICAgLz4gKVxyXG4gICAgICAgICAgICl9XHJcbiAgICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDMgJiYgKFxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJWaWV3IE1vcmVcIiBjb2xvcj1cInRlYWxcIiBiYXNpYyBjaXJjdWxhciAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICAgICAgICAgIDxDb21tZW50SW5wdXRGaWVsZCBcclxuICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUG9zdFxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgQ3JlYXRlUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3QvQ3JlYXRlUG9zdCc7XHJcbmltcG9ydCBDYXJkUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3QvQ2FyZFBvc3QnO1xyXG5pbXBvcnQge1NlZ21lbnR9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQge3BhcnNlQ29va2llc30gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHtOb1Bvc3RzfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhXCI7XHJcbmltcG9ydCB7UG9zdERlbGV0ZVRvYXN0cn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1RvYXN0clwiO1xyXG5mdW5jdGlvbiBJbmRleCh7dXNlcixwb3N0c0RhdGEsZXJyb3JMb2FkaW5nfSl7XHJcbiAgIC8vIGNvbnNvbGUubG9nKHt1c2VyLHVzZXJGb2xsb3dTdGF0c30pO1xyXG4gICBjb25zb2xlLmxvZyhwb3N0c0RhdGEpXHJcbiAgIGNvbnN0IFtwb3N0cyxzZXRQb3N0c10gPSB1c2VTdGF0ZShwb3N0c0RhdGEpO1xyXG4gICBjb25zdCBbc2hvd1RvYXN0cixzZXRTaG93VG9hc3RyXT11c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICBcclxuICAgXHJcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgZG9jdW1lbnQudGl0bGUgPSBgV2VsY29tZSwgJHt1c2VyLm5hbWUuc3BsaXQoXCIgXCIpWzBdfWA7XHJcblxyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNob3dUb2FzdHIgJiYgc2V0VGltZW91dCgoKSA9PiBzZXRTaG93VG9hc3RyKGZhbHNlKSwgMzAwMCk7XHJcbiAgICAgIH0sIFtzaG93VG9hc3RyXSk7XHJcbiAgICBcclxuXHJcbiAgICBpZihwb3N0cy5sZW5ndGg9PTAgfHwgZXJyb3JMb2FkaW5nKSByZXR1cm4gPE5vUG9zdHMgLz5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICBcclxuICAgIDw+XHJcbiAgICB7c2hvd1RvYXN0ciAmJiA8UG9zdERlbGV0ZVRvYXN0ciAvPn1cclxuICAgIDxTZWdtZW50PlxyXG4gICAgPENyZWF0ZVBvc3QgdXNlcj17dXNlcn0gc2V0UG9zdHM9e3NldFBvc3RzfSAvPlxyXG4gICAgY29uc29sZS5sb2cocG9zdHMpXHJcbiAgICB7cG9zdHMubWFwKHBvc3Q9Pig8Q2FyZFBvc3QgXHJcbiAgICBrZXkgPSB7cG9zdC5faWR9XHJcbiAgICBwb3N0PXtwb3N0fVxyXG4gICAgdXNlcj17dXNlcn1cclxuICAgIHNldFBvc3RzPXtzZXRQb3N0c31cclxuICAgIHNldFNob3dUb2FzdHI9e3NldFNob3dUb2FzdHJ9IFxyXG4gICAgLz4pKX1cclxuICAgIDwvU2VnbWVudD5cclxuICAgIDwvPlxyXG5cclxuXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoY3R4KT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3Qge3Rva2VufSA9IHBhcnNlQ29va2llcyhjdHgpXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCx7XHJcbiAgICAgICAgaGVhZGVyczp7QXV0aG9yaXphdGlvbjp0b2tlbn1cclxuICAgIH0pXHJcbiAgICByZXR1cm4ge3Bvc3RzRGF0YTpyZXMuZGF0YX07XHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVycm9yTG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwiaW1wb3J0IGhhc0NsYXNzIGZyb20gJy4vaGFzQ2xhc3MnO1xuLyoqXG4gKiBBZGRzIGEgQ1NTIGNsYXNzIHRvIGEgZ2l2ZW4gZWxlbWVudC5cbiAqIFxuICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSBjbGFzc05hbWUgdGhlIENTUyBjbGFzcyBuYW1lXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7ZWxzZSBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkpIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc05hbWU7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJykgKyBcIiBcIiArIGNsYXNzTmFtZSk7XG59IiwiLyoqXG4gKiBDaGVja3MgaWYgYSBnaXZlbiBlbGVtZW50IGhhcyBhIENTUyBjbGFzcy5cbiAqIFxuICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSBjbGFzc05hbWUgdGhlIENTUyBjbGFzcyBuYW1lXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHJldHVybiAhIWNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICByZXR1cm4gKFwiIFwiICsgKGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgZWxlbWVudC5jbGFzc05hbWUpICsgXCIgXCIpLmluZGV4T2YoXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIikgIT09IC0xO1xufSIsImZ1bmN0aW9uIHJlcGxhY2VDbGFzc05hbWUob3JpZ0NsYXNzLCBjbGFzc1RvUmVtb3ZlKSB7XG4gIHJldHVybiBvcmlnQ2xhc3MucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMpXCIgKyBjbGFzc1RvUmVtb3ZlICsgXCIoPzpcXFxcc3wkKVwiLCAnZycpLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuLyoqXG4gKiBSZW1vdmVzIGEgQ1NTIGNsYXNzIGZyb20gYSBnaXZlbiBlbGVtZW50LlxuICogXG4gKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudFxuICogQHBhcmFtIGNsYXNzTmFtZSB0aGUgQ1NTIGNsYXNzIG5hbWVcbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJywgY2xhc3NOYW1lKSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBpc1ZhbGlkRWxlbWVudCwgY3JlYXRlRWxlbWVudCwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIGNsb25lRWxlbWVudCwgdXNlU3RhdGUsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IGN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBpc051bSh2KSB7XG4gIHJldHVybiB0eXBlb2YgdiA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHYpO1xufVxuZnVuY3Rpb24gaXNCb29sKHYpIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnYm9vbGVhbic7XG59XG5mdW5jdGlvbiBpc1N0cih2KSB7XG4gIHJldHVybiB0eXBlb2YgdiA9PT0gJ3N0cmluZyc7XG59XG5mdW5jdGlvbiBpc0ZuKHYpIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gcGFyc2VDbGFzc05hbWUodikge1xuICByZXR1cm4gaXNTdHIodikgfHwgaXNGbih2KSA/IHYgOiBudWxsO1xufVxuZnVuY3Rpb24gb2JqZWN0VmFsdWVzKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfSk7XG59XG5mdW5jdGlvbiBoYXNUb2FzdElkKHRvYXN0SWQpIHtcbiAgcmV0dXJuIHRvYXN0SWQgPT09IDAgfHwgdG9hc3RJZDtcbn1cbmZ1bmN0aW9uIGdldEF1dG9DbG9zZURlbGF5KHRvYXN0QXV0b0Nsb3NlLCBjb250YWluZXJBdXRvQ2xvc2UpIHtcbiAgcmV0dXJuIHRvYXN0QXV0b0Nsb3NlID09PSBmYWxzZSB8fCBpc051bSh0b2FzdEF1dG9DbG9zZSkgJiYgdG9hc3RBdXRvQ2xvc2UgPiAwID8gdG9hc3RBdXRvQ2xvc2UgOiBjb250YWluZXJBdXRvQ2xvc2U7XG59XG52YXIgY2FuVXNlRG9tID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmZ1bmN0aW9uIGNhbkJlUmVuZGVyZWQoY29udGVudCkge1xuICByZXR1cm4gaXNWYWxpZEVsZW1lbnQoY29udGVudCkgfHwgaXNTdHIoY29udGVudCkgfHwgaXNGbihjb250ZW50KSB8fCBpc051bShjb250ZW50KTtcbn1cblxudmFyIFBPU0lUSU9OID0ge1xuICBUT1BfTEVGVDogJ3RvcC1sZWZ0JyxcbiAgVE9QX1JJR0hUOiAndG9wLXJpZ2h0JyxcbiAgVE9QX0NFTlRFUjogJ3RvcC1jZW50ZXInLFxuICBCT1RUT01fTEVGVDogJ2JvdHRvbS1sZWZ0JyxcbiAgQk9UVE9NX1JJR0hUOiAnYm90dG9tLXJpZ2h0JyxcbiAgQk9UVE9NX0NFTlRFUjogJ2JvdHRvbS1jZW50ZXInXG59O1xudmFyIFRZUEUgPSB7XG4gIElORk86ICdpbmZvJyxcbiAgU1VDQ0VTUzogJ3N1Y2Nlc3MnLFxuICBXQVJOSU5HOiAnd2FybmluZycsXG4gIEVSUk9SOiAnZXJyb3InLFxuICBERUZBVUxUOiAnZGVmYXVsdCcsXG4gIERBUks6ICdkYXJrJ1xufTtcblxuLyoqXHJcbiAqIFVzZWQgdG8gY29sbGFwc2UgdG9hc3QgYWZ0ZXIgZXhpdCBhbmltYXRpb25cclxuICovXG5mdW5jdGlvbiBjb2xsYXBzZVRvYXN0KG5vZGUsIGRvbmUsIGR1cmF0aW9uXG4vKiBDT0xMQVBTRV9EVVJBVElPTiAqL1xuKSB7XG4gIGlmIChkdXJhdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgZHVyYXRpb24gPSAzMDA7XG4gIH1cblxuICB2YXIgaGVpZ2h0ID0gbm9kZS5zY3JvbGxIZWlnaHQ7XG4gIHZhciBzdHlsZSA9IG5vZGUuc3R5bGU7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgc3R5bGUubWluSGVpZ2h0ID0gJ2luaXRpYWwnO1xuICAgIHN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIFwiICsgZHVyYXRpb24gKyBcIm1zXCI7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgIHN0eWxlLnBhZGRpbmcgPSAnMCc7XG4gICAgICBzdHlsZS5tYXJnaW4gPSAnMCc7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGRvbmUoKTtcbiAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNzc1RyYW5zaXRpb24oX3JlZikge1xuICB2YXIgZW50ZXIgPSBfcmVmLmVudGVyLFxuICAgICAgZXhpdCA9IF9yZWYuZXhpdCxcbiAgICAgIF9yZWYkZHVyYXRpb24gPSBfcmVmLmR1cmF0aW9uLFxuICAgICAgZHVyYXRpb24gPSBfcmVmJGR1cmF0aW9uID09PSB2b2lkIDAgPyA3NTAgOiBfcmVmJGR1cmF0aW9uLFxuICAgICAgX3JlZiRhcHBlbmRQb3NpdGlvbiA9IF9yZWYuYXBwZW5kUG9zaXRpb24sXG4gICAgICBhcHBlbmRQb3NpdGlvbiA9IF9yZWYkYXBwZW5kUG9zaXRpb24gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhcHBlbmRQb3NpdGlvbixcbiAgICAgIF9yZWYkY29sbGFwc2UgPSBfcmVmLmNvbGxhcHNlLFxuICAgICAgY29sbGFwc2UgPSBfcmVmJGNvbGxhcHNlID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRjb2xsYXBzZSxcbiAgICAgIF9yZWYkY29sbGFwc2VEdXJhdGlvbiA9IF9yZWYuY29sbGFwc2VEdXJhdGlvbixcbiAgICAgIGNvbGxhcHNlRHVyYXRpb24gPSBfcmVmJGNvbGxhcHNlRHVyYXRpb24gPT09IHZvaWQgMCA/IDMwMCA6IF9yZWYkY29sbGFwc2VEdXJhdGlvbjtcbiAgdmFyIGVudGVyRHVyYXRpb24sIGV4aXREdXJhdGlvbjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShkdXJhdGlvbikgJiYgZHVyYXRpb24ubGVuZ3RoID09PSAyKSB7XG4gICAgZW50ZXJEdXJhdGlvbiA9IGR1cmF0aW9uWzBdO1xuICAgIGV4aXREdXJhdGlvbiA9IGR1cmF0aW9uWzFdO1xuICB9IGVsc2Uge1xuICAgIGVudGVyRHVyYXRpb24gPSBleGl0RHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBUb2FzdFRyYW5zaXRpb24oX3JlZjIpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbixcbiAgICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgICAgcHJldmVudEV4aXRUcmFuc2l0aW9uID0gX3JlZjIucHJldmVudEV4aXRUcmFuc2l0aW9uLFxuICAgICAgICBkb25lID0gX3JlZjIuZG9uZSxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgW1wiY2hpbGRyZW5cIiwgXCJwb3NpdGlvblwiLCBcInByZXZlbnRFeGl0VHJhbnNpdGlvblwiLCBcImRvbmVcIl0pO1xuXG4gICAgdmFyIGVudGVyQ2xhc3NOYW1lID0gYXBwZW5kUG9zaXRpb24gPyBlbnRlciArIFwiLS1cIiArIHBvc2l0aW9uIDogZW50ZXI7XG4gICAgdmFyIGV4aXRDbGFzc05hbWUgPSBhcHBlbmRQb3NpdGlvbiA/IGV4aXQgKyBcIi0tXCIgKyBwb3NpdGlvbiA6IGV4aXQ7XG5cbiAgICB2YXIgb25FbnRlciA9IGZ1bmN0aW9uIG9uRW50ZXIoKSB7XG4gICAgICB2YXIgbm9kZSA9IHByb3BzLm5vZGVSZWYuY3VycmVudDtcblxuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGVudGVyQ2xhc3NOYW1lKTtcbiAgICAgICAgbm9kZS5zdHlsZS5hbmltYXRpb25GaWxsTW9kZSA9ICdmb3J3YXJkcyc7XG4gICAgICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBlbnRlckR1cmF0aW9uICsgXCJtc1wiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgb25FbnRlcmVkID0gZnVuY3Rpb24gb25FbnRlcmVkKCkge1xuICAgICAgdmFyIG5vZGUgPSBwcm9wcy5ub2RlUmVmLmN1cnJlbnQ7XG5cbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShlbnRlckNsYXNzTmFtZSk7XG4gICAgICAgIG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2FuaW1hdGlvbkZpbGxNb2RlJyk7XG4gICAgICAgIG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2FuaW1hdGlvbkR1cmF0aW9uJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBvbkV4aXRlZCA9IGZ1bmN0aW9uIG9uRXhpdGVkKCkge1xuICAgICAgdmFyIG5vZGUgPSBwcm9wcy5ub2RlUmVmLmN1cnJlbnQ7XG5cbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgb25FeGl0ZWQpO1xuICAgICAgICBjb2xsYXBzZSA/IGNvbGxhcHNlVG9hc3Qobm9kZSwgZG9uZSwgY29sbGFwc2VEdXJhdGlvbikgOiBkb25lKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBvbkV4aXQgPSBmdW5jdGlvbiBvbkV4aXQoKSB7XG4gICAgICB2YXIgbm9kZSA9IHByb3BzLm5vZGVSZWYuY3VycmVudDtcblxuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGV4aXRDbGFzc05hbWUpO1xuICAgICAgICBub2RlLnN0eWxlLmFuaW1hdGlvbkZpbGxNb2RlID0gJ2ZvcndhcmRzJztcbiAgICAgICAgbm9kZS5zdHlsZS5hbmltYXRpb25EdXJhdGlvbiA9IGV4aXREdXJhdGlvbiArIFwibXNcIjtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBvbkV4aXRlZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFRyYW5zaXRpb24sIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICB0aW1lb3V0OiBwcmV2ZW50RXhpdFRyYW5zaXRpb24gPyBjb2xsYXBzZSA/IGNvbGxhcHNlRHVyYXRpb24gOiA1MFxuICAgICAgLyogREVCT1VOQ0VfRFVSQVRJT04gKi9cbiAgICAgIDoge1xuICAgICAgICBlbnRlcjogZW50ZXJEdXJhdGlvbixcbiAgICAgICAgZXhpdDogY29sbGFwc2UgPyBleGl0RHVyYXRpb24gKyBjb2xsYXBzZUR1cmF0aW9uIDogZXhpdER1cmF0aW9uICsgNTBcbiAgICAgICAgLyogREVCT1VOQ0VfRFVSQVRJT04gKi9cblxuICAgICAgfSxcbiAgICAgIG9uRW50ZXI6IG9uRW50ZXIsXG4gICAgICBvbkVudGVyZWQ6IG9uRW50ZXJlZCxcbiAgICAgIG9uRXhpdDogcHJldmVudEV4aXRUcmFuc2l0aW9uID8gb25FeGl0ZWQgOiBvbkV4aXQsXG4gICAgICB1bm1vdW50T25FeGl0OiB0cnVlXG4gICAgfSksIGNoaWxkcmVuKTtcbiAgfTtcbn1cblxudmFyIGV2ZW50TWFuYWdlciA9IHtcbiAgbGlzdDogLyojX19QVVJFX18qL25ldyBNYXAoKSxcbiAgZW1pdFF1ZXVlOiAvKiNfX1BVUkVfXyovbmV3IE1hcCgpLFxuICBvbjogZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0LmhhcyhldmVudCkgfHwgdGhpcy5saXN0LnNldChldmVudCwgW10pO1xuICAgIHRoaXMubGlzdC5nZXQoZXZlbnQpLnB1c2goY2FsbGJhY2spO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBvZmY6IGZ1bmN0aW9uIG9mZihldmVudCwgY2FsbGJhY2spIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciBjYiA9IHRoaXMubGlzdC5nZXQoZXZlbnQpLmZpbHRlcihmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIGNiICE9PSBjYWxsYmFjaztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0LnNldChldmVudCwgY2IpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5saXN0W1wiZGVsZXRlXCJdKGV2ZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgY2FuY2VsRW1pdDogZnVuY3Rpb24gY2FuY2VsRW1pdChldmVudCkge1xuICAgIHZhciB0aW1lcnMgPSB0aGlzLmVtaXRRdWV1ZS5nZXQoZXZlbnQpO1xuXG4gICAgaWYgKHRpbWVycykge1xuICAgICAgdGltZXJzLmZvckVhY2goZnVuY3Rpb24gKHRpbWVyKSB7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVtaXRRdWV1ZVtcImRlbGV0ZVwiXShldmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXHJcbiAgICogRW5xdWV1ZSB0aGUgZXZlbnQgYXQgdGhlIGVuZCBvZiB0aGUgY2FsbCBzdGFja1xyXG4gICAqIERvaW5nIHNvIGxldCB0aGUgdXNlciBjYWxsIHRvYXN0IGFzIGZvbGxvdzpcclxuICAgKiB0b2FzdCgnMScpXHJcbiAgICogdG9hc3QoJzInKVxyXG4gICAqIHRvYXN0KCczJylcclxuICAgKiBXaXRob3V0IHNldFRpbWVtb3V0IHRoZSBjb2RlIGFib3ZlIHdpbGwgbm90IHdvcmtcclxuICAgKi9cbiAgZW1pdDogZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB0aGlzLmxpc3QuaGFzKGV2ZW50KSAmJiB0aGlzLmxpc3QuZ2V0KGV2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY2FsbGJhY2suYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgIH0sIDApO1xuICAgICAgX3RoaXMuZW1pdFF1ZXVlLmhhcyhldmVudCkgfHwgX3RoaXMuZW1pdFF1ZXVlLnNldChldmVudCwgW10pO1xuXG4gICAgICBfdGhpcy5lbWl0UXVldWUuZ2V0KGV2ZW50KS5wdXNoKHRpbWVyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXHJcbiAqIGB1c2VLZWVwZXJgIGlzIGEgaGVscGVyIGFyb3VuZCBgdXNlUmVmYC5cclxuICpcclxuICogWW91IGRvbid0IG5lZWQgdG8gYWNjZXNzIHRoZSBgLmN1cnJlbnRgcHJvcGVydHkgdG8gZ2V0IHRoZSB2YWx1ZVxyXG4gKiBJZiByZWZyZXNoIGlzIHNldCB0byB0cnVlLiBUaGUgcmVmIHdpbGwgYmUgdXBkYXRlZCBldmVyeSByZW5kZXJcclxuICovXG5cbmZ1bmN0aW9uIHVzZUtlZXBlcihhcmcsIHJlZnJlc2gpIHtcbiAgaWYgKHJlZnJlc2ggPT09IHZvaWQgMCkge1xuICAgIHJlZnJlc2ggPSBmYWxzZTtcbiAgfVxuXG4gIHZhciByZWYgPSB1c2VSZWYoYXJnKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocmVmcmVzaCkgcmVmLmN1cnJlbnQgPSBhcmc7XG4gIH0pO1xuICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREJzpcbiAgICAgIHJldHVybiBbXS5jb25jYXQoc3RhdGUsIFthY3Rpb24udG9hc3RJZF0pLmZpbHRlcihmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGlkICE9PSBhY3Rpb24uc3RhbGVJZDtcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUkVNT1ZFJzpcbiAgICAgIHJldHVybiBoYXNUb2FzdElkKGFjdGlvbi50b2FzdElkKSA/IHN0YXRlLmZpbHRlcihmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGlkICE9PSBhY3Rpb24udG9hc3RJZDtcbiAgICAgIH0pIDogW107XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlVG9hc3RDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIF91c2VSZWR1Y2VyID0gdXNlUmVkdWNlcihmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4ICsgMTtcbiAgfSwgMCksXG4gICAgICBmb3JjZVVwZGF0ZSA9IF91c2VSZWR1Y2VyWzFdO1xuXG4gIHZhciBfdXNlUmVkdWNlcjIgPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIFtdKSxcbiAgICAgIHRvYXN0ID0gX3VzZVJlZHVjZXIyWzBdLFxuICAgICAgZGlzcGF0Y2ggPSBfdXNlUmVkdWNlcjJbMV07XG5cbiAgdmFyIGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIHRvYXN0Q291bnQgPSB1c2VLZWVwZXIoMCk7XG4gIHZhciBxdWV1ZSA9IHVzZUtlZXBlcihbXSk7XG4gIHZhciBjb2xsZWN0aW9uID0gdXNlS2VlcGVyKHt9KTtcbiAgdmFyIGluc3RhbmNlID0gdXNlS2VlcGVyKHtcbiAgICB0b2FzdEtleTogMSxcbiAgICBkaXNwbGF5ZWRUb2FzdDogMCxcbiAgICBwcm9wczogcHJvcHMsXG4gICAgY29udGFpbmVySWQ6IG51bGwsXG4gICAgaXNUb2FzdEFjdGl2ZTogaXNUb2FzdEFjdGl2ZSxcbiAgICBnZXRUb2FzdDogZnVuY3Rpb24gZ2V0VG9hc3QoaWQpIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uW2lkXSB8fCBudWxsO1xuICAgIH1cbiAgfSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaW5zdGFuY2UuY29udGFpbmVySWQgPSBwcm9wcy5jb250YWluZXJJZDtcbiAgICBldmVudE1hbmFnZXIuY2FuY2VsRW1pdCgzXG4gICAgLyogV2lsbFVubW91bnQgKi9cbiAgICApLm9uKDBcbiAgICAvKiBTaG93ICovXG4gICAgLCBidWlsZFRvYXN0KS5vbigxXG4gICAgLyogQ2xlYXIgKi9cbiAgICAsIGZ1bmN0aW9uICh0b2FzdElkKSB7XG4gICAgICByZXR1cm4gY29udGFpbmVyUmVmLmN1cnJlbnQgJiYgcmVtb3ZlVG9hc3QodG9hc3RJZCk7XG4gICAgfSkub24oNVxuICAgIC8qIENsZWFyV2FpdGluZ1F1ZXVlICovXG4gICAgLCBjbGVhcldhaXRpbmdRdWV1ZSkuZW1pdCgyXG4gICAgLyogRGlkTW91bnQgKi9cbiAgICAsIGluc3RhbmNlKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGV2ZW50TWFuYWdlci5lbWl0KDNcbiAgICAgIC8qIFdpbGxVbm1vdW50ICovXG4gICAgICAsIGluc3RhbmNlKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaW5zdGFuY2UuaXNUb2FzdEFjdGl2ZSA9IGlzVG9hc3RBY3RpdmU7XG4gICAgaW5zdGFuY2UuZGlzcGxheWVkVG9hc3QgPSB0b2FzdC5sZW5ndGg7XG4gICAgZXZlbnRNYW5hZ2VyLmVtaXQoNFxuICAgIC8qIENoYW5nZSAqL1xuICAgICwgdG9hc3QubGVuZ3RoLCBwcm9wcy5jb250YWluZXJJZCk7XG4gIH0sIFt0b2FzdF0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGluc3RhbmNlLnByb3BzID0gcHJvcHM7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGlzVG9hc3RBY3RpdmUoaWQpIHtcbiAgICByZXR1cm4gdG9hc3QuaW5kZXhPZihpZCkgIT09IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJXYWl0aW5nUXVldWUoX3JlZikge1xuICAgIHZhciBjb250YWluZXJJZCA9IF9yZWYuY29udGFpbmVySWQ7XG4gICAgdmFyIF9pbnN0YW5jZSRwcm9wcyA9IGluc3RhbmNlLnByb3BzLFxuICAgICAgICBsaW1pdCA9IF9pbnN0YW5jZSRwcm9wcy5saW1pdCxcbiAgICAgICAgZW5hYmxlTXVsdGlDb250YWluZXIgPSBfaW5zdGFuY2UkcHJvcHMuZW5hYmxlTXVsdGlDb250YWluZXI7XG5cbiAgICBpZiAobGltaXQgJiYgKCFjb250YWluZXJJZCB8fCBpbnN0YW5jZS5jb250YWluZXJJZCA9PT0gY29udGFpbmVySWQgJiYgZW5hYmxlTXVsdGlDb250YWluZXIpKSB7XG4gICAgICB0b2FzdENvdW50IC09IHF1ZXVlLmxlbmd0aDtcbiAgICAgIHF1ZXVlID0gW107XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVG9hc3QodG9hc3RJZCkge1xuICAgIHZhciBxdWV1ZUxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB0b2FzdENvdW50ID0gaGFzVG9hc3RJZCh0b2FzdElkKSA/IHRvYXN0Q291bnQgLSAxIDogdG9hc3RDb3VudCAtIGluc3RhbmNlLmRpc3BsYXllZFRvYXN0O1xuICAgIGlmICh0b2FzdENvdW50IDwgMCkgdG9hc3RDb3VudCA9IDA7XG5cbiAgICBpZiAocXVldWVMZW4gPiAwKSB7XG4gICAgICB2YXIgZnJlZVNsb3QgPSBoYXNUb2FzdElkKHRvYXN0SWQpID8gMSA6IGluc3RhbmNlLnByb3BzLmxpbWl0O1xuXG4gICAgICBpZiAocXVldWVMZW4gPT09IDEgfHwgZnJlZVNsb3QgPT09IDEpIHtcbiAgICAgICAgaW5zdGFuY2UuZGlzcGxheWVkVG9hc3QrKztcbiAgICAgICAgZGVxdWV1ZVRvYXN0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdG9EZXF1ZXVlID0gZnJlZVNsb3QgPiBxdWV1ZUxlbiA/IHF1ZXVlTGVuIDogZnJlZVNsb3Q7XG4gICAgICAgIGluc3RhbmNlLmRpc3BsYXllZFRvYXN0ID0gdG9EZXF1ZXVlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9EZXF1ZXVlOyBpKyspIHtcbiAgICAgICAgICBkZXF1ZXVlVG9hc3QoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdSRU1PVkUnLFxuICAgICAgdG9hc3RJZDogdG9hc3RJZFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVxdWV1ZVRvYXN0KCkge1xuICAgIHZhciBfcXVldWUkc2hpZnQgPSBxdWV1ZS5zaGlmdCgpLFxuICAgICAgICB0b2FzdENvbnRlbnQgPSBfcXVldWUkc2hpZnQudG9hc3RDb250ZW50LFxuICAgICAgICB0b2FzdFByb3BzID0gX3F1ZXVlJHNoaWZ0LnRvYXN0UHJvcHMsXG4gICAgICAgIHN0YWxlSWQgPSBfcXVldWUkc2hpZnQuc3RhbGVJZDsgLy8gZW5zdXJlIHRoYXQgZXhpdCB0cmFuc2l0aW9uIGhhcyBiZWVuIGNvbXBsZXRlZCwgaGVuY2UgdGhlIHRpbWVvdXRcblxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBlbmRUb2FzdCh0b2FzdENvbnRlbnQsIHRvYXN0UHJvcHMsIHN0YWxlSWQpO1xuICAgIH0sIDUwMCk7XG4gIH1cbiAgLyoqXHJcbiAgICogY2hlY2sgaWYgYSBjb250YWluZXIgaXMgYXR0YWNoZWQgdG8gdGhlIGRvbVxyXG4gICAqIGNoZWNrIGZvciBtdWx0aS1jb250YWluZXIsIGJ1aWxkIG9ubHkgaWYgYXNzb2NpYXRlZFxyXG4gICAqIGNoZWNrIGZvciBkdXBsaWNhdGUgdG9hc3RJZCBpZiBubyB1cGRhdGVcclxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGlzTm90VmFsaWQoX3JlZjIpIHtcbiAgICB2YXIgY29udGFpbmVySWQgPSBfcmVmMi5jb250YWluZXJJZCxcbiAgICAgICAgdG9hc3RJZCA9IF9yZWYyLnRvYXN0SWQsXG4gICAgICAgIHVwZGF0ZUlkID0gX3JlZjIudXBkYXRlSWQ7XG4gICAgcmV0dXJuICFjb250YWluZXJSZWYuY3VycmVudCB8fCBpbnN0YW5jZS5wcm9wcy5lbmFibGVNdWx0aUNvbnRhaW5lciAmJiBjb250YWluZXJJZCAhPT0gaW5zdGFuY2UucHJvcHMuY29udGFpbmVySWQgfHwgaW5zdGFuY2UuaXNUb2FzdEFjdGl2ZSh0b2FzdElkKSAmJiB1cGRhdGVJZCA9PSBudWxsID8gdHJ1ZSA6IGZhbHNlO1xuICB9IC8vIHRoaXMgZnVuY3Rpb24gYW5kIGFsbCB0aGUgZnVuY3Rpb24gY2FsbGVkIGluc2lkZSBuZWVkcyB0byByZWx5IG9uIHJlZihgdXNlS2VlcGVyYClcblxuXG4gIGZ1bmN0aW9uIGJ1aWxkVG9hc3QoY29udGVudCwgX3JlZjMpIHtcbiAgICB2YXIgZGVsYXkgPSBfcmVmMy5kZWxheSxcbiAgICAgICAgc3RhbGVJZCA9IF9yZWYzLnN0YWxlSWQsXG4gICAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMywgW1wiZGVsYXlcIiwgXCJzdGFsZUlkXCJdKTtcblxuICAgIGlmICghY2FuQmVSZW5kZXJlZChjb250ZW50KSB8fCBpc05vdFZhbGlkKG9wdGlvbnMpKSByZXR1cm47XG4gICAgdmFyIHRvYXN0SWQgPSBvcHRpb25zLnRvYXN0SWQsXG4gICAgICAgIHVwZGF0ZUlkID0gb3B0aW9ucy51cGRhdGVJZDtcbiAgICB2YXIgcHJvcHMgPSBpbnN0YW5jZS5wcm9wcyxcbiAgICAgICAgaXNUb2FzdEFjdGl2ZSA9IGluc3RhbmNlLmlzVG9hc3RBY3RpdmU7XG5cbiAgICB2YXIgY2xvc2VUb2FzdCA9IGZ1bmN0aW9uIGNsb3NlVG9hc3QoKSB7XG4gICAgICByZXR1cm4gcmVtb3ZlVG9hc3QodG9hc3RJZCk7XG4gICAgfTtcblxuICAgIHZhciBpc05vdEFuVXBkYXRlID0gIWlzVG9hc3RBY3RpdmUodG9hc3RJZCk7XG4gICAgaWYgKGlzTm90QW5VcGRhdGUpIHRvYXN0Q291bnQrKztcbiAgICB2YXIgdG9hc3RQcm9wcyA9IHtcbiAgICAgIHRvYXN0SWQ6IHRvYXN0SWQsXG4gICAgICB1cGRhdGVJZDogdXBkYXRlSWQsXG4gICAgICBrZXk6IG9wdGlvbnMua2V5IHx8IGluc3RhbmNlLnRvYXN0S2V5KyssXG4gICAgICB0eXBlOiBvcHRpb25zLnR5cGUsXG4gICAgICBjbG9zZVRvYXN0OiBjbG9zZVRvYXN0LFxuICAgICAgY2xvc2VCdXR0b246IG9wdGlvbnMuY2xvc2VCdXR0b24sXG4gICAgICBydGw6IHByb3BzLnJ0bCxcbiAgICAgIHBvc2l0aW9uOiBvcHRpb25zLnBvc2l0aW9uIHx8IHByb3BzLnBvc2l0aW9uLFxuICAgICAgdHJhbnNpdGlvbjogb3B0aW9ucy50cmFuc2l0aW9uIHx8IHByb3BzLnRyYW5zaXRpb24sXG4gICAgICBjbGFzc05hbWU6IHBhcnNlQ2xhc3NOYW1lKG9wdGlvbnMuY2xhc3NOYW1lIHx8IHByb3BzLnRvYXN0Q2xhc3NOYW1lKSxcbiAgICAgIGJvZHlDbGFzc05hbWU6IHBhcnNlQ2xhc3NOYW1lKG9wdGlvbnMuYm9keUNsYXNzTmFtZSB8fCBwcm9wcy5ib2R5Q2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiBvcHRpb25zLnN0eWxlIHx8IHByb3BzLnRvYXN0U3R5bGUsXG4gICAgICBib2R5U3R5bGU6IG9wdGlvbnMuYm9keVN0eWxlIHx8IHByb3BzLmJvZHlTdHlsZSxcbiAgICAgIG9uQ2xpY2s6IG9wdGlvbnMub25DbGljayB8fCBwcm9wcy5vbkNsaWNrLFxuICAgICAgcGF1c2VPbkhvdmVyOiBpc0Jvb2wob3B0aW9ucy5wYXVzZU9uSG92ZXIpID8gb3B0aW9ucy5wYXVzZU9uSG92ZXIgOiBwcm9wcy5wYXVzZU9uSG92ZXIsXG4gICAgICBwYXVzZU9uRm9jdXNMb3NzOiBpc0Jvb2wob3B0aW9ucy5wYXVzZU9uRm9jdXNMb3NzKSA/IG9wdGlvbnMucGF1c2VPbkZvY3VzTG9zcyA6IHByb3BzLnBhdXNlT25Gb2N1c0xvc3MsXG4gICAgICBkcmFnZ2FibGU6IGlzQm9vbChvcHRpb25zLmRyYWdnYWJsZSkgPyBvcHRpb25zLmRyYWdnYWJsZSA6IHByb3BzLmRyYWdnYWJsZSxcbiAgICAgIGRyYWdnYWJsZVBlcmNlbnQ6IGlzTnVtKG9wdGlvbnMuZHJhZ2dhYmxlUGVyY2VudCkgPyBvcHRpb25zLmRyYWdnYWJsZVBlcmNlbnQgOiBwcm9wcy5kcmFnZ2FibGVQZXJjZW50LFxuICAgICAgY2xvc2VPbkNsaWNrOiBpc0Jvb2wob3B0aW9ucy5jbG9zZU9uQ2xpY2spID8gb3B0aW9ucy5jbG9zZU9uQ2xpY2sgOiBwcm9wcy5jbG9zZU9uQ2xpY2ssXG4gICAgICBwcm9ncmVzc0NsYXNzTmFtZTogcGFyc2VDbGFzc05hbWUob3B0aW9ucy5wcm9ncmVzc0NsYXNzTmFtZSB8fCBwcm9wcy5wcm9ncmVzc0NsYXNzTmFtZSksXG4gICAgICBwcm9ncmVzc1N0eWxlOiBvcHRpb25zLnByb2dyZXNzU3R5bGUgfHwgcHJvcHMucHJvZ3Jlc3NTdHlsZSxcbiAgICAgIGF1dG9DbG9zZTogZ2V0QXV0b0Nsb3NlRGVsYXkob3B0aW9ucy5hdXRvQ2xvc2UsIHByb3BzLmF1dG9DbG9zZSksXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGlzQm9vbChvcHRpb25zLmhpZGVQcm9ncmVzc0JhcikgPyBvcHRpb25zLmhpZGVQcm9ncmVzc0JhciA6IHByb3BzLmhpZGVQcm9ncmVzc0JhcixcbiAgICAgIHByb2dyZXNzOiBvcHRpb25zLnByb2dyZXNzLFxuICAgICAgcm9sZTogaXNTdHIob3B0aW9ucy5yb2xlKSA/IG9wdGlvbnMucm9sZSA6IHByb3BzLnJvbGUsXG4gICAgICBkZWxldGVUb2FzdDogZnVuY3Rpb24gZGVsZXRlVG9hc3QoKSB7XG4gICAgICAgIHJlbW92ZUZyb21Db2xsZWN0aW9uKHRvYXN0SWQpO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGlzRm4ob3B0aW9ucy5vbk9wZW4pKSB0b2FzdFByb3BzLm9uT3BlbiA9IG9wdGlvbnMub25PcGVuO1xuICAgIGlmIChpc0ZuKG9wdGlvbnMub25DbG9zZSkpIHRvYXN0UHJvcHMub25DbG9zZSA9IG9wdGlvbnMub25DbG9zZTtcbiAgICB2YXIgY2xvc2VCdXR0b24gPSBwcm9wcy5jbG9zZUJ1dHRvbjtcblxuICAgIGlmIChvcHRpb25zLmNsb3NlQnV0dG9uID09PSBmYWxzZSB8fCBjYW5CZVJlbmRlcmVkKG9wdGlvbnMuY2xvc2VCdXR0b24pKSB7XG4gICAgICBjbG9zZUJ1dHRvbiA9IG9wdGlvbnMuY2xvc2VCdXR0b247XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmNsb3NlQnV0dG9uID09PSB0cnVlKSB7XG4gICAgICBjbG9zZUJ1dHRvbiA9IGNhbkJlUmVuZGVyZWQocHJvcHMuY2xvc2VCdXR0b24pID8gcHJvcHMuY2xvc2VCdXR0b24gOiB0cnVlO1xuICAgIH1cblxuICAgIHRvYXN0UHJvcHMuY2xvc2VCdXR0b24gPSBjbG9zZUJ1dHRvbjtcbiAgICB2YXIgdG9hc3RDb250ZW50ID0gY29udGVudDtcblxuICAgIGlmIChpc1ZhbGlkRWxlbWVudChjb250ZW50KSAmJiAhaXNTdHIoY29udGVudC50eXBlKSkge1xuICAgICAgdG9hc3RDb250ZW50ID0gY2xvbmVFbGVtZW50KGNvbnRlbnQsIHtcbiAgICAgICAgY2xvc2VUb2FzdDogY2xvc2VUb2FzdCxcbiAgICAgICAgdG9hc3RQcm9wczogdG9hc3RQcm9wc1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc0ZuKGNvbnRlbnQpKSB7XG4gICAgICB0b2FzdENvbnRlbnQgPSBjb250ZW50KHtcbiAgICAgICAgY2xvc2VUb2FzdDogY2xvc2VUb2FzdCxcbiAgICAgICAgdG9hc3RQcm9wczogdG9hc3RQcm9wc1xuICAgICAgfSk7XG4gICAgfSAvLyBub3QgaGFuZGxpbmcgbGltaXQgKyBkZWxheSBieSBkZXNpZ24uIFdhaXRpbmcgZm9yIHVzZXIgZmVlZGJhY2sgZmlyc3RcblxuXG4gICAgaWYgKHByb3BzLmxpbWl0ICYmIHByb3BzLmxpbWl0ID4gMCAmJiB0b2FzdENvdW50ID4gcHJvcHMubGltaXQgJiYgaXNOb3RBblVwZGF0ZSkge1xuICAgICAgcXVldWUucHVzaCh7XG4gICAgICAgIHRvYXN0Q29udGVudDogdG9hc3RDb250ZW50LFxuICAgICAgICB0b2FzdFByb3BzOiB0b2FzdFByb3BzLFxuICAgICAgICBzdGFsZUlkOiBzdGFsZUlkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzTnVtKGRlbGF5KSAmJiBkZWxheSA+IDApIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBhcHBlbmRUb2FzdCh0b2FzdENvbnRlbnQsIHRvYXN0UHJvcHMsIHN0YWxlSWQpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcHBlbmRUb2FzdCh0b2FzdENvbnRlbnQsIHRvYXN0UHJvcHMsIHN0YWxlSWQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGVuZFRvYXN0KGNvbnRlbnQsIHRvYXN0UHJvcHMsIHN0YWxlSWQpIHtcbiAgICB2YXIgdG9hc3RJZCA9IHRvYXN0UHJvcHMudG9hc3RJZDtcbiAgICBjb2xsZWN0aW9uW3RvYXN0SWRdID0ge1xuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIHByb3BzOiB0b2FzdFByb3BzXG4gICAgfTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnQUREJyxcbiAgICAgIHRvYXN0SWQ6IHRvYXN0SWQsXG4gICAgICBzdGFsZUlkOiBzdGFsZUlkXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVGcm9tQ29sbGVjdGlvbih0b2FzdElkKSB7XG4gICAgZGVsZXRlIGNvbGxlY3Rpb25bdG9hc3RJZF07XG4gICAgZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRvYXN0VG9SZW5kZXIoY2IpIHtcbiAgICB2YXIgdG9hc3RUb1JlbmRlciA9IHt9O1xuICAgIHZhciB0b2FzdExpc3QgPSBwcm9wcy5uZXdlc3RPblRvcCA/IE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pLnJldmVyc2UoKSA6IE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2FzdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBfdG9hc3QgPSBjb2xsZWN0aW9uW3RvYXN0TGlzdFtpXV07XG4gICAgICB2YXIgcG9zaXRpb24gPSBfdG9hc3QucHJvcHMucG9zaXRpb247XG4gICAgICB0b2FzdFRvUmVuZGVyW3Bvc2l0aW9uXSB8fCAodG9hc3RUb1JlbmRlcltwb3NpdGlvbl0gPSBbXSk7XG4gICAgICB0b2FzdFRvUmVuZGVyW3Bvc2l0aW9uXS5wdXNoKF90b2FzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRvYXN0VG9SZW5kZXIpLm1hcChmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIGNiKHAsIHRvYXN0VG9SZW5kZXJbcF0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUb2FzdFRvUmVuZGVyOiBnZXRUb2FzdFRvUmVuZGVyLFxuICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXG4gICAgY29udGFpbmVyUmVmOiBjb250YWluZXJSZWYsXG4gICAgaXNUb2FzdEFjdGl2ZTogaXNUb2FzdEFjdGl2ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRYKGUpIHtcbiAgcmV0dXJuIGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID49IDEgPyBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WDtcbn1cblxuZnVuY3Rpb24gZ2V0WShlKSB7XG4gIHJldHVybiBlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA+PSAxID8gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFkgOiBlLmNsaWVudFk7XG59XG5cbmZ1bmN0aW9uIHVzZVRvYXN0KHByb3BzKSB7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSh0cnVlKSxcbiAgICAgIGlzUnVubmluZyA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldElzUnVubmluZyA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgX3VzZVN0YXRlMiA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIHByZXZlbnRFeGl0VHJhbnNpdGlvbiA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRQcmV2ZW50RXhpdFRyYW5zaXRpb24gPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciB0b2FzdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGRyYWcgPSB1c2VLZWVwZXIoe1xuICAgIHN0YXJ0OiAwLFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBkZWx0YVg6IDAsXG4gICAgcmVtb3ZhbERpc3RhbmNlOiAwLFxuICAgIGNhbkNsb3NlT25DbGljazogdHJ1ZSxcbiAgICBjYW5EcmFnOiBmYWxzZSxcbiAgICBib3VuZGluZ1JlY3Q6IG51bGxcbiAgfSk7XG4gIHZhciBzeW5jUHJvcHMgPSB1c2VLZWVwZXIocHJvcHMsIHRydWUpO1xuICB2YXIgYXV0b0Nsb3NlID0gcHJvcHMuYXV0b0Nsb3NlLFxuICAgICAgcGF1c2VPbkhvdmVyID0gcHJvcHMucGF1c2VPbkhvdmVyLFxuICAgICAgY2xvc2VUb2FzdCA9IHByb3BzLmNsb3NlVG9hc3QsXG4gICAgICBvbkNsaWNrID0gcHJvcHMub25DbGljayxcbiAgICAgIGNsb3NlT25DbGljayA9IHByb3BzLmNsb3NlT25DbGljaztcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNGbihwcm9wcy5vbk9wZW4pKSBwcm9wcy5vbk9wZW4oaXNWYWxpZEVsZW1lbnQocHJvcHMuY2hpbGRyZW4pICYmIHByb3BzLmNoaWxkcmVuLnByb3BzKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzRm4oc3luY1Byb3BzLm9uQ2xvc2UpKSBzeW5jUHJvcHMub25DbG9zZShpc1ZhbGlkRWxlbWVudChzeW5jUHJvcHMuY2hpbGRyZW4pICYmIHN5bmNQcm9wcy5jaGlsZHJlbi5wcm9wcyk7XG4gICAgfTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHByb3BzLmRyYWdnYWJsZSAmJiBiaW5kRHJhZ0V2ZW50cygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9wcy5kcmFnZ2FibGUgJiYgdW5iaW5kRHJhZ0V2ZW50cygpO1xuICAgIH07XG4gIH0sIFtwcm9wcy5kcmFnZ2FibGVdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBwcm9wcy5wYXVzZU9uRm9jdXNMb3NzICYmIGJpbmRGb2N1c0V2ZW50cygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9wcy5wYXVzZU9uRm9jdXNMb3NzICYmIHVuYmluZEZvY3VzRXZlbnRzKCk7XG4gICAgfTtcbiAgfSwgW3Byb3BzLnBhdXNlT25Gb2N1c0xvc3NdKTtcblxuICBmdW5jdGlvbiBvbkRyYWdTdGFydChlKSB7XG4gICAgdmFyIHRvYXN0ID0gdG9hc3RSZWYuY3VycmVudDtcbiAgICBkcmFnLmNhbkNsb3NlT25DbGljayA9IHRydWU7XG4gICAgZHJhZy5jYW5EcmFnID0gdHJ1ZTtcbiAgICBkcmFnLmJvdW5kaW5nUmVjdCA9IHRvYXN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRvYXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICBkcmFnLnN0YXJ0ID0gZHJhZy54ID0gZ2V0WChlLm5hdGl2ZUV2ZW50KTtcbiAgICBkcmFnLnJlbW92YWxEaXN0YW5jZSA9IHRvYXN0Lm9mZnNldFdpZHRoICogKHByb3BzLmRyYWdnYWJsZVBlcmNlbnQgLyAxMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnVHJhbnNpdGlvbkVuZCgpIHtcbiAgICBpZiAoZHJhZy5ib3VuZGluZ1JlY3QpIHtcbiAgICAgIHZhciBfZHJhZyRib3VuZGluZ1JlY3QgPSBkcmFnLmJvdW5kaW5nUmVjdCxcbiAgICAgICAgICB0b3AgPSBfZHJhZyRib3VuZGluZ1JlY3QudG9wLFxuICAgICAgICAgIGJvdHRvbSA9IF9kcmFnJGJvdW5kaW5nUmVjdC5ib3R0b20sXG4gICAgICAgICAgbGVmdCA9IF9kcmFnJGJvdW5kaW5nUmVjdC5sZWZ0LFxuICAgICAgICAgIHJpZ2h0ID0gX2RyYWckYm91bmRpbmdSZWN0LnJpZ2h0O1xuXG4gICAgICBpZiAocHJvcHMucGF1c2VPbkhvdmVyICYmIGRyYWcueCA+PSBsZWZ0ICYmIGRyYWcueCA8PSByaWdodCAmJiBkcmFnLnkgPj0gdG9wICYmIGRyYWcueSA8PSBib3R0b20pIHtcbiAgICAgICAgcGF1c2VUb2FzdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheVRvYXN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGxheVRvYXN0KCkge1xuICAgIHNldElzUnVubmluZyh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlVG9hc3QoKSB7XG4gICAgc2V0SXNSdW5uaW5nKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJpbmRGb2N1c0V2ZW50cygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBwbGF5VG9hc3QpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgcGF1c2VUb2FzdCk7XG4gIH1cblxuICBmdW5jdGlvbiB1bmJpbmRGb2N1c0V2ZW50cygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBwbGF5VG9hc3QpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgcGF1c2VUb2FzdCk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kRHJhZ0V2ZW50cygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkRyYWdNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EcmFnRW5kKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvbkRyYWdNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uRHJhZ0VuZCk7XG4gIH1cblxuICBmdW5jdGlvbiB1bmJpbmREcmFnRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uRHJhZ01vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRyYWdFbmQpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uRHJhZ01vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25EcmFnRW5kKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ01vdmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdG9hc3QgPSB0b2FzdFJlZi5jdXJyZW50O1xuXG4gICAgaWYgKGRyYWcuY2FuRHJhZykge1xuICAgICAgaWYgKGlzUnVubmluZykgcGF1c2VUb2FzdCgpO1xuICAgICAgZHJhZy54ID0gZ2V0WChlKTtcbiAgICAgIGRyYWcuZGVsdGFYID0gZHJhZy54IC0gZHJhZy5zdGFydDtcbiAgICAgIGRyYWcueSA9IGdldFkoZSk7IC8vIHByZXZlbnQgZmFsc2UgcG9zaXRpZiBkdXJpbmcgYSB0b2FzdCBjbGlja1xuXG4gICAgICBpZiAoZHJhZy5zdGFydCAhPT0gZHJhZy54KSBkcmFnLmNhbkNsb3NlT25DbGljayA9IGZhbHNlO1xuICAgICAgdG9hc3Quc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKFwiICsgZHJhZy5kZWx0YVggKyBcInB4KVwiO1xuICAgICAgdG9hc3Quc3R5bGUub3BhY2l0eSA9IFwiXCIgKyAoMSAtIE1hdGguYWJzKGRyYWcuZGVsdGFYIC8gZHJhZy5yZW1vdmFsRGlzdGFuY2UpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdFbmQoKSB7XG4gICAgdmFyIHRvYXN0ID0gdG9hc3RSZWYuY3VycmVudDtcblxuICAgIGlmIChkcmFnLmNhbkRyYWcpIHtcbiAgICAgIGRyYWcuY2FuRHJhZyA9IGZhbHNlO1xuXG4gICAgICBpZiAoTWF0aC5hYnMoZHJhZy5kZWx0YVgpID4gZHJhZy5yZW1vdmFsRGlzdGFuY2UpIHtcbiAgICAgICAgc2V0UHJldmVudEV4aXRUcmFuc2l0aW9uKHRydWUpO1xuICAgICAgICBwcm9wcy5jbG9zZVRvYXN0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdG9hc3Quc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMC4ycywgb3BhY2l0eSAwLjJzJztcbiAgICAgIHRvYXN0LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcbiAgICAgIHRvYXN0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgfVxuICB9XG5cbiAgdmFyIGV2ZW50SGFuZGxlcnMgPSB7XG4gICAgb25Nb3VzZURvd246IG9uRHJhZ1N0YXJ0LFxuICAgIG9uVG91Y2hTdGFydDogb25EcmFnU3RhcnQsXG4gICAgb25Nb3VzZVVwOiBvbkRyYWdUcmFuc2l0aW9uRW5kLFxuICAgIG9uVG91Y2hFbmQ6IG9uRHJhZ1RyYW5zaXRpb25FbmRcbiAgfTtcblxuICBpZiAoYXV0b0Nsb3NlICYmIHBhdXNlT25Ib3Zlcikge1xuICAgIGV2ZW50SGFuZGxlcnMub25Nb3VzZUVudGVyID0gcGF1c2VUb2FzdDtcbiAgICBldmVudEhhbmRsZXJzLm9uTW91c2VMZWF2ZSA9IHBsYXlUb2FzdDtcbiAgfSAvLyBwcmV2ZW50IHRvYXN0IGZyb20gY2xvc2luZyB3aGVuIHVzZXIgZHJhZ3MgdGhlIHRvYXN0XG5cblxuICBpZiAoY2xvc2VPbkNsaWNrKSB7XG4gICAgZXZlbnRIYW5kbGVycy5vbkNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIG9uQ2xpY2sgJiYgb25DbGljayhlKTtcbiAgICAgIGRyYWcuY2FuQ2xvc2VPbkNsaWNrICYmIGNsb3NlVG9hc3QoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwbGF5VG9hc3Q6IHBsYXlUb2FzdCxcbiAgICBwYXVzZVRvYXN0OiBwYXVzZVRvYXN0LFxuICAgIGlzUnVubmluZzogaXNSdW5uaW5nLFxuICAgIHByZXZlbnRFeGl0VHJhbnNpdGlvbjogcHJldmVudEV4aXRUcmFuc2l0aW9uLFxuICAgIHRvYXN0UmVmOiB0b2FzdFJlZixcbiAgICBldmVudEhhbmRsZXJzOiBldmVudEhhbmRsZXJzXG4gIH07XG59XG5cbmZ1bmN0aW9uIENsb3NlQnV0dG9uKF9yZWYpIHtcbiAgdmFyIGNsb3NlVG9hc3QgPSBfcmVmLmNsb3NlVG9hc3QsXG4gICAgICB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgX3JlZiRhcmlhTGFiZWwgPSBfcmVmLmFyaWFMYWJlbCxcbiAgICAgIGFyaWFMYWJlbCA9IF9yZWYkYXJpYUxhYmVsID09PSB2b2lkIDAgPyAnY2xvc2UnIDogX3JlZiRhcmlhTGFiZWw7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiVG9hc3RpZnlcIlxuICAgIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgICArIFwiX19jbG9zZS1idXR0b24gXCIgKyBcIlRvYXN0aWZ5XCJcbiAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgKyBcIl9fY2xvc2UtYnV0dG9uLS1cIiArIHR5cGUsXG4gICAgdHlwZTogXCJidXR0b25cIixcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjbG9zZVRvYXN0KGUpO1xuICAgIH0sXG4gICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbFxuICB9LCBjcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDE0IDE2XCJcbiAgfSwgY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGZpbGxSdWxlOiBcImV2ZW5vZGRcIixcbiAgICBkOiBcIk03LjcxIDguMjNsMy43NSAzLjc1LTEuNDggMS40OC0zLjc1LTMuNzUtMy43NSAzLjc1TDEgMTEuOThsMy43NS0zLjc1TDEgNC40OCAyLjQ4IDNsMy43NSAzLjc1TDkuOTggM2wxLjQ4IDEuNDgtMy43NSAzLjc1elwiXG4gIH0pKSk7XG59XG5cbmZ1bmN0aW9uIFByb2dyZXNzQmFyKF9yZWYpIHtcbiAgdmFyIF9yZWYyLCBfYW5pbWF0aW9uRXZlbnQ7XG5cbiAgdmFyIGRlbGF5ID0gX3JlZi5kZWxheSxcbiAgICAgIGlzUnVubmluZyA9IF9yZWYuaXNSdW5uaW5nLFxuICAgICAgY2xvc2VUb2FzdCA9IF9yZWYuY2xvc2VUb2FzdCxcbiAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICBoaWRlID0gX3JlZi5oaWRlLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICB1c2VyU3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgY29udHJvbGxlZFByb2dyZXNzID0gX3JlZi5jb250cm9sbGVkUHJvZ3Jlc3MsXG4gICAgICBwcm9ncmVzcyA9IF9yZWYucHJvZ3Jlc3MsXG4gICAgICBydGwgPSBfcmVmLnJ0bCxcbiAgICAgIGlzSW4gPSBfcmVmLmlzSW47XG5cbiAgdmFyIHN0eWxlID0gX2V4dGVuZHMoe30sIHVzZXJTdHlsZSwge1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBkZWxheSArIFwibXNcIixcbiAgICBhbmltYXRpb25QbGF5U3RhdGU6IGlzUnVubmluZyA/ICdydW5uaW5nJyA6ICdwYXVzZWQnLFxuICAgIG9wYWNpdHk6IGhpZGUgPyAwIDogMVxuICB9KTtcblxuICBpZiAoY29udHJvbGxlZFByb2dyZXNzKSBzdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlWChcIiArIHByb2dyZXNzICsgXCIpXCI7XG4gIHZhciBkZWZhdWx0Q2xhc3NBcnIgPSBbXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fcHJvZ3Jlc3MtYmFyXCIsIGNvbnRyb2xsZWRQcm9ncmVzcyA/IFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3Byb2dyZXNzLWJhci0tY29udHJvbGxlZFwiIDogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fcHJvZ3Jlc3MtYmFyLS1hbmltYXRlZFwiLCBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX19wcm9ncmVzcy1iYXItLVwiICsgdHlwZSwgKF9yZWYyID0ge30sIF9yZWYyW1wiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3Byb2dyZXNzLWJhci0tcnRsXCJdID0gcnRsLCBfcmVmMildO1xuICB2YXIgY2xhc3NOYW1lcyA9IGlzRm4oY2xhc3NOYW1lKSA/IGNsYXNzTmFtZSh7XG4gICAgcnRsOiBydGwsXG4gICAgdHlwZTogdHlwZSxcbiAgICBkZWZhdWx0Q2xhc3NOYW1lOiBjeC5hcHBseSh2b2lkIDAsIGRlZmF1bHRDbGFzc0FycilcbiAgfSkgOiBjeC5hcHBseSh2b2lkIDAsIFtdLmNvbmNhdChkZWZhdWx0Q2xhc3NBcnIsIFtjbGFzc05hbWVdKSk7IC8vIPCfp5AgY29udHJvbGxlZFByb2dyZXNzIGlzIGRlcml2ZWQgZnJvbSBwcm9ncmVzc1xuICAvLyBzbyBpZiBjb250cm9sbGVkUHJvZ3Jlc3MgaXMgc2V0XG4gIC8vIGl0IG1lYW5zIHRoYXQgdGhpcyBpcyBhbHNvIHRoZSBjYXNlIGZvciBwcm9ncmVzc1xuXG4gIHZhciBhbmltYXRpb25FdmVudCA9IChfYW5pbWF0aW9uRXZlbnQgPSB7fSwgX2FuaW1hdGlvbkV2ZW50W2NvbnRyb2xsZWRQcm9ncmVzcyAmJiBwcm9ncmVzcyA+PSAxID8gJ29uVHJhbnNpdGlvbkVuZCcgOiAnb25BbmltYXRpb25FbmQnXSA9IGNvbnRyb2xsZWRQcm9ncmVzcyAmJiBwcm9ncmVzcyA8IDEgPyBudWxsIDogZnVuY3Rpb24gKCkge1xuICAgIGlzSW4gJiYgY2xvc2VUb2FzdCgpO1xuICB9LCBfYW5pbWF0aW9uRXZlbnQpO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGFuaW1hdGlvbkV2ZW50KSk7XG59XG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6IFRZUEUuREVGQVVMVCxcbiAgaGlkZTogZmFsc2Vcbn07XG5cbnZhciBUb2FzdCA9IGZ1bmN0aW9uIFRvYXN0KHByb3BzKSB7XG4gIHZhciBfcmVmO1xuXG4gIHZhciBfdXNlVG9hc3QgPSB1c2VUb2FzdChwcm9wcyksXG4gICAgICBpc1J1bm5pbmcgPSBfdXNlVG9hc3QuaXNSdW5uaW5nLFxuICAgICAgcHJldmVudEV4aXRUcmFuc2l0aW9uID0gX3VzZVRvYXN0LnByZXZlbnRFeGl0VHJhbnNpdGlvbixcbiAgICAgIHRvYXN0UmVmID0gX3VzZVRvYXN0LnRvYXN0UmVmLFxuICAgICAgZXZlbnRIYW5kbGVycyA9IF91c2VUb2FzdC5ldmVudEhhbmRsZXJzO1xuXG4gIHZhciBjbG9zZUJ1dHRvbiA9IHByb3BzLmNsb3NlQnV0dG9uLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGF1dG9DbG9zZSA9IHByb3BzLmF1dG9DbG9zZSxcbiAgICAgIG9uQ2xpY2sgPSBwcm9wcy5vbkNsaWNrLFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXIgPSBwcm9wcy5oaWRlUHJvZ3Jlc3NCYXIsXG4gICAgICBjbG9zZVRvYXN0ID0gcHJvcHMuY2xvc2VUb2FzdCxcbiAgICAgIFRyYW5zaXRpb24gPSBwcm9wcy50cmFuc2l0aW9uLFxuICAgICAgcG9zaXRpb24gPSBwcm9wcy5wb3NpdGlvbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBib2R5Q2xhc3NOYW1lID0gcHJvcHMuYm9keUNsYXNzTmFtZSxcbiAgICAgIGJvZHlTdHlsZSA9IHByb3BzLmJvZHlTdHlsZSxcbiAgICAgIHByb2dyZXNzQ2xhc3NOYW1lID0gcHJvcHMucHJvZ3Jlc3NDbGFzc05hbWUsXG4gICAgICBwcm9ncmVzc1N0eWxlID0gcHJvcHMucHJvZ3Jlc3NTdHlsZSxcbiAgICAgIHVwZGF0ZUlkID0gcHJvcHMudXBkYXRlSWQsXG4gICAgICByb2xlID0gcHJvcHMucm9sZSxcbiAgICAgIHByb2dyZXNzID0gcHJvcHMucHJvZ3Jlc3MsXG4gICAgICBydGwgPSBwcm9wcy5ydGwsXG4gICAgICB0b2FzdElkID0gcHJvcHMudG9hc3RJZCxcbiAgICAgIGRlbGV0ZVRvYXN0ID0gcHJvcHMuZGVsZXRlVG9hc3Q7XG4gIHZhciBkZWZhdWx0Q2xhc3NBcnIgPSBbXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fdG9hc3RcIiwgXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fdG9hc3QtLVwiICsgdHlwZSwgKF9yZWYgPSB7fSwgX3JlZltcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX190b2FzdC0tcnRsXCJdID0gcnRsLCBfcmVmKV07XG4gIHZhciBjc3NDbGFzc2VzID0gaXNGbihjbGFzc05hbWUpID8gY2xhc3NOYW1lKHtcbiAgICBydGw6IHJ0bCxcbiAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgdHlwZTogdHlwZSxcbiAgICBkZWZhdWx0Q2xhc3NOYW1lOiBjeC5hcHBseSh2b2lkIDAsIGRlZmF1bHRDbGFzc0FycilcbiAgfSkgOiBjeC5hcHBseSh2b2lkIDAsIFtdLmNvbmNhdChkZWZhdWx0Q2xhc3NBcnIsIFtjbGFzc05hbWVdKSk7XG4gIHZhciBjb250cm9sbGVkUHJvZ3Jlc3MgPSAhIXByb2dyZXNzO1xuXG4gIGZ1bmN0aW9uIHJlbmRlckNsb3NlQnV0dG9uKGNsb3NlQnV0dG9uKSB7XG4gICAgaWYgKCFjbG9zZUJ1dHRvbikgcmV0dXJuO1xuICAgIHZhciBwcm9wcyA9IHtcbiAgICAgIGNsb3NlVG9hc3Q6IGNsb3NlVG9hc3QsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfTtcbiAgICBpZiAoaXNGbihjbG9zZUJ1dHRvbikpIHJldHVybiBjbG9zZUJ1dHRvbihwcm9wcyk7XG4gICAgaWYgKGlzVmFsaWRFbGVtZW50KGNsb3NlQnV0dG9uKSkgcmV0dXJuIGNsb25lRWxlbWVudChjbG9zZUJ1dHRvbiwgcHJvcHMpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbiwge1xuICAgIFwiaW5cIjogcHJvcHNbXCJpblwiXSxcbiAgICBhcHBlYXI6IHRydWUsXG4gICAgZG9uZTogZGVsZXRlVG9hc3QsXG4gICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgIHByZXZlbnRFeGl0VHJhbnNpdGlvbjogcHJldmVudEV4aXRUcmFuc2l0aW9uLFxuICAgIG5vZGVSZWY6IHRvYXN0UmVmXG4gIH0sIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgaWQ6IHRvYXN0SWQsXG4gICAgb25DbGljazogb25DbGljayxcbiAgICBjbGFzc05hbWU6IGNzc0NsYXNzZXMgfHwgdW5kZWZpbmVkXG4gIH0sIGV2ZW50SGFuZGxlcnMsIHtcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgcmVmOiB0b2FzdFJlZlxuICB9KSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wc1tcImluXCJdICYmIHtcbiAgICByb2xlOiByb2xlXG4gIH0sIHtcbiAgICBjbGFzc05hbWU6IGlzRm4oYm9keUNsYXNzTmFtZSkgPyBib2R5Q2xhc3NOYW1lKHtcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9KSA6IGN4KFwiVG9hc3RpZnlcIlxuICAgIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgICArIFwiX190b2FzdC1ib2R5XCIsIGJvZHlDbGFzc05hbWUpLFxuICAgIHN0eWxlOiBib2R5U3R5bGVcbiAgfSksIGNoaWxkcmVuKSwgcmVuZGVyQ2xvc2VCdXR0b24oY2xvc2VCdXR0b24pLCAoYXV0b0Nsb3NlIHx8IGNvbnRyb2xsZWRQcm9ncmVzcykgJiYgY3JlYXRlRWxlbWVudChQcm9ncmVzc0JhciwgT2JqZWN0LmFzc2lnbih7fSwgdXBkYXRlSWQgJiYgIWNvbnRyb2xsZWRQcm9ncmVzcyA/IHtcbiAgICBrZXk6IFwicGItXCIgKyB1cGRhdGVJZFxuICB9IDoge30sIHtcbiAgICBydGw6IHJ0bCxcbiAgICBkZWxheTogYXV0b0Nsb3NlLFxuICAgIGlzUnVubmluZzogaXNSdW5uaW5nLFxuICAgIGlzSW46IHByb3BzW1wiaW5cIl0sXG4gICAgY2xvc2VUb2FzdDogY2xvc2VUb2FzdCxcbiAgICBoaWRlOiBoaWRlUHJvZ3Jlc3NCYXIsXG4gICAgdHlwZTogdHlwZSxcbiAgICBzdHlsZTogcHJvZ3Jlc3NTdHlsZSxcbiAgICBjbGFzc05hbWU6IHByb2dyZXNzQ2xhc3NOYW1lLFxuICAgIGNvbnRyb2xsZWRQcm9ncmVzczogY29udHJvbGxlZFByb2dyZXNzLFxuICAgIHByb2dyZXNzOiBwcm9ncmVzc1xuICB9KSkpKTtcbn07XG5cbnZhciBCb3VuY2UgPSAvKiNfX1BVUkVfXyovY3NzVHJhbnNpdGlvbih7XG4gIGVudGVyOiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX19ib3VuY2UtZW50ZXJcIixcbiAgZXhpdDogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fYm91bmNlLWV4aXRcIixcbiAgYXBwZW5kUG9zaXRpb246IHRydWVcbn0pO1xudmFyIFNsaWRlID0gLyojX19QVVJFX18qL2Nzc1RyYW5zaXRpb24oe1xuICBlbnRlcjogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fc2xpZGUtZW50ZXJcIixcbiAgZXhpdDogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fc2xpZGUtZXhpdFwiLFxuICBkdXJhdGlvbjogWzQ1MCwgNzUwXSxcbiAgYXBwZW5kUG9zaXRpb246IHRydWVcbn0pO1xudmFyIFpvb20gPSAvKiNfX1BVUkVfXyovY3NzVHJhbnNpdGlvbih7XG4gIGVudGVyOiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX196b29tLWVudGVyXCIsXG4gIGV4aXQ6IFwiVG9hc3RpZnlcIlxuICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICsgXCJfX3pvb20tZXhpdFwiXG59KTtcbnZhciBGbGlwID0gLyojX19QVVJFX18qL2Nzc1RyYW5zaXRpb24oe1xuICBlbnRlcjogXCJUb2FzdGlmeVwiXG4gIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgKyBcIl9fZmxpcC1lbnRlclwiLFxuICBleGl0OiBcIlRvYXN0aWZ5XCJcbiAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICArIFwiX19mbGlwLWV4aXRcIlxufSk7XG5cbnZhciBUb2FzdFBvc2l0aW9uZXIgPSBmdW5jdGlvbiBUb2FzdFBvc2l0aW9uZXIoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJzdHlsZVwiXSk7XG5cbiAgLy8gTW9ua2V5IHBhdGNoIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcbiAgLy8gQXMgZXhpdCB0cmFuc2l0aW9uIGlzIGJyb2tlbiB3aXRoIHN0cmljdCBtb2RlXG4gIGRlbGV0ZSByZXN0W1wiaW5cIl07XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkLCByZXN0KTtcbiAgfSkpO1xufTtcblxudmFyIFRvYXN0Q29udGFpbmVyID0gZnVuY3Rpb24gVG9hc3RDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIF91c2VUb2FzdENvbnRhaW5lciA9IHVzZVRvYXN0Q29udGFpbmVyKHByb3BzKSxcbiAgICAgIGdldFRvYXN0VG9SZW5kZXIgPSBfdXNlVG9hc3RDb250YWluZXIuZ2V0VG9hc3RUb1JlbmRlcixcbiAgICAgIGNvbnRhaW5lclJlZiA9IF91c2VUb2FzdENvbnRhaW5lci5jb250YWluZXJSZWYsXG4gICAgICBpc1RvYXN0QWN0aXZlID0gX3VzZVRvYXN0Q29udGFpbmVyLmlzVG9hc3RBY3RpdmU7XG5cbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBydGwgPSBwcm9wcy5ydGwsXG4gICAgICBjb250YWluZXJJZCA9IHByb3BzLmNvbnRhaW5lcklkO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgcmVmOiBjb250YWluZXJSZWYsXG4gICAgY2xhc3NOYW1lOiBcIlRvYXN0aWZ5XCJcbiAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgLFxuICAgIGlkOiBjb250YWluZXJJZFxuICB9LCBnZXRUb2FzdFRvUmVuZGVyKGZ1bmN0aW9uIChwb3NpdGlvbiwgdG9hc3RMaXN0KSB7XG4gICAgdmFyIF9jeCwgX2N4MjtcblxuICAgIHZhciBzd2FnID0ge1xuICAgICAgY2xhc3NOYW1lOiBpc0ZuKGNsYXNzTmFtZSkgPyBjbGFzc05hbWUoe1xuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgIHJ0bDogcnRsLFxuICAgICAgICBkZWZhdWx0Q2xhc3NOYW1lOiBjeChcIlRvYXN0aWZ5XCJcbiAgICAgICAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICAgICAgICArIFwiX190b2FzdC1jb250YWluZXJcIiwgXCJUb2FzdGlmeVwiXG4gICAgICAgIC8qIENTU19OQU1FU1BBQ0UgKi9cbiAgICAgICAgKyBcIl9fdG9hc3QtY29udGFpbmVyLS1cIiArIHBvc2l0aW9uLCAoX2N4ID0ge30sIF9jeFtcIlRvYXN0aWZ5XCJcbiAgICAgICAgLyogQ1NTX05BTUVTUEFDRSAqL1xuICAgICAgICArIFwiX190b2FzdC1jb250YWluZXItLXJ0bFwiXSA9IHJ0bCwgX2N4KSlcbiAgICAgIH0pIDogY3goXCJUb2FzdGlmeVwiXG4gICAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgICArIFwiX190b2FzdC1jb250YWluZXJcIiwgXCJUb2FzdGlmeVwiXG4gICAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgICArIFwiX190b2FzdC1jb250YWluZXItLVwiICsgcG9zaXRpb24sIChfY3gyID0ge30sIF9jeDJbXCJUb2FzdGlmeVwiXG4gICAgICAvKiBDU1NfTkFNRVNQQUNFICovXG4gICAgICArIFwiX190b2FzdC1jb250YWluZXItLXJ0bFwiXSA9IHJ0bCwgX2N4MiksIHBhcnNlQ2xhc3NOYW1lKGNsYXNzTmFtZSkpLFxuICAgICAgc3R5bGU6IHRvYXN0TGlzdC5sZW5ndGggPT09IDAgPyBfZXh0ZW5kcyh7fSwgc3R5bGUsIHtcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgICB9KSA6IF9leHRlbmRzKHt9LCBzdHlsZSlcbiAgICB9O1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFRvYXN0UG9zaXRpb25lciwgT2JqZWN0LmFzc2lnbih7fSwgc3dhZywge1xuICAgICAga2V5OiBcImNvbnRhaW5lci1cIiArIHBvc2l0aW9uXG4gICAgfSksIHRvYXN0TGlzdC5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBjb250ZW50ID0gX3JlZi5jb250ZW50LFxuICAgICAgICAgIHRvYXN0UHJvcHMgPSBfcmVmLnByb3BzO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVG9hc3QsIE9iamVjdC5hc3NpZ24oe30sIHRvYXN0UHJvcHMsIHtcbiAgICAgICAgXCJpblwiOiBpc1RvYXN0QWN0aXZlKHRvYXN0UHJvcHMudG9hc3RJZCksXG4gICAgICAgIGtleTogXCJ0b2FzdC1cIiArIHRvYXN0UHJvcHMua2V5LFxuICAgICAgICBjbG9zZUJ1dHRvbjogdG9hc3RQcm9wcy5jbG9zZUJ1dHRvbiA9PT0gdHJ1ZSA/IENsb3NlQnV0dG9uIDogdG9hc3RQcm9wcy5jbG9zZUJ1dHRvblxuICAgICAgfSksIGNvbnRlbnQpO1xuICAgIH0pKTtcbiAgfSkpO1xufTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gQHRzLWlnbm9yZVxuICBUb2FzdENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHBvc2l0aW9uOiAvKiNfX1BVUkVfXyovUHJvcFR5cGVzLm9uZU9mKCAvKiNfX1BVUkVfXyovb2JqZWN0VmFsdWVzKFBPU0lUSU9OKSksXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGF1dG9DbG9zZTogLyojX19QVVJFX18qL1Byb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNsb3NlQnV0dG9uOiAvKiNfX1BVUkVfXyovUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGhpZGVQcm9ncmVzc0JhcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGF1c2VPbkhvdmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbG9zZU9uQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuICAgIG5ld2VzdE9uVG9wOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5hbnksXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdG9hc3RDbGFzc05hbWU6IC8qI19fUFVSRV9fKi9Qcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIGJvZHlDbGFzc05hbWU6IC8qI19fUFVSRV9fKi9Qcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIHByb2dyZXNzQ2xhc3NOYW1lOiAvKiNfX1BVUkVfXyovUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBwcm9ncmVzc1N0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHRyYW5zaXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgIHJ0bDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZHJhZ2dhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkcmFnZ2FibGVQZXJjZW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHBhdXNlT25Gb2N1c0xvc3M6IFByb3BUeXBlcy5ib29sLFxuICAgIGVuYWJsZU11bHRpQ29udGFpbmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjb250YWluZXJJZDogLyojX19QVVJFX18qL1Byb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICByb2xlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG4gIH07XG59XG5cblRvYXN0Q29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgcG9zaXRpb246IFBPU0lUSU9OLlRPUF9SSUdIVCxcbiAgdHJhbnNpdGlvbjogQm91bmNlLFxuICBydGw6IGZhbHNlLFxuICBhdXRvQ2xvc2U6IDUwMDAsXG4gIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gIGNsb3NlQnV0dG9uOiBDbG9zZUJ1dHRvbixcbiAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICBwYXVzZU9uRm9jdXNMb3NzOiB0cnVlLFxuICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gIG5ld2VzdE9uVG9wOiBmYWxzZSxcbiAgZHJhZ2dhYmxlOiB0cnVlLFxuICBkcmFnZ2FibGVQZXJjZW50OiA4MCxcbiAgcm9sZTogJ2FsZXJ0J1xufTtcblxudmFyIGNvbnRhaW5lcnMgPSAvKiNfX1BVUkVfXyovbmV3IE1hcCgpO1xudmFyIGxhdGVzdEluc3RhbmNlO1xudmFyIGNvbnRhaW5lckRvbU5vZGU7XG52YXIgY29udGFpbmVyQ29uZmlnO1xudmFyIHF1ZXVlID0gW107XG52YXIgbGF6eSA9IGZhbHNlO1xuLyoqXHJcbiAqIENoZWNrIHdoZXRoZXIgYW55IGNvbnRhaW5lciBpcyBjdXJyZW50bHkgbW91bnRlZCBpbiB0aGUgRE9NXHJcbiAqL1xuXG5mdW5jdGlvbiBpc0FueUNvbnRhaW5lck1vdW50ZWQoKSB7XG4gIHJldHVybiBjb250YWluZXJzLnNpemUgPiAwO1xufVxuLyoqXHJcbiAqIEdldCB0aGUgY29udGFpbmVyIGJ5IGlkLiBSZXR1cm5zIHRoZSBsYXN0IGNvbnRhaW5lciBkZWNsYXJlZCB3aGVuIG5vIGlkIGlzIGdpdmVuLlxyXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDb250YWluZXIoY29udGFpbmVySWQpIHtcbiAgaWYgKCFpc0FueUNvbnRhaW5lck1vdW50ZWQoKSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBjb250YWluZXJzLmdldCghY29udGFpbmVySWQgPyBsYXRlc3RJbnN0YW5jZSA6IGNvbnRhaW5lcklkKTtcbn1cbi8qKlxyXG4gKiBHZXQgdGhlIHRvYXN0IGJ5IGlkLCBnaXZlbiBpdCdzIGluIHRoZSBET00sIG90aGVyd2lzZSByZXR1cm5zIG51bGxcclxuICovXG5cblxuZnVuY3Rpb24gZ2V0VG9hc3QodG9hc3RJZCwgX3JlZikge1xuICB2YXIgY29udGFpbmVySWQgPSBfcmVmLmNvbnRhaW5lcklkO1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKGNvbnRhaW5lcklkKTtcbiAgaWYgKCFjb250YWluZXIpIHJldHVybiBudWxsO1xuICByZXR1cm4gY29udGFpbmVyLmdldFRvYXN0KHRvYXN0SWQpO1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIHRvYXN0SWRcclxuICovXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVUb2FzdElkKCkge1xuICByZXR1cm4gKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpICsgRGF0ZS5ub3coKS50b1N0cmluZygzNikpLnN1YnN0cigyLCAxMCk7XG59XG4vKipcclxuICogR2VuZXJhdGUgYSB0b2FzdElkIG9yIHVzZSB0aGUgb25lIHByb3ZpZGVkXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFRvYXN0SWQob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyAmJiAoaXNTdHIob3B0aW9ucy50b2FzdElkKSB8fCBpc051bShvcHRpb25zLnRvYXN0SWQpKSkge1xuICAgIHJldHVybiBvcHRpb25zLnRvYXN0SWQ7XG4gIH1cblxuICByZXR1cm4gZ2VuZXJhdGVUb2FzdElkKCk7XG59XG4vKipcclxuICogSWYgdGhlIGNvbnRhaW5lciBpcyBub3QgbW91bnRlZCwgdGhlIHRvYXN0IGlzIGVucXVldWVkIGFuZFxyXG4gKiB0aGUgY29udGFpbmVyIGxhenkgbW91bnRlZFxyXG4gKi9cblxuXG5mdW5jdGlvbiBkaXNwYXRjaFRvYXN0KGNvbnRlbnQsIG9wdGlvbnMpIHtcbiAgaWYgKGlzQW55Q29udGFpbmVyTW91bnRlZCgpKSB7XG4gICAgZXZlbnRNYW5hZ2VyLmVtaXQoMFxuICAgIC8qIFNob3cgKi9cbiAgICAsIGNvbnRlbnQsIG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICB9KTtcblxuICAgIGlmIChsYXp5ICYmIGNhblVzZURvbSkge1xuICAgICAgbGF6eSA9IGZhbHNlO1xuICAgICAgY29udGFpbmVyRG9tTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXJEb21Ob2RlKTtcbiAgICAgIHJlbmRlcihjcmVhdGVFbGVtZW50KFRvYXN0Q29udGFpbmVyLCBPYmplY3QuYXNzaWduKHt9LCBjb250YWluZXJDb25maWcpKSwgY29udGFpbmVyRG9tTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnMudG9hc3RJZDtcbn1cbi8qKlxyXG4gKiBNZXJnZSBwcm92aWRlZCBvcHRpb25zIHdpdGggdGhlIGRlZmF1bHRzIHNldHRpbmdzIGFuZCBnZW5lcmF0ZSB0aGUgdG9hc3RJZFxyXG4gKi9cblxuXG5mdW5jdGlvbiBtZXJnZU9wdGlvbnModHlwZSwgb3B0aW9ucykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICB0eXBlOiBvcHRpb25zICYmIG9wdGlvbnMudHlwZSB8fCB0eXBlLFxuICAgIHRvYXN0SWQ6IGdldFRvYXN0SWQob3B0aW9ucylcbiAgfSk7XG59XG5cbnZhciB0b2FzdCA9IGZ1bmN0aW9uIHRvYXN0KGNvbnRlbnQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGRpc3BhdGNoVG9hc3QoY29udGVudCwgbWVyZ2VPcHRpb25zKFRZUEUuREVGQVVMVCwgb3B0aW9ucykpO1xufTtcblxudG9hc3Quc3VjY2VzcyA9IGZ1bmN0aW9uIChjb250ZW50LCBvcHRpb25zKSB7XG4gIHJldHVybiBkaXNwYXRjaFRvYXN0KGNvbnRlbnQsIG1lcmdlT3B0aW9ucyhUWVBFLlNVQ0NFU1MsIG9wdGlvbnMpKTtcbn07XG5cbnRvYXN0LmluZm8gPSBmdW5jdGlvbiAoY29udGVudCwgb3B0aW9ucykge1xuICByZXR1cm4gZGlzcGF0Y2hUb2FzdChjb250ZW50LCBtZXJnZU9wdGlvbnMoVFlQRS5JTkZPLCBvcHRpb25zKSk7XG59O1xuXG50b2FzdC5lcnJvciA9IGZ1bmN0aW9uIChjb250ZW50LCBvcHRpb25zKSB7XG4gIHJldHVybiBkaXNwYXRjaFRvYXN0KGNvbnRlbnQsIG1lcmdlT3B0aW9ucyhUWVBFLkVSUk9SLCBvcHRpb25zKSk7XG59O1xuXG50b2FzdC53YXJuaW5nID0gZnVuY3Rpb24gKGNvbnRlbnQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGRpc3BhdGNoVG9hc3QoY29udGVudCwgbWVyZ2VPcHRpb25zKFRZUEUuV0FSTklORywgb3B0aW9ucykpO1xufTtcblxudG9hc3QuZGFyayA9IGZ1bmN0aW9uIChjb250ZW50LCBvcHRpb25zKSB7XG4gIHJldHVybiBkaXNwYXRjaFRvYXN0KGNvbnRlbnQsIG1lcmdlT3B0aW9ucyhUWVBFLkRBUkssIG9wdGlvbnMpKTtcbn07XG4vKipcclxuICogTWF5YmUgSSBzaG91bGQgcmVtb3ZlIHdhcm5pbmcgaW4gZmF2b3Igb2Ygd2FybiwgSSBkb24ndCBrbm93XHJcbiAqL1xuXG5cbnRvYXN0Lndhcm4gPSB0b2FzdC53YXJuaW5nO1xuLyoqXHJcbiAqIFJlbW92ZSB0b2FzdCBwcm9ncmFtbWF0aWNhbHlcclxuICovXG5cbnRvYXN0LmRpc21pc3MgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIGlzQW55Q29udGFpbmVyTW91bnRlZCgpICYmIGV2ZW50TWFuYWdlci5lbWl0KDFcbiAgLyogQ2xlYXIgKi9cbiAgLCBpZCk7XG59O1xuLyoqXHJcbiAqIENsZWFyIHdhaXRpbmcgcXVldWUgd2hlbiBsaW1pdCBpcyB1c2VkXHJcbiAqL1xuXG5cbnRvYXN0LmNsZWFyV2FpdGluZ1F1ZXVlID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICBpZiAocGFyYW1zID09PSB2b2lkIDApIHtcbiAgICBwYXJhbXMgPSB7fTtcbiAgfVxuXG4gIHJldHVybiBpc0FueUNvbnRhaW5lck1vdW50ZWQoKSAmJiBldmVudE1hbmFnZXIuZW1pdCg1XG4gIC8qIENsZWFyV2FpdGluZ1F1ZXVlICovXG4gICwgcGFyYW1zKTtcbn07XG4vKipcclxuICogcmV0dXJuIHRydWUgaWYgb25lIGNvbnRhaW5lciBpcyBkaXNwbGF5aW5nIHRoZSB0b2FzdFxyXG4gKi9cblxuXG50b2FzdC5pc0FjdGl2ZSA9IGZ1bmN0aW9uIChpZCkge1xuICB2YXIgaXNUb2FzdEFjdGl2ZSA9IGZhbHNlO1xuICBjb250YWluZXJzLmZvckVhY2goZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgIGlmIChjb250YWluZXIuaXNUb2FzdEFjdGl2ZSAmJiBjb250YWluZXIuaXNUb2FzdEFjdGl2ZShpZCkpIHtcbiAgICAgIGlzVG9hc3RBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBpc1RvYXN0QWN0aXZlO1xufTtcblxudG9hc3QudXBkYXRlID0gZnVuY3Rpb24gKHRvYXN0SWQsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIC8vIGlmIHlvdSBjYWxsIHRvYXN0IGFuZCB0b2FzdC51cGRhdGUgZGlyZWN0bHkgbm90aGluZyB3aWxsIGJlIGRpc3BsYXllZFxuICAvLyB0aGlzIGlzIHdoeSBJIGRlZmVyZWQgdGhlIHVwZGF0ZVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdG9hc3QgPSBnZXRUb2FzdCh0b2FzdElkLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2FzdCkge1xuICAgICAgdmFyIG9sZE9wdGlvbnMgPSB0b2FzdC5wcm9wcyxcbiAgICAgICAgICBvbGRDb250ZW50ID0gdG9hc3QuY29udGVudDtcblxuICAgICAgdmFyIG5leHRPcHRpb25zID0gX2V4dGVuZHMoe30sIG9sZE9wdGlvbnMsIG9wdGlvbnMsIHtcbiAgICAgICAgdG9hc3RJZDogb3B0aW9ucy50b2FzdElkIHx8IHRvYXN0SWQsXG4gICAgICAgIHVwZGF0ZUlkOiBnZW5lcmF0ZVRvYXN0SWQoKVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChuZXh0T3B0aW9ucy50b2FzdElkICE9PSB0b2FzdElkKSBuZXh0T3B0aW9ucy5zdGFsZUlkID0gdG9hc3RJZDtcbiAgICAgIHZhciBjb250ZW50ID0gdHlwZW9mIG5leHRPcHRpb25zLnJlbmRlciAhPT0gJ3VuZGVmaW5lZCcgPyBuZXh0T3B0aW9ucy5yZW5kZXIgOiBvbGRDb250ZW50O1xuICAgICAgZGVsZXRlIG5leHRPcHRpb25zLnJlbmRlcjtcbiAgICAgIGRpc3BhdGNoVG9hc3QoY29udGVudCwgbmV4dE9wdGlvbnMpO1xuICAgIH1cbiAgfSwgMCk7XG59O1xuLyoqXHJcbiAqIFVzZWQgZm9yIGNvbnRyb2xsZWQgcHJvZ3Jlc3MgYmFyLlxyXG4gKi9cblxuXG50b2FzdC5kb25lID0gZnVuY3Rpb24gKGlkKSB7XG4gIHRvYXN0LnVwZGF0ZShpZCwge1xuICAgIHByb2dyZXNzOiAxXG4gIH0pO1xufTtcbi8qKlxyXG4gKiBUcmFjayBjaGFuZ2VzLiBUaGUgY2FsbGJhY2sgZ2V0IHRoZSBudW1iZXIgb2YgdG9hc3QgZGlzcGxheWVkXHJcbiAqXHJcbiAqL1xuXG5cbnRvYXN0Lm9uQ2hhbmdlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGlmIChpc0ZuKGNhbGxiYWNrKSkge1xuICAgIGV2ZW50TWFuYWdlci5vbig0XG4gICAgLyogQ2hhbmdlICovXG4gICAgLCBjYWxsYmFjayk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlzRm4oY2FsbGJhY2spICYmIGV2ZW50TWFuYWdlci5vZmYoNFxuICAgIC8qIENoYW5nZSAqL1xuICAgICwgY2FsbGJhY2spO1xuICB9O1xufTtcbi8qKlxyXG4gKiBDb25maWd1cmUgdGhlIFRvYXN0Q29udGFpbmVyIHdoZW4gbGF6eSBtb3VudGVkXHJcbiAqL1xuXG5cbnRvYXN0LmNvbmZpZ3VyZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7XG4gICAgY29uZmlnID0ge307XG4gIH1cblxuICBsYXp5ID0gdHJ1ZTtcbiAgY29udGFpbmVyQ29uZmlnID0gY29uZmlnO1xufTtcblxudG9hc3QuUE9TSVRJT04gPSBQT1NJVElPTjtcbnRvYXN0LlRZUEUgPSBUWVBFO1xuLyoqXHJcbiAqIFdhaXQgdW50aWwgdGhlIFRvYXN0Q29udGFpbmVyIGlzIG1vdW50ZWQgdG8gZGlzcGF0Y2ggdGhlIHRvYXN0XHJcbiAqIGFuZCBhdHRhY2ggaXNBY3RpdmUgbWV0aG9kXHJcbiAqL1xuXG5ldmVudE1hbmFnZXIub24oMlxuLyogRGlkTW91bnQgKi9cbiwgZnVuY3Rpb24gKGNvbnRhaW5lckluc3RhbmNlKSB7XG4gIGxhdGVzdEluc3RhbmNlID0gY29udGFpbmVySW5zdGFuY2UuY29udGFpbmVySWQgfHwgY29udGFpbmVySW5zdGFuY2U7XG4gIGNvbnRhaW5lcnMuc2V0KGxhdGVzdEluc3RhbmNlLCBjb250YWluZXJJbnN0YW5jZSk7XG4gIHF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBldmVudE1hbmFnZXIuZW1pdCgwXG4gICAgLyogU2hvdyAqL1xuICAgICwgaXRlbS5jb250ZW50LCBpdGVtLm9wdGlvbnMpO1xuICB9KTtcbiAgcXVldWUgPSBbXTtcbn0pLm9uKDNcbi8qIFdpbGxVbm1vdW50ICovXG4sIGZ1bmN0aW9uIChjb250YWluZXJJbnN0YW5jZSkge1xuICBjb250YWluZXJzW1wiZGVsZXRlXCJdKGNvbnRhaW5lckluc3RhbmNlLmNvbnRhaW5lcklkIHx8IGNvbnRhaW5lckluc3RhbmNlKTtcblxuICBpZiAoY29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgZXZlbnRNYW5hZ2VyLm9mZigwXG4gICAgLyogU2hvdyAqL1xuICAgICkub2ZmKDFcbiAgICAvKiBDbGVhciAqL1xuICAgICkub2ZmKDVcbiAgICAvKiBDbGVhcldhaXRpbmdRdWV1ZSAqL1xuICAgICk7XG4gIH1cblxuICBpZiAoY2FuVXNlRG9tICYmIGNvbnRhaW5lckRvbU5vZGUpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lckRvbU5vZGUpO1xuICB9XG59KTtcblxuZXhwb3J0IHsgQm91bmNlLCBGbGlwLCBTbGlkZSwgVG9hc3RDb250YWluZXIsIFpvb20sIGNvbGxhcHNlVG9hc3QsIGNzc1RyYW5zaXRpb24sIHRvYXN0LCB1c2VUb2FzdCwgdXNlVG9hc3RDb250YWluZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LXRvYXN0aWZ5LmVzbS5qcy5tYXBcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgYWRkT25lQ2xhc3MgZnJvbSAnZG9tLWhlbHBlcnMvYWRkQ2xhc3MnO1xuaW1wb3J0IHJlbW92ZU9uZUNsYXNzIGZyb20gJ2RvbS1oZWxwZXJzL3JlbW92ZUNsYXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuL1RyYW5zaXRpb24nO1xuaW1wb3J0IHsgY2xhc3NOYW1lc1NoYXBlIH0gZnJvbSAnLi91dGlscy9Qcm9wVHlwZXMnO1xuXG52YXIgX2FkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3Mobm9kZSwgY2xhc3Nlcykge1xuICByZXR1cm4gbm9kZSAmJiBjbGFzc2VzICYmIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGFkZE9uZUNsYXNzKG5vZGUsIGMpO1xuICB9KTtcbn07XG5cbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKG5vZGUsIGNsYXNzZXMpIHtcbiAgcmV0dXJuIG5vZGUgJiYgY2xhc3NlcyAmJiBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiByZW1vdmVPbmVDbGFzcyhub2RlLCBjKTtcbiAgfSk7XG59O1xuLyoqXG4gKiBBIHRyYW5zaXRpb24gY29tcG9uZW50IGluc3BpcmVkIGJ5IHRoZSBleGNlbGxlbnRcbiAqIFtuZy1hbmltYXRlXShodHRwczovL2RvY3MuYW5ndWxhcmpzLm9yZy9hcGkvbmdBbmltYXRlKSBsaWJyYXJ5LCB5b3Ugc2hvdWxkXG4gKiB1c2UgaXQgaWYgeW91J3JlIHVzaW5nIENTUyB0cmFuc2l0aW9ucyBvciBhbmltYXRpb25zLiBJdCdzIGJ1aWx0IHVwb24gdGhlXG4gKiBbYFRyYW5zaXRpb25gXShodHRwczovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3RyYW5zaXRpb24pXG4gKiBjb21wb25lbnQsIHNvIGl0IGluaGVyaXRzIGFsbCBvZiBpdHMgcHJvcHMuXG4gKlxuICogYENTU1RyYW5zaXRpb25gIGFwcGxpZXMgYSBwYWlyIG9mIGNsYXNzIG5hbWVzIGR1cmluZyB0aGUgYGFwcGVhcmAsIGBlbnRlcmAsXG4gKiBhbmQgYGV4aXRgIHN0YXRlcyBvZiB0aGUgdHJhbnNpdGlvbi4gVGhlIGZpcnN0IGNsYXNzIGlzIGFwcGxpZWQgYW5kIHRoZW4gYVxuICogc2Vjb25kIGAqLWFjdGl2ZWAgY2xhc3MgaW4gb3JkZXIgdG8gYWN0aXZhdGUgdGhlIENTUyB0cmFuc2l0aW9uLiBBZnRlciB0aGVcbiAqIHRyYW5zaXRpb24sIG1hdGNoaW5nIGAqLWRvbmVgIGNsYXNzIG5hbWVzIGFyZSBhcHBsaWVkIHRvIHBlcnNpc3QgdGhlXG4gKiB0cmFuc2l0aW9uIHN0YXRlLlxuICpcbiAqIGBgYGpzeFxuICogZnVuY3Rpb24gQXBwKCkge1xuICogICBjb25zdCBbaW5Qcm9wLCBzZXRJblByb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICogICByZXR1cm4gKFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8Q1NTVHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXsyMDB9IGNsYXNzTmFtZXM9XCJteS1ub2RlXCI+XG4gKiAgICAgICAgIDxkaXY+XG4gKiAgICAgICAgICAge1wiSSdsbCByZWNlaXZlIG15LW5vZGUtKiBjbGFzc2VzXCJ9XG4gKiAgICAgICAgIDwvZGl2PlxuICogICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICogICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0SW5Qcm9wKHRydWUpfT5cbiAqICAgICAgICAgQ2xpY2sgdG8gRW50ZXJcbiAqICAgICAgIDwvYnV0dG9uPlxuICogICAgIDwvZGl2PlxuICogICApO1xuICogfVxuICogYGBgXG4gKlxuICogV2hlbiB0aGUgYGluYCBwcm9wIGlzIHNldCB0byBgdHJ1ZWAsIHRoZSBjaGlsZCBjb21wb25lbnQgd2lsbCBmaXJzdCByZWNlaXZlXG4gKiB0aGUgY2xhc3MgYGV4YW1wbGUtZW50ZXJgLCB0aGVuIHRoZSBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIHdpbGwgYmUgYWRkZWQgaW5cbiAqIHRoZSBuZXh0IHRpY2suIGBDU1NUcmFuc2l0aW9uYCBbZm9yY2VzIGFcbiAqIHJlZmxvd10oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ibG9iLzUwMDczMDNlNzI5YTc0YmU2NmEyMWMzZTIyMDVlNDkxNjgyMTUyNGIvc3JjL0NTU1RyYW5zaXRpb24uanMjTDIwOC1MMjE1KVxuICogYmV0d2VlbiBiZWZvcmUgYWRkaW5nIHRoZSBgZXhhbXBsZS1lbnRlci1hY3RpdmVgLiBUaGlzIGlzIGFuIGltcG9ydGFudCB0cmlja1xuICogYmVjYXVzZSBpdCBhbGxvd3MgdXMgdG8gdHJhbnNpdGlvbiBiZXR3ZWVuIGBleGFtcGxlLWVudGVyYCBhbmRcbiAqIGBleGFtcGxlLWVudGVyLWFjdGl2ZWAgZXZlbiB0aG91Z2ggdGhleSB3ZXJlIGFkZGVkIGltbWVkaWF0ZWx5IG9uZSBhZnRlclxuICogYW5vdGhlci4gTW9zdCBub3RhYmx5LCB0aGlzIGlzIHdoYXQgbWFrZXMgaXQgcG9zc2libGUgZm9yIHVzIHRvIGFuaW1hdGVcbiAqIF9hcHBlYXJhbmNlXy5cbiAqXG4gKiBgYGBjc3NcbiAqIC5teS1ub2RlLWVudGVyIHtcbiAqICAgb3BhY2l0eTogMDtcbiAqIH1cbiAqIC5teS1ub2RlLWVudGVyLWFjdGl2ZSB7XG4gKiAgIG9wYWNpdHk6IDE7XG4gKiAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG4gKiB9XG4gKiAubXktbm9kZS1leGl0IHtcbiAqICAgb3BhY2l0eTogMTtcbiAqIH1cbiAqIC5teS1ub2RlLWV4aXQtYWN0aXZlIHtcbiAqICAgb3BhY2l0eTogMDtcbiAqICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbiAqIH1cbiAqIGBgYFxuICpcbiAqIGAqLWFjdGl2ZWAgY2xhc3NlcyByZXByZXNlbnQgd2hpY2ggc3R5bGVzIHlvdSB3YW50IHRvIGFuaW1hdGUgKip0byoqLCBzbyBpdCdzXG4gKiBpbXBvcnRhbnQgdG8gYWRkIGB0cmFuc2l0aW9uYCBkZWNsYXJhdGlvbiBvbmx5IHRvIHRoZW0sIG90aGVyd2lzZSB0cmFuc2l0aW9uc1xuICogbWlnaHQgbm90IGJlaGF2ZSBhcyBpbnRlbmRlZCEgVGhpcyBtaWdodCBub3QgYmUgb2J2aW91cyB3aGVuIHRoZSB0cmFuc2l0aW9uc1xuICogYXJlIHN5bW1ldHJpY2FsLCBpLmUuIHdoZW4gYCotZW50ZXItYWN0aXZlYCBpcyB0aGUgc2FtZSBhcyBgKi1leGl0YCwgbGlrZSBpblxuICogdGhlIGV4YW1wbGUgYWJvdmUgKG1pbnVzIGB0cmFuc2l0aW9uYCksIGJ1dCBpdCBiZWNvbWVzIGFwcGFyZW50IGluIG1vcmVcbiAqIGNvbXBsZXggdHJhbnNpdGlvbnMuXG4gKlxuICogKipOb3RlKio6IElmIHlvdSdyZSB1c2luZyB0aGVcbiAqIFtgYXBwZWFyYF0oaHR0cDovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3RyYW5zaXRpb24jVHJhbnNpdGlvbi1wcm9wLWFwcGVhcilcbiAqIHByb3AsIG1ha2Ugc3VyZSB0byBkZWZpbmUgc3R5bGVzIGZvciBgLmFwcGVhci0qYCBjbGFzc2VzIGFzIHdlbGwuXG4gKi9cblxuXG52YXIgQ1NTVHJhbnNpdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShDU1NUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDU1NUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLmFwcGxpZWRDbGFzc2VzID0ge1xuICAgICAgYXBwZWFyOiB7fSxcbiAgICAgIGVudGVyOiB7fSxcbiAgICAgIGV4aXQ6IHt9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRW50ZXIgPSBmdW5jdGlvbiAobWF5YmVOb2RlLCBtYXliZUFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJHJlc29sdmVBcmd1bWVudCA9IF90aGlzLnJlc29sdmVBcmd1bWVudHMobWF5YmVOb2RlLCBtYXliZUFwcGVhcmluZyksXG4gICAgICAgICAgbm9kZSA9IF90aGlzJHJlc29sdmVBcmd1bWVudFswXSxcbiAgICAgICAgICBhcHBlYXJpbmcgPSBfdGhpcyRyZXNvbHZlQXJndW1lbnRbMV07XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2V4aXQnKTtcblxuICAgICAgX3RoaXMuYWRkQ2xhc3Mobm9kZSwgYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInLCAnYmFzZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkVudGVyaW5nID0gZnVuY3Rpb24gKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRyZXNvbHZlQXJndW1lbnQyID0gX3RoaXMucmVzb2x2ZUFyZ3VtZW50cyhtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKSxcbiAgICAgICAgICBub2RlID0gX3RoaXMkcmVzb2x2ZUFyZ3VtZW50MlswXSxcbiAgICAgICAgICBhcHBlYXJpbmcgPSBfdGhpcyRyZXNvbHZlQXJndW1lbnQyWzFdO1xuXG4gICAgICB2YXIgdHlwZSA9IGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJztcblxuICAgICAgX3RoaXMuYWRkQ2xhc3Mobm9kZSwgdHlwZSwgJ2FjdGl2ZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcmluZykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyaW5nKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkVudGVyZWQgPSBmdW5jdGlvbiAobWF5YmVOb2RlLCBtYXliZUFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJHJlc29sdmVBcmd1bWVudDMgPSBfdGhpcy5yZXNvbHZlQXJndW1lbnRzKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpLFxuICAgICAgICAgIG5vZGUgPSBfdGhpcyRyZXNvbHZlQXJndW1lbnQzWzBdLFxuICAgICAgICAgIGFwcGVhcmluZyA9IF90aGlzJHJlc29sdmVBcmd1bWVudDNbMV07XG5cbiAgICAgIHZhciB0eXBlID0gYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsIHR5cGUpO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCB0eXBlLCAnZG9uZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcmVkKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXJlZChtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0ID0gZnVuY3Rpb24gKG1heWJlTm9kZSkge1xuICAgICAgdmFyIF90aGlzJHJlc29sdmVBcmd1bWVudDQgPSBfdGhpcy5yZXNvbHZlQXJndW1lbnRzKG1heWJlTm9kZSksXG4gICAgICAgICAgbm9kZSA9IF90aGlzJHJlc29sdmVBcmd1bWVudDRbMF07XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2FwcGVhcicpO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdlbnRlcicpO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCAnZXhpdCcsICdiYXNlJyk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0KG1heWJlTm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdGluZyA9IGZ1bmN0aW9uIChtYXliZU5vZGUpIHtcbiAgICAgIHZhciBfdGhpcyRyZXNvbHZlQXJndW1lbnQ1ID0gX3RoaXMucmVzb2x2ZUFyZ3VtZW50cyhtYXliZU5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBfdGhpcyRyZXNvbHZlQXJndW1lbnQ1WzBdO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCAnZXhpdCcsICdhY3RpdmUnKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdGluZykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXRpbmcobWF5YmVOb2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0ZWQgPSBmdW5jdGlvbiAobWF5YmVOb2RlKSB7XG4gICAgICB2YXIgX3RoaXMkcmVzb2x2ZUFyZ3VtZW50NiA9IF90aGlzLnJlc29sdmVBcmd1bWVudHMobWF5YmVOb2RlKSxcbiAgICAgICAgICBub2RlID0gX3RoaXMkcmVzb2x2ZUFyZ3VtZW50NlswXTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZXhpdCcpO1xuXG4gICAgICBfdGhpcy5hZGRDbGFzcyhub2RlLCAnZXhpdCcsICdkb25lJyk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXRlZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXRlZChtYXliZU5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5yZXNvbHZlQXJndW1lbnRzID0gZnVuY3Rpb24gKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpIHtcbiAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5ub2RlUmVmID8gW190aGlzLnByb3BzLm5vZGVSZWYuY3VycmVudCwgbWF5YmVOb2RlXSAvLyBoZXJlIGBtYXliZU5vZGVgIGlzIGFjdHVhbGx5IGBhcHBlYXJpbmdgXG4gICAgICA6IFttYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nXTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0Q2xhc3NOYW1lcyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lcyA9IF90aGlzLnByb3BzLmNsYXNzTmFtZXM7XG4gICAgICB2YXIgaXNTdHJpbmdDbGFzc05hbWVzID0gdHlwZW9mIGNsYXNzTmFtZXMgPT09ICdzdHJpbmcnO1xuICAgICAgdmFyIHByZWZpeCA9IGlzU3RyaW5nQ2xhc3NOYW1lcyAmJiBjbGFzc05hbWVzID8gY2xhc3NOYW1lcyArIFwiLVwiIDogJyc7XG4gICAgICB2YXIgYmFzZUNsYXNzTmFtZSA9IGlzU3RyaW5nQ2xhc3NOYW1lcyA/IFwiXCIgKyBwcmVmaXggKyB0eXBlIDogY2xhc3NOYW1lc1t0eXBlXTtcbiAgICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSBpc1N0cmluZ0NsYXNzTmFtZXMgPyBiYXNlQ2xhc3NOYW1lICsgXCItYWN0aXZlXCIgOiBjbGFzc05hbWVzW3R5cGUgKyBcIkFjdGl2ZVwiXTtcbiAgICAgIHZhciBkb25lQ2xhc3NOYW1lID0gaXNTdHJpbmdDbGFzc05hbWVzID8gYmFzZUNsYXNzTmFtZSArIFwiLWRvbmVcIiA6IGNsYXNzTmFtZXNbdHlwZSArIFwiRG9uZVwiXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJhc2VDbGFzc05hbWU6IGJhc2VDbGFzc05hbWUsXG4gICAgICAgIGFjdGl2ZUNsYXNzTmFtZTogYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICBkb25lQ2xhc3NOYW1lOiBkb25lQ2xhc3NOYW1lXG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ1NTVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3Mobm9kZSwgdHlwZSwgcGhhc2UpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5nZXRDbGFzc05hbWVzKHR5cGUpW3BoYXNlICsgXCJDbGFzc05hbWVcIl07XG5cbiAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lcyA9IHRoaXMuZ2V0Q2xhc3NOYW1lcygnZW50ZXInKSxcbiAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXMuZG9uZUNsYXNzTmFtZTtcblxuICAgIGlmICh0eXBlID09PSAnYXBwZWFyJyAmJiBwaGFzZSA9PT0gJ2RvbmUnICYmIGRvbmVDbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIGRvbmVDbGFzc05hbWU7XG4gICAgfSAvLyBUaGlzIGlzIHRvIGZvcmNlIGEgcmVwYWludCxcbiAgICAvLyB3aGljaCBpcyBuZWNlc3NhcnkgaW4gb3JkZXIgdG8gdHJhbnNpdGlvbiBzdHlsZXMgd2hlbiBhZGRpbmcgYSBjbGFzcyBuYW1lLlxuXG5cbiAgICBpZiAocGhhc2UgPT09ICdhY3RpdmUnKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgICAgIG5vZGUgJiYgbm9kZS5zY3JvbGxUb3A7XG4gICAgfVxuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgdGhpcy5hcHBsaWVkQ2xhc3Nlc1t0eXBlXVtwaGFzZV0gPSBjbGFzc05hbWU7XG5cbiAgICAgIF9hZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlQ2xhc3NlcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMobm9kZSwgdHlwZSkge1xuICAgIHZhciBfdGhpcyRhcHBsaWVkQ2xhc3NlcyQgPSB0aGlzLmFwcGxpZWRDbGFzc2VzW3R5cGVdLFxuICAgICAgICBiYXNlQ2xhc3NOYW1lID0gX3RoaXMkYXBwbGllZENsYXNzZXMkLmJhc2UsXG4gICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF90aGlzJGFwcGxpZWRDbGFzc2VzJC5hY3RpdmUsXG4gICAgICAgIGRvbmVDbGFzc05hbWUgPSBfdGhpcyRhcHBsaWVkQ2xhc3NlcyQuZG9uZTtcbiAgICB0aGlzLmFwcGxpZWRDbGFzc2VzW3R5cGVdID0ge307XG5cbiAgICBpZiAoYmFzZUNsYXNzTmFtZSkge1xuICAgICAgcmVtb3ZlQ2xhc3Mobm9kZSwgYmFzZUNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUNsYXNzTmFtZSkge1xuICAgICAgcmVtb3ZlQ2xhc3Mobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoZG9uZUNsYXNzTmFtZSkge1xuICAgICAgcmVtb3ZlQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgXyA9IF90aGlzJHByb3BzLmNsYXNzTmFtZXMsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNsYXNzTmFtZXNcIl0pO1xuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb24sIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgb25FbnRlcjogdGhpcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmVkOiB0aGlzLm9uRW50ZXJlZCxcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMub25FbnRlcmluZyxcbiAgICAgIG9uRXhpdDogdGhpcy5vbkV4aXQsXG4gICAgICBvbkV4aXRpbmc6IHRoaXMub25FeGl0aW5nLFxuICAgICAgb25FeGl0ZWQ6IHRoaXMub25FeGl0ZWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIENTU1RyYW5zaXRpb247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkNTU1RyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWVzOiAnJ1xufTtcbkNTU1RyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gX2V4dGVuZHMoe30sIFRyYW5zaXRpb24ucHJvcFR5cGVzLCB7XG4gIC8qKlxuICAgKiBUaGUgYW5pbWF0aW9uIGNsYXNzTmFtZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50IGFzIGl0IGFwcGVhcnMsIGVudGVycyxcbiAgICogZXhpdHMgb3IgaGFzIGZpbmlzaGVkIHRoZSB0cmFuc2l0aW9uLiBBIHNpbmdsZSBuYW1lIGNhbiBiZSBwcm92aWRlZCwgd2hpY2hcbiAgICogd2lsbCBiZSBzdWZmaXhlZCBmb3IgZWFjaCBzdGFnZSwgZS5nLiBgY2xhc3NOYW1lcz1cImZhZGVcImAgYXBwbGllczpcbiAgICpcbiAgICogLSBgZmFkZS1hcHBlYXJgLCBgZmFkZS1hcHBlYXItYWN0aXZlYCwgYGZhZGUtYXBwZWFyLWRvbmVgXG4gICAqIC0gYGZhZGUtZW50ZXJgLCBgZmFkZS1lbnRlci1hY3RpdmVgLCBgZmFkZS1lbnRlci1kb25lYFxuICAgKiAtIGBmYWRlLWV4aXRgLCBgZmFkZS1leGl0LWFjdGl2ZWAsIGBmYWRlLWV4aXQtZG9uZWBcbiAgICpcbiAgICogQSBmZXcgZGV0YWlscyB0byBub3RlIGFib3V0IGhvdyB0aGVzZSBjbGFzc2VzIGFyZSBhcHBsaWVkOlxuICAgKlxuICAgKiAxLiBUaGV5IGFyZSBfam9pbmVkXyB3aXRoIHRoZSBvbmVzIHRoYXQgYXJlIGFscmVhZHkgZGVmaW5lZCBvbiB0aGUgY2hpbGRcbiAgICogICAgY29tcG9uZW50LCBzbyBpZiB5b3Ugd2FudCB0byBhZGQgc29tZSBiYXNlIHN0eWxlcywgeW91IGNhbiB1c2VcbiAgICogICAgYGNsYXNzTmFtZWAgd2l0aG91dCB3b3JyeWluZyB0aGF0IGl0IHdpbGwgYmUgb3ZlcnJpZGRlbi5cbiAgICpcbiAgICogMi4gSWYgdGhlIHRyYW5zaXRpb24gY29tcG9uZW50IG1vdW50cyB3aXRoIGBpbj17ZmFsc2V9YCwgbm8gY2xhc3NlcyBhcmVcbiAgICogICAgYXBwbGllZCB5ZXQuIFlvdSBtaWdodCBiZSBleHBlY3RpbmcgYCotZXhpdC1kb25lYCwgYnV0IGlmIHlvdSB0aGlua1xuICAgKiAgICBhYm91dCBpdCwgYSBjb21wb25lbnQgY2Fubm90IGZpbmlzaCBleGl0aW5nIGlmIGl0IGhhc24ndCBlbnRlcmVkIHlldC5cbiAgICpcbiAgICogMi4gYGZhZGUtYXBwZWFyLWRvbmVgIGFuZCBgZmFkZS1lbnRlci1kb25lYCB3aWxsIF9ib3RoXyBiZSBhcHBsaWVkLiBUaGlzXG4gICAqICAgIGFsbG93cyB5b3UgdG8gZGVmaW5lIGRpZmZlcmVudCBiZWhhdmlvciBmb3Igd2hlbiBhcHBlYXJpbmcgaXMgZG9uZSBhbmRcbiAgICogICAgd2hlbiByZWd1bGFyIGVudGVyaW5nIGlzIGRvbmUsIHVzaW5nIHNlbGVjdG9ycyBsaWtlXG4gICAqICAgIGAuZmFkZS1lbnRlci1kb25lOm5vdCguZmFkZS1hcHBlYXItZG9uZSlgLiBGb3IgZXhhbXBsZSwgeW91IGNvdWxkIGFwcGx5XG4gICAqICAgIGFuIGVwaWMgZW50cmFuY2UgYW5pbWF0aW9uIHdoZW4gZWxlbWVudCBmaXJzdCBhcHBlYXJzIGluIHRoZSBET00gdXNpbmdcbiAgICogICAgW0FuaW1hdGUuY3NzXShodHRwczovL2RhbmVkZW4uZ2l0aHViLmlvL2FuaW1hdGUuY3NzLykuIE90aGVyd2lzZSB5b3UgY2FuXG4gICAqICAgIHNpbXBseSB1c2UgYGZhZGUtZW50ZXItZG9uZWAgZm9yIGRlZmluaW5nIGJvdGggY2FzZXMuXG4gICAqXG4gICAqIEVhY2ggaW5kaXZpZHVhbCBjbGFzc05hbWVzIGNhbiBhbHNvIGJlIHNwZWNpZmllZCBpbmRlcGVuZGVudGx5IGxpa2U6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNsYXNzTmFtZXM9e3tcbiAgICogIGFwcGVhcjogJ215LWFwcGVhcicsXG4gICAqICBhcHBlYXJBY3RpdmU6ICdteS1hY3RpdmUtYXBwZWFyJyxcbiAgICogIGFwcGVhckRvbmU6ICdteS1kb25lLWFwcGVhcicsXG4gICAqICBlbnRlcjogJ215LWVudGVyJyxcbiAgICogIGVudGVyQWN0aXZlOiAnbXktYWN0aXZlLWVudGVyJyxcbiAgICogIGVudGVyRG9uZTogJ215LWRvbmUtZW50ZXInLFxuICAgKiAgZXhpdDogJ215LWV4aXQnLFxuICAgKiAgZXhpdEFjdGl2ZTogJ215LWFjdGl2ZS1leGl0JyxcbiAgICogIGV4aXREb25lOiAnbXktZG9uZS1leGl0JyxcbiAgICogfX1cbiAgICogYGBgXG4gICAqXG4gICAqIElmIHlvdSB3YW50IHRvIHNldCB0aGVzZSBjbGFzc2VzIHVzaW5nIENTUyBNb2R1bGVzOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmNzcyc7XG4gICAqIGBgYFxuICAgKlxuICAgKiB5b3UgbWlnaHQgd2FudCB0byB1c2UgY2FtZWxDYXNlIGluIHlvdXIgQ1NTIGZpbGUsIHRoYXQgd2F5IGNvdWxkIHNpbXBseVxuICAgKiBzcHJlYWQgdGhlbSBpbnN0ZWFkIG9mIGxpc3RpbmcgdGhlbSBvbmUgYnkgb25lOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjbGFzc05hbWVzPXt7IC4uLnN0eWxlcyB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge3N0cmluZyB8IHtcbiAgICogIGFwcGVhcj86IHN0cmluZyxcbiAgICogIGFwcGVhckFjdGl2ZT86IHN0cmluZyxcbiAgICogIGFwcGVhckRvbmU/OiBzdHJpbmcsXG4gICAqICBlbnRlcj86IHN0cmluZyxcbiAgICogIGVudGVyQWN0aXZlPzogc3RyaW5nLFxuICAgKiAgZW50ZXJEb25lPzogc3RyaW5nLFxuICAgKiAgZXhpdD86IHN0cmluZyxcbiAgICogIGV4aXRBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBleGl0RG9uZT86IHN0cmluZyxcbiAgICogfX1cbiAgICovXG4gIGNsYXNzTmFtZXM6IGNsYXNzTmFtZXNTaGFwZSxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyJyBvciAnYXBwZWFyJyBjbGFzcyBpc1xuICAgKiBhcHBsaWVkLlxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyLWFjdGl2ZScgb3JcbiAgICogJ2FwcGVhci1hY3RpdmUnIGNsYXNzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXInIG9yXG4gICAqICdhcHBlYXInIGNsYXNzZXMgYXJlICoqcmVtb3ZlZCoqIGFuZCB0aGUgYGRvbmVgIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBET00gbm9kZS5cbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQnIGNsYXNzIGlzXG4gICAqIGFwcGxpZWQuXG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdC1hY3RpdmUnIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdCcgY2xhc3Nlc1xuICAgKiBhcmUgKipyZW1vdmVkKiogYW5kIHRoZSBgZXhpdC1kb25lYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIG5vZGUuXG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmNcbn0pIDoge307XG5leHBvcnQgZGVmYXVsdCBDU1NUcmFuc2l0aW9uOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFRyYW5zaXRpb25Hcm91cCBmcm9tICcuL1RyYW5zaXRpb25Hcm91cCc7XG4vKipcbiAqIFRoZSBgPFJlcGxhY2VUcmFuc2l0aW9uPmAgY29tcG9uZW50IGlzIGEgc3BlY2lhbGl6ZWQgYFRyYW5zaXRpb25gIGNvbXBvbmVudFxuICogdGhhdCBhbmltYXRlcyBiZXR3ZWVuIHR3byBjaGlsZHJlbi5cbiAqXG4gKiBgYGBqc3hcbiAqIDxSZXBsYWNlVHJhbnNpdGlvbiBpbj5cbiAqICAgPEZhZGU+PGRpdj5JIGFwcGVhciBmaXJzdDwvZGl2PjwvRmFkZT5cbiAqICAgPEZhZGU+PGRpdj5JIHJlcGxhY2UgdGhlIGFib3ZlPC9kaXY+PC9GYWRlPlxuICogPC9SZXBsYWNlVHJhbnNpdGlvbj5cbiAqIGBgYFxuICovXG5cbnZhciBSZXBsYWNlVHJhbnNpdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShSZXBsYWNlVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVwbGFjZVRyYW5zaXRpb24oKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIF9hcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgX2FyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChfYXJncykpIHx8IHRoaXM7XG5cbiAgICBfdGhpcy5oYW5kbGVFbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRW50ZXInLCAwLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRW50ZXJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkVudGVyaW5nJywgMCwgYXJncyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUVudGVyZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgICAgYXJnc1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkVudGVyZWQnLCAwLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRXhpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgICAgICBhcmdzW19rZXk1XSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRXhpdCcsIDEsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFeGl0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW42KSwgX2tleTYgPSAwOyBfa2V5NiA8IF9sZW42OyBfa2V5NisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTZdID0gYXJndW1lbnRzW19rZXk2XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FeGl0aW5nJywgMSwgYXJncyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUV4aXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW43ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNyksIF9rZXk3ID0gMDsgX2tleTcgPCBfbGVuNzsgX2tleTcrKykge1xuICAgICAgICBhcmdzW19rZXk3XSA9IGFyZ3VtZW50c1tfa2V5N107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRXhpdGVkJywgMSwgYXJncyk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBSZXBsYWNlVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmhhbmRsZUxpZmVjeWNsZSA9IGZ1bmN0aW9uIGhhbmRsZUxpZmVjeWNsZShoYW5kbGVyLCBpZHgsIG9yaWdpbmFsQXJncykge1xuICAgIHZhciBfY2hpbGQkcHJvcHM7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIHZhciBjaGlsZCA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pW2lkeF07XG4gICAgaWYgKGNoaWxkLnByb3BzW2hhbmRsZXJdKSAoX2NoaWxkJHByb3BzID0gY2hpbGQucHJvcHMpW2hhbmRsZXJdLmFwcGx5KF9jaGlsZCRwcm9wcywgb3JpZ2luYWxBcmdzKTtcblxuICAgIGlmICh0aGlzLnByb3BzW2hhbmRsZXJdKSB7XG4gICAgICB2YXIgbWF5YmVOb2RlID0gY2hpbGQucHJvcHMubm9kZVJlZiA/IHVuZGVmaW5lZCA6IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgdGhpcy5wcm9wc1toYW5kbGVyXShtYXliZU5vZGUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGluUHJvcCA9IF90aGlzJHByb3BzLmluLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImluXCJdKTtcblxuICAgIHZhciBfUmVhY3QkQ2hpbGRyZW4kdG9BcnIgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKSxcbiAgICAgICAgZmlyc3QgPSBfUmVhY3QkQ2hpbGRyZW4kdG9BcnJbMF0sXG4gICAgICAgIHNlY29uZCA9IF9SZWFjdCRDaGlsZHJlbiR0b0FyclsxXTtcblxuICAgIGRlbGV0ZSBwcm9wcy5vbkVudGVyO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkVudGVyaW5nO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkVudGVyZWQ7XG4gICAgZGVsZXRlIHByb3BzLm9uRXhpdDtcbiAgICBkZWxldGUgcHJvcHMub25FeGl0aW5nO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkV4aXRlZDtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkdyb3VwLCBwcm9wcywgaW5Qcm9wID8gUmVhY3QuY2xvbmVFbGVtZW50KGZpcnN0LCB7XG4gICAgICBrZXk6ICdmaXJzdCcsXG4gICAgICBvbkVudGVyOiB0aGlzLmhhbmRsZUVudGVyLFxuICAgICAgb25FbnRlcmluZzogdGhpcy5oYW5kbGVFbnRlcmluZyxcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5oYW5kbGVFbnRlcmVkXG4gICAgfSkgOiBSZWFjdC5jbG9uZUVsZW1lbnQoc2Vjb25kLCB7XG4gICAgICBrZXk6ICdzZWNvbmQnLFxuICAgICAgb25FbnRlcjogdGhpcy5oYW5kbGVFeGl0LFxuICAgICAgb25FbnRlcmluZzogdGhpcy5oYW5kbGVFeGl0aW5nLFxuICAgICAgb25FbnRlcmVkOiB0aGlzLmhhbmRsZUV4aXRlZFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gUmVwbGFjZVRyYW5zaXRpb247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblJlcGxhY2VUcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgaW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihwcm9wcywgcHJvcE5hbWUpIHtcbiAgICBpZiAoUmVhY3QuQ2hpbGRyZW4uY291bnQocHJvcHNbcHJvcE5hbWVdKSAhPT0gMikgcmV0dXJuIG5ldyBFcnJvcihcIlxcXCJcIiArIHByb3BOYW1lICsgXCJcXFwiIG11c3QgYmUgZXhhY3RseSB0d28gdHJhbnNpdGlvbiBjb21wb25lbnRzLlwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSA6IHt9O1xuZXhwb3J0IGRlZmF1bHQgUmVwbGFjZVRyYW5zaXRpb247IiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5cbnZhciBfbGVhdmVSZW5kZXJzLCBfZW50ZXJSZW5kZXJzO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEVOVEVSRUQsIEVOVEVSSU5HLCBFWElUSU5HIH0gZnJvbSAnLi9UcmFuc2l0aW9uJztcbmltcG9ydCBUcmFuc2l0aW9uR3JvdXBDb250ZXh0IGZyb20gJy4vVHJhbnNpdGlvbkdyb3VwQ29udGV4dCc7XG5cbmZ1bmN0aW9uIGFyZUNoaWxkcmVuRGlmZmVyZW50KG9sZENoaWxkcmVuLCBuZXdDaGlsZHJlbikge1xuICBpZiAob2xkQ2hpbGRyZW4gPT09IG5ld0NoaWxkcmVuKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KG9sZENoaWxkcmVuKSAmJiBSZWFjdC5pc1ZhbGlkRWxlbWVudChuZXdDaGlsZHJlbikgJiYgb2xkQ2hpbGRyZW4ua2V5ICE9IG51bGwgJiYgb2xkQ2hpbGRyZW4ua2V5ID09PSBuZXdDaGlsZHJlbi5rZXkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogRW51bSBvZiBtb2RlcyBmb3IgU3dpdGNoVHJhbnNpdGlvbiBjb21wb25lbnRcbiAqIEBlbnVtIHsgc3RyaW5nIH1cbiAqL1xuXG5cbmV4cG9ydCB2YXIgbW9kZXMgPSB7XG4gIG91dDogJ291dC1pbicsXG4gIGluOiAnaW4tb3V0J1xufTtcblxudmFyIGNhbGxIb29rID0gZnVuY3Rpb24gY2FsbEhvb2soZWxlbWVudCwgbmFtZSwgY2IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2VsZW1lbnQkcHJvcHM7XG5cbiAgICBlbGVtZW50LnByb3BzW25hbWVdICYmIChfZWxlbWVudCRwcm9wcyA9IGVsZW1lbnQucHJvcHMpW25hbWVdLmFwcGx5KF9lbGVtZW50JHByb3BzLCBhcmd1bWVudHMpO1xuICAgIGNiKCk7XG4gIH07XG59O1xuXG52YXIgbGVhdmVSZW5kZXJzID0gKF9sZWF2ZVJlbmRlcnMgPSB7fSwgX2xlYXZlUmVuZGVyc1ttb2Rlcy5vdXRdID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIGN1cnJlbnQgPSBfcmVmLmN1cnJlbnQsXG4gICAgICBjaGFuZ2VTdGF0ZSA9IF9yZWYuY2hhbmdlU3RhdGU7XG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY3VycmVudCwge1xuICAgIGluOiBmYWxzZSxcbiAgICBvbkV4aXRlZDogY2FsbEhvb2soY3VycmVudCwgJ29uRXhpdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgY2hhbmdlU3RhdGUoRU5URVJJTkcsIG51bGwpO1xuICAgIH0pXG4gIH0pO1xufSwgX2xlYXZlUmVuZGVyc1ttb2Rlcy5pbl0gPSBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgdmFyIGN1cnJlbnQgPSBfcmVmMi5jdXJyZW50LFxuICAgICAgY2hhbmdlU3RhdGUgPSBfcmVmMi5jaGFuZ2VTdGF0ZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW47XG4gIHJldHVybiBbY3VycmVudCwgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgaW46IHRydWUsXG4gICAgb25FbnRlcmVkOiBjYWxsSG9vayhjaGlsZHJlbiwgJ29uRW50ZXJlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoYW5nZVN0YXRlKEVOVEVSSU5HKTtcbiAgICB9KVxuICB9KV07XG59LCBfbGVhdmVSZW5kZXJzKTtcbnZhciBlbnRlclJlbmRlcnMgPSAoX2VudGVyUmVuZGVycyA9IHt9LCBfZW50ZXJSZW5kZXJzW21vZGVzLm91dF0gPSBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZjMuY2hpbGRyZW4sXG4gICAgICBjaGFuZ2VTdGF0ZSA9IF9yZWYzLmNoYW5nZVN0YXRlO1xuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgaW46IHRydWUsXG4gICAgb25FbnRlcmVkOiBjYWxsSG9vayhjaGlsZHJlbiwgJ29uRW50ZXJlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoYW5nZVN0YXRlKEVOVEVSRUQsIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICBpbjogdHJ1ZVxuICAgICAgfSkpO1xuICAgIH0pXG4gIH0pO1xufSwgX2VudGVyUmVuZGVyc1ttb2Rlcy5pbl0gPSBmdW5jdGlvbiAoX3JlZjQpIHtcbiAgdmFyIGN1cnJlbnQgPSBfcmVmNC5jdXJyZW50LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmNC5jaGlsZHJlbixcbiAgICAgIGNoYW5nZVN0YXRlID0gX3JlZjQuY2hhbmdlU3RhdGU7XG4gIHJldHVybiBbUmVhY3QuY2xvbmVFbGVtZW50KGN1cnJlbnQsIHtcbiAgICBpbjogZmFsc2UsXG4gICAgb25FeGl0ZWQ6IGNhbGxIb29rKGN1cnJlbnQsICdvbkV4aXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoYW5nZVN0YXRlKEVOVEVSRUQsIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICBpbjogdHJ1ZVxuICAgICAgfSkpO1xuICAgIH0pXG4gIH0pLCBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICBpbjogdHJ1ZVxuICB9KV07XG59LCBfZW50ZXJSZW5kZXJzKTtcbi8qKlxuICogQSB0cmFuc2l0aW9uIGNvbXBvbmVudCBpbnNwaXJlZCBieSB0aGUgW3Z1ZSB0cmFuc2l0aW9uIG1vZGVzXShodHRwczovL3Z1ZWpzLm9yZy92Mi9ndWlkZS90cmFuc2l0aW9ucy5odG1sI1RyYW5zaXRpb24tTW9kZXMpLlxuICogWW91IGNhbiB1c2UgaXQgd2hlbiB5b3Ugd2FudCB0byBjb250cm9sIHRoZSByZW5kZXIgYmV0d2VlbiBzdGF0ZSB0cmFuc2l0aW9ucy5cbiAqIEJhc2VkIG9uIHRoZSBzZWxlY3RlZCBtb2RlIGFuZCB0aGUgY2hpbGQncyBrZXkgd2hpY2ggaXMgdGhlIGBUcmFuc2l0aW9uYCBvciBgQ1NTVHJhbnNpdGlvbmAgY29tcG9uZW50LCB0aGUgYFN3aXRjaFRyYW5zaXRpb25gIG1ha2VzIGEgY29uc2lzdGVudCB0cmFuc2l0aW9uIGJldHdlZW4gdGhlbS5cbiAqXG4gKiBJZiB0aGUgYG91dC1pbmAgbW9kZSBpcyBzZWxlY3RlZCwgdGhlIGBTd2l0Y2hUcmFuc2l0aW9uYCB3YWl0cyB1bnRpbCB0aGUgb2xkIGNoaWxkIGxlYXZlcyBhbmQgdGhlbiBpbnNlcnRzIGEgbmV3IGNoaWxkLlxuICogSWYgdGhlIGBpbi1vdXRgIG1vZGUgaXMgc2VsZWN0ZWQsIHRoZSBgU3dpdGNoVHJhbnNpdGlvbmAgaW5zZXJ0cyBhIG5ldyBjaGlsZCBmaXJzdCwgd2FpdHMgZm9yIHRoZSBuZXcgY2hpbGQgdG8gZW50ZXIgYW5kIHRoZW4gcmVtb3ZlcyB0aGUgb2xkIGNoaWxkLlxuICpcbiAqICoqTm90ZSoqOiBJZiB5b3Ugd2FudCB0aGUgYW5pbWF0aW9uIHRvIGhhcHBlbiBzaW11bHRhbmVvdXNseVxuICogKHRoYXQgaXMsIHRvIGhhdmUgdGhlIG9sZCBjaGlsZCByZW1vdmVkIGFuZCBhIG5ldyBjaGlsZCBpbnNlcnRlZCAqKmF0IHRoZSBzYW1lIHRpbWUqKiksXG4gKiB5b3Ugc2hvdWxkIHVzZVxuICogW2BUcmFuc2l0aW9uR3JvdXBgXShodHRwczovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3RyYW5zaXRpb24tZ3JvdXApXG4gKiBpbnN0ZWFkLlxuICpcbiAqIGBgYGpzeFxuICogZnVuY3Rpb24gQXBwKCkge1xuICogIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICogIHJldHVybiAoXG4gKiAgICA8U3dpdGNoVHJhbnNpdGlvbj5cbiAqICAgICAgPENTU1RyYW5zaXRpb25cbiAqICAgICAgICBrZXk9e3N0YXRlID8gXCJHb29kYnllLCB3b3JsZCFcIiA6IFwiSGVsbG8sIHdvcmxkIVwifVxuICogICAgICAgIGFkZEVuZExpc3RlbmVyPXsobm9kZSwgZG9uZSkgPT4gbm9kZS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBkb25lLCBmYWxzZSl9XG4gKiAgICAgICAgY2xhc3NOYW1lcz0nZmFkZSdcbiAqICAgICAgPlxuICogICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U3RhdGUoc3RhdGUgPT4gIXN0YXRlKX0+XG4gKiAgICAgICAgICB7c3RhdGUgPyBcIkdvb2RieWUsIHdvcmxkIVwiIDogXCJIZWxsbywgd29ybGQhXCJ9XG4gKiAgICAgICAgPC9idXR0b24+XG4gKiAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAqICAgIDwvU3dpdGNoVHJhbnNpdGlvbj5cbiAqICApO1xuICogfVxuICogYGBgXG4gKlxuICogYGBgY3NzXG4gKiAuZmFkZS1lbnRlcntcbiAqICAgIG9wYWNpdHk6IDA7XG4gKiB9XG4gKiAuZmFkZS1leGl0e1xuICogICAgb3BhY2l0eTogMTtcbiAqIH1cbiAqIC5mYWRlLWVudGVyLWFjdGl2ZXtcbiAqICAgIG9wYWNpdHk6IDE7XG4gKiB9XG4gKiAuZmFkZS1leGl0LWFjdGl2ZXtcbiAqICAgIG9wYWNpdHk6IDA7XG4gKiB9XG4gKiAuZmFkZS1lbnRlci1hY3RpdmUsXG4gKiAuZmFkZS1leGl0LWFjdGl2ZXtcbiAqICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXM7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG52YXIgU3dpdGNoVHJhbnNpdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShTd2l0Y2hUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTd2l0Y2hUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc3RhdHVzOiBFTlRFUkVELFxuICAgICAgY3VycmVudDogbnVsbFxuICAgIH07XG4gICAgX3RoaXMuYXBwZWFyZWQgPSBmYWxzZTtcblxuICAgIF90aGlzLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKHN0YXR1cywgY3VycmVudCkge1xuICAgICAgaWYgKGN1cnJlbnQgPT09IHZvaWQgMCkge1xuICAgICAgICBjdXJyZW50ID0gX3RoaXMuc3RhdGUuY3VycmVudDtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgY3VycmVudDogY3VycmVudFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTd2l0Y2hUcmFuc2l0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmFwcGVhcmVkID0gdHJ1ZTtcbiAgfTtcblxuICBTd2l0Y2hUcmFuc2l0aW9uLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBpZiAocHJvcHMuY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudDogbnVsbFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuc3RhdHVzID09PSBFTlRFUklORyAmJiBwcm9wcy5tb2RlID09PSBtb2Rlcy5pbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiBFTlRFUklOR1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuY3VycmVudCAmJiBhcmVDaGlsZHJlbkRpZmZlcmVudChzdGF0ZS5jdXJyZW50LCBwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogRVhJVElOR1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudDogUmVhY3QuY2xvbmVFbGVtZW50KHByb3BzLmNoaWxkcmVuLCB7XG4gICAgICAgIGluOiB0cnVlXG4gICAgICB9KVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBtb2RlID0gX3RoaXMkcHJvcHMubW9kZSxcbiAgICAgICAgX3RoaXMkc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICBzdGF0dXMgPSBfdGhpcyRzdGF0ZS5zdGF0dXMsXG4gICAgICAgIGN1cnJlbnQgPSBfdGhpcyRzdGF0ZS5jdXJyZW50O1xuICAgIHZhciBkYXRhID0ge1xuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgY3VycmVudDogY3VycmVudCxcbiAgICAgIGNoYW5nZVN0YXRlOiB0aGlzLmNoYW5nZVN0YXRlLFxuICAgICAgc3RhdHVzOiBzdGF0dXNcbiAgICB9O1xuICAgIHZhciBjb21wb25lbnQ7XG5cbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSBFTlRFUklORzpcbiAgICAgICAgY29tcG9uZW50ID0gZW50ZXJSZW5kZXJzW21vZGVdKGRhdGEpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBFWElUSU5HOlxuICAgICAgICBjb21wb25lbnQgPSBsZWF2ZVJlbmRlcnNbbW9kZV0oZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVOVEVSRUQ6XG4gICAgICAgIGNvbXBvbmVudCA9IGN1cnJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Hcm91cENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGlzTW91bnRpbmc6ICF0aGlzLmFwcGVhcmVkXG4gICAgICB9XG4gICAgfSwgY29tcG9uZW50KTtcbiAgfTtcblxuICByZXR1cm4gU3dpdGNoVHJhbnNpdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuU3dpdGNoVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBUcmFuc2l0aW9uIG1vZGVzLlxuICAgKiBgb3V0LWluYDogQ3VycmVudCBlbGVtZW50IHRyYW5zaXRpb25zIG91dCBmaXJzdCwgdGhlbiB3aGVuIGNvbXBsZXRlLCB0aGUgbmV3IGVsZW1lbnQgdHJhbnNpdGlvbnMgaW4uXG4gICAqIGBpbi1vdXRgOiBOZXcgZWxlbWVudCB0cmFuc2l0aW9ucyBpbiBmaXJzdCwgdGhlbiB3aGVuIGNvbXBsZXRlLCB0aGUgY3VycmVudCBlbGVtZW50IHRyYW5zaXRpb25zIG91dC5cbiAgICpcbiAgICogQHR5cGUgeydvdXQtaW4nfCdpbi1vdXQnfVxuICAgKi9cbiAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKFttb2Rlcy5pbiwgbW9kZXMub3V0XSksXG5cbiAgLyoqXG4gICAqIEFueSBgVHJhbnNpdGlvbmAgb3IgYENTU1RyYW5zaXRpb25gIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkXSlcbn0gOiB7fTtcblN3aXRjaFRyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBtb2RlOiBtb2Rlcy5vdXRcbn07XG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hUcmFuc2l0aW9uOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyB0aW1lb3V0c1NoYXBlIH0gZnJvbSAnLi91dGlscy9Qcm9wVHlwZXMnO1xuaW1wb3J0IFRyYW5zaXRpb25Hcm91cENvbnRleHQgZnJvbSAnLi9UcmFuc2l0aW9uR3JvdXBDb250ZXh0JztcbmV4cG9ydCB2YXIgVU5NT1VOVEVEID0gJ3VubW91bnRlZCc7XG5leHBvcnQgdmFyIEVYSVRFRCA9ICdleGl0ZWQnO1xuZXhwb3J0IHZhciBFTlRFUklORyA9ICdlbnRlcmluZyc7XG5leHBvcnQgdmFyIEVOVEVSRUQgPSAnZW50ZXJlZCc7XG5leHBvcnQgdmFyIEVYSVRJTkcgPSAnZXhpdGluZyc7XG4vKipcbiAqIFRoZSBUcmFuc2l0aW9uIGNvbXBvbmVudCBsZXRzIHlvdSBkZXNjcmliZSBhIHRyYW5zaXRpb24gZnJvbSBvbmUgY29tcG9uZW50XG4gKiBzdGF0ZSB0byBhbm90aGVyIF9vdmVyIHRpbWVfIHdpdGggYSBzaW1wbGUgZGVjbGFyYXRpdmUgQVBJLiBNb3N0IGNvbW1vbmx5XG4gKiBpdCdzIHVzZWQgdG8gYW5pbWF0ZSB0aGUgbW91bnRpbmcgYW5kIHVubW91bnRpbmcgb2YgYSBjb21wb25lbnQsIGJ1dCBjYW4gYWxzb1xuICogYmUgdXNlZCB0byBkZXNjcmliZSBpbi1wbGFjZSB0cmFuc2l0aW9uIHN0YXRlcyBhcyB3ZWxsLlxuICpcbiAqIC0tLVxuICpcbiAqICoqTm90ZSoqOiBgVHJhbnNpdGlvbmAgaXMgYSBwbGF0Zm9ybS1hZ25vc3RpYyBiYXNlIGNvbXBvbmVudC4gSWYgeW91J3JlIHVzaW5nXG4gKiB0cmFuc2l0aW9ucyBpbiBDU1MsIHlvdSdsbCBwcm9iYWJseSB3YW50IHRvIHVzZVxuICogW2BDU1NUcmFuc2l0aW9uYF0oaHR0cHM6Ly9yZWFjdGNvbW11bml0eS5vcmcvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9jc3MtdHJhbnNpdGlvbilcbiAqIGluc3RlYWQuIEl0IGluaGVyaXRzIGFsbCB0aGUgZmVhdHVyZXMgb2YgYFRyYW5zaXRpb25gLCBidXQgY29udGFpbnNcbiAqIGFkZGl0aW9uYWwgZmVhdHVyZXMgbmVjZXNzYXJ5IHRvIHBsYXkgbmljZSB3aXRoIENTUyB0cmFuc2l0aW9ucyAoaGVuY2UgdGhlXG4gKiBuYW1lIG9mIHRoZSBjb21wb25lbnQpLlxuICpcbiAqIC0tLVxuICpcbiAqIEJ5IGRlZmF1bHQgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgZG9lcyBub3QgYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHRoZVxuICogY29tcG9uZW50IGl0IHJlbmRlcnMsIGl0IG9ubHkgdHJhY2tzIFwiZW50ZXJcIiBhbmQgXCJleGl0XCIgc3RhdGVzIGZvciB0aGVcbiAqIGNvbXBvbmVudHMuIEl0J3MgdXAgdG8geW91IHRvIGdpdmUgbWVhbmluZyBhbmQgZWZmZWN0IHRvIHRob3NlIHN0YXRlcy4gRm9yXG4gKiBleGFtcGxlIHdlIGNhbiBhZGQgc3R5bGVzIHRvIGEgY29tcG9uZW50IHdoZW4gaXQgZW50ZXJzIG9yIGV4aXRzOlxuICpcbiAqIGBgYGpzeFxuICogaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuICpcbiAqIGNvbnN0IGR1cmF0aW9uID0gMzAwO1xuICpcbiAqIGNvbnN0IGRlZmF1bHRTdHlsZSA9IHtcbiAqICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHtkdXJhdGlvbn1tcyBlYXNlLWluLW91dGAsXG4gKiAgIG9wYWNpdHk6IDAsXG4gKiB9XG4gKlxuICogY29uc3QgdHJhbnNpdGlvblN0eWxlcyA9IHtcbiAqICAgZW50ZXJpbmc6IHsgb3BhY2l0eTogMSB9LFxuICogICBlbnRlcmVkOiAgeyBvcGFjaXR5OiAxIH0sXG4gKiAgIGV4aXRpbmc6ICB7IG9wYWNpdHk6IDAgfSxcbiAqICAgZXhpdGVkOiAgeyBvcGFjaXR5OiAwIH0sXG4gKiB9O1xuICpcbiAqIGNvbnN0IEZhZGUgPSAoeyBpbjogaW5Qcm9wIH0pID0+IChcbiAqICAgPFRyYW5zaXRpb24gaW49e2luUHJvcH0gdGltZW91dD17ZHVyYXRpb259PlxuICogICAgIHtzdGF0ZSA9PiAoXG4gKiAgICAgICA8ZGl2IHN0eWxlPXt7XG4gKiAgICAgICAgIC4uLmRlZmF1bHRTdHlsZSxcbiAqICAgICAgICAgLi4udHJhbnNpdGlvblN0eWxlc1tzdGF0ZV1cbiAqICAgICAgIH19PlxuICogICAgICAgICBJJ20gYSBmYWRlIFRyYW5zaXRpb24hXG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICApfVxuICogICA8L1RyYW5zaXRpb24+XG4gKiApO1xuICogYGBgXG4gKlxuICogVGhlcmUgYXJlIDQgbWFpbiBzdGF0ZXMgYSBUcmFuc2l0aW9uIGNhbiBiZSBpbjpcbiAqICAtIGAnZW50ZXJpbmcnYFxuICogIC0gYCdlbnRlcmVkJ2BcbiAqICAtIGAnZXhpdGluZydgXG4gKiAgLSBgJ2V4aXRlZCdgXG4gKlxuICogVHJhbnNpdGlvbiBzdGF0ZSBpcyB0b2dnbGVkIHZpYSB0aGUgYGluYCBwcm9wLiBXaGVuIGB0cnVlYCB0aGUgY29tcG9uZW50XG4gKiBiZWdpbnMgdGhlIFwiRW50ZXJcIiBzdGFnZS4gRHVyaW5nIHRoaXMgc3RhZ2UsIHRoZSBjb21wb25lbnQgd2lsbCBzaGlmdCBmcm9tXG4gKiBpdHMgY3VycmVudCB0cmFuc2l0aW9uIHN0YXRlLCB0byBgJ2VudGVyaW5nJ2AgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGVcbiAqIHRyYW5zaXRpb24gYW5kIHRoZW4gdG8gdGhlIGAnZW50ZXJlZCdgIHN0YWdlIG9uY2UgaXQncyBjb21wbGV0ZS4gTGV0J3MgdGFrZVxuICogdGhlIGZvbGxvd2luZyBleGFtcGxlICh3ZSdsbCB1c2UgdGhlXG4gKiBbdXNlU3RhdGVdKGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ob29rcy1yZWZlcmVuY2UuaHRtbCN1c2VzdGF0ZSkgaG9vayk6XG4gKlxuICogYGBganN4XG4gKiBmdW5jdGlvbiBBcHAoKSB7XG4gKiAgIGNvbnN0IFtpblByb3AsIHNldEluUHJvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gKiAgIHJldHVybiAoXG4gKiAgICAgPGRpdj5cbiAqICAgICAgIDxUcmFuc2l0aW9uIGluPXtpblByb3B9IHRpbWVvdXQ9ezUwMH0+XG4gKiAgICAgICAgIHtzdGF0ZSA9PiAoXG4gKiAgICAgICAgICAgLy8gLi4uXG4gKiAgICAgICAgICl9XG4gKiAgICAgICA8L1RyYW5zaXRpb24+XG4gKiAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEluUHJvcCh0cnVlKX0+XG4gKiAgICAgICAgIENsaWNrIHRvIEVudGVyXG4gKiAgICAgICA8L2J1dHRvbj5cbiAqICAgICA8L2Rpdj5cbiAqICAgKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIFdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkIHRoZSBjb21wb25lbnQgd2lsbCBzaGlmdCB0byB0aGUgYCdlbnRlcmluZydgIHN0YXRlXG4gKiBhbmQgc3RheSB0aGVyZSBmb3IgNTAwbXMgKHRoZSB2YWx1ZSBvZiBgdGltZW91dGApIGJlZm9yZSBpdCBmaW5hbGx5IHN3aXRjaGVzXG4gKiB0byBgJ2VudGVyZWQnYC5cbiAqXG4gKiBXaGVuIGBpbmAgaXMgYGZhbHNlYCB0aGUgc2FtZSB0aGluZyBoYXBwZW5zIGV4Y2VwdCB0aGUgc3RhdGUgbW92ZXMgZnJvbVxuICogYCdleGl0aW5nJ2AgdG8gYCdleGl0ZWQnYC5cbiAqL1xuXG52YXIgVHJhbnNpdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uKHByb3BzLCBjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XG4gICAgdmFyIHBhcmVudEdyb3VwID0gY29udGV4dDsgLy8gSW4gdGhlIGNvbnRleHQgb2YgYSBUcmFuc2l0aW9uR3JvdXAgYWxsIGVudGVycyBhcmUgcmVhbGx5IGFwcGVhcnNcblxuICAgIHZhciBhcHBlYXIgPSBwYXJlbnRHcm91cCAmJiAhcGFyZW50R3JvdXAuaXNNb3VudGluZyA/IHByb3BzLmVudGVyIDogcHJvcHMuYXBwZWFyO1xuICAgIHZhciBpbml0aWFsU3RhdHVzO1xuICAgIF90aGlzLmFwcGVhclN0YXR1cyA9IG51bGw7XG5cbiAgICBpZiAocHJvcHMuaW4pIHtcbiAgICAgIGlmIChhcHBlYXIpIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVYSVRFRDtcbiAgICAgICAgX3RoaXMuYXBwZWFyU3RhdHVzID0gRU5URVJJTkc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRU5URVJFRDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb3BzLnVubW91bnRPbkV4aXQgfHwgcHJvcHMubW91bnRPbkVudGVyKSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBVTk1PVU5URUQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRVhJVEVEO1xuICAgICAgfVxuICAgIH1cblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc3RhdHVzOiBpbml0aWFsU3RhdHVzXG4gICAgfTtcbiAgICBfdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFRyYW5zaXRpb24uZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKF9yZWYsIHByZXZTdGF0ZSkge1xuICAgIHZhciBuZXh0SW4gPSBfcmVmLmluO1xuXG4gICAgaWYgKG5leHRJbiAmJiBwcmV2U3RhdGUuc3RhdHVzID09PSBVTk1PVU5URUQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9IC8vIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHByZXZQcm9wcykge1xuICAvLyAgIGxldCBuZXh0U3RhdHVzID0gbnVsbFxuICAvLyAgIGlmIChwcmV2UHJvcHMgIT09IHRoaXMucHJvcHMpIHtcbiAgLy8gICAgIGNvbnN0IHsgc3RhdHVzIH0gPSB0aGlzLnN0YXRlXG4gIC8vICAgICBpZiAodGhpcy5wcm9wcy5pbikge1xuICAvLyAgICAgICBpZiAoc3RhdHVzICE9PSBFTlRFUklORyAmJiBzdGF0dXMgIT09IEVOVEVSRUQpIHtcbiAgLy8gICAgICAgICBuZXh0U3RhdHVzID0gRU5URVJJTkdcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcgfHwgc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gIC8vICAgICAgICAgbmV4dFN0YXR1cyA9IEVYSVRJTkdcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4geyBuZXh0U3RhdHVzIH1cbiAgLy8gfVxuICA7XG5cbiAgdmFyIF9wcm90byA9IFRyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlU3RhdHVzKHRydWUsIHRoaXMuYXBwZWFyU3RhdHVzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciBuZXh0U3RhdHVzID0gbnVsbDtcblxuICAgIGlmIChwcmV2UHJvcHMgIT09IHRoaXMucHJvcHMpIHtcbiAgICAgIHZhciBzdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cztcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaW4pIHtcbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gRU5URVJJTkcgJiYgc3RhdHVzICE9PSBFTlRFUkVEKSB7XG4gICAgICAgICAgbmV4dFN0YXR1cyA9IEVOVEVSSU5HO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBFTlRFUklORyB8fCBzdGF0dXMgPT09IEVOVEVSRUQpIHtcbiAgICAgICAgICBuZXh0U3RhdHVzID0gRVhJVElORztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU3RhdHVzKGZhbHNlLCBuZXh0U3RhdHVzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuICB9O1xuXG4gIF9wcm90by5nZXRUaW1lb3V0cyA9IGZ1bmN0aW9uIGdldFRpbWVvdXRzKCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpcy5wcm9wcy50aW1lb3V0O1xuICAgIHZhciBleGl0LCBlbnRlciwgYXBwZWFyO1xuICAgIGV4aXQgPSBlbnRlciA9IGFwcGVhciA9IHRpbWVvdXQ7XG5cbiAgICBpZiAodGltZW91dCAhPSBudWxsICYmIHR5cGVvZiB0aW1lb3V0ICE9PSAnbnVtYmVyJykge1xuICAgICAgZXhpdCA9IHRpbWVvdXQuZXhpdDtcbiAgICAgIGVudGVyID0gdGltZW91dC5lbnRlcjsgLy8gVE9ETzogcmVtb3ZlIGZhbGxiYWNrIGZvciBuZXh0IG1ham9yXG5cbiAgICAgIGFwcGVhciA9IHRpbWVvdXQuYXBwZWFyICE9PSB1bmRlZmluZWQgPyB0aW1lb3V0LmFwcGVhciA6IGVudGVyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBleGl0OiBleGl0LFxuICAgICAgZW50ZXI6IGVudGVyLFxuICAgICAgYXBwZWFyOiBhcHBlYXJcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVTdGF0dXMgPSBmdW5jdGlvbiB1cGRhdGVTdGF0dXMobW91bnRpbmcsIG5leHRTdGF0dXMpIHtcbiAgICBpZiAobW91bnRpbmcgPT09IHZvaWQgMCkge1xuICAgICAgbW91bnRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFN0YXR1cyAhPT0gbnVsbCkge1xuICAgICAgLy8gbmV4dFN0YXR1cyB3aWxsIGFsd2F5cyBiZSBFTlRFUklORyBvciBFWElUSU5HLlxuICAgICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcblxuICAgICAgaWYgKG5leHRTdGF0dXMgPT09IEVOVEVSSU5HKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUVudGVyKG1vdW50aW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUV4aXQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudW5tb3VudE9uRXhpdCAmJiB0aGlzLnN0YXRlLnN0YXR1cyA9PT0gRVhJVEVEKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBVTk1PVU5URURcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gcGVyZm9ybUVudGVyKG1vdW50aW5nKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgZW50ZXIgPSB0aGlzLnByb3BzLmVudGVyO1xuICAgIHZhciBhcHBlYXJpbmcgPSB0aGlzLmNvbnRleHQgPyB0aGlzLmNvbnRleHQuaXNNb3VudGluZyA6IG1vdW50aW5nO1xuXG4gICAgdmFyIF9yZWYyID0gdGhpcy5wcm9wcy5ub2RlUmVmID8gW2FwcGVhcmluZ10gOiBbUmVhY3RET00uZmluZERPTU5vZGUodGhpcyksIGFwcGVhcmluZ10sXG4gICAgICAgIG1heWJlTm9kZSA9IF9yZWYyWzBdLFxuICAgICAgICBtYXliZUFwcGVhcmluZyA9IF9yZWYyWzFdO1xuXG4gICAgdmFyIHRpbWVvdXRzID0gdGhpcy5nZXRUaW1lb3V0cygpO1xuICAgIHZhciBlbnRlclRpbWVvdXQgPSBhcHBlYXJpbmcgPyB0aW1lb3V0cy5hcHBlYXIgOiB0aW1lb3V0cy5lbnRlcjsgLy8gbm8gZW50ZXIgYW5pbWF0aW9uIHNraXAgcmlnaHQgdG8gRU5URVJFRFxuICAgIC8vIGlmIHdlIGFyZSBtb3VudGluZyBhbmQgcnVubmluZyB0aGlzIGl0IG1lYW5zIGFwcGVhciBfbXVzdF8gYmUgc2V0XG5cbiAgICBpZiAoIW1vdW50aW5nICYmICFlbnRlciB8fCBjb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBFTlRFUkVEXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyZWQobWF5YmVOb2RlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25FbnRlcihtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKTtcbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICBzdGF0dXM6IEVOVEVSSU5HXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJpbmcobWF5YmVOb2RlLCBtYXliZUFwcGVhcmluZyk7XG5cbiAgICAgIF90aGlzMi5vblRyYW5zaXRpb25FbmQoZW50ZXJUaW1lb3V0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5zYWZlU2V0U3RhdGUoe1xuICAgICAgICAgIHN0YXR1czogRU5URVJFRFxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucGVyZm9ybUV4aXQgPSBmdW5jdGlvbiBwZXJmb3JtRXhpdCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBleGl0ID0gdGhpcy5wcm9wcy5leGl0O1xuICAgIHZhciB0aW1lb3V0cyA9IHRoaXMuZ2V0VGltZW91dHMoKTtcbiAgICB2YXIgbWF5YmVOb2RlID0gdGhpcy5wcm9wcy5ub2RlUmVmID8gdW5kZWZpbmVkIDogUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7IC8vIG5vIGV4aXQgYW5pbWF0aW9uIHNraXAgcmlnaHQgdG8gRVhJVEVEXG5cbiAgICBpZiAoIWV4aXQgfHwgY29uZmlnLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChtYXliZU5vZGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkV4aXQobWF5YmVOb2RlKTtcbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICBzdGF0dXM6IEVYSVRJTkdcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMucHJvcHMub25FeGl0aW5nKG1heWJlTm9kZSk7XG5cbiAgICAgIF90aGlzMy5vblRyYW5zaXRpb25FbmQodGltZW91dHMuZXhpdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG1heWJlTm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIGNhbmNlbE5leHRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5uZXh0Q2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCgpO1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2FmZVNldFN0YXRlID0gZnVuY3Rpb24gc2FmZVNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAvLyBUaGlzIHNob3VsZG4ndCBiZSBuZWNlc3NhcnksIGJ1dCB0aGVyZSBhcmUgd2VpcmQgcmFjZSBjb25kaXRpb25zIHdpdGhcbiAgICAvLyBzZXRTdGF0ZSBjYWxsYmFja3MgYW5kIHVubW91bnRpbmcgaW4gdGVzdGluZywgc28gYWx3YXlzIG1ha2Ugc3VyZSB0aGF0XG4gICAgLy8gd2UgY2FuIGNhbmNlbCBhbnkgcGVuZGluZyBzZXRTdGF0ZSBjYWxsYmFja3MgYWZ0ZXIgd2UgdW5tb3VudC5cbiAgICBjYWxsYmFjayA9IHRoaXMuc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKTtcbiAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIF9wcm90by5zZXROZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBzZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBhY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIF90aGlzNC5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5uZXh0Q2FsbGJhY2s7XG4gIH07XG5cbiAgX3Byb3RvLm9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZCh0aW1lb3V0LCBoYW5kbGVyKSB7XG4gICAgdGhpcy5zZXROZXh0Q2FsbGJhY2soaGFuZGxlcik7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnByb3BzLm5vZGVSZWYgPyB0aGlzLnByb3BzLm5vZGVSZWYuY3VycmVudCA6IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHZhciBkb2VzTm90SGF2ZVRpbWVvdXRPckxpc3RlbmVyID0gdGltZW91dCA9PSBudWxsICYmICF0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyO1xuXG4gICAgaWYgKCFub2RlIHx8IGRvZXNOb3RIYXZlVGltZW91dE9yTGlzdGVuZXIpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyKSB7XG4gICAgICB2YXIgX3JlZjMgPSB0aGlzLnByb3BzLm5vZGVSZWYgPyBbdGhpcy5uZXh0Q2FsbGJhY2tdIDogW25vZGUsIHRoaXMubmV4dENhbGxiYWNrXSxcbiAgICAgICAgICBtYXliZU5vZGUgPSBfcmVmM1swXSxcbiAgICAgICAgICBtYXliZU5leHRDYWxsYmFjayA9IF9yZWYzWzFdO1xuXG4gICAgICB0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyKG1heWJlTm9kZSwgbWF5YmVOZXh0Q2FsbGJhY2spO1xuICAgIH1cblxuICAgIGlmICh0aW1lb3V0ICE9IG51bGwpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIHRpbWVvdXQpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBzdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cztcblxuICAgIGlmIChzdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgX2luID0gX3RoaXMkcHJvcHMuaW4sXG4gICAgICAgIF9tb3VudE9uRW50ZXIgPSBfdGhpcyRwcm9wcy5tb3VudE9uRW50ZXIsXG4gICAgICAgIF91bm1vdW50T25FeGl0ID0gX3RoaXMkcHJvcHMudW5tb3VudE9uRXhpdCxcbiAgICAgICAgX2FwcGVhciA9IF90aGlzJHByb3BzLmFwcGVhcixcbiAgICAgICAgX2VudGVyID0gX3RoaXMkcHJvcHMuZW50ZXIsXG4gICAgICAgIF9leGl0ID0gX3RoaXMkcHJvcHMuZXhpdCxcbiAgICAgICAgX3RpbWVvdXQgPSBfdGhpcyRwcm9wcy50aW1lb3V0LFxuICAgICAgICBfYWRkRW5kTGlzdGVuZXIgPSBfdGhpcyRwcm9wcy5hZGRFbmRMaXN0ZW5lcixcbiAgICAgICAgX29uRW50ZXIgPSBfdGhpcyRwcm9wcy5vbkVudGVyLFxuICAgICAgICBfb25FbnRlcmluZyA9IF90aGlzJHByb3BzLm9uRW50ZXJpbmcsXG4gICAgICAgIF9vbkVudGVyZWQgPSBfdGhpcyRwcm9wcy5vbkVudGVyZWQsXG4gICAgICAgIF9vbkV4aXQgPSBfdGhpcyRwcm9wcy5vbkV4aXQsXG4gICAgICAgIF9vbkV4aXRpbmcgPSBfdGhpcyRwcm9wcy5vbkV4aXRpbmcsXG4gICAgICAgIF9vbkV4aXRlZCA9IF90aGlzJHByb3BzLm9uRXhpdGVkLFxuICAgICAgICBfbm9kZVJlZiA9IF90aGlzJHByb3BzLm5vZGVSZWYsXG4gICAgICAgIGNoaWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJpblwiLCBcIm1vdW50T25FbnRlclwiLCBcInVubW91bnRPbkV4aXRcIiwgXCJhcHBlYXJcIiwgXCJlbnRlclwiLCBcImV4aXRcIiwgXCJ0aW1lb3V0XCIsIFwiYWRkRW5kTGlzdGVuZXJcIiwgXCJvbkVudGVyXCIsIFwib25FbnRlcmluZ1wiLCBcIm9uRW50ZXJlZFwiLCBcIm9uRXhpdFwiLCBcIm9uRXhpdGluZ1wiLCBcIm9uRXhpdGVkXCIsIFwibm9kZVJlZlwiXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgLyojX19QVVJFX18qL1xuICAgICAgLy8gYWxsb3dzIGZvciBuZXN0ZWQgVHJhbnNpdGlvbnNcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkdyb3VwQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSwgdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4oc3RhdHVzLCBjaGlsZFByb3BzKSA6IFJlYWN0LmNsb25lRWxlbWVudChSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSwgY2hpbGRQcm9wcykpXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuVHJhbnNpdGlvbi5jb250ZXh0VHlwZSA9IFRyYW5zaXRpb25Hcm91cENvbnRleHQ7XG5UcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIEEgUmVhY3QgcmVmZXJlbmNlIHRvIERPTSBlbGVtZW50IHRoYXQgbmVlZCB0byB0cmFuc2l0aW9uOlxuICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTExMjcxMzAvNDY3MTkzMlxuICAgKlxuICAgKiAgIC0gV2hlbiBgbm9kZVJlZmAgcHJvcCBpcyB1c2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZCB0byBjYWxsYmFjayBmdW5jdGlvbnNcbiAgICogICAgICAoZS5nLiBgb25FbnRlcmApIGJlY2F1c2UgdXNlciBhbHJlYWR5IGhhcyBkaXJlY3QgYWNjZXNzIHRvIHRoZSBub2RlLlxuICAgKiAgIC0gV2hlbiBjaGFuZ2luZyBga2V5YCBwcm9wIG9mIGBUcmFuc2l0aW9uYCBpbiBhIGBUcmFuc2l0aW9uR3JvdXBgIGEgbmV3XG4gICAqICAgICBgbm9kZVJlZmAgbmVlZCB0byBiZSBwcm92aWRlZCB0byBgVHJhbnNpdGlvbmAgd2l0aCBjaGFuZ2VkIGBrZXlgIHByb3BcbiAgICogICAgIChzZWVcbiAgICogICAgIFt0ZXN0L0NTU1RyYW5zaXRpb24tdGVzdC5qc10oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ibG9iLzEzNDM1Zjg5N2IzYWI3MWY2ZTE5ZDcyNGYxNDU1OTZmNTkxMDU4MWMvdGVzdC9DU1NUcmFuc2l0aW9uLXRlc3QuanMjTDM2Mi1MNDM3KSkuXG4gICAqL1xuICBub2RlUmVmOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGN1cnJlbnQ6IHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyA/IFByb3BUeXBlcy5hbnkgOiBmdW5jdGlvbiAocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHZhbHVlID0gcHJvcFZhbHVlW2tleV07XG4gICAgICByZXR1cm4gUHJvcFR5cGVzLmluc3RhbmNlT2YodmFsdWUgJiYgJ293bmVyRG9jdW1lbnQnIGluIHZhbHVlID8gdmFsdWUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5FbGVtZW50IDogRWxlbWVudCkocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCk7XG4gICAgfVxuICB9KSxcblxuICAvKipcbiAgICogQSBgZnVuY3Rpb25gIGNoaWxkIGNhbiBiZSB1c2VkIGluc3RlYWQgb2YgYSBSZWFjdCBlbGVtZW50LiBUaGlzIGZ1bmN0aW9uIGlzXG4gICAqIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IHRyYW5zaXRpb24gc3RhdHVzIChgJ2VudGVyaW5nJ2AsIGAnZW50ZXJlZCdgLFxuICAgKiBgJ2V4aXRpbmcnYCwgYCdleGl0ZWQnYCksIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGFwcGx5IGNvbnRleHRcbiAgICogc3BlY2lmaWMgcHJvcHMgdG8gYSBjb21wb25lbnQuXG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiA8VHJhbnNpdGlvbiBpbj17dGhpcy5zdGF0ZS5pbn0gdGltZW91dD17MTUwfT5cbiAgICogICB7c3RhdGUgPT4gKFxuICAgKiAgICAgPE15Q29tcG9uZW50IGNsYXNzTmFtZT17YGZhZGUgZmFkZS0ke3N0YXRlfWB9IC8+XG4gICAqICAgKX1cbiAgICogPC9UcmFuc2l0aW9uPlxuICAgKiBgYGBcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkXSkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogU2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZW50ZXIgb3IgZXhpdCBzdGF0ZXNcbiAgICovXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IGlzIG1vdW50ZWQgaW1tZWRpYXRlbHkgYWxvbmcgd2l0aFxuICAgKiB0aGUgcGFyZW50IGBUcmFuc2l0aW9uYCBjb21wb25lbnQuIElmIHlvdSB3YW50IHRvIFwibGF6eSBtb3VudFwiIHRoZSBjb21wb25lbnQgb24gdGhlXG4gICAqIGZpcnN0IGBpbj17dHJ1ZX1gIHlvdSBjYW4gc2V0IGBtb3VudE9uRW50ZXJgLiBBZnRlciB0aGUgZmlyc3QgZW50ZXIgdHJhbnNpdGlvbiB0aGUgY29tcG9uZW50IHdpbGwgc3RheVxuICAgKiBtb3VudGVkLCBldmVuIG9uIFwiZXhpdGVkXCIsIHVubGVzcyB5b3UgYWxzbyBzcGVjaWZ5IGB1bm1vdW50T25FeGl0YC5cbiAgICovXG4gIG1vdW50T25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGNoaWxkIGNvbXBvbmVudCBzdGF5cyBtb3VudGVkIGFmdGVyIGl0IHJlYWNoZXMgdGhlIGAnZXhpdGVkJ2Agc3RhdGUuXG4gICAqIFNldCBgdW5tb3VudE9uRXhpdGAgaWYgeW91J2QgcHJlZmVyIHRvIHVubW91bnQgdGhlIGNvbXBvbmVudCBhZnRlciBpdCBmaW5pc2hlcyBleGl0aW5nLlxuICAgKi9cbiAgdW5tb3VudE9uRXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGNoaWxkIGNvbXBvbmVudCBkb2VzIG5vdCBwZXJmb3JtIHRoZSBlbnRlciB0cmFuc2l0aW9uIHdoZW5cbiAgICogaXQgZmlyc3QgbW91bnRzLCByZWdhcmRsZXNzIG9mIHRoZSB2YWx1ZSBvZiBgaW5gLiBJZiB5b3Ugd2FudCB0aGlzXG4gICAqIGJlaGF2aW9yLCBzZXQgYm90aCBgYXBwZWFyYCBhbmQgYGluYCB0byBgdHJ1ZWAuXG4gICAqXG4gICAqID4gKipOb3RlKio6IHRoZXJlIGFyZSBubyBzcGVjaWFsIGFwcGVhciBzdGF0ZXMgbGlrZSBgYXBwZWFyaW5nYC9gYXBwZWFyZWRgLCB0aGlzIHByb3BcbiAgICogPiBvbmx5IGFkZHMgYW4gYWRkaXRpb25hbCBlbnRlciB0cmFuc2l0aW9uLiBIb3dldmVyLCBpbiB0aGVcbiAgICogPiBgPENTU1RyYW5zaXRpb24+YCBjb21wb25lbnQgdGhhdCBmaXJzdCBlbnRlciB0cmFuc2l0aW9uIGRvZXMgcmVzdWx0IGluXG4gICAqID4gYWRkaXRpb25hbCBgLmFwcGVhci0qYCBjbGFzc2VzLCB0aGF0IHdheSB5b3UgY2FuIGNob29zZSB0byBzdHlsZSBpdFxuICAgKiA+IGRpZmZlcmVudGx5LlxuICAgKi9cbiAgYXBwZWFyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgZW50ZXIgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBlbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGV4aXQgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBleGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIG9mIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFJlcXVpcmVkIHVubGVzcyBgYWRkRW5kTGlzdGVuZXJgIGlzIHByb3ZpZGVkLlxuICAgKlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zOlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogdGltZW91dD17NTAwfVxuICAgKiBgYGBcbiAgICpcbiAgICogb3IgaW5kaXZpZHVhbGx5OlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogdGltZW91dD17e1xuICAgKiAgYXBwZWFyOiA1MDAsXG4gICAqICBlbnRlcjogMzAwLFxuICAgKiAgZXhpdDogNTAwLFxuICAgKiB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogLSBgYXBwZWFyYCBkZWZhdWx0cyB0byB0aGUgdmFsdWUgb2YgYGVudGVyYFxuICAgKiAtIGBlbnRlcmAgZGVmYXVsdHMgdG8gYDBgXG4gICAqIC0gYGV4aXRgIGRlZmF1bHRzIHRvIGAwYFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyIHwgeyBlbnRlcj86IG51bWJlciwgZXhpdD86IG51bWJlciwgYXBwZWFyPzogbnVtYmVyIH19XG4gICAqL1xuICB0aW1lb3V0OiBmdW5jdGlvbiB0aW1lb3V0KHByb3BzKSB7XG4gICAgdmFyIHB0ID0gdGltZW91dHNTaGFwZTtcbiAgICBpZiAoIXByb3BzLmFkZEVuZExpc3RlbmVyKSBwdCA9IHB0LmlzUmVxdWlyZWQ7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHQuYXBwbHkodm9pZCAwLCBbcHJvcHNdLmNvbmNhdChhcmdzKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFkZCBhIGN1c3RvbSB0cmFuc2l0aW9uIGVuZCB0cmlnZ2VyLiBDYWxsZWQgd2l0aCB0aGUgdHJhbnNpdGlvbmluZ1xuICAgKiBET00gbm9kZSBhbmQgYSBgZG9uZWAgY2FsbGJhY2suIEFsbG93cyBmb3IgbW9yZSBmaW5lIGdyYWluZWQgdHJhbnNpdGlvbiBlbmRcbiAgICogbG9naWMuIFRpbWVvdXRzIGFyZSBzdGlsbCB1c2VkIGFzIGEgZmFsbGJhY2sgaWYgcHJvdmlkZWQuXG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWQuXG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiBhZGRFbmRMaXN0ZW5lcj17KG5vZGUsIGRvbmUpID0+IHtcbiAgICogICAvLyB1c2UgdGhlIGNzcyB0cmFuc2l0aW9uZW5kIGV2ZW50IHRvIG1hcmsgdGhlIGZpbmlzaCBvZiBhIHRyYW5zaXRpb25cbiAgICogICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBkb25lLCBmYWxzZSk7XG4gICAqIH19XG4gICAqIGBgYFxuICAgKi9cbiAgYWRkRW5kTGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZW50ZXJpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuY1xufSA6IHt9OyAvLyBOYW1lIHRoZSBmdW5jdGlvbiBzbyBpdCBpcyBjbGVhcmVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5UcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW46IGZhbHNlLFxuICBtb3VudE9uRW50ZXI6IGZhbHNlLFxuICB1bm1vdW50T25FeGl0OiBmYWxzZSxcbiAgYXBwZWFyOiBmYWxzZSxcbiAgZW50ZXI6IHRydWUsXG4gIGV4aXQ6IHRydWUsXG4gIG9uRW50ZXI6IG5vb3AsXG4gIG9uRW50ZXJpbmc6IG5vb3AsXG4gIG9uRW50ZXJlZDogbm9vcCxcbiAgb25FeGl0OiBub29wLFxuICBvbkV4aXRpbmc6IG5vb3AsXG4gIG9uRXhpdGVkOiBub29wXG59O1xuVHJhbnNpdGlvbi5VTk1PVU5URUQgPSBVTk1PVU5URUQ7XG5UcmFuc2l0aW9uLkVYSVRFRCA9IEVYSVRFRDtcblRyYW5zaXRpb24uRU5URVJJTkcgPSBFTlRFUklORztcblRyYW5zaXRpb24uRU5URVJFRCA9IEVOVEVSRUQ7XG5UcmFuc2l0aW9uLkVYSVRJTkcgPSBFWElUSU5HO1xuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvbjsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmFuc2l0aW9uR3JvdXBDb250ZXh0IGZyb20gJy4vVHJhbnNpdGlvbkdyb3VwQ29udGV4dCc7XG5pbXBvcnQgeyBnZXRDaGlsZE1hcHBpbmcsIGdldEluaXRpYWxDaGlsZE1hcHBpbmcsIGdldE5leHRDaGlsZE1hcHBpbmcgfSBmcm9tICcuL3V0aWxzL0NoaWxkTWFwcGluZyc7XG5cbnZhciB2YWx1ZXMgPSBPYmplY3QudmFsdWVzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIG9ialtrXTtcbiAgfSk7XG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdkaXYnLFxuICBjaGlsZEZhY3Rvcnk6IGZ1bmN0aW9uIGNoaWxkRmFjdG9yeShjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfVxufTtcbi8qKlxuICogVGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgY29tcG9uZW50IG1hbmFnZXMgYSBzZXQgb2YgdHJhbnNpdGlvbiBjb21wb25lbnRzXG4gKiAoYDxUcmFuc2l0aW9uPmAgYW5kIGA8Q1NTVHJhbnNpdGlvbj5gKSBpbiBhIGxpc3QuIExpa2Ugd2l0aCB0aGUgdHJhbnNpdGlvblxuICogY29tcG9uZW50cywgYDxUcmFuc2l0aW9uR3JvdXA+YCBpcyBhIHN0YXRlIG1hY2hpbmUgZm9yIG1hbmFnaW5nIHRoZSBtb3VudGluZ1xuICogYW5kIHVubW91bnRpbmcgb2YgY29tcG9uZW50cyBvdmVyIHRpbWUuXG4gKlxuICogQ29uc2lkZXIgdGhlIGV4YW1wbGUgYmVsb3cuIEFzIGl0ZW1zIGFyZSByZW1vdmVkIG9yIGFkZGVkIHRvIHRoZSBUb2RvTGlzdCB0aGVcbiAqIGBpbmAgcHJvcCBpcyB0b2dnbGVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAuXG4gKlxuICogTm90ZSB0aGF0IGA8VHJhbnNpdGlvbkdyb3VwPmAgIGRvZXMgbm90IGRlZmluZSBhbnkgYW5pbWF0aW9uIGJlaGF2aW9yIVxuICogRXhhY3RseSBfaG93XyBhIGxpc3QgaXRlbSBhbmltYXRlcyBpcyB1cCB0byB0aGUgaW5kaXZpZHVhbCB0cmFuc2l0aW9uXG4gKiBjb21wb25lbnQuIFRoaXMgbWVhbnMgeW91IGNhbiBtaXggYW5kIG1hdGNoIGFuaW1hdGlvbnMgYWNyb3NzIGRpZmZlcmVudCBsaXN0XG4gKiBpdGVtcy5cbiAqL1xuXG52YXIgVHJhbnNpdGlvbkdyb3VwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRyYW5zaXRpb25Hcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbkdyb3VwKHByb3BzLCBjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XG5cbiAgICB2YXIgaGFuZGxlRXhpdGVkID0gX3RoaXMuaGFuZGxlRXhpdGVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpOyAvLyBJbml0aWFsIGNoaWxkcmVuIHNob3VsZCBhbGwgYmUgZW50ZXJpbmcsIGRlcGVuZGVudCBvbiBhcHBlYXJcblxuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjb250ZXh0VmFsdWU6IHtcbiAgICAgICAgaXNNb3VudGluZzogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGhhbmRsZUV4aXRlZDogaGFuZGxlRXhpdGVkLFxuICAgICAgZmlyc3RSZW5kZXI6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZXh0VmFsdWU6IHtcbiAgICAgICAgaXNNb3VudGluZzogZmFsc2VcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgX3JlZikge1xuICAgIHZhciBwcmV2Q2hpbGRNYXBwaW5nID0gX3JlZi5jaGlsZHJlbixcbiAgICAgICAgaGFuZGxlRXhpdGVkID0gX3JlZi5oYW5kbGVFeGl0ZWQsXG4gICAgICAgIGZpcnN0UmVuZGVyID0gX3JlZi5maXJzdFJlbmRlcjtcbiAgICByZXR1cm4ge1xuICAgICAgY2hpbGRyZW46IGZpcnN0UmVuZGVyID8gZ2V0SW5pdGlhbENoaWxkTWFwcGluZyhuZXh0UHJvcHMsIGhhbmRsZUV4aXRlZCkgOiBnZXROZXh0Q2hpbGRNYXBwaW5nKG5leHRQcm9wcywgcHJldkNoaWxkTWFwcGluZywgaGFuZGxlRXhpdGVkKSxcbiAgICAgIGZpcnN0UmVuZGVyOiBmYWxzZVxuICAgIH07XG4gIH0gLy8gbm9kZSBpcyBgdW5kZWZpbmVkYCB3aGVuIHVzZXIgcHJvdmlkZWQgYG5vZGVSZWZgIHByb3BcbiAgO1xuXG4gIF9wcm90by5oYW5kbGVFeGl0ZWQgPSBmdW5jdGlvbiBoYW5kbGVFeGl0ZWQoY2hpbGQsIG5vZGUpIHtcbiAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZyh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICBpZiAoY2hpbGQua2V5IGluIGN1cnJlbnRDaGlsZE1hcHBpbmcpIHJldHVybjtcblxuICAgIGlmIChjaGlsZC5wcm9wcy5vbkV4aXRlZCkge1xuICAgICAgY2hpbGQucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW91bnRlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gX2V4dGVuZHMoe30sIHN0YXRlLmNoaWxkcmVuKTtcblxuICAgICAgICBkZWxldGUgY2hpbGRyZW5bY2hpbGQua2V5XTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIENvbXBvbmVudCA9IF90aGlzJHByb3BzLmNvbXBvbmVudCxcbiAgICAgICAgY2hpbGRGYWN0b3J5ID0gX3RoaXMkcHJvcHMuY2hpbGRGYWN0b3J5LFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjb21wb25lbnRcIiwgXCJjaGlsZEZhY3RvcnlcIl0pO1xuXG4gICAgdmFyIGNvbnRleHRWYWx1ZSA9IHRoaXMuc3RhdGUuY29udGV4dFZhbHVlO1xuICAgIHZhciBjaGlsZHJlbiA9IHZhbHVlcyh0aGlzLnN0YXRlLmNoaWxkcmVuKS5tYXAoY2hpbGRGYWN0b3J5KTtcbiAgICBkZWxldGUgcHJvcHMuYXBwZWFyO1xuICAgIGRlbGV0ZSBwcm9wcy5lbnRlcjtcbiAgICBkZWxldGUgcHJvcHMuZXhpdDtcblxuICAgIGlmIChDb21wb25lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXBDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBjb250ZXh0VmFsdWVcbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkdyb3VwQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IGNvbnRleHRWYWx1ZVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgcHJvcHMsIGNoaWxkcmVuKSk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb25Hcm91cDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuVHJhbnNpdGlvbkdyb3VwLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIGA8VHJhbnNpdGlvbkdyb3VwPmAgcmVuZGVycyBhIGA8ZGl2PmAgYnkgZGVmYXVsdC4gWW91IGNhbiBjaGFuZ2UgdGhpc1xuICAgKiBiZWhhdmlvciBieSBwcm92aWRpbmcgYSBgY29tcG9uZW50YCBwcm9wLlxuICAgKiBJZiB5b3UgdXNlIFJlYWN0IHYxNisgYW5kIHdvdWxkIGxpa2UgdG8gYXZvaWQgYSB3cmFwcGluZyBgPGRpdj5gIGVsZW1lbnRcbiAgICogeW91IGNhbiBwYXNzIGluIGBjb21wb25lbnQ9e251bGx9YC4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIHdyYXBwaW5nIGRpdlxuICAgKiBib3JrcyB5b3VyIGNzcyBzdHlsZXMuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIGA8VHJhbnNpdGlvbj5gIGNvbXBvbmVudHMsIHRoYXQgYXJlIHRvZ2dsZWQgYGluYCBhbmQgb3V0IGFzIHRoZXlcbiAgICogbGVhdmUuIHRoZSBgPFRyYW5zaXRpb25Hcm91cD5gIHdpbGwgaW5qZWN0IHNwZWNpZmljIHRyYW5zaXRpb24gcHJvcHMsIHNvXG4gICAqIHJlbWVtYmVyIHRvIHNwcmVhZCB0aGVtIHRocm91Z2ggaWYgeW91IGFyZSB3cmFwcGluZyB0aGUgYDxUcmFuc2l0aW9uPmAgYXNcbiAgICogd2l0aCBvdXIgYDxGYWRlPmAgZXhhbXBsZS5cbiAgICpcbiAgICogV2hpbGUgdGhpcyBjb21wb25lbnQgaXMgbWVhbnQgZm9yIG11bHRpcGxlIGBUcmFuc2l0aW9uYCBvciBgQ1NTVHJhbnNpdGlvbmBcbiAgICogY2hpbGRyZW4sIHNvbWV0aW1lcyB5b3UgbWF5IHdhbnQgdG8gaGF2ZSBhIHNpbmdsZSB0cmFuc2l0aW9uIGNoaWxkIHdpdGhcbiAgICogY29udGVudCB0aGF0IHlvdSB3YW50IHRvIGJlIHRyYW5zaXRpb25lZCBvdXQgYW5kIGluIHdoZW4geW91IGNoYW5nZSBpdFxuICAgKiAoZS5nLiByb3V0ZXMsIGltYWdlcyBldGMuKSBJbiB0aGF0IGNhc2UgeW91IGNhbiBjaGFuZ2UgdGhlIGBrZXlgIHByb3Agb2ZcbiAgICogdGhlIHRyYW5zaXRpb24gY2hpbGQgYXMgeW91IGNoYW5nZSBpdHMgY29udGVudCwgdGhpcyB3aWxsIGNhdXNlXG4gICAqIGBUcmFuc2l0aW9uR3JvdXBgIHRvIHRyYW5zaXRpb24gdGhlIGNoaWxkIG91dCBhbmQgYmFjayBpbi5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBhcHBlYXIgYW5pbWF0aW9uc1xuICAgKiBmb3IgYWxsIGNoaWxkcmVuLiBOb3RlIHRoYXQgc3BlY2lmeWluZyB0aGlzIHdpbGwgb3ZlcnJpZGUgYW55IGRlZmF1bHRzIHNldFxuICAgKiBvbiBpbmRpdmlkdWFsIGNoaWxkcmVuIFRyYW5zaXRpb25zLlxuICAgKi9cbiAgYXBwZWFyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBlbnRlciBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBlbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgcHJvcCB0aGF0IGVuYWJsZXMgb3IgZGlzYWJsZXMgZXhpdCBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBleGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogWW91IG1heSBuZWVkIHRvIGFwcGx5IHJlYWN0aXZlIHVwZGF0ZXMgdG8gYSBjaGlsZCBhcyBpdCBpcyBleGl0aW5nLlxuICAgKiBUaGlzIGlzIGdlbmVyYWxseSBkb25lIGJ5IHVzaW5nIGBjbG9uZUVsZW1lbnRgIGhvd2V2ZXIgaW4gdGhlIGNhc2Ugb2YgYW4gZXhpdGluZ1xuICAgKiBjaGlsZCB0aGUgZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIHJlbW92ZWQgYW5kIG5vdCBhY2Nlc3NpYmxlIHRvIHRoZSBjb25zdW1lci5cbiAgICpcbiAgICogSWYgeW91IGRvIG5lZWQgdG8gdXBkYXRlIGEgY2hpbGQgYXMgaXQgbGVhdmVzIHlvdSBjYW4gcHJvdmlkZSBhIGBjaGlsZEZhY3RvcnlgXG4gICAqIHRvIHdyYXAgZXZlcnkgY2hpbGQsIGV2ZW4gdGhlIG9uZXMgdGhhdCBhcmUgbGVhdmluZy5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24oY2hpbGQ6IFJlYWN0RWxlbWVudCkgLT4gUmVhY3RFbGVtZW50XG4gICAqL1xuICBjaGlsZEZhY3Rvcnk6IFByb3BUeXBlcy5mdW5jXG59IDoge307XG5UcmFuc2l0aW9uR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvbkdyb3VwOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGlzYWJsZWQ6IGZhbHNlXG59OyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJy4vQ1NTVHJhbnNpdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlcGxhY2VUcmFuc2l0aW9uIH0gZnJvbSAnLi9SZXBsYWNlVHJhbnNpdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN3aXRjaFRyYW5zaXRpb24gfSBmcm9tICcuL1N3aXRjaFRyYW5zaXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICcuL1RyYW5zaXRpb25Hcm91cCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRyYW5zaXRpb24gfSBmcm9tICcuL1RyYW5zaXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7IiwiaW1wb3J0IHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCwgaXNWYWxpZEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIEdpdmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYCwgcmV0dXJuIGFuIG9iamVjdCBtYXBwaW5nIGtleSB0byBjaGlsZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNoaWxkcmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYFxuICogQHJldHVybiB7b2JqZWN0fSBNYXBwaW5nIG9mIGtleSB0byBjaGlsZFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZE1hcHBpbmcoY2hpbGRyZW4sIG1hcEZuKSB7XG4gIHZhciBtYXBwZXIgPSBmdW5jdGlvbiBtYXBwZXIoY2hpbGQpIHtcbiAgICByZXR1cm4gbWFwRm4gJiYgaXNWYWxpZEVsZW1lbnQoY2hpbGQpID8gbWFwRm4oY2hpbGQpIDogY2hpbGQ7XG4gIH07XG5cbiAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGlmIChjaGlsZHJlbikgQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjO1xuICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIC8vIHJ1biB0aGUgbWFwIGZ1bmN0aW9uIGhlcmUgaW5zdGVhZCBzbyB0aGF0IHRoZSBrZXkgaXMgdGhlIGNvbXB1dGVkIG9uZVxuICAgIHJlc3VsdFtjaGlsZC5rZXldID0gbWFwcGVyKGNoaWxkKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFdoZW4geW91J3JlIGFkZGluZyBvciByZW1vdmluZyBjaGlsZHJlbiBzb21lIG1heSBiZSBhZGRlZCBvciByZW1vdmVkIGluIHRoZVxuICogc2FtZSByZW5kZXIgcGFzcy4gV2Ugd2FudCB0byBzaG93ICpib3RoKiBzaW5jZSB3ZSB3YW50IHRvIHNpbXVsdGFuZW91c2x5XG4gKiBhbmltYXRlIGVsZW1lbnRzIGluIGFuZCBvdXQuIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSBwcmV2aW91cyBzZXQgb2Yga2V5c1xuICogYW5kIGEgbmV3IHNldCBvZiBrZXlzIGFuZCBtZXJnZXMgdGhlbSB3aXRoIGl0cyBiZXN0IGd1ZXNzIG9mIHRoZSBjb3JyZWN0XG4gKiBvcmRlcmluZy4gSW4gdGhlIGZ1dHVyZSB3ZSBtYXkgZXhwb3NlIHNvbWUgb2YgdGhlIHV0aWxpdGllcyBpblxuICogUmVhY3RNdWx0aUNoaWxkIHRvIG1ha2UgdGhpcyBlYXN5LCBidXQgZm9yIG5vdyBSZWFjdCBpdHNlbGYgZG9lcyBub3RcbiAqIGRpcmVjdGx5IGhhdmUgdGhpcyBjb25jZXB0IG9mIHRoZSB1bmlvbiBvZiBwcmV2Q2hpbGRyZW4gYW5kIG5leHRDaGlsZHJlblxuICogc28gd2UgaW1wbGVtZW50IGl0IGhlcmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByZXYgcHJldiBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0IG5leHQgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICogYFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoKWAuXG4gKiBAcmV0dXJuIHtvYmplY3R9IGEga2V5IHNldCB0aGF0IGNvbnRhaW5zIGFsbCBrZXlzIGluIGBwcmV2YCBhbmQgYWxsIGtleXNcbiAqIGluIGBuZXh0YCBpbiBhIHJlYXNvbmFibGUgb3JkZXIuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ2hpbGRNYXBwaW5ncyhwcmV2LCBuZXh0KSB7XG4gIHByZXYgPSBwcmV2IHx8IHt9O1xuICBuZXh0ID0gbmV4dCB8fCB7fTtcblxuICBmdW5jdGlvbiBnZXRWYWx1ZUZvcktleShrZXkpIHtcbiAgICByZXR1cm4ga2V5IGluIG5leHQgPyBuZXh0W2tleV0gOiBwcmV2W2tleV07XG4gIH0gLy8gRm9yIGVhY2gga2V5IG9mIGBuZXh0YCwgdGhlIGxpc3Qgb2Yga2V5cyB0byBpbnNlcnQgYmVmb3JlIHRoYXQga2V5IGluXG4gIC8vIHRoZSBjb21iaW5lZCBsaXN0XG5cblxuICB2YXIgbmV4dEtleXNQZW5kaW5nID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIHBlbmRpbmdLZXlzID0gW107XG5cbiAgZm9yICh2YXIgcHJldktleSBpbiBwcmV2KSB7XG4gICAgaWYgKHByZXZLZXkgaW4gbmV4dCkge1xuICAgICAgaWYgKHBlbmRpbmdLZXlzLmxlbmd0aCkge1xuICAgICAgICBuZXh0S2V5c1BlbmRpbmdbcHJldktleV0gPSBwZW5kaW5nS2V5cztcbiAgICAgICAgcGVuZGluZ0tleXMgPSBbXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGVuZGluZ0tleXMucHVzaChwcmV2S2V5KTtcbiAgICB9XG4gIH1cblxuICB2YXIgaTtcbiAgdmFyIGNoaWxkTWFwcGluZyA9IHt9O1xuXG4gIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dCkge1xuICAgIGlmIChuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0pIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBlbmRpbmdOZXh0S2V5ID0gbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldO1xuICAgICAgICBjaGlsZE1hcHBpbmdbbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdOZXh0S2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZE1hcHBpbmdbbmV4dEtleV0gPSBnZXRWYWx1ZUZvcktleShuZXh0S2V5KTtcbiAgfSAvLyBGaW5hbGx5LCBhZGQgdGhlIGtleXMgd2hpY2ggZGlkbid0IGFwcGVhciBiZWZvcmUgYW55IGtleSBpbiBgbmV4dGBcblxuXG4gIGZvciAoaSA9IDA7IGkgPCBwZW5kaW5nS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGNoaWxkTWFwcGluZ1twZW5kaW5nS2V5c1tpXV0gPSBnZXRWYWx1ZUZvcktleShwZW5kaW5nS2V5c1tpXSk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRNYXBwaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wKGNoaWxkLCBwcm9wLCBwcm9wcykge1xuICByZXR1cm4gcHJvcHNbcHJvcF0gIT0gbnVsbCA/IHByb3BzW3Byb3BdIDogY2hpbGQucHJvcHNbcHJvcF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0aWFsQ2hpbGRNYXBwaW5nKHByb3BzLCBvbkV4aXRlZCkge1xuICByZXR1cm4gZ2V0Q2hpbGRNYXBwaW5nKHByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXG4gICAgICBpbjogdHJ1ZSxcbiAgICAgIGFwcGVhcjogZ2V0UHJvcChjaGlsZCwgJ2FwcGVhcicsIHByb3BzKSxcbiAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBwcm9wcyksXG4gICAgICBleGl0OiBnZXRQcm9wKGNoaWxkLCAnZXhpdCcsIHByb3BzKVxuICAgIH0pO1xuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0Q2hpbGRNYXBwaW5nKG5leHRQcm9wcywgcHJldkNoaWxkTWFwcGluZywgb25FeGl0ZWQpIHtcbiAgdmFyIG5leHRDaGlsZE1hcHBpbmcgPSBnZXRDaGlsZE1hcHBpbmcobmV4dFByb3BzLmNoaWxkcmVuKTtcbiAgdmFyIGNoaWxkcmVuID0gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXZDaGlsZE1hcHBpbmcsIG5leHRDaGlsZE1hcHBpbmcpO1xuICBPYmplY3Qua2V5cyhjaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5ba2V5XTtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkKSkgcmV0dXJuO1xuICAgIHZhciBoYXNQcmV2ID0gKGtleSBpbiBwcmV2Q2hpbGRNYXBwaW5nKTtcbiAgICB2YXIgaGFzTmV4dCA9IChrZXkgaW4gbmV4dENoaWxkTWFwcGluZyk7XG4gICAgdmFyIHByZXZDaGlsZCA9IHByZXZDaGlsZE1hcHBpbmdba2V5XTtcbiAgICB2YXIgaXNMZWF2aW5nID0gaXNWYWxpZEVsZW1lbnQocHJldkNoaWxkKSAmJiAhcHJldkNoaWxkLnByb3BzLmluOyAvLyBpdGVtIGlzIG5ldyAoZW50ZXJpbmcpXG5cbiAgICBpZiAoaGFzTmV4dCAmJiAoIWhhc1ByZXYgfHwgaXNMZWF2aW5nKSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2VudGVyaW5nJywga2V5KVxuICAgICAgY2hpbGRyZW5ba2V5XSA9IGNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXG4gICAgICAgIGluOiB0cnVlLFxuICAgICAgICBleGl0OiBnZXRQcm9wKGNoaWxkLCAnZXhpdCcsIG5leHRQcm9wcyksXG4gICAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBuZXh0UHJvcHMpXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFoYXNOZXh0ICYmIGhhc1ByZXYgJiYgIWlzTGVhdmluZykge1xuICAgICAgLy8gaXRlbSBpcyBvbGQgKGV4aXRpbmcpXG4gICAgICAvLyBjb25zb2xlLmxvZygnbGVhdmluZycsIGtleSlcbiAgICAgIGNoaWxkcmVuW2tleV0gPSBjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgaW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGhhc05leHQgJiYgaGFzUHJldiAmJiBpc1ZhbGlkRWxlbWVudChwcmV2Q2hpbGQpKSB7XG4gICAgICAvLyBpdGVtIGhhc24ndCBjaGFuZ2VkIHRyYW5zaXRpb24gc3RhdGVzXG4gICAgICAvLyBjb3B5IG92ZXIgdGhlIGxhc3QgdHJhbnNpdGlvbiBwcm9wcztcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd1bmNoYW5nZWQnLCBrZXkpXG4gICAgICBjaGlsZHJlbltrZXldID0gY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgICAgaW46IHByZXZDaGlsZC5wcm9wcy5pbixcbiAgICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBuZXh0UHJvcHMpLFxuICAgICAgICBlbnRlcjogZ2V0UHJvcChjaGlsZCwgJ2VudGVyJywgbmV4dFByb3BzKVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufSIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5leHBvcnQgdmFyIHRpbWVvdXRzU2hhcGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gIGV4aXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGFwcGVhcjogUHJvcFR5cGVzLm51bWJlclxufSkuaXNSZXF1aXJlZF0pIDogbnVsbDtcbmV4cG9ydCB2YXIgY2xhc3NOYW1lc1NoYXBlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5zaGFwZSh7XG4gIGVudGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleGl0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY3RpdmU6IFByb3BUeXBlcy5zdHJpbmdcbn0pLCBQcm9wVHlwZXMuc2hhcGUoe1xuICBlbnRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZW50ZXJEb25lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlbnRlckFjdGl2ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXhpdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXhpdERvbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4aXRBY3RpdmU6IFByb3BUeXBlcy5zdHJpbmdcbn0pXSkgOiBudWxsOyJdLCJzb3VyY2VSb290IjoiIn0=