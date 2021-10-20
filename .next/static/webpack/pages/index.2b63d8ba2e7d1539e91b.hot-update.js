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
/* harmony import */ var _NoImageModal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_NoImageModal__WEBPACK_IMPORTED_MODULE_10__);
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
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_NoImageModal__WEBPACK_IMPORTED_MODULE_10___default()), _objectSpread({}, addPropsToModal()), void 0, false, {
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

/***/ "./components/Post/ImageModal.js":
/*!***************************************!*\
  !*** ./components/Post/ImageModal.js ***!
  \***************************************/
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


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor_pro\\Voiceless_Saints\\components\\Post\\ImageModal.js";









function ImageModal(_ref) {
  var _this = this;

  var post = _ref.post,
      user = _ref.user,
      setLikes = _ref.setLikes,
      likes = _ref.likes,
      isLiked = _ref.isLiked,
      comments = _ref.comments,
      setComments = _ref.setComments;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      columns: 2,
      stackable: true,
      relaxed: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Modal.Content, {
          image: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Image, {
            wrapped: true,
            size: "large",
            src: post.picUrl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Grid.Column, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card, {
          fluid: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Content, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Image, {
              floated: "left",
              avatar: true,
              src: post.user.profilePicUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Header, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                href: "/".concat(post.user.username),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: post.user.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Meta, {
              children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(post.createdAt)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this), post.location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Meta, {
              content: post.location
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Description, {
              style: {
                fontSize: "17px",
                letterSpacing: "0.1px",
                wordSpacing: "0.35px"
              },
              children: post.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
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
              lineNumber: 54,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LikesList__WEBPACK_IMPORTED_MODULE_7__.default, {
              postId: post._id,
              trigger: likes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "spanLikesList",
                children: "".concat(likes.length, " ").concat(likes.length === 1 ? "like" : "likes")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Divider, {
              hidden: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
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
                  lineNumber: 84,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__.default, {
              postId: post._id,
              user: user,
              setComments: setComments
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_c = ImageModal;
/* harmony default export */ __webpack_exports__["default"] = (ImageModal);

var _c;

$RefreshReg$(_c, "ImageModal");

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3QvSW1hZ2VNb2RhbC5qcyJdLCJuYW1lcyI6WyJDYXJkUG9zdCIsInBvc3QiLCJ1c2VyIiwic2V0UG9zdHMiLCJzZXRTaG93VG9hc3RyIiwidXNlU3RhdGUiLCJsaWtlcyIsInNldExpa2VzIiwiaXNMaWtlZCIsImxlbmd0aCIsImZpbHRlciIsImxpa2UiLCJfaWQiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwiZXJyb3IiLCJzZXRFcnJvciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImFkZFByb3BzVG9Nb2RhbCIsInBpY1VybCIsImN1cnNvciIsInByb2ZpbGVQaWNVcmwiLCJyb2xlIiwiZGVsZXRlUG9zdCIsInVzZXJuYW1lIiwibmFtZSIsImNhbGN1bGF0ZVRpbWUiLCJjcmVhdGVkQXQiLCJsb2NhdGlvbiIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsIndvcmRTcGFjaW5nIiwidGV4dCIsImxpa2VQb3N0IiwibWFyZ2luTGVmdCIsIm1hcCIsImNvbW1lbnQiLCJpIiwiSW1hZ2VNb2RhbCIsIm92ZXJmbG93IiwiaGVpZ2h0IiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLFFBQVQsT0FBc0Q7QUFBQTs7QUFBQTs7QUFBQSxNQUFuQ0MsSUFBbUMsUUFBbkNBLElBQW1DO0FBQUEsTUFBOUJDLElBQThCLFFBQTlCQSxJQUE4QjtBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFoQkMsYUFBZ0IsUUFBaEJBLGFBQWdCOztBQUFBLGtCQUUzQkMsK0NBQVEsQ0FBQ0osSUFBSSxDQUFDSyxLQUFOLENBRm1C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QUNFLG9CQUFNLEVBQUVYLElBQUksQ0FBQ1csR0FEZjtBQUVFLGtCQUFJLEVBQUVWLElBRlI7QUFHRSx5QkFBVyxFQUFFWTtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBc0ZEOztLQS9GUXlCLFU7QUFpR1QsK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmI2M2Q4YmEyZTdkMTUzOWU5MWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICAgIENhcmQsXHJcbiAgICBJY29uLFxyXG4gICAgRGl2aWRlcixcclxuICAgIFNlZ21lbnQsXHJcbiAgICBCdXR0b24sXHJcbiAgICBQb3B1cCxcclxuICAgIEhlYWRlcixcclxuICAgIE1vZGFsLFxyXG4gICAgSW1hZ2VcclxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IFBvc3RDb21tZW50cyBmcm9tICcuL1Bvc3RDb21tZW50cyc7XHJcbmltcG9ydCBDb21tZW50SW5wdXRGaWVsZCBmcm9tICcuL0NvbW1lbnRJbnB1dEZpZWxkJztcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIlxyXG5pbXBvcnQgTGluayAgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZGVsZXRlUG9zdCxsaWtlUG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xyXG5pbXBvcnQgTGlrZXNMaXN0IGZyb20gXCIuL0xpa2VzTGlzdFwiO1xyXG5pbXBvcnQgSW1hZ2VNb2RhbCBmcm9tIFwiLi9JbWFnZU1vZGFsXCI7XHJcbmltcG9ydCBOb0ltYWdlTW9kYWwgZnJvbSBcIi4vTm9JbWFnZU1vZGFsXCI7XHJcbmZ1bmN0aW9uIENhcmRQb3N0KHtwb3N0LHVzZXIsc2V0UG9zdHMsc2V0U2hvd1RvYXN0cn0pIHtcclxuICBcclxuICAgIGNvbnN0IFtsaWtlcyxzZXRMaWtlc109dXNlU3RhdGUocG9zdC5saWtlcyk7XHJcbiAgICBjb25zdCBpc0xpa2VkID0gXHJcbiAgICAgbGlrZXMubGVuZ3RoID4gMCAmJiBsaWtlcy5maWx0ZXIobGlrZT0+bGlrZS51c2VyID09PSB1c2VyLl9pZCkubGVuZ3RoID4gMDtcclxuICAgIGNvbnN0IFtjb21tZW50cyxzZXRDb21tZW50c109dXNlU3RhdGUocG9zdC5jb21tZW50cylcclxuICAgIGNvbnN0IHtlcnJvcixzZXRFcnJvcn0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGFkZFByb3BzVG9Nb2RhbCA9ICgpID0+ICh7XHJcbiAgICBwb3N0LFxyXG4gICAgdXNlcixcclxuICAgIHNldExpa2VzLFxyXG4gICAgbGlrZXMsXHJcbiAgICBpc0xpa2VkLFxyXG4gICAgY29tbWVudHMsXHJcbiAgICBzZXRDb21tZW50c1xyXG4gIH0pO1xyXG5cclxuICBcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7c2hvd01vZGFsICYmIChcclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgb3Blbj17c2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgIGNsb3NlSWNvblxyXG4gICAgICAgICAgICAgIGNsb3NlT25EaW1tZXJDbGlja1xyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAge3Bvc3QucGljVXJsID8gKFxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VNb2RhbCB7Li4uYWRkUHJvcHNUb01vZGFsKCl9IC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8Tm9JbWFnZU1vZGFsIHsuLi5hZGRQcm9wc1RvTW9kYWwoKX0gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgKX1cclxuICAgIFxyXG4gICAgICAgIDxTZWdtZW50IGJhc2ljPlxyXG4gICAgICAgIDxDYXJkIGNvbG9yPVwiYmxhY2tcIiBmbHVpZD5cclxuICAgICAgICB7cG9zdC5waWNVcmwgJiYgKCA8SW1hZ2UgXHJcbiAgICAgICAgc3JjPXtwb3N0LnBpY1VybH0gXHJcbiAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0gXHJcbiAgICAgICAgZmxvYXRlZD1cImxlZnRcIlxyXG4gICAgICAgIHdyYXBwZWQgXHJcbiAgICAgICAgdWk9e2ZhbHNlfSBcclxuICAgICAgICBhbHQ9XCJQb3N0SW1hZ2VcIiBcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgLz4pfVxyXG4gICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgIDxJbWFnZSBmbG9hdGVkPVwibGVmdFwiIHNyYz17cG9zdC51c2VyLnByb2ZpbGVQaWNVcmx9IGF2YXRhciBjaXJjdWxhciAvPlxyXG4gICAgICAgICB7KHVzZXIucm9sZT09PVwicm9vdFwiIHx8IHBvc3QudXNlci5faWQ9PT11c2VyLl9pZCkgJiYgKFxyXG4gICAgICAgICA8PlxyXG4gICAgICAgICA8UG9wdXAgXHJcbiAgICAgICAgIG9uPVwiY2xpY2tcIiBcclxuICAgICAgICAgcG9zaXRpb249XCJyaWdodFwiIFxyXG4gICAgICAgICB0cmlnZ2VyPXtcclxuICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgc3JjPVwiL2RlbGV0ZUljb24uc3ZnXCIgXHJcbiAgICAgICAgICAgc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fSBcclxuICAgICAgICAgICBzaXplPVwibWluaVwiXHJcbiAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCIgLz5cclxuICAgICAgICB9PlxyXG4gICAgICAgIDxIZWFkZXIgYXM9XCJoNFwiIGNvbnRlbnQ9XCJBcmUgeW91IHN1cmU/XCIgLz5cclxuICAgICAgICA8cD5UaGlzIGFjdGlvbiBpcyBpcnJldmVyc2libGU8L3A+XHJcbiAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICBjb2xvcj1cInJlZFwiIFxyXG4gICAgICAgIGljb249XCJ0cmFzaFwiIFxyXG4gICAgICAgIGNvbnRlbnQ9XCJEZWxldGVcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVBvc3QocG9zdC5faWQsIHNldFBvc3RzLCBzZXRTaG93VG9hc3RyKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICA8L1BvcHVwPlxyXG4gICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8Q2FyZC5IZWFkZXI+XHJcbiAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgIDxhPntwb3N0LnVzZXIubmFtZX08L2E+XHJcbiAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0NhcmQuSGVhZGVyPlxyXG5cclxuICAgICAgIDxDYXJkLk1ldGE+e2NhbGN1bGF0ZVRpbWUocG9zdC5jcmVhdGVkQXQpfTwvQ2FyZC5NZXRhPlxyXG4gICAgICAgXHJcbiAgICAgICB7cG9zdC5sb2NhdGlvbiAmJiA8Q2FyZC5NZXRhIGNvbnRlbnQ9e3Bvc3QubG9jYXRpb259IC8+fVxyXG4gICAgICAgPENhcmQuRGVzY3JpcHRpb24gXHJcbiAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgIGZvbnRTaXplOlwiMzdweFwiLFxyXG4gICAgICAgICAgIGxldHRlclNwYWNpbmc6XCIwLjFweFwiLFxyXG4gICAgICAgICAgIHdvcmRTcGFjaW5nOlwiMC4zNXB4XCIgXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICB7cG9zdC50ZXh0fVxyXG4gICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcblxyXG4gICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICAgIDxJY29uIFxyXG4gICAgICAgICAgbmFtZT17aXNMaWtlZD8gXCJoZWFydFwiOlwiaGVhcnQgb3V0bGluZVwifVxyXG4gICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fVxyXG4gICAgICAgICAgb25DbGljaz17KCk9PlxyXG4gICAgICAgICAgICBsaWtlUG9zdChwb3N0Ll9pZCx1c2VyLl9pZCxzZXRMaWtlcyxpc0xpa2VkP2ZhbHNlOnRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgXHJcbiAgICAgICAgPExpa2VzTGlzdFxyXG4gICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICBsaWtlcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTGlrZXNMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7YCR7bGlrZXMubGVuZ3RofSAke2xpa2VzLmxlbmd0aCA9PT0gMSA/IFwibGlrZVwiIDogXCJsaWtlc1wifWB9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgIDxJY29uIFxyXG4gICAgICAgICAgbmFtZT1cImNvbW1lbnQgb3V0bGluZVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjdweFwifX1cclxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDAgJiYgXHJcbiAgICAgICAgICAgY29tbWVudHMubWFwKChjb21tZW50LGkpPT5cclxuICAgICAgICAgICAgICAgaTwzICYmIChcclxuICAgICAgICAgICAgICAgPFBvc3RDb21tZW50cyBcclxuICAgICAgICAgICAgICAga2V5PXtjb21tZW50Ll9pZH1cclxuICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cclxuICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAvPiApXHJcbiAgICAgICAgICAgKX1cclxuICAgICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMyAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIlZpZXcgTW9yZVwiIGNvbG9yPVwidGVhbFwiIGJhc2ljIGNpcmN1bGFyIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX0gLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgICAgICA8Q29tbWVudElucHV0RmllbGQgXHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFBvc3RcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNb2RhbCwgR3JpZCwgSW1hZ2UsIENhcmQsIEljb24sIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IFBvc3RDb21tZW50cyBmcm9tIFwiLi9Qb3N0Q29tbWVudHNcIjtcclxuaW1wb3J0IENvbW1lbnRJbnB1dEZpZWxkIGZyb20gXCIuL0NvbW1lbnRJbnB1dEZpZWxkXCI7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgbGlrZVBvc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcclxuaW1wb3J0IExpa2VzTGlzdCBmcm9tIFwiLi9MaWtlc0xpc3RcIjtcclxuXHJcbmZ1bmN0aW9uIEltYWdlTW9kYWwoe1xyXG4gIHBvc3QsXHJcbiAgdXNlcixcclxuICBzZXRMaWtlcyxcclxuICBsaWtlcyxcclxuICBpc0xpa2VkLFxyXG4gIGNvbW1lbnRzLFxyXG4gIHNldENvbW1lbnRzXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdyaWQgY29sdW1ucz17Mn0gc3RhY2thYmxlIHJlbGF4ZWQ+XHJcbiAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPE1vZGFsLkNvbnRlbnQgaW1hZ2U+XHJcbiAgICAgICAgICAgIDxJbWFnZSB3cmFwcGVkIHNpemU9XCJsYXJnZVwiIHNyYz17cG9zdC5waWNVcmx9IC8+XHJcbiAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPENhcmQgZmx1aWQ+XHJcbiAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPEltYWdlIGZsb2F0ZWQ9XCJsZWZ0XCIgYXZhdGFyIHNyYz17cG9zdC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcblxyXG4gICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPntwb3N0LnVzZXIubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgPENhcmQuTWV0YT57Y2FsY3VsYXRlVGltZShwb3N0LmNyZWF0ZWRBdCl9PC9DYXJkLk1ldGE+XHJcblxyXG4gICAgICAgICAgICAgIHtwb3N0LmxvY2F0aW9uICYmIDxDYXJkLk1ldGEgY29udGVudD17cG9zdC5sb2NhdGlvbn0gLz59XHJcblxyXG4gICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxN3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4xcHhcIixcclxuICAgICAgICAgICAgICAgICAgd29yZFNwYWNpbmc6IFwiMC4zNXB4XCJcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAge3Bvc3QudGV4dH1cclxuICAgICAgICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG5cclxuICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgbmFtZT17aXNMaWtlZCA/IFwiaGVhcnRcIiA6IFwiaGVhcnQgb3V0bGluZVwifVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgbGlrZVBvc3QocG9zdC5faWQsIHVzZXIuX2lkLCBzZXRMaWtlcywgaXNMaWtlZCA/IGZhbHNlIDogdHJ1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8TGlrZXNMaXN0XHJcbiAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcj17XHJcbiAgICAgICAgICAgICAgICAgIGxpa2VzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5MaWtlc0xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtgJHtsaWtlcy5sZW5ndGh9ICR7bGlrZXMubGVuZ3RoID09PSAxID8gXCJsaWtlXCIgOiBcImxpa2VzXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvbW1lbnRzLmxlbmd0aCA+IDIgPyBcIjIwMHB4XCIgOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnRzLm1hcChjb21tZW50ID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8UG9zdENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8Q29tbWVudElucHV0RmllbGRcclxuICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlTW9kYWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=