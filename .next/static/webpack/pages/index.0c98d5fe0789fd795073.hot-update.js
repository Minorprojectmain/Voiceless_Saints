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
            },
            onClick: function onClick() {
              return (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_6__.likePost)(post._id, user._id, setLikes, isLiked ? false : true);
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
            lineNumber: 95,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Icon, {
            name: "comment outline",
            style: {
              marginLeft: "7px"
            },
            color: "blue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 11
          }, this), comments.length > 0 && comments.map(function (comment, i) {
            return i < 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostComments__WEBPACK_IMPORTED_MODULE_2__.default, {
              comment: comment,
              postId: post._id,
              user: user,
              setComments: setComments
            }, comment._id, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 16
            }, _this);
          }), comments.length > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
            content: "View More",
            color: "teal",
            basic: true,
            circular: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {
            hidden: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__.default, {
            user: user,
            postId: post._id,
            setComments: setComments
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
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
      lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0LmpzIl0sIm5hbWVzIjpbIkNhcmRQb3N0IiwicG9zdCIsInVzZXIiLCJzZXRQb3N0cyIsInNldFNob3dUb2FzdHIiLCJ1c2VTdGF0ZSIsImxpa2VzIiwic2V0TGlrZXMiLCJpc0xpa2VkIiwibGVuZ3RoIiwiZmlsdGVyIiwibGlrZSIsIl9pZCIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJlcnJvciIsInNldEVycm9yIiwicGljVXJsIiwiY3Vyc29yIiwicHJvZmlsZVBpY1VybCIsInJvbGUiLCJkZWxldGVQb3N0IiwidXNlcm5hbWUiLCJuYW1lIiwiY2FsY3VsYXRlVGltZSIsImNyZWF0ZWRBdCIsImxvY2F0aW9uIiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwid29yZFNwYWNpbmciLCJ0ZXh0IiwibGlrZVBvc3QiLCJtYXJnaW5MZWZ0IiwibWFwIiwiY29tbWVudCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxRQUFULE9BQXNEO0FBQUE7O0FBQUE7O0FBQUEsTUFBbkNDLElBQW1DLFFBQW5DQSxJQUFtQztBQUFBLE1BQTlCQyxJQUE4QixRQUE5QkEsSUFBOEI7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBaEJDLGFBQWdCLFFBQWhCQSxhQUFnQjs7QUFBQSxrQkFFM0JDLCtDQUFRLENBQUNKLElBQUksQ0FBQ0ssS0FBTixDQUZtQjtBQUFBLE1BRTNDQSxLQUYyQztBQUFBLE1BRXJDQyxRQUZxQzs7QUFHbEQsTUFBTUMsT0FBTyxHQUNaRixLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUFmLElBQW9CSCxLQUFLLENBQUNJLE1BQU4sQ0FBYSxVQUFBQyxJQUFJO0FBQUEsV0FBRUEsSUFBSSxDQUFDVCxJQUFMLEtBQWNBLElBQUksQ0FB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dC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgICBDYXJkLFxyXG4gICAgSWNvbixcclxuICAgIERpdmlkZXIsXHJcbiAgICBTZWdtZW50LFxyXG4gICAgQnV0dG9uLFxyXG4gICAgUG9wdXAsXHJcbiAgICBIZWFkZXIsXHJcbiAgICBNb2RhbCxcclxuICAgIEltYWdlXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBQb3N0Q29tbWVudHMgZnJvbSAnLi9Qb3N0Q29tbWVudHMnO1xyXG5pbXBvcnQgQ29tbWVudElucHV0RmllbGQgZnJvbSAnLi9Db21tZW50SW5wdXRGaWVsZCc7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCJcclxuaW1wb3J0IExpbmsgIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGRlbGV0ZVBvc3QsbGlrZVBvc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcclxuZnVuY3Rpb24gQ2FyZFBvc3Qoe3Bvc3QsdXNlcixzZXRQb3N0cyxzZXRTaG93VG9hc3RyfSkge1xyXG4gIFxyXG4gICAgY29uc3QgW2xpa2VzLHNldExpa2VzXT11c2VTdGF0ZShwb3N0Lmxpa2VzKTtcclxuICAgIGNvbnN0IGlzTGlrZWQgPSBcclxuICAgICBsaWtlcy5sZW5ndGggPiAwICYmIGxpa2VzLmZpbHRlcihsaWtlPT5saWtlLnVzZXIgPT09IHVzZXIuX2lkKS5sZW5ndGggPiAwO1xyXG4gICAgY29uc3QgW2NvbW1lbnRzLHNldENvbW1lbnRzXT11c2VTdGF0ZShwb3N0LmNvbW1lbnRzKVxyXG4gICAgY29uc3Qge2Vycm9yLHNldEVycm9yfSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxTZWdtZW50IGJhc2ljPlxyXG4gICAgICAgIDxDYXJkIGNvbG9yPVwiYmxhY2tcIiBmbHVpZD5cclxuICAgICAgICB7cG9zdC5waWNVcmwgJiYgKCA8SW1hZ2UgXHJcbiAgICAgICAgc3JjPXtwb3N0LnBpY1VybH0gXHJcbiAgICAgICAgc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0gXHJcbiAgICAgICAgZmxvYXRlZD1cImxlZnRcIlxyXG4gICAgICAgIHdyYXBwZWQgXHJcbiAgICAgICAgdWk9e2ZhbHNlfSBcclxuICAgICAgICBhbHQ9XCJQb3N0SW1hZ2VcIiAvPil9XHJcbiAgICAgICAgPENhcmQuQ29udGVudD5cclxuICAgICAgICAgPEltYWdlIGZsb2F0ZWQ9XCJsZWZ0XCIgc3JjPXtwb3N0LnVzZXIucHJvZmlsZVBpY1VybH0gYXZhdGFyIGNpcmN1bGFyIC8+XHJcbiAgICAgICAgIHsodXNlci5yb2xlPT09XCJyb290XCIgfHwgcG9zdC51c2VyLl9pZD09PXVzZXIuX2lkKSAmJiAoXHJcbiAgICAgICAgIDw+XHJcbiAgICAgICAgIDxQb3B1cCBcclxuICAgICAgICAgb249XCJjbGlja1wiIFxyXG4gICAgICAgICBwb3NpdGlvbj1cInJpZ2h0XCIgXHJcbiAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICBzcmM9XCIvZGVsZXRlSWNvbi5zdmdcIiBcclxuICAgICAgICAgICBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19IFxyXG4gICAgICAgICAgIHNpemU9XCJtaW5pXCJcclxuICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIiAvPlxyXG4gICAgICAgIH0+XHJcbiAgICAgICAgPEhlYWRlciBhcz1cImg0XCIgY29udGVudD1cIkFyZSB5b3Ugc3VyZT9cIiAvPlxyXG4gICAgICAgIDxwPlRoaXMgYWN0aW9uIGlzIGlycmV2ZXJzaWJsZTwvcD5cclxuICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgIGNvbG9yPVwicmVkXCIgXHJcbiAgICAgICAgaWNvbj1cInRyYXNoXCIgXHJcbiAgICAgICAgY29udGVudD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlUG9zdChwb3N0Ll9pZCwgc2V0UG9zdHMsIHNldFNob3dUb2FzdHIpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgIDwvUG9wdXA+XHJcbiAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QudXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgPGE+e3Bvc3QudXNlci5uYW1lfTwvYT5cclxuICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcblxyXG4gICAgICAgPENhcmQuTWV0YT57Y2FsY3VsYXRlVGltZShwb3N0LmNyZWF0ZWRBdCl9PC9DYXJkLk1ldGE+XHJcbiAgICAgICBcclxuICAgICAgIHtwb3N0LmxvY2F0aW9uICYmIDxDYXJkLk1ldGEgY29udGVudD17cG9zdC5sb2NhdGlvbn0gLz59XHJcbiAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbiBcclxuICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgZm9udFNpemU6XCIzN3B4XCIsXHJcbiAgICAgICAgICAgbGV0dGVyU3BhY2luZzpcIjAuMXB4XCIsXHJcbiAgICAgICAgICAgd29yZFNwYWNpbmc6XCIwLjM1cHhcIiBcclxuICAgICAgICB9fT5cclxuICAgICAgIHtwb3N0LnRleHR9XHJcbiAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XHJcbiAgICAgICA8L0NhcmQuQ29udGVudD5cclxuXHJcbiAgICAgICA8Q2FyZC5Db250ZW50IGV4dHJhPlxyXG4gICAgICAgICAgPEljb24gXHJcbiAgICAgICAgICBuYW1lPXtpc0xpa2VkPyBcImhlYXJ0XCI6XCJoZWFydCBvdXRsaW5lXCJ9XHJcbiAgICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKT0+XHJcbiAgICAgICAgICAgIGxpa2VQb3N0KHBvc3QuX2lkLHVzZXIuX2lkLHNldExpa2VzLGlzTGlrZWQ/ZmFsc2U6dHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIHtsaWtlcy5sZW5ndGg+MCAmJihcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFubGlrZXNsaXN0XCI+XHJcbiAgICAgICAgICAgICAgeyBgJHtsaWtlcy5sZW5ndGh9ICR7bGlrZXMubGVuZ3RoPT09MT9cImxpa2VcIjpcImxpa2VzXCJ9YH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDxJY29uIFxyXG4gICAgICAgICAgbmFtZT1cImNvbW1lbnQgb3V0bGluZVwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjdweFwifX1cclxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDAgJiYgXHJcbiAgICAgICAgICAgY29tbWVudHMubWFwKChjb21tZW50LGkpPT5cclxuICAgICAgICAgICAgICAgaTwzICYmIChcclxuICAgICAgICAgICAgICAgPFBvc3RDb21tZW50cyBcclxuICAgICAgICAgICAgICAga2V5PXtjb21tZW50Ll9pZH1cclxuICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cclxuICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAvPiApXHJcbiAgICAgICAgICAgKX1cclxuICAgICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMyAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIlZpZXcgTW9yZVwiIGNvbG9yPVwidGVhbFwiIGJhc2ljIGNpcmN1bGFyIC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICAgICAgPENvbW1lbnRJbnB1dEZpZWxkIFxyXG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICBzZXRDb21tZW50cz17c2V0Q29tbWVudHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQb3N0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=