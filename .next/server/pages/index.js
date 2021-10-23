(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Post/CreatePost.js":
/*!***************************************!*\
  !*** ./components/Post/CreatePost.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");


var _jsxFileName = "C:\\Users\\Om Bindal\\Desktop\\newtocheck\\Voiceless_Saints\\components\\Post\\CreatePost.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function CreatePost({
  user,
  setPosts
}) {
  const {
    0: newPost,
    1: setNewPost
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    text: "",
    location: ""
  });
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
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

    setNewPost(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const addStyles = () => ({
    textAlign: "center",
    height: "150px",
    width: "150px",
    border: "dotted",
    paddingTop: media === null && "60px",
    cursor: "pointer",
    borderColor: highlighted ? "green" : "black"
  });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    let picUrl;

    if (media !== null) {
      picUrl = await (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_3__.default)(media);

      if (!picUrl) {
        setLoading(false);
        return setError("Error Uploading Image");
      }
    }

    await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_4__.submitNewPost)(newPost.text, newPost.location, picUrl, setPosts, setNewPost, setError);
    setMedia(null);
    setMediaPreview(null);
    setLoading(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
      error: error !== null,
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
        error: true,
        onDismiss: () => setError(null),
        content: error,
        header: "Oops!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
          src: user.profilePicUrl,
          circular: true,
          avatar: true,
          inline: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.TextArea, {
          placeholder: "Whats Happening",
          name: "text",
          value: newPost.text,
          onChange: handleChange,
          rows: 4,
          width: 14
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
          value: newPost.location,
          name: "location",
          onChange: handleChange,
          label: "Add Location",
          icon: "map marker alternate",
          placeholder: "Want to add Location?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          ref: inputRef,
          onChange: handleChange,
          name: "media",
          style: {
            display: "none"
          },
          type: "file",
          accept: "image/*"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: () => inputRef.current.click(),
        style: addStyles(),
        onDrag: e => {
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
        children: media === null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: "plus",
          size: "big"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            style: {
              height: "150px",
              width: "150px"
            },
            src: mediaPreview,
            alt: "PostImage",
            centered: true,
            size: "medium"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, this)
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        circular: true,
        disabled: newPost.text === "" || loading,
        content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Post"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 20
        }, this),
        style: {
          backgroundColor: "#1DA1F2",
          color: "white"
        },
        icon: "send",
        loading: loading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (CreatePost);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Post/CreatePost */ "./components/Post/CreatePost.js");
/* harmony import */ var _components_Post_CardPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Post/CardPost */ "./components/Post/CardPost.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-infinite-scroll-component */ "react-infinite-scroll-component");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\Users\\Om Bindal\\Desktop\\newtocheck\\Voiceless_Saints\\pages\\index.js";













function Index({
  user,
  postsData,
  errorLoading
}) {
  // console.log({user,userFollowStats});
  //console.log(postsData)
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(postsData);
  const {
    0: showToastr,
    1: setShowToastr
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: hasMore,
    1: setHasMore
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: pageNumber,
    1: setPageNumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    document.title = `Welcome, ${user.name.split(" ")[0]}`;
  }, []); //if(posts.length==0 || errorLoading) return <NoPosts />

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    showToastr && setTimeout(() => setShowToastr(false), 3000);
  }, [showToastr]);

  const fetchDataOnScroll = async () => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default}/api/posts`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_12___default().get("token")
        },
        params: {
          pageNumber
        }
      });
      if (res.data.length === 0) setHasMore(false);
      setPosts(prev => [...prev, ...res.data]);
      setPageNumber(prev => prev + 1);
    } catch (error) {
      alert("Error fetching Posts");
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showToastr && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_9__.PostDeleteToastr, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 20
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Segment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_4__.default, {
        user: user,
        setPosts: setPosts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), posts.length === 0 || errorLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_8__.NoPosts, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default()), {
        hasMore: hasMore,
        next: fetchDataOnScroll,
        loader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__.PlaceHolderPosts, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }, this),
        endMessage: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_11__.EndMessage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this),
        dataLength: posts.length,
        children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_5__.default, {
          post: post,
          user: user,
          setPosts: setPosts,
          setShowToastr: setShowToastr
        }, post._id, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

Index.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_7__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default}/api/posts`, {
      headers: {
        Authorization: token
      },
      params: {
        pageNumber: 1
      }
    });
    return {
      postsData: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/uploadPicToCloudinary.js":
/*!****************************************!*\
  !*** ./utils/uploadPicToCloudinary.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const uploadPic = async media => {
  try {
    const form = new FormData();
    form.append('file', media);
    form.append('upload_preset', 'voiceless_saints');
    form.append('cloud_name', 'nishayadav');
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("https://api.cloudinary.com/v1_1/nishayadav/image/upload", form);
    return res.data.url;
  } catch (error) {
    return;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (uploadPic);

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

/***/ "react-infinite-scroll-component":
/*!**************************************************!*\
  !*** external "react-infinite-scroll-component" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-infinite-scroll-component");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_baseUrl_js-utils_catchErrors_js","components_Layout_NoData_js-components_Layout_Toastr_js-components_Post_CardPost_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9Qb3N0L0NyZWF0ZVBvc3QuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnkuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInJlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnRcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwicmVhY3QtbW9tZW50XCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkNyZWF0ZVBvc3QiLCJ1c2VyIiwic2V0UG9zdHMiLCJuZXdQb3N0Iiwic2V0TmV3UG9zdCIsInVzZVN0YXRlIiwidGV4dCIsImxvY2F0aW9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpbnB1dFJlZiIsInVzZVJlZiIsImVycm9yIiwic2V0RXJyb3IiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwibWVkaWEiLCJzZXRNZWRpYSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJmaWxlcyIsInRhcmdldCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInByZXYiLCJhZGRTdHlsZXMiLCJ0ZXh0QWxpZ24iLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlciIsInBhZGRpbmdUb3AiLCJjdXJzb3IiLCJib3JkZXJDb2xvciIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicGljVXJsIiwidXBsb2FkUGljIiwic3VibWl0TmV3UG9zdCIsInByb2ZpbGVQaWNVcmwiLCJkaXNwbGF5IiwiY3VycmVudCIsImNsaWNrIiwiZHJvcHBlZEZpbGUiLCJBcnJheSIsImZyb20iLCJkYXRhVHJhbnNmZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIkluZGV4IiwicG9zdHNEYXRhIiwiZXJyb3JMb2FkaW5nIiwicG9zdHMiLCJzaG93VG9hc3RyIiwic2V0U2hvd1RvYXN0ciIsImhhc01vcmUiLCJzZXRIYXNNb3JlIiwicGFnZU51bWJlciIsInNldFBhZ2VOdW1iZXIiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInRpdGxlIiwic3BsaXQiLCJzZXRUaW1lb3V0IiwiZmV0Y2hEYXRhT25TY3JvbGwiLCJyZXMiLCJheGlvcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvb2tpZSIsInBhcmFtcyIsImRhdGEiLCJsZW5ndGgiLCJhbGVydCIsIm1hcCIsInBvc3QiLCJfaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ0b2tlbiIsInBhcnNlQ29va2llcyIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsInByb2Nlc3MiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQjtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBcEIsRUFBd0M7QUFDdEMsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQywrQ0FBUSxDQUFDO0FBQUVDLFFBQUksRUFBRSxFQUFSO0FBQVlDLFlBQVEsRUFBRTtBQUF0QixHQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCSiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFDQSxRQUFNSyxRQUFRLEdBQUdDLDZDQUFNLEVBQXZCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CUiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NWLCtDQUFRLENBQUMsS0FBRCxDQUE5QztBQUVBLFFBQU07QUFBQSxPQUFDVyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQlosK0NBQVEsQ0FBQyxJQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNhLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDZCwrQ0FBUSxDQUFD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O0FBQ0EsQ0FiRDs7QUFlQSwrREFBZTRCLFNBQWYsRTs7Ozs7Ozs7Ozs7QUNqQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIEltYWdlLCBEaXZpZGVyLCBNZXNzYWdlLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB1cGxvYWRQaWMgZnJvbSBcIi4uLy4uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeVwiO1xyXG5pbXBvcnQgeyBzdWJtaXROZXdQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBDcmVhdGVQb3N0KHsgdXNlciwgc2V0UG9zdHMgfSkge1xyXG4gIGNvbnN0IFtuZXdQb3N0LCBzZXROZXdQb3N0XSA9IHVzZVN0YXRlKHsgdGV4dDogXCJcIiwgbG9jYXRpb246IFwiXCIgfSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21lZGlhUHJldmlldywgc2V0TWVkaWFQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIGZpbGVzIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBpZiAobmFtZSA9PT0gXCJtZWRpYVwiKSB7XHJcbiAgICAgIHNldE1lZGlhKGZpbGVzWzBdKTtcclxuICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROZXdQb3N0KHByZXYgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkU3R5bGVzID0gKCkgPT4gKHtcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGhlaWdodDogXCIxNTBweFwiLFxyXG4gICAgd2lkdGg6IFwiMTUwcHhcIixcclxuICAgIGJvcmRlcjogXCJkb3R0ZWRcIixcclxuICAgIHBhZGRpbmdUb3A6IG1lZGlhID09PSBudWxsICYmIFwiNjBweFwiLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIGJvcmRlckNvbG9yOiBoaWdobGlnaHRlZCA/IFwiZ3JlZW5cIiA6IFwiYmxhY2tcIlxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBsZXQgcGljVXJsO1xyXG5cclxuICAgIGlmIChtZWRpYSAhPT0gbnVsbCkge1xyXG4gICAgICBwaWNVcmwgPSBhd2FpdCB1cGxvYWRQaWMobWVkaWEpO1xyXG4gICAgICBpZiAoIXBpY1VybCkge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBzZXRFcnJvcihcIkVycm9yIFVwbG9hZGluZyBJbWFnZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHN1Ym1pdE5ld1Bvc3QoXHJcbiAgICAgIG5ld1Bvc3QudGV4dCxcclxuICAgICAgbmV3UG9zdC5sb2NhdGlvbixcclxuICAgICAgcGljVXJsLFxyXG4gICAgICBzZXRQb3N0cyxcclxuICAgICAgc2V0TmV3UG9zdCxcclxuICAgICAgc2V0RXJyb3JcclxuICAgICk7XHJcblxyXG4gICAgc2V0TWVkaWEobnVsbCk7XHJcbiAgICBzZXRNZWRpYVByZXZpZXcobnVsbCk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0gZXJyb3I9e2Vycm9yICE9PSBudWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3IobnVsbCl9XHJcbiAgICAgICAgICBjb250ZW50PXtlcnJvcn1cclxuICAgICAgICAgIGhlYWRlcj1cIk9vcHMhXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3VzZXIucHJvZmlsZVBpY1VybH0gY2lyY3VsYXIgYXZhdGFyIGlubGluZSAvPlxyXG4gICAgICAgICAgPEZvcm0uVGV4dEFyZWFcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0cyBIYXBwZW5pbmdcIlxyXG4gICAgICAgICAgICBuYW1lPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LnRleHR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgIHdpZHRoPXsxNH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LmxvY2F0aW9ufVxyXG4gICAgICAgICAgICBuYW1lPVwibG9jYXRpb25cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBsYWJlbD1cIkFkZCBMb2NhdGlvblwiXHJcbiAgICAgICAgICAgIGljb249XCJtYXAgbWFya2VyIGFsdGVybmF0ZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2FudCB0byBhZGQgTG9jYXRpb24/XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIG5hbWU9XCJtZWRpYVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgc3R5bGU9e2FkZFN0eWxlcygpfVxyXG4gICAgICAgICAgb25EcmFnPXtlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyYWdMZWF2ZT17ZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uRHJvcD17ZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcm9wcGVkRmlsZSA9IEFycmF5LmZyb20oZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xyXG5cclxuICAgICAgICAgICAgc2V0TWVkaWEoZHJvcHBlZEZpbGVbMF0pO1xyXG4gICAgICAgICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChkcm9wcGVkRmlsZVswXSkpO1xyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICB7bWVkaWEgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwbHVzXCIgc2l6ZT1cImJpZ1wiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjE1MHB4XCIsIHdpZHRoOiBcIjE1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17bWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiUG9zdEltYWdlXCJcclxuICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNpcmN1bGFyXHJcbiAgICAgICAgICBkaXNhYmxlZD17bmV3UG9zdC50ZXh0ID09PSBcIlwiIHx8IGxvYWRpbmd9XHJcbiAgICAgICAgICBjb250ZW50PXs8c3Ryb25nPlBvc3Q8L3N0cm9uZz59XHJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzFEQTFGMlwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICBpY29uPVwic2VuZFwiXHJcbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVBvc3Q7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgQ3JlYXRlUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3QvQ3JlYXRlUG9zdCc7XHJcbmltcG9ydCBDYXJkUG9zdCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3QvQ2FyZFBvc3QnO1xyXG5pbXBvcnQge1NlZ21lbnR9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQge3BhcnNlQ29va2llc30gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHtOb1Bvc3RzfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTm9EYXRhXCI7XHJcbmltcG9ydCB7UG9zdERlbGV0ZVRvYXN0cn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L1RvYXN0clwiO1xyXG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVuZE1lc3NhZ2UsIFBsYWNlSG9sZGVyUG9zdHMgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9QbGFjZUhvbGRlckdyb3VwJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmZ1bmN0aW9uIEluZGV4KHt1c2VyLHBvc3RzRGF0YSxlcnJvckxvYWRpbmd9KXtcclxuICAgLy8gY29uc29sZS5sb2coe3VzZXIsdXNlckZvbGxvd1N0YXRzfSk7XHJcbiAgIC8vY29uc29sZS5sb2cocG9zdHNEYXRhKVxyXG4gICBjb25zdCBbcG9zdHMsc2V0UG9zdHNdID0gdXNlU3RhdGUocG9zdHNEYXRhKTtcclxuICAgY29uc3QgW3Nob3dUb2FzdHIsc2V0U2hvd1RvYXN0cl09dXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgY29uc3QgW2hhc01vcmUsIHNldEhhc01vcmVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDIpO1xyXG5cclxuICAgXHJcbiAgIFxyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgIGRvY3VtZW50LnRpdGxlID0gYFdlbGNvbWUsICR7dXNlci5uYW1lLnNwbGl0KFwiIFwiKVswXX1gO1xyXG5cclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy9pZihwb3N0cy5sZW5ndGg9PTAgfHwgZXJyb3JMb2FkaW5nKSByZXR1cm4gPE5vUG9zdHMgLz5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2hvd1RvYXN0ciAmJiBzZXRUaW1lb3V0KCgpID0+IHNldFNob3dUb2FzdHIoZmFsc2UpLCAzMDAwKTtcclxuICAgICAgfSwgW3Nob3dUb2FzdHJdKTtcclxuXHJcbiAgICAgIGNvbnN0IGZldGNoRGF0YU9uU2Nyb2xsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9LFxyXG4gICAgICAgICAgICBwYXJhbXM6IHsgcGFnZU51bWJlciB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09PSAwKSBzZXRIYXNNb3JlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgICAgICAgc2V0UG9zdHMocHJldiA9PiBbLi4ucHJldiwgLi4ucmVzLmRhdGFdKTtcclxuICAgICAgICAgIHNldFBhZ2VOdW1iZXIocHJldiA9PiBwcmV2ICsgMSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiRXJyb3IgZmV0Y2hpbmcgUG9zdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgXHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgXHJcbiAgICA8PlxyXG4gICAge3Nob3dUb2FzdHIgJiYgPFBvc3REZWxldGVUb2FzdHIgLz59XHJcbiAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgIDxDcmVhdGVQb3N0IHVzZXI9e3VzZXJ9IHNldFBvc3RzPXtzZXRQb3N0c30gLz5cclxuICAgICAgICB7cG9zdHMubGVuZ3RoID09PTAgfHwgZXJyb3JMb2FkaW5nPyhcclxuICAgICAgICAgICAgPE5vUG9zdHMvPlxyXG4gICAgICAgICk6KFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8SW5maW5pdGVTY3JvbGxcclxuICAgICAgICBoYXNNb3JlPXtoYXNNb3JlfVxyXG4gICAgICAgIG5leHQ9e2ZldGNoRGF0YU9uU2Nyb2xsfVxyXG4gICAgICAgIGxvYWRlcj17PFBsYWNlSG9sZGVyUG9zdHMgLz59XHJcbiAgICAgICAgZW5kTWVzc2FnZT17PEVuZE1lc3NhZ2UgLz59XHJcbiAgICAgICAgZGF0YUxlbmd0aD17cG9zdHMubGVuZ3RofT5cclxuICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxyXG4gICAgICAgICAgPENhcmRQb3N0XHJcbiAgICAgICAgICAgIGtleT17cG9zdC5faWR9XHJcbiAgICAgICAgICAgIHBvc3Q9e3Bvc3R9XHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgIHNldFBvc3RzPXtzZXRQb3N0c31cclxuICAgICAgICAgICAgc2V0U2hvd1RvYXN0cj17c2V0U2hvd1RvYXN0cn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvSW5maW5pdGVTY3JvbGw+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC8+XHJcblxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvcG9zdHNgLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxyXG4gICAgICAgIHBhcmFtczogeyBwYWdlTnVtYmVyOiAxIH1cclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIHJldHVybiB7IHBvc3RzRGF0YTogcmVzLmRhdGEgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yTG9hZGluZzogdHJ1ZSB9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbmNvbnN0IHVwbG9hZFBpYz1hc3luYyBtZWRpYT0+e1xyXG50cnl7XHJcbiAgY29uc3QgZm9ybT1uZXcgRm9ybURhdGEoKTtcclxuICBmb3JtLmFwcGVuZCgnZmlsZScsbWVkaWEpO1xyXG4gIGZvcm0uYXBwZW5kKCd1cGxvYWRfcHJlc2V0Jywndm9pY2VsZXNzX3NhaW50cycpXHJcbiAgZm9ybS5hcHBlbmQoJ2Nsb3VkX25hbWUnLCduaXNoYXlhZGF2Jyk7XHJcblxyXG4gIGNvbnN0IHJlcz1hd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkNMT1VESU5BUllfVVJMLGZvcm0pO1xyXG4gIHJldHVybiByZXMuZGF0YS51cmw7XHJcblxyXG59Y2F0Y2goZXJyb3Ipe1xyXG4gICAgcmV0dXJuO1xyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwbG9hZFBpYzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==