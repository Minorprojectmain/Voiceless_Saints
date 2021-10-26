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


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\components\\Common\\CommonInputs.js";




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


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\components\\Common\\ImageDropDiv.js";




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

var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\components\\Layout\\Spinner.js";


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


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\components\\Profile\\Followers.js";









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


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\components\\Profile\\Following.js";









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


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\components\\Profile\\ProfileHeader.js";




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


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\components\\Profile\\ProfileMenuTabs.js";



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


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\components\\Profile\\Settings.js";

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


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\components\\Profile\\UpdateProfile.js";

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


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\pages\\[username].js";


















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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_baseUrl_js-utils_catchErrors_js","components_Layout_NoData_js-components_Layout_Toastr_js-components_Post_CardPost_js-utils_upl-d2318b"], function() { return __webpack_exec__("./pages/[username].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9Db21tb24vQ29tbW9uSW5wdXRzLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9jb21wb25lbnRzL0NvbW1vbi9JbWFnZURyb3BEaXYuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvTGF5b3V0L1NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvUHJvZmlsZS9Gb2xsb3dlcnMuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvUHJvZmlsZS9Gb2xsb3dpbmcuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvUHJvZmlsZS9Qcm9maWxlSGVhZGVyLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZU1lbnVUYWJzLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9jb21wb25lbnRzL1Byb2ZpbGUvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvUHJvZmlsZS9VcGRhdGVQcm9maWxlLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9wYWdlcy9bdXNlcm5hbWVdLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi91dGlscy9wcm9maWxlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwicmVhY3QtbW9tZW50XCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkNvbW1vbklucHV0cyIsInVzZXIiLCJiaW8iLCJhZGRyZXNzIiwiaW5zdGFncmFtIiwiZmFjZWJvb2siLCJ0d2l0dGVyIiwieW91dHViZSIsImhhbmRsZUNoYW5nZSIsInNob3dTb2NpYWxMaW5rcyIsInNldFNob3dTb2NpYWxMaW5rcyIsIlRleHRBcmVhIiwiSW1hZ2VEcm9wRGl2IiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsImlucHV0UmVmIiwibWVkaWFQcmV2aWV3Iiwic2V0TWVkaWFQcmV2aWV3Iiwic2V0TWVkaWEiLCJwcm9maWxlUGljVXJsIiwicm91dGVyIiwidXNlUm91dGVyIiwic2lnbnVwUm91dGUiLCJwYXRobmFtZSIsImNoZWNrRm9yU2lnbnVwUGFnZSIsImN1cnNvciIsImN1cnJlbnQiLCJjbGljayIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJlIiwicHJldmVudERlZmF1bHQiLCJkcm9wcGVkRmlsZSIsIkFycmF5IiwiZnJvbSIsImRhdGFUcmFuc2ZlciIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiU3Bpbm5lciIsIkZvbGxvd2VycyIsImxvZ2dlZFVzZXJGb2xsb3dTdGF0cyIsInNldFVzZXJGb2xsb3dTdGF0cyIsInByb2ZpbGVVc2VySWQiLCJmb2xsb3dlcnMiLCJzZXRGb2xsb3dlcnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZm9sbG93TG9hZGluZyIsInNldEZvbGxvd0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJnZXRGb2xsb3dlcnMiLCJyZXMiLCJheGlvcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsImRhdGEiLCJlcnJvciIsImFsZXJ0IiwibGVuZ3RoIiwibWFwIiwicHJvZmlsZUZvbGxvd2VyIiwiaXNGb2xsb3dpbmciLCJmb2xsb3dpbmciLCJmaWx0ZXIiLCJfaWQiLCJ1bmZvbGxvd1VzZXIiLCJmb2xsb3dVc2VyIiwidXNlcm5hbWUiLCJuYW1lIiwiRm9sbG93aW5nIiwic2V0Rm9sbG93aW5nIiwiZ2V0Rm9sbG93aW5nIiwicHJvZmlsZUZvbGxvd2luZyIsIlByb2ZpbGVIZWFkZXIiLCJwcm9maWxlIiwib3duQWNjb3VudCIsIm1hcmdpbkJvdHRvbSIsInNvY2lhbCIsImVtYWlsIiwiY29sb3IiLCJQcm9maWxlTWVudVRhYnMiLCJhY3RpdmVJdGVtIiwiaGFuZGxlSXRlbUNsaWNrIiwiZm9sbG93ZXJzTGVuZ3RoIiwiZm9sbG93aW5nTGVuZ3RoIiwiU2V0dGluZ3MiLCJuZXdNZXNzYWdlUG9wdXAiLCJwYXNzd29yZEZpZWxkcyIsInNob3dQYXNzd29yZEZpZWxkcyIsIm5ld01lc3NhZ2VTZXR0aW5ncyIsInNob3dOZXdNZXNzYWdlU2V0dGluZ3MiLCJpc0ZpcnN0UnVuIiwidXNlUmVmIiwicG9wdXBTZXR0aW5nIiwic2V0UG9wdXBTZXR0aW5nIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJzZXRUaW1lb3V0IiwibWFyZ2luVG9wIiwidG9nZ2xlTWVzc2FnZVBvcHVwIiwiVXBkYXRlUGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yIiwidXNlclBhc3N3b3JkcyIsInNldFVzZXJQYXNzd29yZHMiLCJjdXJyZW50UGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsInR5cGVkIiwic2hvd1R5cGVkIiwiZmllbGQxIiwiZmllbGQyIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2IiwicGFzc3dvcmRVcGRhdGUiLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIiwiVXBkYXRlUHJvZmlsZSIsIlByb2ZpbGUiLCJzZXRQcm9maWxlIiwic2V0RXJyb3JNc2ciLCJtZWRpYSIsInVwbG9hZFBpYyIsInByb2ZpbGVVcGRhdGUiLCJQcm9maWxlUGFnZSIsImVycm9yTG9hZGluZyIsInVzZXJGb2xsb3dTdGF0cyIsInBvc3RzIiwic2V0UG9zdHMiLCJzaG93VG9hc3RyIiwic2V0U2hvd1RvYXN0ciIsInNldEFjdGl2ZUl0ZW0iLCJjbGlja2VkVGFiIiwiZ2V0UG9zdHMiLCJxdWVyeSIsInBvc3QiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ0b2tlbiIsInBhcnNlQ29va2llcyIsIkF4aW9zIiwiYmFzZVVSTCIsInVzZXJUb0ZvbGxvd0lkIiwiY2F0Y2hFcnJvcnMiLCJ1c2VyVG9VbmZvbGxvd0lkIiwicHV0IiwiUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFlBQVQsQ0FBc0I7QUFBQ0MsTUFBSSxFQUFDO0FBQUNDLE9BQUQ7QUFBS0MsV0FBTDtBQUFh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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0Zvcm0sQnV0dG9uLFNlZ21lbnQsTWVzc2FnZSxUZXh0QXJlYSxEaXZpZGVyfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gQ29tbW9uSW5wdXRzKHt1c2VyOntiaW8sYWRkcmVzcyxpbnN0YWdyYW0sZmFjZWJvb2ssdHdpdHRlcix5b3V0dWJlfSxoYW5kbGVDaGFuZ2Usc2hvd1NvY2lhbExpbmtzLHNldFNob3dTb2NpYWxMaW5rc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Rm9ybS5GaWVsZFxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgbGFiZWw9XCJBZGRyZXNzXCJcclxuICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cclxuICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgdmFsdWU9e2FkZHJlc3N9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cImFkZHJlc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvcm0uRmllbGRcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIGxhYmVsPVwiQmlvXCJcclxuICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cclxuICAgICAgICBuYW1lPVwiYmlvXCJcclxuICAgICAgICB2YWx1ZT17YmlvfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJiaW9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiQWRkIFNvY2lhbCBMaW5rc1wiIGNvbG9yPVwicmVkXCIgaWNvbj1cImF0XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT5zZXRTaG93U29jaWFsTGlua3MoIXNob3dTb2NpYWxMaW5rcyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7c2hvd1NvY2lhbExpbmtzICYmIDw+XHJcbiAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICBpY29uPVwiZmFjZWJvb2sgZlwiXHJcbiAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIG5hbWU9XCJmYWNlYm9va1wiXHJcbiAgICAgICAgICB2YWx1ZT17ZmFjZWJvb2t9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgIGljb249XCJpbnN0YWdyYW1cIlxyXG4gICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICBuYW1lPVwiaW5zdGFncmFtXCJcclxuICAgICAgICAgIHZhbHVlPXtpbnN0YWdyYW19XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgIGljb249XCJ0d2l0dGVyXCJcclxuICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgbmFtZT1cInR3aXR0ZXJcIlxyXG4gICAgICAgICAgdmFsdWU9e3R3aXR0ZXJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgIGljb249XCJ5b3V0dWJlIHBsYXlcIlxyXG4gICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICBuYW1lPVwieW91dHViZVwiXHJcbiAgICAgICAgICB2YWx1ZT17eW91dHViZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPE1lc3NhZ2UgaWNvbj1cImF0dGVudGlvblwiIGluZm8gc2l6ZT1cInNtYWxsXCIgaGVhZGVyPVwiU29jaWFsIE1lZGlhIExpbmtzIGFyZSBPcHRpb25hbFwiIC8+XHJcbiAgICAgICAgPC8+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tb25JbnB1dHNcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBTZWdtZW50LCBJbWFnZSwgSWNvbiwgSGVhZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5mdW5jdGlvbiBJbWFnZURyb3BEaXYoe1xyXG4gIGhpZ2hsaWdodGVkLFxyXG4gIHNldEhpZ2hsaWdodGVkLFxyXG4gIGlucHV0UmVmLFxyXG4gIGhhbmRsZUNoYW5nZSxcclxuICBtZWRpYVByZXZpZXcsXHJcbiAgc2V0TWVkaWFQcmV2aWV3LFxyXG4gIHNldE1lZGlhLFxyXG4gIHByb2ZpbGVQaWNVcmxcclxufSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBzaWdudXBSb3V0ZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gXCIvc2lnbnVwXCI7XHJcblxyXG4gIGNvbnN0IGNoZWNrRm9yU2lnbnVwUGFnZSA9ICgpID0+XHJcbiAgICBzaWdudXBSb3V0ZSA/IChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZGVyIGljb24+XHJcbiAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICBuYW1lPVwiZmlsZSBpbWFnZSBvdXRsaW5lXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICAgIHNpemU9XCJodWdlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICBEcmFnIG4gRHJvcCBvciBDbGljayB0byB1cGxvYWQgaW1hZ2VcclxuICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgPC8+XHJcbiAgICApIDogKFxyXG4gICAgICA8c3BhbiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e3Byb2ZpbGVQaWNVcmx9XHJcbiAgICAgICAgICBhbHQ9XCJQcm9maWxlIHBpY1wiXHJcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICBzaXplPVwiaHVnZVwiXHJcbiAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgRHJhZyBuIERyb3Agb3IgQ2xpY2sgdG8gdXBsb2FkIGltYWdlXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICA8U2VnbWVudCBwbGFjZWhvbGRlciBiYXNpYyBzZWNvbmRhcnk+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcclxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkRyYWdPdmVyPXtlID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXtlID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkRyb3A9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgZHJvcHBlZEZpbGUgPSBBcnJheS5mcm9tKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuICAgICAgICAgICAgICBzZXRNZWRpYShkcm9wcGVkRmlsZVswXSk7XHJcbiAgICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZHJvcHBlZEZpbGVbMF0pKTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHttZWRpYVByZXZpZXcgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj17aGlnaGxpZ2h0ZWQgPyBcImdyZWVuXCIgOiBcIlwifSBwbGFjZWhvbGRlciBiYXNpYz5cclxuICAgICAgICAgICAgICB7Y2hlY2tGb3JTaWdudXBQYWdlKCl9XHJcbiAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFNlZ21lbnQgY29sb3I9XCJncmVlblwiIHBsYWNlaG9sZGVyIGJhc2ljPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e21lZGlhUHJldmlld31cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlRHJvcERpdjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBTcGlubmVyID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9XCJteVNwaW5uZXJcIiAvPjtcclxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBJbWFnZSwgTGlzdCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vTGF5b3V0L1NwaW5uZXJcIjtcclxuaW1wb3J0IHsgTm9Gb2xsb3dEYXRhIH0gZnJvbSBcIi4uL0xheW91dC9Ob0RhdGFcIjtcclxuaW1wb3J0IHsgZm9sbG93VXNlciwgdW5mb2xsb3dVc2VyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5mdW5jdGlvbiBGb2xsb3dlcnMoeyB1c2VyLCBsb2dnZWRVc2VyRm9sbG93U3RhdHMsIHNldFVzZXJGb2xsb3dTdGF0cywgcHJvZmlsZVVzZXJJZCB9KXtcclxuICBjb25zdCBbZm9sbG93ZXJzLCBzZXRGb2xsb3dlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZm9sbG93TG9hZGluZywgc2V0Rm9sbG93TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRGb2xsb3dlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlL2ZvbGxvd2Vycy8ke3Byb2ZpbGVVc2VySWR9YCwge1xyXG4gICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRGb2xsb3dlcnMocmVzLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KFwiRXJyb3IgTG9hZGluZyBGb2xsb3dlcnNcIik7XHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEZvbGxvd2VycygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICkgOiBmb2xsb3dlcnMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICBmb2xsb3dlcnMubWFwKHByb2ZpbGVGb2xsb3dlciA9PiB7XHJcbiAgICAgICAgICAvKiAgKi9cclxuXHJcbiAgICAgICAgICBjb25zdCBpc0ZvbGxvd2luZyA9XHJcbiAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmZpbHRlcihcclxuICAgICAgICAgICAgICBmb2xsb3dpbmcgPT4gZm9sbG93aW5nLnVzZXIgPT09IHByb2ZpbGVGb2xsb3dlci51c2VyLl9pZFxyXG4gICAgICAgICAgICApLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpc3Qga2V5PXtwcm9maWxlRm9sbG93ZXIudXNlci5faWR9IGRpdmlkZWQgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGZsb2F0ZWQ9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZUZvbGxvd2VyLnVzZXIuX2lkICE9PSB1c2VyLl9pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2lzRm9sbG93aW5nID8gXCJpbnN0YWdyYW1cIiA6IFwidHdpdHRlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17aXNGb2xsb3dpbmcgPyBcImNoZWNrXCIgOiBcImFkZCB1c2VyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpc0ZvbGxvd2luZyA/IFwiRm9sbG93aW5nXCIgOiBcIkZvbGxvd1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZvbGxvd0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvbGxvd0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGxvd2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdW5mb2xsb3dVc2VyKHByb2ZpbGVGb2xsb3dlci51c2VyLl9pZCwgc2V0VXNlckZvbGxvd1N0YXRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogZm9sbG93VXNlcihwcm9maWxlRm9sbG93ZXIudXNlci5faWQsIHNldFVzZXJGb2xsb3dTdGF0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGb2xsb3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGF2YXRhciBzcmM9e3Byb2ZpbGVGb2xsb3dlci51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGFzPVwiYVwiIGhyZWY9e2AvJHtwcm9maWxlRm9sbG93ZXIudXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGVGb2xsb3dlci51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxOb0ZvbGxvd0RhdGEgZm9sbG93ZXJzQ29tcG9uZW50PXt0cnVlfSAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd2VyczsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEltYWdlLCBMaXN0IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9MYXlvdXQvU3Bpbm5lclwiO1xyXG5pbXBvcnQgeyBOb0ZvbGxvd0RhdGEgfSBmcm9tIFwiLi4vTGF5b3V0L05vRGF0YVwiO1xyXG5pbXBvcnQgeyBmb2xsb3dVc2VyLCB1bmZvbGxvd1VzZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmZ1bmN0aW9uIEZvbGxvd2luZyAoeyB1c2VyLCBsb2dnZWRVc2VyRm9sbG93U3RhdHMsIHNldFVzZXJGb2xsb3dTdGF0cywgcHJvZmlsZVVzZXJJZCB9KXtcclxuICBjb25zdCBbZm9sbG93aW5nLCBzZXRGb2xsb3dpbmddID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZm9sbG93TG9hZGluZywgc2V0Rm9sbG93TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRGb2xsb3dpbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlL2ZvbGxvd2luZy8ke3Byb2ZpbGVVc2VySWR9YCwge1xyXG4gICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRGb2xsb3dpbmcocmVzLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KFwiRXJyb3IgTG9hZGluZyBGb2xsb3dlcnNcIik7XHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEZvbGxvd2luZygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICkgOiBmb2xsb3dpbmcubGVuZ3RoID4gMCA/IChcclxuICAgICAgICBmb2xsb3dpbmcubWFwKHByb2ZpbGVGb2xsb3dpbmcgPT4ge1xyXG4gICAgICAgICAgLyogICovXHJcblxyXG4gICAgICAgICAgY29uc3QgaXNGb2xsb3dpbmcgPVxyXG4gICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgZm9sbG93aW5nID0+IGZvbGxvd2luZy51c2VyID09PSBwcm9maWxlRm9sbG93aW5nLnVzZXIuX2lkXHJcbiAgICAgICAgICAgICkubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGlzdCBrZXk9e3Byb2ZpbGVGb2xsb3dpbmcudXNlci5faWR9IGRpdmlkZWQgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50IGZsb2F0ZWQ9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZUZvbGxvd2luZy51c2VyLl9pZCAhPT0gdXNlci5faWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtpc0ZvbGxvd2luZyA/IFwiaW5zdGFncmFtXCIgOiBcInR3aXR0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGljb249e2lzRm9sbG93aW5nID8gXCJjaGVja1wiIDogXCJhZGQgdXNlclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXNGb2xsb3dpbmcgPyBcIkZvbGxvd2luZ1wiIDogXCJGb2xsb3dcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmb2xsb3dMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGb2xsb3dMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHVuZm9sbG93VXNlcihwcm9maWxlRm9sbG93aW5nLnVzZXIuX2lkLCBzZXRVc2VyRm9sbG93U3RhdHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmb2xsb3dVc2VyKHByb2ZpbGVGb2xsb3dpbmcudXNlci5faWQsIHNldFVzZXJGb2xsb3dTdGF0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGb2xsb3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGF2YXRhciBzcmM9e3Byb2ZpbGVGb2xsb3dpbmcudXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCBhcz1cImFcIiBocmVmPXtgLyR7cHJvZmlsZUZvbGxvd2luZy51c2VyLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZUZvbGxvd2luZy51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxOb0ZvbGxvd0RhdGEgZm9sbG93aW5nQ29tcG9uZW50PXt0cnVlfSAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd2luZzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VnbWVudCwgSW1hZ2UsIEdyaWQsIERpdmlkZXIsIEhlYWRlciwgQnV0dG9uLCBMaXN0IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IGZvbGxvd1VzZXIsIHVuZm9sbG93VXNlciB9IGZyb20gXCIuLi8uLi91dGlscy9wcm9maWxlQWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZUhlYWRlcih7XHJcbiAgcHJvZmlsZSxcclxuICBvd25BY2NvdW50LFxyXG4gIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cyxcclxuICBzZXRVc2VyRm9sbG93U3RhdHNcclxufSkge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaXNGb2xsb3dpbmcgPVxyXG4gICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5sZW5ndGggPiAwICYmXHJcbiAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHMuZm9sbG93aW5nLmZpbHRlcihcclxuICAgICAgZm9sbG93aW5nID0+IGZvbGxvd2luZy51c2VyID09PSBwcm9maWxlLnVzZXIuX2lkXHJcbiAgICApLmxlbmd0aCA+IDA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2VnbWVudD5cclxuICAgICAgICA8R3JpZCBzdGFja2FibGU+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezExfT5cclxuICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgIGFzPVwiaDJcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD17cHJvZmlsZS51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuUm93PlxyXG5cclxuICAgICAgICAgICAgPEdyaWQuUm93IHN0cmV0Y2hlZD5cclxuICAgICAgICAgICAgICB7cHJvZmlsZS5iaW99XHJcbiAgICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcblxyXG4gICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAge3Byb2ZpbGUuc29jaWFsID8gKFxyXG4gICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPVwibWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudCBjb250ZW50PXtwcm9maWxlLnVzZXIuZW1haWx9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuc29jaWFsLmZhY2Vib29rICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPVwiZmFjZWJvb2tcIiBjb2xvcj1cImJsdWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibHVlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17cHJvZmlsZS5zb2NpYWwuZmFjZWJvb2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuc29jaWFsLmluc3RhZ3JhbSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cImluc3RhZ3JhbVwiIGNvbG9yPVwicmVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0LkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmx1ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3Byb2ZpbGUuc29jaWFsLmluc3RhZ3JhbX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7cHJvZmlsZS5zb2NpYWwueW91dHViZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkljb24gbmFtZT1cInlvdXR1YmVcIiBjb2xvcj1cInJlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9maWxlLnNvY2lhbC55b3V0dWJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlLnNvY2lhbC50d2l0dGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSWNvbiBuYW1lPVwidHdpdHRlclwiIGNvbG9yPVwiYmx1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5Db250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtwcm9maWxlLnNvY2lhbC50d2l0dGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5ObyBTb2NpYWwgTWVkaWEgTGlua3MgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs1fSBzdHJldGNoZWQgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNpemU9XCJsYXJnZVwiIGF2YXRhciBzcmM9e3Byb2ZpbGUudXNlci5wcm9maWxlUGljVXJsfSAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIHshb3duQWNjb3VudCAmJiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29tcGFjdFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgY29udGVudD17aXNGb2xsb3dpbmcgPyBcIkZvbGxvd2luZ1wiIDogXCJGb2xsb3dcIn1cclxuICAgICAgICAgICAgICAgIGljb249e2lzRm9sbG93aW5nID8gXCJjaGVjayBjaXJjbGVcIiA6IFwiYWRkIHVzZXJcIn1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtpc0ZvbGxvd2luZyA/IFwiaW5zdGFncmFtXCIgOiBcInR3aXR0ZXJcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgaXNGb2xsb3dpbmdcclxuICAgICAgICAgICAgICAgICAgICA/IGF3YWl0IHVuZm9sbG93VXNlcihwcm9maWxlLnVzZXIuX2lkLCBzZXRVc2VyRm9sbG93U3RhdHMpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBhd2FpdCBmb2xsb3dVc2VyKHByb2ZpbGUudXNlci5faWQsIHNldFVzZXJGb2xsb3dTdGF0cyk7XHJcbiAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvU2VnbWVudD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZU1lbnVUYWJzKHtcclxuICBhY3RpdmVJdGVtLFxyXG4gIGhhbmRsZUl0ZW1DbGljayxcclxuICBmb2xsb3dlcnNMZW5ndGgsXHJcbiAgZm9sbG93aW5nTGVuZ3RoLFxyXG4gIG93bkFjY291bnQsXHJcbiAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1lbnUgcG9pbnRpbmcgc2Vjb25kYXJ5PlxyXG4gICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgIG5hbWU9XCJwcm9maWxlXCJcclxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJwcm9maWxlXCJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soXCJwcm9maWxlXCIpfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgIG5hbWU9e2Ake2ZvbGxvd2Vyc0xlbmd0aH0gZm9sbG93ZXJzYH1cclxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJmb2xsb3dlcnNcIn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhcImZvbGxvd2Vyc1wiKX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICB7b3duQWNjb3VudCA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICBuYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgICA/IGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgIDogMFxyXG4gICAgICAgICAgICAgIH0gZm9sbG93aW5nYH1cclxuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09IFwiZm9sbG93aW5nXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKFwiZm9sbG93aW5nXCIpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJVcGRhdGUgUHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcInVwZGF0ZVByb2ZpbGVcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soXCJ1cGRhdGVQcm9maWxlXCIpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcInNldHRpbmdzXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKFwic2V0dGluZ3NcIil9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICBuYW1lPXtgJHtmb2xsb3dpbmdMZW5ndGh9IGZvbGxvd2luZ2B9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJmb2xsb3dpbmdcIn1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKFwiZm9sbG93aW5nXCIpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlTWVudVRhYnM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGlzdCwgRGl2aWRlciwgTWVzc2FnZSwgQ2hlY2tib3gsIEZvcm0sIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBwYXNzd29yZFVwZGF0ZSwgdG9nZ2xlTWVzc2FnZVBvcHVwIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBTZXR0aW5ncyh7IG5ld01lc3NhZ2VQb3B1cCB9KSB7XHJcbiAgY29uc3QgW3Bhc3N3b3JkRmllbGRzLCBzaG93UGFzc3dvcmRGaWVsZHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbbmV3TWVzc2FnZVNldHRpbmdzLCBzaG93TmV3TWVzc2FnZVNldHRpbmdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaXNGaXJzdFJ1biA9IHVzZVJlZih0cnVlKTtcclxuICBjb25zdCBbcG9wdXBTZXR0aW5nLCBzZXRQb3B1cFNldHRpbmddID0gdXNlU3RhdGUobmV3TWVzc2FnZVBvcHVwKTtcclxuXHJcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc3VjY2VzcyAmJiBzZXRUaW1lb3V0KCgpID0+IHNldFN1Y2Nlc3MoZmFsc2UpLCAzMDAwKTtcclxuICB9LCBbc3VjY2Vzc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzRmlyc3RSdW4uY3VycmVudCkge1xyXG4gICAgICBpc0ZpcnN0UnVuLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH0sIFtwb3B1cFNldHRpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPE1lc3NhZ2Ugc3VjY2VzcyBpY29uPVwiY2hlY2sgY2lyY2xlXCIgaGVhZGVyPVwiVXBkYXRlZCBTdWNjZXNzZnVsbHlcIiAvPlxyXG4gICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8TGlzdCBzaXplPVwiaHVnZVwiIGFuaW1hdGVkPlxyXG4gICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJ1c2VyIHNlY3JldFwiIHNpemU9XCJsYXJnZVwiIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIiAvPlxyXG4gICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgPExpc3QuSGVhZGVyXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd1Bhc3N3b3JkRmllbGRzKCFwYXNzd29yZEZpZWxkcyl9XHJcbiAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwiVXBkYXRlIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG5cclxuICAgICAgICAgIHtwYXNzd29yZEZpZWxkcyAmJiAoXHJcbiAgICAgICAgICAgIDxVcGRhdGVQYXNzd29yZFxyXG4gICAgICAgICAgICAgIHNldFN1Y2Nlc3M9e3NldFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgc2hvd1Bhc3N3b3JkRmllbGRzPXtzaG93UGFzc3dvcmRGaWVsZHN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICA8TGlzdC5JY29uIG5hbWU9XCJwYXBlciBwbGFuZSBvdXRsaW5lXCIgc2l6ZT1cImxhcmdlXCIgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiIC8+XHJcblxyXG4gICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgPExpc3QuSGVhZGVyXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd05ld01lc3NhZ2VTZXR0aW5ncyghbmV3TWVzc2FnZVNldHRpbmdzKX1cclxuICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJTaG93IE5ldyBNZXNzYWdlIFBvcHVwP1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgIENvbnRyb2wgd2hldGhlciBhIFBvcHVwIHNob3VsZCBhcHBlYXIgd2hlbiB0aGVyZSBpcyBhIE5ldyBNZXNzYWdlIG9yIG5vdC5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICBjaGVja2VkPXtwb3B1cFNldHRpbmd9XHJcbiAgICAgICAgICAgICAgdG9nZ2xlXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVNZXNzYWdlUG9wdXAocG9wdXBTZXR0aW5nLCBzZXRQb3B1cFNldHRpbmcsIHNldFN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcblxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFVwZGF0ZVBhc3N3b3JkID0gKHsgc2V0U3VjY2Vzcywgc2hvd1Bhc3N3b3JkRmllbGRzIH0pID0+IHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgW3VzZXJQYXNzd29yZHMsIHNldFVzZXJQYXNzd29yZHNdID0gdXNlU3RhdGUoe1xyXG4gICAgY3VycmVudFBhc3N3b3JkOiBcIlwiLFxyXG4gICAgbmV3UGFzc3dvcmQ6IFwiXCJcclxuICB9KTtcclxuICBjb25zdCBbdHlwZWQsIHNob3dUeXBlZF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBmaWVsZDE6IGZhbHNlLFxyXG4gICAgZmllbGQyOiBmYWxzZVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IGZpZWxkMSwgZmllbGQyIH0gPSB0eXBlZDtcclxuXHJcbiAgY29uc3QgeyBjdXJyZW50UGFzc3dvcmQsIG5ld1Bhc3N3b3JkIH0gPSB1c2VyUGFzc3dvcmRzO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0VXNlclBhc3N3b3JkcyhwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBlcnJvck1zZyAmJiBzZXRUaW1lb3V0KCgpID0+IHNldEVycm9yKG51bGwpLCA1MDAwKTtcclxuICB9LCBbZXJyb3JNc2ddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfVxyXG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgb25TdWJtaXQ9e2FzeW5jIGUgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgICBhd2FpdCBwYXNzd29yZFVwZGF0ZShzZXRTdWNjZXNzLCB1c2VyUGFzc3dvcmRzKTtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgICAgIHNob3dQYXNzd29yZEZpZWxkcyhmYWxzZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaXN0Lkxpc3Q+XHJcbiAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgaWNvbj17e1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJleWVcIixcclxuICAgICAgICAgICAgICAgIGNpcmN1bGFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHNob3dUeXBlZChwcmV2ID0+ICh7IC4uLnByZXYsIGZpZWxkMTogIWZpZWxkMSB9KSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHR5cGU9e2ZpZWxkMSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ3VycmVudCBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBjdXJyZW50IFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiY3VycmVudFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50UGFzc3dvcmR9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgaWNvbj17e1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJleWVcIixcclxuICAgICAgICAgICAgICAgIGNpcmN1bGFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHNob3dUeXBlZChwcmV2ID0+ICh7IC4uLnByZXYsIGZpZWxkMjogIWZpZWxkMiB9KSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHR5cGU9e2ZpZWxkMiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTmV3IFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE5ldyBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5ld1Bhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdQYXNzd29yZH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBCVVRUT05TICovfVxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nIHx8IGN1cnJlbnRQYXNzd29yZCA9PT0gXCJcIiB8fCBuZXdQYXNzd29yZCA9PT0gXCJcIn1cclxuICAgICAgICAgICAgICBjb21wYWN0XHJcbiAgICAgICAgICAgICAgaWNvbj1cImNvbmZpZ3VyZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0ZWFsXCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwiQ29uZmlybVwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgY29tcGFjdFxyXG4gICAgICAgICAgICAgIGljb249XCJjYW5jZWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJDYW5jZWxcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dQYXNzd29yZEZpZWxkcyhmYWxzZSl9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8TWVzc2FnZSBpY29uPVwibWVoXCIgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXtlcnJvck1zZ30gLz5cclxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgIDwvTGlzdC5MaXN0PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIE1lc3NhZ2UsIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IEltYWdlRHJvcERpdiBmcm9tIFwiLi4vQ29tbW9uL0ltYWdlRHJvcERpdlwiO1xyXG5pbXBvcnQgQ29tbW9uSW5wdXRzIGZyb20gXCIuLi9Db21tb24vQ29tbW9uSW5wdXRzXCI7XHJcbmltcG9ydCB1cGxvYWRQaWMgZnJvbSBcIi4uLy4uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeVwiO1xyXG5pbXBvcnQgeyBwcm9maWxlVXBkYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBVcGRhdGVQcm9maWxlKHsgUHJvZmlsZSB9KSB7XHJcbiAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoe1xyXG4gICAgcHJvZmlsZVBpY1VybDogUHJvZmlsZS51c2VyLnByb2ZpbGVQaWNVcmwsXHJcbiAgICBhZGRyZXNzOlByb2ZpbGUuYWRkcmVzcyB8fCBcIlwiLFxyXG4gICAgYmlvOiBQcm9maWxlLmJpbyB8fCBcIlwiLFxyXG4gICAgZmFjZWJvb2s6IChQcm9maWxlLnNvY2lhbCAmJiBQcm9maWxlLnNvY2lhbC5mYWNlYm9vaykgfHwgXCJcIixcclxuICAgIHlvdXR1YmU6IChQcm9maWxlLnNvY2lhbCAmJiBQcm9maWxlLnNvY2lhbC55b3V0dWJlKSB8fCBcIlwiLFxyXG4gICAgaW5zdGFncmFtOiAoUHJvZmlsZS5zb2NpYWwgJiYgUHJvZmlsZS5zb2NpYWwuaW5zdGFncmFtKSB8fCBcIlwiLFxyXG4gICAgdHdpdHRlcjogKFByb2ZpbGUuc29jaWFsICYmIFByb2ZpbGUuc29jaWFsLnR3aXR0ZXIpIHx8IFwiXCJcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93U29jaWFsTGlua3MsIHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtoaWdobGlnaHRlZCwgc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbWVkaWFQcmV2aWV3LCBzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgZmlsZXMgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIGlmIChuYW1lID09PSBcIm1lZGlhXCIpIHtcclxuICAgICAgc2V0TWVkaWEoZmlsZXNbMF0pO1xyXG4gICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpO1xyXG4gICAgfVxyXG4gICAgc2V0UHJvZmlsZShwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH1cclxuICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgIG9uU3VibWl0PXthc3luYyBlID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgbGV0IHByb2ZpbGVQaWNVcmw7XHJcblxyXG4gICAgICAgICAgaWYgKG1lZGlhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHByb2ZpbGVQaWNVcmwgPSBhd2FpdCB1cGxvYWRQaWMobWVkaWEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChtZWRpYSAhPT0gbnVsbCAmJiAhcHJvZmlsZVBpY1VybCkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNldEVycm9yTXNnKFwiRXJyb3IgVXBsb2FkaW5nIEltYWdlXCIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGF3YWl0IHByb2ZpbGVVcGRhdGUocHJvZmlsZSwgc2V0TG9hZGluZywgc2V0RXJyb3JNc2csIHByb2ZpbGVQaWNVcmwpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRFcnJvck1zZyhmYWxzZSl9XHJcbiAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgY29udGVudD17ZXJyb3JNc2d9XHJcbiAgICAgICAgICBhdHRhY2hlZFxyXG4gICAgICAgICAgaGVhZGVyPVwiT29wcyFcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxJbWFnZURyb3BEaXZcclxuICAgICAgICAgIGlucHV0UmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgIGhpZ2hsaWdodGVkPXtoaWdobGlnaHRlZH1cclxuICAgICAgICAgIHNldEhpZ2hsaWdodGVkPXtzZXRIaWdobGlnaHRlZH1cclxuICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgbWVkaWFQcmV2aWV3PXttZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICBzZXRNZWRpYVByZXZpZXc9e3NldE1lZGlhUHJldmlld31cclxuICAgICAgICAgIHNldE1lZGlhPXtzZXRNZWRpYX1cclxuICAgICAgICAgIHByb2ZpbGVQaWNVcmw9e3Byb2ZpbGUucHJvZmlsZVBpY1VybH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Q29tbW9uSW5wdXRzXHJcbiAgICAgICAgICB1c2VyPXtwcm9maWxlfVxyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBzaG93U29jaWFsTGlua3M9e3Nob3dTb2NpYWxMaW5rc31cclxuICAgICAgICAgIHNldFNob3dTb2NpYWxMaW5rcz17c2V0U2hvd1NvY2lhbExpbmtzfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjb2xvcj1cImJsdWVcIlxyXG4gICAgICAgICAgaWNvbj1cInBlbmNpbCBhbHRlcm5hdGVcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3Byb2ZpbGUuYmlvID09PSBcIlwiIHx8IGxvYWRpbmd9XHJcbiAgICAgICAgICBjb250ZW50PVwiU3VibWl0XCJcclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZVByb2ZpbGU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgTm9Qcm9maWxlUG9zdHMsIE5vUHJvZmlsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGFcIjtcclxuaW1wb3J0IENhcmRQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3QvQ2FyZFBvc3RcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IFBsYWNlSG9sZGVyUG9zdHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvUGxhY2VIb2xkZXJHcm91cFwiO1xyXG5pbXBvcnQgUHJvZmlsZU1lbnVUYWJzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZU1lbnVUYWJzXCI7XHJcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvUHJvZmlsZUhlYWRlclwiO1xyXG5pbXBvcnQgRm9sbG93ZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGUvRm9sbG93ZXJzXCI7XHJcbmltcG9ydCBGb2xsb3dpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZS9Gb2xsb3dpbmdcIjtcclxuaW1wb3J0IHsgUG9zdERlbGV0ZVRvYXN0ciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ub2FzdHJcIjtcclxuaW1wb3J0IFVwZGF0ZVByb2ZpbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZS9VcGRhdGVQcm9maWxlXCI7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlL1NldHRpbmdzXCJcclxuZnVuY3Rpb24gUHJvZmlsZVBhZ2Uoe1xyXG4gIGVycm9yTG9hZGluZyxcclxuICBwcm9maWxlLFxyXG4gIGZvbGxvd2Vyc0xlbmd0aCxcclxuICBmb2xsb3dpbmdMZW5ndGgsXHJcbiAgdXNlcixcclxuICB1c2VyRm9sbG93U3RhdHNcclxufSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dUb2FzdHIsIHNldFNob3dUb2FzdHJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZShcInByb2ZpbGVcIik7XHJcbiAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID0gY2xpY2tlZFRhYiA9PiBzZXRBY3RpdmVJdGVtKGNsaWNrZWRUYWIpO1xyXG5cclxuICBjb25zdCBbbG9nZ2VkVXNlckZvbGxvd1N0YXRzLCBzZXRVc2VyRm9sbG93U3RhdHNdID0gdXNlU3RhdGUodXNlckZvbGxvd1N0YXRzKTtcclxuXHJcbiAgY29uc3Qgb3duQWNjb3VudCA9IHByb2ZpbGUudXNlci5faWQgPT09IHVzZXIuX2lkO1xyXG5cclxuICBpZiAoZXJyb3JMb2FkaW5nKSByZXR1cm4gPE5vUHJvZmlsZSAvPjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFBvc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wcm9maWxlL3Bvc3RzLyR7dXNlcm5hbWV9YCwge1xyXG4gICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRQb3N0cyhyZXMuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoXCJFcnJvciBMb2FkaW5nIFBvc3RzXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBnZXRQb3N0cygpO1xyXG4gIH0sIFtyb3V0ZXIucXVlcnkudXNlcm5hbWVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNob3dUb2FzdHIgJiYgc2V0VGltZW91dCgoKSA9PiBzZXRTaG93VG9hc3RyKGZhbHNlKSwgNDAwMCk7XHJcbiAgfSwgW3Nob3dUb2FzdHJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaG93VG9hc3RyICYmIDxQb3N0RGVsZXRlVG9hc3RyIC8+fVxyXG5cclxuICAgICAgPEdyaWQgc3RhY2thYmxlPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPFByb2ZpbGVNZW51VGFic1xyXG4gICAgICAgICAgICAgIGFjdGl2ZUl0ZW09e2FjdGl2ZUl0ZW19XHJcbiAgICAgICAgICAgICAgaGFuZGxlSXRlbUNsaWNrPXtoYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgZm9sbG93ZXJzTGVuZ3RoPXtmb2xsb3dlcnNMZW5ndGh9XHJcbiAgICAgICAgICAgICAgZm9sbG93aW5nTGVuZ3RoPXtmb2xsb3dpbmdMZW5ndGh9XHJcbiAgICAgICAgICAgICAgb3duQWNjb3VudD17b3duQWNjb3VudH1cclxuICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICB7YWN0aXZlSXRlbSA9PT0gXCJwcm9maWxlXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8UHJvZmlsZUhlYWRlclxyXG4gICAgICAgICAgICAgICAgICBwcm9maWxlPXtwcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgICBvd25BY2NvdW50PXtvd25BY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgICAgc2V0VXNlckZvbGxvd1N0YXRzPXtzZXRVc2VyRm9sbG93U3RhdHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICA8UGxhY2VIb2xkZXJQb3N0cyAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IHBvc3RzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgIHBvc3RzLm1hcChwb3N0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFBvc3RcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0PXtwb3N0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIHNldFBvc3RzPXtzZXRQb3N0c31cclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dUb2FzdHI9e3NldFNob3dUb2FzdHJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxOb1Byb2ZpbGVQb3N0cyAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHthY3RpdmVJdGVtID09PSBcImZvbGxvd2Vyc1wiICYmIChcclxuICAgICAgICAgICAgICA8Rm9sbG93ZXJzXHJcbiAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzPXtsb2dnZWRVc2VyRm9sbG93U3RhdHN9XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyRm9sbG93U3RhdHM9e3NldFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgIHByb2ZpbGVVc2VySWQ9e3Byb2ZpbGUudXNlci5faWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHthY3RpdmVJdGVtID09PSBcImZvbGxvd2luZ1wiICYmIChcclxuICAgICAgICAgICAgICA8Rm9sbG93aW5nXHJcbiAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzPXtsb2dnZWRVc2VyRm9sbG93U3RhdHN9XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyRm9sbG93U3RhdHM9e3NldFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgIHByb2ZpbGVVc2VySWQ9e3Byb2ZpbGUudXNlci5faWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHthY3RpdmVJdGVtID09PSBcInVwZGF0ZVByb2ZpbGVcIiAmJiA8VXBkYXRlUHJvZmlsZSBQcm9maWxlPXtwcm9maWxlfSAvPn1cclxuICAgICAgICAgICAge2FjdGl2ZUl0ZW0gPT09IFwic2V0dGluZ3NcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPFNldHRpbmdzIG5ld01lc3NhZ2VQb3B1cD17dXNlci5uZXdNZXNzYWdlUG9wdXB9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcblByb2ZpbGVQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IGN0eC5xdWVyeTtcclxuICAgIGNvbnN0IHsgdG9rZW4gfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvcHJvZmlsZS8ke3VzZXJuYW1lfWAsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IHByb2ZpbGUsIGZvbGxvd2Vyc0xlbmd0aCwgZm9sbG93aW5nTGVuZ3RoIH0gPSByZXMuZGF0YTtcclxuXHJcbiAgICByZXR1cm4geyBwcm9maWxlLCBmb2xsb3dlcnNMZW5ndGgsIGZvbGxvd2luZ0xlbmd0aCB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBlcnJvckxvYWRpbmc6IHRydWUgfTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCI7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi9jYXRjaEVycm9yc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEF4aW9zID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBgJHtiYXNlVXJsfS9hcGkvcHJvZmlsZWAsXHJcbiAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb2xsb3dVc2VyID0gYXN5bmMgKHVzZXJUb0ZvbGxvd0lkLCBzZXRVc2VyRm9sbG93U3RhdHMpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL2ZvbGxvdy8ke3VzZXJUb0ZvbGxvd0lkfWApO1xyXG5cclxuICAgIHNldFVzZXJGb2xsb3dTdGF0cyhwcmV2ID0+ICh7XHJcbiAgICAgIC4uLnByZXYsXHJcbiAgICAgIGZvbGxvd2luZzogWy4uLnByZXYuZm9sbG93aW5nLCB7IHVzZXI6IHVzZXJUb0ZvbGxvd0lkIH1dXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuZm9sbG93VXNlciA9IGFzeW5jICh1c2VyVG9VbmZvbGxvd0lkLCBzZXRVc2VyRm9sbG93U3RhdHMpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucHV0KGAvdW5mb2xsb3cvJHt1c2VyVG9VbmZvbGxvd0lkfWApO1xyXG5cclxuICAgIHNldFVzZXJGb2xsb3dTdGF0cyhwcmV2ID0+ICh7XHJcbiAgICAgIC4uLnByZXYsXHJcbiAgICAgIGZvbGxvd2luZzogcHJldi5mb2xsb3dpbmcuZmlsdGVyKGZvbGxvd2luZyA9PiBmb2xsb3dpbmcudXNlciAhPT0gdXNlclRvVW5mb2xsb3dJZClcclxuICAgIH0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZmlsZVVwZGF0ZSA9IGFzeW5jIChwcm9maWxlLCBzZXRMb2FkaW5nLCBzZXRFcnJvciwgcHJvZmlsZVBpY1VybCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGFkZHJlc3MsYmlvLCBmYWNlYm9vaywgeW91dHViZSwgdHdpdHRlciwgaW5zdGFncmFtIH0gPSBwcm9maWxlO1xyXG5cclxuICAgIGF3YWl0IEF4aW9zLnBvc3QoYC91cGRhdGVgLCB7XHJcbiAgICAgIGFkZHJlc3MsXHJcbiAgICAgIGJpbyxcclxuICAgICAgZmFjZWJvb2ssXHJcbiAgICAgIHlvdXR1YmUsXHJcbiAgICAgIHR3aXR0ZXIsXHJcbiAgICAgIGluc3RhZ3JhbSxcclxuICAgICAgcHJvZmlsZVBpY1VybFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICBSb3V0ZXIucmVsb2FkKCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHNldEVycm9yKGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkVXBkYXRlID0gYXN5bmMgKHNldFN1Y2Nlc3MsIHVzZXJQYXNzd29yZHMpID0+IHtcclxuICBjb25zdCB7IGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQgfSA9IHVzZXJQYXNzd29yZHM7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLnBvc3QoYC9zZXR0aW5ncy9wYXNzd29yZGAsIHsgY3VycmVudFBhc3N3b3JkLCBuZXdQYXNzd29yZCB9KTtcclxuXHJcbiAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVNZXNzYWdlUG9wdXAgPSBhc3luYyAocG9wdXBTZXR0aW5nLCBzZXRQb3B1cFNldHRpbmcsIHNldFN1Y2Nlc3MpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL3NldHRpbmdzL21lc3NhZ2VQb3B1cGApO1xyXG5cclxuICAgIHNldFBvcHVwU2V0dGluZyghcG9wdXBTZXR0aW5nKTtcclxuICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=