exports.id = "components_Layout_NoData_js-utils_calculateTime_js-utils_profileActions_js";
exports.ids = ["components_Layout_NoData_js-utils_calculateTime_js-utils_profileActions_js"];
exports.modules = {

/***/ "./components/Layout/NoData.js":
/*!*************************************!*\
  !*** ./components/Layout/NoData.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoProfilePosts": function() { return /* binding */ NoProfilePosts; },
/* harmony export */   "NoFollowData": function() { return /* binding */ NoFollowData; },
/* harmony export */   "NoMessages": function() { return /* binding */ NoMessages; },
/* harmony export */   "NoPosts": function() { return /* binding */ NoPosts; },
/* harmony export */   "NoProfile": function() { return /* binding */ NoProfile; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Layout\\NoData.js";

const NoProfilePosts = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    info: true,
    icon: "meh",
    header: "Sorry",
    content: "User has not posted anything yet!"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "long arrow alternate left",
    content: "Go Back",
    as: "a",
    href: "/"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined)]
}, void 0, true);
const NoFollowData = ({
  followersComponent,
  followingComponent
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [followersComponent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "user outline",
    info: true,
    content: "User does not have followers"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }, undefined), followingComponent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "user outline",
    info: true,
    content: "User does not follow any users"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }, undefined)]
}, void 0, true);
const NoMessages = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "telegram plane",
  header: "Sorry",
  content: "You have not messaged anyone yet.Search above to message someone!"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 23,
  columnNumber: 3
}, undefined);
const NoPosts = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Posts. Make sure you have followed someone."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 32,
  columnNumber: 3
}, undefined);
const NoProfile = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Profile Found."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 41,
  columnNumber: 3
}, undefined);

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

/***/ "./utils/calculateTime.js":
/*!********************************!*\
  !*** ./utils/calculateTime.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\utils\\calculateTime.js";



const calculateTime = createdAt => {
  const today = moment__WEBPACK_IMPORTED_MODULE_1___default()(Date.now());
  const postDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(createdAt);
  const diffInHours = today.diff(postDate, "hours");

  if (diffInHours < 24) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: ["Today ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
        format: "hh:mm A",
        children: createdAt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }, undefined)]
    }, void 0, true);
  } else if (diffInHours > 24 && diffInHours < 36) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: ["Yesterday ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
        format: "hh:mm A",
        children: createdAt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 19
      }, undefined)]
    }, void 0, true);
  } else if (diffInHours > 36) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
      format: "DD/MM/YYYY hh:mm A",
      children: createdAt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }, undefined);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (calculateTime);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi91dGlscy9jYWxjdWxhdGVUaW1lLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi91dGlscy9jYXRjaEVycm9ycy5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vdXRpbHMvcHJvZmlsZUFjdGlvbnMuanMiXSwibmFtZXMiOlsiTm9Qcm9maWxlUG9zdHMiLCJOb0ZvbGxvd0RhdGEiLCJmb2xsb3dlcnNDb21wb25lbnQiLCJmb2xsb3dpbmdDb21wb25lbnQiLCJOb01lc3NhZ2VzIiwiTm9Qb3N0cyIsIk5vUHJvZmlsZSIsImJhc2VVcmwiLCJjYWxjdWxhdGVUaW1lIiwiY3JlYXRlZEF0IiwidG9kYXkiLCJtb21lbnQiLCJEYXRlIiwibm93IiwicG9zdERhdGUiLCJkaWZmSW5Ib3VycyIsImRpZmYiLCJjYXRjaEVycm9ycyIsImVycm9yIiwiZXJyb3JNc2ciLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwicmVxdWVzdCIsIm1lc3NhZ2UiLCJBeGlvcyIsImF4aW9zIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29va2llIiwiZm9sbG93VXNlciIsInVzZXJUb0ZvbGxvd0lkIiwic2V0VXNlckZvbGxvd1N0YXRzIiwicG9zdCIsInByZXYiLCJmb2xsb3dpbmciLCJ1c2VyIiwiYWxlcnQiLCJ1bmZvbGxvd1VzZXIiLCJ1c2VyVG9VbmZvbGxvd0lkIiwicHV0IiwiZmlsdGVyIiwicHJvZmlsZVVwZGF0ZSIsInByb2ZpbGUiLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJwcm9maWxlUGljVXJsIiwiYWRkcmVzcyIsImJpbyIsImZhY2Vib29rIiwieW91dHViZSIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJSb3V0ZXIiLCJwYXNzd29yZFVwZGF0ZSIsInNldFN1Y2Nlc3MiLCJ1c2VyUGFzc3dvcmRzIiwiY3VycmVudFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJ0b2dnbGVNZXNzYWdlUG9wdXAiLCJwb3B1cFNldHRpbmciLCJzZXRQb3B1cFNldHRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxjQUFjLEdBQUcsbUJBQzVCO0FBQUEsMEJBQ0UsOERBQUMsc0RBQUQ7QUFBUyxRQUFJLE1BQWI7QUFBYyxRQUFJLEVBQUMsS0FBbkI7QUFBeUIsVUFBTSxFQUFDLE9BQWhDO0FBQXdDLFdBQU8sRUFBQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxxREFBRDtBQUFRLFFBQUksRUFBQywyQkFBYjtBQUF5QyxXQUFPLEVBQUMsU0FBakQ7QUFBMkQsTUFBRSxFQUFDLEdBQTlEO0FBQWtFLFFBQUksRUFBQztBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxnQkFESztBQU9BLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVDLG9CQUFGO0FBQXNCQztBQUF0QixDQUFELGtCQUMxQjtBQUFBLGFBQ0dELGtCQUFrQixpQkFDakIsOERBQUMsc0RBQUQ7QUFBUyxRQUFJLEVBQUMsY0FBZDtBQUE2QixRQUFJLE1BQWpDO0FBQWtDLFdBQU8sRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosRUFLR0Msa0JBQWtCLGlCQUNqQiw4REFBQyxzREFBRDtBQUFTLFFBQUksRUFBQyxjQUFkO0FBQTZCLFFBQUksTUFBakM7QUFBa0MsV0FBTyxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSjtBQUFBLGdCQURLO0FBWUEsTUFBTUMsVUFBVSxHQUFHLG1CQUN4Qiw4REFBQyxzREFBRDtBQUNFLE1BQUksTUFETjtBQUVFLE1BQUksRUFBQyxnQkFGUDtBQUdFLFFBQU0sRUFB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dWxhdGVUaW1lX2pzLXV0aWxzX3Byb2ZpbGVBY3Rpb25zX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qcm9maWxlUG9zdHMgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIlNvcnJ5XCIgY29udGVudD1cIlVzZXIgaGFzIG5vdCBwb3N0ZWQgYW55dGhpbmcgeWV0IVwiIC8+XHJcbiAgICA8QnV0dG9uIGljb249XCJsb25nIGFycm93IGFsdGVybmF0ZSBsZWZ0XCIgY29udGVudD1cIkdvIEJhY2tcIiBhcz1cImFcIiBocmVmPVwiL1wiIC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Gb2xsb3dEYXRhID0gKHsgZm9sbG93ZXJzQ29tcG9uZW50LCBmb2xsb3dpbmdDb21wb25lbnQgfSkgPT4gKFxyXG4gIDw+XHJcbiAgICB7Zm9sbG93ZXJzQ29tcG9uZW50ICYmIChcclxuICAgICAgPE1lc3NhZ2UgaWNvbj1cInVzZXIgb3V0bGluZVwiIGluZm8gY29udGVudD1cIlVzZXIgZG9lcyBub3QgaGF2ZSBmb2xsb3dlcnNcIiAvPlxyXG4gICAgKX1cclxuXHJcbiAgICB7Zm9sbG93aW5nQ29tcG9uZW50ICYmIChcclxuICAgICAgPE1lc3NhZ2UgaWNvbj1cInVzZXIgb3V0bGluZVwiIGluZm8gY29udGVudD1cIlVzZXIgZG9lcyBub3QgZm9sbG93IGFueSB1c2Vyc1wiIC8+XHJcbiAgICApfVxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vTWVzc2FnZXMgPSAoKSA9PiAoXHJcbiAgPE1lc3NhZ2VcclxuICAgIGluZm9cclxuICAgIGljb249XCJ0ZWxlZ3JhbSBwbGFuZVwiXHJcbiAgICBoZWFkZXI9XCJTb3JyeVwiXHJcbiAgICBjb250ZW50PVwiWW91IGhhdmUgbm90IG1lc3NhZ2VkIGFueW9uZSB5ZXQuU2VhcmNoIGFib3ZlIHRvIG1lc3NhZ2Ugc29tZW9uZSFcIlxyXG4gIC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qb3N0cyA9ICgpID0+IChcclxuICA8TWVzc2FnZVxyXG4gICAgaW5mb1xyXG4gICAgaWNvbj1cIm1laFwiXHJcbiAgICBoZWFkZXI9XCJIZXkhXCJcclxuICAgIGNvbnRlbnQ9XCJObyBQb3N0cy4gTWFrZSBzdXJlIHlvdSBoYXZlIGZvbGxvd2VkIHNvbWVvbmUuXCJcclxuICAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUHJvZmlsZSA9ICgpID0+IChcclxuICA8TWVzc2FnZSBpbmZvIGljb249XCJtZWhcIiBoZWFkZXI9XCJIZXkhXCIgY29udGVudD1cIk5vIFByb2ZpbGUgRm91bmQuXCIgLz5cclxuKTsiLCJjb25zdCBiYXNlVXJsID1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZVVybDtcclxuIiwiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiO1xyXG5cclxuY29uc3QgY2FsY3VsYXRlVGltZSA9IGNyZWF0ZWRBdCA9PiB7XHJcbiAgY29uc3QgdG9kYXkgPSBtb21lbnQoRGF0ZS5ub3coKSk7XHJcbiAgY29uc3QgcG9zdERhdGUgPSBtb21lbnQoY3JlYXRlZEF0KTtcclxuICBjb25zdCBkaWZmSW5Ib3VycyA9IHRvZGF5LmRpZmYocG9zdERhdGUsIFwiaG91cnNcIik7XHJcblxyXG4gIGlmIChkaWZmSW5Ib3VycyA8IDI0KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIFRvZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGRpZmZJbkhvdXJzID4gMjQgJiYgZGlmZkluSG91cnMgPCAzNikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICBZZXN0ZXJkYXkgPE1vbWVudCBmb3JtYXQ9XCJoaDptbSBBXCI+e2NyZWF0ZWRBdH08L01vbWVudD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoZGlmZkluSG91cnMgPiAzNikge1xyXG4gICAgcmV0dXJuIDxNb21lbnQgZm9ybWF0PVwiREQvTU0vWVlZWSBoaDptbSBBXCI+e2NyZWF0ZWRBdH08L01vbWVudD47XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FsY3VsYXRlVGltZTsiLCJjb25zdCBjYXRjaEVycm9ycyA9IChlcnJvcikgPT4ge1xyXG4gIGxldCBlcnJvck1zZyA9ICcnO1xyXG5cclxuICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgIC8vIElmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIG5vdCByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlIGluIHRoZSByYW5nZSBvZiAyeHhcclxuXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAvLyBpZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgbm8gcmVzcG9uc2Ugd2FzIHJlY2V2aWVkIGZyb20gc2VydmVyXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlcXVlc3Q7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGlmIHNvbWV0aGluZyBlbHNlIGhhcHBlbmVkIHdoaWxlIG1ha2luZyB0aGUgcmVxdWVzdFxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5tZXNzYWdlO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxuIHJldHVybiBlcnJvck1zZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuL2NhdGNoRXJyb3JzXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlYCxcclxuICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1VzZXIgPSBhc3luYyAodXNlclRvRm9sbG93SWQsIHNldFVzZXJGb2xsb3dTdGF0cykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvZm9sbG93LyR7dXNlclRvRm9sbG93SWR9YCk7XHJcblxyXG4gICAgc2V0VXNlckZvbGxvd1N0YXRzKHByZXYgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgZm9sbG93aW5nOiBbLi4ucHJldi5mb2xsb3dpbmcsIHsgdXNlcjogdXNlclRvRm9sbG93SWQgfV1cclxuICAgIH0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdW5mb2xsb3dVc2VyID0gYXN5bmMgKHVzZXJUb1VuZm9sbG93SWQsIHNldFVzZXJGb2xsb3dTdGF0cykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wdXQoYC91bmZvbGxvdy8ke3VzZXJUb1VuZm9sbG93SWR9YCk7XHJcblxyXG4gICAgc2V0VXNlckZvbGxvd1N0YXRzKHByZXYgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgZm9sbG93aW5nOiBwcmV2LmZvbGxvd2luZy5maWx0ZXIoZm9sbG93aW5nID0+IGZvbGxvd2luZy51c2VyICE9PSB1c2VyVG9VbmZvbGxvd0lkKVxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlVXBkYXRlID0gYXN5bmMgKHByb2ZpbGUsIHNldExvYWRpbmcsIHNldEVycm9yLCBwcm9maWxlUGljVXJsKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgYWRkcmVzcyxiaW8sIGZhY2Vib29rLCB5b3V0dWJlLCB0d2l0dGVyLCBpbnN0YWdyYW0gfSA9IHByb2ZpbGU7XHJcblxyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL3VwZGF0ZWAsIHtcclxuICAgICAgYWRkcmVzcyxcclxuICAgICAgYmlvLFxyXG4gICAgICBmYWNlYm9vayxcclxuICAgICAgeW91dHViZSxcclxuICAgICAgdHdpdHRlcixcclxuICAgICAgaW5zdGFncmFtLFxyXG4gICAgICBwcm9maWxlUGljVXJsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIFJvdXRlci5yZWxvYWQoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgc2V0RXJyb3IoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcGFzc3dvcmRVcGRhdGUgPSBhc3luYyAoc2V0U3VjY2VzcywgdXNlclBhc3N3b3JkcykgPT4ge1xyXG4gIGNvbnN0IHsgY3VycmVudFBhc3N3b3JkLCBuZXdQYXNzd29yZCB9ID0gdXNlclBhc3N3b3JkcztcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL3NldHRpbmdzL3Bhc3N3b3JkYCwgeyBjdXJyZW50UGFzc3dvcmQsIG5ld1Bhc3N3b3JkIH0pO1xyXG5cclxuICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZU1lc3NhZ2VQb3B1cCA9IGFzeW5jIChwb3B1cFNldHRpbmcsIHNldFBvcHVwU2V0dGluZywgc2V0U3VjY2VzcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvc2V0dGluZ3MvbWVzc2FnZVBvcHVwYCk7XHJcblxyXG4gICAgc2V0UG9wdXBTZXR0aW5nKCFwb3B1cFNldHRpbmcpO1xyXG4gICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9