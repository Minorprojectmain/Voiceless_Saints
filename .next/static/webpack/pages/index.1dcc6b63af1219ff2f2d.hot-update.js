self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Post/CreatePost */ "./components/Post/CreatePost.js");
/* harmony import */ var _components_Post_CardPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Post/CardPost */ "./components/Post/CardPost.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-infinite-scroll-component */ "./node_modules/react-infinite-scroll-component/dist/index.es.js");
/* harmony import */ var _components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_14__);
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
  //console.log(postsData)
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(postsData),
      posts = _useState[0],
      setPosts = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      showToastr = _useState2[0],
      setShowToastr = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),
      hasMore = _useState3[0],
      setHasMore = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(2),
      pageNumber = _useState4[0],
      setPageNumber = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    document.title = "Welcome, ".concat(user.name.split(" ")[0]);
  }, []);
  if (posts.length == 0 || errorLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_10__.NoPosts, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 48
  }, this);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    showToastr && setTimeout(function () {
      return setShowToastr(false);
    }, 3000);
  }, [showToastr]);

  var fetchDataOnScroll = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var res;
      return C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().get("".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__.default, "/api/posts"), {
                headers: {
                  Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_14___default().get("token")
                },
                params: {
                  pageNumber: pageNumber
                }
              });

            case 3:
              res = _context.sent;
              if (res.data.length === 0) setHasMore(false);
              setPosts(function (prev) {
                return [].concat((0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(prev), (0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(res.data));
              });
              setPageNumber(function (prev) {
                return prev + 1;
              });
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              alert("Error fetching Posts");

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function fetchDataOnScroll() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showToastr && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_11__.PostDeleteToastr, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 20
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.Segment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_7__.default, {
        user: user,
        setPosts: setPosts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_12__.default, {
        hasMore: hasMore,
        next: fetchDataOnScroll,
        loader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_13__.PlaceHolderPosts, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 19
        }, this),
        endMessage: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_13__.EndMessage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 23
        }, this),
        dataLength: posts.length,
        children: posts.map(function (post) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_8__.default, {
            post: post,
            user: user,
            setPosts: setPosts,
            setShowToastr: setShowToastr
          }, post._id, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Index, "ncXalr83DedOozLFscuTEh8E7Cg=");

_c = Index;

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(ctx) {
    var _parseCookies, token, res;

    return C_Users_Nisha_Yadav_Desktop_Minor_pro_Voiceless_Saints_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _parseCookies = (0,nookies__WEBPACK_IMPORTED_MODULE_9__.parseCookies)(ctx), token = _parseCookies.token;
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_5___default().get("".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__.default, "/api/posts"), {
              headers: {
                Authorization: token
              },
              params: {
                pageNumber: 1
              }
            });

          case 4:
            res = _context2.sent;
            return _context2.abrupt("return", {
              postsData: res.data
            });

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", {
              errorLoading: true
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VyIiwicG9zdHNEYXRhIiwiZXJyb3JMb2FkaW5nIiwidXNlU3RhdGUiLCJwb3N0cyIsInNldFBvc3RzIiwic2hvd1RvYXN0ciIsInNldFNob3dUb2FzdHIiLCJoYXNNb3JlIiwic2V0SGFzTW9yZSIsInBhZ2VOdW1iZXIiLCJzZXRQYWdlTnVtYmVyIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJ0aXRsZSIsIm5hbWUiLCJzcGxpdCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJmZXRjaERhdGFPblNjcm9sbCIsImF4aW9zIiwiYmFzZVVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29va2llIiwicGFyYW1zIiwicmVzIiwiZGF0YSIsInByZXYiLCJhbGVydCIsIm1hcCIsInBvc3QiLCJfaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwYXJzZUNvb2tpZXMiLCJ0b2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLEtBQVQsT0FBNkM7QUFBQTs7QUFBQTs7QUFBQSxNQUE3QkMsSUFBNkIsUUFBN0JBLElBQTZCO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWRDLFlBQWMsUUFBZEEsWUFBYzs7QUFDMUM7QUFDQTtBQUYwQyxrQkFHakJDLCtDQUFRLENBQUNGLFNBQUQsQ0FIUztBQUFBLE1BR25DRyxLQUhtQztBQUFBLE1BRzdCQyxRQUg2Qjs7QUFBQSxtQkFJVEYsK0NBQVEsQ0FBQyxLQUFELENBSkM7QUFBQSxNQUluQ0csVUFKbUM7QUFBQSxNQUl4QkMsYUFKd0I7O0FBQUEsbUJBTVpKLCtDQUFRLENBQUMsSUFBRCxDQU5JO0FBQUEsTUFN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OztBQTJFVEEsS0FBSyxDQUFDa0MsZUFBTjtBQUFBLDhUQUF3QixrQkFBTUMsR0FBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFFQUMscURBQVksQ0FBQ0QsR0FBRCxDQUZaLEVBRVZFLEtBRlUsaUJBRVZBLEtBRlU7QUFBQTtBQUFBLG1CQUlBaEIsZ0RBQUEsV0FBYUMsbURBQWIsaUJBQWtDO0FBQ2xEQyxxQkFBTyxFQUFFO0FBQUVDLDZCQUFhLEVBQUVhO0FBQWpCLGVBRHlDO0FBRWxEWCxvQkFBTSxFQUFFO0FBQUVmLDBCQUFVLEVBQUU7QUFBZDtBQUYwQyxhQUFsQyxDQUpBOztBQUFBO0FBSVpnQixlQUpZO0FBQUEsOENBU1g7QUFBRXpCLHVCQUFTLEVBQUV5QixHQUFHLENBQUNDO0FBQWpCLGFBVFc7O0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBV1g7QUFBRXpCLDBCQUFZLEVBQUU7QUFBaEIsYUFYVzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFlQSwrREFBZUgsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZGNjNmI2M2FmMTIxOWZmMmYyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IENyZWF0ZVBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0L0NyZWF0ZVBvc3QnO1xyXG5pbXBvcnQgQ2FyZFBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0JztcclxuaW1wb3J0IHtTZWdtZW50fSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHtwYXJzZUNvb2tpZXN9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCB7Tm9Qb3N0c30gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L05vRGF0YVwiO1xyXG5pbXBvcnQge1Bvc3REZWxldGVUb2FzdHJ9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ub2FzdHJcIjtcclxuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gJ3JlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFbmRNZXNzYWdlLCBQbGFjZUhvbGRlclBvc3RzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvUGxhY2VIb2xkZXJHcm91cCc7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5mdW5jdGlvbiBJbmRleCh7dXNlcixwb3N0c0RhdGEsZXJyb3JMb2FkaW5nfSl7XHJcbiAgIC8vIGNvbnNvbGUubG9nKHt1c2VyLHVzZXJGb2xsb3dTdGF0c30pO1xyXG4gICAvL2NvbnNvbGUubG9nKHBvc3RzRGF0YSlcclxuICAgY29uc3QgW3Bvc3RzLHNldFBvc3RzXSA9IHVzZVN0YXRlKHBvc3RzRGF0YSk7XHJcbiAgIGNvbnN0IFtzaG93VG9hc3RyLHNldFNob3dUb2FzdHJdPXVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgIGNvbnN0IFtoYXNNb3JlLCBzZXRIYXNNb3JlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgyKTtcclxuXHJcbiAgIFxyXG4gICBcclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICBkb2N1bWVudC50aXRsZSA9IGBXZWxjb21lLCAke3VzZXIubmFtZS5zcGxpdChcIiBcIilbMF19YDtcclxuXHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmKHBvc3RzLmxlbmd0aD09MCB8fCBlcnJvckxvYWRpbmcpIHJldHVybiA8Tm9Qb3N0cyAvPlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzaG93VG9hc3RyICYmIHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd1RvYXN0cihmYWxzZSksIDMwMDApO1xyXG4gICAgICB9LCBbc2hvd1RvYXN0cl0pO1xyXG5cclxuICAgICAgY29uc3QgZmV0Y2hEYXRhT25TY3JvbGwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvcG9zdHNgLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH0sXHJcbiAgICAgICAgICAgIHBhcmFtczogeyBwYWdlTnVtYmVyIH1cclxuICAgICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPT09IDApIHNldEhhc01vcmUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICAgICAgICBzZXRQb3N0cyhwcmV2ID0+IFsuLi5wcmV2LCAuLi5yZXMuZGF0YV0pO1xyXG4gICAgICAgICAgc2V0UGFnZU51bWJlcihwcmV2ID0+IHByZXYgKyAxKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgYWxlcnQoXCJFcnJvciBmZXRjaGluZyBQb3N0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICBcclxuXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICBcclxuICAgIDw+XHJcbiAgICB7c2hvd1RvYXN0ciAmJiA8UG9zdERlbGV0ZVRvYXN0ciAvPn1cclxuICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgPENyZWF0ZVBvc3QgdXNlcj17dXNlcn0gc2V0UG9zdHM9e3NldFBvc3RzfSAvPlxyXG5cclxuICAgICAgICA8SW5maW5pdGVTY3JvbGxcclxuICAgICAgICAgIGhhc01vcmU9e2hhc01vcmV9XHJcbiAgICAgICAgICBuZXh0PXtmZXRjaERhdGFPblNjcm9sbH1cclxuICAgICAgICAgIGxvYWRlcj17PFBsYWNlSG9sZGVyUG9zdHMgLz59XHJcbiAgICAgICAgICBlbmRNZXNzYWdlPXs8RW5kTWVzc2FnZSAvPn1cclxuICAgICAgICAgIGRhdGFMZW5ndGg9e3Bvc3RzLmxlbmd0aH0+XHJcbiAgICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxyXG4gICAgICAgICAgICA8Q2FyZFBvc3RcclxuICAgICAgICAgICAgICBrZXk9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICAgIHBvc3Q9e3Bvc3R9XHJcbiAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICBzZXRQb3N0cz17c2V0UG9zdHN9XHJcbiAgICAgICAgICAgICAgc2V0U2hvd1RvYXN0cj17c2V0U2hvd1RvYXN0cn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvSW5maW5pdGVTY3JvbGw+XHJcbiAgICAgIDwvU2VnbWVudD5cclxuICAgIDwvPlxyXG5cclxuXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG4gIFxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfSxcclxuICAgICAgICBwYXJhbXM6IHsgcGFnZU51bWJlcjogMSB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICByZXR1cm4geyBwb3N0c0RhdGE6IHJlcy5kYXRhIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBlcnJvckxvYWRpbmc6IHRydWUgfTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==