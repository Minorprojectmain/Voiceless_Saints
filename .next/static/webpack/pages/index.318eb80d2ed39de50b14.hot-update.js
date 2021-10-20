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
                lineNumber: 46,
                columnNumber: 9
              }, this),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Header, {
                as: "h4",
                content: "Are you sure?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "This action is irreversible"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
                color: "red",
                icon: "trash",
                content: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
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
                lineNumber: 64,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card.Meta, {
            children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(post.createdAt)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 8
          }, this), post.location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card.Meta, {
            content: post.location
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
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
            lineNumber: 71,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card.Content, {
          extra: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {
            name: isLiked ? "heartbeat" : "heart outline",
            color: "red",
            style: {
              cursor: "pointer"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 11
          }, this), likes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "spanlikeslist",
            children: "".concat(likes.length, " ").concat(likes.length === 1 ? "like" : "likes")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {
            name: "comment outline",
            style: {
              marginLeft: "7px"
            },
            color: "blue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 11
          }, this), comments.length > 0 && comments.map(function (comment, i) {
            return i < 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostComments__WEBPACK_IMPORTED_MODULE_2__.default, {
              comment: comment,
              postId: post._id,
              user: user,
              setComments: setComments
            }, comment._id, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 16
            }, _this);
          }), comments.length > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
            content: "View More",
            color: "teal",
            basic: true,
            circular: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {
            hidden: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__.default, {
            user: user,
            postId: post._id,
            setComments: setComments
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
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
      lineNumber: 123,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0LmpzIl0sIm5hbWVzIjpbIkNhcmRQb3N0IiwicG9zdCIsInVzZXIiLCJzZXRQb3N0cyIsInNldFNob3dUb2FzdHIiLCJ1c2VTdGF0ZSIsImxpa2VzIiwic2V0TGlrZXMiLCJpc0xpa2VkIiwibGVuZ3RoIiwiZmlsdGVyIiwibGlrZSIsIl9pZCIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJlcnJvciIsInNldEVycm9yIiwicGljVXJsIiwiY3Vyc29yIiwicHJvZmlsZVBpY1VybCIsInJvbGUiLCJ1c2VybmFtZSIsIm5hbWUiLCJjYWxjdWxhdGVUaW1lIiwiY3JlYXRlZEF0IiwibG9jYXRpb24iLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJ3b3JkU3BhY2luZyIsInRleHQiLCJtYXJnaW5MZWZ0IiwibWFwIiwiY29tbWVudCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxRQUFULE9BQXNEO0FBQUE7O0FBQUE7O0FBQUEsTUFBbkNDLElBQW1DLFFBQW5DQSxJQUFtQztBQUFBLE1BQTlCQyxJQUE4QixRQUE5QkEsSUFBOEI7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBaEJDLGFBQWdCLFFBQWhCQSxhQUFnQjs7QUFBQSxrQkFFM0JDLCtDQUFRLENBQUNKLElBQUksQ0FBQ0ssS0FBTixDQUZtQjtBQUFBLE1BRTNDQSxLQUYyQztBQUFBLE1BRXJDQyxRQUZxQzs7QUFHbEQsTUFBTUMsT0FBTyxHQUNaRixLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUFmLElBQW9CSCxLQUFLLENBQUNJLE1BQU4sQ0FBYSxVQUFBQyxJQUFJO0FBQUEsV0FBRUEsSUFBSSxDQUFDVCxJQUFMLEtBQWNBLElBQUksQ0FBQ1UsR0FBckI7QUFBQSxHQUFqQixFQUEyQ0gsTUFB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QTtBQUFBLHFCQUZTO0FBQUEsV0FBYixDQW5CSixFQTZCS0MsUUFBUSxDQUFDSixNQUFULEdBQWtCLENBQWxCLGlCQUNBLDhEQUFDLHFEQUFEO0FBQVEsbUJBQU8sRUFBQyxXQUFoQjtBQUE0QixpQkFBSyxFQUFDLE1BQWxDO0FBQXlDLGlCQUFLLE1BQTlDO0FBQStDLG9CQUFRO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBOUJMLGVBaUNLLDhEQUFDLHNEQUFEO0FBQVMsa0JBQU07QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWpDTCxlQWtDSyw4REFBQyx1REFBRDtBQUNBLGdCQUFJLEVBQUVQLElBRE47QUFFQSxrQkFBTSxFQUFFRCxJQUFJLENBQUNXLEdBRmI7QUFHQSx1QkFBVyxFQUFFRTtBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbENMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuREM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBK0ZBLDhEQUFDLHNEQUFEO0FBQVMsWUFBTTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvRkE7QUFBQSxrQkFESjtBQW1HSDs7R0E3R1FkLFE7O0tBQUFBLFE7QUErR1QsK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzE4ZWI4MGQyZWQzOWRlNTBiMTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICAgIENhcmQsXHJcbiAgICBJY29uLFxyXG4gICAgRGl2aWRlcixcclxuICAgIFNlZ21lbnQsXHJcbiAgICBCdXR0b24sXHJcbiAgICBQb3B1cCxcclxuICAgIEhlYWRlcixcclxuICAgIE1vZGFsLFxyXG4gICAgSW1hZ2VcclxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IFBvc3RDb21tZW50cyBmcm9tICcuL1Bvc3RDb21tZW50cyc7XHJcbmltcG9ydCBDb21tZW50SW5wdXRGaWVsZCBmcm9tICcuL0NvbW1lbnRJbnB1dEZpZWxkJztcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIlxyXG5pbXBvcnQgTGluayAgZnJvbSAnbmV4dC9saW5rJztcclxuZnVuY3Rpb24gQ2FyZFBvc3Qoe3Bvc3QsdXNlcixzZXRQb3N0cyxzZXRTaG93VG9hc3RyfSkge1xyXG4gIFxyXG4gICAgY29uc3QgW2xpa2VzLHNldExpa2VzXT11c2VTdGF0ZShwb3N0Lmxpa2VzKTtcclxuICAgIGNvbnN0IGlzTGlrZWQgPSBcclxuICAgICBsaWtlcy5sZW5ndGggPiAwICYmIGxpa2VzLmZpbHRlcihsaWtlPT5saWtlLnVzZXIgPT09IHVzZXIuX2lkKS5sZW5ndGggPiAwO1xyXG4gICAgY29uc3QgW2NvbW1lbnRzLHNldENvbW1lbnRzXT11c2VTdGF0ZShwb3N0LmNvbW1lbnRzKVxyXG4gICAgY29uc3Qge2Vycm9yLHNldEVycm9yfSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxTZWdtZW50IGJhc2ljPlxyXG4gICAgICAgIDxDYXJkIGNvbG9yPVwiYmxhY2tcIiBmbHVpZD5cclxuICAgICAgICB7cG9zdC5waWNVcmwgJiYgKCA8SW1hZ2UgXHJcbiAgICAgICAgc3JjPXtwb3N0LnBpY1VybH0gXHJcbiAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0gXHJcbiAgICAgICAgZmxvYXRlZD1cImxlZnRcIlxyXG4gICAgICAgIHdyYXBwZWQgXHJcbiAgICAgICAgdWk9e2ZhbHNlfSBcclxuICAgICAgICBhbHQ9XCJQb3N0SW1hZ2VcIiAvPil9XHJcbiAgICAgICAgPENhcmQuQ29udGVudD5cclxuICAgICAgICAgPEltYWdlIGZsb2F0ZWQ9XCJsZWZ0XCIgc3JjPXtwb3N0LnVzZXIucHJvZmlsZVBpY1VybH0gYXZhdGFyIGNpcmN1bGFyIC8+XHJcbiAgICAgICAgIHsodXNlci5yb2xlPT09XCJyb290XCIgfHwgcG9zdC51c2VyLl9pZD09PXVzZXIuX2lkKSAmJiAoXHJcbiAgICAgICAgIDw+XHJcbiAgICAgICAgIDxQb3B1cCBcclxuICAgICAgICAgb249XCJjbGlja1wiIFxyXG4gICAgICAgICBwb3NpdGlvbj1cInJpZ2h0XCIgXHJcbiAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICBzcmM9XCIvZGVsZXRlSWNvbi5zdmdcIiBcclxuICAgICAgICAgICBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19IFxyXG4gICAgICAgICAgIHNpemU9XCJtaW5pXCJcclxuICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIiAvPlxyXG4gICAgICAgIH0+XHJcbiAgICAgICAgPEhlYWRlciBhcz1cImg0XCIgY29udGVudD1cIkFyZSB5b3Ugc3VyZT9cIiAvPlxyXG4gICAgICAgIDxwPlRoaXMgYWN0aW9uIGlzIGlycmV2ZXJzaWJsZTwvcD5cclxuICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgIGNvbG9yPVwicmVkXCIgXHJcbiAgICAgICAgaWNvbj1cInRyYXNoXCIgXHJcbiAgICAgICAgY29udGVudD1cIkRlbGV0ZVwiIC8+XHJcbiAgICAgICAgIDwvUG9wdXA+XHJcbiAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QudXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgPGE+e3Bvc3QudXNlci5uYW1lfTwvYT5cclxuICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcblxyXG4gICAgICAgPENhcmQuTWV0YT57Y2FsY3VsYXRlVGltZShwb3N0LmNyZWF0ZWRBdCl9PC9DYXJkLk1ldGE+XHJcbiAgICAgICBcclxuICAgICAgIHtwb3N0LmxvY2F0aW9uICYmIDxDYXJkLk1ldGEgY29udGVudD17cG9zdC5sb2NhdGlvbn0gLz59XHJcbiAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbiBcclxuICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgZm9udFNpemU6XCIzN3B4XCIsXHJcbiAgICAgICAgICAgbGV0dGVyU3BhY2luZzpcIjAuMXB4XCIsXHJcbiAgICAgICAgICAgd29yZFNwYWNpbmc6XCIwLjM1cHhcIiBcclxuICAgICAgICB9fT5cclxuICAgICAgIHtwb3N0LnRleHR9XHJcbiAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICA8L0NhcmQuQ29udGVudD5cclxuXHJcbiAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxyXG4gICAgICAgICAgPEljb24gXHJcbiAgICAgICAgICBuYW1lPXtpc0xpa2VkPyBcImhlYXJ0YmVhdFwiOlwiaGVhcnQgb3V0bGluZVwifVxyXG4gICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICB7bGlrZXMubGVuZ3RoPjAgJiYoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbmxpa2VzbGlzdFwiPlxyXG4gICAgICAgICAgICAgIHsgYCR7bGlrZXMubGVuZ3RofSAke2xpa2VzLmxlbmd0aD09PTE/XCJsaWtlXCI6XCJsaWtlc1wifWB9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8SWNvbiBcclxuICAgICAgICAgIG5hbWU9XCJjb21tZW50IG91dGxpbmVcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI3cHhcIn19XHJcbiAgICAgICAgICBjb2xvcj1cImJsdWVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmIFxyXG4gICAgICAgICAgIGNvbW1lbnRzLm1hcCgoY29tbWVudCxpKT0+XHJcbiAgICAgICAgICAgICAgIGk8MyAmJiAoXHJcbiAgICAgICAgICAgICAgIDxQb3N0Q29tbWVudHMgXHJcbiAgICAgICAgICAgICAgIGtleT17Y29tbWVudC5faWR9XHJcbiAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cclxuICAgICAgICAgICAgICAgLz4gKVxyXG4gICAgICAgICAgICl9XHJcbiAgICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDMgJiYgKFxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJWaWV3IE1vcmVcIiBjb2xvcj1cInRlYWxcIiBiYXNpYyBjaXJjdWxhciAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICAgICAgICAgIDxDb21tZW50SW5wdXRGaWVsZCBcclxuICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkUG9zdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9