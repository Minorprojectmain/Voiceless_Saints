self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/postActions.js":
/*!******************************!*\
  !*** ./utils/postActions.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitNewPost": function() { return /* binding */ submitNewPost; },
/* harmony export */   "deletePost": function() { return /* binding */ deletePost; },
/* harmony export */   "likePost": function() { return /* binding */ likePost; },
/* harmony export */   "postComment": function() { return /* binding */ postComment; },
/* harmony export */   "deleteComment": function() { return /* binding */ deleteComment; }
/* harmony export */ });
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);







var Axios = axios__WEBPACK_IMPORTED_MODULE_3___default().create({
  baseURL: "".concat(_baseUrl__WEBPACK_IMPORTED_MODULE_4__.default, "/api/posts"),
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_6___default().get("token")
  }
});
var submitNewPost = /*#__PURE__*/function () {
  var _ref = (0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text, location, picUrl, setPosts, setNewPost, setError) {
    var res, errorMsg;
    return C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Axios.post("/", {
              text: text,
              location: location,
              picUrl: picUrl
            });

          case 3:
            res = _context.sent;
            setPosts(function (prev) {
              return [res.data].concat((0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(prev));
            });
            setNewPost({
              text: "",
              location: ""
            });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_5__.default)(_context.t0);
            setError(errorMsg);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function submitNewPost(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();
var deletePost = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(postId, setPosts, setShowToastr) {
    return C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return Axios["delete"]("/".concat(postId));

          case 3:
            setPosts(function (prev) {
              return prev.filter(function (post) {
                return post._id !== postId;
              });
            });
            setShowToastr(true);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_5__.default)(_context2.t0));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function deletePost(_x7, _x8, _x9) {
    return _ref2.apply(this, arguments);
  };
}();
var likePost = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(postId, userId, setLikes) {
    var like,
        _args3 = arguments;
    return C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            like = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : true;
            _context3.prev = 1;

            if (!like) {
              _context3.next = 8;
              break;
            }

            _context3.next = 5;
            return Axios.post("/like/".concat(postId));

          case 5:
            setLikes(function (prev) {
              return [].concat((0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(prev), [{
                user: userId
              }]);
            });
            _context3.next = 12;
            break;

          case 8:
            if (like) {
              _context3.next = 12;
              break;
            }

            _context3.next = 11;
            return Axios.put("/unlike/".concat(postId));

          case 11:
            setLikes(function (prev) {
              return prev.filter(function (like) {
                return like.user !== userId;
              });
            });

          case 12:
            _context3.next = 17;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](1);
            alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_5__.default)(_context3.t0));

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 14]]);
  }));

  return function likePost(_x10, _x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}();
var postComment = /*#__PURE__*/function () {
  var _ref4 = (0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(postId, user, text, setComments, setText) {
    var res, newComment;
    return C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return Axios.post("/comment/".concat(postId), {
              text: text
            });

          case 3:
            res = _context4.sent;
            newComment = {
              _id: res.data,
              user: user,
              text: text,
              date: Date.now()
            };
            setComments(function (prev) {
              return [newComment].concat((0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(prev));
            });
            setText("");
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_5__.default)(_context4.t0));

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function postComment(_x13, _x14, _x15, _x16, _x17) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteComment = /*#__PURE__*/function () {
  var _ref5 = (0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(postId, commentId, setComments) {
    return C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return Axios["delete"]("/".concat(postId, "/").concat(commentId));

          case 3:
            setComments(function (prev) {
              return prev.filter(function (comment) {
                return comment._id !== commentId;
              });
            });
            _context5.next = 9;
            break;

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_5__.default)(_context5.t0));

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));

  return function deleteComment(_x18, _x19, _x20) {
    return _ref5.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcG9zdEFjdGlvbnMuanMiXSwibmFtZXMiOlsiQXhpb3MiLCJheGlvcyIsImJhc2VVUkwiLCJiYXNlVXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb29raWUiLCJzdWJtaXROZXdQb3N0IiwidGV4dCIsImxvY2F0aW9uIiwicGljVXJsIiwic2V0UG9zdHMiLCJzZXROZXdQb3N0Iiwic2V0RXJyb3IiLCJwb3N0IiwicmVzIiwicHJldiIsImRhdGEiLCJlcnJvck1zZyIsImNhdGNoRXJyb3JzIiwiZGVsZXRlUG9zdCIsInBvc3RJZCIsInNldFNob3dUb2FzdHIiLCJmaWx0ZXIiLCJfaWQiLCJhbGVydCIsImxpa2VQb3N0IiwidXNlcklkIiwic2V0TGlrZXMiLCJsaWtlIiwidXNlciIsInB1dCIsInBvc3RDb21tZW50Iiwic2V0Q29tbWVudHMiLCJzZXRUZXh0IiwibmV3Q29tbWVudCIsImRhdGUiLCJEYXRlIiwibm93IiwiZGVsZXRlQ29tbWVudCIsImNvbW1lbnRJZCIsImNvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsbURBQUEsQ0FBYTtBQUN6QkMsU0FBTyxZQUFLQyw2Q0FBTCxlQURrQjtBQUV6QkMsU0FBTyxFQUFFO0FBQUVDLGlCQUFhLEVBQUVDLG9EQUFBLENBQVcsT0FBWDtBQUFqQjtBQUZnQixDQUFiLENBQWQ7QUFLTyxJQUFNQyxhQUFhO0FBQUEsNlRBQUcsaUJBQzNCQyxJQUQyQixFQUUzQkMsUUFGMkIsRUFHM0JDLE1BSDJCLEVBSTNCQyxRQUoyQixFQUszQkMsVUFMMkIsRUFNM0JDLFFBTjJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFTUGIsS0FBSyxDQUFDYyxJQUFOLENBQVcsR0FBWCxFQUFnQjtBQUFFTixrQkFBSSxFQUFKQSxJ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LjRmZjNlMmNjMmM0MjdkZDk0OTg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuL2NhdGNoRXJyb3JzXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3QgQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsXHJcbiAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWJtaXROZXdQb3N0ID0gYXN5bmMgKFxyXG4gIHRleHQsXHJcbiAgbG9jYXRpb24sXHJcbiAgcGljVXJsLFxyXG4gIHNldFBvc3RzLFxyXG4gIHNldE5ld1Bvc3QsXHJcbiAgc2V0RXJyb3JcclxuKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IEF4aW9zLnBvc3QoXCIvXCIsIHsgdGV4dCwgbG9jYXRpb24sIHBpY1VybCB9KTtcclxuXHJcbiAgICBzZXRQb3N0cyhwcmV2ID0+IFtyZXMuZGF0YSwgLi4ucHJldl0pO1xyXG4gICAgc2V0TmV3UG9zdCh7IHRleHQ6IFwiXCIsIGxvY2F0aW9uOiBcIlwiIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCBlcnJvck1zZyA9IGNhdGNoRXJyb3JzKGVycm9yKTtcclxuICAgIHNldEVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUG9zdCA9IGFzeW5jIChwb3N0SWQsIHNldFBvc3RzLCBzZXRTaG93VG9hc3RyKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLmRlbGV0ZShgLyR7cG9zdElkfWApO1xyXG4gICAgc2V0UG9zdHMocHJldiA9PiBwcmV2LmZpbHRlcihwb3N0ID0+IHBvc3QuX2lkICE9PSBwb3N0SWQpKTtcclxuICAgIHNldFNob3dUb2FzdHIodHJ1ZSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpa2VQb3N0ID0gYXN5bmMgKHBvc3RJZCwgdXNlcklkLCBzZXRMaWtlcywgbGlrZSA9IHRydWUpID0+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKGxpa2UpIHtcclxuICAgICAgYXdhaXQgQXhpb3MucG9zdChgL2xpa2UvJHtwb3N0SWR9YCk7XHJcbiAgICAgIHNldExpa2VzKHByZXYgPT4gWy4uLnByZXYsIHsgdXNlcjogdXNlcklkIH1dKTtcclxuICAgIH1cclxuICAgIC8vXHJcbiAgICBlbHNlIGlmICghbGlrZSkge1xyXG4gICAgICBhd2FpdCBBeGlvcy5wdXQoYC91bmxpa2UvJHtwb3N0SWR9YCk7XHJcbiAgICAgIHNldExpa2VzKHByZXYgPT4gcHJldi5maWx0ZXIobGlrZSA9PiBsaWtlLnVzZXIgIT09IHVzZXJJZCkpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChwb3N0SWQsIHVzZXIsIHRleHQsIHNldENvbW1lbnRzLCBzZXRUZXh0KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IEF4aW9zLnBvc3QoYC9jb21tZW50LyR7cG9zdElkfWAsIHsgdGV4dCB9KTtcclxuXHJcbiAgICBjb25zdCBuZXdDb21tZW50ID0ge1xyXG4gICAgICBfaWQ6IHJlcy5kYXRhLFxyXG4gICAgICB1c2VyLFxyXG4gICAgICB0ZXh0LFxyXG4gICAgICBkYXRlOiBEYXRlLm5vdygpXHJcbiAgICB9O1xyXG5cclxuICAgIHNldENvbW1lbnRzKHByZXYgPT4gW25ld0NvbW1lbnQsIC4uLnByZXZdKTtcclxuICAgIHNldFRleHQoXCJcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfSBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDb21tZW50ID0gYXN5bmMgKHBvc3RJZCwgY29tbWVudElkLCBzZXRDb21tZW50cykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5kZWxldGUoYC8ke3Bvc3RJZH0vJHtjb21tZW50SWR9YCk7XHJcbiAgICBzZXRDb21tZW50cyhwcmV2ID0+IHByZXYuZmlsdGVyKGNvbW1lbnQgPT4gY29tbWVudC5faWQgIT09IGNvbW1lbnRJZCkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==