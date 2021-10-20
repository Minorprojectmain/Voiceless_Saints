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

  if (posts.length == 0 || errorLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_10__.NoPosts, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 48
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showToastr && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_11__.PostDeleteToastr, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 20
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.Segment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_7__.default, {
        user: user,
        setPosts: setPosts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_12__.default, {
        hasMore: hasMore,
        next: fetchDataOnScroll,
        loader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_13__.PlaceHolderPosts, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, this),
        endMessage: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_13__.EndMessage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
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
            lineNumber: 67,
            columnNumber: 23
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
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


/***/ }),

/***/ "./node_modules/react-infinite-scroll-component/dist/index.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-infinite-scroll-component/dist/index.es.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    var self = this;
    var elapsed = Date.now() - lastExec;
    var args = arguments;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

var ThresholdUnits = {
    Pixel: 'Pixel',
    Percent: 'Percent',
};
var defaultThreshold = {
    unit: ThresholdUnits.Percent,
    value: 0.8,
};
function parseThreshold(scrollThreshold) {
    if (typeof scrollThreshold === 'number') {
        return {
            unit: ThresholdUnits.Percent,
            value: scrollThreshold * 100,
        };
    }
    if (typeof scrollThreshold === 'string') {
        if (scrollThreshold.match(/^(\d*(\.\d+)?)px$/)) {
            return {
                unit: ThresholdUnits.Pixel,
                value: parseFloat(scrollThreshold),
            };
        }
        if (scrollThreshold.match(/^(\d*(\.\d+)?)%$/)) {
            return {
                unit: ThresholdUnits.Percent,
                value: parseFloat(scrollThreshold),
            };
        }
        console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...');
        return defaultThreshold;
    }
    console.warn('scrollThreshold should be string or number');
    return defaultThreshold;
}

var InfiniteScroll = /** @class */ (function (_super) {
    __extends(InfiniteScroll, _super);
    function InfiniteScroll(props) {
        var _this = _super.call(this, props) || this;
        _this.lastScrollTop = 0;
        _this.actionTriggered = false;
        // variables to keep track of pull down behaviour
        _this.startY = 0;
        _this.currentY = 0;
        _this.dragging = false;
        // will be populated in componentDidMount
        // based on the height of the pull down element
        _this.maxPullDownDistance = 0;
        _this.getScrollableTarget = function () {
            if (_this.props.scrollableTarget instanceof HTMLElement)
                return _this.props.scrollableTarget;
            if (typeof _this.props.scrollableTarget === 'string') {
                return document.getElementById(_this.props.scrollableTarget);
            }
            if (_this.props.scrollableTarget === null) {
                console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      ");
            }
            return null;
        };
        _this.onStart = function (evt) {
            if (_this.lastScrollTop)
                return;
            _this.dragging = true;
            if (evt instanceof MouseEvent) {
                _this.startY = evt.pageY;
            }
            else if (evt instanceof TouchEvent) {
                _this.startY = evt.touches[0].pageY;
            }
            _this.currentY = _this.startY;
            if (_this._infScroll) {
                _this._infScroll.style.willChange = 'transform';
                _this._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)";
            }
        };
        _this.onMove = function (evt) {
            if (!_this.dragging)
                return;
            if (evt instanceof MouseEvent) {
                _this.currentY = evt.pageY;
            }
            else if (evt instanceof TouchEvent) {
                _this.currentY = evt.touches[0].pageY;
            }
            // user is scrolling down to up
            if (_this.currentY < _this.startY)
                return;
            if (_this.currentY - _this.startY >=
                Number(_this.props.pullDownToRefreshThreshold)) {
                _this.setState({
                    pullToRefreshThresholdBreached: true,
                });
            }
            // so you can drag upto 1.5 times of the maxPullDownDistance
            if (_this.currentY - _this.startY > _this.maxPullDownDistance * 1.5)
                return;
            if (_this._infScroll) {
                _this._infScroll.style.overflow = 'visible';
                _this._infScroll.style.transform = "translate3d(0px, " + (_this.currentY -
                    _this.startY) + "px, 0px)";
            }
        };
        _this.onEnd = function () {
            _this.startY = 0;
            _this.currentY = 0;
            _this.dragging = false;
            if (_this.state.pullToRefreshThresholdBreached) {
                _this.props.refreshFunction && _this.props.refreshFunction();
                _this.setState({
                    pullToRefreshThresholdBreached: false,
                });
            }
            requestAnimationFrame(function () {
                // this._infScroll
                if (_this._infScroll) {
                    _this._infScroll.style.overflow = 'auto';
                    _this._infScroll.style.transform = 'none';
                    _this._infScroll.style.willChange = 'unset';
                }
            });
        };
        _this.onScrollListener = function (event) {
            if (typeof _this.props.onScroll === 'function') {
                // Execute this callback in next tick so that it does not affect the
                // functionality of the library.
                setTimeout(function () { return _this.props.onScroll && _this.props.onScroll(event); }, 0);
            }
            var target = _this.props.height || _this._scrollableNode
                ? event.target
                : document.documentElement.scrollTop
                    ? document.documentElement
                    : document.body;
            // return immediately if the action has already been triggered,
            // prevents multiple triggers.
            if (_this.actionTriggered)
                return;
            var atBottom = _this.props.inverse
                ? _this.isElementAtTop(target, _this.props.scrollThreshold)
                : _this.isElementAtBottom(target, _this.props.scrollThreshold);
            // call the `next` function in the props to trigger the next data fetch
            if (atBottom && _this.props.hasMore) {
                _this.actionTriggered = true;
                _this.setState({ showLoader: true });
                _this.props.next && _this.props.next();
            }
            _this.lastScrollTop = target.scrollTop;
        };
        _this.state = {
            showLoader: false,
            pullToRefreshThresholdBreached: false,
        };
        _this.throttledOnScrollListener = throttle(150, _this.onScrollListener).bind(_this);
        _this.onStart = _this.onStart.bind(_this);
        _this.onMove = _this.onMove.bind(_this);
        _this.onEnd = _this.onEnd.bind(_this);
        return _this;
    }
    InfiniteScroll.prototype.componentDidMount = function () {
        if (typeof this.props.dataLength === 'undefined') {
            throw new Error("mandatory prop \"dataLength\" is missing. The prop is needed" +
                " when loading more content. Check README.md for usage");
        }
        this._scrollableNode = this.getScrollableTarget();
        this.el = this.props.height
            ? this._infScroll
            : this._scrollableNode || window;
        if (this.el) {
            this.el.addEventListener('scroll', this
                .throttledOnScrollListener);
        }
        if (typeof this.props.initialScrollY === 'number' &&
            this.el &&
            this.el instanceof HTMLElement &&
            this.el.scrollHeight > this.props.initialScrollY) {
            this.el.scrollTo(0, this.props.initialScrollY);
        }
        if (this.props.pullDownToRefresh && this.el) {
            this.el.addEventListener('touchstart', this.onStart);
            this.el.addEventListener('touchmove', this.onMove);
            this.el.addEventListener('touchend', this.onEnd);
            this.el.addEventListener('mousedown', this.onStart);
            this.el.addEventListener('mousemove', this.onMove);
            this.el.addEventListener('mouseup', this.onEnd);
            // get BCR of pullDown element to position it above
            this.maxPullDownDistance =
                (this._pullDown &&
                    this._pullDown.firstChild &&
                    this._pullDown.firstChild.getBoundingClientRect()
                        .height) ||
                    0;
            this.forceUpdate();
            if (typeof this.props.refreshFunction !== 'function') {
                throw new Error("Mandatory prop \"refreshFunction\" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage'");
            }
        }
    };
    InfiniteScroll.prototype.componentWillUnmount = function () {
        if (this.el) {
            this.el.removeEventListener('scroll', this
                .throttledOnScrollListener);
            if (this.props.pullDownToRefresh) {
                this.el.removeEventListener('touchstart', this.onStart);
                this.el.removeEventListener('touchmove', this.onMove);
                this.el.removeEventListener('touchend', this.onEnd);
                this.el.removeEventListener('mousedown', this.onStart);
                this.el.removeEventListener('mousemove', this.onMove);
                this.el.removeEventListener('mouseup', this.onEnd);
            }
        }
    };
    InfiniteScroll.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        // do nothing when dataLength is unchanged
        if (this.props.dataLength === props.dataLength)
            return;
        this.actionTriggered = false;
        // update state when new data was sent in
        this.setState({
            showLoader: false,
        });
    };
    InfiniteScroll.prototype.isElementAtTop = function (target, scrollThreshold) {
        if (scrollThreshold === void 0) { scrollThreshold = 0.8; }
        var clientHeight = target === document.body || target === document.documentElement
            ? window.screen.availHeight
            : target.clientHeight;
        var threshold = parseThreshold(scrollThreshold);
        if (threshold.unit === ThresholdUnits.Pixel) {
            return (target.scrollTop <=
                threshold.value + clientHeight - target.scrollHeight + 1);
        }
        return (target.scrollTop <=
            threshold.value / 100 + clientHeight - target.scrollHeight + 1);
    };
    InfiniteScroll.prototype.isElementAtBottom = function (target, scrollThreshold) {
        if (scrollThreshold === void 0) { scrollThreshold = 0.8; }
        var clientHeight = target === document.body || target === document.documentElement
            ? window.screen.availHeight
            : target.clientHeight;
        var threshold = parseThreshold(scrollThreshold);
        if (threshold.unit === ThresholdUnits.Pixel) {
            return (target.scrollTop + clientHeight >= target.scrollHeight - threshold.value);
        }
        return (target.scrollTop + clientHeight >=
            (threshold.value / 100) * target.scrollHeight);
    };
    InfiniteScroll.prototype.render = function () {
        var _this = this;
        var style = __assign({ height: this.props.height || 'auto', overflow: 'auto', WebkitOverflowScrolling: 'touch' }, this.props.style);
        var hasChildren = this.props.hasChildren ||
            !!(this.props.children &&
                this.props.children instanceof Array &&
                this.props.children.length);
        // because heighted infiniteScroll visualy breaks
        // on drag down as overflow becomes visible
        var outerDivStyle = this.props.pullDownToRefresh && this.props.height
            ? { overflow: 'auto' }
            : {};
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: outerDivStyle, className: "infinite-scroll-component__outerdiv" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "infinite-scroll-component " + (this.props.className || ''), ref: function (infScroll) { return (_this._infScroll = infScroll); }, style: style },
                this.props.pullDownToRefresh && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { position: 'relative' }, ref: function (pullDown) { return (_this._pullDown = pullDown); } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: -1 * this.maxPullDownDistance,
                        } }, this.state.pullToRefreshThresholdBreached
                        ? this.props.releaseToRefreshContent
                        : this.props.pullDownToRefreshContent))),
                this.props.children,
                !this.state.showLoader &&
                    !hasChildren &&
                    this.props.hasMore &&
                    this.props.loader,
                this.state.showLoader && this.props.hasMore && this.props.loader,
                !this.props.hasMore && this.props.endMessage)));
    };
    return InfiniteScroll;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

/* harmony default export */ __webpack_exports__["default"] = (InfiniteScroll);
//# sourceMappingURL=index.es.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50L2Rpc3QvaW5kZXguZXMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VyIiwicG9zdHNEYXRhIiwiZXJyb3JMb2FkaW5nIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsInNob3dUb2FzdHIiLCJzZXRTaG93VG9hc3RyIiwiaGFzTW9yZSIsInNldEhhc01vcmUiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwidGl0bGUiLCJuYW1lIiwic3BsaXQiLCJzZXRUaW1lb3V0IiwiZmV0Y2hEYXRhT25TY3JvbGwiLCJheGlvcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsImdldCIsInBhcmFtcyIsInJlcyIsImRhdGEiLCJsZW5ndGgiLCJwcmV2IiwiYWxlcnQiLCJtYXAiLCJwb3N0IiwiX2lkIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicGFyc2VDb29raWVzIiwidG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLEtBQVQsT0FBNkM7QUFBQTs7QUFBQTs7QUFBQSxNQUE3QkMsSUFBNkIsUUFBN0JBLElBQTZCO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWRDLFlBQWMsUUFBZEEsWUFBYztBQUMxQztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBWjs7QUFGMEMsa0JBR2pCSSwrQ0FBUSxDQUFDSixTQUFELENBSFM7QUFBQSxNQUduQ0ssS0FIbUM7QUFBQSxN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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDREQUE0RCxFQUFFO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1CQUFtQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlDQUF5Qyx1QkFBdUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHVCQUF1QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMEZBQTBGO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsZ0JBQWdCLDBEQUFtQixTQUFTLHlFQUF5RTtBQUNySCxZQUFZLDBEQUFtQixTQUFTLG9HQUFvRyx1Q0FBdUMsRUFBRSxnQkFBZ0I7QUFDck0saURBQWlELDBEQUFtQixTQUFTLFNBQVMsdUJBQXVCLDRCQUE0QixxQ0FBcUMsRUFBRSxFQUFFO0FBQ2xMLG9CQUFvQiwwREFBbUIsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixFQUFFO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsNENBQVM7O0FBRVgsK0RBQWUsY0FBYyxFQUFDO0FBQzlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQyNDBmMTNmNTZjMmU0ZjA4MGNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgQ3JlYXRlUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3QvQ3JlYXRlUG9zdCc7XHJcbmltcG9ydCBDYXJkUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3QvQ2FyZFBvc3QnO1xyXG5pbXBvcnQge1NlZ21lbnR9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQge3BhcnNlQ29va2llc30gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHtOb1Bvc3RzfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhXCI7XHJcbmltcG9ydCB7UG9zdERlbGV0ZVRvYXN0cn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1RvYXN0clwiO1xyXG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVuZE1lc3NhZ2UsIFBsYWNlSG9sZGVyUG9zdHMgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9QbGFjZUhvbGRlckdyb3VwJztcclxuZnVuY3Rpb24gSW5kZXgoe3VzZXIscG9zdHNEYXRhLGVycm9yTG9hZGluZ30pe1xyXG4gICAvLyBjb25zb2xlLmxvZyh7dXNlcix1c2VyRm9sbG93U3RhdHN9KTtcclxuICAgY29uc29sZS5sb2cocG9zdHNEYXRhKVxyXG4gICBjb25zdCBbcG9zdHMsc2V0UG9zdHNdID0gdXNlU3RhdGUocG9zdHNEYXRhKTtcclxuICAgY29uc3QgW3Nob3dUb2FzdHIsc2V0U2hvd1RvYXN0cl09dXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgY29uc3QgW2hhc01vcmUsIHNldEhhc01vcmVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDIpO1xyXG5cclxuICAgXHJcbiAgIFxyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgIGRvY3VtZW50LnRpdGxlID0gYFdlbGNvbWUsICR7dXNlci5uYW1lLnNwbGl0KFwiIFwiKVswXX1gO1xyXG5cclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzaG93VG9hc3RyICYmIHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd1RvYXN0cihmYWxzZSksIDMwMDApO1xyXG4gICAgICB9LCBbc2hvd1RvYXN0cl0pO1xyXG5cclxuICAgICAgY29uc3QgZmV0Y2hEYXRhT25TY3JvbGwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvcG9zdHNgLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH0sXHJcbiAgICAgICAgICAgIHBhcmFtczogeyBwYWdlTnVtYmVyIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09PSAwKSBzZXRIYXNNb3JlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgICAgICAgc2V0UG9zdHMocHJldiA9PiBbLi4ucHJldiwgLi4ucmVzLmRhdGFdKTtcclxuICAgICAgICAgIHNldFBhZ2VOdW1iZXIocHJldiA9PiBwcmV2ICsgMSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiRXJyb3IgZmV0Y2hpbmcgUG9zdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgXHJcblxyXG4gICAgaWYocG9zdHMubGVuZ3RoPT0wIHx8IGVycm9yTG9hZGluZykgcmV0dXJuIDxOb1Bvc3RzIC8+XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgXHJcbiAgICA8PlxyXG4gICAge3Nob3dUb2FzdHIgJiYgPFBvc3REZWxldGVUb2FzdHIgLz59XHJcbiAgICA8U2VnbWVudD5cclxuICAgIDxDcmVhdGVQb3N0IHVzZXI9e3VzZXJ9IHNldFBvc3RzPXtzZXRQb3N0c30gLz5cclxuICAgIDxJbmZpbml0ZVNjcm9sbFxyXG4gICAgaGFzTW9yZT17aGFzTW9yZX1cclxuICAgIG5leHQ9e2ZldGNoRGF0YU9uU2Nyb2xsfVxyXG4gICAgbG9hZGVyPXs8UGxhY2VIb2xkZXJQb3N0cyAvPn1cclxuICAgIGVuZE1lc3NhZ2U9ezxFbmRNZXNzYWdlIC8+fVxyXG4gICAgZGF0YUxlbmd0aD17cG9zdHMubGVuZ3RofVxyXG4gICAgPlxyXG4gICAge3Bvc3RzLm1hcChwb3N0PT4oPENhcmRQb3N0IFxyXG4gICAga2V5ID0ge3Bvc3QuX2lkfVxyXG4gICAgcG9zdD17cG9zdH1cclxuICAgIHVzZXI9e3VzZXJ9XHJcbiAgICBzZXRQb3N0cz17c2V0UG9zdHN9XHJcbiAgICBzZXRTaG93VG9hc3RyPXtzZXRTaG93VG9hc3RyfSBcclxuICAgIC8+KSl9XHJcbiAgICA8L0luZmluaXRlU2Nyb2xsPlxyXG4gICAgPC9TZWdtZW50PlxyXG4gICAgPC8+XHJcblxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyhjdHgpPT57XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCB7dG9rZW59ID0gcGFyc2VDb29raWVzKGN0eClcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvcG9zdHNgLHtcclxuICAgICAgICBoZWFkZXJzOntBdXRob3JpemF0aW9uOnRva2VufSxcclxuICAgICAgICBwYXJhbXM6IHtwYWdlTnVtYmVyOjF9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHtwb3N0c0RhdGE6cmVzLmRhdGF9O1xyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvckxvYWRpbmc6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbnZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCxuby1wYXJhbS1yZWFzc2lnbixuby1zaGFkb3cgKi9cblxuLyoqXG4gKiBUaHJvdHRsZSBleGVjdXRpb24gb2YgYSBmdW5jdGlvbi4gRXNwZWNpYWxseSB1c2VmdWwgZm9yIHJhdGUgbGltaXRpbmdcbiAqIGV4ZWN1dGlvbiBvZiBoYW5kbGVycyBvbiBldmVudHMgbGlrZSByZXNpemUgYW5kIHNjcm9sbC5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIGRlbGF5ICAgICAgICAgIEEgemVyby1vci1ncmVhdGVyIGRlbGF5IGluIG1pbGxpc2Vjb25kcy4gRm9yIGV2ZW50IGNhbGxiYWNrcywgdmFsdWVzIGFyb3VuZCAxMDAgb3IgMjUwIChvciBldmVuIGhpZ2hlcikgYXJlIG1vc3QgdXNlZnVsLlxuICogQHBhcmFtICB7Qm9vbGVhbn0gICBbbm9UcmFpbGluZ10gICBPcHRpb25hbCwgZGVmYXVsdHMgdG8gZmFsc2UuIElmIG5vVHJhaWxpbmcgaXMgdHJ1ZSwgY2FsbGJhY2sgd2lsbCBvbmx5IGV4ZWN1dGUgZXZlcnkgYGRlbGF5YCBtaWxsaXNlY29uZHMgd2hpbGUgdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm90dGxlZC1mdW5jdGlvbiBpcyBiZWluZyBjYWxsZWQuIElmIG5vVHJhaWxpbmcgaXMgZmFsc2Ugb3IgdW5zcGVjaWZpZWQsIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQgb25lIGZpbmFsIHRpbWVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIgdGhlIGxhc3QgdGhyb3R0bGVkLWZ1bmN0aW9uIGNhbGwuIChBZnRlciB0aGUgdGhyb3R0bGVkLWZ1bmN0aW9uIGhhcyBub3QgYmVlbiBjYWxsZWQgZm9yIGBkZWxheWAgbWlsbGlzZWNvbmRzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgaW50ZXJuYWwgY291bnRlciBpcyByZXNldClcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgY2FsbGJhY2sgICAgICAgQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBhZnRlciBkZWxheSBtaWxsaXNlY29uZHMuIFRoZSBgdGhpc2AgY29udGV4dCBhbmQgYWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRocm91Z2gsIGFzLWlzLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBgY2FsbGJhY2tgIHdoZW4gdGhlIHRocm90dGxlZC1mdW5jdGlvbiBpcyBleGVjdXRlZC5cbiAqIEBwYXJhbSAge0Jvb2xlYW59ICAgW2RlYm91bmNlTW9kZV0gSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBzY2hlZHVsZSBgY2xlYXJgIHRvIGV4ZWN1dGUgYWZ0ZXIgYGRlbGF5YCBtcy4gSWYgYGRlYm91bmNlTW9kZWAgaXMgZmFsc2UgKGF0IGVuZCksXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlIGBjYWxsYmFja2AgdG8gZXhlY3V0ZSBhZnRlciBgZGVsYXlgIG1zLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgQSBuZXcsIHRocm90dGxlZCwgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlIChkZWxheSwgbm9UcmFpbGluZywgY2FsbGJhY2ssIGRlYm91bmNlTW9kZSkge1xuICAvKlxuICAgKiBBZnRlciB3cmFwcGVyIGhhcyBzdG9wcGVkIGJlaW5nIGNhbGxlZCwgdGhpcyB0aW1lb3V0IGVuc3VyZXMgdGhhdFxuICAgKiBgY2FsbGJhY2tgIGlzIGV4ZWN1dGVkIGF0IHRoZSBwcm9wZXIgdGltZXMgaW4gYHRocm90dGxlYCBhbmQgYGVuZGBcbiAgICogZGVib3VuY2UgbW9kZXMuXG4gICAqL1xuICB2YXIgdGltZW91dElEO1xuICB2YXIgY2FuY2VsbGVkID0gZmFsc2U7IC8vIEtlZXAgdHJhY2sgb2YgdGhlIGxhc3QgdGltZSBgY2FsbGJhY2tgIHdhcyBleGVjdXRlZC5cblxuICB2YXIgbGFzdEV4ZWMgPSAwOyAvLyBGdW5jdGlvbiB0byBjbGVhciBleGlzdGluZyB0aW1lb3V0XG5cbiAgZnVuY3Rpb24gY2xlYXJFeGlzdGluZ1RpbWVvdXQoKSB7XG4gICAgaWYgKHRpbWVvdXRJRCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRCk7XG4gICAgfVxuICB9IC8vIEZ1bmN0aW9uIHRvIGNhbmNlbCBuZXh0IGV4ZWNcblxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBjbGVhckV4aXN0aW5nVGltZW91dCgpO1xuICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gIH0gLy8gYG5vVHJhaWxpbmdgIGRlZmF1bHRzIHRvIGZhbHN5LlxuXG5cbiAgaWYgKHR5cGVvZiBub1RyYWlsaW5nICE9PSAnYm9vbGVhbicpIHtcbiAgICBkZWJvdW5jZU1vZGUgPSBjYWxsYmFjaztcbiAgICBjYWxsYmFjayA9IG5vVHJhaWxpbmc7XG4gICAgbm9UcmFpbGluZyA9IHVuZGVmaW5lZDtcbiAgfVxuICAvKlxuICAgKiBUaGUgYHdyYXBwZXJgIGZ1bmN0aW9uIGVuY2Fwc3VsYXRlcyBhbGwgb2YgdGhlIHRocm90dGxpbmcgLyBkZWJvdW5jaW5nXG4gICAqIGZ1bmN0aW9uYWxpdHkgYW5kIHdoZW4gZXhlY3V0ZWQgd2lsbCBsaW1pdCB0aGUgcmF0ZSBhdCB3aGljaCBgY2FsbGJhY2tgXG4gICAqIGlzIGV4ZWN1dGVkLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIGxhc3RFeGVjO1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRXhlY3V0ZSBgY2FsbGJhY2tgIGFuZCB1cGRhdGUgdGhlIGBsYXN0RXhlY2AgdGltZXN0YW1wLlxuXG5cbiAgICBmdW5jdGlvbiBleGVjKCkge1xuICAgICAgbGFzdEV4ZWMgPSBEYXRlLm5vdygpO1xuICAgICAgY2FsbGJhY2suYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfVxuICAgIC8qXG4gICAgICogSWYgYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pIHRoaXMgaXMgdXNlZCB0byBjbGVhciB0aGUgZmxhZ1xuICAgICAqIHRvIGFsbG93IGZ1dHVyZSBgY2FsbGJhY2tgIGV4ZWN1dGlvbnMuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgdGltZW91dElEID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChkZWJvdW5jZU1vZGUgJiYgIXRpbWVvdXRJRCkge1xuICAgICAgLypcbiAgICAgICAqIFNpbmNlIGB3cmFwcGVyYCBpcyBiZWluZyBjYWxsZWQgZm9yIHRoZSBmaXJzdCB0aW1lIGFuZFxuICAgICAgICogYGRlYm91bmNlTW9kZWAgaXMgdHJ1ZSAoYXQgYmVnaW4pLCBleGVjdXRlIGBjYWxsYmFja2AuXG4gICAgICAgKi9cbiAgICAgIGV4ZWMoKTtcbiAgICB9XG5cbiAgICBjbGVhckV4aXN0aW5nVGltZW91dCgpO1xuXG4gICAgaWYgKGRlYm91bmNlTW9kZSA9PT0gdW5kZWZpbmVkICYmIGVsYXBzZWQgPiBkZWxheSkge1xuICAgICAgLypcbiAgICAgICAqIEluIHRocm90dGxlIG1vZGUsIGlmIGBkZWxheWAgdGltZSBoYXMgYmVlbiBleGNlZWRlZCwgZXhlY3V0ZVxuICAgICAgICogYGNhbGxiYWNrYC5cbiAgICAgICAqL1xuICAgICAgZXhlYygpO1xuICAgIH0gZWxzZSBpZiAobm9UcmFpbGluZyAhPT0gdHJ1ZSkge1xuICAgICAgLypcbiAgICAgICAqIEluIHRyYWlsaW5nIHRocm90dGxlIG1vZGUsIHNpbmNlIGBkZWxheWAgdGltZSBoYXMgbm90IGJlZW5cbiAgICAgICAqIGV4Y2VlZGVkLCBzY2hlZHVsZSBgY2FsbGJhY2tgIHRvIGV4ZWN1dGUgYGRlbGF5YCBtcyBhZnRlciBtb3N0XG4gICAgICAgKiByZWNlbnQgZXhlY3V0aW9uLlxuICAgICAgICpcbiAgICAgICAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIHRydWUgKGF0IGJlZ2luKSwgc2NoZWR1bGUgYGNsZWFyYCB0byBleGVjdXRlXG4gICAgICAgKiBhZnRlciBgZGVsYXlgIG1zLlxuICAgICAgICpcbiAgICAgICAqIElmIGBkZWJvdW5jZU1vZGVgIGlzIGZhbHNlIChhdCBlbmQpLCBzY2hlZHVsZSBgY2FsbGJhY2tgIHRvXG4gICAgICAgKiBleGVjdXRlIGFmdGVyIGBkZWxheWAgbXMuXG4gICAgICAgKi9cbiAgICAgIHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoZGVib3VuY2VNb2RlID8gY2xlYXIgOiBleGVjLCBkZWJvdW5jZU1vZGUgPT09IHVuZGVmaW5lZCA/IGRlbGF5IC0gZWxhcHNlZCA6IGRlbGF5KTtcbiAgICB9XG4gIH1cblxuICB3cmFwcGVyLmNhbmNlbCA9IGNhbmNlbDsgLy8gUmV0dXJuIHRoZSB3cmFwcGVyIGZ1bmN0aW9uLlxuXG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG52YXIgVGhyZXNob2xkVW5pdHMgPSB7XHJcbiAgICBQaXhlbDogJ1BpeGVsJyxcclxuICAgIFBlcmNlbnQ6ICdQZXJjZW50JyxcclxufTtcclxudmFyIGRlZmF1bHRUaHJlc2hvbGQgPSB7XHJcbiAgICB1bml0OiBUaHJlc2hvbGRVbml0cy5QZXJjZW50LFxyXG4gICAgdmFsdWU6IDAuOCxcclxufTtcclxuZnVuY3Rpb24gcGFyc2VUaHJlc2hvbGQoc2Nyb2xsVGhyZXNob2xkKSB7XHJcbiAgICBpZiAodHlwZW9mIHNjcm9sbFRocmVzaG9sZCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1bml0OiBUaHJlc2hvbGRVbml0cy5QZXJjZW50LFxyXG4gICAgICAgICAgICB2YWx1ZTogc2Nyb2xsVGhyZXNob2xkICogMTAwLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHNjcm9sbFRocmVzaG9sZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsVGhyZXNob2xkLm1hdGNoKC9eKFxcZCooXFwuXFxkKyk/KXB4JC8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB1bml0OiBUaHJlc2hvbGRVbml0cy5QaXhlbCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNjcm9sbFRocmVzaG9sZCksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzY3JvbGxUaHJlc2hvbGQubWF0Y2goL14oXFxkKihcXC5cXGQrKT8pJSQvKSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdW5pdDogVGhyZXNob2xkVW5pdHMuUGVyY2VudCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNjcm9sbFRocmVzaG9sZCksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUud2Fybignc2Nyb2xsVGhyZXNob2xkIGZvcm1hdCBpcyBpbnZhbGlkLiBWYWxpZCBmb3JtYXRzOiBcIjEyMHB4XCIsIFwiNTAlXCIuLi4nKTtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFRocmVzaG9sZDtcclxuICAgIH1cclxuICAgIGNvbnNvbGUud2Fybignc2Nyb2xsVGhyZXNob2xkIHNob3VsZCBiZSBzdHJpbmcgb3IgbnVtYmVyJyk7XHJcbiAgICByZXR1cm4gZGVmYXVsdFRocmVzaG9sZDtcclxufVxuXG52YXIgSW5maW5pdGVTY3JvbGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSW5maW5pdGVTY3JvbGwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBJbmZpbml0ZVNjcm9sbChwcm9wcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmxhc3RTY3JvbGxUb3AgPSAwO1xyXG4gICAgICAgIF90aGlzLmFjdGlvblRyaWdnZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHZhcmlhYmxlcyB0byBrZWVwIHRyYWNrIG9mIHB1bGwgZG93biBiZWhhdmlvdXJcclxuICAgICAgICBfdGhpcy5zdGFydFkgPSAwO1xyXG4gICAgICAgIF90aGlzLmN1cnJlbnRZID0gMDtcclxuICAgICAgICBfdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHdpbGwgYmUgcG9wdWxhdGVkIGluIGNvbXBvbmVudERpZE1vdW50XHJcbiAgICAgICAgLy8gYmFzZWQgb24gdGhlIGhlaWdodCBvZiB0aGUgcHVsbCBkb3duIGVsZW1lbnRcclxuICAgICAgICBfdGhpcy5tYXhQdWxsRG93bkRpc3RhbmNlID0gMDtcclxuICAgICAgICBfdGhpcy5nZXRTY3JvbGxhYmxlVGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuc2Nyb2xsYWJsZVRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLnNjcm9sbGFibGVUYXJnZXQ7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMucHJvcHMuc2Nyb2xsYWJsZVRhcmdldCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChfdGhpcy5wcm9wcy5zY3JvbGxhYmxlVGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuc2Nyb2xsYWJsZVRhcmdldCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiWW91IGFyZSB0cnlpbmcgdG8gcGFzcyBzY3JvbGxhYmxlVGFyZ2V0IGJ1dCBpdCBpcyBudWxsLiBUaGlzIG1pZ2h0XFxuICAgICAgICBoYXBwZW4gYmVjYXVzZSB0aGUgZWxlbWVudCBtYXkgbm90IGhhdmUgYmVlbiBhZGRlZCB0byBET00geWV0LlxcbiAgICAgICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmtlZXRtYWluaS9yZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50L2lzc3Vlcy81OSBmb3IgbW9yZSBpbmZvLlxcbiAgICAgIFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIF90aGlzLm9uU3RhcnQgPSBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5sYXN0U2Nyb2xsVG9wKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChldnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zdGFydFkgPSBldnQucGFnZVk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZXZ0IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc3RhcnRZID0gZXZ0LnRvdWNoZXNbMF0ucGFnZVk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuY3VycmVudFkgPSBfdGhpcy5zdGFydFk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5faW5mU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5faW5mU2Nyb2xsLnN0eWxlLndpbGxDaGFuZ2UgPSAndHJhbnNmb3JtJztcclxuICAgICAgICAgICAgICAgIF90aGlzLl9pbmZTY3JvbGwuc3R5bGUudHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAsMCwwLjMxLDEpXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIF90aGlzLm9uTW92ZSA9IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5kcmFnZ2luZylcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKGV2dCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmN1cnJlbnRZID0gZXZ0LnBhZ2VZO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGV2dCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmN1cnJlbnRZID0gZXZ0LnRvdWNoZXNbMF0ucGFnZVk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdXNlciBpcyBzY3JvbGxpbmcgZG93biB0byB1cFxyXG4gICAgICAgICAgICBpZiAoX3RoaXMuY3VycmVudFkgPCBfdGhpcy5zdGFydFkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5jdXJyZW50WSAtIF90aGlzLnN0YXJ0WSA+PVxyXG4gICAgICAgICAgICAgICAgTnVtYmVyKF90aGlzLnByb3BzLnB1bGxEb3duVG9SZWZyZXNoVGhyZXNob2xkKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHB1bGxUb1JlZnJlc2hUaHJlc2hvbGRCcmVhY2hlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHNvIHlvdSBjYW4gZHJhZyB1cHRvIDEuNSB0aW1lcyBvZiB0aGUgbWF4UHVsbERvd25EaXN0YW5jZVxyXG4gICAgICAgICAgICBpZiAoX3RoaXMuY3VycmVudFkgLSBfdGhpcy5zdGFydFkgPiBfdGhpcy5tYXhQdWxsRG93bkRpc3RhbmNlICogMS41KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuX2luZlNjcm9sbCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2luZlNjcm9sbC5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgICAgIF90aGlzLl9pbmZTY3JvbGwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZCgwcHgsIFwiICsgKF90aGlzLmN1cnJlbnRZIC1cclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdGFydFkpICsgXCJweCwgMHB4KVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBfdGhpcy5vbkVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuc3RhcnRZID0gMDtcclxuICAgICAgICAgICAgX3RoaXMuY3VycmVudFkgPSAwO1xyXG4gICAgICAgICAgICBfdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuc3RhdGUucHVsbFRvUmVmcmVzaFRocmVzaG9sZEJyZWFjaGVkKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wcm9wcy5yZWZyZXNoRnVuY3Rpb24gJiYgX3RoaXMucHJvcHMucmVmcmVzaEZ1bmN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcHVsbFRvUmVmcmVzaFRocmVzaG9sZEJyZWFjaGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl9pbmZTY3JvbGxcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5faW5mU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2luZlNjcm9sbC5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5faW5mU2Nyb2xsLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5faW5mU2Nyb2xsLnN0eWxlLndpbGxDaGFuZ2UgPSAndW5zZXQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIF90aGlzLm9uU2Nyb2xsTGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5vblNjcm9sbCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSB0aGlzIGNhbGxiYWNrIGluIG5leHQgdGljayBzbyB0aGF0IGl0IGRvZXMgbm90IGFmZmVjdCB0aGVcclxuICAgICAgICAgICAgICAgIC8vIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGxpYnJhcnkuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnByb3BzLm9uU2Nyb2xsICYmIF90aGlzLnByb3BzLm9uU2Nyb2xsKGV2ZW50KTsgfSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IF90aGlzLnByb3BzLmhlaWdodCB8fCBfdGhpcy5fc2Nyb2xsYWJsZU5vZGVcclxuICAgICAgICAgICAgICAgID8gZXZlbnQudGFyZ2V0XHJcbiAgICAgICAgICAgICAgICA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcclxuICAgICAgICAgICAgICAgICAgICA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIDogZG9jdW1lbnQuYm9keTtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGltbWVkaWF0ZWx5IGlmIHRoZSBhY3Rpb24gaGFzIGFscmVhZHkgYmVlbiB0cmlnZ2VyZWQsXHJcbiAgICAgICAgICAgIC8vIHByZXZlbnRzIG11bHRpcGxlIHRyaWdnZXJzLlxyXG4gICAgICAgICAgICBpZiAoX3RoaXMuYWN0aW9uVHJpZ2dlcmVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgYXRCb3R0b20gPSBfdGhpcy5wcm9wcy5pbnZlcnNlXHJcbiAgICAgICAgICAgICAgICA/IF90aGlzLmlzRWxlbWVudEF0VG9wKHRhcmdldCwgX3RoaXMucHJvcHMuc2Nyb2xsVGhyZXNob2xkKVxyXG4gICAgICAgICAgICAgICAgOiBfdGhpcy5pc0VsZW1lbnRBdEJvdHRvbSh0YXJnZXQsIF90aGlzLnByb3BzLnNjcm9sbFRocmVzaG9sZCk7XHJcbiAgICAgICAgICAgIC8vIGNhbGwgdGhlIGBuZXh0YCBmdW5jdGlvbiBpbiB0aGUgcHJvcHMgdG8gdHJpZ2dlciB0aGUgbmV4dCBkYXRhIGZldGNoXHJcbiAgICAgICAgICAgIGlmIChhdEJvdHRvbSAmJiBfdGhpcy5wcm9wcy5oYXNNb3JlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3Rpb25UcmlnZ2VyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBzaG93TG9hZGVyOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucHJvcHMubmV4dCAmJiBfdGhpcy5wcm9wcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMubGFzdFNjcm9sbFRvcCA9IHRhcmdldC5zY3JvbGxUb3A7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvd0xvYWRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHB1bGxUb1JlZnJlc2hUaHJlc2hvbGRCcmVhY2hlZDogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBfdGhpcy50aHJvdHRsZWRPblNjcm9sbExpc3RlbmVyID0gdGhyb3R0bGUoMTUwLCBfdGhpcy5vblNjcm9sbExpc3RlbmVyKS5iaW5kKF90aGlzKTtcclxuICAgICAgICBfdGhpcy5vblN0YXJ0ID0gX3RoaXMub25TdGFydC5iaW5kKF90aGlzKTtcclxuICAgICAgICBfdGhpcy5vbk1vdmUgPSBfdGhpcy5vbk1vdmUuYmluZChfdGhpcyk7XHJcbiAgICAgICAgX3RoaXMub25FbmQgPSBfdGhpcy5vbkVuZC5iaW5kKF90aGlzKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmRhdGFMZW5ndGggPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1hbmRhdG9yeSBwcm9wIFxcXCJkYXRhTGVuZ3RoXFxcIiBpcyBtaXNzaW5nLiBUaGUgcHJvcCBpcyBuZWVkZWRcIiArXHJcbiAgICAgICAgICAgICAgICBcIiB3aGVuIGxvYWRpbmcgbW9yZSBjb250ZW50LiBDaGVjayBSRUFETUUubWQgZm9yIHVzYWdlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zY3JvbGxhYmxlTm9kZSA9IHRoaXMuZ2V0U2Nyb2xsYWJsZVRhcmdldCgpO1xyXG4gICAgICAgIHRoaXMuZWwgPSB0aGlzLnByb3BzLmhlaWdodFxyXG4gICAgICAgICAgICA/IHRoaXMuX2luZlNjcm9sbFxyXG4gICAgICAgICAgICA6IHRoaXMuX3Njcm9sbGFibGVOb2RlIHx8IHdpbmRvdztcclxuICAgICAgICBpZiAodGhpcy5lbCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXNcclxuICAgICAgICAgICAgICAgIC50aHJvdHRsZWRPblNjcm9sbExpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmluaXRpYWxTY3JvbGxZID09PSAnbnVtYmVyJyAmJlxyXG4gICAgICAgICAgICB0aGlzLmVsICYmXHJcbiAgICAgICAgICAgIHRoaXMuZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJlxyXG4gICAgICAgICAgICB0aGlzLmVsLnNjcm9sbEhlaWdodCA+IHRoaXMucHJvcHMuaW5pdGlhbFNjcm9sbFkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5zY3JvbGxUbygwLCB0aGlzLnByb3BzLmluaXRpYWxTY3JvbGxZKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMucHVsbERvd25Ub1JlZnJlc2ggJiYgdGhpcy5lbCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uU3RhcnQpO1xyXG4gICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Nb3ZlKTtcclxuICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25FbmQpO1xyXG4gICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25TdGFydCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdmUpO1xyXG4gICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRW5kKTtcclxuICAgICAgICAgICAgLy8gZ2V0IEJDUiBvZiBwdWxsRG93biBlbGVtZW50IHRvIHBvc2l0aW9uIGl0IGFib3ZlXHJcbiAgICAgICAgICAgIHRoaXMubWF4UHVsbERvd25EaXN0YW5jZSA9XHJcbiAgICAgICAgICAgICAgICAodGhpcy5fcHVsbERvd24gJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdWxsRG93bi5maXJzdENoaWxkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHVsbERvd24uZmlyc3RDaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVpZ2h0KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIDA7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnJlZnJlc2hGdW5jdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWFuZGF0b3J5IHByb3AgXFxcInJlZnJlc2hGdW5jdGlvblxcXCIgbWlzc2luZy5cXG4gICAgICAgICAgUHVsbCBEb3duIFRvIFJlZnJlc2ggZnVuY3Rpb25hbGl0eSB3aWxsIG5vdCB3b3JrXFxuICAgICAgICAgIGFzIGV4cGVjdGVkLiBDaGVjayBSRUFETUUubWQgZm9yIHVzYWdlJ1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzXHJcbiAgICAgICAgICAgICAgICAudGhyb3R0bGVkT25TY3JvbGxMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnB1bGxEb3duVG9SZWZyZXNoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uTW92ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbkVuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25TdGFydCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3ZlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25FbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgICAgIC8vIGRvIG5vdGhpbmcgd2hlbiBkYXRhTGVuZ3RoIGlzIHVuY2hhbmdlZFxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFMZW5ndGggPT09IHByb3BzLmRhdGFMZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmFjdGlvblRyaWdnZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHVwZGF0ZSBzdGF0ZSB3aGVuIG5ldyBkYXRhIHdhcyBzZW50IGluXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3dMb2FkZXI6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5pc0VsZW1lbnRBdFRvcCA9IGZ1bmN0aW9uICh0YXJnZXQsIHNjcm9sbFRocmVzaG9sZCkge1xyXG4gICAgICAgIGlmIChzY3JvbGxUaHJlc2hvbGQgPT09IHZvaWQgMCkgeyBzY3JvbGxUaHJlc2hvbGQgPSAwLjg7IH1cclxuICAgICAgICB2YXIgY2xpZW50SGVpZ2h0ID0gdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5IHx8IHRhcmdldCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XHJcbiAgICAgICAgICAgID8gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodFxyXG4gICAgICAgICAgICA6IHRhcmdldC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgdmFyIHRocmVzaG9sZCA9IHBhcnNlVGhyZXNob2xkKHNjcm9sbFRocmVzaG9sZCk7XHJcbiAgICAgICAgaWYgKHRocmVzaG9sZC51bml0ID09PSBUaHJlc2hvbGRVbml0cy5QaXhlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRhcmdldC5zY3JvbGxUb3AgPD1cclxuICAgICAgICAgICAgICAgIHRocmVzaG9sZC52YWx1ZSArIGNsaWVudEhlaWdodCAtIHRhcmdldC5zY3JvbGxIZWlnaHQgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICh0YXJnZXQuc2Nyb2xsVG9wIDw9XHJcbiAgICAgICAgICAgIHRocmVzaG9sZC52YWx1ZSAvIDEwMCArIGNsaWVudEhlaWdodCAtIHRhcmdldC5zY3JvbGxIZWlnaHQgKyAxKTtcclxuICAgIH07XHJcbiAgICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUuaXNFbGVtZW50QXRCb3R0b20gPSBmdW5jdGlvbiAodGFyZ2V0LCBzY3JvbGxUaHJlc2hvbGQpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsVGhyZXNob2xkID09PSB2b2lkIDApIHsgc2Nyb2xsVGhyZXNob2xkID0gMC44OyB9XHJcbiAgICAgICAgdmFyIGNsaWVudEhlaWdodCA9IHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSB8fCB0YXJnZXQgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxyXG4gICAgICAgICAgICA/IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHRcclxuICAgICAgICAgICAgOiB0YXJnZXQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHZhciB0aHJlc2hvbGQgPSBwYXJzZVRocmVzaG9sZChzY3JvbGxUaHJlc2hvbGQpO1xyXG4gICAgICAgIGlmICh0aHJlc2hvbGQudW5pdCA9PT0gVGhyZXNob2xkVW5pdHMuUGl4ZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0YXJnZXQuc2Nyb2xsVG9wICsgY2xpZW50SGVpZ2h0ID49IHRhcmdldC5zY3JvbGxIZWlnaHQgLSB0aHJlc2hvbGQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKHRhcmdldC5zY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQgPj1cclxuICAgICAgICAgICAgKHRocmVzaG9sZC52YWx1ZSAvIDEwMCkgKiB0YXJnZXQuc2Nyb2xsSGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHN0eWxlID0gX19hc3NpZ24oeyBoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0IHx8ICdhdXRvJywgb3ZlcmZsb3c6ICdhdXRvJywgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcgfSwgdGhpcy5wcm9wcy5zdHlsZSk7XHJcbiAgICAgICAgdmFyIGhhc0NoaWxkcmVuID0gdGhpcy5wcm9wcy5oYXNDaGlsZHJlbiB8fFxyXG4gICAgICAgICAgICAhISh0aGlzLnByb3BzLmNoaWxkcmVuICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoKTtcclxuICAgICAgICAvLyBiZWNhdXNlIGhlaWdodGVkIGluZmluaXRlU2Nyb2xsIHZpc3VhbHkgYnJlYWtzXHJcbiAgICAgICAgLy8gb24gZHJhZyBkb3duIGFzIG92ZXJmbG93IGJlY29tZXMgdmlzaWJsZVxyXG4gICAgICAgIHZhciBvdXRlckRpdlN0eWxlID0gdGhpcy5wcm9wcy5wdWxsRG93blRvUmVmcmVzaCAmJiB0aGlzLnByb3BzLmhlaWdodFxyXG4gICAgICAgICAgICA/IHsgb3ZlcmZsb3c6ICdhdXRvJyB9XHJcbiAgICAgICAgICAgIDoge307XHJcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IG91dGVyRGl2U3R5bGUsIGNsYXNzTmFtZTogXCJpbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50X19vdXRlcmRpdlwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudCBcIiArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJyksIHJlZjogZnVuY3Rpb24gKGluZlNjcm9sbCkgeyByZXR1cm4gKF90aGlzLl9pbmZTY3JvbGwgPSBpbmZTY3JvbGwpOyB9LCBzdHlsZTogc3R5bGUgfSxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHVsbERvd25Ub1JlZnJlc2ggJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9LCByZWY6IGZ1bmN0aW9uIChwdWxsRG93bikgeyByZXR1cm4gKF90aGlzLl9wdWxsRG93biA9IHB1bGxEb3duKTsgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xICogdGhpcy5tYXhQdWxsRG93bkRpc3RhbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIHRoaXMuc3RhdGUucHVsbFRvUmVmcmVzaFRocmVzaG9sZEJyZWFjaGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5yZWxlYXNlVG9SZWZyZXNoQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMucHVsbERvd25Ub1JlZnJlc2hDb250ZW50KSkpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbixcclxuICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLnNob3dMb2FkZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAhaGFzQ2hpbGRyZW4gJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhhc01vcmUgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxvYWRlcixcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0xvYWRlciAmJiB0aGlzLnByb3BzLmhhc01vcmUgJiYgdGhpcy5wcm9wcy5sb2FkZXIsXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5oYXNNb3JlICYmIHRoaXMucHJvcHMuZW5kTWVzc2FnZSkpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSW5maW5pdGVTY3JvbGw7XHJcbn0oQ29tcG9uZW50KSk7XG5cbmV4cG9ydCBkZWZhdWx0IEluZmluaXRlU2Nyb2xsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXMuanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9