(function() {
var exports = {};
exports.id = "pages/[username]";
exports.ids = ["pages/[username]"];
exports.modules = {

/***/ "./components/Common/CommonInputs.js":
/*!*******************************************!*\
  !*** ./components/Common/CommonInputs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Common\\CommonInputs.js";




function CommonInputs({
  user: {
    bio,
    address,
    instagram,
    facebook,
    twitter,
    youtube
  },
  handleChange,
  showSocialLinks,
  setShowSocialLinks
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
      required: true,
      label: "Address",
      control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.TextArea,
      name: "address",
      value: address,
      onChange: handleChange,
      placeholder: "address"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
      required: true,
      label: "Bio",
      control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.TextArea,
      name: "bio",
      value: bio,
      onChange: handleChange,
      placeholder: "bio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
      content: "Add Social Links",
      color: "red",
      icon: "at",
      type: "button",
      onClick: () => setShowSocialLinks(!showSocialLinks)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this), showSocialLinks && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 10
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
        icon: "facebook f",
        iconPosition: "left",
        name: "facebook",
        value: facebook,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 10
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
        icon: "instagram",
        iconPosition: "left",
        name: "instagram",
        value: instagram,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
        icon: "twitter",
        iconPosition: "left",
        name: "twitter",
        value: twitter,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
        icon: "youtube play",
        iconPosition: "left",
        name: "youtube",
        value: youtube,
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
        icon: "attention",
        info: true,
        size: "small",
        header: "Social Media Links are Optional"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)]
    }, void 0, true)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (CommonInputs);

/***/ }),

/***/ "./components/Common/ImageDropDiv.js":
/*!*******************************************!*\
  !*** ./components/Common/ImageDropDiv.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Common\\ImageDropDiv.js";




function ImageDropDiv({
  highlighted,
  setHighlighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia,
  profilePicUrl
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const signupRoute = router.pathname === "/signup";

  const checkForSignupPage = () => signupRoute ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
      icon: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "file image outline",
        style: {
          cursor: "pointer"
        },
        onClick: () => inputRef.current.click(),
        size: "huge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this), "Drag n Drop or Click to upload image"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this)
  }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    style: {
      textAlign: "center"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
      src: profilePicUrl,
      alt: "Profile pic",
      style: {
        cursor: "pointer"
      },
      onClick: () => inputRef.current.click(),
      size: "huge",
      centered: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this), "Drag n Drop or Click to upload image"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 7
  }, this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
        placeholder: true,
        basic: true,
        secondary: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          style: {
            display: "none"
          },
          type: "file",
          accept: "image/*",
          onChange: handleChange,
          name: "media",
          ref: inputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onDragOver: e => {
            e.preventDefault();
            setHighlighted(true);
          },
          onDragLeave: e => {
            e.preventDefault();
            setHighlighted(false);
          },
          onDrop: e => {
            e.preventDefault();
            setHighlighted(true);
            const droppedFile = Array.from(e.dataTransfer.files);
            setMedia(droppedFile[0]);
            setMediaPreview(URL.createObjectURL(droppedFile[0]));
          },
          children: mediaPreview === null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
              color: highlighted ? "green" : "",
              placeholder: true,
              basic: true,
              children: checkForSignupPage()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this)
          }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
              color: "green",
              placeholder: true,
              basic: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                src: mediaPreview,
                size: "medium",
                centered: true,
                style: {
                  cursor: "pointer"
                },
                onClick: () => inputRef.current.click()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 17
            }, this)
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (ImageDropDiv);

/***/ }),

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

var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Layout\\Spinner.js";


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


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Profile\\Followers.js";









function Followers({
  user,
  loggedUserFollowStats,
  setUserFollowStats,
  profileUserId
}) {
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
    }, this) : followers.length > 0 ? followers.map(profileFollower => {
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
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            avatar: true,
            src: profileFollower.user.profilePicUrl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            as: "a",
            href: `/${profileFollower.user.username}`,
            children: profileFollower.user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }, this)
      }, profileFollower.user._id, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, this);
    }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_NoData__WEBPACK_IMPORTED_MODULE_4__.NoFollowData, {
      followersComponent: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

;
/* harmony default export */ __webpack_exports__["default"] = (Followers);

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


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Profile\\Following.js";









function Following({
  user,
  loggedUserFollowStats,
  setUserFollowStats,
  profileUserId
}) {
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
    }, this) : following.length > 0 ? following.map(profileFollowing => {
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
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            avatar: true,
            src: profileFollowing.user.profilePicUrl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            as: "a",
            href: `/${profileFollowing.user.username}`,
            children: profileFollowing.user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }, this)
      }, profileFollowing.user._id, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, this);
    }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_NoData__WEBPACK_IMPORTED_MODULE_4__.NoFollowData, {
      followingComponent: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

;
/* harmony default export */ __webpack_exports__["default"] = (Following);

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


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Profile\\ProfileHeader.js";




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


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Profile\\ProfileMenuTabs.js";



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

/***/ "./components/Profile/Settings.js":
/*!****************************************!*\
  !*** ./components/Profile/Settings.js ***!
  \****************************************/
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


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Profile\\Settings.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Settings({
  newMessagePopup
}) {
  const {
    0: passwordFields,
    1: showPasswordFields
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: newMessageSettings,
    1: showNewMessageSettings
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
  const {
    0: popupSetting,
    1: setPopupSetting
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(newMessagePopup);
  const {
    0: success,
    1: setSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    success && setTimeout(() => setSuccess(false), 3000);
  }, [success]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
  }, [popupSetting]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [success && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
        success: true,
        icon: "check circle",
        header: "Updated Successfully"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this)]
    }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
      size: "huge",
      animated: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Icon, {
          name: "user secret",
          size: "large",
          verticalAlign: "middle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
            onClick: () => showPasswordFields(!passwordFields),
            as: "a",
            content: "Update Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), passwordFields && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UpdatePassword, {
          setSuccess: setSuccess,
          showPasswordFields: showPasswordFields
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Icon, {
          name: "paper plane outline",
          size: "large",
          verticalAlign: "middle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
            onClick: () => showNewMessageSettings(!newMessageSettings),
            as: "a",
            content: "Show New Message Popup?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            marginTop: "10px"
          },
          children: ["Control whether a Popup should appear when there is a New Message or not.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
            checked: popupSetting,
            toggle: true,
            onChange: () => (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_3__.toggleMessagePopup)(popupSetting, setPopupSetting, setSuccess)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

const UpdatePassword = ({
  setSuccess,
  showPasswordFields
}) => {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: errorMsg,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: userPasswords,
    1: setUserPasswords
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    currentPassword: "",
    newPassword: ""
  });
  const {
    0: typed,
    1: showTyped
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    field1: false,
    field2: false
  });
  const {
    field1,
    field2
  } = typed;
  const {
    currentPassword,
    newPassword
  } = userPasswords;

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setUserPasswords(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    errorMsg && setTimeout(() => setError(null), 5000);
  }, [errorMsg]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
      error: errorMsg !== null,
      loading: loading,
      onSubmit: async e => {
        e.preventDefault();
        setLoading(true);
        await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_3__.passwordUpdate)(setSuccess, userPasswords);
        setLoading(false);
        showPasswordFields(false);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.List, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
            fluid: true,
            icon: {
              name: "eye",
              circular: true,
              link: true,
              onClick: () => showTyped(prev => _objectSpread(_objectSpread({}, prev), {}, {
                field1: !field1
              }))
            },
            type: field1 ? "text" : "password",
            iconPosition: "left",
            label: "Current Password",
            placeholder: "Enter current Password",
            name: "currentPassword",
            onChange: handleChange,
            value: currentPassword
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
            fluid: true,
            icon: {
              name: "eye",
              circular: true,
              link: true,
              onClick: () => showTyped(prev => _objectSpread(_objectSpread({}, prev), {}, {
                field2: !field2
              }))
            },
            type: field2 ? "text" : "password",
            iconPosition: "left",
            label: "New Password",
            placeholder: "Enter New Password",
            name: "newPassword",
            onChange: handleChange,
            value: newPassword
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            disabled: loading || currentPassword === "" || newPassword === "",
            compact: true,
            icon: "configure",
            type: "submit",
            color: "teal",
            content: "Confirm"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            disabled: loading,
            compact: true,
            icon: "cancel",
            type: "button",
            content: "Cancel",
            onClick: () => showPasswordFields(false)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
            icon: "meh",
            error: true,
            header: "Oops!",
            content: errorMsg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
      hidden: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./components/Profile/UpdateProfile.js":
/*!*********************************************!*\
  !*** ./components/Profile/UpdateProfile.js ***!
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
/* harmony import */ var _Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var _Common_CommonInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Profile\\UpdateProfile.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function UpdateProfile({
  Profile
}) {
  const {
    0: profile,
    1: setProfile
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    profilePicUrl: Profile.user.profilePicUrl,
    address: Profile.address || "",
    bio: Profile.bio || "",
    facebook: Profile.social && Profile.social.facebook || "",
    youtube: Profile.social && Profile.social.youtube || "",
    instagram: Profile.social && Profile.social.instagram || "",
    twitter: Profile.social && Profile.social.twitter || ""
  });
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setProfile(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
      error: errorMsg !== null,
      loading: loading,
      onSubmit: async e => {
        e.preventDefault();
        setLoading(true);
        let profilePicUrl;

        if (media !== null) {
          profilePicUrl = await (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_5__.default)(media);
        }

        if (media !== null && !profilePicUrl) {
          setLoading(false);
          return setErrorMsg("Error Uploading Image");
        }

        await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_6__.profileUpdate)(profile, setLoading, setErrorMsg, profilePicUrl);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
        onDismiss: () => setErrorMsg(false),
        error: true,
        content: errorMsg,
        attached: true,
        header: "Oops!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__.default, {
        inputRef: inputRef,
        highlighted: highlighted,
        setHighlighted: setHighlighted,
        handleChange: handleChange,
        mediaPreview: mediaPreview,
        setMediaPreview: setMediaPreview,
        setMedia: setMedia,
        profilePicUrl: profile.profilePicUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_4__.default, {
        user: profile,
        handleChange: handleChange,
        showSocialLinks: showSocialLinks,
        setShowSocialLinks: setShowSocialLinks
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        color: "blue",
        icon: "pencil alternate",
        disabled: profile.bio === "" || loading,
        content: "Submit",
        type: "submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (UpdateProfile);

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
/* harmony import */ var _components_Profile_UpdateProfile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Profile/UpdateProfile */ "./components/Profile/UpdateProfile.js");
/* harmony import */ var _components_Profile_Settings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Profile/Settings */ "./components/Profile/Settings.js");


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\pages\\[username].js";


















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
    lineNumber: 39,
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
      lineNumber: 67,
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
            lineNumber: 72,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
              lineNumber: 87,
              columnNumber: 17
            }, this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_10__.PlaceHolderPosts, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 19
            }, this) : posts.length > 0 ? posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_8__.default, {
              post: post,
              user: user,
              setPosts: setPosts,
              setShowToastr: setShowToastr
            }, post._id, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 21
            }, this)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__.NoProfilePosts, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 19
            }, this)]
          }, void 0, true), activeItem === "followers" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_Followers__WEBPACK_IMPORTED_MODULE_13__.default, {
            user: user,
            loggedUserFollowStats: loggedUserFollowStats,
            setUserFollowStats: setUserFollowStats,
            profileUserId: profile.user._id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, this), activeItem === "following" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_Following__WEBPACK_IMPORTED_MODULE_14__.default, {
            user: user,
            loggedUserFollowStats: loggedUserFollowStats,
            setUserFollowStats: setUserFollowStats,
            profileUserId: profile.user._id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, this), activeItem === "updateProfile" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_UpdateProfile__WEBPACK_IMPORTED_MODULE_16__.default, {
            Profile: profile
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 48
          }, this), activeItem === "settings" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_Settings__WEBPACK_IMPORTED_MODULE_17__.default, {
            newMessagePopup: user.newMessagePopup
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
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

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/***/ (function() {



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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_baseUrl_js-utils_catchErrors_js","components_Layout_NoData_js-utils_calculateTime_js","components_Layout_Toastr_js-components_Post_CardPost_js-utils_uploadPicToCloudinary_js","utils_profileActions_js"], function() { return __webpack_exec__("./pages/[username].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9Db21tb24vQ29tbW9uSW5wdXRzLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9jb21wb25lbnRzL0NvbW1vbi9JbWFnZURyb3BEaXYuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvTGF5b3V0L1NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvUHJvZmlsZS9Gb2xsb3dlcnMuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvUHJvZmlsZS9Gb2xsb3dpbmcuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlSGVhZGVyLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZU1lbnVUYWJzLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9jb21wb25lbnRzL1Byb2ZpbGUvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvUHJvZmlsZS9VcGRhdGVQcm9maWxlLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9wYWdlcy9bdXNlcm5hbWVdLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiQ29tbW9uSW5wdXRzIiwidXNlciIsImJpbyIsImFkZHJlc3MiLCJpbnN0YWdyYW0iLCJmYWNlYm9vayIsInR3aXR0ZXIiLCJ5b3V0dWJlIiwiaGFuZGxlQ2hhbmdlIiwic2hvd1NvY2lhbExpbmtzIiwic2V0U2hvd1NvY2lhbExpbmtzIiwiVGV4dEFyZWEiLCJJbWFnZURyb3BEaXYiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwiaW5wdXRSZWYiLCJtZWRpYVByZXZpZXciLCJzZXRNZWRpYVByZXZpZXciLCJzZXRNZWRpYSIsInByb2ZpbGVQaWNVcmwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaWdudXBSb3V0ZSIsInBhdGhuYW1lIiwiY2hlY2tGb3JTaWdudXBQYWdlIiwiY3Vyc29yIiwiY3VycmVudCIsImNsaWNrIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRyb3BwZWRGaWxlIiwiQXJyYXkiLCJmcm9tIiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJTcGlubmVyIiwiRm9sbG93ZXJzIiwibG9nZ2VkVXNlckZvbGxvd1N0YXRzIiwic2V0VXNlckZvbGxvd1N0YXRzIiwicHJvZmlsZVVzZXJJZCIsImZvbGxvd2VycyIsInNldEZvbGxvd2VycyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmb2xsb3dMb2FkaW5nIiwic2V0Rm9sbG93TG9hZGluZyIsInVzZUVmZmVjdCIsImdldEZvbGxvd2VycyIsInJlcyIsImF4aW9zIiwiYmFzZVVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29va2llIiwiZGF0YSIsImVycm9yIiwiYWxlcnQiLCJsZW5ndGgiLCJtYXAiLCJwcm9maWxlRm9sbG93ZXIiLCJpc0ZvbGxvd2luZyIsImZvbGxvd2luZyIsImZpbHRlciIsIl9pZCIsInVuZm9sbG93VXNlciIsImZvbGxvd1VzZXIiLCJ1c2VybmFtZSIsIm5hbWUiLCJGb2xsb3dpbmciLCJzZXRGb2xsb3dpbmciLCJnZXRGb2xsb3dpbmciLCJwcm9maWxlRm9sbG93aW5nIiwiUHJvZmlsZUhlYWRlciIsInByb2ZpbGUiLCJvd25BY2NvdW50IiwibWFyZ2luQm90dG9tIiwic29jaWFsIiwiZW1haWwiLCJjb2xvciIsIlByb2ZpbGVNZW51VGFicyIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJmb2xsb3dlcnNMZW5ndGgiLCJmb2xsb3dpbmdMZW5ndGgiLCJTZXR0aW5ncyIsIm5ld01lc3NhZ2VQb3B1cCIsInBhc3N3b3JkRmllbGRzIiwic2hvd1Bhc3N3b3JkRmllbGRzIiwibmV3TWVzc2FnZVNldHRpbmdzIiwic2hvd05ld01lc3NhZ2VTZXR0aW5ncyIsImlzRmlyc3RSdW4iLCJ1c2VSZWYiLCJwb3B1cFNldHRpbmciLCJzZXRQb3B1cFNldHRpbmciLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsInNldFRpbWVvdXQiLCJtYXJnaW5Ub3AiLCJ0b2dnbGVNZXNzYWdlUG9wdXAiLCJVcGRhdGVQYXNzd29yZCIsImVycm9yTXNnIiwic2V0RXJyb3IiLCJ1c2VyUGFzc3dvcmRzIiwic2V0VXNlclBhc3N3b3JkcyIsImN1cnJlbnRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwidHlwZWQiLCJzaG93VHlwZWQiLCJmaWVsZDEiLCJmaWVsZDIiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJwYXNzd29yZFVwZGF0ZSIsImNpcmN1bGFyIiwibGluayIsIm9uQ2xpY2siLCJVcGRhdGVQcm9maWxlIiwiUHJvZmlsZSIsInNldFByb2ZpbGUiLCJzZXRFcnJvck1zZyIsIm1lZGlhIiwidXBsb2FkUGljIiwicHJvZmlsZVVwZGF0ZSIsIlByb2ZpbGVQYWdlIiwiZXJyb3JMb2FkaW5nIiwidXNlckZvbGxvd1N0YXRzIiwicG9zdHMiLCJzZXRQb3N0cyIsInNob3dUb2FzdHIiLCJzZXRTaG93VG9hc3RyIiwic2V0QWN0aXZlSXRlbSIsImNsaWNrZWRUYWIiLCJnZXRQb3N0cyIsInF1ZXJ5IiwicG9zdCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInRva2VuIiwicGFyc2VDb29raWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFlBQVQsQ0FBc0I7QUFBQ0MsTUFBSSxFQUFDO0FBQUNDLE9BQUQ7QUFBS0MsV0FBTDtBQUFhQyxhQUFiO0FBQXVCQyxZQUF2QjtBQUFnQ0MsV0FBaEM7QUFBd0NDO0FBQXhDLEdBQU47QUFBdURDLGNBQXZEO0FBQW9FQyxpQkFBcEU7QUFBb0ZDO0FBQXBGLENBQXRCLEVBQStIO0FBQzNILHNCQUNJO0FBQUEsNEJBQ0EsOERBQUMseURBQUQ7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QjtBQUR1RCxLQUFoRCxDQUFsQjtBQUlBLFVBQU07QUFBRWpFLGFBQUY7QUFBV1MscUJBQVg7QUFBNEJDO0FBQTVCLFFBQWdEbkMsR0FBRyxDQUFDTSxJQUExRDtBQUVBLFdBQU87QUFBRW1CLGFBQUY7QUFBV1MscUJBQVg7QUFBNEJDO0FBQTVCLEtBQVA7QUFDRCxHQVhELENBV0UsT0FBTzVCLEtBQVAsRUFBYztBQUNkLFdBQU87QUFBRXNFLGtCQUFZLEVBQUU7QUFBaEIsS0FBUDtBQUNEO0FBQ0YsQ0FmRDs7QUFpQkEsK0RBQWVELFdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0pBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL1t1c2VybmFtZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Rm9ybSxCdXR0b24sU2VnbWVudCxNZXNzYWdlLFRleHRBcmVhLERpdmlkZXJ9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuXHJcblxyXG5mdW5jdGlvbiBDb21tb25JbnB1dHMoe3VzZXI6e2JpbyxhZGRyZXNzLGluc3RhZ3JhbSxmYWNlYm9vayx0d2l0dGVyLHlvdXR1YmV9LGhhbmRsZUNoYW5nZSxzaG93U29jaWFsTGlua3Msc2V0U2hvd1NvY2lhbExpbmtzfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxGb3JtLkZpZWxkXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICBsYWJlbD1cIkFkZHJlc3NcIlxyXG4gICAgICAgIGNvbnRyb2w9e1RleHRBcmVhfVxyXG4gICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcclxuICAgICAgICB2YWx1ZT17YWRkcmVzc31cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Rm9ybS5GaWVsZFxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgbGFiZWw9XCJCaW9cIlxyXG4gICAgICAgIGNvbnRyb2w9e1RleHRBcmVhfVxyXG4gICAgICAgIG5hbWU9XCJiaW9cIlxyXG4gICAgICAgIHZhbHVlPXtiaW99XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cImJpb1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJBZGQgU29jaWFsIExpbmtzXCIgY29sb3I9XCJyZWRcIiBpY29uPVwiYXRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCk9PnNldFNob3dTb2NpYWxMaW5rcyghc2hvd1NvY2lhbExpbmtzKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtzaG93U29jaWFsTGlua3MgJiYgPD5cclxuICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgIGljb249XCJmYWNlYm9vayBmXCJcclxuICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgbmFtZT1cImZhY2Vib29rXCJcclxuICAgICAgICAgIHZhbHVlPXtmYWNlYm9va31cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgaWNvbj1cImluc3RhZ3JhbVwiXHJcbiAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIG5hbWU9XCJpbnN0YWdyYW1cIlxyXG4gICAgICAgICAgdmFsdWU9e2luc3RhZ3JhbX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgaWNvbj1cInR3aXR0ZXJcIlxyXG4gICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICBuYW1lPVwidHdpdHRlclwiXHJcbiAgICAgICAgICB2YWx1ZT17dHdpdHRlcn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgaWNvbj1cInlvdXR1YmUgcGxheVwiXHJcbiAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIG5hbWU9XCJ5b3V0dWJlXCJcclxuICAgICAgICAgIHZhbHVlPXt5b3V0dWJlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8TWVzc2FnZSBpY29uPVwiYXR0ZW50aW9uXCIgaW5mbyBzaXplPVwic21hbGxcIiBoZWFkZXI9XCJTb2NpYWwgTWVkaWEgTGlua3MgYXJlIE9wdGlvbmFsXCIgLz5cclxuICAgICAgICA8Lz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1vbklucHV0c1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIFNlZ21lbnQsIEltYWdlLCBJY29uLCBIZWFkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmZ1bmN0aW9uIEltYWdlRHJvcERpdih7XHJcbiAgaGlnaGxpZ2h0ZWQsXHJcbiAgc2V0SGlnaGxpZ2h0ZWQsXHJcbiAgaW5wdXRSZWYsXHJcbiAgaGFuZGxlQ2hhbmdlLFxyXG4gIG1lZGlhUHJldmlldyxcclxuICBzZXRNZWRpYVByZXZpZXcsXHJcbiAgc2V0TWVkaWEsXHJcbiAgcHJvZmlsZVBpY1VybFxyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHNpZ251cFJvdXRlID0gcm91dGVyLnBhdGhuYW1lID09PSBcIi9zaWdudXBcIjtcclxuXHJcbiAgY29uc3QgY2hlY2tGb3JTaWdudXBQYWdlID0gKCkgPT5cclxuICAgIHNpZ251cFJvdXRlID8gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIgaWNvbj5cclxuICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgIG5hbWU9XCJmaWxlIGltYWdlIG91dGxpbmVcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cclxuICAgICAgICAgICAgc2l6ZT1cImh1Z2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIERyYWcgbiBEcm9wIG9yIENsaWNrIHRvIHVwbG9hZCBpbWFnZVxyXG4gICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8Lz5cclxuICAgICkgOiAoXHJcbiAgICAgIDxzcGFuIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17cHJvZmlsZVBpY1VybH1cclxuICAgICAgICAgIGFsdD1cIlByb2ZpbGUgcGljXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cclxuICAgICAgICAgIHNpemU9XCJodWdlXCJcclxuICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICBEcmFnIG4gRHJvcCBvciBDbGljayB0byB1cGxvYWQgaW1hZ2VcclxuICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgIDxTZWdtZW50IHBsYWNlaG9sZGVyIGJhc2ljIHNlY29uZGFyeT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBuYW1lPVwibWVkaWFcIlxyXG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uRHJhZ092ZXI9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25EcmFnTGVhdmU9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uRHJvcD17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCBkcm9wcGVkRmlsZSA9IEFycmF5LmZyb20oZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xyXG4gICAgICAgICAgICAgIHNldE1lZGlhKGRyb3BwZWRGaWxlWzBdKTtcclxuICAgICAgICAgICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChkcm9wcGVkRmlsZVswXSkpO1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge21lZGlhUHJldmlldyA9PT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPXtoaWdobGlnaHRlZCA/IFwiZ3JlZW5cIiA6IFwiXCJ9IHBsYWNlaG9sZGVyIGJhc2ljPlxyXG4gICAgICAgICAgICAgIHtjaGVja0ZvclNpZ251cFBhZ2UoKX1cclxuICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj1cImdyZWVuXCIgcGxhY2Vob2xkZXIgYmFzaWM+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VEcm9wRGl2O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IFNwaW5uZXIgPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT1cIm15U3Bpbm5lclwiIC8+O1xyXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEltYWdlLCBMaXN0IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9MYXlvdXQvU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBOb0ZvbGxvd0RhdGEgfSBmcm9tIFwiLi4vTGF5b3V0L05vRGF0YVwiO1xyXG5pbXBvcnQgeyBmb2xsb3dVc2VyLCB1bmZvbGxvd1VzZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmZ1bmN0aW9uIEZvbGxvd2Vycyh7IHVzZXIsIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cywgc2V0VXNlckZvbGxvd1N0YXRzLCBwcm9maWxlVXNlcklkIH0pe1xyXG4gIGNvbnN0IFtmb2xsb3dlcnMsIHNldEZvbGxvd2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmb2xsb3dMb2FkaW5nLCBzZXRGb2xsb3dMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldEZvbGxvd2VycyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Byb2ZpbGUvZm9sbG93ZXJzLyR7cHJvZmlsZVVzZXJJZH1gLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEZvbGxvd2VycyhyZXMuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoXCJFcnJvciBMb2FkaW5nIEZvbGxvd2Vyc1wiKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0Rm9sbG93ZXJzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgKSA6IGZvbGxvd2Vycy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIGZvbGxvd2Vycy5tYXAocHJvZmlsZUZvbGxvd2VyID0+IHtcclxuICAgICAgICAgIC8qICAqL1xyXG5cclxuICAgICAgICAgIGNvbnN0IGlzRm9sbG93aW5nID1cclxuICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIGZvbGxvd2luZyA9PiBmb2xsb3dpbmcudXNlciA9PT0gcHJvZmlsZUZvbGxvd2VyLnVzZXIuX2lkXHJcbiAgICAgICAgICAgICkubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGlzdCBrZXk9e3Byb2ZpbGVGb2xsb3dlci51c2VyLl9pZH0gZGl2aWRlZCB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgZmxvYXRlZD1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlRm9sbG93ZXIudXNlci5faWQgIT09IHVzZXIuX2lkICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17aXNGb2xsb3dpbmcgPyBcImluc3RhZ3JhbVwiIDogXCJ0d2l0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpc0ZvbGxvd2luZyA/IFwiY2hlY2tcIiA6IFwiYWRkIHVzZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2lzRm9sbG93aW5nID8gXCJGb2xsb3dpbmdcIiA6IFwiRm9sbG93XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Zm9sbG93TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9sbG93TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sbG93aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB1bmZvbGxvd1VzZXIocHJvZmlsZUZvbGxvd2VyLnVzZXIuX2lkLCBzZXRVc2VyRm9sbG93U3RhdHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmb2xsb3dVc2VyKHByb2ZpbGVGb2xsb3dlci51c2VyLl9pZCwgc2V0VXNlckZvbGxvd1N0YXRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvbGxvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgYXZhdGFyIHNyYz17cHJvZmlsZUZvbGxvd2VyLnVzZXIucHJvZmlsZVBpY1VybH0gLz5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgYXM9XCJhXCIgaHJlZj17YC8ke3Byb2ZpbGVGb2xsb3dlci51c2VyLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZUZvbGxvd2VyLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPE5vRm9sbG93RGF0YSBmb2xsb3dlcnNDb21wb25lbnQ9e3RydWV9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93ZXJzOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW1hZ2UsIExpc3QgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL0xheW91dC9TcGlubmVyXCI7XHJcbmltcG9ydCB7IE5vRm9sbG93RGF0YSB9IGZyb20gXCIuLi9MYXlvdXQvTm9EYXRhXCI7XHJcbmltcG9ydCB7IGZvbGxvd1VzZXIsIHVuZm9sbG93VXNlciB9IGZyb20gXCIuLi8uLi91dGlscy9wcm9maWxlQWN0aW9uc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZnVuY3Rpb24gRm9sbG93aW5nICh7IHVzZXIsIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cywgc2V0VXNlckZvbGxvd1N0YXRzLCBwcm9maWxlVXNlcklkIH0pe1xyXG4gIGNvbnN0IFtmb2xsb3dpbmcsIHNldEZvbGxvd2luZ10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmb2xsb3dMb2FkaW5nLCBzZXRGb2xsb3dMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldEZvbGxvd2luZyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Byb2ZpbGUvZm9sbG93aW5nLyR7cHJvZmlsZVVzZXJJZH1gLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldEZvbGxvd2luZyhyZXMuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoXCJFcnJvciBMb2FkaW5nIEZvbGxvd2Vyc1wiKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0Rm9sbG93aW5nKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPFNwaW5uZXIgLz5cclxuICAgICAgKSA6IGZvbGxvd2luZy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgIGZvbGxvd2luZy5tYXAocHJvZmlsZUZvbGxvd2luZyA9PiB7XHJcbiAgICAgICAgICAvKiAgKi9cclxuXHJcbiAgICAgICAgICBjb25zdCBpc0ZvbGxvd2luZyA9XHJcbiAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmZpbHRlcihcclxuICAgICAgICAgICAgICBmb2xsb3dpbmcgPT4gZm9sbG93aW5nLnVzZXIgPT09IHByb2ZpbGVGb2xsb3dpbmcudXNlci5faWRcclxuICAgICAgICAgICAgKS5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaXN0IGtleT17cHJvZmlsZUZvbGxvd2luZy51c2VyLl9pZH0gZGl2aWRlZCB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQgZmxvYXRlZD1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlRm9sbG93aW5nLnVzZXIuX2lkICE9PSB1c2VyLl9pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2lzRm9sbG93aW5nID8gXCJpbnN0YWdyYW1cIiA6IFwidHdpdHRlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17aXNGb2xsb3dpbmcgPyBcImNoZWNrXCIgOiBcImFkZCB1c2VyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpc0ZvbGxvd2luZyA/IFwiRm9sbG93aW5nXCIgOiBcIkZvbGxvd1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZvbGxvd0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvbGxvd0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvd2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdW5mb2xsb3dVc2VyKHByb2ZpbGVGb2xsb3dpbmcudXNlci5faWQsIHNldFVzZXJGb2xsb3dTdGF0cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZvbGxvd1VzZXIocHJvZmlsZUZvbGxvd2luZy51c2VyLl9pZCwgc2V0VXNlckZvbGxvd1N0YXRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvbGxvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgYXZhdGFyIHNyYz17cHJvZmlsZUZvbGxvd2luZy51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGFzPVwiYVwiIGhyZWY9e2AvJHtwcm9maWxlRm9sbG93aW5nLnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlRm9sbG93aW5nLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPE5vRm9sbG93RGF0YSBmb2xsb3dpbmdDb21wb25lbnQ9e3RydWV9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93aW5nOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWdtZW50LCBJbWFnZSwgR3JpZCwgRGl2aWRlciwgSGVhZGVyLCBCdXR0b24sIExpc3QgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgZm9sbG93VXNlciwgdW5mb2xsb3dVc2VyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlSGVhZGVyKHtcclxuICBwcm9maWxlLFxyXG4gIG93bkFjY291bnQsXHJcbiAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLFxyXG4gIHNldFVzZXJGb2xsb3dTdGF0c1xyXG59KSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpc0ZvbGxvd2luZyA9XHJcbiAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmxlbmd0aCA+IDAgJiZcclxuICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcuZmlsdGVyKFxyXG4gICAgICBmb2xsb3dpbmcgPT4gZm9sbG93aW5nLnVzZXIgPT09IHByb2ZpbGUudXNlci5faWRcclxuICAgICkubGVuZ3RoID4gMDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgIDxHcmlkIHN0YWNrYWJsZT5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTF9PlxyXG4gICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgYXM9XCJoMlwiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9maWxlLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcblxyXG4gICAgICAgICAgICA8R3JpZC5Sb3cgc3RyZXRjaGVkPlxyXG4gICAgICAgICAgICAgIHtwcm9maWxlLmJpb31cclxuICAgICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICB7cHJvZmlsZS5zb2NpYWwgPyAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGNvbnRlbnQ9e3Byb2ZpbGUudXNlci5lbWFpbH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZS5zb2NpYWwuZmFjZWJvb2sgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJmYWNlYm9va1wiIGNvbG9yPVwiYmx1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9maWxlLnNvY2lhbC5mYWNlYm9va31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZS5zb2NpYWwuaW5zdGFncmFtICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPVwiaW5zdGFncmFtXCIgY29sb3I9XCJyZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17cHJvZmlsZS5zb2NpYWwuaW5zdGFncmFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlLnNvY2lhbC55b3V0dWJlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPVwieW91dHViZVwiIGNvbG9yPVwicmVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb2ZpbGUuc29jaWFsLnlvdXR1YmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuc29jaWFsLnR3aXR0ZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJ0d2l0dGVyXCIgY29sb3I9XCJibHVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb2ZpbGUuc29jaWFsLnR3aXR0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8Pk5vIFNvY2lhbCBNZWRpYSBMaW5rcyA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezV9IHN0cmV0Y2hlZCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc2l6ZT1cImxhcmdlXCIgYXZhdGFyIHNyYz17cHJvZmlsZS51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgeyFvd25BY2NvdW50ICYmIChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb21wYWN0XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtpc0ZvbGxvd2luZyA/IFwiRm9sbG93aW5nXCIgOiBcIkZvbGxvd1wifVxyXG4gICAgICAgICAgICAgICAgaWNvbj17aXNGb2xsb3dpbmcgPyBcImNoZWNrIGNpcmNsZVwiIDogXCJhZGQgdXNlclwifVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e2lzRm9sbG93aW5nID8gXCJpbnN0YWdyYW1cIiA6IFwidHdpdHRlclwifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICBpc0ZvbGxvd2luZ1xyXG4gICAgICAgICAgICAgICAgICAgID8gYXdhaXQgdW5mb2xsb3dVc2VyKHByb2ZpbGUudXNlci5faWQsIHNldFVzZXJGb2xsb3dTdGF0cylcclxuICAgICAgICAgICAgICAgICAgICA6IGF3YWl0IGZvbGxvd1VzZXIocHJvZmlsZS51c2VyLl9pZCwgc2V0VXNlckZvbGxvd1N0YXRzKTtcclxuICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlTWVudVRhYnMoe1xyXG4gIGFjdGl2ZUl0ZW0sXHJcbiAgaGFuZGxlSXRlbUNsaWNrLFxyXG4gIGZvbGxvd2Vyc0xlbmd0aCxcclxuICBmb2xsb3dpbmdMZW5ndGgsXHJcbiAgb3duQWNjb3VudCxcclxuICBsb2dnZWRVc2VyRm9sbG93U3RhdHNcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TWVudSBwb2ludGluZyBzZWNvbmRhcnk+XHJcbiAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgbmFtZT1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcInByb2ZpbGVcIn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhcInByb2ZpbGVcIil9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgbmFtZT17YCR7Zm9sbG93ZXJzTGVuZ3RofSBmb2xsb3dlcnNgfVxyXG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcImZvbGxvd2Vyc1wifVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKFwiZm9sbG93ZXJzXCIpfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHtvd25BY2NvdW50ID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgID8gbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgOiAwXHJcbiAgICAgICAgICAgICAgfSBmb2xsb3dpbmdgfVxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJmb2xsb3dpbmdcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soXCJmb2xsb3dpbmdcIil9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cIlVwZGF0ZSBQcm9maWxlXCJcclxuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09IFwidXBkYXRlUHJvZmlsZVwifVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhcInVwZGF0ZVByb2ZpbGVcIil9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNldHRpbmdzXCJcclxuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09IFwic2V0dGluZ3NcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soXCJzZXR0aW5nc1wiKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgIG5hbWU9e2Ake2ZvbGxvd2luZ0xlbmd0aH0gZm9sbG93aW5nYH1cclxuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcImZvbGxvd2luZ1wifVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soXCJmb2xsb3dpbmdcIil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVNZW51VGFicztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaXN0LCBEaXZpZGVyLCBNZXNzYWdlLCBDaGVja2JveCwgRm9ybSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHBhc3N3b3JkVXBkYXRlLCB0b2dnbGVNZXNzYWdlUG9wdXAgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIFNldHRpbmdzKHsgbmV3TWVzc2FnZVBvcHVwIH0pIHtcclxuICBjb25zdCBbcGFzc3dvcmRGaWVsZHMsIHNob3dQYXNzd29yZEZpZWxkc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtuZXdNZXNzYWdlU2V0dGluZ3MsIHNob3dOZXdNZXNzYWdlU2V0dGluZ3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpc0ZpcnN0UnVuID0gdXNlUmVmKHRydWUpO1xyXG4gIGNvbnN0IFtwb3B1cFNldHRpbmcsIHNldFBvcHVwU2V0dGluZ10gPSB1c2VTdGF0ZShuZXdNZXNzYWdlUG9wdXApO1xyXG5cclxuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzdWNjZXNzICYmIHNldFRpbWVvdXQoKCkgPT4gc2V0U3VjY2VzcyhmYWxzZSksIDMwMDApO1xyXG4gIH0sIFtzdWNjZXNzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNGaXJzdFJ1bi5jdXJyZW50KSB7XHJcbiAgICAgIGlzRmlyc3RSdW4uY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfSwgW3BvcHVwU2V0dGluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3N1Y2Nlc3MgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TWVzc2FnZSBzdWNjZXNzIGljb249XCJjaGVjayBjaXJjbGVcIiBoZWFkZXI9XCJVcGRhdGVkIFN1Y2Nlc3NmdWxseVwiIC8+XHJcbiAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxMaXN0IHNpemU9XCJodWdlXCIgYW5pbWF0ZWQ+XHJcbiAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cInVzZXIgc2VjcmV0XCIgc2l6ZT1cImxhcmdlXCIgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiIC8+XHJcbiAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICA8TGlzdC5IZWFkZXJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93UGFzc3dvcmRGaWVsZHMoIXBhc3N3b3JkRmllbGRzKX1cclxuICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJVcGRhdGUgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAge3Bhc3N3b3JkRmllbGRzICYmIChcclxuICAgICAgICAgICAgPFVwZGF0ZVBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgc2V0U3VjY2Vzcz17c2V0U3VjY2Vzc31cclxuICAgICAgICAgICAgICBzaG93UGFzc3dvcmRGaWVsZHM9e3Nob3dQYXNzd29yZEZpZWxkc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cInBhcGVyIHBsYW5lIG91dGxpbmVcIiBzaXplPVwibGFyZ2VcIiB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCIgLz5cclxuXHJcbiAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICA8TGlzdC5IZWFkZXJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93TmV3TWVzc2FnZVNldHRpbmdzKCFuZXdNZXNzYWdlU2V0dGluZ3MpfVxyXG4gICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIlNob3cgTmV3IE1lc3NhZ2UgUG9wdXA/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgQ29udHJvbCB3aGV0aGVyIGEgUG9wdXAgc2hvdWxkIGFwcGVhciB3aGVuIHRoZXJlIGlzIGEgTmV3IE1lc3NhZ2Ugb3Igbm90LlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3BvcHVwU2V0dGluZ31cclxuICAgICAgICAgICAgICB0b2dnbGVcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZU1lc3NhZ2VQb3B1cChwb3B1cFNldHRpbmcsIHNldFBvcHVwU2V0dGluZywgc2V0U3VjY2VzcylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuXHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgVXBkYXRlUGFzc3dvcmQgPSAoeyBzZXRTdWNjZXNzLCBzaG93UGFzc3dvcmRGaWVsZHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBbdXNlclBhc3N3b3Jkcywgc2V0VXNlclBhc3N3b3Jkc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBjdXJyZW50UGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBuZXdQYXNzd29yZDogXCJcIlxyXG4gIH0pO1xyXG4gIGNvbnN0IFt0eXBlZCwgc2hvd1R5cGVkXSA9IHVzZVN0YXRlKHtcclxuICAgIGZpZWxkMTogZmFsc2UsXHJcbiAgICBmaWVsZDI6IGZhbHNlXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHsgZmllbGQxLCBmaWVsZDIgfSA9IHR5cGVkO1xyXG5cclxuICBjb25zdCB7IGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQgfSA9IHVzZXJQYXNzd29yZHM7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRVc2VyUGFzc3dvcmRzKHByZXYgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGVycm9yTXNnICYmIHNldFRpbWVvdXQoKCkgPT4gc2V0RXJyb3IobnVsbCksIDUwMDApO1xyXG4gIH0sIFtlcnJvck1zZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9XHJcbiAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgZSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICAgIGF3YWl0IHBhc3N3b3JkVXBkYXRlKHNldFN1Y2Nlc3MsIHVzZXJQYXNzd29yZHMpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgICAgc2hvd1Bhc3N3b3JkRmllbGRzKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPExpc3QuTGlzdD5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImV5ZVwiLFxyXG4gICAgICAgICAgICAgICAgY2lyY3VsYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gc2hvd1R5cGVkKHByZXYgPT4gKHsgLi4ucHJldiwgZmllbGQxOiAhZmllbGQxIH0pKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdHlwZT17ZmllbGQxID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDdXJyZW50IFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGN1cnJlbnQgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjdXJyZW50UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRQYXNzd29yZH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImV5ZVwiLFxyXG4gICAgICAgICAgICAgICAgY2lyY3VsYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gc2hvd1R5cGVkKHByZXYgPT4gKHsgLi4ucHJldiwgZmllbGQyOiAhZmllbGQyIH0pKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdHlwZT17ZmllbGQyID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOZXcgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTmV3IFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwibmV3UGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld1Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgey8qIEJVVFRPTlMgKi99XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgY3VycmVudFBhc3N3b3JkID09PSBcIlwiIHx8IG5ld1Bhc3N3b3JkID09PSBcIlwifVxyXG4gICAgICAgICAgICAgIGNvbXBhY3RcclxuICAgICAgICAgICAgICBpY29uPVwiY29uZmlndXJlXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInRlYWxcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJDb25maXJtXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICAgICAgICBjb21wYWN0XHJcbiAgICAgICAgICAgICAgaWNvbj1cImNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIkNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd1Bhc3N3b3JkRmllbGRzKGZhbHNlKX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxNZXNzYWdlIGljb249XCJtZWhcIiBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e2Vycm9yTXNnfSAvPlxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPC9MaXN0Lkxpc3Q+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VEcm9wRGl2IGZyb20gXCIuLi9Db21tb24vSW1hZ2VEcm9wRGl2XCI7XHJcbmltcG9ydCBDb21tb25JbnB1dHMgZnJvbSBcIi4uL0NvbW1vbi9Db21tb25JbnB1dHNcIjtcclxuaW1wb3J0IHVwbG9hZFBpYyBmcm9tIFwiLi4vLi4vdXRpbHMvdXBsb2FkUGljVG9DbG91ZGluYXJ5XCI7XHJcbmltcG9ydCB7IHByb2ZpbGVVcGRhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIFVwZGF0ZVByb2ZpbGUoeyBQcm9maWxlIH0pIHtcclxuICBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBwcm9maWxlUGljVXJsOiBQcm9maWxlLnVzZXIucHJvZmlsZVBpY1VybCxcclxuICAgIGFkZHJlc3M6UHJvZmlsZS5hZGRyZXNzIHx8IFwiXCIsXHJcbiAgICBiaW86IFByb2ZpbGUuYmlvIHx8IFwiXCIsXHJcbiAgICBmYWNlYm9vazogKFByb2ZpbGUuc29jaWFsICYmIFByb2ZpbGUuc29jaWFsLmZhY2Vib29rKSB8fCBcIlwiLFxyXG4gICAgeW91dHViZTogKFByb2ZpbGUuc29jaWFsICYmIFByb2ZpbGUuc29jaWFsLnlvdXR1YmUpIHx8IFwiXCIsXHJcbiAgICBpbnN0YWdyYW06IChQcm9maWxlLnNvY2lhbCAmJiBQcm9maWxlLnNvY2lhbC5pbnN0YWdyYW0pIHx8IFwiXCIsXHJcbiAgICB0d2l0dGVyOiAoUHJvZmlsZS5zb2NpYWwgJiYgUHJvZmlsZS5zb2NpYWwudHdpdHRlcikgfHwgXCJcIlxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dTb2NpYWxMaW5rcywgc2V0U2hvd1NvY2lhbExpbmtzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbbWVkaWEsIHNldE1lZGlhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttZWRpYVByZXZpZXcsIHNldE1lZGlhUHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCBmaWxlcyB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgaWYgKG5hbWUgPT09IFwibWVkaWFcIikge1xyXG4gICAgICBzZXRNZWRpYShmaWxlc1swXSk7XHJcbiAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKSk7XHJcbiAgICB9XHJcbiAgICBzZXRQcm9maWxlKHByZXYgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfVxyXG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jIGUgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgICBsZXQgcHJvZmlsZVBpY1VybDtcclxuXHJcbiAgICAgICAgICBpZiAobWVkaWEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcHJvZmlsZVBpY1VybCA9IGF3YWl0IHVwbG9hZFBpYyhtZWRpYSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKG1lZGlhICE9PSBudWxsICYmICFwcm9maWxlUGljVXJsKSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0RXJyb3JNc2coXCJFcnJvciBVcGxvYWRpbmcgSW1hZ2VcIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYXdhaXQgcHJvZmlsZVVwZGF0ZShwcm9maWxlLCBzZXRMb2FkaW5nLCBzZXRFcnJvck1zZywgcHJvZmlsZVBpY1VybCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldEVycm9yTXNnKGZhbHNlKX1cclxuICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICBjb250ZW50PXtlcnJvck1zZ31cclxuICAgICAgICAgIGF0dGFjaGVkXHJcbiAgICAgICAgICBoZWFkZXI9XCJPb3BzIVwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEltYWdlRHJvcERpdlxyXG4gICAgICAgICAgaW5wdXRSZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgaGlnaGxpZ2h0ZWQ9e2hpZ2hsaWdodGVkfVxyXG4gICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQ9e3NldEhpZ2hsaWdodGVkfVxyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBtZWRpYVByZXZpZXc9e21lZGlhUHJldmlld31cclxuICAgICAgICAgIHNldE1lZGlhUHJldmlldz17c2V0TWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgc2V0TWVkaWE9e3NldE1lZGlhfVxyXG4gICAgICAgICAgcHJvZmlsZVBpY1VybD17cHJvZmlsZS5wcm9maWxlUGljVXJsfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxDb21tb25JbnB1dHNcclxuICAgICAgICAgIHVzZXI9e3Byb2ZpbGV9XHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIHNob3dTb2NpYWxMaW5rcz17c2hvd1NvY2lhbExpbmtzfVxyXG4gICAgICAgICAgc2V0U2hvd1NvY2lhbExpbmtzPXtzZXRTaG93U29jaWFsTGlua3N9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXHJcbiAgICAgICAgICBpY29uPVwicGVuY2lsIGFsdGVybmF0ZVwiXHJcbiAgICAgICAgICBkaXNhYmxlZD17cHJvZmlsZS5iaW8gPT09IFwiXCIgfHwgbG9hZGluZ31cclxuICAgICAgICAgIGNvbnRlbnQ9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlUHJvZmlsZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBOb1Byb2ZpbGVQb3N0cywgTm9Qcm9maWxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L05vRGF0YVwiO1xyXG5pbXBvcnQgQ2FyZFBvc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdC9DYXJkUG9zdFwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgUGxhY2VIb2xkZXJQb3N0cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9QbGFjZUhvbGRlckdyb3VwXCI7XHJcbmltcG9ydCBQcm9maWxlTWVudVRhYnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlTWVudVRhYnNcIjtcclxuaW1wb3J0IFByb2ZpbGVIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlSGVhZGVyXCI7XHJcbmltcG9ydCBGb2xsb3dlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZS9Gb2xsb3dlcnNcIjtcclxuaW1wb3J0IEZvbGxvd2luZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlL0ZvbGxvd2luZ1wiO1xyXG5pbXBvcnQgeyBQb3N0RGVsZXRlVG9hc3RyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1RvYXN0clwiO1xyXG5pbXBvcnQgVXBkYXRlUHJvZmlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlL1VwZGF0ZVByb2ZpbGVcIjtcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvU2V0dGluZ3NcIlxyXG5mdW5jdGlvbiBQcm9maWxlUGFnZSh7XHJcbiAgZXJyb3JMb2FkaW5nLFxyXG4gIHByb2ZpbGUsXHJcbiAgZm9sbG93ZXJzTGVuZ3RoLFxyXG4gIGZvbGxvd2luZ0xlbmd0aCxcclxuICB1c2VyLFxyXG4gIHVzZXJGb2xsb3dTdGF0c1xyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1RvYXN0ciwgc2V0U2hvd1RvYXN0cl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKFwicHJvZmlsZVwiKTtcclxuICBjb25zdCBoYW5kbGVJdGVtQ2xpY2sgPSBjbGlja2VkVGFiID0+IHNldEFjdGl2ZUl0ZW0oY2xpY2tlZFRhYik7XHJcblxyXG4gIGNvbnN0IFtsb2dnZWRVc2VyRm9sbG93U3RhdHMsIHNldFVzZXJGb2xsb3dTdGF0c10gPSB1c2VTdGF0ZSh1c2VyRm9sbG93U3RhdHMpO1xyXG5cclxuICBjb25zdCBvd25BY2NvdW50ID0gcHJvZmlsZS51c2VyLl9pZCA9PT0gdXNlci5faWQ7XHJcblxyXG4gIGlmIChlcnJvckxvYWRpbmcpIHJldHVybiA8Tm9Qcm9maWxlIC8+O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Byb2ZpbGUvcG9zdHMvJHt1c2VybmFtZX1gLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFBvc3RzKHJlcy5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydChcIkVycm9yIExvYWRpbmcgUG9zdHNcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGdldFBvc3RzKCk7XHJcbiAgfSwgW3JvdXRlci5xdWVyeS51c2VybmFtZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2hvd1RvYXN0ciAmJiBzZXRUaW1lb3V0KCgpID0+IHNldFNob3dUb2FzdHIoZmFsc2UpLCA0MDAwKTtcclxuICB9LCBbc2hvd1RvYXN0cl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3Nob3dUb2FzdHIgJiYgPFBvc3REZWxldGVUb2FzdHIgLz59XHJcblxyXG4gICAgICA8R3JpZCBzdGFja2FibGU+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8UHJvZmlsZU1lbnVUYWJzXHJcbiAgICAgICAgICAgICAgYWN0aXZlSXRlbT17YWN0aXZlSXRlbX1cclxuICAgICAgICAgICAgICBoYW5kbGVJdGVtQ2xpY2s9e2hhbmRsZUl0ZW1DbGlja31cclxuICAgICAgICAgICAgICBmb2xsb3dlcnNMZW5ndGg9e2ZvbGxvd2Vyc0xlbmd0aH1cclxuICAgICAgICAgICAgICBmb2xsb3dpbmdMZW5ndGg9e2ZvbGxvd2luZ0xlbmd0aH1cclxuICAgICAgICAgICAgICBvd25BY2NvdW50PXtvd25BY2NvdW50fVxyXG4gICAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cz17bG9nZ2VkVXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIHthY3RpdmVJdGVtID09PSBcInByb2ZpbGVcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxQcm9maWxlSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgIHByb2ZpbGU9e3Byb2ZpbGV9XHJcbiAgICAgICAgICAgICAgICAgIG93bkFjY291bnQ9e293bkFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cz17bG9nZ2VkVXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAgICAgICBzZXRVc2VyRm9sbG93U3RhdHM9e3NldFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxQbGFjZUhvbGRlclBvc3RzIC8+XHJcbiAgICAgICAgICAgICAgICApIDogcG9zdHMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgcG9zdHMubWFwKHBvc3QgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkUG9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtwb3N0Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBvc3Q9e3Bvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0UG9zdHM9e3NldFBvc3RzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RvYXN0cj17c2V0U2hvd1RvYXN0cn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPE5vUHJvZmlsZVBvc3RzIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2FjdGl2ZUl0ZW0gPT09IFwiZm9sbG93ZXJzXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxGb2xsb3dlcnNcclxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgIHNldFVzZXJGb2xsb3dTdGF0cz17c2V0VXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZVVzZXJJZD17cHJvZmlsZS51c2VyLl9pZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2FjdGl2ZUl0ZW0gPT09IFwiZm9sbG93aW5nXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxGb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgIHNldFVzZXJGb2xsb3dTdGF0cz17c2V0VXNlckZvbGxvd1N0YXRzfVxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZVVzZXJJZD17cHJvZmlsZS51c2VyLl9pZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2FjdGl2ZUl0ZW0gPT09IFwidXBkYXRlUHJvZmlsZVwiICYmIDxVcGRhdGVQcm9maWxlIFByb2ZpbGU9e3Byb2ZpbGV9IC8+fVxyXG4gICAgICAgICAgICB7YWN0aXZlSXRlbSA9PT0gXCJzZXR0aW5nc1wiICYmIChcclxuICAgICAgICAgICAgICA8U2V0dGluZ3MgbmV3TWVzc2FnZVBvcHVwPXt1c2VyLm5ld01lc3NhZ2VQb3B1cH0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuUHJvZmlsZVBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSB9ID0gY3R4LnF1ZXJ5O1xyXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlLyR7dXNlcm5hbWV9YCwge1xyXG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgcHJvZmlsZSwgZm9sbG93ZXJzTGVuZ3RoLCBmb2xsb3dpbmdMZW5ndGggfSA9IHJlcy5kYXRhO1xyXG5cclxuICAgIHJldHVybiB7IHByb2ZpbGUsIGZvbGxvd2Vyc0xlbmd0aCwgZm9sbG93aW5nTGVuZ3RoIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IGVycm9yTG9hZGluZzogdHJ1ZSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==