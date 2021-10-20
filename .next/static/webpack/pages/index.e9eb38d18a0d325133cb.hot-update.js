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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {
      basic: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card, {
        color: "black",
        fluid: true,
        children: [post.picUrl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {
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
          lineNumber: 31,
          columnNumber: 27
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card.Content, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {
            floated: "left",
            src: post.user.profilePicUrl,
            avatar: true,
            circular: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 10
          }, this), (user.role === "root" || post.user._id === user._id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Popup, {
              on: "click",
              position: "right",
              trigger: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {
                src: "/deleteIcon.svg",
                style: {
                  cursor: "pointer"
                },
                size: "mini",
                floated: "right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 54
              }, this),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Header, {
                as: "h4",
                content: "Are you sure?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "This action is irreversible"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
                color: "red",
                icon: "trash",
                content: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 10
            }, this)
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card.Header, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: "/".concat(post.user.username),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: post.user.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 48
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card.Meta, {
            children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(post.createdAt)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 8
          }, this), post.location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card.Meta, {
            content: post.location
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 26
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card.Description, {
            style: {
              fontSize: "37px",
              letterSpacing: "0.1px",
              wordSpacing: "0.35px"
            },
            children: post.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card.Content, {
          extra: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {
            name: isLiked ? "heart" : "heart outline",
            color: "red",
            style: {
              cursor: "pointer"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 11
          }, this), likes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "spanlikeslist",
            children: "".concat(likes.length, " ").concat(likes.length === 1 ? "like" : "likes")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {
            name: "comment outline",
            style: {
              marginLeft: "7px"
            },
            color: "blue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 11
          }, this), comments.length > 0 && comments.map(function (comment, i) {
            return i < 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostComments__WEBPACK_IMPORTED_MODULE_2__.default, {
              comment: comment,
              postId: post._id,
              user: user,
              setComments: setComments
            }, comment._id, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 16
            }, _this);
          }), comments.length > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
            content: "View More",
            color: "teal",
            basic: true,
            circular: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {
            hidden: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__.default, {
            user: user,
            postId: post._id,
            setComments: setComments
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 8
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {
      hidden: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0LmpzIl0sIm5hbWVzIjpbIkNhcmRQb3N0IiwicG9zdCIsInVzZXIiLCJzZXRQb3N0cyIsInNldFNob3dUb2FzdHIiLCJ1c2VTdGF0ZSIsImxpa2VzIiwic2V0TGlrZXMiLCJpc0xpa2VkIiwibGVuZ3RoIiwiZmlsdGVyIiwibGlrZSIsIl9pZCIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJlcnJvciIsInNldEVycm9yIiwicGljVXJsIiwiY3Vyc29yIiwicHJvZmlsZVBpY1VybCIsInJvbGUiLCJ1c2VybmFtZSIsIm5hbWUiLCJjYWxjdWxhdGVUaW1lIiwiY3JlYXRlZEF0IiwibG9jYXRpb24iLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJ3b3JkU3BhY2luZyIsInRleHQiLCJtYXJnaW5MZWZ0IiwibWFwIiwiY29tbWVudCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxRQUFULE9BQXNEO0FBQUE7O0FBQUE7O0FBQUEsTUFBbkNDLElBQW1DLFFBQW5DQSxJQUFtQztBQUFBLE1BQTlCQyxJQUE4QixRQUE5QkEsSUFBOEI7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBaEJDLGFBQWdCLFFBQWhCQSxhQUFnQjs7QUFBQSxrQkFFM0JDLCtDQUFRLENBQUNKLElBQUksQ0FBQ0ssS0FBTixDQUZtQjtBQUFBLE1BRTNDQSxLQUYyQztBQUFBLE1BRXJDQyxRQUZxQzs7QUFHbEQsTUFBTUMsT0FBTyxHQUNaRixLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUFmLElBQW9CSCxLQUFLLENBQUNJLE1BQU4sQ0FBYSxVQUFBQyxJQUFJO0FBQUEsV0FBRUEsSUFBSSxDQUFDVCxJQUFMLEtBQWNBLElBQUksQ0FBQ1UsR0FBckI7QUFBQSxHQUFqQixFQUEyQ0gsTUFB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QixHQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRlM7QUFBQSxXQUFiLENBbkJKLEVBNkJLQyxRQUFRLENBQUNKLE1BQVQsR0FBa0IsQ0FBbEIsaUJBQ0EsOERBQUMscURBQUQ7QUFBUSxtQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGlCQUFLLEVBQUMsTUFBbEM7QUFBeUMsaUJBQUssTUFBOUM7QUFBK0Msb0JBQVE7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE5QkwsZUFpQ0ssOERBQUMsc0RBQUQ7QUFBUyxrQkFBTTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakNMLGVBa0NLLDhEQUFDLHVEQUFEO0FBQ0EsZ0JBQUksRUFBRVAsSUFETjtBQUVBLGtCQUFNLEVBQUVELElBQUksQ0FBQ1csR0FGYjtBQUdBLHVCQUFXLEVBQUVFO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUE0RUEsOERBQUMsc0RBQUQ7QUFBUyxZQUFNO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVFQTtBQUFBLGtCQURKO0FBZ0ZIOztHQTFGUWQsUTs7S0FBQUEsUTtBQTRGVCwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOWViMzhkMThhMGQzMjUxMzNjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIEljb24sXHJcbiAgICBEaXZpZGVyLFxyXG4gICAgU2VnbWVudCxcclxuICAgIEJ1dHRvbixcclxuICAgIFBvcHVwLFxyXG4gICAgSGVhZGVyLFxyXG4gICAgTW9kYWwsXHJcbiAgICBJbWFnZVxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgUG9zdENvbW1lbnRzIGZyb20gJy4vUG9zdENvbW1lbnRzJztcclxuaW1wb3J0IENvbW1lbnRJbnB1dEZpZWxkIGZyb20gJy4vQ29tbWVudElucHV0RmllbGQnO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiXHJcbmltcG9ydCBMaW5rICBmcm9tICduZXh0L2xpbmsnO1xyXG5mdW5jdGlvbiBDYXJkUG9zdCh7cG9zdCx1c2VyLHNldFBvc3RzLHNldFNob3dUb2FzdHJ9KSB7XHJcbiAgXHJcbiAgICBjb25zdCBbbGlrZXMsc2V0TGlrZXNdPXVzZVN0YXRlKHBvc3QubGlrZXMpO1xyXG4gICAgY29uc3QgaXNMaWtlZCA9IFxyXG4gICAgIGxpa2VzLmxlbmd0aCA+IDAgJiYgbGlrZXMuZmlsdGVyKGxpa2U9Pmxpa2UudXNlciA9PT0gdXNlci5faWQpLmxlbmd0aCA+IDA7XHJcbiAgICBjb25zdCBbY29tbWVudHMsc2V0Q29tbWVudHNdPXVzZVN0YXRlKHBvc3QuY29tbWVudHMpXHJcbiAgICBjb25zdCB7ZXJyb3Isc2V0RXJyb3J9ID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPFNlZ21lbnQgYmFzaWM+XHJcbiAgICAgICAgPENhcmQgY29sb3I9XCJibGFja1wiIGZsdWlkPlxyXG4gICAgICAgIHtwb3N0LnBpY1VybCAmJiAoIDxJbWFnZSBcclxuICAgICAgICBzcmM9e3Bvc3QucGljVXJsfSBcclxuICAgICAgICBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fSBcclxuICAgICAgICBmbG9hdGVkPVwibGVmdFwiXHJcbiAgICAgICAgd3JhcHBlZCBcclxuICAgICAgICB1aT17ZmFsc2V9IFxyXG4gICAgICAgIGFsdD1cIlBvc3RJbWFnZVwiIC8+KX1cclxuICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICA8SW1hZ2UgZmxvYXRlZD1cImxlZnRcIiBzcmM9e3Bvc3QudXNlci5wcm9maWxlUGljVXJsfSBhdmF0YXIgY2lyY3VsYXIgLz5cclxuICAgICAgICAgeyh1c2VyLnJvbGU9PT1cInJvb3RcIiB8fCBwb3N0LnVzZXIuX2lkPT09dXNlci5faWQpICYmIChcclxuICAgICAgICAgPD5cclxuICAgICAgICAgPFBvcHVwIG9uPVwiY2xpY2tcIiBwb3NpdGlvbj1cInJpZ2h0XCIgdHJpZ2dlcj17PEltYWdlIHNyYz1cIi9kZWxldGVJY29uLnN2Z1wiIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0gc2l6ZT1cIm1pbmlcIiBmbG9hdGVkPVwicmlnaHRcIiAvPlxyXG4gICAgICAgIH0+XHJcbiAgICAgICAgPEhlYWRlciBhcz1cImg0XCIgY29udGVudD1cIkFyZSB5b3Ugc3VyZT9cIiAvPlxyXG4gICAgICAgIDxwPlRoaXMgYWN0aW9uIGlzIGlycmV2ZXJzaWJsZTwvcD5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwicmVkXCIgaWNvbj1cInRyYXNoXCIgY29udGVudD1cIkRlbGV0ZVwiIC8+XHJcbiAgICAgICAgIDwvUG9wdXA+XHJcbiAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdC51c2VyLnVzZXJuYW1lfWB9PjxhPntwb3N0LnVzZXIubmFtZX08L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcblxyXG4gICAgICAgPENhcmQuTWV0YT57Y2FsY3VsYXRlVGltZShwb3N0LmNyZWF0ZWRBdCl9PC9DYXJkLk1ldGE+XHJcbiAgICAgICBcclxuICAgICAgIHtwb3N0LmxvY2F0aW9uICYmIDxDYXJkLk1ldGEgY29udGVudD17cG9zdC5sb2NhdGlvbn0gLz59XHJcbiAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbiBzdHlsZT17e2ZvbnRTaXplOlwiMzdweFwiLGxldHRlclNwYWNpbmc6XCIwLjFweFwiLHdvcmRTcGFjaW5nOlwiMC4zNXB4XCIgfX0+XHJcbiAgICAgICB7cG9zdC50ZXh0fVxyXG4gICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcblxyXG4gICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICAgIDxJY29uIFxyXG4gICAgICAgICAgbmFtZT17aXNMaWtlZD8gXCJoZWFydFwiIDogXCJoZWFydCBvdXRsaW5lXCJ9XHJcbiAgICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIHtsaWtlcy5sZW5ndGg+MCAmJihcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFubGlrZXNsaXN0XCI+XHJcbiAgICAgICAgICAgICAgeyBgJHtsaWtlcy5sZW5ndGh9ICR7bGlrZXMubGVuZ3RoPT09MT9cImxpa2VcIjpcImxpa2VzXCJ9YH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDxJY29uIFxyXG4gICAgICAgICAgbmFtZT1cImNvbW1lbnQgb3V0bGluZVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjdweFwifX1cclxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDAgJiYgXHJcbiAgICAgICAgICAgY29tbWVudHMubWFwKChjb21tZW50LGkpPT5cclxuICAgICAgICAgICAgICAgaTwzICYmIChcclxuICAgICAgICAgICAgICAgPFBvc3RDb21tZW50cyBcclxuICAgICAgICAgICAgICAga2V5PXtjb21tZW50Ll9pZH1cclxuICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cclxuICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAvPiApXHJcbiAgICAgICAgICAgKX1cclxuICAgICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMyAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIlZpZXcgTW9yZVwiIGNvbG9yPVwidGVhbFwiIGJhc2ljIGNpcmN1bGFyIC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICAgICAgPENvbW1lbnRJbnB1dEZpZWxkIFxyXG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICBzZXRDb21tZW50cz17c2V0Q29tbWVudHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQb3N0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=