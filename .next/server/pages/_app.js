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


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Layout\\HeadTags.js";


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


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Layout\\Layout.js";



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

var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Layout\\Navbar.js";






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

var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Layout\\Search.js";






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


var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\components\\Layout\\Sidemenu.js";
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
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\HP\\OneDrive\\Desktop\\Pet_Project\\Voiceless_Saints\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_1___default()) {
  static async getInitialProps({
    Component,
    ctx
  }) {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)(ctx);
    let pageProps = {};
    const protectedRoutes = ctx.pathname === "/" || ctx.pathname === "/[username]" || ctx.pathname === "/notifications" || ctx.pathname === "/post/[postId]";

    if (!token) {
      protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_5__.redirectUser)(ctx, "/login");
    } //
    else {
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
          (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_5__.redirectUser)(ctx, "/login");
        }
      }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__.default, _objectSpread(_objectSpread({}, pageProps), {}, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_app_js-node_modules_react-toastify_dist_ReactToastify_css-node_modu-b86d49","utils_authUser_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZFRhZ3MuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9jb21wb25lbnRzL0xheW91dC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvTGF5b3V0L1NpZGVtZW51LmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkhlYWRUYWdzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VyIiwiY29udGV4dFJlZiIsImNyZWF0ZVJlZiIsIlJvdXRlciIsIm5wcm9ncmVzcyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdUb3AiLCJOYXZiYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0FjdGl2ZSIsInJvdXRlIiwicGF0aG5hbWUiLCJjYW5jZWwiLCJTZWFyY2hDb21wb25lbnQiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImxlbmd0aCIsInRyaW0iLCJDYW5jZWxUb2tlbiIsImF4aW9zIiwidG9rZW4iLCJjb29raWUiLCJyZXMiLCJiYXNlVXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjYW5jZWxUb2tlbiIsImNhbmNlbGVyIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIlJlc3VsdFJlbmRlcmVyIiwicmVzdWx0IiwidXNlcm5hbWUiLCJfaWQiLCJwcm9maWxlUGljVXJsIiwibmFtZSIsIlNpZGVNZW51IiwidW5yZWFkTm90aWZpY2F0aW9uIiwiZW1haWwiLCJ1bnJlYWRNZXNzYWdlIiwicXVlcnkiLCJsb2dvdXRVc2VyIiwiTXlBcHAiLCJBcHAiLCJnZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYXJzZUNvb2tpZXMiLCJwYWdlUHJvcHMiLCJwcm90ZWN0ZWRSb3V0ZXMiLCJyZWRpcmVjdFVzZXIiLCJ1c2VyRm9sbG93U3RhdHMiLCJkZXN0cm95Q29va2llIiwicmVuZGVyIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxtQkFDZjtBQUFBLHlCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNEJBQ0U7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sYUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQU0sU0FBRyxFQUFDLE1BQVY7QUFBaUIsVUFBSSxFQUFDLGNBQXRCO0FBQXFDLFdBQUssRUFBQyxPQUEzQztBQUFtRCxVQUFJLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUtFO0FBQU0sU0FBRyxFQUFDLFlBQVY7QUFBdUIsVUFBSSxFQUFDLFVBQTVCO0FBQXVDLFVBQUksRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBT0U7QUFBTSxTQUFHLEVBQUMsWUFBVjtBQUF1QixVQUFJLEVBQUMsVUFBNUI7QUFBdUMsVUFBSSxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFRRTtBQUFNLFNBQUcsRUFBQyxZQUFWO0FBQXVCLFVBQUksRUFBQyxVQUE1QjtBQUF1QyxVQUFJLEVBQUM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQURGOztBQWdCQSwrREFBZUEsUUFBZixFOzs7Ozs7Ozs7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Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBIZWFkVGFncyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiBzaXplcz1cIjE2KjE2XCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcblxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9saXN0TWVzc2FnZXMuY3NzXCIgLz5cclxuXHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0eWxlcy5jc3NcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9ucHJvZ3Jlc3MuY3NzXCIgLz5cclxuXHJcbiAgICAgIDx0aXRsZT5Wb2ljZWxlc3MtU2FpbnRzPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICA8Lz5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZFRhZ3M7XHJcbiIsImltcG9ydCBSZWFjdCx7Y3JlYXRlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRUYWdzIGZyb20gXCIuL0hlYWRUYWdzXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cclxuQ29udGFpbmVyLFxyXG5WaXNpYmlsaXR5LFxyXG5HcmlkLFxyXG5TdGlja3ksXHJcblJlZixcclxuRGl2aWRlcixcclxuU2VnbWVudFxyXG5cclxuXHJcblxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG4vL2ltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgbnByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFNpZGVNZW51IGZyb20gXCIuL1NpZGVtZW51XCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoXCI7XHJcbmZ1bmN0aW9uIExheW91dCh7Y2hpbGRyZW4sdXNlcn0pIHtcclxuY29uc3QgY29udGV4dFJlZiA9IGNyZWF0ZVJlZigpO1xyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQ9KCkgPT4gbnByb2dyZXNzLnN0YXJ0KClcclxuICBSb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlPSgpPT5ucHJvZ3Jlc3MuZG9uZSgpXHJcbiAgUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvcj0oKT0+bnByb2dyZXNzLmRvbmUoKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkVGFncyAvPlxyXG5cclxuXHJcblxyXG4gICAgICB7XHJcbiAgICAgICB1c2VyID8gKFxyXG4gICAgICAgICAgPD5cclxuPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMXJlbVwiLG1hcmdpblJpZ2h0OlwiMXJlbVwifX0+XHJcbjxSZWYgaW5uZXJSZWYgPSB7Y29udGV4dFJlZn0+IFxyXG5cclxuPEdyaWQ+XHJcblxyXG48R3JpZC5Db2x1bW4gZmxvYXRlZD1cImxlZnRcIiB3aWR0aD17Mn0+XHJcbjxTdGlja3kgY29udGV4dD17Y29udGV4dFJlZn0+XHJcblxyXG48U2lkZU1lbnUgdXNlciA9IHt1c2VyfS8+XHJcblxyXG5cclxuPC9TdGlja3k+XHJcblxyXG5cclxuPC9HcmlkLkNvbHVtbj5cclxuXHJcblxyXG5cclxuXHJcbjxHcmlkLkNvbHVtbiBmbG9hdGVkPVwibGVmdFwiIHdpZHRoPXsxMH0+XHJcbjxWaXNpYmlsaXR5IGNvbnRleHQgPSB7Y29udGV4dFJlZn0+e2NoaWxkcmVufTwvVmlzaWJpbGl0eT5cclxuXHJcblxyXG48L0dyaWQuQ29sdW1uPlxyXG5cclxuXHJcblxyXG48R3JpZC5Db2x1bW4gZmxvYXRlZD1cImxlZnRcIiB3aWR0aD17NH0+XHJcbjxTdGlja3kgY29udGV4dD17Y29udGV4dFJlZn0+XHJcbjxTZWdtZW50IGJhc2ljPlxyXG4gIDxTZWFyY2gvPlxyXG48L1NlZ21lbnQ+XHJcblxyXG5cclxuPC9TdGlja3k+XHJcblxyXG5cclxuPC9HcmlkLkNvbHVtbj5cclxuXHJcblxyXG5cclxuPC9HcmlkPlxyXG48L1JlZj5cclxuPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgIDwvPlxyXG5cclxuXHJcbiAgICAgICApOihcclxuPD5cclxuXHJcbjxOYXZiYXI+PC9OYXZiYXI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyIHRleHQgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxcmVtXCIgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG5cclxuPC8+XHJcblxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICBcclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge01lbnUsQ29udGFpbmVyLEljb259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGlzQWN0aXZlPSByb3V0ZSA9PnJvdXRlci5wYXRobmFtZSA9PT0gcm91dGVcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51IGZsdWlkIGJvcmRlcmxlc3M+XHJcbiAgICA8Q29udGFpbmVyIHRleHQ+XHJcbiAgICAgPExpbmsgaHJlZj0nL2xvZ2luJz5cclxuICAgICAgPE1lbnUuSXRlbSBoZWFkZXIgYWN0aXZlPXtpc0FjdGl2ZSgnL2xvZ2luJyl9PlxyXG4gICAgICAgIDxJY29uIHNpemU9XCJsYXJnZVwiIG5hbWU9XCJzaWduIGluXCIgLz5cclxuICAgICAgICBMb2dpblxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICA8L0xpbms+XHJcbiAgICAgPExpbmsgaHJlZj0nL3NpZ251cCc+XHJcbiAgICAgIDxNZW51Lkl0ZW0gaGVhZGVyIGFjdGl2ZT17aXNBY3RpdmUoJy9zaWdudXAnKX0+XHJcbiAgICAgICAgPEljb24gc2l6ZT1cImxhcmdlXCIgbmFtZT1cInNpZ251cFwiIC8+XHJcbiAgICAgICAgU2lnbnVwXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgIDwvTGluaz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaXN0LCBJbWFnZSwgU2VhcmNoIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9iYXNlVXJsXCI7XHJcbmxldCBjYW5jZWw7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hDb21wb25lbnQoKSB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgZSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBpZih2YWx1ZS5sZW5ndGggPT09IDApIHJldHVybiBzZXRUZXh0KHZhbHVlKTtcclxuICAgIHNldFRleHQodmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgIC8vY2hhbmdlIGFib3ZlXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjYW5jZWwgJiYgY2FuY2VsKCk7XHJcbiAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XHJcbiAgICAgIGNvbnN0IHRva2VuID0gY29va2llLmdldChcInRva2VuXCIpO1xyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9zZWFyY2gvJHt2YWx1ZX1gLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxyXG4gICAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oY2FuY2VsZXIgPT4ge1xyXG4gICAgICAgICAgY2FuY2VsID0gY2FuY2VsZXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09PSAwKVxyXG4gICAgICBcclxuICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0cy5sZW5ndGggPiAwICYmIHNldFJlc3VsdHMoW10pO1xyXG4gICAgICAgICAgcmV0dXJuIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRSZXN1bHRzKHJlcy5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgU2VhcmNoaW5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuaWYodGV4dC5sZW5ndGggPT09IDAgJiYgbG9hZGluZykgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gIH0sW3RleHRdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaFxyXG4gICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICByZXN1bHRzLmxlbmd0aCA+IDAgJiYgc2V0UmVzdWx0cyhbXSk7XHJcbiAgICAgICAgbG9hZGluZyAmJiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRUZXh0KFwiXCIpO1xyXG4gICAgICB9fVxyXG4gICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgcmVzdWx0UmVuZGVyZXI9e1Jlc3VsdFJlbmRlcmVyfVxyXG4gICAgICByZXN1bHRzPXtyZXN1bHRzfVxyXG4gICAgICBvblNlYXJjaENoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICBtaW5DaGFyYWN0ZXJzPXsxfVxyXG4gICAgICBvblJlc3VsdFNlbGVjdD17KGUsIGRhdGEpID0+IFJvdXRlci5wdXNoKGAvJHtkYXRhLnJlc3VsdC51c2VybmFtZX1gKX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUmVzdWx0UmVuZGVyZXIgPSAoeyBfaWQsIHByb2ZpbGVQaWNVcmwsIG5hbWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdCBrZXk9e19pZH0+XHJcbiAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZVBpY1VybH0gYWx0PVwiUHJvZmlsZVBpY1wiIGF2YXRhciAvPlxyXG4gICAgICAgIDxMaXN0LkNvbnRlbnQgaGVhZGVyPXtuYW1lfSBhcz1cImFcIiAvPlxyXG4gICAgICA8L0xpc3QuSXRlbT5cclxuICAgIDwvTGlzdD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQ29tcG9uZW50O1xyXG4iLCIvLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7TGlzdCxJY29ufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCB7bG9nb3V0VXNlcn0gZnJvbSBcIi4uLy4uL3V0aWxzL2F1dGhVc2VyXCI7XHJcbi8vIGZ1bmN0aW9uIFNpZGVNZW51KHt1c2VyOnt1bnJlYWROb3RpZmljYXRpb24sZW1haWwsdW5yZWFkTWVzc2FnZSx1c2VybmFtZX19KSB7XHJcbi8vIGNvbnN0IHJvdXRlciA9dXNlUm91dGVyKCk7XHJcblxyXG5cclxuLy8gY29uc3QgaXNBY3RpdmUgPSByb3V0ZSA9PiByb3V0ZXIucGF0aG5hbWUgPT09IHJvdXRlO1xyXG5cclxuLy8gcmV0dXJuIChcclxuXHJcbi8vIDw+XHJcblxyXG4vLyA8TGlzdD5cclxuXHJcblxyXG5cclxuLy8gPExpbmsgaHJlZj1cIi9cIj5cclxuXHJcbi8vIDxMaXN0Lkl0ZW0gYWN0aXZlPXshaXNBY3RpdmUoJy8nKX0+XHJcblxyXG4vLyA8SWNvbiBuYW1lID0gXCJob21lXCIgc2l6ZT1cImxhcmdlXCIgY29sb3I9e2lzQWN0aXZlKCcvJykgJiYgJ3RlYWwnfSAvPlxyXG4vLyA8TGlzdC5Db250ZW50PlxyXG4vLyA8TGlzdC5IZWFkZXIgY29udGVudCA9IFwiSG9tZVwiIC8+XHJcblxyXG4vLyA8L0xpc3QuQ29udGVudD5cclxuXHJcbi8vIDwvTGlzdC5JdGVtPlxyXG5cclxuXHJcblxyXG4vLyA8L0xpbms+XHJcblxyXG5cclxuLy8gPGJyIC8+XHJcblxyXG4vLyA8TGluayBocmVmPVwiL21lc3NhZ2VzXCI+XHJcblxyXG4vLyA8TGlzdC5JdGVtIGFjdGl2ZT17IWlzQWN0aXZlKCcvbWVzc2FnZXMnKX0+XHJcblxyXG4vLyA8SWNvbiBuYW1lID0ge3VucmVhZE1lc3NhZ2UgPyBcImhhbmQgcG9pbnQgcmlnaHRcIjpcIm1haWwgb3V0bGluZVwiIH0gc2l6ZT1cImxhcmdlXCIgY29sb3I9eyhpc0FjdGl2ZSgnL21lc3NhZ2VzJykgJiYgJ3RlYWwnKXx8KHVucmVhZE1lc3NhZ2UgJiZcIm9yYW5nZVwiKX0gLz5cclxuLy8gPExpc3QuQ29udGVudD5cclxuLy8gPExpc3QuSGVhZGVyIGNvbnRlbnQgPSBcIkhvbWVcIiAvPlxyXG5cclxuLy8gPC9MaXN0LkNvbnRlbnQ+XHJcblxyXG4vLyA8L0xpc3QuSXRlbT5cclxuXHJcblxyXG5cclxuLy8gPC9MaW5rPlxyXG5cclxuLy8gPGJyIC8+XHJcblxyXG4vLyA8TGluayBocmVmPVwiL25vdGlmaWNhdGlvbnNcIj5cclxuXHJcbi8vIDxMaXN0Lkl0ZW0gYWN0aXZlPXshaXNBY3RpdmUoJy9ub3RpZmljYXRpb25zJyl9PlxyXG5cclxuLy8gPEljb24gbmFtZSA9IHt1bnJlYWROb3RpZmljYXRpb24gPyBcImhhbmQgcG9pbnQgcmlnaHRcIjpcImJlbGwgb3V0bGluZVwiIH0gc2l6ZT1cImxhcmdlXCIgY29sb3I9eyhpc0FjdGl2ZSgnL25vdGlmaWNhdGlvbnMnKSAmJiAndGVhbCcpfHwodW5yZWFkTm90aWZpY2F0aW9uICYmXCJvcmFuZ2VcIil9IC8+XHJcbi8vIDxMaXN0LkNvbnRlbnQ+XHJcbi8vIDxMaXN0LkhlYWRlciBjb250ZW50ID0gXCJOb3RpZmljYXRpb25zXCIgLz5cclxuXHJcbi8vIDwvTGlzdC5Db250ZW50PlxyXG5cclxuLy8gPC9MaXN0Lkl0ZW0+XHJcblxyXG5cclxuXHJcbi8vIDwvTGluaz5cclxuXHJcblxyXG5cclxuLy8gPGJyIC8+XHJcblxyXG4vLyA8TGluayBocmVmPVwiL25vdGlmaWNhdGlvbnNcIj5cclxuXHJcbi8vIDxMaXN0Lkl0ZW0gYWN0aXZlPXshaXNBY3RpdmUoJy9ub3RpZmljYXRpb25zJyl9PlxyXG5cclxuLy8gPEljb24gbmFtZSA9IHt1bnJlYWROb3RpZmljYXRpb24gPyBcImhhbmQgcG9pbnQgcmlnaHRcIjpcImJlbGwgb3V0bGluZVwiIH0gc2l6ZT1cImxhcmdlXCIgY29sb3I9eyhpc0FjdGl2ZSgnL25vdGlmaWNhdGlvbnMnKSAmJiAndGVhbCcpfHwodW5yZWFkTm90aWZpY2F0aW9uICYmXCJvcmFuZ2VcIil9IC8+XHJcbi8vIDxMaXN0LkNvbnRlbnQ+XHJcbi8vIDxMaXN0LkhlYWRlciBjb250ZW50ID0gXCJOb3RpZmljYXRpb25zXCIgLz5cclxuXHJcbi8vIDwvTGlzdC5Db250ZW50PlxyXG5cclxuLy8gPC9MaXN0Lkl0ZW0+XHJcblxyXG5cclxuXHJcbi8vIDwvTGluaz5cclxuXHJcblxyXG4vLyA8YnIgLz5cclxuXHJcblxyXG4vLyA8TGluayBocmVmPSB7YC8ke3VzZXJuYW1lfWB9PlxyXG4vLyA8TGlzdC5JdGVtIGFjdGl2ZSA9IHtyb3V0ZXIucXVlcnkudXNlcm5hbWUgPT09IHVzZXJuYW1lfT5cclxuXHJcbi8vIDxJY29uXHJcbi8vIG5hbWU9XCJ1c2VyXCJcclxuLy8gc2l6ZT1cImxhcmdlXCJcclxuLy8gY29sb3I9e3JvdXRlci5xdWVyeS51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgXCJ0ZWFsXCJ9XHJcbi8vIC8+XHJcblxyXG4vLyA8TGlzdC5Db250ZW50PlxyXG5cclxuLy8gPExpc3QuSGVhZGVyIGNvbnRlbnQ9IFwiQWNjb3VudFwiIC8+XHJcblxyXG4vLyA8L0xpc3QuQ29udGVudD5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gPC9MaXN0Lkl0ZW0+XHJcblxyXG4vLyA8L0xpbms+XHJcblxyXG5cclxuXHJcbi8vIDxMaXN0Lkl0ZW0gb25DbGljayA9IHsoKSA9PiBsb2dvdXRVc2VyKGVtYWlsKX0gPlxyXG5cclxuLy8gPEljb24gbmFtZSA9IFwibG9nIG91dFwiIHNpemU9XCJsYXJnZVwiIC8+XHJcbi8vIDxMaXN0LkNvbnRlbnQ+XHJcblxyXG4vLyA8TGlzdC5IZWFkZXIgY29udGVudD1cIkxvZ291dFwiIC8+XHJcblxyXG4vLyA8L0xpc3QuQ29udGVudD5cclxuXHJcblxyXG5cclxuLy8gPC9MaXN0Lkl0ZW0+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gPC9MaXN0PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gPC8+XHJcbi8vICk7XHJcblxyXG5cclxuXHJcbi8vIHJldHVybiA8ZGl2PlNpZGVNZW51PC9kaXY+O1xyXG5cclxuXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFNpZGVNZW51O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGlzdCwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBsb2dvdXRVc2VyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2F1dGhVc2VyXCI7XHJcblxyXG5mdW5jdGlvbiBTaWRlTWVudSh7IHVzZXI6IHsgdW5yZWFkTm90aWZpY2F0aW9uLCBlbWFpbCwgdW5yZWFkTWVzc2FnZSwgdXNlcm5hbWUgfSB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGlzQWN0aXZlID0gcm91dGUgPT4gcm91dGVyLnBhdGhuYW1lID09PSByb3V0ZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0XHJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxcmVtXCIgfX1cclxuICAgICAgICBzaXplPVwiYmlnXCJcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICBzZWxlY3Rpb24+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZShcIi9cIil9PlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiaG9tZVwiIHNpemU9XCJsYXJnZVwiIGNvbG9yPXtpc0FjdGl2ZShcIi9cIikgJiYgXCJ0ZWFsXCJ9IC8+XHJcbiAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJIb21lXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbWVzc2FnZXNcIj5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZShcIi9tZXNzYWdlc1wiKX0+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgbmFtZT17dW5yZWFkTWVzc2FnZSA/IFwiaGFuZCBwb2ludCByaWdodFwiIDogXCJtYWlsIG91dGxpbmVcIn1cclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPXtcclxuICAgICAgICAgICAgICAgIChpc0FjdGl2ZShcIi9tZXNzYWdlc1wiKSAmJiBcInRlYWxcIikgfHwgKHVucmVhZE1lc3NhZ2UgJiYgXCJvcmFuZ2VcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJNZXNzYWdlc1wiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8TGluayBocmVmPVwiL25vdGlmaWNhdGlvbnNcIj5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZShcIi9ub3RpZmljYXRpb25zXCIpfT5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBuYW1lPXt1bnJlYWROb3RpZmljYXRpb24gPyBcImhhbmQgcG9pbnQgcmlnaHRcIiA6IFwiYmVsbCBvdXRsaW5lXCJ9XHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBjb2xvcj17XHJcbiAgICAgICAgICAgICAgICAoaXNBY3RpdmUoXCIvbm90aWZpY2F0aW9uc1wiKSAmJiBcInRlYWxcIikgfHxcclxuICAgICAgICAgICAgICAgICh1bnJlYWROb3RpZmljYXRpb24gJiYgXCJvcmFuZ2VcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJOb3RpZmljYXRpb25zXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHt1c2VybmFtZX1gfT5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtyb3V0ZXIucXVlcnkudXNlcm5hbWUgPT09IHVzZXJuYW1lfT5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBuYW1lPVwidXNlclwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBjb2xvcj17cm91dGVyLnF1ZXJ5LnVzZXJuYW1lID09PSB1c2VybmFtZSAmJiBcInRlYWxcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIkFjY291bnRcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPExpc3QuSXRlbSBvbkNsaWNrPXsoKSA9PiBsb2dvdXRVc2VyKGVtYWlsKX0+XHJcbiAgICAgICAgICA8SWNvbiBuYW1lPVwibG9nIG91dFwiIHNpemU9XCJsYXJnZVwiIC8+XHJcbiAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIkxvZ291dFwiIC8+XHJcbiAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZU1lbnU7XHJcbiIsImltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzLCBkZXN0cm95Q29va2llIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3RVc2VyIH0gZnJvbSBcIi4uL3V0aWxzL2F1dGhVc2VyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCBcInNlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzXCI7XHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pIHtcclxuICAgIGNvbnN0IHsgdG9rZW4gfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG5cclxuICAgIGNvbnN0IHByb3RlY3RlZFJvdXRlcyA9XHJcbiAgICAgIGN0eC5wYXRobmFtZSA9PT0gXCIvXCIgfHxcclxuICAgICAgY3R4LnBhdGhuYW1lID09PSBcIi9bdXNlcm5hbWVdXCIgfHxcclxuICAgICAgY3R4LnBhdGhuYW1lID09PSBcIi9ub3RpZmljYXRpb25zXCIgfHxcclxuICAgICAgY3R4LnBhdGhuYW1lID09PSBcIi9wb3N0L1twb3N0SWRdXCI7XHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHByb3RlY3RlZFJvdXRlcyAmJiByZWRpcmVjdFVzZXIoY3R4LCBcIi9sb2dpblwiKTtcclxuICAgIH1cclxuICAgIC8vXHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9hdXRoYCwge1xyXG4gICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgdXNlciwgdXNlckZvbGxvd1N0YXRzIH0gPSByZXMuZGF0YTtcclxuXHJcbiAgICAgICAgaWYgKHVzZXIpICFwcm90ZWN0ZWRSb3V0ZXMgJiYgcmVkaXJlY3RVc2VyKGN0eCwgXCIvXCIpO1xyXG5cclxuICAgICAgICBwYWdlUHJvcHMudXNlciA9IHVzZXI7XHJcbiAgICAgICAgcGFnZVByb3BzLnVzZXJGb2xsb3dTdGF0cyA9IHVzZXJGb2xsb3dTdGF0cztcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkZXN0cm95Q29va2llKGN0eCwgXCJ0b2tlblwiKTtcclxuICAgICAgICByZWRpcmVjdFVzZXIoY3R4LCBcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IHsuLi5wYWdlUHJvcHN9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9