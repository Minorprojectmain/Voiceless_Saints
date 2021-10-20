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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vdXRpbHMvYXV0aFVzZXIuanMiXSwibmFtZXMiOlsicmVnaXN0ZXJVc2VyIiwidXNlciIsInByb2ZpbGVQaWNVcmwiLCJzZXRFcnJvciIsInNldExvYWRpbmciLCJyZXMiLCJheGlvcyIsImJhc2VVcmwiLCJzZXRUb2tlbiIsImRhdGEiLCJlcnJvciIsImVycm9yTXNnIiwiY2F0Y2hFcnJvcnMiLCJsb2dpblVzZXIiLCJyZWRpcmVjdFVzZXIiLCJjdHgiLCJsb2NhdGlvbiIsInJlcSIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwiUm91dGVyIiwidG9rZW4iLCJjb29raWUiLCJsb2dvdXRVc2VyIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFlBQVksR0FBQyxPQUFNQyxJQUFOLEVBQVdDLGFBQVgsRUFBeUJDLFFBQXpCLEVBQWtDQyxVQUFsQyxLQUErQztBQUNyRSxNQUFHO0FBQ0gsVUFBTUMsR0FBRyxHQUFDLE1BQU1DLGlEQUFBLENBQVksR0FBRUMsNkNBQVEsYUFBdEIsRUFBbUM7QUFBQ04sVUFBRDtBQUFNQztBQUFOLEtBQW5DLENBQWhCO0FBRURNLFlBQVEsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFMLENBQVI7QUFFRSxHQUxELENBS0MsT0FBTUMsS0FBTixFQUFZO0FBQ1gsVUFBTUMsUUFBUSxHQUFHQyxxREFBVyxDQUFDRixLQUFELENBQTVCO0FBQ0FQLFlBQVEsQ0FBQ1EsUUFBRCxDQUFSO0FBQ0Q7QUFDSixDQVZNO0FBWUEsTUFBTUUsU0FBUyxHQUFDLE9BQU1aLElBQU4sRUFBV0UsUUFBWCxFQUFvQkMsVUFBcEIsS0FBaUM7QUFDcEQsTUFBRztBQUNILFVBQU1DLEdBQUcsR0FBQyxNQUFNQyxpREFBQSxDQUFZLEdBQUVDLDZDQUFRLFdBQXRCLEVBQWlDO0FBQUNOO0FBQUQsS0FBakMsQ0FBaEI7QUFFRE8sWUFBUSxDQUFDSCxHQUFHLENBQUNJLElBQUwsQ0FBUjtBQUVFLEdBTEQsQ0FLQyxPQUFNQyxLQUFOLEVBQVk7QUFDWCxVQUFNQyxRQUFRLEdBQUdDLHFEQUFXLENBQUNGLEtBQUQsQ0FBNUI7QUFDQVAsWUFBUSxDQUFDUSxRQUFELENBQVI7QUFDRDtBQUNKLENBVk07QUFZQSxNQUFNRyxZQUFZLEdBQUcsQ0FBQ0MsR0FBRCxFQUFLQyxRQUFMLEtBQWdCO0FBQzFDLE1BQUdELEdBQUcsQ0FBQ0UsR0FBUCxFQUFXO0FBQ1RGLE9BQUcsQ0FBQ1YsR0FBSixDQUFRYSxTQUFSLENBQWtCLEdBQWxCLEVBQXNCO0FBQUNDLGNBQVEsRUFBQ0g7QUFBVixLQUF0QjtBQUNBRCxPQUFHLENBQUNWLEdBQUosQ0FBUWUsR0FBUjtBQUNELEdBSEQsTUFHSztBQUNIQywyREFBQSxDQUFZTCxRQUFaO0FBQ0Q7QUFDRixDQVBNOztBQVFQLE1BQU1SLFFBQVEsR0FBQ2MsS0FBSyxJQUFFO0FBQ2xCQyxzREFBQSxDQUFXLE9BQVgsRUFBbUJELEtBQW5CO0FBQ0FELHlEQUFBLENBQVksR0FBWjtBQUNILENBSEQ7O0FBT08sTUFBTUcsVUFBVSxHQUFHQyxLQUFLLElBQUk7QUFFbkNGLHNEQUFBLENBQVcsV0FBWCxFQUF3QkUsS0FBeEI7QUFDQUYseURBQUEsQ0FBYyxPQUFkO0FBQ0FGLHlEQUFBLENBQVksUUFBWjtBQUNBQSwyREFBQTtBQUlDLENBVE0sQyIsImZpbGUiOiJ1dGlsc19hdXRoVXNlcl9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xyXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSAnLi9jYXRjaEVycm9ycyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlcj1hc3luYyh1c2VyLHByb2ZpbGVQaWNVcmwsc2V0RXJyb3Isc2V0TG9hZGluZyk9PntcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlcz1hd2FpdCBheGlvcy5wb3N0KGAke2Jhc2VVcmx9L2FwaS9zaWdudXBgLHt1c2VyLHByb2ZpbGVQaWNVcmx9KVxyXG5cclxuICAgc2V0VG9rZW4ocmVzLmRhdGEpO1xyXG5cclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnN0IGVycm9yTXNnPSAgY2F0Y2hFcnJvcnMoZXJyb3IpXHJcbiAgICAgIHNldEVycm9yKGVycm9yTXNnKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyPWFzeW5jKHVzZXIsc2V0RXJyb3Isc2V0TG9hZGluZyk9PntcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlcz1hd2FpdCBheGlvcy5wb3N0KGAke2Jhc2VVcmx9L2FwaS9hdXRoYCx7dXNlcn0pXHJcblxyXG4gICBzZXRUb2tlbihyZXMuZGF0YSk7XHJcblxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgY29uc3QgZXJyb3JNc2c9ICBjYXRjaEVycm9ycyhlcnJvcilcclxuICAgICAgc2V0RXJyb3IoZXJyb3JNc2cpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWRpcmVjdFVzZXIgPSAoY3R4LGxvY2F0aW9uKT0+e1xyXG4gIGlmKGN0eC5yZXEpe1xyXG4gICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLHtMb2NhdGlvbjpsb2NhdGlvbn0pXHJcbiAgICBjdHgucmVzLmVuZCgpXHJcbiAgfWVsc2V7XHJcbiAgICBSb3V0ZXIucHVzaChsb2NhdGlvbik7XHJcbiAgfVxyXG59XHJcbmNvbnN0IHNldFRva2VuPXRva2VuPT57XHJcbiAgICBjb29raWUuc2V0KFwidG9rZW5cIix0b2tlbilcclxuICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9IGVtYWlsID0+IHtcclxuXHJcbmNvb2tpZS5zZXQoXCJ1c2VyRW1haWxcIiwgZW1haWwpO1xyXG5jb29raWUucmVtb3ZlKFwidG9rZW5cIik7XHJcblJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG5Sb3V0ZXIucmVsb2FkKCk7XHJcblxyXG5cclxuXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==