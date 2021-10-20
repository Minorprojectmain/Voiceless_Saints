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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-infinite-scroll-component */ "./node_modules/react-infinite-scroll-component/dist/index.es.js");
/* harmony import */ var _components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
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
    lineNumber: 31,
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
                  Authorization: cookie.get("token")
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
      lineNumber: 58,
      columnNumber: 20
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Segment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_7__.default, {
        user: user,
        setPosts: setPosts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_12__.default, {
        hasMore: hasMore,
        next: fetchDataOnScroll,
        loader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_13__.PlaceHolderPosts, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, this),
        endMessage: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_13__.EndMessage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
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
            lineNumber: 68,
            columnNumber: 23
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VyIiwicG9zdHNEYXRhIiwiZXJyb3JMb2FkaW5nIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsInNob3dUb2FzdHIiLCJzZXRTaG93VG9hc3RyIiwiaGFzTW9yZSIsInNldEhhc01vcmUiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwidGl0bGUiLCJuYW1lIiwic3BsaXQiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiZmV0Y2hEYXRhT25TY3JvbGwiLCJheGlvcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsImdldCIsInBhcmFtcyIsInJlcyIsImRhdGEiLCJwcmV2IiwiYWxlcnQiLCJtYXAiLCJwb3N0IiwiX2lkIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicGFyc2VDb29raWVzIiwidG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLEtBQVQsT0FBNkM7QUFBQTs7QUFBQTs7QUFBQSxNQUE3QkMsSUFBNkIsUUFBN0JBLElBQTZCO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWRDLFlBQWMsUUFBZEEsWUFBYztBQUMxQztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBWjs7QUFGMEMsa0JBR2pCSSwrQ0FBUSxDQUFDSixTQUFELENBSFM7QUFBQSxNQUduQ0ssS0FIbUM7QUFBQSxNQUc3QkMsUUFINkI7O0FBQUEsbUJBSVRGLCtDQUFRLENBQUMsS0FBRCxDQUpDO0FBQUEsTUFJbkNHLFVBSm1DO0FBQUEsTUFJeEJDLGFBSndCOztBQUFBLG1CQU1aSiwrQ0FBUSxDQUFDLElBQUQsQ0FOSTtBQUFBLE1BTW5DSyxPQU5tQztBQUFBLE1BTTFCQyxVQU4wQjs7QUFBQSxtQkFRUE4sK0NBQVEsQ0FBQyxDQUFELENBUkQ7QUFBQSxNQVFwQ08sVUFSb0M7QUFBQSxNQVF4QkMsYUFSd0I7O0FBWTFDQyxrREFBUyxDQUFDLFlBQU07QUFFZkMsWUFBUSxDQUFDQyxLQUFULHNCQUE2QmhCLElBQUksQ0FBQ2lCLElBQUwsQ0FBVUMsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUE3QjtBQUdDLEdBTE8sRUFLTCxFQUxLLENBQVQ7QUFPQyxNQUFHWixLQUFLLENBQUNhLE1BQU4sSUFBYyxDQUFkLElBQW1CakIsWUFBdEIsRUFBb0Msb0JBQU8sOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ3BDWSxrREFBUyxDQUFDLFlBQU07QUFDWk4sY0FBVSxJQUFJWSxVQUFVLENBQUM7QUFBQSxhQUFNWCxhQUFhLENBQUMsS0FBRCxDQUFuQjtBQUFBLEtBQUQsRUFBNkIsSUFBN0IsQ0FBeEI7QUFDRCxHQUZNLEVBRUosQ0FBQ0QsVUFBRCxDQUZJLENBQVQ7O0FBSUUsTUFBTWEsaUJBQWlCO0FBQUEsZ1VBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVKQyxnREFBQSxXQUFhQyxtREFBYixpQkFBa0M7QUFDbERDLHVCQUFPLEVBQUU7QUFBRUMsK0JBQWEsRUFBRUMsTUFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWDtBQUFqQixpQkFEeUM7QUFFbERDLHNCQUFNLEVBQUU7QUFBRWhCLDRCQUFVLEVBQVZBO0FBQUY7QUFGMEMsZUFBbEMsQ0FGSTs7QUFBQTtBQUVoQmlCLGlCQUZnQjtBQU90QixrQkFBSUEsR0FBRyxDQUFDQyxJQUFKLENBQVNYLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkJSLFVBQVUsQ0FBQyxLQUFELENBQVY7QUFFM0JKLHNCQUFRLENBQUMsVUFBQXdCLElBQUk7QUFBQSwwTEFBUUEsSUFBUiw0SkFBaUJGLEdBQUcsQ0FBQ0MsSUFBckI7QUFBQSxlQUFMLENBQVI7QUFDQWpCLDJCQUFhLENBQUMsVUFBQWtCLElBQUk7QUFBQSx1QkFBSUEsSUFBSSxHQUFHLENBQVg7QUFBQSxlQUFMLENBQWI7QUFWc0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZdEJDLG1CQUFLLENBQUMsc0JBQUQsQ0FBTDs7QUFac0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBakJYLGlCQUFpQjtBQUFBO0FBQUE7QUFBQSxLQUF2Qjs7QUFtQkYsc0JBRUE7QUFBQSxlQUNDYixVQUFVLGlCQUFJLDhEQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEZixlQUVBLDhEQUFDLHVEQUFEO0FBQUEsOEJBQ0EsOERBQUMsZ0VBQUQ7QUFBWSxZQUFJLEVBQUVSLElBQWxCO0FBQXdCLGdCQUFRLEVBQUVPO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBLDhEQUFDLHFFQUFEO0FBQ0EsZUFBTyxFQUFFRyxPQURUO0FBRUEsWUFBSSxFQUFFVyxpQkFGTjtBQUdBLGNBQU0sZUFBRSw4REFBQyxrRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhSO0FBSUEsa0JBQVUsZUFBRSw4REFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpaO0FBS0Esa0JBQVUsRUFBRWYsS0FBSyxDQUFDYSxNQUxsQjtBQUFBLGtCQU9DYixLQUFLLENBQUMyQixHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLDhCQUFHLDhEQUFDLDhEQUFEO0FBRWxCLGdCQUFJLEVBQUVBLElBRlk7QUFHbEIsZ0JBQUksRUFBRWxDLElBSFk7QUFJbEIsb0JBQVEsRUFBRU8sUUFKUTtBQUtsQix5QkFBYSxFQUFFRTtBQUxHLGFBQ1h5QixJQUFJLENBQUNDLEdBRE07QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSDtBQUFBLFNBQWQ7QUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkE7QUFBQSxrQkFGQTtBQTRCSDs7R0F2RVFwQyxLOztLQUFBQSxLOztBQXlFVEEsS0FBSyxDQUFDcUMsZUFBTjtBQUFBLDhUQUF3QixrQkFBTUMsR0FBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFFSkMscURBQVksQ0FBQ0QsR0FBRCxDQUZSLEVBRWJFLEtBRmEsaUJBRWJBLEtBRmE7QUFBQTtBQUFBLG1CQUdGakIsZ0RBQUEsV0FBYUMsbURBQWIsaUJBQWlDO0FBQy9DQyxxQkFBTyxFQUFDO0FBQUNDLDZCQUFhLEVBQUNjO0FBQWYsZUFEdUM7QUFFL0NYLG9CQUFNLEVBQUU7QUFBQ2hCLDBCQUFVLEVBQUM7QUFBWjtBQUZ1QyxhQUFqQyxDQUhFOztBQUFBO0FBR2RpQixlQUhjO0FBQUEsOENBT2I7QUFBQzVCLHVCQUFTLEVBQUM0QixHQUFHLENBQUNDO0FBQWYsYUFQYTs7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FTVDtBQUNINUIsMEJBQVksRUFBRTtBQURYLGFBVFM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZUEsK0RBQWVILEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjFhZGRhZWJkZjk2ODI3ODYxOTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCBDcmVhdGVQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdC9DcmVhdGVQb3N0JztcclxuaW1wb3J0IENhcmRQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdC9DYXJkUG9zdCc7XHJcbmltcG9ydCB7U2VnbWVudH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7cGFyc2VDb29raWVzfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQge05vUG9zdHN9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGFcIjtcclxuaW1wb3J0IHtQb3N0RGVsZXRlVG9hc3RyfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvVG9hc3RyXCI7XHJcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50JztcclxuaW1wb3J0IHsgRW5kTWVzc2FnZSwgUGxhY2VIb2xkZXJQb3N0cyB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L1BsYWNlSG9sZGVyR3JvdXAnO1xyXG5mdW5jdGlvbiBJbmRleCh7dXNlcixwb3N0c0RhdGEsZXJyb3JMb2FkaW5nfSl7XHJcbiAgIC8vIGNvbnNvbGUubG9nKHt1c2VyLHVzZXJGb2xsb3dTdGF0c30pO1xyXG4gICBjb25zb2xlLmxvZyhwb3N0c0RhdGEpXHJcbiAgIGNvbnN0IFtwb3N0cyxzZXRQb3N0c10gPSB1c2VTdGF0ZShwb3N0c0RhdGEpO1xyXG4gICBjb25zdCBbc2hvd1RvYXN0cixzZXRTaG93VG9hc3RyXT11c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICBjb25zdCBbaGFzTW9yZSwgc2V0SGFzTW9yZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgW3BhZ2VOdW1iZXIsIHNldFBhZ2VOdW1iZXJdID0gdXNlU3RhdGUoMik7XHJcblxyXG4gICBcclxuICAgXHJcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgZG9jdW1lbnQudGl0bGUgPSBgV2VsY29tZSwgJHt1c2VyLm5hbWUuc3BsaXQoXCIgXCIpWzBdfWA7XHJcblxyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBpZihwb3N0cy5sZW5ndGg9PTAgfHwgZXJyb3JMb2FkaW5nKSByZXR1cm4gPE5vUG9zdHMgLz5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2hvd1RvYXN0ciAmJiBzZXRUaW1lb3V0KCgpID0+IHNldFNob3dUb2FzdHIoZmFsc2UpLCAzMDAwKTtcclxuICAgICAgfSwgW3Nob3dUb2FzdHJdKTtcclxuXHJcbiAgICAgIGNvbnN0IGZldGNoRGF0YU9uU2Nyb2xsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9LFxyXG4gICAgICAgICAgICBwYXJhbXM6IHsgcGFnZU51bWJlciB9XHJcbiAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA9PT0gMCkgc2V0SGFzTW9yZShmYWxzZSk7XHJcbiAgICBcclxuICAgICAgICAgIHNldFBvc3RzKHByZXYgPT4gWy4uLnByZXYsIC4uLnJlcy5kYXRhXSk7XHJcbiAgICAgICAgICBzZXRQYWdlTnVtYmVyKHByZXYgPT4gcHJldiArIDEpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBhbGVydChcIkVycm9yIGZldGNoaW5nIFBvc3RzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIFxyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybihcclxuICAgIFxyXG4gICAgPD5cclxuICAgIHtzaG93VG9hc3RyICYmIDxQb3N0RGVsZXRlVG9hc3RyIC8+fVxyXG4gICAgPFNlZ21lbnQ+XHJcbiAgICA8Q3JlYXRlUG9zdCB1c2VyPXt1c2VyfSBzZXRQb3N0cz17c2V0UG9zdHN9IC8+XHJcbiAgICA8SW5maW5pdGVTY3JvbGxcclxuICAgIGhhc01vcmU9e2hhc01vcmV9XHJcbiAgICBuZXh0PXtmZXRjaERhdGFPblNjcm9sbH1cclxuICAgIGxvYWRlcj17PFBsYWNlSG9sZGVyUG9zdHMgLz59XHJcbiAgICBlbmRNZXNzYWdlPXs8RW5kTWVzc2FnZSAvPn1cclxuICAgIGRhdGFMZW5ndGg9e3Bvc3RzLmxlbmd0aH1cclxuICAgID5cclxuICAgIHtwb3N0cy5tYXAocG9zdD0+KDxDYXJkUG9zdCBcclxuICAgIGtleSA9IHtwb3N0Ll9pZH1cclxuICAgIHBvc3Q9e3Bvc3R9XHJcbiAgICB1c2VyPXt1c2VyfVxyXG4gICAgc2V0UG9zdHM9e3NldFBvc3RzfVxyXG4gICAgc2V0U2hvd1RvYXN0cj17c2V0U2hvd1RvYXN0cn0gXHJcbiAgICAvPikpfVxyXG4gICAgPC9JbmZpbml0ZVNjcm9sbD5cclxuICAgIDwvU2VnbWVudD5cclxuICAgIDwvPlxyXG5cclxuXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoY3R4KT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3Qge3Rva2VufSA9IHBhcnNlQ29va2llcyhjdHgpXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCx7XHJcbiAgICAgICAgaGVhZGVyczp7QXV0aG9yaXphdGlvbjp0b2tlbn0sXHJcbiAgICAgICAgcGFyYW1zOiB7cGFnZU51bWJlcjoxfVxyXG4gICAgfSlcclxuICAgIHJldHVybiB7cG9zdHNEYXRhOnJlcy5kYXRhfTtcclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXJyb3JMb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9