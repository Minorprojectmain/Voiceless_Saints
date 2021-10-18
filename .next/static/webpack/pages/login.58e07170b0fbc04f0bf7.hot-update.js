self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUser": function() { return /* binding */ registerUser; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; },
/* harmony export */   "redirectUser": function() { return /* binding */ redirectUser; }
/* harmony export */ });
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_project_voiceless_saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_project_voiceless_saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nisha_Yadav_Desktop_Minor_project_voiceless_saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_project_voiceless_saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);







var registerUser = /*#__PURE__*/function () {
  var _ref = (0,C_Users_Nisha_Yadav_Desktop_Minor_project_voiceless_saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Nisha_Yadav_Desktop_Minor_project_voiceless_saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(user, profilePicUrl, setError, setLoading) {
    var res, errorMsg;
    return C_Users_Nisha_Yadav_Desktop_Minor_project_voiceless_saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().post("".concat(_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default, "/api/signup"), {
              user: user,
              profilePicUrl: profilePicUrl
            });

          case 3:
            res = _context.sent;
            setToken(res.data);
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_4__.default)(_context.t0);
            setError(errorMsg);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function registerUser(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
var loginUser = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_Nisha_Yadav_Desktop_Minor_project_voiceless_saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Nisha_Yadav_Desktop_Minor_project_voiceless_saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(user, setError, setLoading) {
    var res, errorMsg;
    return C_Users_Nisha_Yadav_Desktop_Minor_project_voiceless_saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().post("".concat(_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default, "/api/auth"), {
              user: user
            });

          case 3:
            res = _context2.sent;
            setToken(res.data);
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_4__.default)(_context2.t0);
            setError(errorMsg);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function loginUser(_x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();
var redirectUser = function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location
    });
    ctx.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_5___default().push(location);
  }
};

var setToken = function setToken(token) {
  js_cookie__WEBPACK_IMPORTED_MODULE_6___default().set("token", token);
  next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/");
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXV0aFVzZXIuanMiXSwibmFtZXMiOlsicmVnaXN0ZXJVc2VyIiwidXNlciIsInByb2ZpbGVQaWNVcmwiLCJzZXRFcnJvciIsInNldExvYWRpbmciLCJheGlvcyIsImJhc2VVcmwiLCJyZXMiLCJzZXRUb2tlbiIsImRhdGEiLCJlcnJvck1zZyIsImNhdGNoRXJyb3JzIiwibG9naW5Vc2VyIiwicmVkaXJlY3RVc2VyIiwiY3R4IiwibG9jYXRpb24iLCJyZXEiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsIlJvdXRlciIsInRva2VuIiwiY29va2llIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZO0FBQUEscVVBQUMsaUJBQU1DLElBQU4sRUFBV0MsYUFBWCxFQUF5QkMsUUFBekIsRUFBa0NDLFVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFTkMsaURBQUEsV0FBY0MsNkNBQWQsa0JBQW1DO0FBQUNMLGtCQUFJLEVBQUpBLElBQUQ7QUFBTUMsMkJBQWEsRUFBYkE7QUFBTixhQUFuQyxDQUZNOztBQUFBO0FBRWhCSyxlQUZnQjtBQUl2QkMsb0JBQVEsQ0FBQ0QsR0FBRyxDQUFDRSxJQUFMLENBQVI7QUFKdUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFPZEMsb0JBUGMsR0FPSEMscURBQVcsYUFQUjtBQVFwQlIsb0JBQVEsQ0FBQ08sUUFBRCxDQUFSOztBQVJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFEOztBQUFBLGtCQUFaVixZQUFZO0FBQUE7QUFBQTtBQUFBLEdBQWxCO0FBWUEsSUFBTVksU0FBUztBQUFBLHNVQUFDLGtCQUFNWCxJQUFOLEVBQVdFLFFBQVgsRUFBb0JDLFVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFSEMsaURBQUEsV0FBY0MsNkNBQWQsZ0JBQWlDO0FBQUNMLGtCQUFJLEVBQUpBO0FBQUQsYUFBakMsQ0FGRzs7QUFBQTtBQUViTSxlQUZhO0FBSXBCQyxvQkFBUSxDQUFDRCxHQUFHLENBQUNFLElBQUwsQ0FBUjtBQUpvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU9YQyxvQkFQVyxHQU9BQyxxREFBVyxjQVBYO0FBUWpCUixvQkFBUSxDQUFDTyxRQUFELENBQVI7O0FBUmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQ7O0FBQUEsa0JBQVRFLFNBQVM7QUFBQTtBQUFBO0FBQUEsR0FBZjtBQVlBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEdBQUQsRUFBS0MsUUFBTCxFQUFnQjtBQUMxQyxNQUFHRCxHQUFHLENBQUNFLEdBQVAsRUFBVztBQUNURixPQUFHLENBQUNQLEdBQUosQ0FBUVUsU0FBUixDQUFrQixHQUFsQixFQUFzQjtBQUFDQyxjQUFRLEVBQUNIO0FBQVYsS0FBdEI7QUFDQUQsT0FBRyxDQUFDUCxHQUFKLENBQVFZLEdBQVI7QUFDRCxHQUhELE1BR0s7QUFDSEMsMkRBQUEsQ0FBWUwsUUFBWjtBQUNEO0FBQ0YsQ0FQTTs7QUFRUCxJQUFNUCxRQUFRLEdBQUMsU0FBVEEsUUFBUyxDQUFBYSxLQUFLLEVBQUU7QUFDbEJDLHNEQUFBLENBQVcsT0FBWCxFQUFtQkQsS0FBbkI7QUFDQUQseURBQUEsQ0FBWSxHQUFaO0FBQ0gsQ0FIRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi41OGUwNzE3MGIwZmJjMDRmMGJmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCI7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tICcuL2NhdGNoRXJyb3JzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJVc2VyPWFzeW5jKHVzZXIscHJvZmlsZVBpY1VybCxzZXRFcnJvcixzZXRMb2FkaW5nKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzPWF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL3NpZ251cGAse3VzZXIscHJvZmlsZVBpY1VybH0pXHJcblxyXG4gICBzZXRUb2tlbihyZXMuZGF0YSk7XHJcblxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgY29uc3QgZXJyb3JNc2c9ICBjYXRjaEVycm9ycyhlcnJvcilcclxuICAgICAgc2V0RXJyb3IoZXJyb3JNc2cpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblVzZXI9YXN5bmModXNlcixzZXRFcnJvcixzZXRMb2FkaW5nKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzPWF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL2F1dGhgLHt1c2VyfSlcclxuXHJcbiAgIHNldFRva2VuKHJlcy5kYXRhKTtcclxuXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICBjb25zdCBlcnJvck1zZz0gIGNhdGNoRXJyb3JzKGVycm9yKVxyXG4gICAgICBzZXRFcnJvcihlcnJvck1zZylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZGlyZWN0VXNlciA9IChjdHgsbG9jYXRpb24pPT57XHJcbiAgaWYoY3R4LnJlcSl7XHJcbiAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIse0xvY2F0aW9uOmxvY2F0aW9ufSlcclxuICAgIGN0eC5yZXMuZW5kKClcclxuICB9ZWxzZXtcclxuICAgIFJvdXRlci5wdXNoKGxvY2F0aW9uKTtcclxuICB9XHJcbn1cclxuY29uc3Qgc2V0VG9rZW49dG9rZW49PntcclxuICAgIGNvb2tpZS5zZXQoXCJ0b2tlblwiLHRva2VuKVxyXG4gICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==