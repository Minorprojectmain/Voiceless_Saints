(function() {
var exports = {};
exports.id = "pages/[username]";
exports.ids = ["pages/[username]"];
exports.modules = {

/***/ "./components/Layout/Spinner.js":
/*!**************************************!*\
  !*** ./components/Layout/Spinner.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Om Bindal\\Desktop\\newtocheck\\Voiceless_Saints\\components\\Layout\\Spinner.js";


const Spinner = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: "mySpinner"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 23
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./components/Profile/Followers.js":
/*!*****************************************!*\
  !*** ./components/Profile/Followers.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/Spinner */ "./components/Layout/Spinner.js");
/* harmony import */ var _Layout_NoData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\Om Bindal\\Desktop\\newtocheck\\Voiceless_Saints\\components\\Profile\\Followers.js";








/* harmony default export */ __webpack_exports__["default"] = (({
  user,
  loggedUserFollowStats,
  setUserFollowStats,
  profileUserId
}) => {
  const {
    0: followers,
    1: setFollowers
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: followLoading,
    1: setFollowLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const getFollowers = async () => {
      setLoading(true);

      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__.default}/api/profile/followers/${profileUserId}`, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_8___default().get("token")
          }
        });
        setFollowers(res.data);
      } catch (error) {
        alert("Error Loading Followers");
      }

      setLoading(false);
    };

    getFollowers();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Spinner__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, undefined) : followers.length > 0 ? followers.map(profileFollower => {
      /*  */
      const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === profileFollower.user._id).length > 0;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
        divided: true,
        verticalAlign: "middle",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            floated: "right",
            children: profileFollower.user._id !== user._id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
              color: isFollowing ? "instagram" : "twitter",
              icon: isFollowing ? "check" : "add user",
              content: isFollowing ? "Following" : "Follow",
              disabled: followLoading,
              onClick: () => {
                setFollowLoading(true);
                isFollowing ? (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_5__.unfollowUser)(profileFollower.user._id, setUserFollowStats) : (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_5__.followUser)(profileFollower.user._id, setUserFollowStats);
                setFollowLoading(false);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            avatar: true,
            src: profileFollower.user.profilePicUrl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            as: "a",
            href: `/${profileFollower.user.username}`,
            children: profileFollower.user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }, undefined)
      }, profileFollower.user._id, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, undefined);
    }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_NoData__WEBPACK_IMPORTED_MODULE_4__.NoFollowData, {
      followersComponent: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
});

/***/ }),

/***/ "./components/Profile/Following.js":
/*!*****************************************!*\
  !*** ./components/Profile/Following.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/Spinner */ "./components/Layout/Spinner.js");
/* harmony import */ var _Layout_NoData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\Om Bindal\\Desktop\\newtocheck\\Voiceless_Saints\\components\\Profile\\Following.js";








/* harmony default export */ __webpack_exports__["default"] = (({
  user,
  loggedUserFollowStats,
  setUserFollowStats,
  profileUserId
}) => {
  const {
    0: following,
    1: setFollowing
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: followLoading,
    1: setFollowLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const getFollowing = async () => {
      setLoading(true);

      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__.default}/api/profile/following/${profileUserId}`, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_8___default().get("token")
          }
        });
        setFollowing(res.data);
      } catch (error) {
        alert("Error Loading Followers");
      }

      setLoading(false);
    };

    getFollowing();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Spinner__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, undefined) : following.length > 0 ? following.map(profileFollowing => {
      /*  */
      const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === profileFollowing.user._id).length > 0;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
        divided: true,
        verticalAlign: "middle",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            floated: "right",
            children: profileFollowing.user._id !== user._id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
              color: isFollowing ? "instagram" : "twitter",
              icon: isFollowing ? "check" : "add user",
              content: isFollowing ? "Following" : "Follow",
              disabled: followLoading,
              onClick: () => {
                setFollowLoading(true);
                isFollowing ? (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_5__.unfollowUser)(profileFollowing.user._id, setUserFollowStats) : (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_5__.followUser)(profileFollowing.user._id, setUserFollowStats);
                setFollowLoading(false);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            avatar: true,
            src: profileFollowing.user.profilePicUrl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            as: "a",
            href: `/${profileFollowing.user.username}`,
            children: profileFollowing.user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }, undefined)
      }, profileFollowing.user._id, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, undefined);
    }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_NoData__WEBPACK_IMPORTED_MODULE_4__.NoFollowData, {
      followingComponent: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
});

/***/ }),

/***/ "./components/Profile/ProfileHeader.js":
/*!*********************************************!*\
  !*** ./components/Profile/ProfileHeader.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");


var _jsxFileName = "C:\\Users\\Om Bindal\\Desktop\\newtocheck\\Voiceless_Saints\\components\\Profile\\ProfileHeader.js";




function ProfileHeader({
  profile,
  ownAccount,
  loggedUserFollowStats,
  setUserFollowStats
}) {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === profile.user._id).length > 0;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        stackable: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
          width: 11,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
              as: "h2",
              content: profile.user.name,
              style: {
                marginBottom: "5px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
            stretched: true,
            children: [profile.bio, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
              hidden: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
            children: profile.social ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Icon, {
                  name: "mail"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
                  content: profile.user.email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 19
              }, this), profile.social.facebook && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Icon, {
                  name: "facebook",
                  color: "blue"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
                  style: {
                    color: "blue"
                  },
                  content: profile.social.facebook
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 21
              }, this), profile.social.instagram && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Icon, {
                  name: "instagram",
                  color: "red"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
                  style: {
                    color: "blue"
                  },
                  content: profile.social.instagram
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 21
              }, this), profile.social.youtube && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Icon, {
                  name: "youtube",
                  color: "red"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
                  style: {
                    color: "blue"
                  },
                  content: profile.social.youtube
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 21
              }, this), profile.social.twitter && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Icon, {
                  name: "twitter",
                  color: "blue"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
                  style: {
                    color: "blue"
                  },
                  content: profile.social.twitter
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: "No Social Media Links "
            }, void 0, false)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
          width: 5,
          stretched: true,
          style: {
            textAlign: "center"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
              size: "large",
              avatar: true,
              src: profile.user.profilePicUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this), !ownAccount && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            compact: true,
            loading: loading,
            disabled: loading,
            content: isFollowing ? "Following" : "Follow",
            icon: isFollowing ? "check circle" : "add user",
            color: isFollowing ? "instagram" : "twitter",
            onClick: async () => {
              setLoading(true);
              isFollowing ? await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_3__.unfollowUser)(profile.user._id, setUserFollowStats) : await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_3__.followUser)(profile.user._id, setUserFollowStats);
              setLoading(false);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (ProfileHeader);

/***/ }),

/***/ "./components/Profile/ProfileMenuTabs.js":
/*!***********************************************!*\
  !*** ./components/Profile/ProfileMenuTabs.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Om Bindal\\Desktop\\newtocheck\\Voiceless_Saints\\components\\Profile\\ProfileMenuTabs.js";



function ProfileMenuTabs({
  activeItem,
  handleItemClick,
  followersLength,
  followingLength,
  ownAccount,
  loggedUserFollowStats
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
      pointing: true,
      secondary: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
        name: "profile",
        active: activeItem === "profile",
        onClick: () => handleItemClick("profile")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
        name: `${followersLength} followers`,
        active: activeItem === "followers",
        onClick: () => handleItemClick("followers")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), ownAccount ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          name: `${loggedUserFollowStats.following.length > 0 ? loggedUserFollowStats.following.length : 0} following`,
          active: activeItem === "following",
          onClick: () => handleItemClick("following")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          name: "Update Profile",
          active: activeItem === "updateProfile",
          onClick: () => handleItemClick("updateProfile")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          name: "settings",
          active: activeItem === "settings",
          onClick: () => handleItemClick("settings")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
        name: `${followingLength} following`,
        active: activeItem === "following",
        onClick: () => handleItemClick("following")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (ProfileMenuTabs);

/***/ }),

/***/ "./pages/[username].js":
/*!*****************************!*\
  !*** ./pages/[username].js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Post_CardPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Post/CardPost */ "./components/Post/CardPost.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
/* harmony import */ var _components_Profile_ProfileMenuTabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Profile/ProfileMenuTabs */ "./components/Profile/ProfileMenuTabs.js");
/* harmony import */ var _components_Profile_ProfileHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Profile/ProfileHeader */ "./components/Profile/ProfileHeader.js");
/* harmony import */ var _components_Profile_Followers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Profile/Followers */ "./components/Profile/Followers.js");
/* harmony import */ var _components_Profile_Following__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Profile/Following */ "./components/Profile/Following.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");


var _jsxFileName = "C:\\Users\\Om Bindal\\Desktop\\newtocheck\\Voiceless_Saints\\pages\\[username].js";
















function ProfilePage({
  errorLoading,
  profile,
  followersLength,
  followingLength,
  user,
  userFollowStats
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: showToastr,
    1: setShowToastr
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: activeItem,
    1: setActiveItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("profile");

  const handleItemClick = clickedTab => setActiveItem(clickedTab);

  const {
    0: loggedUserFollowStats,
    1: setUserFollowStats
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(userFollowStats);
  const ownAccount = profile.user._id === user._id;
  if (errorLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__.NoProfile, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 28
  }, this);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const getPosts = async () => {
      setLoading(true);

      try {
        const {
          username
        } = router.query;
        const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__.default}/api/profile/posts/${username}`, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_9___default().get("token")
          }
        });
        setPosts(res.data);
      } catch (error) {
        alert("Error Loading Posts");
      }

      setLoading(false);
    };

    getPosts();
  }, [router.query.username]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    showToastr && setTimeout(() => setShowToastr(false), 4000);
  }, [showToastr]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showToastr && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_15__.PostDeleteToastr, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 22
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {
      stackable: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Row, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Column, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_ProfileMenuTabs__WEBPACK_IMPORTED_MODULE_11__.default, {
            activeItem: activeItem,
            handleItemClick: handleItemClick,
            followersLength: followersLength,
            followingLength: followingLength,
            ownAccount: ownAccount,
            loggedUserFollowStats: loggedUserFollowStats
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Row, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Column, {
          children: [activeItem === "profile" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_ProfileHeader__WEBPACK_IMPORTED_MODULE_12__.default, {
              profile: profile,
              ownAccount: ownAccount,
              loggedUserFollowStats: loggedUserFollowStats,
              setUserFollowStats: setUserFollowStats
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 17
            }, this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_10__.PlaceHolderPosts, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 19
            }, this) : posts.length > 0 ? posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_8__.default, {
              post: post,
              user: user,
              setPosts: setPosts,
              setShowToastr: setShowToastr
            }, post._id, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 21
            }, this)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__.NoProfilePosts, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 19
            }, this)]
          }, void 0, true), activeItem === "followers" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_Followers__WEBPACK_IMPORTED_MODULE_13__.default, {
            user: user,
            loggedUserFollowStats: loggedUserFollowStats,
            setUserFollowStats: setUserFollowStats,
            profileUserId: profile.user._id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 15
          }, this), activeItem === "following" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_Following__WEBPACK_IMPORTED_MODULE_14__.default, {
            user: user,
            loggedUserFollowStats: loggedUserFollowStats,
            setUserFollowStats: setUserFollowStats,
            profileUserId: profile.user._id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

ProfilePage.getInitialProps = async ctx => {
  try {
    const {
      username
    } = ctx.query;
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__.default}/api/profile/${username}`, {
      headers: {
        Authorization: token
      }
    });
    const {
      profile,
      followersLength,
      followingLength
    } = res.data;
    return {
      profile,
      followersLength,
      followingLength
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ProfilePage);

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
/* harmony export */   "unfollowUser": function() { return /* binding */ unfollowUser; }
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

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-moment");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_baseUrl_js-utils_catchErrors_js","components_Layout_NoData_js-components_Layout_Toastr_js-components_Post_CardPost_js"], function() { return __webpack_exec__("./pages/[username].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9MYXlvdXQvU3Bpbm5lci5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9Qcm9maWxlL0ZvbGxvd2Vycy5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9Qcm9maWxlL0ZvbGxvd2luZy5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlTWVudVRhYnMuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL3BhZ2VzL1t1c2VybmFtZV0uanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiU3Bpbm5lciIsInVzZXIiLCJsb2dnZWRVc2VyRm9sbG93U3RhdHMiLCJzZXRVc2VyRm9sbG93U3RhdHMiLCJwcm9maWxlVXNlcklkIiwiZm9sbG93ZXJzIiwic2V0Rm9sbG93ZXJzIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZvbGxvd0xvYWRpbmciLCJzZXRGb2xsb3dMb2FkaW5nIiwidXNlRWZmZWN0IiwiZ2V0Rm9sbG93ZXJzIiwicmVzIiwiYXhpb3MiLCJiYXNlVXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb29raWUiLCJkYXRhIiwiZXJyb3IiLCJhbGVydCIsImxlbmd0aCIsIm1hcCIsInByb2ZpbGVGb2xsb3dlciIsImlzRm9sbG93aW5nIiwiZm9sbG93aW5nIiwiZmlsdGVyIiwiX2lkIiwidW5mb2xsb3dVc2VyIiwiZm9sbG93VXNlciIsInByb2ZpbGVQaWNVcmwiLCJ1c2VybmFtZSIsIm5hbWUiLCJzZXRGb2xsb3dpbmciLCJnZXRGb2xsb3dpbmciLCJwcm9maWxlRm9sbG93aW5nIiwiUHJvZmlsZUhlYWRlciIsInByb2ZpbGUiLCJvd25BY2NvdW50IiwibWFyZ2luQm90dG9tIiwiYmlvIiwic29jaWFsIiwiZW1haWwiLCJmYWNlYm9vayIsImNvbG9yIiwiaW5zdGFncmFtIiwieW91dHViZSIsInR3aXR0ZXIiLCJ0ZXh0QWxpZ24iLCJQcm9maWxlTWVudVRhYnMiLCJhY3RpdmVJdGVtIiwiaGFuZGxlSXRlbUNsaWNrIiwiZm9sbG93ZXJzTGVuZ3RoIiwiZm9sbG93aW5nTGVuZ3RoIiwiUHJvZmlsZVBhZ2UiLCJlcnJvckxvYWRpbmciLCJ1c2VyRm9sbG93U3RhdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0cyIsInNldFBvc3RzIiwic2hvd1RvYXN0ciIsInNldFNob3dUb2FzdHIiLCJzZXRBY3RpdmVJdGVtIiwiY2xpY2tlZFRhYiIsImdldFBvc3RzIiwicXVlcnkiLCJzZXRUaW1lb3V0IiwicG9zdCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInRva2VuIiwicGFyc2VDb29raWVzIiwiQXhpb3MiLCJiYXNlVVJMIiwidXNlclRvRm9sbG93SWQiLCJwcmV2IiwiY2F0Y2hFcnJvcnMiLCJ1c2VyVG9VbmZvbGxvd0lkIiwicHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLE1BQU1BLE9BQU8sR0FBRyxtQkFBTTtBQUFLLFdBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBdEI7O0FBQ0EsK0RBQWVBLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsK0RBQWUsQ0FBQztBQUFFQyxNQUFGO0FBQVFDLHVCQUFSO0FBQStCQyxvQkFBL0I7QUFBbURDO0FBQW5ELENBQUQsS0FBd0U7QUFDckYsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDRyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DSiwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFFQUssa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsWUFBWSxHQUFHLFlBQVk7QUFDL0JKLGdCQUFVLENBQUMsSUFBRCxDQUFWOztBQUNBLFVBQUk7QUFDRixjQUFNSyxHQUFHLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVyxHQUFFQyxtREFBUSwwQkFBeUJaLGFBQWMsRUFBNUQsRUFBK0Q7QUFDL0VhLGlCQUFPLEVBQUU7QUFBRUMseUJBQWEsRUFBRUMsb0RBQUEsQ0FBVyxPQUFYO0FBQWpCO0FBRHNFLFNBQS9ELENBQWxCO0FBSUFiLG9CQUFZLENBQUNRLEdBQUcsQ0FBQ00sSUFBTCxDQUFaO0FBQ0QsT0FORCxDQU1FLE9BQU9DLEtBQVAsRUFBYztBQUNkQyxhQUFLLENBQUMseUJBQUQsQ0FBTDtBQUNEOztBQUNEYixnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBWkQ7O0FBY0FJLGdCQUFZO0FBQ2IsR0FoQlEsRUFnQk4sRUFoQk0sQ0FBVDtBQWtCQSxzQkFDRTtBQUFBLGNBQ0dMLE9BQU8sZ0JBQ04sOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETSxHQUVKSCxTQUFTLENBQUNrQixNQUFWLEdBQW1CLENBQW5CLEdBQ0ZsQixTQUFTLENBQUNtQixHQUFWLENBQWNDLGVBQWUsSUFBSTtBQUMvQjtBQUVBLFlBQU1DLFdBQVcsR0FDZnhCLHFCQUFxQixDQUFDeUIsU0FBdEIsQ0FBZ0NKLE1BQWhDLEdBQXlDLENBQXpDLElBQ0FyQixxQkFBcUIsQ0FBQ3lCLFNBQXRCLENBQWdDQyxNQUFoQyxDQUNFRCxTQUFTLElBQUlBLFNBQVMsQ0FBQzFCLElBQVYsS0FBbUJ3QixlQUFlLENBQUN4QixJQUFoQixDQUFxQjRCLEdBRHZELEVBRUVOLE1BRkYsR0FFVyxDQUpiO0FBTUEsMEJBQ0UsOERBQUMsbURBQUQ7QUFBcUMsZUFBTyxNQUE1QztBQUE2QyxxQkFBYSxFQUFDLFFBQTNEO0FBQUEsK0JBQ0UsOERBQUMsd0RBQUQ7QUFBQSxrQ0FDRSw4REFBQywyREFBRDtBQUFjLG1CQUFPLEVBQUMsT0FBdEI7QUFBQSxzQkFDR0UsZUFBZSxDQUFDeEIsSUFBaEIsQ0FBcUI0QixHQUFyQixLQUE2QjVCLElBQUksQ0FBQzRCLEdBQWxDLGlCQUNDLDhEQUFDLHFEQUFEO0FBQ0UsbUJBQUssRUFBRUgsV0FBVyxHQUFHLFdBQUgsR0FBaUIsU0FEckM7QUFFRSxrQkFBSSxFQUFFQSxXQUFXLEdBQUcsT0FBSCxHQUFhLFVBRmhDO0FBR0UscUJBQU8sRUFBRUEsV0FBVyxHQUFHLFdBQUgsR0FBaUIsUUFIdkM7QUFJRSxzQkFBUSxFQUFFaEIsYUFKWjtBQUtFLHFCQUFPLEVBQUUsTUFBTTtBQUNiQyxnQ0FBZ0IsQ0FBQyxJQUFELENBQWhCO0FBRUFlLDJCQUFXLEdBQ1BJLG1FQUFZLENBQUNMLGVBQWUsQ0FBQ3hCLElBQWhCLENBQXFCNEIsR0FBdEIsRUFBMkIxQixrQkFBM0IsQ0FETCxHQUVQNEIsaUVBQVUsQ0FBQ04sZUFBZSxDQUFDeEIsSUFBaEIsQ0FBcUI0QixHQUF0QixFQUEyQjFCLGtCQUEzQixDQUZkO0FBSUFRLGdDQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDRDtBQWJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBb0JFLDhEQUFDLG9EQUFEO0FBQU8sa0JBQU0sTUFBYjtBQUFjLGVBQUcsRUFBRWMsZUFBZSxDQUFDeEIsSUFBaEIsQ0FBcUIrQjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXBCRixlQXFCRSw4REFBQywyREFBRDtBQUFjLGNBQUUsRUFBQyxHQUFqQjtBQUFxQixnQkFBSSxFQUFHLElBQUdQLGVBQWUsQ0FBQ3hCLElBQWhCLENBQXFCZ0MsUUFBUyxFQUE3RDtBQUFBLHNCQUNHUixlQUFlLENBQUN4QixJQUFoQixDQUFxQmlDO0FBRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVdULGVBQWUsQ0FBQ3hCLElBQWhCLENBQXFCNEIsR0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQTZCRCxLQXRDRCxDQURFLGdCQXlDRiw4REFBQyx3REFBRDtBQUFjLHdCQUFrQixFQUFFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE1Q0osbUJBREY7QUFpREQsQ0F4RUQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsK0RBQWUsQ0FBQztBQUFFNUIsTUFBRjtBQUFRQyx1QkFBUjtBQUErQkMsb0JBQS9CO0FBQW1EQztBQUFuRCxDQUFELEtBQXdFO0FBQ3JGLFFBQU07QUFBQSxPQUFDdUIsU0FBRDtBQUFBLE9BQVlRO0FBQVosTUFBNEI1QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDRyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DSiwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFFQUssa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTXdCLFlBQVksR0FBRyxZQUFZO0FBQy9CM0IsZ0JBQVUsQ0FBQyxJQUFELENBQVY7O0FBQ0EsVUFBSTtBQUNGLGNBQU1LLEdBQUcsR0FBRyxNQUFNQyxnREFBQSxDQUFXLEdBQUVDLG1EQUFRLDBCQUF5QlosYUFBYyxFQUE1RCxFQUErRDtBQUMvRWEsaUJBQU8sRUFBRTtBQUFFQyx5QkFBYSxFQUFFQyxvREFBQSxDQUFXLE9BQVg7QUFBakI7QUFEc0UsU0FBL0QsQ0FBbEI7QUFJQWdCLG9CQUFZLENBQUNyQixHQUFHLENBQUNNLElBQUwsQ0FBWjtBQUNELE9BTkQsQ0FNRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEMsYUFBSyxDQUFDLHlCQUFELENBQUw7QUFDRDs7QUFDRGIsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxLQVpEOztBQWNBMkIsZ0JBQVk7QUFDYixHQWhCUSxFQWdCTixFQWhCTSxDQUFUO0FBa0JBLHNCQUNFO0FBQUEsY0FDRzVCLE9BQU8sZ0JBQ04sOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETSxHQUVKbUIsU0FBUyxDQUFDSixNQUFWLEdBQW1CLENBQW5CLEdBQ0ZJLFNBQVMsQ0FBQ0gsR0FBVixDQUFjYSxnQkFBZ0IsSUFBSTtBQUNoQztBQUVBLFlBQU1YLFdBQVcsR0FDZnhCLHFCQUFxQixDQUFDeUIsU0FBdEIsQ0FBZ0NKLE1BQWhDLEdBQXlDLENBQXpDLElBQ0FyQixxQkFBcUIsQ0FBQ3lCLFNBQXRCLENBQWdDQyxNQUFoQyxDQUNFRCxTQUFTLElBQUlBLFNBQVMsQ0FBQzFCLElBQVYsS0FBbUJvQyxnQkFBZ0IsQ0FBQ3BDLElBQWpCLENBQXNCNEIsR0FEeEQsRUFFRU4sTUFGRixHQUVXLENBSmI7QUFNQSwwQkFDRSw4REFBQyxtREFBRDtBQUFzQyxlQUFPLE1BQTdDO0FBQThDLHFCQUFhLEVBQUMsUUFBNUQ7QUFBQSwrQkFDRSw4REFBQyx3REFBRDtBQUFBLGtDQUNFLDhEQUFDLDJEQUFEO0FBQWMsbUJBQU8sRUFBQyxPQUF0QjtBQUFBLHNCQUNHYyxnQkFBZ0IsQ0FBQ3BDLElBQWpCLENBQXNCNEIsR0FBdEIsS0FBOEI1QixJQUFJLENBQUM0QixHQUFuQyxpQkFDQyw4REFBQyxxREFBRDtBQUNFLG1CQUFLLEVBQUVILFdBQVcsR0FBRyxXQUFILEdBQWlCLFNBRHJDO0FBRUUsa0JBQUksRUFBRUEsV0FBVyxHQUFHLE9BQUgsR0FBYSxVQUZoQztBQUdFLHFCQUFPLEVBQUVBLFdBQVcsR0FBRyxXQUFILEdBQWlCLFFBSHZDO0FBSUUsc0JBQVEsRUFBRWhCLGFBSlo7QUFLRSxxQkFBTyxFQUFFLE1BQU07QUFDYkMsZ0NBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUVBZSwyQkFBVyxHQUNQSSxtRUFBWSxDQUFDTyxnQkFBZ0IsQ0FBQ3BDLElBQWpCLENBQXNCNEIsR0FBdkIsRUFBNEIxQixrQkFBNUIsQ0FETCxHQUVQNEIsaUVBQVUsQ0FBQ00sZ0JBQWdCLENBQUNwQyxJQUFqQixDQUFzQjRCLEdBQXZCLEVBQTRCMUIsa0JBQTVCLENBRmQ7QUFJQVEsZ0NBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNEO0FBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFvQkUsOERBQUMsb0RBQUQ7QUFBTyxrQkFBTSxNQUFiO0FBQWMsZUFBRyxFQUFFMEIsZ0JBQWdCLENBQUNwQyxJQUFqQixDQUFzQitCO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBcEJGLGVBcUJFLDhEQUFDLDJEQUFEO0FBQWMsY0FBRSxFQUFDLEdBQWpCO0FBQXFCLGdCQUFJLEVBQUcsSUFBR0ssZ0JBQWdCLENBQUNwQyxJQUFqQixDQUFzQmdDLFFBQVMsRUFBOUQ7QUFBQSxzQkFDR0ksZ0JBQWdCLENBQUNwQyxJQUFqQixDQUFzQmlDO0FBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVdHLGdCQUFnQixDQUFDcEMsSUFBakIsQ0FBc0I0QixHQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBNkJELEtBdENELENBREUsZ0JBeUNGLDhEQUFDLHdEQUFEO0FBQWMsd0JBQWtCLEVBQUU7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTVDSixtQkFERjtBQWlERCxDQXhFRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBOztBQUVBLFNBQVNTLGFBQVQsQ0FBdUI7QUFDckJDLFNBRHFCO0FBRXJCQyxZQUZxQjtBQUdyQnRDLHVCQUhxQjtBQUlyQkM7QUFKcUIsQ0FBdkIsRUFLRztBQUNELFFBQU07QUFBQSxPQUFDSyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBRUEsUUFBTW1CLFdBQVcsR0FDZnhCLHFCQUFxQixDQUFDeUIsU0FBdEIsQ0FBZ0NKLE1BQWhDLEdBQXlDLENBQXpDLElBQ0FyQixxQkFBcUIsQ0FBQ3lCLFNBQXRCLENBQWdDQyxNQUFoQyxDQUNFRCxTQUFTLElBQUlBLFNBQVMsQ0FBQzFCLElBQVYsS0FBbUJzQyxPQUFPLENBQUN0QyxJQUFSLENBQWE0QixHQUQvQyxFQUVFTixNQUZGLEdBRVcsQ0FKYjtBQU1BLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsc0RBQUQ7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBQSxnQ0FDRSw4REFBQywwREFBRDtBQUFhLGVBQUssRUFBRSxFQUFwQjtBQUFBLGtDQUNFLDhEQUFDLHVEQUFEO0FBQUEsbUNBQ0UsOERBQUMscURBQUQ7QUFDRSxnQkFBRSxFQUFDLElBREw7QUFFRSxxQkFBTyxFQUFFZ0IsT0FBTyxDQUFDdEMsSUFBUixDQUFhaUMsSUFGeEI7QUFHRSxtQkFBSyxFQUFFO0FBQUVPLDRCQUFZLEVBQUU7QUFBaEI7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQVNFLDhEQUFDLHVEQUFEO0FBQVUscUJBQVMsTUFBbkI7QUFBQSx1QkFDR0YsT0FBTyxDQUFDRyxHQURYLGVBRUUsOERBQUMsc0RBQUQ7QUFBUyxvQkFBTTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGLGVBY0UsOERBQUMsdURBQUQ7QUFBQSxzQkFDR0gsT0FBTyxDQUFDSSxNQUFSLGdCQUNDLDhEQUFDLG1EQUFEO0FBQUEsc0NBQ0UsOERBQUMsd0RBQUQ7QUFBQSx3Q0FDRSw4REFBQyx3REFBRDtBQUFXLHNCQUFJLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUVFLDhEQUFDLDJEQUFEO0FBQWMseUJBQU8sRUFBRUosT0FBTyxDQUFDdEMsSUFBUixDQUFhMkM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFNR0wsT0FBTyxDQUFDSSxNQUFSLENBQWVFLFFBQWYsaUJBQ0MsOERBQUMsd0RBQUQ7QUFBQSx3Q0FDRSw4REFBQyx3REFBRDtBQUFXLHNCQUFJLEVBQUMsVUFBaEI7QUFBMkIsdUJBQUssRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUUsOERBQUMsMkRBQUQ7QUFDRSx1QkFBSyxFQUFFO0FBQUVDLHlCQUFLLEVBQUU7QUFBVCxtQkFEVDtBQUVFLHlCQUFPLEVBQUVQLE9BQU8sQ0FBQ0ksTUFBUixDQUFlRTtBQUYxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQSixFQWdCR04sT0FBTyxDQUFDSSxNQUFSLENBQWVJLFNBQWYsaUJBQ0MsOERBQUMsd0RBQUQ7QUFBQSx3Q0FDRSw4REFBQyx3REFBRDtBQUFXLHNCQUFJLEVBQUMsV0FBaEI7QUFBNEIsdUJBQUssRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUUsOERBQUMsMkRBQUQ7QUFDRSx1QkFBSyxFQUFFO0FBQUVELHlCQUFLLEVBQUU7QUFBVCxtQkFEVDtBQUVFLHlCQUFPLEVBQUVQLE9BQU8sQ0FBQ0ksTUFBUixDQUFlSTtBQUYxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQkosRUEwQkdSLE9BQU8sQ0FBQ0ksTUFBUixDQUFlSyxPQUFmLGlCQUNDLDhEQUFDLHdEQUFEO0FBQUEsd0NBQ0UsOERBQUMsd0RBQUQ7QUFBVyxzQkFBSSxFQUFDLFNBQWhCO0FBQTBCLHVCQUFLLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUVFLDhEQUFDLDJEQUFEO0FBQ0UsdUJBQUssRUFBRTtBQUFFRix5QkFBSyxFQUFFO0FBQVQsbUJBRFQ7QUFFRSx5QkFBTyxFQUFFUCxPQUFPLENBQUNJLE1BQVIsQ0FBZUs7QUFGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBM0JKLEVBb0NHVCxPQUFPLENBQUNJLE1BQVIsQ0FBZU0sT0FBZixpQkFDQyw4REFBQyx3REFBRDtBQUFBLHdDQUNFLDhEQUFDLHdEQUFEO0FBQVcsc0JBQUksRUFBQyxTQUFoQjtBQUEwQix1QkFBSyxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFFRSw4REFBQywyREFBRDtBQUNFLHVCQUFLLEVBQUU7QUFBRUgseUJBQUssRUFBRTtBQUFULG1CQURUO0FBRUUseUJBQU8sRUFBRVAsT0FBTyxDQUFDSSxNQUFSLENBQWVNO0FBRjFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXJDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZ0JBZ0RDO0FBQUE7QUFBQTtBQWpESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQXFFRSw4REFBQywwREFBRDtBQUFhLGVBQUssRUFBRSxDQUFwQjtBQUF1QixtQkFBUyxNQUFoQztBQUFpQyxlQUFLLEVBQUU7QUFBRUMscUJBQVMsRUFBRTtBQUFiLFdBQXhDO0FBQUEsa0NBQ0UsOERBQUMsdURBQUQ7QUFBQSxtQ0FDRSw4REFBQyxvREFBRDtBQUFPLGtCQUFJLEVBQUMsT0FBWjtBQUFvQixvQkFBTSxNQUExQjtBQUEyQixpQkFBRyxFQUFFWCxPQUFPLENBQUN0QyxJQUFSLENBQWErQjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsRUFNRyxDQUFDUSxVQUFELGlCQUNDLDhEQUFDLHFEQUFEO0FBQ0UsbUJBQU8sTUFEVDtBQUVFLG1CQUFPLEVBQUVoQyxPQUZYO0FBR0Usb0JBQVEsRUFBRUEsT0FIWjtBQUlFLG1CQUFPLEVBQUVrQixXQUFXLEdBQUcsV0FBSCxHQUFpQixRQUp2QztBQUtFLGdCQUFJLEVBQUVBLFdBQVcsR0FBRyxjQUFILEdBQW9CLFVBTHZDO0FBTUUsaUJBQUssRUFBRUEsV0FBVyxHQUFHLFdBQUgsR0FBaUIsU0FOckM7QUFPRSxtQkFBTyxFQUFFLFlBQVk7QUFDbkJqQix3QkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBaUIseUJBQVcsR0FDUCxNQUFNSSxtRUFBWSxDQUFDUyxPQUFPLENBQUN0QyxJQUFSLENBQWE0QixHQUFkLEVBQW1CMUIsa0JBQW5CLENBRFgsR0FFUCxNQUFNNEIsaUVBQVUsQ0FBQ1EsT0FBTyxDQUFDdEMsSUFBUixDQUFhNEIsR0FBZCxFQUFtQjFCLGtCQUFuQixDQUZwQjtBQUdBTSx3QkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNEO0FBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW9HRDs7QUFFRCwrREFBZTZCLGFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhBO0FBQ0E7O0FBRUEsU0FBU2EsZUFBVCxDQUF5QjtBQUN2QkMsWUFEdUI7QUFFdkJDLGlCQUZ1QjtBQUd2QkMsaUJBSHVCO0FBSXZCQyxpQkFKdUI7QUFLdkJmLFlBTHVCO0FBTXZCdEM7QUFOdUIsQ0FBekIsRUFPRztBQUNELHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsbURBQUQ7QUFBTSxjQUFRLE1BQWQ7QUFBZSxlQUFTLE1BQXhCO0FBQUEsOEJBQ0UsOERBQUMsd0RBQUQ7QUFDRSxZQUFJLEVBQUMsU0FEUDtBQUVFLGNBQU0sRUFBRWtELFVBQVUsS0FBSyxTQUZ6QjtBQUdFLGVBQU8sRUFBRSxNQUFNQyxlQUFlLENBQUMsU0FBRDtBQUhoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRSw4REFBQyx3REFBRDtBQUNFLFlBQUksRUFBRyxHQUFFQyxlQUFnQixZQUQzQjtBQUVFLGNBQU0sRUFBRUYsVUFBVSxLQUFLLFdBRnpCO0FBR0UsZUFBTyxFQUFFLE1BQU1DLGVBQWUsQ0FBQyxXQUFEO0FBSGhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixFQWFHYixVQUFVLGdCQUNUO0FBQUEsZ0NBQ0UsOERBQUMsd0RBQUQ7QUFDRSxjQUFJLEVBQUcsR0FDTHRDLHFCQUFxQixDQUFDeUIsU0FBdEIsQ0FBZ0NKLE1BQWhDLEdBQXlDLENBQXpDLEdBQ0lyQixxQkFBcUIsQ0FBQ3lCLFNBQXRCLENBQWdDSixNQURwQyxHQUVJLENBQ0wsWUFMSDtBQU1FLGdCQUFNLEVBQUU2QixVQUFVLEtBQUssV0FOekI7QUFPRSxpQkFBTyxFQUFFLE1BQU1DLGVBQWUsQ0FBQyxXQUFEO0FBUGhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFXRSw4REFBQyx3REFBRDtBQUNFLGNBQUksRUFBQyxnQkFEUDtBQUVFLGdCQUFNLEVBQUVELFVBQVUsS0FBSyxlQUZ6QjtBQUdFLGlCQUFPLEVBQUUsTUFBTUMsZUFBZSxDQUFDLGVBQUQ7QUFIaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRixlQWlCRSw4REFBQyx3REFBRDtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsZ0JBQU0sRUFBRUQsVUFBVSxLQUFLLFVBRnpCO0FBR0UsaUJBQU8sRUFBRSxNQUFNQyxlQUFlLENBQUMsVUFBRDtBQUhoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCRjtBQUFBLHNCQURTLGdCQXlCVCw4REFBQyx3REFBRDtBQUNFLFlBQUksRUFBRyxHQUFFRSxlQUFnQixZQUQzQjtBQUVFLGNBQU0sRUFBRUgsVUFBVSxLQUFLLFdBRnpCO0FBR0UsZUFBTyxFQUFFLE1BQU1DLGVBQWUsQ0FBQyxXQUFEO0FBSGhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFpREQ7O0FBRUQsK0RBQWVGLGVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNLLFdBQVQsQ0FBcUI7QUFDbkJDLGNBRG1CO0FBRW5CbEIsU0FGbUI7QUFHbkJlLGlCQUhtQjtBQUluQkMsaUJBSm1CO0FBS25CdEQsTUFMbUI7QUFNbkJ5RDtBQU5tQixDQUFyQixFQU9HO0FBQ0QsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQnZELCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUN3RCxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QnpELCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUVBLFFBQU07QUFBQSxPQUFDNkMsVUFBRDtBQUFBLE9BQWFhO0FBQWIsTUFBOEIxRCwrQ0FBUSxDQUFDLFNBQUQsQ0FBNUM7O0FBQ0EsUUFBTThDLGVBQWUsR0FBR2EsVUFBVSxJQUFJRCxhQUFhLENBQUNDLFVBQUQsQ0FBbkQ7O0FBRUEsUUFBTTtBQUFBLE9BQUNoRSxxQkFBRDtBQUFBLE9BQXdCQztBQUF4QixNQUE4Q0ksK0NBQVEsQ0FBQ21ELGVBQUQsQ0FBNUQ7QUFFQSxRQUFNbEIsVUFBVSxHQUFHRCxPQUFPLENBQUN0QyxJQUFSLENBQWE0QixHQUFiLEtBQXFCNUIsSUFBSSxDQUFDNEIsR0FBN0M7QUFFQSxNQUFJNEIsWUFBSixFQUFrQixvQkFBTyw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFbEI3QyxrREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNdUQsUUFBUSxHQUFHLFlBQVk7QUFDM0IxRCxnQkFBVSxDQUFDLElBQUQsQ0FBVjs7QUFFQSxVQUFJO0FBQ0YsY0FBTTtBQUFFd0I7QUFBRixZQUFlMEIsTUFBTSxDQUFDUyxLQUE1QjtBQUNBLGNBQU10RCxHQUFHLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVyxHQUFFQyxtREFBUSxzQkFBcUJpQixRQUFTLEVBQW5ELEVBQXNEO0FBQ3RFaEIsaUJBQU8sRUFBRTtBQUFFQyx5QkFBYSxFQUFFQyxvREFBQSxDQUFXLE9BQVg7QUFBakI7QUFENkQsU0FBdEQsQ0FBbEI7QUFJQTJDLGdCQUFRLENBQUNoRCxHQUFHLENBQUNNLElBQUwsQ0FBUjtBQUNELE9BUEQsQ0FPRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEMsYUFBSyxDQUFDLHFCQUFELENBQUw7QUFDRDs7QUFFRGIsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxLQWZEOztBQWdCQTBELFlBQVE7QUFDVCxHQWxCUSxFQWtCTixDQUFDUixNQUFNLENBQUNTLEtBQVAsQ0FBYW5DLFFBQWQsQ0FsQk0sQ0FBVDtBQW9CQXJCLGtEQUFTLENBQUMsTUFBTTtBQUNkbUQsY0FBVSxJQUFJTSxVQUFVLENBQUMsTUFBTUwsYUFBYSxDQUFDLEtBQUQsQ0FBcEIsRUFBNkIsSUFBN0IsQ0FBeEI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0QsVUFBRCxDQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFBLGVBQ0dBLFVBQVUsaUJBQUksOERBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURqQixlQUdFLDhEQUFDLG1EQUFEO0FBQU0sZUFBUyxNQUFmO0FBQUEsOEJBQ0UsOERBQUMsdURBQUQ7QUFBQSwrQkFDRSw4REFBQywwREFBRDtBQUFBLGlDQUNFLDhEQUFDLHlFQUFEO0FBQ0Usc0JBQVUsRUFBRVgsVUFEZDtBQUVFLDJCQUFlLEVBQUVDLGVBRm5CO0FBR0UsMkJBQWUsRUFBRUMsZUFIbkI7QUFJRSwyQkFBZSxFQUFFQyxlQUpuQjtBQUtFLHNCQUFVLEVBQUVmLFVBTGQ7QUFNRSxpQ0FBcUIsRUFBRXRDO0FBTnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBY0UsOERBQUMsdURBQUQ7QUFBQSwrQkFDRSw4REFBQywwREFBRDtBQUFBLHFCQUNHa0QsVUFBVSxLQUFLLFNBQWYsaUJBQ0M7QUFBQSxvQ0FDRSw4REFBQyx1RUFBRDtBQUNFLHFCQUFPLEVBQUViLE9BRFg7QUFFRSx3QkFBVSxFQUFFQyxVQUZkO0FBR0UsbUNBQXFCLEVBQUV0QyxxQkFIekI7QUFJRSxnQ0FBa0IsRUFBRUM7QUFKdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQVFHSyxPQUFPLGdCQUNOLDhEQUFDLGtGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRE0sR0FFSnFELEtBQUssQ0FBQ3RDLE1BQU4sR0FBZSxDQUFmLEdBQ0ZzQyxLQUFLLENBQUNyQyxHQUFOLENBQVU4QyxJQUFJLGlCQUNaLDhEQUFDLDhEQUFEO0FBRUUsa0JBQUksRUFBRUEsSUFGUjtBQUdFLGtCQUFJLEVBQUVyRSxJQUhSO0FBSUUsc0JBQVEsRUFBRTZELFFBSlo7QUFLRSwyQkFBYSxFQUFFRTtBQUxqQixlQUNPTSxJQUFJLENBQUN6QyxHQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FERSxnQkFXRiw4REFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXJCSjtBQUFBLDBCQUZKLEVBNEJHdUIsVUFBVSxLQUFLLFdBQWYsaUJBQ0MsOERBQUMsbUVBQUQ7QUFDRSxnQkFBSSxFQUFFbkQsSUFEUjtBQUVFLGlDQUFxQixFQUFFQyxxQkFGekI7QUFHRSw4QkFBa0IsRUFBRUMsa0JBSHRCO0FBSUUseUJBQWEsRUFBRW9DLE9BQU8sQ0FBQ3RDLElBQVIsQ0FBYTRCO0FBSjlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBN0JKLEVBcUNHdUIsVUFBVSxLQUFLLFdBQWYsaUJBQ0MsOERBQUMsbUVBQUQ7QUFDRSxnQkFBSSxFQUFFbkQsSUFEUjtBQUVFLGlDQUFxQixFQUFFQyxxQkFGekI7QUFHRSw4QkFBa0IsRUFBRUMsa0JBSHRCO0FBSUUseUJBQWEsRUFBRW9DLE9BQU8sQ0FBQ3RDLElBQVIsQ0FBYTRCO0FBSjlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBLGtCQURGO0FBc0VEOztBQUVEMkIsV0FBVyxDQUFDZSxlQUFaLEdBQThCLE1BQU1DLEdBQU4sSUFBYTtBQUN6QyxNQUFJO0FBQ0YsVUFBTTtBQUFFdkM7QUFBRixRQUFldUMsR0FBRyxDQUFDSixLQUF6QjtBQUNBLFVBQU07QUFBRUs7QUFBRixRQUFZQyxxREFBWSxDQUFDRixHQUFELENBQTlCO0FBRUEsVUFBTTFELEdBQUcsR0FBRyxNQUFNQyxnREFBQSxDQUFXLEdBQUVDLG1EQUFRLGdCQUFlaUIsUUFBUyxFQUE3QyxFQUFnRDtBQUNoRWhCLGFBQU8sRUFBRTtBQUFFQyxxQkFBYSxFQUFFdUQ7QUFBakI7QUFEdUQsS0FBaEQsQ0FBbEI7QUFJQSxVQUFNO0FBQUVsQyxhQUFGO0FBQVdlLHFCQUFYO0FBQTRCQztBQUE1QixRQUFnRHpDLEdBQUcsQ0FBQ00sSUFBMUQ7QUFFQSxXQUFPO0FBQUVtQixhQUFGO0FBQVdlLHFCQUFYO0FBQTRCQztBQUE1QixLQUFQO0FBQ0QsR0FYRCxDQVdFLE9BQU9sQyxLQUFQLEVBQWM7QUFDZCxXQUFPO0FBQUVvQyxrQkFBWSxFQUFFO0FBQWhCLEtBQVA7QUFDRDtBQUNGLENBZkQ7O0FBaUJBLCtEQUFlRCxXQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTW1CLEtBQUssR0FBRzVELG1EQUFBLENBQWE7QUFDekI2RCxTQUFPLEVBQUcsR0FBRTVELDZDQUFRLGNBREs7QUFFekJDLFNBQU8sRUFBRTtBQUFFQyxpQkFBYSxFQUFFQyxvREFBQSxDQUFXLE9BQVg7QUFBakI7QUFGZ0IsQ0FBYixDQUFkO0FBS08sTUFBTVksVUFBVSxHQUFHLE9BQU84QyxjQUFQLEVBQXVCMUUsa0JBQXZCLEtBQThDO0FBQ3RFLE1BQUk7QUFDRixVQUFNd0UsS0FBSyxDQUFDTCxJQUFOLENBQVksV0FBVU8sY0FBZSxFQUFyQyxDQUFOO0FBRUExRSxzQkFBa0IsQ0FBQzJFLElBQUksb0NBQ2xCQSxJQURrQjtBQUVyQm5ELGVBQVMsRUFBRSxDQUFDLEdBQUdtRCxJQUFJLENBQUNuRCxTQUFULEVBQW9CO0FBQUUxQixZQUFJLEVBQUU0RTtBQUFSLE9BQXBCO0FBRlUsTUFBTCxDQUFsQjtBQUlELEdBUEQsQ0FPRSxPQUFPeEQsS0FBUCxFQUFjO0FBQ2RDLFNBQUssQ0FBQ3lELHFEQUFXLENBQUMxRCxLQUFELENBQVosQ0FBTDtBQUNEO0FBQ0YsQ0FYTTtBQWFBLE1BQU1TLFlBQVksR0FBRyxPQUFPa0QsZ0JBQVAsRUFBeUI3RSxrQkFBekIsS0FBZ0Q7QUFDMUUsTUFBSTtBQUNGLFVBQU13RSxLQUFLLENBQUNNLEdBQU4sQ0FBVyxhQUFZRCxnQkFBaUIsRUFBeEMsQ0FBTjtBQUVBN0Usc0JBQWtCLENBQUMyRSxJQUFJLG9DQUNsQkEsSUFEa0I7QUFFckJuRCxlQUFTLEVBQUVtRCxJQUFJLENBQUNuRCxTQUFMLENBQWVDLE1BQWYsQ0FBc0JELFNBQVMsSUFBSUEsU0FBUyxDQUFDMUIsSUFBVixLQUFtQitFLGdCQUF0RDtBQUZVLE1BQUwsQ0FBbEI7QUFJRCxHQVBELENBT0UsT0FBTzNELEtBQVAsRUFBYztBQUNkQyxTQUFLLENBQUN5RCxxREFBVyxDQUFDMUQsS0FBRCxDQUFaLENBQUw7QUFDRDtBQUNGLENBWE0sQzs7Ozs7Ozs7Ozs7QUN4QlAsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvW3VzZXJuYW1lXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgU3Bpbm5lciA9ICgpID0+IDxkaXYgY2xhc3NOYW1lPVwibXlTcGlubmVyXCIgLz47XHJcbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW1hZ2UsIExpc3QgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL0xheW91dC9TcGlubmVyXCI7XHJcbmltcG9ydCB7IE5vRm9sbG93RGF0YSB9IGZyb20gXCIuLi9MYXlvdXQvTm9EYXRhXCI7XHJcbmltcG9ydCB7IGZvbGxvd1VzZXIsIHVuZm9sbG93VXNlciB9IGZyb20gXCIuLi8uLi91dGlscy9wcm9maWxlQWN0aW9uc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgdXNlciwgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLCBzZXRVc2VyRm9sbG93U3RhdHMsIHByb2ZpbGVVc2VySWQgfSkgPT4ge1xyXG4gIGNvbnN0IFtmb2xsb3dlcnMsIHNldEZvbGxvd2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmb2xsb3dMb2FkaW5nLCBzZXRGb2xsb3dMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldEZvbGxvd2VycyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Byb2ZpbGUvZm9sbG93ZXJzLyR7cHJvZmlsZVVzZXJJZH1gLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEZvbGxvd2VycyhyZXMuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoXCJFcnJvciBMb2FkaW5nIEZvbGxvd2Vyc1wiKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0Rm9sbG93ZXJzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgKSA6IGZvbGxvd2Vycy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIGZvbGxvd2Vycy5tYXAocHJvZmlsZUZvbGxvd2VyID0+IHtcclxuICAgICAgICAgIC8qICAqL1xyXG5cclxuICAgICAgICAgIGNvbnN0IGlzRm9sbG93aW5nID1cclxuICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIGZvbGxvd2luZyA9PiBmb2xsb3dpbmcudXNlciA9PT0gcHJvZmlsZUZvbGxvd2VyLnVzZXIuX2lkXHJcbiAgICAgICAgICAgICkubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGlzdCBrZXk9e3Byb2ZpbGVGb2xsb3dlci51c2VyLl9pZH0gZGl2aWRlZCB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgZmxvYXRlZD1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlRm9sbG93ZXIudXNlci5faWQgIT09IHVzZXIuX2lkICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17aXNGb2xsb3dpbmcgPyBcImluc3RhZ3JhbVwiIDogXCJ0d2l0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpc0ZvbGxvd2luZyA/IFwiY2hlY2tcIiA6IFwiYWRkIHVzZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2lzRm9sbG93aW5nID8gXCJGb2xsb3dpbmdcIiA6IFwiRm9sbG93XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Zm9sbG93TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9sbG93TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB1bmZvbGxvd1VzZXIocHJvZmlsZUZvbGxvd2VyLnVzZXIuX2lkLCBzZXRVc2VyRm9sbG93U3RhdHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmb2xsb3dVc2VyKHByb2ZpbGVGb2xsb3dlci51c2VyLl9pZCwgc2V0VXNlckZvbGxvd1N0YXRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvbGxvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgYXZhdGFyIHNyYz17cHJvZmlsZUZvbGxvd2VyLnVzZXIucHJvZmlsZVBpY1VybH0gLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgYXM9XCJhXCIgaHJlZj17YC8ke3Byb2ZpbGVGb2xsb3dlci51c2VyLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZUZvbGxvd2VyLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPE5vRm9sbG93RGF0YSBmb2xsb3dlcnNDb21wb25lbnQ9e3RydWV9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEltYWdlLCBMaXN0IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9MYXlvdXQvU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBOb0ZvbGxvd0RhdGEgfSBmcm9tIFwiLi4vTGF5b3V0L05vRGF0YVwiO1xyXG5pbXBvcnQgeyBmb2xsb3dVc2VyLCB1bmZvbGxvd1VzZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IHVzZXIsIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cywgc2V0VXNlckZvbGxvd1N0YXRzLCBwcm9maWxlVXNlcklkIH0pID0+IHtcclxuICBjb25zdCBbZm9sbG93aW5nLCBzZXRGb2xsb3dpbmddID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZm9sbG93TG9hZGluZywgc2V0Rm9sbG93TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRGb2xsb3dpbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlL2ZvbGxvd2luZy8ke3Byb2ZpbGVVc2VySWR9YCwge1xyXG4gICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRGb2xsb3dpbmcocmVzLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KFwiRXJyb3IgTG9hZGluZyBGb2xsb3dlcnNcIik7XHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEZvbGxvd2luZygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICkgOiBmb2xsb3dpbmcubGVuZ3RoID4gMCA/IChcclxuICAgICAgICBmb2xsb3dpbmcubWFwKHByb2ZpbGVGb2xsb3dpbmcgPT4ge1xyXG4gICAgICAgICAgLyogICovXHJcblxyXG4gICAgICAgICAgY29uc3QgaXNGb2xsb3dpbmcgPVxyXG4gICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgZm9sbG93aW5nID0+IGZvbGxvd2luZy51c2VyID09PSBwcm9maWxlRm9sbG93aW5nLnVzZXIuX2lkXHJcbiAgICAgICAgICAgICkubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGlzdCBrZXk9e3Byb2ZpbGVGb2xsb3dpbmcudXNlci5faWR9IGRpdmlkZWQgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGZsb2F0ZWQ9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZUZvbGxvd2luZy51c2VyLl9pZCAhPT0gdXNlci5faWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtpc0ZvbGxvd2luZyA/IFwiaW5zdGFncmFtXCIgOiBcInR3aXR0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGljb249e2lzRm9sbG93aW5nID8gXCJjaGVja1wiIDogXCJhZGQgdXNlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXNGb2xsb3dpbmcgPyBcIkZvbGxvd2luZ1wiIDogXCJGb2xsb3dcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmb2xsb3dMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGb2xsb3dMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHVuZm9sbG93VXNlcihwcm9maWxlRm9sbG93aW5nLnVzZXIuX2lkLCBzZXRVc2VyRm9sbG93U3RhdHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmb2xsb3dVc2VyKHByb2ZpbGVGb2xsb3dpbmcudXNlci5faWQsIHNldFVzZXJGb2xsb3dTdGF0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGb2xsb3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGF2YXRhciBzcmM9e3Byb2ZpbGVGb2xsb3dpbmcudXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCBhcz1cImFcIiBocmVmPXtgLyR7cHJvZmlsZUZvbGxvd2luZy51c2VyLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZUZvbGxvd2luZy51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxOb0ZvbGxvd0RhdGEgZm9sbG93aW5nQ29tcG9uZW50PXt0cnVlfSAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNlZ21lbnQsIEltYWdlLCBHcmlkLCBEaXZpZGVyLCBIZWFkZXIsIEJ1dHRvbiwgTGlzdCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBmb2xsb3dVc2VyLCB1bmZvbGxvd1VzZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGVIZWFkZXIoe1xyXG4gIHByb2ZpbGUsXHJcbiAgb3duQWNjb3VudCxcclxuICBsb2dnZWRVc2VyRm9sbG93U3RhdHMsXHJcbiAgc2V0VXNlckZvbGxvd1N0YXRzXHJcbn0pIHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGlzRm9sbG93aW5nID1cclxuICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcubGVuZ3RoID4gMCAmJlxyXG4gICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5maWx0ZXIoXHJcbiAgICAgIGZvbGxvd2luZyA9PiBmb2xsb3dpbmcudXNlciA9PT0gcHJvZmlsZS51c2VyLl9pZFxyXG4gICAgKS5sZW5ndGggPiAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgPEdyaWQgc3RhY2thYmxlPlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMX0+XHJcbiAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICBhcz1cImgyXCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb2ZpbGUudXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkLlJvdyBzdHJldGNoZWQ+XHJcbiAgICAgICAgICAgICAge3Byb2ZpbGUuYmlvfVxyXG4gICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuUm93PlxyXG5cclxuICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgIHtwcm9maWxlLnNvY2lhbCA/IChcclxuICAgICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cIm1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgY29udGVudD17cHJvZmlsZS51c2VyLmVtYWlsfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlLnNvY2lhbC5mYWNlYm9vayAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cImZhY2Vib29rXCIgY29sb3I9XCJibHVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb2ZpbGUuc29jaWFsLmZhY2Vib29rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlLnNvY2lhbC5pbnN0YWdyYW0gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJpbnN0YWdyYW1cIiBjb2xvcj1cInJlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9maWxlLnNvY2lhbC5pbnN0YWdyYW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuc29jaWFsLnlvdXR1YmUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJ5b3V0dWJlXCIgY29sb3I9XCJyZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17cHJvZmlsZS5zb2NpYWwueW91dHViZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZS5zb2NpYWwudHdpdHRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cInR3aXR0ZXJcIiBjb2xvcj1cImJsdWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17cHJvZmlsZS5zb2NpYWwudHdpdHRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+Tm8gU29jaWFsIE1lZGlhIExpbmtzIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NX0gc3RyZXRjaGVkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzaXplPVwibGFyZ2VcIiBhdmF0YXIgc3JjPXtwcm9maWxlLnVzZXIucHJvZmlsZVBpY1VybH0gLz5cclxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICB7IW93bkFjY291bnQgJiYgKFxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNvbXBhY3RcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2lzRm9sbG93aW5nID8gXCJGb2xsb3dpbmdcIiA6IFwiRm9sbG93XCJ9XHJcbiAgICAgICAgICAgICAgICBpY29uPXtpc0ZvbGxvd2luZyA/IFwiY2hlY2sgY2lyY2xlXCIgOiBcImFkZCB1c2VyXCJ9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17aXNGb2xsb3dpbmcgPyBcImluc3RhZ3JhbVwiIDogXCJ0d2l0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGlzRm9sbG93aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgPyBhd2FpdCB1bmZvbGxvd1VzZXIocHJvZmlsZS51c2VyLl9pZCwgc2V0VXNlckZvbGxvd1N0YXRzKVxyXG4gICAgICAgICAgICAgICAgICAgIDogYXdhaXQgZm9sbG93VXNlcihwcm9maWxlLnVzZXIuX2lkLCBzZXRVc2VyRm9sbG93U3RhdHMpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L1NlZ21lbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGVNZW51VGFicyh7XHJcbiAgYWN0aXZlSXRlbSxcclxuICBoYW5kbGVJdGVtQ2xpY2ssXHJcbiAgZm9sbG93ZXJzTGVuZ3RoLFxyXG4gIGZvbGxvd2luZ0xlbmd0aCxcclxuICBvd25BY2NvdW50LFxyXG4gIGxvZ2dlZFVzZXJGb2xsb3dTdGF0c1xyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNZW51IHBvaW50aW5nIHNlY29uZGFyeT5cclxuICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICBuYW1lPVwicHJvZmlsZVwiXHJcbiAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09IFwicHJvZmlsZVwifVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKFwicHJvZmlsZVwiKX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICBuYW1lPXtgJHtmb2xsb3dlcnNMZW5ndGh9IGZvbGxvd2Vyc2B9XHJcbiAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09IFwiZm9sbG93ZXJzXCJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soXCJmb2xsb3dlcnNcIil9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAge293bkFjY291bnQgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgPyBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICA6IDBcclxuICAgICAgICAgICAgICB9IGZvbGxvd2luZ2B9XHJcbiAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcImZvbGxvd2luZ1wifVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhcImZvbGxvd2luZ1wiKX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICBuYW1lPVwiVXBkYXRlIFByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJ1cGRhdGVQcm9maWxlXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKFwidXBkYXRlUHJvZmlsZVwiKX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICBuYW1lPVwic2V0dGluZ3NcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJzZXR0aW5nc1wifVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhcInNldHRpbmdzXCIpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgbmFtZT17YCR7Zm9sbG93aW5nTGVuZ3RofSBmb2xsb3dpbmdgfVxyXG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09IFwiZm9sbG93aW5nXCJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhcImZvbGxvd2luZ1wiKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9NZW51PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZU1lbnVUYWJzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IE5vUHJvZmlsZVBvc3RzLCBOb1Byb2ZpbGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhXCI7XHJcbmltcG9ydCBDYXJkUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0XCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBQbGFjZUhvbGRlclBvc3RzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1BsYWNlSG9sZGVyR3JvdXBcIjtcclxuaW1wb3J0IFByb2ZpbGVNZW51VGFicyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVNZW51VGFic1wiO1xyXG5pbXBvcnQgUHJvZmlsZUhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVIZWFkZXJcIjtcclxuaW1wb3J0IEZvbGxvd2VycyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlL0ZvbGxvd2Vyc1wiO1xyXG5pbXBvcnQgRm9sbG93aW5nIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvRm9sbG93aW5nXCI7XHJcbmltcG9ydCB7IFBvc3REZWxldGVUb2FzdHIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvVG9hc3RyXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlUGFnZSh7XHJcbiAgZXJyb3JMb2FkaW5nLFxyXG4gIHByb2ZpbGUsXHJcbiAgZm9sbG93ZXJzTGVuZ3RoLFxyXG4gIGZvbGxvd2luZ0xlbmd0aCxcclxuICB1c2VyLFxyXG4gIHVzZXJGb2xsb3dTdGF0c1xyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1RvYXN0ciwgc2V0U2hvd1RvYXN0cl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKFwicHJvZmlsZVwiKTtcclxuICBjb25zdCBoYW5kbGVJdGVtQ2xpY2sgPSBjbGlja2VkVGFiID0+IHNldEFjdGl2ZUl0ZW0oY2xpY2tlZFRhYik7XHJcblxyXG4gIGNvbnN0IFtsb2dnZWRVc2VyRm9sbG93U3RhdHMsIHNldFVzZXJGb2xsb3dTdGF0c10gPSB1c2VTdGF0ZSh1c2VyRm9sbG93U3RhdHMpO1xyXG5cclxuICBjb25zdCBvd25BY2NvdW50ID0gcHJvZmlsZS51c2VyLl9pZCA9PT0gdXNlci5faWQ7XHJcblxyXG4gIGlmIChlcnJvckxvYWRpbmcpIHJldHVybiA8Tm9Qcm9maWxlIC8+O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Byb2ZpbGUvcG9zdHMvJHt1c2VybmFtZX1gLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFBvc3RzKHJlcy5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydChcIkVycm9yIExvYWRpbmcgUG9zdHNcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGdldFBvc3RzKCk7XHJcbiAgfSwgW3JvdXRlci5xdWVyeS51c2VybmFtZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2hvd1RvYXN0ciAmJiBzZXRUaW1lb3V0KCgpID0+IHNldFNob3dUb2FzdHIoZmFsc2UpLCA0MDAwKTtcclxuICB9LCBbc2hvd1RvYXN0cl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3Nob3dUb2FzdHIgJiYgPFBvc3REZWxldGVUb2FzdHIgLz59XHJcblxyXG4gICAgICA8R3JpZCBzdGFja2FibGU+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8UHJvZmlsZU1lbnVUYWJzXHJcbiAgICAgICAgICAgICAgYWN0aXZlSXRlbT17YWN0aXZlSXRlbX1cclxuICAgICAgICAgICAgICBoYW5kbGVJdGVtQ2xpY2s9e2hhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICBmb2xsb3dlcnNMZW5ndGg9e2ZvbGxvd2Vyc0xlbmd0aH1cclxuICAgICAgICAgICAgICBmb2xsb3dpbmdMZW5ndGg9e2ZvbGxvd2luZ0xlbmd0aH1cclxuICAgICAgICAgICAgICBvd25BY2NvdW50PXtvd25BY2NvdW50fVxyXG4gICAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cz17bG9nZ2VkVXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIHthY3RpdmVJdGVtID09PSBcInByb2ZpbGVcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgIHByb2ZpbGU9e3Byb2ZpbGV9XHJcbiAgICAgICAgICAgICAgICAgIG93bkFjY291bnQ9e293bkFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cz17bG9nZ2VkVXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAgICAgICBzZXRVc2VyRm9sbG93U3RhdHM9e3NldFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxQbGFjZUhvbGRlclBvc3RzIC8+XHJcbiAgICAgICAgICAgICAgICApIDogcG9zdHMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgcG9zdHMubWFwKHBvc3QgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkUG9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBvc3Q9e3Bvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0UG9zdHM9e3NldFBvc3RzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RvYXN0cj17c2V0U2hvd1RvYXN0cn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPE5vUHJvZmlsZVBvc3RzIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2FjdGl2ZUl0ZW0gPT09IFwiZm9sbG93ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxGb2xsb3dlcnNcclxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgIHNldFVzZXJGb2xsb3dTdGF0cz17c2V0VXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZVVzZXJJZD17cHJvZmlsZS51c2VyLl9pZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2FjdGl2ZUl0ZW0gPT09IFwiZm9sbG93aW5nXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxGb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgIHNldFVzZXJGb2xsb3dTdGF0cz17c2V0VXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZVVzZXJJZD17cHJvZmlsZS51c2VyLl9pZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuUHJvZmlsZVBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSB9ID0gY3R4LnF1ZXJ5O1xyXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlLyR7dXNlcm5hbWV9YCwge1xyXG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgcHJvZmlsZSwgZm9sbG93ZXJzTGVuZ3RoLCBmb2xsb3dpbmdMZW5ndGggfSA9IHJlcy5kYXRhO1xyXG5cclxuICAgIHJldHVybiB7IHByb2ZpbGUsIGZvbGxvd2Vyc0xlbmd0aCwgZm9sbG93aW5nTGVuZ3RoIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IGVycm9yTG9hZGluZzogdHJ1ZSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuL2NhdGNoRXJyb3JzXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQXhpb3MgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlYCxcclxuICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbGxvd1VzZXIgPSBhc3luYyAodXNlclRvRm9sbG93SWQsIHNldFVzZXJGb2xsb3dTdGF0cykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvZm9sbG93LyR7dXNlclRvRm9sbG93SWR9YCk7XHJcblxyXG4gICAgc2V0VXNlckZvbGxvd1N0YXRzKHByZXYgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgZm9sbG93aW5nOiBbLi4ucHJldi5mb2xsb3dpbmcsIHsgdXNlcjogdXNlclRvRm9sbG93SWQgfV1cclxuICAgIH0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdW5mb2xsb3dVc2VyID0gYXN5bmMgKHVzZXJUb1VuZm9sbG93SWQsIHNldFVzZXJGb2xsb3dTdGF0cykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wdXQoYC91bmZvbGxvdy8ke3VzZXJUb1VuZm9sbG93SWR9YCk7XHJcblxyXG4gICAgc2V0VXNlckZvbGxvd1N0YXRzKHByZXYgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgZm9sbG93aW5nOiBwcmV2LmZvbGxvd2luZy5maWx0ZXIoZm9sbG93aW5nID0+IGZvbGxvd2luZy51c2VyICE9PSB1c2VyVG9VbmZvbGxvd0lkKVxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9