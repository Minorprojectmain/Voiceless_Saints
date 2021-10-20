self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Post/CardPost.js":
/*!*************************************!*\
  !*** ./components/Post/CardPost.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");
/* harmony import */ var _ImageModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImageModal */ "./components/Post/ImageModal.js");
/* harmony import */ var _NoImageModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NoImageModal */ "./components/Post/NoImageModal.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor_pro\\Voiceless_Saints\\components\\Post\\CardPost.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function CardPost(_ref) {
  _s();

  var _this = this;

  var post = _ref.post,
      user = _ref.user,
      setPosts = _ref.setPosts,
      setShowToastr = _ref.setShowToastr;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(post.likes),
      likes = _useState[0],
      setLikes = _useState[1];

  var isLiked = likes.length > 0 && likes.filter(function (like) {
    return like.user === user._id;
  }).length > 0;

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(post.comments),
      comments = _useState2[0],
      setComments = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      error = _useState3.error,
      setError = _useState3.setError;

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      showModal = _useState4[0],
      setShowModal = _useState4[1];

  var addPropsToModal = function addPropsToModal() {
    return {
      post: post,
      user: user,
      setLikes: setLikes,
      likes: likes,
      isLiked: isLiked,
      comments: comments,
      setComments: setComments
    };
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Modal, {
      open: showModal,
      closeIcon: true,
      closeOnDimmerClick: true,
      onClose: function onClose() {
        return setShowModal(false);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Modal.Content, {
        children: post.picUrl ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageModal__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({}, addPropsToModal()), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 19
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoImageModal__WEBPACK_IMPORTED_MODULE_10__.default, _objectSpread({}, addPropsToModal()), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Segment, {
      basic: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Card, {
        color: "black",
        fluid: true,
        children: [post.picUrl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Image, {
          src: post.picUrl,
          style: {
            cursor: "pointer"
          },
          floated: "left",
          wrapped: true,
          ui: false,
          alt: "PostImage",
          onClick: function onClick() {
            return setShowModal(true);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 27
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Card.Content, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Image, {
            floated: "left",
            src: post.user.profilePicUrl,
            avatar: true,
            circular: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 10
          }, this), (user.role === "root" || post.user._id === user._id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Popup, {
              on: "click",
              position: "right",
              trigger: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Image, {
                src: "/deleteIcon.svg",
                style: {
                  cursor: "pointer"
                },
                size: "mini",
                floated: "right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 9
              }, this),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Header, {
                as: "h4",
                content: "Are you sure?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "This action is irreversible"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {
                color: "red",
                icon: "trash",
                content: "Delete",
                onClick: function onClick() {
                  return (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_7__.deletePost)(post._id, setPosts, setShowToastr);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 10
            }, this)
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Card.Header, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/".concat(post.user.username),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: post.user.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Card.Meta, {
            children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__.default)(post.createdAt)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 8
          }, this), post.location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Card.Meta, {
            content: post.location
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 26
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Card.Description, {
            style: {
              fontSize: "37px",
              letterSpacing: "0.1px",
              wordSpacing: "0.35px"
            },
            children: post.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Card.Content, {
          extra: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Icon, {
            name: isLiked ? "heart" : "heart outline",
            color: "red",
            style: {
              cursor: "pointer"
            },
            onClick: function onClick() {
              return (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_7__.likePost)(post._id, user._id, setLikes, isLiked ? false : true);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LikesList__WEBPACK_IMPORTED_MODULE_8__.default, {
            postId: post._id,
            trigger: likes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "spanLikesList",
              children: "".concat(likes.length, " ").concat(likes.length === 1 ? "like" : "likes")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Icon, {
            name: "comment outline",
            style: {
              marginLeft: "7px"
            },
            color: "blue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 11
          }, this), comments.length > 0 && comments.map(function (comment, i) {
            return i < 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostComments__WEBPACK_IMPORTED_MODULE_3__.default, {
              comment: comment,
              postId: post._id,
              user: user,
              setComments: setComments
            }, comment._id, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 16
            }, _this);
          }), comments.length > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {
            content: "View More",
            color: "teal",
            basic: true,
            circular: true,
            onClick: function onClick() {
              return setShowModal(true);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Divider, {
            hidden: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_4__.default, {
            user: user,
            postId: post._id,
            setComments: setComments
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 8
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.Divider, {
      hidden: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(CardPost, "nNrB5orr5wjfaxf41YsXxsoBULY=");

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

/***/ "./components/Post/NoImageModal.js":
/*!*****************************************!*\
  !*** ./components/Post/NoImageModal.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor_pro\\Voiceless_Saints\\components\\Post\\NoImageModal.js";









function NoImageModal(_ref) {
  var _this = this;

  var post = _ref.post,
      user = _ref.user,
      setLikes = _ref.setLikes,
      likes = _ref.likes,
      isLiked = _ref.isLiked,
      comments = _ref.comments,
      setComments = _ref.setComments;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card, {
    fluid: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Content, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Image, {
        floated: "left",
        avatar: true,
        src: post.user.profilePicUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Header, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: "/".concat(post.user.username),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: post.user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Meta, {
        children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(post.createdAt)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), post.location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Meta, {
        content: post.location
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 27
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Description, {
        style: {
          fontSize: "17px",
          letterSpacing: "0.1px",
          wordSpacing: "0.35px"
        },
        children: post.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Content, {
      extra: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Icon, {
        name: isLiked ? "heart" : "heart outline",
        color: "red",
        style: {
          cursor: "pointer"
        },
        onClick: function onClick() {
          return (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_6__.likePost)(post._id, user._id, setLikes, isLiked ? false : true);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LikesList__WEBPACK_IMPORTED_MODULE_7__.default, {
        postId: post._id,
        trigger: likes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "spanLikesList",
          children: "".concat(likes.length, " ").concat(likes.length === 1 ? "like" : "likes")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          overflow: "auto",
          height: comments.length > 2 ? "200px" : "60px",
          marginBottom: "8px"
        },
        children: comments.length > 0 && comments.map(function (comment) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostComments__WEBPACK_IMPORTED_MODULE_2__.default, {
            comment: comment,
            postId: post._id,
            user: user,
            setComments: setComments
          }, comment._id, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__.default, {
        postId: post._id,
        user: user,
        setComments: setComments
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_c = NoImageModal;
/* harmony default export */ __webpack_exports__["default"] = (NoImageModal);

var _c;

$RefreshReg$(_c, "NoImageModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3QvTm9JbWFnZU1vZGFsLmpzIl0sIm5hbWVzIjpbIkNhcmRQb3N0IiwicG9zdCIsInVzZXIiLCJzZXRQb3N0cyIsInNldFNob3dUb2FzdHIiLCJ1c2VTdGF0ZSIsImxpa2VzIiwic2V0TGlrZXMiLCJpc0xpa2VkIiwibGVuZ3RoIiwiZmlsdGVyIiwibGlrZSIsIl9pZCIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJlcnJvciIsInNldEVycm9yIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYWRkUHJvcHNUb01vZGFsIiwicGljVXJsIiwiY3Vyc29yIiwicHJvZmlsZVBpY1VybCIsInJvbGUiLCJkZWxldGVQb3N0IiwidXNlcm5hbWUiLCJuYW1lIiwiY2FsY3VsYXRlVGltZSIsImNyZWF0ZWRBdCIsImxvY2F0aW9uIiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwid29yZFNwYWNpbmciLCJ0ZXh0IiwibGlrZVBvc3QiLCJtYXJnaW5MZWZ0IiwibWFwIiwiY29tbWVudCIsImkiLCJOb0ltYWdlTW9kYWwiLCJvdmVyZmxvdyIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLFFBQVQsT0FBc0Q7QUFBQTs7QUFBQTs7QUFBQSxNQUFuQ0MsSUFBbUMsUUFBbkNBLElBQW1DO0FBQUEsTUFBOUJDLElBQThCLFFBQTlCQSxJQUE4QjtBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFoQkMsYUFBZ0IsUUFBaEJBLGFBQWdCOztBQUFBLGtCQUUzQkMsK0NBQVEsQ0FBQ0osSUFBSSxDQUFDSyxLQUFOLENB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QUFBO0FBQUE7QUFBQSxjQVZGLGVBcUJFLDhEQUFDLHNEQUFEO0FBQVMsY0FBTTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkYsZUF1QkU7QUFDRSxhQUFLLEVBQUU7QUFDTCtCLGtCQUFRLEVBQUUsTUFETDtBQUVMQyxnQkFBTSxFQUFFNUIsUUFBUSxDQUFDSixNQUFULEdBQWtCLENBQWxCLEdBQXNCLE9BQXRCLEdBQWdDLE1BRm5DO0FBR0xpQyxzQkFBWSxFQUFFO0FBSFQsU0FEVDtBQUFBLGtCQU1HN0IsUUFBUSxDQUFDSixNQUFULEdBQWtCLENBQWxCLElBQ0NJLFFBQVEsQ0FBQ3VCLEdBQVQsQ0FBYSxVQUFBQyxPQUFPO0FBQUEsOEJBQ2xCLDhEQUFDLGtEQUFEO0FBRUUsbUJBQU8sRUFBRUEsT0FGWDtBQUdFLGtCQUFNLEVBQUVwQyxJQUFJLENBQUNXLEdBSGY7QUFJRSxnQkFBSSxFQUFFVixJQUpSO0FBS0UsdUJBQVcsRUFBRVk7QUFMZixhQUNPdUIsT0FBTyxDQUFDekIsR0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURrQjtBQUFBLFNBQXBCO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZCRixlQXlDRSw4REFBQyx1REFBRDtBQUFtQixjQUFNLEVBQUVYLElBQUksQ0FBQ1csR0FBaEM7QUFBcUMsWUFBSSxFQUFFVixJQUEzQztBQUFpRCxtQkFBVyxFQUFFWTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNFRDs7S0EvRVF5QixZO0FBaUZULCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFlZDQ4ZGY4NjBmMTg0ZDM3YzIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgICBDYXJkLFxyXG4gICAgSWNvbixcclxuICAgIERpdmlkZXIsXHJcbiAgICBTZWdtZW50LFxyXG4gICAgQnV0dG9uLFxyXG4gICAgUG9wdXAsXHJcbiAgICBIZWFkZXIsXHJcbiAgICBNb2RhbCxcclxuICAgIEltYWdlXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBQb3N0Q29tbWVudHMgZnJvbSAnLi9Qb3N0Q29tbWVudHMnO1xyXG5pbXBvcnQgQ29tbWVudElucHV0RmllbGQgZnJvbSAnLi9Db21tZW50SW5wdXRGaWVsZCc7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCJcclxuaW1wb3J0IExpbmsgIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGRlbGV0ZVBvc3QsbGlrZVBvc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcclxuaW1wb3J0IExpa2VzTGlzdCBmcm9tIFwiLi9MaWtlc0xpc3RcIjtcclxuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSBcIi4vSW1hZ2VNb2RhbFwiO1xyXG5pbXBvcnQgTm9JbWFnZU1vZGFsIGZyb20gXCIuL05vSW1hZ2VNb2RhbFwiO1xyXG5mdW5jdGlvbiBDYXJkUG9zdCh7cG9zdCx1c2VyLHNldFBvc3RzLHNldFNob3dUb2FzdHJ9KSB7XHJcbiAgXHJcbiAgICBjb25zdCBbbGlrZXMsc2V0TGlrZXNdPXVzZVN0YXRlKHBvc3QubGlrZXMpO1xyXG4gICAgY29uc3QgaXNMaWtlZCA9IFxyXG4gICAgIGxpa2VzLmxlbmd0aCA+IDAgJiYgbGlrZXMuZmlsdGVyKGxpa2U9Pmxpa2UudXNlciA9PT0gdXNlci5faWQpLmxlbmd0aCA+IDA7XHJcbiAgICBjb25zdCBbY29tbWVudHMsc2V0Q29tbWVudHNdPXVzZVN0YXRlKHBvc3QuY29tbWVudHMpXHJcbiAgICBjb25zdCB7ZXJyb3Isc2V0RXJyb3J9ID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBhZGRQcm9wc1RvTW9kYWwgPSAoKSA9PiAoe1xyXG4gICAgcG9zdCxcclxuICAgIHVzZXIsXHJcbiAgICBzZXRMaWtlcyxcclxuICAgIGxpa2VzLFxyXG4gICAgaXNMaWtlZCxcclxuICAgIGNvbW1lbnRzLFxyXG4gICAgc2V0Q29tbWVudHNcclxuICB9KTtcclxuXHJcbiAgXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAge3Nob3dNb2RhbCAmJiAoXHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgIG9wZW49e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgICBjbG9zZUljb25cclxuICAgICAgICAgICAgICBjbG9zZU9uRGltbWVyQ2xpY2tcclxuICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfT5cclxuICAgICAgICAgICAgICA8TW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgICAgIHtwb3N0LnBpY1VybCA/IChcclxuICAgICAgICAgICAgICAgICAgPEltYWdlTW9kYWwgey4uLmFkZFByb3BzVG9Nb2RhbCgpfSAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPE5vSW1hZ2VNb2RhbCB7Li4uYWRkUHJvcHNUb01vZGFsKCl9IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICl9XHJcbiAgICBcclxuICAgICAgICA8U2VnbWVudCBiYXNpYz5cclxuICAgICAgICA8Q2FyZCBjb2xvcj1cImJsYWNrXCIgZmx1aWQ+XHJcbiAgICAgICAge3Bvc3QucGljVXJsICYmICggPEltYWdlIFxyXG4gICAgICAgIHNyYz17cG9zdC5waWNVcmx9IFxyXG4gICAgICAgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19IFxyXG4gICAgICAgIGZsb2F0ZWQ9XCJsZWZ0XCJcclxuICAgICAgICB3cmFwcGVkIFxyXG4gICAgICAgIHVpPXtmYWxzZX0gXHJcbiAgICAgICAgYWx0PVwiUG9zdEltYWdlXCIgXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgIC8+KX1cclxuICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICA8SW1hZ2UgZmxvYXRlZD1cImxlZnRcIiBzcmM9e3Bvc3QudXNlci5wcm9maWxlUGljVXJsfSBhdmF0YXIgY2lyY3VsYXIgLz5cclxuICAgICAgICAgeyh1c2VyLnJvbGU9PT1cInJvb3RcIiB8fCBwb3N0LnVzZXIuX2lkPT09dXNlci5faWQpICYmIChcclxuICAgICAgICAgPD5cclxuICAgICAgICAgPFBvcHVwIFxyXG4gICAgICAgICBvbj1cImNsaWNrXCIgXHJcbiAgICAgICAgIHBvc2l0aW9uPVwicmlnaHRcIiBcclxuICAgICAgICAgdHJpZ2dlcj17XHJcbiAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgIHNyYz1cIi9kZWxldGVJY29uLnN2Z1wiIFxyXG4gICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0gXHJcbiAgICAgICAgICAgc2l6ZT1cIm1pbmlcIlxyXG4gICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiIC8+XHJcbiAgICAgICAgfT5cclxuICAgICAgICA8SGVhZGVyIGFzPVwiaDRcIiBjb250ZW50PVwiQXJlIHlvdSBzdXJlP1wiIC8+XHJcbiAgICAgICAgPHA+VGhpcyBhY3Rpb24gaXMgaXJyZXZlcnNpYmxlPC9wPlxyXG4gICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgY29sb3I9XCJyZWRcIiBcclxuICAgICAgICBpY29uPVwidHJhc2hcIiBcclxuICAgICAgICBjb250ZW50PVwiRGVsZXRlXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVQb3N0KHBvc3QuX2lkLCBzZXRQb3N0cywgc2V0U2hvd1RvYXN0cil9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAgPC9Qb3B1cD5cclxuICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdC51c2VyLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICA8YT57cG9zdC51c2VyLm5hbWV9PC9hPlxyXG4gICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuXHJcbiAgICAgICA8Q2FyZC5NZXRhPntjYWxjdWxhdGVUaW1lKHBvc3QuY3JlYXRlZEF0KX08L0NhcmQuTWV0YT5cclxuICAgICAgIFxyXG4gICAgICAge3Bvc3QubG9jYXRpb24gJiYgPENhcmQuTWV0YSBjb250ZW50PXtwb3N0LmxvY2F0aW9ufSAvPn1cclxuICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uIFxyXG4gICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICBmb250U2l6ZTpcIjM3cHhcIixcclxuICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOlwiMC4xcHhcIixcclxuICAgICAgICAgICB3b3JkU3BhY2luZzpcIjAuMzVweFwiIFxyXG4gICAgICAgIH19PlxyXG4gICAgICAge3Bvc3QudGV4dH1cclxuICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG5cclxuICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XHJcbiAgICAgICAgICA8SWNvbiBcclxuICAgICAgICAgIG5hbWU9e2lzTGlrZWQ/IFwiaGVhcnRcIjpcImhlYXJ0IG91dGxpbmVcIn1cclxuICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpPT5cclxuICAgICAgICAgICAgbGlrZVBvc3QocG9zdC5faWQsdXNlci5faWQsc2V0TGlrZXMsaXNMaWtlZD9mYWxzZTp0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDxMaWtlc0xpc3RcclxuICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICB0cmlnZ2VyPXtcclxuICAgICAgICAgICAgbGlrZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbkxpa2VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAge2Ake2xpa2VzLmxlbmd0aH0gJHtsaWtlcy5sZW5ndGggPT09IDEgPyBcImxpa2VcIiA6IFwibGlrZXNcIn1gfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICA8SWNvbiBcclxuICAgICAgICAgIG5hbWU9XCJjb21tZW50IG91dGxpbmVcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI3cHhcIn19XHJcbiAgICAgICAgICBjb2xvcj1cImJsdWVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmIFxyXG4gICAgICAgICAgIGNvbW1lbnRzLm1hcCgoY29tbWVudCxpKT0+XHJcbiAgICAgICAgICAgICAgIGk8MyAmJiAoXHJcbiAgICAgICAgICAgICAgIDxQb3N0Q29tbWVudHMgXHJcbiAgICAgICAgICAgICAgIGtleT17Y29tbWVudC5faWR9XHJcbiAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cclxuICAgICAgICAgICAgICAgLz4gKVxyXG4gICAgICAgICAgICl9XHJcbiAgICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDMgJiYgKFxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJWaWV3IE1vcmVcIiBjb2xvcj1cInRlYWxcIiBiYXNpYyBjaXJjdWxhciBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9IC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICAgICAgPENvbW1lbnRJbnB1dEZpZWxkIFxyXG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICBzZXRDb21tZW50cz17c2V0Q29tbWVudHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQb3N0XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9kYWwsIEltYWdlLCBDYXJkLCBJY29uLCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBQb3N0Q29tbWVudHMgZnJvbSBcIi4vUG9zdENvbW1lbnRzXCI7XHJcbmltcG9ydCBDb21tZW50SW5wdXRGaWVsZCBmcm9tIFwiLi9Db21tZW50SW5wdXRGaWVsZFwiO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGxpa2VQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XHJcbmltcG9ydCBMaWtlc0xpc3QgZnJvbSBcIi4vTGlrZXNMaXN0XCI7XHJcblxyXG5mdW5jdGlvbiBOb0ltYWdlTW9kYWwoe1xyXG4gIHBvc3QsXHJcbiAgdXNlcixcclxuICBzZXRMaWtlcyxcclxuICBsaWtlcyxcclxuICBpc0xpa2VkLFxyXG4gIGNvbW1lbnRzLFxyXG4gIHNldENvbW1lbnRzXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgZmx1aWQ+XHJcbiAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgPEltYWdlIGZsb2F0ZWQ9XCJsZWZ0XCIgYXZhdGFyIHNyYz17cG9zdC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcblxyXG4gICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgIDxhPntwb3N0LnVzZXIubmFtZX08L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuXHJcbiAgICAgICAgPENhcmQuTWV0YT57Y2FsY3VsYXRlVGltZShwb3N0LmNyZWF0ZWRBdCl9PC9DYXJkLk1ldGE+XHJcblxyXG4gICAgICAgIHtwb3N0LmxvY2F0aW9uICYmIDxDYXJkLk1ldGEgY29udGVudD17cG9zdC5sb2NhdGlvbn0gLz59XHJcblxyXG4gICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxN3B4XCIsXHJcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4xcHhcIixcclxuICAgICAgICAgICAgd29yZFNwYWNpbmc6IFwiMC4zNXB4XCJcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAge3Bvc3QudGV4dH1cclxuICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG5cclxuICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICA8SWNvblxyXG4gICAgICAgICAgbmFtZT17aXNMaWtlZCA/IFwiaGVhcnRcIiA6IFwiaGVhcnQgb3V0bGluZVwifVxyXG4gICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgbGlrZVBvc3QocG9zdC5faWQsIHVzZXIuX2lkLCBzZXRMaWtlcywgaXNMaWtlZCA/IGZhbHNlIDogdHJ1ZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8TGlrZXNMaXN0XHJcbiAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgdHJpZ2dlcj17XHJcbiAgICAgICAgICAgIGxpa2VzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5MaWtlc0xpc3RcIj5cclxuICAgICAgICAgICAgICAgIHtgJHtsaWtlcy5sZW5ndGh9ICR7bGlrZXMubGVuZ3RoID09PSAxID8gXCJsaWtlXCIgOiBcImxpa2VzXCJ9YH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGNvbW1lbnRzLmxlbmd0aCA+IDIgPyBcIjIwMHB4XCIgOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIGNvbW1lbnRzLm1hcChjb21tZW50ID0+IChcclxuICAgICAgICAgICAgICA8UG9zdENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuX2lkfVxyXG4gICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cclxuICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Q29tbWVudElucHV0RmllbGQgcG9zdElkPXtwb3N0Ll9pZH0gdXNlcj17dXNlcn0gc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfSAvPlxyXG4gICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb0ltYWdlTW9kYWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=