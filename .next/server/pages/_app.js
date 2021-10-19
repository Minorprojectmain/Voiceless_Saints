(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout/HeadTags.js":
/*!***************************************!*\
  !*** ./components/Layout/HeadTags.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Minor\\Voiceless_Saints\\components\\Layout\\HeadTags.js";


const HeadTags = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      charSet: "UTF-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "icon",
      href: "/favicon.png",
      sizes: "16*16",
      type: "image/png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "/listMessages.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "/styles.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "/nprogress.css"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: "Voiceless-Saints"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false);

/* harmony default export */ __webpack_exports__["default"] = (HeadTags);

/***/ }),

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeadTags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeadTags */ "./components/Layout/HeadTags.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Sidemenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Sidemenu */ "./components/Layout/Sidemenu.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Search */ "./components/Layout/Search.js");


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Minor\\Voiceless_Saints\\components\\Layout\\Layout.js";



 //import { Container } from "semantic-ui-react";







function Layout({
  children,
  user
}) {
  const contextRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();

  (next_router__WEBPACK_IMPORTED_MODULE_7___default().onRouteChangeStart) = () => nprogress__WEBPACK_IMPORTED_MODULE_5___default().start();

  (next_router__WEBPACK_IMPORTED_MODULE_7___default().onRouteChangeComplete) = () => nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();

  (next_router__WEBPACK_IMPORTED_MODULE_7___default().onRouteChangeError) = () => nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeadTags__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          marginLeft: "1rem",
          marginRight: "1rem"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Ref, {
          innerRef: contextRef,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {
              floated: "left",
              width: 2,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Sticky, {
                context: contextRef,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sidemenu__WEBPACK_IMPORTED_MODULE_8__.default, {
                  user: user
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 1
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 1
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 1
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {
              floated: "left",
              width: 10,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Visibility, {
                context: contextRef,
                children: children
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 1
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 1
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {
              floated: "left",
              width: 4,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Sticky, {
                context: contextRef,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Segment, {
                  basic: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 3
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 1
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 1
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 1
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 1
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 1
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 1
      }, this)
    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 1
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {
        text: true,
        style: {
          paddingTop: "1rem"
        },
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }, this)]
    }, void 0, true)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
  \*************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Minor\\Voiceless_Saints\\components\\Layout\\Navbar.js";






function Navbar() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  const isActive = route => router.pathname === route;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
    fluid: true,
    borderless: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
      text: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "/login",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          header: true,
          active: isActive('/login'),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            size: "large",
            name: "sign in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 9
          }, this), "Login"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 6
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "/signup",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
          header: true,
          active: isActive('/signup'),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            size: "large",
            name: "signup"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 9
          }, this), "Signup"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Layout/Search.js":
/*!*************************************!*\
  !*** ./components/Layout/Search.js ***!
  \*************************************/
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");

var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Minor\\Voiceless_Saints\\components\\Layout\\Search.js";






let cancel;

function SearchComponent() {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: results,
    1: setResults
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const handleChange = async e => {
    const {
      value
    } = e.target;
    if (value.length === 0) return setText(value);
    setText(value);
    if (value.trim().length === 0) return; //change above

    setLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_3___default().CancelToken);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get("token");
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__.default}/api/search/${value}`, {
        headers: {
          Authorization: token
        },
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });

      if (res.data.length === 0) {
        results.length > 0 && setResults([]);
        return setLoading(false);
      }

      setResults(res.data);
    } catch (error) {
      console.log("Error Searching");
    }

    setLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (text.length === 0 && loading) setLoading(false);
  }, [text]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Search, {
    onBlur: () => {
      results.length > 0 && setResults([]);
      loading && setLoading(false);
      setText("");
    },
    loading: loading,
    value: text,
    resultRenderer: ResultRenderer,
    results: results,
    onSearchChange: handleChange,
    minCharacters: 1,
    onResultSelect: (e, data) => next_router__WEBPACK_IMPORTED_MODULE_5___default().push(`/${data.result.username}`)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

const ResultRenderer = ({
  _id,
  profilePicUrl,
  name
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
        src: profilePicUrl,
        alt: "ProfilePic",
        avatar: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
        header: name,
        as: "a"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, undefined)
  }, _id, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchComponent);

/***/ }),

/***/ "./components/Layout/Sidemenu.js":
/*!***************************************!*\
  !*** ./components/Layout/Sidemenu.js ***!
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/authUser */ "./utils/authUser.js");


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Minor\\Voiceless_Saints\\components\\Layout\\Sidemenu.js";
// import React from "react";
// import {List,Icon} from "semantic-ui-react";
// import Link from "next/link";
// import {useRouter} from "next/router";
// import {logoutUser} from "../../utils/authUser";
// function SideMenu({user:{unreadNotification,email,unreadMessage,username}}) {
// const router =useRouter();
// const isActive = route => router.pathname === route;
// return (
// <>
// <List>
// <Link href="/">
// <List.Item active={!isActive('/')}>
// <Icon name = "home" size="large" color={isActive('/') && 'teal'} />
// <List.Content>
// <List.Header content = "Home" />
// </List.Content>
// </List.Item>
// </Link>
// <br />
// <Link href="/messages">
// <List.Item active={!isActive('/messages')}>
// <Icon name = {unreadMessage ? "hand point right":"mail outline" } size="large" color={(isActive('/messages') && 'teal')||(unreadMessage &&"orange")} />
// <List.Content>
// <List.Header content = "Home" />
// </List.Content>
// </List.Item>
// </Link>
// <br />
// <Link href="/notifications">
// <List.Item active={!isActive('/notifications')}>
// <Icon name = {unreadNotification ? "hand point right":"bell outline" } size="large" color={(isActive('/notifications') && 'teal')||(unreadNotification &&"orange")} />
// <List.Content>
// <List.Header content = "Notifications" />
// </List.Content>
// </List.Item>
// </Link>
// <br />
// <Link href="/notifications">
// <List.Item active={!isActive('/notifications')}>
// <Icon name = {unreadNotification ? "hand point right":"bell outline" } size="large" color={(isActive('/notifications') && 'teal')||(unreadNotification &&"orange")} />
// <List.Content>
// <List.Header content = "Notifications" />
// </List.Content>
// </List.Item>
// </Link>
// <br />
// <Link href= {`/${username}`}>
// <List.Item active = {router.query.username === username}>
// <Icon
// name="user"
// size="large"
// color={router.query.username === username && "teal"}
// />
// <List.Content>
// <List.Header content= "Account" />
// </List.Content>
// </List.Item>
// </Link>
// <List.Item onClick = {() => logoutUser(email)} >
// <Icon name = "log out" size="large" />
// <List.Content>
// <List.Header content="Logout" />
// </List.Content>
// </List.Item>
// </List>
// </>
// );
// return <div>SideMenu</div>;
// }
// export default SideMenu;






function SideMenu({
  user: {
    unreadNotification,
    email,
    unreadMessage,
    username
  }
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  const isActive = route => router.pathname === route;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
      style: {
        paddingTop: "1rem"
      },
      size: "big",
      verticalAlign: "middle",
      selection: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
          active: isActive("/"),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "home",
            size: "large",
            color: isActive("/") && "teal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
              content: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/messages",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
          active: isActive("/messages"),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: unreadMessage ? "hand point right" : "mail outline",
            size: "large",
            color: isActive("/messages") && "teal" || unreadMessage && "orange"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
              content: "Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/notifications",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
          active: isActive("/notifications"),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: unreadNotification ? "hand point right" : "bell outline",
            size: "large",
            color: isActive("/notifications") && "teal" || unreadNotification && "orange"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
              content: "Notifications"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: `/${username}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
          active: router.query.username === username,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "user",
            size: "large",
            color: router.query.username === username && "teal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
              content: "Account"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
        onClick: () => (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_5__.logoutUser)(email),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: "log out",
          size: "large"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
            content: "Logout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Minor\\Voiceless_Saints\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__.default, _objectSpread(_objectSpread({}, pageProps), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  const {
    token
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)(ctx);
  let pageProps = {};
  const protectedRoutes = ctx.pathname === "/" || ctx.pathname === "/[username]" || ctx.pathname === "/notifications" || ctx.pathname === "/post/[postId]" || ctx.pathname === "/messages" || ctx.pathname === "/search";

  if (!token) {
    protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_5__.redirectUser)(ctx, "/login");
  } else {
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__.default}/api/auth`, {
        headers: {
          Authorization: token
        }
      });
      const {
        user,
        userFollowStats
      } = res.data;
      if (user) !protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_5__.redirectUser)(ctx, "/");
      pageProps.user = user;
      pageProps.userFollowStats = userFollowStats;
    } catch (error) {
      (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(ctx, "token");
      (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_5__.redirectUser)(ctx, '/login');
    }
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

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

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

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

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_app_js-node_modules_semantic-ui-css_semantic_min_css-node_modules_n-d06b18"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZFRhZ3MuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9jb21wb25lbnRzL0xheW91dC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvTGF5b3V0L1NpZGVtZW51LmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi91dGlscy9hdXRoVXNlci5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vdXRpbHMvYmFzZVVybC5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vdXRpbHMvY2F0Y2hFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9pZ25vcmVkfEM6XFxVc2Vyc1xcSFBcXE9uZURyaXZlXFxEZXNrdG9wXFxNaW5vclxcVm9pY2VsZXNzX1NhaW50c1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkhlYWRUYWdzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VyIiwiY29udGV4dFJlZiIsImNyZWF0ZVJlZiIsIlJvdXRlciIsIm5wcm9ncmVzcyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdUb3AiLCJOYXZiYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0FjdGl2ZSIsInJvdXRlIiwicGF0aG5hbWUiLCJjYW5jZWwiLCJTZWFyY2hDb21wb25lbnQiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImxlbmd0aCIsInRyaW0iLCJDYW5jZWxUb2tlbiIsImF4aW9zIiwidG9rZW4iLCJjb29raWUiLCJyZXMiLCJiYXNlVXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjYW5jZWxUb2tlbiIsImNhbmNlbGVyIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIlJlc3VsdFJlbmRlcmVyIiwicmVzdWx0IiwidXNlcm5hbWUiLCJfaWQiLCJwcm9maWxlUGljVXJsIiwibmFtZSIsIlNpZGVNZW51IiwidW5yZWFkTm90aWZpY2F0aW9uIiwiZW1haWwiLCJ1bnJlYWRNZXNzYWdlIiwicXVlcnkiLCJsb2dvdXRVc2VyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwYXJzZUNvb2tpZXMiLCJwcm90ZWN0ZWRSb3V0ZXMiLCJyZWRpcmVjdFVzZXIiLCJ1c2VyRm9sbG93U3RhdHMiLCJkZXN0cm95Q29va2llIiwicmVnaXN0ZXJVc2VyIiwic2V0RXJyb3IiLCJzZXRUb2tlbiIsImVycm9yTXNnIiwiY2F0Y2hFcnJvcnMiLCJsb2dpblVzZXIiLCJsb2NhdGlvbiIsInJlcSIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwicmVzcG9uc2UiLCJyZXF1ZXN0IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLG1CQUNmO0FBQUEseUJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw0QkFDRTtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXNCLGFBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTSxhQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBTSxTQUFHLEVBQUMsTUFBVjtBQUFpQixVQUFJLEVBQUMsY0FBdEI7QUFBcUMsV0FBSyxF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QUNsQjtBQUVBUixZQUFRLEdBQUc3QixLQUFLLENBQUNxQyxRQUFOLENBQWV0QyxJQUExQjtBQUVBRSxXQUFPLENBQUNELEtBQVIsQ0FBYzZCLFFBQWQ7QUFDRCxHQU5ELE1BTU8sSUFBSTdCLEtBQUssQ0FBQ3NDLE9BQVYsRUFBbUI7QUFDeEI7QUFDQVQsWUFBUSxHQUFHN0IsS0FBSyxDQUFDc0MsT0FBakI7QUFFQXJDLFdBQU8sQ0FBQ0QsS0FBUixDQUFjNkIsUUFBZDtBQUNELEdBTE0sTUFLQTtBQUNMO0FBQ0FBLFlBQVEsR0FBRzdCLEtBQUssQ0FBQ3VDLE9BQWpCO0FBRUF0QyxXQUFPLENBQUNELEtBQVIsQ0FBYzZCLFFBQWQ7QUFDRDs7QUFDRixTQUFPQSxRQUFQO0FBQ0EsQ0FyQkQ7O0FBdUJBLCtEQUFlQyxXQUFmLEU7Ozs7Ozs7Ozs7O0FDdkJBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgSGVhZFRhZ3MgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgc2l6ZXM9XCIxNioxNlwiIHR5cGU9XCJpbWFnZS9wbmdcIiAvPlxyXG5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvbGlzdE1lc3NhZ2VzLmNzc1wiIC8+XHJcblxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdHlsZXMuY3NzXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvbnByb2dyZXNzLmNzc1wiIC8+XHJcblxyXG4gICAgICA8dGl0bGU+Vm9pY2VsZXNzLVNhaW50czwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgPC8+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRUYWdzO1xyXG4iLCJpbXBvcnQgUmVhY3Qse2NyZWF0ZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkVGFncyBmcm9tIFwiLi9IZWFkVGFnc1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHJcbkNvbnRhaW5lcixcclxuVmlzaWJpbGl0eSxcclxuR3JpZCxcclxuU3RpY2t5LFxyXG5SZWYsXHJcbkRpdmlkZXIsXHJcblNlZ21lbnRcclxuXHJcblxyXG5cclxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuLy9pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IG5wcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBTaWRlTWVudSBmcm9tIFwiLi9TaWRlbWVudVwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL1NlYXJjaFwiO1xyXG5mdW5jdGlvbiBMYXlvdXQoe2NoaWxkcmVuLHVzZXJ9KSB7XHJcbmNvbnN0IGNvbnRleHRSZWYgPSBjcmVhdGVSZWYoKTtcclxuICBSb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0PSgpID0+IG5wcm9ncmVzcy5zdGFydCgpXHJcbiAgUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZT0oKT0+bnByb2dyZXNzLmRvbmUoKVxyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3I9KCk9Pm5wcm9ncmVzcy5kb25lKClcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZFRhZ3MgLz5cclxuXHJcblxyXG5cclxuICAgICAge1xyXG4gICAgICAgdXNlciA/IChcclxuICAgICAgICAgIDw+XHJcbjxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjFyZW1cIixtYXJnaW5SaWdodDpcIjFyZW1cIn19PlxyXG48UmVmIGlubmVyUmVmID0ge2NvbnRleHRSZWZ9PiBcclxuXHJcbjxHcmlkPlxyXG5cclxuPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9XCJsZWZ0XCIgd2lkdGg9ezJ9PlxyXG48U3RpY2t5IGNvbnRleHQ9e2NvbnRleHRSZWZ9PlxyXG5cclxuPFNpZGVNZW51IHVzZXIgPSB7dXNlcn0vPlxyXG5cclxuXHJcbjwvU3RpY2t5PlxyXG5cclxuXHJcbjwvR3JpZC5Db2x1bW4+XHJcblxyXG5cclxuXHJcblxyXG48R3JpZC5Db2x1bW4gZmxvYXRlZD1cImxlZnRcIiB3aWR0aD17MTB9PlxyXG48VmlzaWJpbGl0eSBjb250ZXh0ID0ge2NvbnRleHRSZWZ9PntjaGlsZHJlbn08L1Zpc2liaWxpdHk+XHJcblxyXG5cclxuPC9HcmlkLkNvbHVtbj5cclxuXHJcblxyXG5cclxuPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9XCJsZWZ0XCIgd2lkdGg9ezR9PlxyXG48U3RpY2t5IGNvbnRleHQ9e2NvbnRleHRSZWZ9PlxyXG48U2VnbWVudCBiYXNpYz5cclxuICA8U2VhcmNoLz5cclxuPC9TZWdtZW50PlxyXG5cclxuXHJcbjwvU3RpY2t5PlxyXG5cclxuXHJcbjwvR3JpZC5Db2x1bW4+XHJcblxyXG5cclxuXHJcbjwvR3JpZD5cclxuPC9SZWY+XHJcbjwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICA8Lz5cclxuXHJcblxyXG4gICAgICAgKTooXHJcbjw+XHJcblxyXG48TmF2YmFyPjwvTmF2YmFyPlxyXG5cclxuICAgICAgPENvbnRhaW5lciB0ZXh0IHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMXJlbVwiIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuXHJcbjwvPlxyXG5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtNZW51LENvbnRhaW5lcixJY29ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBpc0FjdGl2ZT0gcm91dGUgPT5yb3V0ZXIucGF0aG5hbWUgPT09IHJvdXRlXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudSBmbHVpZCBib3JkZXJsZXNzPlxyXG4gICAgPENvbnRhaW5lciB0ZXh0PlxyXG4gICAgIDxMaW5rIGhyZWY9Jy9sb2dpbic+XHJcbiAgICAgIDxNZW51Lkl0ZW0gaGVhZGVyIGFjdGl2ZT17aXNBY3RpdmUoJy9sb2dpbicpfT5cclxuICAgICAgICA8SWNvbiBzaXplPVwibGFyZ2VcIiBuYW1lPVwic2lnbiBpblwiIC8+XHJcbiAgICAgICAgTG9naW5cclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgPC9MaW5rPlxyXG4gICAgIDxMaW5rIGhyZWY9Jy9zaWdudXAnPlxyXG4gICAgICA8TWVudS5JdGVtIGhlYWRlciBhY3RpdmU9e2lzQWN0aXZlKCcvc2lnbnVwJyl9PlxyXG4gICAgICAgIDxJY29uIHNpemU9XCJsYXJnZVwiIG5hbWU9XCJzaWdudXBcIiAvPlxyXG4gICAgICAgIFNpZ251cFxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICA8L0xpbms+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGlzdCwgSW1hZ2UsIFNlYXJjaCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5sZXQgY2FuY2VsO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoQ29tcG9uZW50KCkge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGFzeW5jIGUgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgaWYodmFsdWUubGVuZ3RoID09PSAwKSByZXR1cm4gc2V0VGV4dCh2YWx1ZSk7XHJcbiAgICBzZXRUZXh0KHZhbHVlKTtcclxuICAgIGlmICh2YWx1ZS50cmltKCkubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAvL2NoYW5nZSBhYm92ZVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgY2FuY2VsICYmIGNhbmNlbCgpO1xyXG4gICAgICBjb25zdCBDYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoXCJ0b2tlblwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvc2VhcmNoLyR7dmFsdWV9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfSxcclxuICAgICAgICBjYW5jZWxUb2tlbjogbmV3IENhbmNlbFRva2VuKGNhbmNlbGVyID0+IHtcclxuICAgICAgICAgIGNhbmNlbCA9IGNhbmNlbGVyO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA9PT0gMClcclxuICAgICAgXHJcbiAgICAgIHtcclxuICAgICAgICAgIHJlc3VsdHMubGVuZ3RoID4gMCAmJiBzZXRSZXN1bHRzKFtdKTtcclxuICAgICAgICAgIHJldHVybiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0UmVzdWx0cyhyZXMuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIFNlYXJjaGluZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuXHJcbmlmKHRleHQubGVuZ3RoID09PSAwICYmIGxvYWRpbmcpIHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICB9LFt0ZXh0XSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWFyY2hcclxuICAgICAgb25CbHVyPXsoKSA9PiB7XHJcbiAgICAgICAgcmVzdWx0cy5sZW5ndGggPiAwICYmIHNldFJlc3VsdHMoW10pO1xyXG4gICAgICAgIGxvYWRpbmcgJiYgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0VGV4dChcIlwiKTtcclxuICAgICAgfX1cclxuICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgIHJlc3VsdFJlbmRlcmVyPXtSZXN1bHRSZW5kZXJlcn1cclxuICAgICAgcmVzdWx0cz17cmVzdWx0c31cclxuICAgICAgb25TZWFyY2hDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgbWluQ2hhcmFjdGVycz17MX1cclxuICAgICAgb25SZXN1bHRTZWxlY3Q9eyhlLCBkYXRhKSA9PiBSb3V0ZXIucHVzaChgLyR7ZGF0YS5yZXN1bHQudXNlcm5hbWV9YCl9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFJlc3VsdFJlbmRlcmVyID0gKHsgX2lkLCBwcm9maWxlUGljVXJsLCBuYW1lIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpc3Qga2V5PXtfaWR9PlxyXG4gICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e3Byb2ZpbGVQaWNVcmx9IGFsdD1cIlByb2ZpbGVQaWNcIiBhdmF0YXIgLz5cclxuICAgICAgICA8TGlzdC5Db250ZW50IGhlYWRlcj17bmFtZX0gYXM9XCJhXCIgLz5cclxuICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICA8L0xpc3Q+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaENvbXBvbmVudDtcclxuIiwiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQge0xpc3QsSWNvbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBpbXBvcnQge2xvZ291dFVzZXJ9IGZyb20gXCIuLi8uLi91dGlscy9hdXRoVXNlclwiO1xyXG4vLyBmdW5jdGlvbiBTaWRlTWVudSh7dXNlcjp7dW5yZWFkTm90aWZpY2F0aW9uLGVtYWlsLHVucmVhZE1lc3NhZ2UsdXNlcm5hbWV9fSkge1xyXG4vLyBjb25zdCByb3V0ZXIgPXVzZVJvdXRlcigpO1xyXG5cclxuXHJcbi8vIGNvbnN0IGlzQWN0aXZlID0gcm91dGUgPT4gcm91dGVyLnBhdGhuYW1lID09PSByb3V0ZTtcclxuXHJcbi8vIHJldHVybiAoXHJcblxyXG4vLyA8PlxyXG5cclxuLy8gPExpc3Q+XHJcblxyXG5cclxuXHJcbi8vIDxMaW5rIGhyZWY9XCIvXCI+XHJcblxyXG4vLyA8TGlzdC5JdGVtIGFjdGl2ZT17IWlzQWN0aXZlKCcvJyl9PlxyXG5cclxuLy8gPEljb24gbmFtZSA9IFwiaG9tZVwiIHNpemU9XCJsYXJnZVwiIGNvbG9yPXtpc0FjdGl2ZSgnLycpICYmICd0ZWFsJ30gLz5cclxuLy8gPExpc3QuQ29udGVudD5cclxuLy8gPExpc3QuSGVhZGVyIGNvbnRlbnQgPSBcIkhvbWVcIiAvPlxyXG5cclxuLy8gPC9MaXN0LkNvbnRlbnQ+XHJcblxyXG4vLyA8L0xpc3QuSXRlbT5cclxuXHJcblxyXG5cclxuLy8gPC9MaW5rPlxyXG5cclxuXHJcbi8vIDxiciAvPlxyXG5cclxuLy8gPExpbmsgaHJlZj1cIi9tZXNzYWdlc1wiPlxyXG5cclxuLy8gPExpc3QuSXRlbSBhY3RpdmU9eyFpc0FjdGl2ZSgnL21lc3NhZ2VzJyl9PlxyXG5cclxuLy8gPEljb24gbmFtZSA9IHt1bnJlYWRNZXNzYWdlID8gXCJoYW5kIHBvaW50IHJpZ2h0XCI6XCJtYWlsIG91dGxpbmVcIiB9IHNpemU9XCJsYXJnZVwiIGNvbG9yPXsoaXNBY3RpdmUoJy9tZXNzYWdlcycpICYmICd0ZWFsJyl8fCh1bnJlYWRNZXNzYWdlICYmXCJvcmFuZ2VcIil9IC8+XHJcbi8vIDxMaXN0LkNvbnRlbnQ+XHJcbi8vIDxMaXN0LkhlYWRlciBjb250ZW50ID0gXCJIb21lXCIgLz5cclxuXHJcbi8vIDwvTGlzdC5Db250ZW50PlxyXG5cclxuLy8gPC9MaXN0Lkl0ZW0+XHJcblxyXG5cclxuXHJcbi8vIDwvTGluaz5cclxuXHJcbi8vIDxiciAvPlxyXG5cclxuLy8gPExpbmsgaHJlZj1cIi9ub3RpZmljYXRpb25zXCI+XHJcblxyXG4vLyA8TGlzdC5JdGVtIGFjdGl2ZT17IWlzQWN0aXZlKCcvbm90aWZpY2F0aW9ucycpfT5cclxuXHJcbi8vIDxJY29uIG5hbWUgPSB7dW5yZWFkTm90aWZpY2F0aW9uID8gXCJoYW5kIHBvaW50IHJpZ2h0XCI6XCJiZWxsIG91dGxpbmVcIiB9IHNpemU9XCJsYXJnZVwiIGNvbG9yPXsoaXNBY3RpdmUoJy9ub3RpZmljYXRpb25zJykgJiYgJ3RlYWwnKXx8KHVucmVhZE5vdGlmaWNhdGlvbiAmJlwib3JhbmdlXCIpfSAvPlxyXG4vLyA8TGlzdC5Db250ZW50PlxyXG4vLyA8TGlzdC5IZWFkZXIgY29udGVudCA9IFwiTm90aWZpY2F0aW9uc1wiIC8+XHJcblxyXG4vLyA8L0xpc3QuQ29udGVudD5cclxuXHJcbi8vIDwvTGlzdC5JdGVtPlxyXG5cclxuXHJcblxyXG4vLyA8L0xpbms+XHJcblxyXG5cclxuXHJcbi8vIDxiciAvPlxyXG5cclxuLy8gPExpbmsgaHJlZj1cIi9ub3RpZmljYXRpb25zXCI+XHJcblxyXG4vLyA8TGlzdC5JdGVtIGFjdGl2ZT17IWlzQWN0aXZlKCcvbm90aWZpY2F0aW9ucycpfT5cclxuXHJcbi8vIDxJY29uIG5hbWUgPSB7dW5yZWFkTm90aWZpY2F0aW9uID8gXCJoYW5kIHBvaW50IHJpZ2h0XCI6XCJiZWxsIG91dGxpbmVcIiB9IHNpemU9XCJsYXJnZVwiIGNvbG9yPXsoaXNBY3RpdmUoJy9ub3RpZmljYXRpb25zJykgJiYgJ3RlYWwnKXx8KHVucmVhZE5vdGlmaWNhdGlvbiAmJlwib3JhbmdlXCIpfSAvPlxyXG4vLyA8TGlzdC5Db250ZW50PlxyXG4vLyA8TGlzdC5IZWFkZXIgY29udGVudCA9IFwiTm90aWZpY2F0aW9uc1wiIC8+XHJcblxyXG4vLyA8L0xpc3QuQ29udGVudD5cclxuXHJcbi8vIDwvTGlzdC5JdGVtPlxyXG5cclxuXHJcblxyXG4vLyA8L0xpbms+XHJcblxyXG5cclxuLy8gPGJyIC8+XHJcblxyXG5cclxuLy8gPExpbmsgaHJlZj0ge2AvJHt1c2VybmFtZX1gfT5cclxuLy8gPExpc3QuSXRlbSBhY3RpdmUgPSB7cm91dGVyLnF1ZXJ5LnVzZXJuYW1lID09PSB1c2VybmFtZX0+XHJcblxyXG4vLyA8SWNvblxyXG4vLyBuYW1lPVwidXNlclwiXHJcbi8vIHNpemU9XCJsYXJnZVwiXHJcbi8vIGNvbG9yPXtyb3V0ZXIucXVlcnkudXNlcm5hbWUgPT09IHVzZXJuYW1lICYmIFwidGVhbFwifVxyXG4vLyAvPlxyXG5cclxuLy8gPExpc3QuQ29udGVudD5cclxuXHJcbi8vIDxMaXN0LkhlYWRlciBjb250ZW50PSBcIkFjY291bnRcIiAvPlxyXG5cclxuLy8gPC9MaXN0LkNvbnRlbnQ+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIDwvTGlzdC5JdGVtPlxyXG5cclxuLy8gPC9MaW5rPlxyXG5cclxuXHJcblxyXG4vLyA8TGlzdC5JdGVtIG9uQ2xpY2sgPSB7KCkgPT4gbG9nb3V0VXNlcihlbWFpbCl9ID5cclxuXHJcbi8vIDxJY29uIG5hbWUgPSBcImxvZyBvdXRcIiBzaXplPVwibGFyZ2VcIiAvPlxyXG4vLyA8TGlzdC5Db250ZW50PlxyXG5cclxuLy8gPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJMb2dvdXRcIiAvPlxyXG5cclxuLy8gPC9MaXN0LkNvbnRlbnQ+XHJcblxyXG5cclxuXHJcbi8vIDwvTGlzdC5JdGVtPlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIDwvTGlzdD5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIDwvPlxyXG4vLyApO1xyXG5cclxuXHJcblxyXG4vLyByZXR1cm4gPGRpdj5TaWRlTWVudTwvZGl2PjtcclxuXHJcblxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBTaWRlTWVudTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpc3QsIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgbG9nb3V0VXNlciB9IGZyb20gXCIuLi8uLi91dGlscy9hdXRoVXNlclwiO1xyXG5cclxuZnVuY3Rpb24gU2lkZU1lbnUoeyB1c2VyOiB7IHVucmVhZE5vdGlmaWNhdGlvbiwgZW1haWwsIHVucmVhZE1lc3NhZ2UsIHVzZXJuYW1lIH0gfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBpc0FjdGl2ZSA9IHJvdXRlID0+IHJvdXRlci5wYXRobmFtZSA9PT0gcm91dGU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdFxyXG4gICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMXJlbVwiIH19XHJcbiAgICAgICAgc2l6ZT1cImJpZ1wiXHJcbiAgICAgICAgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgc2VsZWN0aW9uPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8TGlzdC5JdGVtIGFjdGl2ZT17aXNBY3RpdmUoXCIvXCIpfT5cclxuICAgICAgICAgICAgPEljb24gbmFtZT1cImhvbWVcIiBzaXplPVwibGFyZ2VcIiBjb2xvcj17aXNBY3RpdmUoXCIvXCIpICYmIFwidGVhbFwifSAvPlxyXG4gICAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxMaXN0LkhlYWRlciBjb250ZW50PVwiSG9tZVwiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8TGluayBocmVmPVwiL21lc3NhZ2VzXCI+XHJcbiAgICAgICAgICA8TGlzdC5JdGVtIGFjdGl2ZT17aXNBY3RpdmUoXCIvbWVzc2FnZXNcIil9PlxyXG4gICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgIG5hbWU9e3VucmVhZE1lc3NhZ2UgPyBcImhhbmQgcG9pbnQgcmlnaHRcIiA6IFwibWFpbCBvdXRsaW5lXCJ9XHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBjb2xvcj17XHJcbiAgICAgICAgICAgICAgICAoaXNBY3RpdmUoXCIvbWVzc2FnZXNcIikgJiYgXCJ0ZWFsXCIpIHx8ICh1bnJlYWRNZXNzYWdlICYmIFwib3JhbmdlXCIpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxMaXN0LkhlYWRlciBjb250ZW50PVwiTWVzc2FnZXNcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9ub3RpZmljYXRpb25zXCI+XHJcbiAgICAgICAgICA8TGlzdC5JdGVtIGFjdGl2ZT17aXNBY3RpdmUoXCIvbm90aWZpY2F0aW9uc1wiKX0+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgbmFtZT17dW5yZWFkTm90aWZpY2F0aW9uID8gXCJoYW5kIHBvaW50IHJpZ2h0XCIgOiBcImJlbGwgb3V0bGluZVwifVxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgY29sb3I9e1xyXG4gICAgICAgICAgICAgICAgKGlzQWN0aXZlKFwiL25vdGlmaWNhdGlvbnNcIikgJiYgXCJ0ZWFsXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAodW5yZWFkTm90aWZpY2F0aW9uICYmIFwib3JhbmdlXCIpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxMaXN0LkhlYWRlciBjb250ZW50PVwiTm90aWZpY2F0aW9uc1wiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8TGluayBocmVmPXtgLyR7dXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICA8TGlzdC5JdGVtIGFjdGl2ZT17cm91dGVyLnF1ZXJ5LnVzZXJuYW1lID09PSB1c2VybmFtZX0+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgY29sb3I9e3JvdXRlci5xdWVyeS51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgXCJ0ZWFsXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJBY2NvdW50XCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxMaXN0Lkl0ZW0gb25DbGljaz17KCkgPT4gbG9nb3V0VXNlcihlbWFpbCl9PlxyXG4gICAgICAgICAgPEljb24gbmFtZT1cImxvZyBvdXRcIiBzaXplPVwibGFyZ2VcIiAvPlxyXG4gICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJMb2dvdXRcIiAvPlxyXG4gICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVNZW51O1xyXG4iLCJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge3BhcnNlQ29va2llcyxkZXN0cm95Q29va2llfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQge3JlZGlyZWN0VXNlcn0gZnJvbSBcIi4uL3V0aWxzL2F1dGhVc2VyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTXlBcHAoe0NvbXBvbmVudCxwYWdlUHJvcHN9KXtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB7Li4ucGFnZVByb3BzfT5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzPWFzeW5jKHtDb21wb25lbnQsY3R4fSk9PntcclxuICBjb25zdCB7dG9rZW59PSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuICBsZXQgcGFnZVByb3BzID0ge307XHJcbiAgY29uc3QgcHJvdGVjdGVkUm91dGVzPVxyXG4gIGN0eC5wYXRobmFtZT09PVwiL1wiIHx8XHJcbiAgY3R4LnBhdGhuYW1lPT09XCIvW3VzZXJuYW1lXVwiIHx8XHJcbiAgY3R4LnBhdGhuYW1lID09PVwiL25vdGlmaWNhdGlvbnNcIiB8fFxyXG4gIGN0eC5wYXRobmFtZSA9PT1cIi9wb3N0L1twb3N0SWRdXCIgfHxcclxuICBjdHgucGF0aG5hbWUgPT09XCIvbWVzc2FnZXNcIiB8fFxyXG4gIGN0eC5wYXRobmFtZSA9PT1cIi9zZWFyY2hcIjtcclxuICBcclxuICBcclxuICBpZighdG9rZW4pe1xyXG4gICAgcHJvdGVjdGVkUm91dGVzICYmIHJlZGlyZWN0VXNlcihjdHgsXCIvbG9naW5cIik7XHJcbiAgfWVsc2V7XHJcbiAgICBpZihDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKXtcclxuICAgICAgcGFnZVByb3BzPWF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgIH1cclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlcz1hd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL2F1dGhgLHtcclxuICAgICAgaGVhZGVyczp7QXV0aG9yaXphdGlvbjp0b2tlbn1cclxuICAgIH0pXHJcbiAgICBjb25zdCB7dXNlcix1c2VyRm9sbG93U3RhdHN9ID0gcmVzLmRhdGFcclxuXHJcbiAgICBpZih1c2VyKSAhcHJvdGVjdGVkUm91dGVzICYmIHJlZGlyZWN0VXNlcihjdHgsXCIvXCIpO1xyXG4gICAgcGFnZVByb3BzLnVzZXI9dXNlcjtcclxuICAgIHBhZ2VQcm9wcy51c2VyRm9sbG93U3RhdHM9dXNlckZvbGxvd1N0YXRzO1xyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgZGVzdHJveUNvb2tpZShjdHgsXCJ0b2tlblwiKVxyXG4gICAgICByZWRpcmVjdFVzZXIoY3R4LCcvbG9naW4nKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZXR1cm4geyBwYWdlUHJvcHMgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gJy4vY2F0Y2hFcnJvcnMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXI9YXN5bmModXNlcixwcm9maWxlUGljVXJsLHNldEVycm9yLHNldExvYWRpbmcpPT57XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXM9YXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwYCx7dXNlcixwcm9maWxlUGljVXJsfSlcclxuXHJcbiAgIHNldFRva2VuKHJlcy5kYXRhKTtcclxuXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICBjb25zdCBlcnJvck1zZz0gIGNhdGNoRXJyb3JzKGVycm9yKVxyXG4gICAgICBzZXRFcnJvcihlcnJvck1zZylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlcj1hc3luYyh1c2VyLHNldEVycm9yLHNldExvYWRpbmcpPT57XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXM9YXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvYXV0aGAse3VzZXJ9KVxyXG5cclxuICAgc2V0VG9rZW4ocmVzLmRhdGEpO1xyXG5cclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnN0IGVycm9yTXNnPSAgY2F0Y2hFcnJvcnMoZXJyb3IpXHJcbiAgICAgIHNldEVycm9yKGVycm9yTXNnKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVkaXJlY3RVc2VyID0gKGN0eCxsb2NhdGlvbik9PntcclxuICBpZihjdHgucmVxKXtcclxuICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMix7TG9jYXRpb246bG9jYXRpb259KVxyXG4gICAgY3R4LnJlcy5lbmQoKVxyXG4gIH1lbHNle1xyXG4gICAgUm91dGVyLnB1c2gobG9jYXRpb24pO1xyXG4gIH1cclxufVxyXG5jb25zdCBzZXRUb2tlbj10b2tlbj0+e1xyXG4gICAgY29va2llLnNldChcInRva2VuXCIsdG9rZW4pXHJcbiAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXIgPSBlbWFpbCA9PiB7XHJcblxyXG5jb29raWUuc2V0KFwidXNlckVtYWlsXCIsIGVtYWlsKTtcclxuY29va2llLnJlbW92ZShcInRva2VuXCIpO1xyXG5Sb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuUm91dGVyLnJlbG9hZCgpO1xyXG5cclxuXHJcblxyXG59OyIsImNvbnN0IGJhc2VVcmwgPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlVXJsO1xyXG4iLCJjb25zdCBjYXRjaEVycm9ycyA9IChlcnJvcikgPT4ge1xyXG4gIGxldCBlcnJvck1zZyA9ICcnO1xyXG5cclxuICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgIC8vIElmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIG5vdCByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlIGluIHRoZSByYW5nZSBvZiAyeHhcclxuXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAvLyBpZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgbm8gcmVzcG9uc2Ugd2FzIHJlY2V2aWVkIGZyb20gc2VydmVyXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlcXVlc3Q7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGlmIHNvbWV0aGluZyBlbHNlIGhhcHBlbmVkIHdoaWxlIG1ha2luZyB0aGUgcmVxdWVzdFxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5tZXNzYWdlO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxuIHJldHVybiBlcnJvck1zZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==