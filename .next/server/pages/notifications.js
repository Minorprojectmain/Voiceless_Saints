(function() {
var exports = {};
exports.id = "pages/notifications";
exports.ids = ["pages/notifications"];
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

/***/ "./components/Notifications/CommentNotification.js":
/*!*********************************************************!*\
  !*** ./components/Notifications/CommentNotification.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Notifications\\CommentNotification.js";




function CommentNotification({
  notification
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Event, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Label, {
        image: notification.user.profilePicUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Content, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Summary, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.User, {
              as: "a",
              href: `/${notification.user.username}`,
              children: notification.user.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, this), " ", "commented on your ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: `/post/${notification.post._id}`,
              children: "post."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Date, {
              children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__.default)(notification.date)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this), notification.post.picUrl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Extra, {
          images: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: `/post/${notification.post._id}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: notification.post.picUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Extra, {
          text: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: notification.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (CommentNotification);

/***/ }),

/***/ "./components/Notifications/FollowerNotification.js":
/*!**********************************************************!*\
  !*** ./components/Notifications/FollowerNotification.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Notifications\\FollowerNotification.js";





function FollowerNotification({
  notification,
  loggedUserFollowStats,
  setUserFollowStats
}) {
  const {
    0: disabled,
    1: setDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === notification.user._id).length > 0;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Event, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Label, {
        image: notification.user.profilePicUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Content, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Summary, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.User, {
              as: "a",
              href: `/${notification.user.username}`,
              children: notification.user.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, this), " ", "started following you.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Date, {
              children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__.default)(notification.date)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            position: "absolute",
            right: "5px"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            size: "small",
            compact: true,
            icon: isFollowing ? "check circle" : "add user",
            color: isFollowing ? "instagram" : "twitter",
            disabled: disabled,
            onClick: async () => {
              setDisabled(true);
              isFollowing ? await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_4__.unfollowUser)(notification.user._id, setUserFollowStats) : await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_4__.followUser)(notification.user._id, setUserFollowStats);
              setDisabled(false);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (FollowerNotification);

/***/ }),

/***/ "./components/Notifications/LikeNotification.js":
/*!******************************************************!*\
  !*** ./components/Notifications/LikeNotification.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Notifications\\LikeNotification.js";




function LikeNotification({
  notification
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Event, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Label, {
        image: notification.user.profilePicUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Content, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Summary, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.User, {
              as: "a",
              href: `/${notification.user.username}`,
              children: notification.user.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, this), " ", "liked your ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: `/post/${notification.post._id}`,
              children: "post."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 26
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Date, {
              children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__.default)(notification.date)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this), notification.post.picUrl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Extra, {
          images: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: `/post/${notification.post._id}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: notification.post.picUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (LikeNotification);

/***/ }),

/***/ "./pages/notifications.js":
/*!********************************!*\
  !*** ./pages/notifications.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Notifications_LikeNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Notifications/LikeNotification */ "./components/Notifications/LikeNotification.js");
/* harmony import */ var _components_Notifications_CommentNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Notifications/CommentNotification */ "./components/Notifications/CommentNotification.js");
/* harmony import */ var _components_Notifications_FollowerNotification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Notifications/FollowerNotification */ "./components/Notifications/FollowerNotification.js");


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\pages\\notifications.js";
// import React, { useEffect, useState } from "react";
// import { Feed, Segment, Divider, Container } from "semantic-ui-react";
// import axios from "axios";
// import baseUrl from "../utils/baseUrl";
// import { parseCookies } from "nookies";
// import cookie from "js-cookie";
// import { NoNotifications } from "../components/Layout/NoData";
// import LikeNotification from "../components/Notifications/LikeNotification";
// import CommentNotification from "../components/Notifications/CommentNotification";
// import FollowerNotification from "../components/Notifications/FollowerNotification";
// function Notifications({ notifications, errorLoading }) {
//   // const [loggedUserFollowStats, setUserFollowStats] = useState(userFollowStats);
// console.log(notifications);
//   return (
//     <div>
//       Checking Notification
//     </div>
//   );
// }
// Notifications.getInitialProps = async ctx => {
//   try {
//     const { token } = parseCookies(ctx);
//     const res = await axios.get(`${baseUrl}/api/notifications`, {
//       headers: { Authorization: token }
//     });
//     return { notifications: res.data };
//   } catch (error) {
//     return { errorLoading: true };
//   }
// };
// export default Notifications;











function Notifications({
  notifications,
  errorLoading,
  user,
  userFollowStats
}) {
  const {
    0: loggedUserFollowStats,
    1: setUserFollowStats
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(userFollowStats);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const notificationRead = async () => {
      try {
        await axios__WEBPACK_IMPORTED_MODULE_3___default().post(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__.default}/api/notifications`, {}, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_6___default().get("token")
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    notificationRead();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
      style: {
        marginTop: "1.5rem"
      },
      children: [notifications.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
        color: "teal",
        raised: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            maxHeight: "40rem",
            overflow: "auto",
            height: "40rem",
            position: "relative",
            width: "100%"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed, {
            size: "small",
            children: notifications.map(notification => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [notification.type === "newLike" && notification.post !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Notifications_LikeNotification__WEBPACK_IMPORTED_MODULE_8__.default, {
                notification: notification
              }, notification._id, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 23
              }, this), notification.type === "newComment" && notification.post !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Notifications_CommentNotification__WEBPACK_IMPORTED_MODULE_9__.default, {
                notification: notification
              }, notification._id, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 23
              }, this), notification.type === "newFollower" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Notifications_FollowerNotification__WEBPACK_IMPORTED_MODULE_10__.default, {
                notification: notification,
                loggedUserFollowStats: loggedUserFollowStats,
                setUserFollowStats: setUserFollowStats
              }, notification._id, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 23
              }, this)]
            }, void 0, true))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__.NoNotifications, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

Notifications.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__.default}/api/notifications`, {
      headers: {
        Authorization: token
      }
    });
    return {
      notifications: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Notifications);

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

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-moment");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/notifications.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMvQ29tbWVudE5vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25zL0ZvbGxvd2VyTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMvTGlrZU5vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vcGFnZXMvbm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vdXRpbHMvYmFzZVVybC5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vdXRpbHMvY2FsY3VsYXRlVGltZS5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vdXRpbHMvY2F0Y2hFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwicmVhY3QtbW9tZW50XCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIk5vUHJvZmlsZVBvc3RzIiwiTm9Gb2xsb3dEYXRhIiwiZm9sbG93ZXJzQ29tcG9uZW50IiwiZm9sbG93aW5nQ29tcG9uZW50IiwiTm9NZXNzYWdlcyIsIk5vUG9zdHMiLCJOb1Byb2ZpbGUiLCJDb21tZW50Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uIiwidXNlciIsInByb2ZpbGVQaWNVcmwiLCJ1c2VybmFtZSIsIm5hbWUiLCJwb3N0IiwiX2lkIiwiY2FsY3VsYXRlVGltZSIsImRhdGUiLCJwaWNVcmwiLCJ0ZXh0IiwiRm9sbG93ZXJOb3RpZmljYXRpb24iLCJsb2dnZWRVc2VyRm9sbG93U3RhdHMiLCJzZXRVc2VyRm9sbG93U3RhdHMiLCJkaXNhYmxlZCIsInNldERpc2FibGVkIiwidXNlU3RhdGUiLCJpc0ZvbGxvd2luZyIsImZvbGxvd2luZyIsImxlbmd0aCIsImZpbHRlciIsInBvc2l0aW9uIiwicmlnaHQiLCJ1bmZvbGxvd1VzZXIiLCJmb2xsb3dVc2VyIiwiTGlrZU5vdGlmaWNhdGlvbiIsIk5vdGlmaWNhdGlvbnMiLCJub3RpZmljYXRpb25zIiwiZXJyb3JMb2FkaW5nIiwidXNlckZvbGxvd1N0YXRzIiwidXNlRWZmZWN0Iiwibm90aWZpY2F0aW9uUmVhZCIsImF4aW9zIiwiYmFzZVVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29va2llIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luVG9wIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcCIsInR5cGUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ0b2tlbiIsInBhcnNlQ29va2llcyIsInJlcyIsImRhdGEiLCJjcmVhdGVkQXQiLCJ0b2RheSIsIm1vbWVudCIsIkRhdGUiLCJub3ciLCJwb3N0RGF0ZSIsImRpZmZJbkhvdXJzIiwiZGlmZiIsImNhdGNoRXJyb3JzIiwiZXJyb3JNc2ciLCJyZXNwb25zZSIsInJlcXVlc3QiLCJtZXNzYWdlIiwiQXhpb3MiLCJiYXNlVVJMIiwidXNlclRvRm9sbG93SWQiLCJwcmV2IiwiYWxlcnQiLCJ1c2VyVG9VbmZvbGxvd0lkIiwicHV0IiwicHJvZmlsZVVwZGF0ZSIsInByb2ZpbGUiLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJhZGRyZXNzIiwiYmlvIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwidHdpdHRlciIsImluc3RhZ3JhbSIsIlJvdXRlciIsInBhc3N3b3JkVXBkYXRlIiwic2V0U3VjY2VzcyIsInVzZXJQYXNzd29yZHMiLCJjdXJyZW50UGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsInRvZ2dsZU1lc3NhZ2VQb3B1cCIsInBvcHVwU2V0dGluZyIsInNldFBvcHVwU2V0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsY0FBYyxHQUFHLG1CQUM1QjtBQUFBLDBCQUNFLDhEQUFDLHNEQUFEO0FBQVMsUUFBSSxNQUFiO0FBQWMsUUFBSSxFQUFDLEtBQW5CO0FBQXlCLFVBQU0sRUFBQyxPQUFoQztBQUF3QyxXQUFPLEVBQUM7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMscURBQUQ7QUFBUSxRQUFJLEVBQUMsMkJBQWI7QUFBeUMsV0FBTyxFQUFDLFNBQWpEO0FBQTJELE1BQUUsRUFBQyxHQUE5RDtBQUFrRSxRQUFJLEVBQUM7QUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUEsZ0JBREs7QUFPQSxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFFQyxvQkFBRjtBQUFzQkM7QUFBdEIsQ0FBRCxrQkFDMUI7QUFBQSxhQUNHRCxrQkFBa0Is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LENBS0UsT0FBT2hELEtBQVAsRUFBYztBQUNkaUMsU0FBSyxDQUFDVCxxREFBVyxDQUFDeEIsS0FBRCxDQUFaLENBQUw7QUFDRDtBQUNGLENBVE0sQzs7Ozs7Ozs7Ozs7QUN2RVAsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvbm90aWZpY2F0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUHJvZmlsZVBvc3RzID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8TWVzc2FnZSBpbmZvIGljb249XCJtZWhcIiBoZWFkZXI9XCJTb3JyeVwiIGNvbnRlbnQ9XCJVc2VyIGhhcyBub3QgcG9zdGVkIGFueXRoaW5nIHlldCFcIiAvPlxyXG4gICAgPEJ1dHRvbiBpY29uPVwibG9uZyBhcnJvdyBhbHRlcm5hdGUgbGVmdFwiIGNvbnRlbnQ9XCJHbyBCYWNrXCIgYXM9XCJhXCIgaHJlZj1cIi9cIiAvPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vRm9sbG93RGF0YSA9ICh7IGZvbGxvd2Vyc0NvbXBvbmVudCwgZm9sbG93aW5nQ29tcG9uZW50IH0pID0+IChcclxuICA8PlxyXG4gICAge2ZvbGxvd2Vyc0NvbXBvbmVudCAmJiAoXHJcbiAgICAgIDxNZXNzYWdlIGljb249XCJ1c2VyIG91dGxpbmVcIiBpbmZvIGNvbnRlbnQ9XCJVc2VyIGRvZXMgbm90IGhhdmUgZm9sbG93ZXJzXCIgLz5cclxuICAgICl9XHJcblxyXG4gICAge2ZvbGxvd2luZ0NvbXBvbmVudCAmJiAoXHJcbiAgICAgIDxNZXNzYWdlIGljb249XCJ1c2VyIG91dGxpbmVcIiBpbmZvIGNvbnRlbnQ9XCJVc2VyIGRvZXMgbm90IGZvbGxvdyBhbnkgdXNlcnNcIiAvPlxyXG4gICAgKX1cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb01lc3NhZ2VzID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlXHJcbiAgICBpbmZvXHJcbiAgICBpY29uPVwidGVsZWdyYW0gcGxhbmVcIlxyXG4gICAgaGVhZGVyPVwiU29ycnlcIlxyXG4gICAgY29udGVudD1cIllvdSBoYXZlIG5vdCBtZXNzYWdlZCBhbnlvbmUgeWV0LlNlYXJjaCBhYm92ZSB0byBtZXNzYWdlIHNvbWVvbmUhXCJcclxuICAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUG9zdHMgPSAoKSA9PiAoXHJcbiAgPE1lc3NhZ2VcclxuICAgIGluZm9cclxuICAgIGljb249XCJtZWhcIlxyXG4gICAgaGVhZGVyPVwiSGV5IVwiXHJcbiAgICBjb250ZW50PVwiTm8gUG9zdHMuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBmb2xsb3dlZCBzb21lb25lLlwiXHJcbiAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Byb2ZpbGUgPSAoKSA9PiAoXHJcbiAgPE1lc3NhZ2UgaW5mbyBpY29uPVwibWVoXCIgaGVhZGVyPVwiSGV5IVwiIGNvbnRlbnQ9XCJObyBQcm9maWxlIEZvdW5kLlwiIC8+XHJcbik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyLCBGZWVkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XHJcblxyXG5mdW5jdGlvbiBDb21tZW50Tm90aWZpY2F0aW9uKHtub3RpZmljYXRpb259KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGZWVkLkV2ZW50PlxyXG4gICAgICAgIDxGZWVkLkxhYmVsIGltYWdlPXtub3RpZmljYXRpb24udXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG4gICAgICAgIDxGZWVkLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8RmVlZC5TdW1tYXJ5PlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxGZWVkLlVzZXIgYXM9XCJhXCIgaHJlZj17YC8ke25vdGlmaWNhdGlvbi51c2VyLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAge25vdGlmaWNhdGlvbi51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9GZWVkLlVzZXI+e1wiIFwifVxyXG4gICAgICAgICAgICAgIGNvbW1lbnRlZCBvbiB5b3VyIDxhIGhyZWY9e2AvcG9zdC8ke25vdGlmaWNhdGlvbi5wb3N0Ll9pZH1gfT5wb3N0LjwvYT5cclxuICAgICAgICAgICAgICA8RmVlZC5EYXRlPntjYWxjdWxhdGVUaW1lKG5vdGlmaWNhdGlvbi5kYXRlKX08L0ZlZWQuRGF0ZT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L0ZlZWQuU3VtbWFyeT5cclxuXHJcbiAgICAgICAgICB7bm90aWZpY2F0aW9uLnBvc3QucGljVXJsICYmIChcclxuICAgICAgICAgICAgPEZlZWQuRXh0cmEgaW1hZ2VzPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2AvcG9zdC8ke25vdGlmaWNhdGlvbi5wb3N0Ll9pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtub3RpZmljYXRpb24ucG9zdC5waWNVcmx9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0ZlZWQuRXh0cmE+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPEZlZWQuRXh0cmEgdGV4dD5cclxuICAgICAgICAgICAgPHN0cm9uZz57bm90aWZpY2F0aW9uLnRleHR9PC9zdHJvbmc+XHJcbiAgICAgICAgICA8L0ZlZWQuRXh0cmE+XHJcbiAgICAgICAgPC9GZWVkLkNvbnRlbnQ+XHJcbiAgICAgIDwvRmVlZC5FdmVudD5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnROb3RpZmljYXRpb247XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGZWVkLCBCdXR0b24sIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuaW1wb3J0IHsgZm9sbG93VXNlciwgdW5mb2xsb3dVc2VyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBGb2xsb3dlck5vdGlmaWNhdGlvbih7XHJcbiAgbm90aWZpY2F0aW9uLFxyXG4gIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cyxcclxuICBzZXRVc2VyRm9sbG93U3RhdHNcclxufSkge1xyXG4gIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpc0ZvbGxvd2luZyA9XHJcbiAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmxlbmd0aCA+IDAgJiZcclxuICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcuZmlsdGVyKFxyXG4gICAgICBmb2xsb3dpbmcgPT4gZm9sbG93aW5nLnVzZXIgPT09IG5vdGlmaWNhdGlvbi51c2VyLl9pZFxyXG4gICAgKS5sZW5ndGggPiAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZlZWQuRXZlbnQ+XHJcbiAgICAgICAgPEZlZWQuTGFiZWwgaW1hZ2U9e25vdGlmaWNhdGlvbi51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgPEZlZWQuQ29udGVudD5cclxuICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEZlZWQuVXNlciBhcz1cImFcIiBocmVmPXtgLyR7bm90aWZpY2F0aW9uLnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICA8L0ZlZWQuVXNlcj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgc3RhcnRlZCBmb2xsb3dpbmcgeW91LlxyXG4gICAgICAgICAgICAgIDxGZWVkLkRhdGU+e2NhbGN1bGF0ZVRpbWUobm90aWZpY2F0aW9uLmRhdGUpfTwvRmVlZC5EYXRlPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDwvRmVlZC5TdW1tYXJ5PlxyXG5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgIGNvbXBhY3RcclxuICAgICAgICAgICAgICBpY29uPXtpc0ZvbGxvd2luZyA/IFwiY2hlY2sgY2lyY2xlXCIgOiBcImFkZCB1c2VyXCJ9XHJcbiAgICAgICAgICAgICAgY29sb3I9e2lzRm9sbG93aW5nID8gXCJpbnN0YWdyYW1cIiA6IFwidHdpdHRlclwifVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXREaXNhYmxlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpc0ZvbGxvd2luZ1xyXG4gICAgICAgICAgICAgICAgICA/IGF3YWl0IHVuZm9sbG93VXNlcihub3RpZmljYXRpb24udXNlci5faWQsIHNldFVzZXJGb2xsb3dTdGF0cylcclxuICAgICAgICAgICAgICAgICAgOiBhd2FpdCBmb2xsb3dVc2VyKG5vdGlmaWNhdGlvbi51c2VyLl9pZCwgc2V0VXNlckZvbGxvd1N0YXRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXREaXNhYmxlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRmVlZC5Db250ZW50PlxyXG4gICAgICA8L0ZlZWQuRXZlbnQ+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dlck5vdGlmaWNhdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGZWVkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XHJcblxyXG5mdW5jdGlvbiBMaWtlTm90aWZpY2F0aW9uKHsgbm90aWZpY2F0aW9uIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZlZWQuRXZlbnQ+XHJcbiAgICAgICAgPEZlZWQuTGFiZWwgaW1hZ2U9e25vdGlmaWNhdGlvbi51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgPEZlZWQuQ29udGVudD5cclxuICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEZlZWQuVXNlciBhcz1cImFcIiBocmVmPXtgLyR7bm90aWZpY2F0aW9uLnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICA8L0ZlZWQuVXNlcj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgbGlrZWQgeW91ciA8YSBocmVmPXtgL3Bvc3QvJHtub3RpZmljYXRpb24ucG9zdC5faWR9YH0+cG9zdC48L2E+XHJcbiAgICAgICAgICAgICAgPEZlZWQuRGF0ZT57Y2FsY3VsYXRlVGltZShub3RpZmljYXRpb24uZGF0ZSl9PC9GZWVkLkRhdGU+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgPC9GZWVkLlN1bW1hcnk+XHJcblxyXG4gICAgICAgICAge25vdGlmaWNhdGlvbi5wb3N0LnBpY1VybCAmJiAoXHJcbiAgICAgICAgICAgIDxGZWVkLkV4dHJhIGltYWdlcz5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtgL3Bvc3QvJHtub3RpZmljYXRpb24ucG9zdC5faWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bm90aWZpY2F0aW9uLnBvc3QucGljVXJsfSAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9GZWVkLkV4dHJhPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0ZlZWQuQ29udGVudD5cclxuICAgICAgPC9GZWVkLkV2ZW50PlxyXG4gICAgIDxiciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlrZU5vdGlmaWNhdGlvbjtcclxuIiwiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgRmVlZCwgU2VnbWVudCwgRGl2aWRlciwgQ29udGFpbmVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy8gaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuLy8gaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuLy8gaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbi8vIGltcG9ydCB7IE5vTm90aWZpY2F0aW9ucyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGFcIjtcclxuLy8gaW1wb3J0IExpa2VOb3RpZmljYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9MaWtlTm90aWZpY2F0aW9uXCI7XHJcbi8vIGltcG9ydCBDb21tZW50Tm90aWZpY2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMvQ29tbWVudE5vdGlmaWNhdGlvblwiO1xyXG4vLyBpbXBvcnQgRm9sbG93ZXJOb3RpZmljYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9Gb2xsb3dlck5vdGlmaWNhdGlvblwiO1xyXG5cclxuLy8gZnVuY3Rpb24gTm90aWZpY2F0aW9ucyh7IG5vdGlmaWNhdGlvbnMsIGVycm9yTG9hZGluZyB9KSB7XHJcbi8vICAgLy8gY29uc3QgW2xvZ2dlZFVzZXJGb2xsb3dTdGF0cywgc2V0VXNlckZvbGxvd1N0YXRzXSA9IHVzZVN0YXRlKHVzZXJGb2xsb3dTdGF0cyk7XHJcblxyXG5cclxuLy8gY29uc29sZS5sb2cobm90aWZpY2F0aW9ucyk7XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICBDaGVja2luZyBOb3RpZmljYXRpb25cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbi8vIE5vdGlmaWNhdGlvbnMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblxyXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9ub3RpZmljYXRpb25zYCwge1xyXG4vLyAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH1cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIHJldHVybiB7IG5vdGlmaWNhdGlvbnM6IHJlcy5kYXRhIH07XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIHJldHVybiB7IGVycm9yTG9hZGluZzogdHJ1ZSB9O1xyXG4vLyAgIH1cclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbnM7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZlZWQsIFNlZ21lbnQsIERpdmlkZXIsIENvbnRhaW5lciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBOb05vdGlmaWNhdGlvbnMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhXCI7XHJcbmltcG9ydCBMaWtlTm90aWZpY2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMvTGlrZU5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgQ29tbWVudE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25zL0NvbW1lbnROb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IEZvbGxvd2VyTm90aWZpY2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMvRm9sbG93ZXJOb3RpZmljYXRpb25cIjtcclxuXHJcbmZ1bmN0aW9uIE5vdGlmaWNhdGlvbnMoeyBub3RpZmljYXRpb25zLCBlcnJvckxvYWRpbmcsIHVzZXIsIHVzZXJGb2xsb3dTdGF0cyB9KSB7XHJcbiAgY29uc3QgW2xvZ2dlZFVzZXJGb2xsb3dTdGF0cywgc2V0VXNlckZvbGxvd1N0YXRzXSA9IHVzZVN0YXRlKHVzZXJGb2xsb3dTdGF0cyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBub3RpZmljYXRpb25SZWFkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICBgJHtiYXNlVXJsfS9hcGkvbm90aWZpY2F0aW9uc2AsXHJcbiAgICAgICAgICB7fSxcclxuICAgICAgICAgIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfSB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgbm90aWZpY2F0aW9uUmVhZCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEuNXJlbVwiIH19PlxyXG4gICAgICAgIHtub3RpZmljYXRpb25zLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICA8U2VnbWVudCBjb2xvcj1cInRlYWxcIiByYWlzZWQ+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjQwcmVtXCIsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDByZW1cIixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZlZWQgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9ucy5tYXAobm90aWZpY2F0aW9uID0+IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uLnR5cGUgPT09IFwibmV3TGlrZVwiICYmIG5vdGlmaWNhdGlvbi5wb3N0ICE9PSBudWxsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxMaWtlTm90aWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bm90aWZpY2F0aW9uLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uPXtub3RpZmljYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb24udHlwZSA9PT0gXCJuZXdDb21tZW50XCIgJiYgbm90aWZpY2F0aW9uLnBvc3QgIT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnROb3RpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtub3RpZmljYXRpb24uX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb249e25vdGlmaWNhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge25vdGlmaWNhdGlvbi50eXBlID09PSBcIm5ld0ZvbGxvd2VyXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvbGxvd2VyTm90aWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bm90aWZpY2F0aW9uLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uPXtub3RpZmljYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cz17bG9nZ2VkVXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyRm9sbG93U3RhdHM9e3NldFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0ZlZWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8Tm9Ob3RpZmljYXRpb25zIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5Ob3RpZmljYXRpb25zLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdG9rZW4gfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvbm90aWZpY2F0aW9uc2AsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBub3RpZmljYXRpb25zOiByZXMuZGF0YSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBlcnJvckxvYWRpbmc6IHRydWUgfTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25zO1xyXG4iLCJjb25zdCBiYXNlVXJsID1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZVVybDtcclxuIiwiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiO1xyXG5cclxuY29uc3QgY2FsY3VsYXRlVGltZSA9IGNyZWF0ZWRBdCA9PiB7XHJcbiAgY29uc3QgdG9kYXkgPSBtb21lbnQoRGF0ZS5ub3coKSk7XHJcbiAgY29uc3QgcG9zdERhdGUgPSBtb21lbnQoY3JlYXRlZEF0KTtcclxuICBjb25zdCBkaWZmSW5Ib3VycyA9IHRvZGF5LmRpZmYocG9zdERhdGUsIFwiaG91cnNcIik7XHJcblxyXG4gIGlmIChkaWZmSW5Ib3VycyA8IDI0KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIFRvZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGRpZmZJbkhvdXJzID4gMjQgJiYgZGlmZkluSG91cnMgPCAzNikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICBZZXN0ZXJkYXkgPE1vbWVudCBmb3JtYXQ9XCJoaDptbSBBXCI+e2NyZWF0ZWRBdH08L01vbWVudD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoZGlmZkluSG91cnMgPiAzNikge1xyXG4gICAgcmV0dXJuIDxNb21lbnQgZm9ybWF0PVwiREQvTU0vWVlZWSBoaDptbSBBXCI+e2NyZWF0ZWRBdH08L01vbWVudD47XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FsY3VsYXRlVGltZTsiLCJjb25zdCBjYXRjaEVycm9ycyA9IChlcnJvcikgPT4ge1xyXG4gIGxldCBlcnJvck1zZyA9ICcnO1xyXG5cclxuICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgIC8vIElmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIG5vdCByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlIGluIHRoZSByYW5nZSBvZiAyeHhcclxuXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAvLyBpZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgbm8gcmVzcG9uc2Ugd2FzIHJlY2V2aWVkIGZyb20gc2VydmVyXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlcXVlc3Q7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGlmIHNvbWV0aGluZyBlbHNlIGhhcHBlbmVkIHdoaWxlIG1ha2luZyB0aGUgcmVxdWVzdFxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5tZXNzYWdlO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxuIHJldHVybiBlcnJvck1zZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuL2NhdGNoRXJyb3JzXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlYCxcclxuICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1VzZXIgPSBhc3luYyAodXNlclRvRm9sbG93SWQsIHNldFVzZXJGb2xsb3dTdGF0cykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvZm9sbG93LyR7dXNlclRvRm9sbG93SWR9YCk7XHJcblxyXG4gICAgc2V0VXNlckZvbGxvd1N0YXRzKHByZXYgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgZm9sbG93aW5nOiBbLi4ucHJldi5mb2xsb3dpbmcsIHsgdXNlcjogdXNlclRvRm9sbG93SWQgfV1cclxuICAgIH0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdW5mb2xsb3dVc2VyID0gYXN5bmMgKHVzZXJUb1VuZm9sbG93SWQsIHNldFVzZXJGb2xsb3dTdGF0cykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wdXQoYC91bmZvbGxvdy8ke3VzZXJUb1VuZm9sbG93SWR9YCk7XHJcblxyXG4gICAgc2V0VXNlckZvbGxvd1N0YXRzKHByZXYgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgZm9sbG93aW5nOiBwcmV2LmZvbGxvd2luZy5maWx0ZXIoZm9sbG93aW5nID0+IGZvbGxvd2luZy51c2VyICE9PSB1c2VyVG9VbmZvbGxvd0lkKVxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlVXBkYXRlID0gYXN5bmMgKHByb2ZpbGUsIHNldExvYWRpbmcsIHNldEVycm9yLCBwcm9maWxlUGljVXJsKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgYWRkcmVzcyxiaW8sIGZhY2Vib29rLCB5b3V0dWJlLCB0d2l0dGVyLCBpbnN0YWdyYW0gfSA9IHByb2ZpbGU7XHJcblxyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL3VwZGF0ZWAsIHtcclxuICAgICAgYWRkcmVzcyxcclxuICAgICAgYmlvLFxyXG4gICAgICBmYWNlYm9vayxcclxuICAgICAgeW91dHViZSxcclxuICAgICAgdHdpdHRlcixcclxuICAgICAgaW5zdGFncmFtLFxyXG4gICAgICBwcm9maWxlUGljVXJsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIFJvdXRlci5yZWxvYWQoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgc2V0RXJyb3IoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcGFzc3dvcmRVcGRhdGUgPSBhc3luYyAoc2V0U3VjY2VzcywgdXNlclBhc3N3b3JkcykgPT4ge1xyXG4gIGNvbnN0IHsgY3VycmVudFBhc3N3b3JkLCBuZXdQYXNzd29yZCB9ID0gdXNlclBhc3N3b3JkcztcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL3NldHRpbmdzL3Bhc3N3b3JkYCwgeyBjdXJyZW50UGFzc3dvcmQsIG5ld1Bhc3N3b3JkIH0pO1xyXG5cclxuICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZU1lc3NhZ2VQb3B1cCA9IGFzeW5jIChwb3B1cFNldHRpbmcsIHNldFBvcHVwU2V0dGluZywgc2V0U3VjY2VzcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvc2V0dGluZ3MvbWVzc2FnZVBvcHVwYCk7XHJcblxyXG4gICAgc2V0UG9wdXBTZXR0aW5nKCFwb3B1cFNldHRpbmcpO1xyXG4gICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9