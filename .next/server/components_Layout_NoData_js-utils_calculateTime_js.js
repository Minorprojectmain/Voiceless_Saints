exports.id = "components_Layout_NoData_js-utils_calculateTime_js";
exports.ids = ["components_Layout_NoData_js-utils_calculateTime_js"];
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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi91dGlscy9jYWxjdWxhdGVUaW1lLmpzIl0sIm5hbWVzIjpbIk5vUHJvZmlsZVBvc3RzIiwiTm9Gb2xsb3dEYXRhIiwiZm9sbG93ZXJzQ29tcG9uZW50IiwiZm9sbG93aW5nQ29tcG9uZW50IiwiTm9NZXNzYWdlcyIsIk5vUG9zdHMiLCJOb1Byb2ZpbGUiLCJjYWxjdWxhdGVUaW1lIiwiY3JlYXRlZEF0IiwidG9kYXkiLCJtb21lbnQiLCJEYXRlIiwibm93IiwicG9zdERhdGUiLCJkaWZmSW5Ib3VycyIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxjQUFjLEdBQUcsbUJBQzVCO0FBQUEsMEJBQ0UsOERBQUMsc0RBQUQ7QUFBUyxRQUFJLE1BQWI7QUFBYyxRQUFJLEVBQUMsS0FBbkI7QUFBeUIsVUFBTSxFQUFDLE9BQWhDO0FBQXdDLFdBQU8sRUFBQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxxREFBRDtBQUFRLFFBQUksRUFBQywyQkFBYjtBQUF5QyxXQUFPLEVBQUMsU0FBakQ7QUFBMkQsTUFBRSxFQUFDLEdBQTlEO0FBQWtFLFFBQUksRUFBQztBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxnQkFESztBQU9BLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVDLG9CQUFGO0FBQXNCQztBQUF0QixDQUFELGtCQUMxQjtBQUFBLGFBQ0dELGtCQUFrQixpQkFDakIsOERBQUMsc0RBQUQ7QUFBUyxRQUFJLEVBQUMsY0FBZDtBQUE2QixRQUFJLE1BQWpDO0FBQWtDLFdBQU8sRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosRUFLR0Msa0JBQWtCLGlCQUNqQiw4REFBQyxzREFBRDtBQUFTLFFBQUksRUFBQyxjQUFkO0FBQTZCLFFBQUksTUFBakM7QUFBa0MsV0FBTyxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSjtBQUFBLGdCQURLO0FBWUEsTUFBTUMsVUFBVSxHQUFHLG1CQUN4Qiw4REFBQyxzREFBRDtBQUNFLE1BQUksTUFETjtBQUVFLE1BQUksRUFBQyxnQkFGUDtBQUdFLFFBQU0sRUFBQyxPQUhUO0FBSUUsU0FBTyxFQUFDO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURLO0FBU0EsTUFBTUMsT0FBTyxHQUFHLG1CQUNyQiw4REFBQyxzREFBRDtBQUNFLE1BQUksTUFETjtBQUVFLE1BQUksRUFBQyxLQUZQO0FBR0UsUUFBTSxFQUFDLE1BSFQ7QUFJRSxTQUFPLEVBQUM7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREs7QUFTQSxNQUFNQyxTQUFTLEdBQUcsbUJBQ3ZCLDhEQUFDLHNEQUFEO0FBQVMsTUFBSSxNQUFiO0FBQWMsTUFBSSxFQUFDLEtBQW5CO0FBQXlCLFFBQU0sRUFBQyxNQUFoQztBQUF1QyxTQUFPLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURLLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDUDtBQUNBOztBQUVBLE1BQU1DLGFBQWEsR0FBR0MsU0FBUyxJQUFJO0FBQ2pDLFFBQU1DLEtBQUssR0FBR0MsNkNBQU0sQ0FBQ0MsSUFBSSxDQUFDQyxHQUFMLEVBQUQsQ0FBcEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdILDZDQUFNLENBQUNGLFNBQUQsQ0FBdkI7QUFDQSxRQUFNTSxXQUFXLEdBQUdMLEtBQUssQ0FBQ00sSUFBTixDQUFXRixRQUFYLEVBQXFCLE9BQXJCLENBQXBCOztBQUVBLE1BQUlDLFdBQVcsR0FBRyxFQUFsQixFQUFzQjtBQUNwQix3QkFDRTtBQUFBLHdDQUNRLDhEQUFDLHFEQUFEO0FBQVEsY0FBTSxFQUFDLFNBQWY7QUFBQSxrQkFBMEJOO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFI7QUFBQSxvQkFERjtBQUtELEdBTkQsTUFNTyxJQUFJTSxXQUFXLEdBQUcsRUFBZCxJQUFvQkEsV0FBVyxHQUFHLEVBQXRDLEVBQTBDO0FBQy9DLHdCQUNFO0FBQUEsNENBQ1ksOERBQUMscURBQUQ7QUFBUSxjQUFNLEVBQUMsU0FBZjtBQUFBLGtCQUEwQk47QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEWjtBQUFBLG9CQURGO0FBS0QsR0FOTSxNQU1BLElBQUlNLFdBQVcsR0FBRyxFQUFsQixFQUFzQjtBQUMzQix3QkFBTyw4REFBQyxxREFBRDtBQUFRLFlBQU0sRUFBQyxvQkFBZjtBQUFBLGdCQUFxQ047QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEO0FBQ0YsQ0FwQkQ7O0FBc0JBLCtEQUFlRCxhQUFmLEUiLCJmaWxlIjoiY29tcG9uZW50c19MYXlvdXRfTm9EYXRhX2pzLXV0aWxzX2NhbGN1bGF0ZVRpbWVfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Byb2ZpbGVQb3N0cyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPE1lc3NhZ2UgaW5mbyBpY29uPVwibWVoXCIgaGVhZGVyPVwiU29ycnlcIiBjb250ZW50PVwiVXNlciBoYXMgbm90IHBvc3RlZCBhbnl0aGluZyB5ZXQhXCIgLz5cclxuICAgIDxCdXR0b24gaWNvbj1cImxvbmcgYXJyb3cgYWx0ZXJuYXRlIGxlZnRcIiBjb250ZW50PVwiR28gQmFja1wiIGFzPVwiYVwiIGhyZWY9XCIvXCIgLz5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb0ZvbGxvd0RhdGEgPSAoeyBmb2xsb3dlcnNDb21wb25lbnQsIGZvbGxvd2luZ0NvbXBvbmVudCB9KSA9PiAoXHJcbiAgPD5cclxuICAgIHtmb2xsb3dlcnNDb21wb25lbnQgJiYgKFxyXG4gICAgICA8TWVzc2FnZSBpY29uPVwidXNlciBvdXRsaW5lXCIgaW5mbyBjb250ZW50PVwiVXNlciBkb2VzIG5vdCBoYXZlIGZvbGxvd2Vyc1wiIC8+XHJcbiAgICApfVxyXG5cclxuICAgIHtmb2xsb3dpbmdDb21wb25lbnQgJiYgKFxyXG4gICAgICA8TWVzc2FnZSBpY29uPVwidXNlciBvdXRsaW5lXCIgaW5mbyBjb250ZW50PVwiVXNlciBkb2VzIG5vdCBmb2xsb3cgYW55IHVzZXJzXCIgLz5cclxuICAgICl9XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9NZXNzYWdlcyA9ICgpID0+IChcclxuICA8TWVzc2FnZVxyXG4gICAgaW5mb1xyXG4gICAgaWNvbj1cInRlbGVncmFtIHBsYW5lXCJcclxuICAgIGhlYWRlcj1cIlNvcnJ5XCJcclxuICAgIGNvbnRlbnQ9XCJZb3UgaGF2ZSBub3QgbWVzc2FnZWQgYW55b25lIHlldC5TZWFyY2ggYWJvdmUgdG8gbWVzc2FnZSBzb21lb25lIVwiXHJcbiAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Bvc3RzID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlXHJcbiAgICBpbmZvXHJcbiAgICBpY29uPVwibWVoXCJcclxuICAgIGhlYWRlcj1cIkhleSFcIlxyXG4gICAgY29udGVudD1cIk5vIFBvc3RzLiBNYWtlIHN1cmUgeW91IGhhdmUgZm9sbG93ZWQgc29tZW9uZS5cIlxyXG4gIC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qcm9maWxlID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIkhleSFcIiBjb250ZW50PVwiTm8gUHJvZmlsZSBGb3VuZC5cIiAvPlxyXG4pOyIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcclxuXHJcbmNvbnN0IGNhbGN1bGF0ZVRpbWUgPSBjcmVhdGVkQXQgPT4ge1xyXG4gIGNvbnN0IHRvZGF5ID0gbW9tZW50KERhdGUubm93KCkpO1xyXG4gIGNvbnN0IHBvc3REYXRlID0gbW9tZW50KGNyZWF0ZWRBdCk7XHJcbiAgY29uc3QgZGlmZkluSG91cnMgPSB0b2RheS5kaWZmKHBvc3REYXRlLCBcImhvdXJzXCIpO1xyXG5cclxuICBpZiAoZGlmZkluSG91cnMgPCAyNCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICBUb2RheSA8TW9tZW50IGZvcm1hdD1cImhoOm1tIEFcIj57Y3JlYXRlZEF0fTwvTW9tZW50PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChkaWZmSW5Ib3VycyA+IDI0ICYmIGRpZmZJbkhvdXJzIDwgMzYpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgWWVzdGVyZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGRpZmZJbkhvdXJzID4gMzYpIHtcclxuICAgIHJldHVybiA8TW9tZW50IGZvcm1hdD1cIkREL01NL1lZWVkgaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhbGN1bGF0ZVRpbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==