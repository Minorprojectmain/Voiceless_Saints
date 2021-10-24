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
/* harmony export */   "redirectUser": function() { return /* binding */ redirectUser; },
/* harmony export */   "logoutUser": function() { return /* binding */ logoutUser; }
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

const logoutUser = email => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("userEmail", email);
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove("token");
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/login");
  next_router__WEBPACK_IMPORTED_MODULE_3___default().reload();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vdXRpbHMvYXV0aFVzZXIuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL3V0aWxzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvaWdub3JlZHxDOlxcVXNlcnNcXEhQXFxPbmVEcml2ZVxcRGVza3RvcFxcUGV0X1Byb2plY3RcXFZvaWNlbGVzc19TYWludHNcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJyZWdpc3RlclVzZXIiLCJ1c2VyIiwicHJvZmlsZVBpY1VybCIsInNldEVycm9yIiwic2V0TG9hZGluZyIsInJlcyIsImF4aW9zIiwiYmFzZVVybCIsInNldFRva2VuIiwiZGF0YSIsImVycm9yIiwiZXJyb3JNc2ciLCJjYXRjaEVycm9ycyIsImxvZ2luVXNlciIsInJlZGlyZWN0VXNlciIsImN0eCIsImxvY2F0aW9uIiwicmVxIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJSb3V0ZXIiLCJ0b2tlbiIsImNvb2tpZSIsImxvZ291dFVzZXIiLCJlbWFpbCIsInJlc3BvbnNlIiwiY29uc29sZSIsInJlcXVlc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxZQUFZLEdBQUMsT0FBTUMsSUFBTixFQUFXQyxhQUFYLEVBQXlCQyxRQUF6QixFQUFrQ0MsVUFBbEMsS0FBK0M7QUFDckUsTUFBRztBQUNILFVBQU1DLEdBQUcsR0FBQyxNQUFNQyxpREFBQSxDQUFZLEdBQUVDLDZDQUFRLGFBQXRCLEVBQW1DO0FBQUNOLFVBQUQ7QUFBTUM7QUFBTixLQUFuQyxDQUFoQjtBQUVETSxZQUFRLENBQUNILEdBQUcsQ0FBQ0ksSUFBTCxDQUFSO0FBRUUsR0FMRCxDQUtDLE9BQU1DLEtBQU4sRUFBWTtBQUNYLFVBQU1DLFFBQVEsR0FBR0MscURBQVcsQ0FBQ0YsS0FBRCxDQUE1QjtBQUNBUCxZQUFRLENBQUNRLFFBQUQsQ0FBUjtBQUNEO0FBQ0osQ0FWTTtBQVlBLE1BQU1FLFNBQVMsR0FBQyxPQUFNWixJQUFOLEVBQVdFLFFBQVgsRUFBb0JDLFVBQXBCLEtBQWlDO0FBQ3BELE1BQUc7QUFDSCxVQUFNQyxHQUFHLEdBQUMsTUFBTUMsaURBQUEsQ0FBWSxHQUFFQyw2Q0FBUSxXQUF0QixFQUFpQztBQUFDTjtBQUFELEtBQWpDLENBQWhCO0FBRURPLFlBQVEsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFMLENBQVI7QUFFRSxHQUxELENBS0MsT0FBTUMsS0FBTixFQUFZO0FBQ1gsVUFBTUMsUUFBUSxHQUFHQyxxREFBVyxDQUFDRixLQUFELENBQTVCO0FBQ0FQLFlBQVEsQ0FBQ1EsUUFBRCxDQUFSO0FBQ0Q7QUFDSixDQVZNO0FBWUEsTUFBTUcsWUFBWSxHQUFHLENBQUNDLEdBQUQsRUFBS0MsUUFBTCxLQUFnQjtBQUMxQyxNQUFHRCxHQUFHLENBQUNFLEdBQVAsRUFBVztBQUNURixPQUFHLENBQUNWLEdBQUosQ0FBUWEsU0FBUixDQUFrQixHQUFsQixFQUFzQjtBQUFDQyxjQUFRLEVBQUNIO0FBQVYsS0FBdEI7QUFDQUQsT0FBRyxDQUFDVixHQUFKLENBQVFlLEdBQVI7QUFDRCxHQUhELE1BR0s7QUFDSEMsMkRBQUEsQ0FBWUwsUUFBWjtBQUNEO0FBQ0YsQ0FQTTs7QUFRUCxNQUFNUixRQUFRLEdBQUNjLEtBQUssSUFBRTtBQUNsQkMsc0RBQUEsQ0FBVyxPQUFYLEVBQW1CRCxLQUFuQjtBQUNBRCx5REFBQSxDQUFZLEdBQVo7QUFDSCxDQUhEOztBQU9PLE1BQU1HLFVBQVUsR0FBR0MsS0FBSyxJQUFJO0FBRW5DRixzREFBQSxDQUFXLFdBQVgsRUFBd0JFLEtBQXhCO0FBQ0FGLHlEQUFBLENBQWMsT0FBZDtBQUNBRix5REFBQSxDQUFZLFFBQVo7QUFDQUEsMkRBQUE7QUFJQyxDQVRNLEM7Ozs7Ozs7Ozs7OztBQzdDUCxNQUFNZCxPQUFPLEdBQUUsdUJBQWY7QUFFQSwrREFBZUEsT0FBZixFOzs7Ozs7Ozs7Ozs7QUNGQSxNQUFNSyxXQUFXLEdBQUlGLEtBQUQsSUFBVztBQUM3QixNQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFFQSxNQUFJRCxLQUFLLENBQUNnQixRQUFWLEVBQW9CO0FBQ2xCO0FBRUFmLFlBQVEsR0FBR0QsS0FBSyxDQUFDZ0IsUUFBTixDQUFlakIsSUFBMUI7QUFFQWtCLFdBQU8sQ0FBQ2pCLEtBQVIsQ0FBY0MsUUFBZDtBQUNELEdBTkQsTUFNTyxJQUFJRCxLQUFLLENBQUNrQixPQUFWLEVBQW1CO0FBQ3hCO0FBQ0FqQixZQUFRLEdBQUdELEtBQUssQ0FBQ2tCLE9BQWpCO0FBRUFELFdBQU8sQ0FBQ2pCLEtBQVIsQ0FBY0MsUUFBZDtBQUNELEdBTE0sTUFLQTtBQUNMO0FBQ0FBLFlBQVEsR0FBR0QsS0FBSyxDQUFDbUIsT0FBakI7QUFFQUYsV0FBTyxDQUFDakIsS0FBUixDQUFjQyxRQUFkO0FBQ0Q7O0FBQ0YsU0FBT0EsUUFBUDtBQUNBLENBckJEOztBQXVCQSwrREFBZUMsV0FBZixFOzs7Ozs7Ozs7O0FDdkJBLGUiLCJmaWxlIjoidXRpbHNfYXV0aFVzZXJfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gJy4vY2F0Y2hFcnJvcnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXI9YXN5bmModXNlcixwcm9maWxlUGljVXJsLHNldEVycm9yLHNldExvYWRpbmcpPT57XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXM9YXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwYCx7dXNlcixwcm9maWxlUGljVXJsfSlcclxuXHJcbiAgIHNldFRva2VuKHJlcy5kYXRhKTtcclxuXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICBjb25zdCBlcnJvck1zZz0gIGNhdGNoRXJyb3JzKGVycm9yKVxyXG4gICAgICBzZXRFcnJvcihlcnJvck1zZylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlcj1hc3luYyh1c2VyLHNldEVycm9yLHNldExvYWRpbmcpPT57XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXM9YXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvYXV0aGAse3VzZXJ9KVxyXG5cclxuICAgc2V0VG9rZW4ocmVzLmRhdGEpO1xyXG5cclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnN0IGVycm9yTXNnPSAgY2F0Y2hFcnJvcnMoZXJyb3IpXHJcbiAgICAgIHNldEVycm9yKGVycm9yTXNnKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVkaXJlY3RVc2VyID0gKGN0eCxsb2NhdGlvbik9PntcclxuICBpZihjdHgucmVxKXtcclxuICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMix7TG9jYXRpb246bG9jYXRpb259KVxyXG4gICAgY3R4LnJlcy5lbmQoKVxyXG4gIH1lbHNle1xyXG4gICAgUm91dGVyLnB1c2gobG9jYXRpb24pO1xyXG4gIH1cclxufVxyXG5jb25zdCBzZXRUb2tlbj10b2tlbj0+e1xyXG4gICAgY29va2llLnNldChcInRva2VuXCIsdG9rZW4pXHJcbiAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXIgPSBlbWFpbCA9PiB7XHJcblxyXG5jb29raWUuc2V0KFwidXNlckVtYWlsXCIsIGVtYWlsKTtcclxuY29va2llLnJlbW92ZShcInRva2VuXCIpO1xyXG5Sb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuUm91dGVyLnJlbG9hZCgpO1xyXG5cclxuXHJcblxyXG59OyIsImNvbnN0IGJhc2VVcmwgPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlVXJsO1xyXG4iLCJjb25zdCBjYXRjaEVycm9ycyA9IChlcnJvcikgPT4ge1xyXG4gIGxldCBlcnJvck1zZyA9ICcnO1xyXG5cclxuICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgIC8vIElmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIG5vdCByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlIGluIHRoZSByYW5nZSBvZiAyeHhcclxuXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAvLyBpZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgbm8gcmVzcG9uc2Ugd2FzIHJlY2V2aWVkIGZyb20gc2VydmVyXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlcXVlc3Q7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGlmIHNvbWV0aGluZyBlbHNlIGhhcHBlbmVkIHdoaWxlIG1ha2luZyB0aGUgcmVxdWVzdFxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5tZXNzYWdlO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxuIHJldHVybiBlcnJvck1zZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9