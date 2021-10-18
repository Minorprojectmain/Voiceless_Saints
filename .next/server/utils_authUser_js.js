exports.id = "utils_authUser_js";
exports.ids = ["utils_authUser_js"];
exports.modules = {

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUser": function() { return /* binding */ registerUser; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; },
/* harmony export */   "redirectUser": function() { return /* binding */ redirectUser; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);





const registerUser = async (user, profilePicUrl, setError, setLoading) => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/signup`, {
      user,
      profilePicUrl
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }
};
const loginUser = async (user, setError, setLoading) => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/auth`, {
      user
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }
};
const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location
    });
    ctx.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_3___default().push(location);
  }
};

const setToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("token", token);
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
};

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg = '';

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vdXRpbHMvYXV0aFVzZXIuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL3V0aWxzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvaWdub3JlZHxDOlxcVXNlcnNcXE5pc2hhIFlhZGF2XFxEZXNrdG9wXFxNaW5vcl9wcm9qZWN0XFx2b2ljZWxlc3Nfc2FpbnRzXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsicmVnaXN0ZXJVc2VyIiwidXNlciIsInByb2ZpbGVQaWNVcmwiLCJzZXRFcnJvciIsInNldExvYWRpbmciLCJyZXMiLCJheGlvcyIsImJhc2VVcmwiLCJzZXRUb2tlbiIsImRhdGEiLCJlcnJvciIsImVycm9yTXNnIiwiY2F0Y2hFcnJvcnMiLCJsb2dpblVzZXIiLCJyZWRpcmVjdFVzZXIiLCJjdHgiLCJsb2NhdGlvbiIsInJlcSIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwiUm91dGVyIiwidG9rZW4iLCJjb29raWUiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJyZXF1ZXN0IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxZQUFZLEdBQUMsT0FBTUMsSUFBTixFQUFXQyxhQUFYLEVBQXlCQyxRQUF6QixFQUFrQ0MsVUFBbEMsS0FBK0M7QUFDckUsTUFBRztBQUNILFVBQU1DLEdBQUcsR0FBQyxNQUFNQyxpREFBQSxDQUFZLEdBQUVDLDZDQUFRLGFBQXRCLEVBQW1DO0FBQUNOLFVBQUQ7QUFBTUM7QUFBTixLQUFuQyxDQUFoQjtBQUVETSxZQUFRLENBQUNILEdBQUcsQ0FBQ0ksSUFBTCxDQUFSO0FBRUUsR0FMRCxDQUtDLE9BQU1DLEtBQU4sRUFBWTtBQUNYLFVBQU1DLFFBQVEsR0FBR0MscURBQVcsQ0FBQ0YsS0FBRCxDQUE1QjtBQUNBUCxZQUFRLENBQUNRLFFBQUQsQ0FBUjtBQUNEO0FBQ0osQ0FWTTtBQVlBLE1BQU1FLFNBQVMsR0FBQyxPQUFNWixJQUFOLEVBQVdFLFFBQVgsRUFBb0JDLFVBQXBCLEtBQWlDO0FBQ3BELE1BQUc7QUFDSCxVQUFNQyxHQUFHLEdBQUMsTUFBTUMsaURBQUEsQ0FBWSxHQUFFQyw2Q0FBUSxXQUF0QixFQUFpQztBQUFDTjtBQUFELEtBQWpDLENBQWhCO0FBRURPLFlBQVEsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFMLENBQVI7QUFFRSxHQUxELENBS0MsT0FBTUMsS0FBTixFQUFZO0FBQ1gsVUFBTUMsUUFBUSxHQUFHQyxxREFBVyxDQUFDRixLQUFELENBQTVCO0FBQ0FQLFlBQVEsQ0FBQ1EsUUFBRCxDQUFSO0FBQ0Q7QUFDSixDQVZNO0FBWUEsTUFBTUcsWUFBWSxHQUFHLENBQUNDLEdBQUQsRUFBS0MsUUFBTCxLQUFnQjtBQUMxQyxNQUFHRCxHQUFHLENBQUNFLEdBQVAsRUFBVztBQUNURixPQUFHLENBQUNWLEdBQUosQ0FBUWEsU0FBUixDQUFrQixHQUFsQixFQUFzQjtBQUFDQyxjQUFRLEVBQUNIO0FBQVYsS0FBdEI7QUFDQUQsT0FBRyxDQUFDVixHQUFKLENBQVFlLEdBQVI7QUFDRCxHQUhELE1BR0s7QUFDSEMsMkRBQUEsQ0FBWUwsUUFBWjtBQUNEO0FBQ0YsQ0FQTTs7QUFRUCxNQUFNUixRQUFRLEdBQUNjLEtBQUssSUFBRTtBQUNsQkMsc0RBQUEsQ0FBVyxPQUFYLEVBQW1CRCxLQUFuQjtBQUNBRCx5REFBQSxDQUFZLEdBQVo7QUFDSCxDQUhELEM7Ozs7Ozs7Ozs7OztBQ3RDQSxNQUFNZCxPQUFPLEdBQUUsdUJBQWY7QUFFQSwrREFBZUEsT0FBZixFOzs7Ozs7Ozs7Ozs7QUNGQSxNQUFNSyxXQUFXLEdBQUlGLEtBQUQsSUFBVztBQUM3QixNQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFFQSxNQUFJRCxLQUFLLENBQUNjLFFBQVYsRUFBb0I7QUFDbEI7QUFFQWIsWUFBUSxHQUFHRCxLQUFLLENBQUNjLFFBQU4sQ0FBZWYsSUFBMUI7QUFFQWdCLFdBQU8sQ0FBQ2YsS0FBUixDQUFjQyxRQUFkO0FBQ0QsR0FORCxNQU1PLElBQUlELEtBQUssQ0FBQ2dCLE9BQVYsRUFBbUI7QUFDeEI7QUFDQWYsWUFBUSxHQUFHRCxLQUFLLENBQUNnQixPQUFqQjtBQUVBRCxXQUFPLENBQUNmLEtBQVIsQ0FBY0MsUUFBZDtBQUNELEdBTE0sTUFLQTtBQUNMO0FBQ0FBLFlBQVEsR0FBR0QsS0FBSyxDQUFDaUIsT0FBakI7QUFFQUYsV0FBTyxDQUFDZixLQUFSLENBQWNDLFFBQWQ7QUFDRDs7QUFDRixTQUFPQSxRQUFQO0FBQ0EsQ0FyQkQ7O0FBdUJBLCtEQUFlQyxXQUFmLEU7Ozs7Ozs7Ozs7QUN2QkEsZSIsImZpbGUiOiJ1dGlsc19hdXRoVXNlcl9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xyXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSAnLi9jYXRjaEVycm9ycyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlcj1hc3luYyh1c2VyLHByb2ZpbGVQaWNVcmwsc2V0RXJyb3Isc2V0TG9hZGluZyk9PntcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlcz1hd2FpdCBheGlvcy5wb3N0KGAke2Jhc2VVcmx9L2FwaS9zaWdudXBgLHt1c2VyLHByb2ZpbGVQaWNVcmx9KVxyXG5cclxuICAgc2V0VG9rZW4ocmVzLmRhdGEpO1xyXG5cclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnN0IGVycm9yTXNnPSAgY2F0Y2hFcnJvcnMoZXJyb3IpXHJcbiAgICAgIHNldEVycm9yKGVycm9yTXNnKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyPWFzeW5jKHVzZXIsc2V0RXJyb3Isc2V0TG9hZGluZyk9PntcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlcz1hd2FpdCBheGlvcy5wb3N0KGAke2Jhc2VVcmx9L2FwaS9hdXRoYCx7dXNlcn0pXHJcblxyXG4gICBzZXRUb2tlbihyZXMuZGF0YSk7XHJcblxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgY29uc3QgZXJyb3JNc2c9ICBjYXRjaEVycm9ycyhlcnJvcilcclxuICAgICAgc2V0RXJyb3IoZXJyb3JNc2cpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWRpcmVjdFVzZXIgPSAoY3R4LGxvY2F0aW9uKT0+e1xyXG4gIGlmKGN0eC5yZXEpe1xyXG4gICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLHtMb2NhdGlvbjpsb2NhdGlvbn0pXHJcbiAgICBjdHgucmVzLmVuZCgpXHJcbiAgfWVsc2V7XHJcbiAgICBSb3V0ZXIucHVzaChsb2NhdGlvbik7XHJcbiAgfVxyXG59XHJcbmNvbnN0IHNldFRva2VuPXRva2VuPT57XHJcbiAgICBjb29raWUuc2V0KFwidG9rZW5cIix0b2tlbilcclxuICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxufSIsImNvbnN0IGJhc2VVcmwgPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlVXJsO1xyXG4iLCJjb25zdCBjYXRjaEVycm9ycyA9IChlcnJvcikgPT4ge1xyXG4gIGxldCBlcnJvck1zZyA9ICcnO1xyXG5cclxuICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgIC8vIElmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIG5vdCByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlIGluIHRoZSByYW5nZSBvZiAyeHhcclxuXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAvLyBpZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgbm8gcmVzcG9uc2Ugd2FzIHJlY2V2aWVkIGZyb20gc2VydmVyXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlcXVlc3Q7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGlmIHNvbWV0aGluZyBlbHNlIGhhcHBlbmVkIHdoaWxlIG1ha2luZyB0aGUgcmVxdWVzdFxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5tZXNzYWdlO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxuIHJldHVybiBlcnJvck1zZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9