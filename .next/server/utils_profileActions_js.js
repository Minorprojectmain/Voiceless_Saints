exports.id = "utils_profileActions_js";
exports.ids = ["utils_profileActions_js"];
exports.modules = {

/***/ "./utils/profileActions.js":
/*!*********************************!*\
  !*** ./utils/profileActions.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "followUser": function() { return /* binding */ followUser; },
/* harmony export */   "unfollowUser": function() { return /* binding */ unfollowUser; },
/* harmony export */   "profileUpdate": function() { return /* binding */ profileUpdate; },
/* harmony export */   "passwordUpdate": function() { return /* binding */ passwordUpdate; },
/* harmony export */   "toggleMessagePopup": function() { return /* binding */ toggleMessagePopup; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: `${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/profile`,
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("token")
  }
});
const followUser = async (userToFollowId, setUserFollowStats) => {
  try {
    await Axios.post(`/follow/${userToFollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: [...prev.following, {
        user: userToFollowId
      }]
    }));
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const unfollowUser = async (userToUnfollowId, setUserFollowStats) => {
  try {
    await Axios.put(`/unfollow/${userToUnfollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: prev.following.filter(following => following.user !== userToUnfollowId)
    }));
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const profileUpdate = async (profile, setLoading, setError, profilePicUrl) => {
  try {
    const {
      address,
      bio,
      facebook,
      youtube,
      twitter,
      instagram
    } = profile;
    await Axios.post(`/update`, {
      address,
      bio,
      facebook,
      youtube,
      twitter,
      instagram,
      profilePicUrl
    });
    setLoading(false);
    next_router__WEBPACK_IMPORTED_MODULE_4___default().reload();
  } catch (error) {
    setError((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
    setLoading(false);
  }
};
const passwordUpdate = async (setSuccess, userPasswords) => {
  const {
    currentPassword,
    newPassword
  } = userPasswords;

  try {
    await Axios.post(`/settings/password`, {
      currentPassword,
      newPassword
    });
    setSuccess(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const toggleMessagePopup = async (popupSetting, setPopupSetting, setSuccess) => {
  try {
    await Axios.post(`/settings/messagePopup`);
    setPopupSetting(!popupSetting);
    setSuccess(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vdXRpbHMvcHJvZmlsZUFjdGlvbnMuanMiXSwibmFtZXMiOlsiQXhpb3MiLCJheGlvcyIsImJhc2VVUkwiLCJiYXNlVXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb29raWUiLCJmb2xsb3dVc2VyIiwidXNlclRvRm9sbG93SWQiLCJzZXRVc2VyRm9sbG93U3RhdHMiLCJwb3N0IiwicHJldiIsImZvbGxvd2luZyIsInVzZXIiLCJlcnJvciIsImFsZXJ0IiwiY2F0Y2hFcnJvcnMiLCJ1bmZvbGxvd1VzZXIiLCJ1c2VyVG9VbmZvbGxvd0lkIiwicHV0IiwiZmlsdGVyIiwicHJvZmlsZVVwZGF0ZSIsInByb2ZpbGUiLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJwcm9maWxlUGljVXJsIiwiYWRkcmVzcyIsImJpbyIsImZhY2Vib29rIiwieW91dHViZSIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJSb3V0ZXIiLCJwYXNzd29yZFVwZGF0ZSIsInNldFN1Y2Nlc3MiLCJ1c2VyUGFzc3dvcmRzIiwiY3VycmVudFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJ0b2dnbGVNZXNzYWdlUG9wdXAiLCJwb3B1cFNldHRpbmciLCJzZXRQb3B1cFNldHRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLG1EQUFBLENBQWE7QUFDekJDLFNBQU8sRUFBRyxHQUFFQyw2Q0FBUSxjQURLO0FBRXpCQyxTQUFPLEVBQUU7QUFBRUMsaUJBQWEsRUFBRUMsb0RBQUEsQ0FBVyxPQUFYO0FBQWpCO0FBRmdCLENBQWIsQ0FBZDtBQUtPLE1BQU1DLFVBQVUsR0FBRyxPQUFPQyxjQUFQLEVBQXVCQyxrQkFBdkIsS0FBOEM7QUFDdEUsTUFBSTtBQUNGLFVBQU1ULEtBQUssQ0FBQ1UsSUFBTixDQUFZLFdBQVVGLGNBQWUsRUFBckMsQ0FBTjtBQUVBQyxzQkFBa0IsQ0FBQ0UsSUFBSSxvQ0FDbEJBLElBRGtCO0FBRXJCQyxlQUFTLEVBQUUsQ0FBQyxHQUFHRCxJQUFJLENBQUNDLFNBQVQsRUFBb0I7QUFBRUMsWUFBSSxFQUFFTDtBQUFSLE9BQXBCO0FBRlUsTUFBTCxDQUFsQjtBQUlELEdBUEQsQ0FPRSxPQUFPTSxLQUFQLEVBQWM7QUFDZEMsU0FBSyxDQUFDQyxxREFBVyxDQUFDRixLQUFELENBQVosQ0FBTDtBQUNEO0FBQ0YsQ0FYTTtBQWFBLE1BQU1HLFlBQVksR0FBRyxPQUFPQyxnQkFBUCxFQUF5QlQsa0JBQXpCLEtBQWdEO0FBQzFFLE1BQUk7QUFDRixVQUFNVCxLQUFLLENBQUNtQixHQUFOLENBQVcsYUFBWUQsZ0JBQWlCLEVBQXhDLENBQU47QUFFQVQsc0JBQWtCLENBQUNFLElBQUksb0NBQ2xCQSxJQURrQjtBQUVyQkMsZUFBUyxFQUFFRCxJQUFJLENBQUNDLFNBQUwsQ0FBZVEsTUFBZixDQUFzQlIsU0FBUyxJQUFJQSxTQUFTLENBQUNDLElBQVYsS0FBbUJLLGdCQUF0RDtBQUZVLE1BQUwsQ0FBbEI7QUFJRCxHQVBELENBT0UsT0FBT0osS0FBUCxFQUFjO0FBQ2RDLFNBQUssQ0FBQ0MscURBQVcsQ0FBQ0YsS0FBRCxDQUFaLENBQUw7QUFDRDtBQUNGLENBWE07QUFhQSxNQUFNTyxhQUFhLEdBQUcsT0FBT0MsT0FBUCxFQUFnQkMsVUFBaEIsRUFBNEJDLFFBQTVCLEVBQXNDQyxhQUF0QyxLQUF3RDtBQUNuRixNQUFJO0FBQ0YsVUFBTTtBQUFFQyxhQUFGO0FBQVVDLFNBQVY7QUFBZUMsY0FBZjtBQUF5QkMsYUFBekI7QUFBa0NDLGFBQWxDO0FBQTJDQztBQUEzQyxRQUF5RFQsT0FBL0Q7QUFFQSxVQUFNdEIsS0FBSyxDQUFDVSxJQUFOLENBQVksU0FBWixFQUFzQjtBQUMxQmdCLGFBRDBCO0FBRTFCQyxTQUYwQjtBQUcxQkMsY0FIMEI7QUFJMUJDLGFBSjBCO0FBSzFCQyxhQUwwQjtBQU0xQkMsZUFOMEI7QUFPMUJOO0FBUDBCLEtBQXRCLENBQU47QUFVQUYsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBUyw2REFBQTtBQUNELEdBZkQsQ0FlRSxPQUFPbEIsS0FBUCxFQUFjO0FBQ2RVLFlBQVEsQ0FBQ1IscURBQVcsQ0FBQ0YsS0FBRCxDQUFaLENBQVI7QUFDQVMsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNEO0FBQ0YsQ0FwQk07QUF1QkEsTUFBTVUsY0FBYyxHQUFHLE9BQU9DLFVBQVAsRUFBbUJDLGFBQW5CLEtBQXFDO0FBQ2pFLFFBQU07QUFBRUMsbUJBQUY7QUFBbUJDO0FBQW5CLE1BQW1DRixhQUF6Qzs7QUFDQSxNQUFJO0FBQ0YsVUFBTW5DLEtBQUssQ0FBQ1UsSUFBTixDQUFZLG9CQUFaLEVBQWlDO0FBQUUwQixxQkFBRjtBQUFtQkM7QUFBbkIsS0FBakMsQ0FBTjtBQUVBSCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsR0FKRCxDQUlFLE9BQU9wQixLQUFQLEVBQWM7QUFDZEMsU0FBSyxDQUFDQyxxREFBVyxDQUFDRixLQUFELENBQVosQ0FBTDtBQUNEO0FBQ0YsQ0FUTTtBQVdBLE1BQU13QixrQkFBa0IsR0FBRyxPQUFPQyxZQUFQLEVBQXFCQyxlQUFyQixFQUFzQ04sVUFBdEMsS0FBcUQ7QUFDckYsTUFBSTtBQUNGLFVBQU1sQyxLQUFLLENBQUNVLElBQU4sQ0FBWSx3QkFBWixDQUFOO0FBRUE4QixtQkFBZSxDQUFDLENBQUNELFlBQUYsQ0FBZjtBQUNBTCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsR0FMRCxDQUtFLE9BQU9wQixLQUFQLEVBQWM7QUFDZEMsU0FBSyxDQUFDQyxxREFBVyxDQUFDRixLQUFELENBQVosQ0FBTDtBQUNEO0FBQ0YsQ0FUTSxDIiwiZmlsZSI6InV0aWxzX3Byb2ZpbGVBY3Rpb25zX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCI7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi9jYXRjaEVycm9yc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEF4aW9zID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBgJHtiYXNlVXJsfS9hcGkvcHJvZmlsZWAsXHJcbiAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb2xsb3dVc2VyID0gYXN5bmMgKHVzZXJUb0ZvbGxvd0lkLCBzZXRVc2VyRm9sbG93U3RhdHMpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL2ZvbGxvdy8ke3VzZXJUb0ZvbGxvd0lkfWApO1xyXG5cclxuICAgIHNldFVzZXJGb2xsb3dTdGF0cyhwcmV2ID0+ICh7XHJcbiAgICAgIC4uLnByZXYsXHJcbiAgICAgIGZvbGxvd2luZzogWy4uLnByZXYuZm9sbG93aW5nLCB7IHVzZXI6IHVzZXJUb0ZvbGxvd0lkIH1dXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuZm9sbG93VXNlciA9IGFzeW5jICh1c2VyVG9VbmZvbGxvd0lkLCBzZXRVc2VyRm9sbG93U3RhdHMpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucHV0KGAvdW5mb2xsb3cvJHt1c2VyVG9VbmZvbGxvd0lkfWApO1xyXG5cclxuICAgIHNldFVzZXJGb2xsb3dTdGF0cyhwcmV2ID0+ICh7XHJcbiAgICAgIC4uLnByZXYsXHJcbiAgICAgIGZvbGxvd2luZzogcHJldi5mb2xsb3dpbmcuZmlsdGVyKGZvbGxvd2luZyA9PiBmb2xsb3dpbmcudXNlciAhPT0gdXNlclRvVW5mb2xsb3dJZClcclxuICAgIH0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZmlsZVVwZGF0ZSA9IGFzeW5jIChwcm9maWxlLCBzZXRMb2FkaW5nLCBzZXRFcnJvciwgcHJvZmlsZVBpY1VybCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGFkZHJlc3MsYmlvLCBmYWNlYm9vaywgeW91dHViZSwgdHdpdHRlciwgaW5zdGFncmFtIH0gPSBwcm9maWxlO1xyXG5cclxuICAgIGF3YWl0IEF4aW9zLnBvc3QoYC91cGRhdGVgLCB7XHJcbiAgICAgIGFkZHJlc3MsXHJcbiAgICAgIGJpbyxcclxuICAgICAgZmFjZWJvb2ssXHJcbiAgICAgIHlvdXR1YmUsXHJcbiAgICAgIHR3aXR0ZXIsXHJcbiAgICAgIGluc3RhZ3JhbSxcclxuICAgICAgcHJvZmlsZVBpY1VybFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICBSb3V0ZXIucmVsb2FkKCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHNldEVycm9yKGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkVXBkYXRlID0gYXN5bmMgKHNldFN1Y2Nlc3MsIHVzZXJQYXNzd29yZHMpID0+IHtcclxuICBjb25zdCB7IGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQgfSA9IHVzZXJQYXNzd29yZHM7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLnBvc3QoYC9zZXR0aW5ncy9wYXNzd29yZGAsIHsgY3VycmVudFBhc3N3b3JkLCBuZXdQYXNzd29yZCB9KTtcclxuXHJcbiAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVNZXNzYWdlUG9wdXAgPSBhc3luYyAocG9wdXBTZXR0aW5nLCBzZXRQb3B1cFNldHRpbmcsIHNldFN1Y2Nlc3MpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL3NldHRpbmdzL21lc3NhZ2VQb3B1cGApO1xyXG5cclxuICAgIHNldFBvcHVwU2V0dGluZyghcG9wdXBTZXR0aW5nKTtcclxuICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==