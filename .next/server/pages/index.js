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


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\components\\Post\\CreatePost.js";

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


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\pages\\index.js";













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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_baseUrl_js-utils_catchErrors_js","components_Layout_NoData_js-components_Layout_Toastr_js-components_Post_CardPost_js-utils_upl-d2318b"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9Qb3N0L0NyZWF0ZVBvc3QuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInJlYWN0LW1vbWVudFwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJDcmVhdGVQb3N0IiwidXNlciIsInNldFBvc3RzIiwibmV3UG9zdCIsInNldE5ld1Bvc3QiLCJ1c2VTdGF0ZSIsInRleHQiLCJsb2NhdGlvbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJlcnJvciIsInNldEVycm9yIiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsIm1lZGlhIiwic2V0TWVkaWEiLCJtZWRpYVByZXZpZXciLCJzZXRNZWRpYVByZXZpZXciLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwiZmlsZXMiLCJ0YXJnZXQiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwcmV2IiwiYWRkU3R5bGVzIiwidGV4dEFsaWduIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXIiLCJwYWRkaW5nVG9wIiwiY3Vyc29yIiwiYm9yZGVyQ29sb3IiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInBpY1VybCIsInVwbG9hZFBpYyIsInN1Ym1pdE5ld1Bvc3QiLCJwcm9maWxlUGljVXJsIiwiZGlzcGxheSIsImN1cnJlbnQiLCJjbGljayIsImRyb3BwZWRGaWxlIiwiQXJyYXkiLCJmcm9tIiwiZGF0YVRyYW5zZmVyIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJJbmRleCIsInBvc3RzRGF0YSIsImVycm9yTG9hZGluZyIsInBvc3RzIiwic2hvd1RvYXN0ciIsInNldFNob3dUb2FzdHIiLCJoYXNNb3JlIiwic2V0SGFzTW9yZSIsInBhZ2VOdW1iZXIiLCJzZXRQYWdlTnVtYmVyIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJ0aXRsZSIsInNwbGl0Iiwic2V0VGltZW91dCIsImZldGNoRGF0YU9uU2Nyb2xsIiwicmVzIiwiYXhpb3MiLCJiYXNlVXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb29raWUiLCJwYXJhbXMiLCJkYXRhIiwibGVuZ3RoIiwiYWxlcnQiLCJtYXAiLCJwb3N0IiwiX2lkIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwidG9rZW4iLCJwYXJzZUNvb2tpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQjtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBcEIsRUFBd0M7QUFDdEMsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQywrQ0FBUSxDQUFDO0FBQUVDLFFBQUksRUFBRSxFQUFSO0FBQVlDLFlBQVEsRUFBRTtBQUF0QixHQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCSiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFDQSxRQUFNSyxRQUFRLEdBQUdDLDZDQUFNLEVBQXZCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CUiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NWLCtDQUFRLENBQUMsS0FBRCxDQUE5QztBQUVBLFFBQU07QUFBQSxPQUFDVyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQlosK0NBQVEsQ0FBQyxJQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNhLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDZCwrQ0FBUSxDQUFDLElBQUQsQ0FBaEQ7O0FBRUEsUUFBTWUsWUFBWSxHQUFHQyxDQUFDLElBQUk7QUFDeEIsVUFBTTtBQUFFQyxVQUFGO0FBQVFDLFdBQVI7QUFBZUM7QUFBZixRQUF5QkgsQ0FBQyxDQUFD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LEdBQXdCLE1BQU1DLEdBQU4sSUFBYTtBQUNqQyxNQUFJO0FBQ0YsVUFBTTtBQUFFQztBQUFGLFFBQVlDLHFEQUFZLENBQUNGLEdBQUQsQ0FBOUI7QUFFQSxVQUFNZCxHQUFHLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVyxHQUFFQyxtREFBUSxZQUFyQixFQUFrQztBQUNsREMsYUFBTyxFQUFFO0FBQUVDLHFCQUFhLEVBQUVXO0FBQWpCLE9BRHlDO0FBRWxEVCxZQUFNLEVBQUU7QUFBRWQsa0JBQVUsRUFBRTtBQUFkO0FBRjBDLEtBQWxDLENBQWxCO0FBS0EsV0FBTztBQUFFUCxlQUFTLEVBQUVlLEdBQUcsQ0FBQ087QUFBakIsS0FBUDtBQUNELEdBVEQsQ0FTRSxPQUFPL0QsS0FBUCxFQUFjO0FBQ2QsV0FBTztBQUFFMEMsa0JBQVksRUFBRTtBQUFoQixLQUFQO0FBQ0Q7QUFDRixDQWJIOztBQWVBLCtEQUFlRixLQUFmLEU7Ozs7Ozs7Ozs7O0FDMUdBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbWFnZSwgRGl2aWRlciwgTWVzc2FnZSwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgdXBsb2FkUGljIGZyb20gXCIuLi8uLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnlcIjtcclxuaW1wb3J0IHsgc3VibWl0TmV3UG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gQ3JlYXRlUG9zdCh7IHVzZXIsIHNldFBvc3RzIH0pIHtcclxuICBjb25zdCBbbmV3UG9zdCwgc2V0TmV3UG9zdF0gPSB1c2VTdGF0ZSh7IHRleHQ6IFwiXCIsIGxvY2F0aW9uOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtoaWdobGlnaHRlZCwgc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbbWVkaWEsIHNldE1lZGlhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttZWRpYVByZXZpZXcsIHNldE1lZGlhUHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCBmaWxlcyB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgaWYgKG5hbWUgPT09IFwibWVkaWFcIikge1xyXG4gICAgICBzZXRNZWRpYShmaWxlc1swXSk7XHJcbiAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmV3UG9zdChwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFN0eWxlcyA9ICgpID0+ICh7XHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTUwcHhcIixcclxuICAgIHdpZHRoOiBcIjE1MHB4XCIsXHJcbiAgICBib3JkZXI6IFwiZG90dGVkXCIsXHJcbiAgICBwYWRkaW5nVG9wOiBtZWRpYSA9PT0gbnVsbCAmJiBcIjYwcHhcIixcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICBib3JkZXJDb2xvcjogaGlnaGxpZ2h0ZWQgPyBcImdyZWVuXCIgOiBcImJsYWNrXCJcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgbGV0IHBpY1VybDtcclxuXHJcbiAgICBpZiAobWVkaWEgIT09IG51bGwpIHtcclxuICAgICAgcGljVXJsID0gYXdhaXQgdXBsb2FkUGljKG1lZGlhKTtcclxuICAgICAgaWYgKCFwaWNVcmwpIHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gc2V0RXJyb3IoXCJFcnJvciBVcGxvYWRpbmcgSW1hZ2VcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBzdWJtaXROZXdQb3N0KFxyXG4gICAgICBuZXdQb3N0LnRleHQsXHJcbiAgICAgIG5ld1Bvc3QubG9jYXRpb24sXHJcbiAgICAgIHBpY1VybCxcclxuICAgICAgc2V0UG9zdHMsXHJcbiAgICAgIHNldE5ld1Bvc3QsXHJcbiAgICAgIHNldEVycm9yXHJcbiAgICApO1xyXG5cclxuICAgIHNldE1lZGlhKG51bGwpO1xyXG4gICAgc2V0TWVkaWFQcmV2aWV3KG51bGwpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtIGVycm9yPXtlcnJvciAhPT0gbnVsbH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldEVycm9yKG51bGwpfVxyXG4gICAgICAgICAgY29udGVudD17ZXJyb3J9XHJcbiAgICAgICAgICBoZWFkZXI9XCJPb3BzIVwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXt1c2VyLnByb2ZpbGVQaWNVcmx9IGNpcmN1bGFyIGF2YXRhciBpbmxpbmUgLz5cclxuICAgICAgICAgIDxGb3JtLlRleHRBcmVhXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdHMgSGFwcGVuaW5nXCJcclxuICAgICAgICAgICAgbmFtZT1cInRleHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmV3UG9zdC50ZXh0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICB3aWR0aD17MTR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17bmV3UG9zdC5sb2NhdGlvbn1cclxuICAgICAgICAgICAgbmFtZT1cImxvY2F0aW9uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbGFiZWw9XCJBZGQgTG9jYXRpb25cIlxyXG4gICAgICAgICAgICBpY29uPVwibWFwIG1hcmtlciBhbHRlcm5hdGVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldhbnQgdG8gYWRkIExvY2F0aW9uP1wiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBuYW1lPVwibWVkaWFcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cclxuICAgICAgICAgIHN0eWxlPXthZGRTdHlsZXMoKX1cclxuICAgICAgICAgIG9uRHJhZz17ZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25EcmFnTGVhdmU9e2UgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKGZhbHNlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyb3A9e2UgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJvcHBlZEZpbGUgPSBBcnJheS5mcm9tKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuXHJcbiAgICAgICAgICAgIHNldE1lZGlhKGRyb3BwZWRGaWxlWzBdKTtcclxuICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZHJvcHBlZEZpbGVbMF0pKTtcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAge21lZGlhID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwicGx1c1wiIHNpemU9XCJiaWdcIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxNTBweFwiLCB3aWR0aDogXCIxNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e21lZGlhUHJldmlld31cclxuICAgICAgICAgICAgICAgIGFsdD1cIlBvc3RJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjaXJjdWxhclxyXG4gICAgICAgICAgZGlzYWJsZWQ9e25ld1Bvc3QudGV4dCA9PT0gXCJcIiB8fCBsb2FkaW5nfVxyXG4gICAgICAgICAgY29udGVudD17PHN0cm9uZz5Qb3N0PC9zdHJvbmc+fVxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxREExRjJcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgaWNvbj1cInNlbmRcIlxyXG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVQb3N0O1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IENyZWF0ZVBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0L0NyZWF0ZVBvc3QnO1xyXG5pbXBvcnQgQ2FyZFBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0JztcclxuaW1wb3J0IHtTZWdtZW50fSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHtwYXJzZUNvb2tpZXN9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCB7Tm9Qb3N0c30gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L05vRGF0YVwiO1xyXG5pbXBvcnQge1Bvc3REZWxldGVUb2FzdHJ9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ub2FzdHJcIjtcclxuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gJ3JlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFbmRNZXNzYWdlLCBQbGFjZUhvbGRlclBvc3RzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvUGxhY2VIb2xkZXJHcm91cCc7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5mdW5jdGlvbiBJbmRleCh7dXNlcixwb3N0c0RhdGEsZXJyb3JMb2FkaW5nfSl7XHJcbiAgIC8vIGNvbnNvbGUubG9nKHt1c2VyLHVzZXJGb2xsb3dTdGF0c30pO1xyXG4gICAvL2NvbnNvbGUubG9nKHBvc3RzRGF0YSlcclxuICAgY29uc3QgW3Bvc3RzLHNldFBvc3RzXSA9IHVzZVN0YXRlKHBvc3RzRGF0YSk7XHJcbiAgIGNvbnN0IFtzaG93VG9hc3RyLHNldFNob3dUb2FzdHJdPXVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgIGNvbnN0IFtoYXNNb3JlLCBzZXRIYXNNb3JlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgyKTtcclxuXHJcbiAgIFxyXG4gICBcclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICBkb2N1bWVudC50aXRsZSA9IGBXZWxjb21lLCAke3VzZXIubmFtZS5zcGxpdChcIiBcIilbMF19YDtcclxuXHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vaWYocG9zdHMubGVuZ3RoPT0wIHx8IGVycm9yTG9hZGluZykgcmV0dXJuIDxOb1Bvc3RzIC8+XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNob3dUb2FzdHIgJiYgc2V0VGltZW91dCgoKSA9PiBzZXRTaG93VG9hc3RyKGZhbHNlKSwgMzAwMCk7XHJcbiAgICAgIH0sIFtzaG93VG9hc3RyXSk7XHJcblxyXG4gICAgICBjb25zdCBmZXRjaERhdGFPblNjcm9sbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBjb29raWUuZ2V0KFwidG9rZW5cIikgfSxcclxuICAgICAgICAgICAgcGFyYW1zOiB7IHBhZ2VOdW1iZXIgfVxyXG4gICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA9PT0gMCkgc2V0SGFzTW9yZShmYWxzZSk7XHJcbiAgICBcclxuICAgICAgICAgIHNldFBvc3RzKHByZXYgPT4gWy4uLnByZXYsIC4uLnJlcy5kYXRhXSk7XHJcbiAgICAgICAgICBzZXRQYWdlTnVtYmVyKHByZXYgPT4gcHJldiArIDEpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBhbGVydChcIkVycm9yIGZldGNoaW5nIFBvc3RzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIFxyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybihcclxuICAgIFxyXG4gICAgPD5cclxuICAgIHtzaG93VG9hc3RyICYmIDxQb3N0RGVsZXRlVG9hc3RyIC8+fVxyXG4gICAgICA8U2VnbWVudD5cclxuICAgICAgICA8Q3JlYXRlUG9zdCB1c2VyPXt1c2VyfSBzZXRQb3N0cz17c2V0UG9zdHN9IC8+XHJcbiAgICAgICAge3Bvc3RzLmxlbmd0aCA9PT0wIHx8IGVycm9yTG9hZGluZz8oXHJcbiAgICAgICAgICAgIDxOb1Bvc3RzLz5cclxuICAgICAgICApOihcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPEluZmluaXRlU2Nyb2xsXHJcbiAgICAgICAgaGFzTW9yZT17aGFzTW9yZX1cclxuICAgICAgICBuZXh0PXtmZXRjaERhdGFPblNjcm9sbH1cclxuICAgICAgICBsb2FkZXI9ezxQbGFjZUhvbGRlclBvc3RzIC8+fVxyXG4gICAgICAgIGVuZE1lc3NhZ2U9ezxFbmRNZXNzYWdlIC8+fVxyXG4gICAgICAgIGRhdGFMZW5ndGg9e3Bvc3RzLmxlbmd0aH0+XHJcbiAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcclxuICAgICAgICAgIDxDYXJkUG9zdFxyXG4gICAgICAgICAgICBrZXk9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICBwb3N0PXtwb3N0fVxyXG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICBzZXRQb3N0cz17c2V0UG9zdHN9XHJcbiAgICAgICAgICAgIHNldFNob3dUb2FzdHI9e3NldFNob3dUb2FzdHJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0luZmluaXRlU2Nyb2xsPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvU2VnbWVudD5cclxuICAgIDwvPlxyXG5cclxuXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG4gIFxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfSxcclxuICAgICAgICBwYXJhbXM6IHsgcGFnZU51bWJlcjogMSB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICByZXR1cm4geyBwb3N0c0RhdGE6IHJlcy5kYXRhIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBlcnJvckxvYWRpbmc6IHRydWUgfTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=