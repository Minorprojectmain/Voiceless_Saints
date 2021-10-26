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


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\components\\Layout\\HeadTags.js";


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


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\components\\Layout\\Layout.js";



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

var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\components\\Layout\\Navbar.js";






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

var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\components\\Layout\\Search.js";






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


var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\components\\Layout\\Sidemenu.js";
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

var _jsxFileName = "C:\\Users\\Nisha Yadav\\Desktop\\Minor\\Voiceless_Saints\\pages\\_app.js";

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
      lineNumber: 17,
      columnNumber: 11
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_app_js-node_modules_react-toastify_dist_ReactToastify_css-node_modu-b86d49","utils_baseUrl_js-utils_catchErrors_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZFRhZ3MuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9jb21wb25lbnRzL0xheW91dC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvTGF5b3V0L1NpZGVtZW51LmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi91dGlscy9hdXRoVXNlci5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJIZWFkVGFncyIsIkxheW91dCIsImNoaWxkcmVuIiwidXNlciIsImNvbnRleHRSZWYiLCJjcmVhdGVSZWYiLCJSb3V0ZXIiLCJucHJvZ3Jlc3MiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nVG9wIiwiTmF2YmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInBhdGhuYW1lIiwiY2FuY2VsIiwiU2VhcmNoQ29tcG9uZW50IiwidGV4dCIsInNldFRleHQiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJ0cmltIiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInRva2VuIiwiY29va2llIiwicmVzIiwiYmFzZVVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY2FuY2VsVG9rZW4iLCJjYW5jZWxlciIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJSZXN1bHRSZW5kZXJlciIsInJlc3VsdCIsInVzZXJuYW1lIiwiX2lkIiwicHJvZmlsZVBpY1VybCIsIm5hbWUiLCJTaWRlTWVudSIsInVucmVhZE5vdGlmaWNhdGlvbiIsImVtYWlsIiwidW5yZWFkTWVzc2FnZSIsInF1ZXJ5IiwibG9nb3V0VXNlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicGFyc2VDb29raWVzIiwicHJvdGVjdGVkUm91dGVzIiwicmVkaXJlY3RVc2VyIiwidXNlckZvbGxvd1N0YXRzIiwiZGVzdHJveUNvb2tpZSIsInJlZ2lzdGVyVXNlciIsInNldEVycm9yIiwic2V0VG9rZW4iLCJlcnJvck1zZyIsImNhdGNoRXJyb3JzIiwibG9naW5Vc2VyIiwibG9jYXRpb24iLCJyZXEiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLG1CQUNmO0FBQUEseUJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw0QkFDRTtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXNCLGFBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTSxhQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBTSxTQUFHLEVBQUMsTUFBVjtBQUFpQixVQUFJLEVBQUMsY0FBdEI7QUFBcUMsV0FBSyxFQUFDLE9BQTNDO0FBQW1ELFVBQUksRUFBQztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBS0U7QUFBTSxTQUFHLEVBQUMsWUFBVjtBQUF1QixVQUFJLEVBQUMsVUFBNUI7QUFBdUMsVUFBSSxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFPRTtBQUFNLFNBQUcsRUFBQyxZQUFWO0FBQXVCLFVBQUksRUFBQyxVQUE1QjtBQUF1QyxVQUFJLEVBQUM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQVFFO0FBQU0sU0FBRyxFQUFDLFlBQVY7QUFBdUIsVUFBSSxFQUFDLFVBQTVCO0FBQXVDLFVB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QUcsQ0FBQ2EsR0FBUCxFQUFXO0FBQ1RiLE9BQUcsQ0FBQzNCLEdBQUosQ0FBUXlDLFNBQVIsQ0FBa0IsR0FBbEIsRUFBc0I7QUFBQ0MsY0FBUSxFQUFDSDtBQUFWLEtBQXRCO0FBQ0FaLE9BQUcsQ0FBQzNCLEdBQUosQ0FBUTJDLEdBQVI7QUFDRCxHQUhELE1BR0s7QUFDSHpFLDJEQUFBLENBQVlxRSxRQUFaO0FBQ0Q7QUFDRixDQVBNOztBQVFQLE1BQU1KLFFBQVEsR0FBQ3JDLEtBQUssSUFBRTtBQUNsQkMsc0RBQUEsQ0FBVyxPQUFYLEVBQW1CRCxLQUFuQjtBQUNBNUIseURBQUEsQ0FBWSxHQUFaO0FBQ0gsQ0FIRDs7QUFPTyxNQUFNb0QsVUFBVSxHQUFHSCxLQUFLLElBQUk7QUFFbkNwQixzREFBQSxDQUFXLFdBQVgsRUFBd0JvQixLQUF4QjtBQUNBcEIseURBQUEsQ0FBYyxPQUFkO0FBQ0E3Qix5REFBQSxDQUFZLFFBQVo7QUFDQUEsMkRBQUE7QUFJQyxDQVRNLEM7Ozs7Ozs7Ozs7O0FDN0NQLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBIZWFkVGFncyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiBzaXplcz1cIjE2KjE2XCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcblxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9saXN0TWVzc2FnZXMuY3NzXCIgLz5cclxuXHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0eWxlcy5jc3NcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9ucHJvZ3Jlc3MuY3NzXCIgLz5cclxuXHJcbiAgICAgIDx0aXRsZT5Wb2ljZWxlc3MtU2FpbnRzPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICA8Lz5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZFRhZ3M7XHJcbiIsImltcG9ydCBSZWFjdCx7Y3JlYXRlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRUYWdzIGZyb20gXCIuL0hlYWRUYWdzXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cclxuQ29udGFpbmVyLFxyXG5WaXNpYmlsaXR5LFxyXG5HcmlkLFxyXG5TdGlja3ksXHJcblJlZixcclxuRGl2aWRlcixcclxuU2VnbWVudFxyXG5cclxuXHJcblxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG4vL2ltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgbnByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFNpZGVNZW51IGZyb20gXCIuL1NpZGVtZW51XCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoXCI7XHJcbmZ1bmN0aW9uIExheW91dCh7Y2hpbGRyZW4sdXNlcn0pIHtcclxuY29uc3QgY29udGV4dFJlZiA9IGNyZWF0ZVJlZigpO1xyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQ9KCkgPT4gbnByb2dyZXNzLnN0YXJ0KClcclxuICBSb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlPSgpPT5ucHJvZ3Jlc3MuZG9uZSgpXHJcbiAgUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvcj0oKT0+bnByb2dyZXNzLmRvbmUoKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkVGFncyAvPlxyXG5cclxuXHJcblxyXG4gICAgICB7XHJcbiAgICAgICB1c2VyID8gKFxyXG4gICAgICAgICAgPD5cclxuPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMXJlbVwiLG1hcmdpblJpZ2h0OlwiMXJlbVwifX0+XHJcbjxSZWYgaW5uZXJSZWYgPSB7Y29udGV4dFJlZn0+IFxyXG5cclxuPEdyaWQ+XHJcblxyXG48R3JpZC5Db2x1bW4gZmxvYXRlZD1cImxlZnRcIiB3aWR0aD17Mn0+XHJcbjxTdGlja3kgY29udGV4dD17Y29udGV4dFJlZn0+XHJcblxyXG48U2lkZU1lbnUgdXNlciA9IHt1c2VyfS8+XHJcblxyXG5cclxuPC9TdGlja3k+XHJcblxyXG5cclxuPC9HcmlkLkNvbHVtbj5cclxuXHJcblxyXG5cclxuXHJcbjxHcmlkLkNvbHVtbiBmbG9hdGVkPVwibGVmdFwiIHdpZHRoPXsxMH0+XHJcbjxWaXNpYmlsaXR5IGNvbnRleHQgPSB7Y29udGV4dFJlZn0+e2NoaWxkcmVufTwvVmlzaWJpbGl0eT5cclxuXHJcblxyXG48L0dyaWQuQ29sdW1uPlxyXG5cclxuXHJcblxyXG48R3JpZC5Db2x1bW4gZmxvYXRlZD1cImxlZnRcIiB3aWR0aD17NH0+XHJcbjxTdGlja3kgY29udGV4dD17Y29udGV4dFJlZn0+XHJcbjxTZWdtZW50IGJhc2ljPlxyXG4gIDxTZWFyY2gvPlxyXG48L1NlZ21lbnQ+XHJcblxyXG5cclxuPC9TdGlja3k+XHJcblxyXG5cclxuPC9HcmlkLkNvbHVtbj5cclxuXHJcblxyXG5cclxuPC9HcmlkPlxyXG48L1JlZj5cclxuPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgIDwvPlxyXG5cclxuXHJcbiAgICAgICApOihcclxuPD5cclxuXHJcbjxOYXZiYXI+PC9OYXZiYXI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyIHRleHQgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxcmVtXCIgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG5cclxuPC8+XHJcblxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICBcclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge01lbnUsQ29udGFpbmVyLEljb259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGlzQWN0aXZlPSByb3V0ZSA9PnJvdXRlci5wYXRobmFtZSA9PT0gcm91dGVcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51IGZsdWlkIGJvcmRlcmxlc3M+XHJcbiAgICA8Q29udGFpbmVyIHRleHQ+XHJcbiAgICAgPExpbmsgaHJlZj0nL2xvZ2luJz5cclxuICAgICAgPE1lbnUuSXRlbSBoZWFkZXIgYWN0aXZlPXtpc0FjdGl2ZSgnL2xvZ2luJyl9PlxyXG4gICAgICAgIDxJY29uIHNpemU9XCJsYXJnZVwiIG5hbWU9XCJzaWduIGluXCIgLz5cclxuICAgICAgICBMb2dpblxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICA8L0xpbms+XHJcbiAgICAgPExpbmsgaHJlZj0nL3NpZ251cCc+XHJcbiAgICAgIDxNZW51Lkl0ZW0gaGVhZGVyIGFjdGl2ZT17aXNBY3RpdmUoJy9zaWdudXAnKX0+XHJcbiAgICAgICAgPEljb24gc2l6ZT1cImxhcmdlXCIgbmFtZT1cInNpZ251cFwiIC8+XHJcbiAgICAgICAgU2lnbnVwXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgIDwvTGluaz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaXN0LCBJbWFnZSwgU2VhcmNoIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9iYXNlVXJsXCI7XHJcbmxldCBjYW5jZWw7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hDb21wb25lbnQoKSB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgZSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBpZih2YWx1ZS5sZW5ndGggPT09IDApIHJldHVybiBzZXRUZXh0KHZhbHVlKTtcclxuICAgIHNldFRleHQodmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgIC8vY2hhbmdlIGFib3ZlXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjYW5jZWwgJiYgY2FuY2VsKCk7XHJcbiAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XHJcbiAgICAgIGNvbnN0IHRva2VuID0gY29va2llLmdldChcInRva2VuXCIpO1xyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9zZWFyY2gvJHt2YWx1ZX1gLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxyXG4gICAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oY2FuY2VsZXIgPT4ge1xyXG4gICAgICAgICAgY2FuY2VsID0gY2FuY2VsZXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09PSAwKVxyXG4gICAgICBcclxuICAgICAge1xyXG4gICAgICAgICAgcmVzdWx0cy5sZW5ndGggPiAwICYmIHNldFJlc3VsdHMoW10pO1xyXG4gICAgICAgICAgcmV0dXJuIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRSZXN1bHRzKHJlcy5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgU2VhcmNoaW5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuaWYodGV4dC5sZW5ndGggPT09IDAgJiYgbG9hZGluZykgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gIH0sW3RleHRdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaFxyXG4gICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICByZXN1bHRzLmxlbmd0aCA+IDAgJiYgc2V0UmVzdWx0cyhbXSk7XHJcbiAgICAgICAgbG9hZGluZyAmJiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRUZXh0KFwiXCIpO1xyXG4gICAgICB9fVxyXG4gICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgcmVzdWx0UmVuZGVyZXI9e1Jlc3VsdFJlbmRlcmVyfVxyXG4gICAgICByZXN1bHRzPXtyZXN1bHRzfVxyXG4gICAgICBvblNlYXJjaENoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICBtaW5DaGFyYWN0ZXJzPXsxfVxyXG4gICAgICBvblJlc3VsdFNlbGVjdD17KGUsIGRhdGEpID0+IFJvdXRlci5wdXNoKGAvJHtkYXRhLnJlc3VsdC51c2VybmFtZX1gKX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUmVzdWx0UmVuZGVyZXIgPSAoeyBfaWQsIHByb2ZpbGVQaWNVcmwsIG5hbWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdCBrZXk9e19pZH0+XHJcbiAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgPEltYWdlIHNyYz17cHJvZmlsZVBpY1VybH0gYWx0PVwiUHJvZmlsZVBpY1wiIGF2YXRhciAvPlxyXG4gICAgICAgIDxMaXN0LkNvbnRlbnQgaGVhZGVyPXtuYW1lfSBhcz1cImFcIiAvPlxyXG4gICAgICA8L0xpc3QuSXRlbT5cclxuICAgIDwvTGlzdD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQ29tcG9uZW50O1xyXG4iLCIvLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7TGlzdCxJY29ufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCB7bG9nb3V0VXNlcn0gZnJvbSBcIi4uLy4uL3V0aWxzL2F1dGhVc2VyXCI7XHJcbi8vIGZ1bmN0aW9uIFNpZGVNZW51KHt1c2VyOnt1bnJlYWROb3RpZmljYXRpb24sZW1haWwsdW5yZWFkTWVzc2FnZSx1c2VybmFtZX19KSB7XHJcbi8vIGNvbnN0IHJvdXRlciA9dXNlUm91dGVyKCk7XHJcblxyXG5cclxuLy8gY29uc3QgaXNBY3RpdmUgPSByb3V0ZSA9PiByb3V0ZXIucGF0aG5hbWUgPT09IHJvdXRlO1xyXG5cclxuLy8gcmV0dXJuIChcclxuXHJcbi8vIDw+XHJcblxyXG4vLyA8TGlzdD5cclxuXHJcblxyXG5cclxuLy8gPExpbmsgaHJlZj1cIi9cIj5cclxuXHJcbi8vIDxMaXN0Lkl0ZW0gYWN0aXZlPXshaXNBY3RpdmUoJy8nKX0+XHJcblxyXG4vLyA8SWNvbiBuYW1lID0gXCJob21lXCIgc2l6ZT1cImxhcmdlXCIgY29sb3I9e2lzQWN0aXZlKCcvJykgJiYgJ3RlYWwnfSAvPlxyXG4vLyA8TGlzdC5Db250ZW50PlxyXG4vLyA8TGlzdC5IZWFkZXIgY29udGVudCA9IFwiSG9tZVwiIC8+XHJcblxyXG4vLyA8L0xpc3QuQ29udGVudD5cclxuXHJcbi8vIDwvTGlzdC5JdGVtPlxyXG5cclxuXHJcblxyXG4vLyA8L0xpbms+XHJcblxyXG5cclxuLy8gPGJyIC8+XHJcblxyXG4vLyA8TGluayBocmVmPVwiL21lc3NhZ2VzXCI+XHJcblxyXG4vLyA8TGlzdC5JdGVtIGFjdGl2ZT17IWlzQWN0aXZlKCcvbWVzc2FnZXMnKX0+XHJcblxyXG4vLyA8SWNvbiBuYW1lID0ge3VucmVhZE1lc3NhZ2UgPyBcImhhbmQgcG9pbnQgcmlnaHRcIjpcIm1haWwgb3V0bGluZVwiIH0gc2l6ZT1cImxhcmdlXCIgY29sb3I9eyhpc0FjdGl2ZSgnL21lc3NhZ2VzJykgJiYgJ3RlYWwnKXx8KHVucmVhZE1lc3NhZ2UgJiZcIm9yYW5nZVwiKX0gLz5cclxuLy8gPExpc3QuQ29udGVudD5cclxuLy8gPExpc3QuSGVhZGVyIGNvbnRlbnQgPSBcIkhvbWVcIiAvPlxyXG5cclxuLy8gPC9MaXN0LkNvbnRlbnQ+XHJcblxyXG4vLyA8L0xpc3QuSXRlbT5cclxuXHJcblxyXG5cclxuLy8gPC9MaW5rPlxyXG5cclxuLy8gPGJyIC8+XHJcblxyXG4vLyA8TGluayBocmVmPVwiL25vdGlmaWNhdGlvbnNcIj5cclxuXHJcbi8vIDxMaXN0Lkl0ZW0gYWN0aXZlPXshaXNBY3RpdmUoJy9ub3RpZmljYXRpb25zJyl9PlxyXG5cclxuLy8gPEljb24gbmFtZSA9IHt1bnJlYWROb3RpZmljYXRpb24gPyBcImhhbmQgcG9pbnQgcmlnaHRcIjpcImJlbGwgb3V0bGluZVwiIH0gc2l6ZT1cImxhcmdlXCIgY29sb3I9eyhpc0FjdGl2ZSgnL25vdGlmaWNhdGlvbnMnKSAmJiAndGVhbCcpfHwodW5yZWFkTm90aWZpY2F0aW9uICYmXCJvcmFuZ2VcIil9IC8+XHJcbi8vIDxMaXN0LkNvbnRlbnQ+XHJcbi8vIDxMaXN0LkhlYWRlciBjb250ZW50ID0gXCJOb3RpZmljYXRpb25zXCIgLz5cclxuXHJcbi8vIDwvTGlzdC5Db250ZW50PlxyXG5cclxuLy8gPC9MaXN0Lkl0ZW0+XHJcblxyXG5cclxuXHJcbi8vIDwvTGluaz5cclxuXHJcblxyXG5cclxuLy8gPGJyIC8+XHJcblxyXG4vLyA8TGluayBocmVmPVwiL25vdGlmaWNhdGlvbnNcIj5cclxuXHJcbi8vIDxMaXN0Lkl0ZW0gYWN0aXZlPXshaXNBY3RpdmUoJy9ub3RpZmljYXRpb25zJyl9PlxyXG5cclxuLy8gPEljb24gbmFtZSA9IHt1bnJlYWROb3RpZmljYXRpb24gPyBcImhhbmQgcG9pbnQgcmlnaHRcIjpcImJlbGwgb3V0bGluZVwiIH0gc2l6ZT1cImxhcmdlXCIgY29sb3I9eyhpc0FjdGl2ZSgnL25vdGlmaWNhdGlvbnMnKSAmJiAndGVhbCcpfHwodW5yZWFkTm90aWZpY2F0aW9uICYmXCJvcmFuZ2VcIil9IC8+XHJcbi8vIDxMaXN0LkNvbnRlbnQ+XHJcbi8vIDxMaXN0LkhlYWRlciBjb250ZW50ID0gXCJOb3RpZmljYXRpb25zXCIgLz5cclxuXHJcbi8vIDwvTGlzdC5Db250ZW50PlxyXG5cclxuLy8gPC9MaXN0Lkl0ZW0+XHJcblxyXG5cclxuXHJcbi8vIDwvTGluaz5cclxuXHJcblxyXG4vLyA8YnIgLz5cclxuXHJcblxyXG4vLyA8TGluayBocmVmPSB7YC8ke3VzZXJuYW1lfWB9PlxyXG4vLyA8TGlzdC5JdGVtIGFjdGl2ZSA9IHtyb3V0ZXIucXVlcnkudXNlcm5hbWUgPT09IHVzZXJuYW1lfT5cclxuXHJcbi8vIDxJY29uXHJcbi8vIG5hbWU9XCJ1c2VyXCJcclxuLy8gc2l6ZT1cImxhcmdlXCJcclxuLy8gY29sb3I9e3JvdXRlci5xdWVyeS51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgXCJ0ZWFsXCJ9XHJcbi8vIC8+XHJcblxyXG4vLyA8TGlzdC5Db250ZW50PlxyXG5cclxuLy8gPExpc3QuSGVhZGVyIGNvbnRlbnQ9IFwiQWNjb3VudFwiIC8+XHJcblxyXG4vLyA8L0xpc3QuQ29udGVudD5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gPC9MaXN0Lkl0ZW0+XHJcblxyXG4vLyA8L0xpbms+XHJcblxyXG5cclxuXHJcbi8vIDxMaXN0Lkl0ZW0gb25DbGljayA9IHsoKSA9PiBsb2dvdXRVc2VyKGVtYWlsKX0gPlxyXG5cclxuLy8gPEljb24gbmFtZSA9IFwibG9nIG91dFwiIHNpemU9XCJsYXJnZVwiIC8+XHJcbi8vIDxMaXN0LkNvbnRlbnQ+XHJcblxyXG4vLyA8TGlzdC5IZWFkZXIgY29udGVudD1cIkxvZ291dFwiIC8+XHJcblxyXG4vLyA8L0xpc3QuQ29udGVudD5cclxuXHJcblxyXG5cclxuLy8gPC9MaXN0Lkl0ZW0+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gPC9MaXN0PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gPC8+XHJcbi8vICk7XHJcblxyXG5cclxuXHJcbi8vIHJldHVybiA8ZGl2PlNpZGVNZW51PC9kaXY+O1xyXG5cclxuXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFNpZGVNZW51O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGlzdCwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBsb2dvdXRVc2VyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2F1dGhVc2VyXCI7XHJcblxyXG5mdW5jdGlvbiBTaWRlTWVudSh7IHVzZXI6IHsgdW5yZWFkTm90aWZpY2F0aW9uLCBlbWFpbCwgdW5yZWFkTWVzc2FnZSwgdXNlcm5hbWUgfSB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGlzQWN0aXZlID0gcm91dGUgPT4gcm91dGVyLnBhdGhuYW1lID09PSByb3V0ZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0XHJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxcmVtXCIgfX1cclxuICAgICAgICBzaXplPVwiYmlnXCJcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICBzZWxlY3Rpb24+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZShcIi9cIil9PlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiaG9tZVwiIHNpemU9XCJsYXJnZVwiIGNvbG9yPXtpc0FjdGl2ZShcIi9cIikgJiYgXCJ0ZWFsXCJ9IC8+XHJcbiAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJIb21lXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbWVzc2FnZXNcIj5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZShcIi9tZXNzYWdlc1wiKX0+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgbmFtZT17dW5yZWFkTWVzc2FnZSA/IFwiaGFuZCBwb2ludCByaWdodFwiIDogXCJtYWlsIG91dGxpbmVcIn1cclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPXtcclxuICAgICAgICAgICAgICAgIChpc0FjdGl2ZShcIi9tZXNzYWdlc1wiKSAmJiBcInRlYWxcIikgfHwgKHVucmVhZE1lc3NhZ2UgJiYgXCJvcmFuZ2VcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJNZXNzYWdlc1wiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8TGluayBocmVmPVwiL25vdGlmaWNhdGlvbnNcIj5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZShcIi9ub3RpZmljYXRpb25zXCIpfT5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBuYW1lPXt1bnJlYWROb3RpZmljYXRpb24gPyBcImhhbmQgcG9pbnQgcmlnaHRcIiA6IFwiYmVsbCBvdXRsaW5lXCJ9XHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBjb2xvcj17XHJcbiAgICAgICAgICAgICAgICAoaXNBY3RpdmUoXCIvbm90aWZpY2F0aW9uc1wiKSAmJiBcInRlYWxcIikgfHxcclxuICAgICAgICAgICAgICAgICh1bnJlYWROb3RpZmljYXRpb24gJiYgXCJvcmFuZ2VcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJOb3RpZmljYXRpb25zXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHt1c2VybmFtZX1gfT5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtyb3V0ZXIucXVlcnkudXNlcm5hbWUgPT09IHVzZXJuYW1lfT5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBuYW1lPVwidXNlclwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBjb2xvcj17cm91dGVyLnF1ZXJ5LnVzZXJuYW1lID09PSB1c2VybmFtZSAmJiBcInRlYWxcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIkFjY291bnRcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPExpc3QuSXRlbSBvbkNsaWNrPXsoKSA9PiBsb2dvdXRVc2VyKGVtYWlsKX0+XHJcbiAgICAgICAgICA8SWNvbiBuYW1lPVwibG9nIG91dFwiIHNpemU9XCJsYXJnZVwiIC8+XHJcbiAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIkxvZ291dFwiIC8+XHJcbiAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZU1lbnU7XHJcbiIsImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7cGFyc2VDb29raWVzLGRlc3Ryb3lDb29raWV9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCB7cmVkaXJlY3RVc2VyfSBmcm9tIFwiLi4vdXRpbHMvYXV0aFVzZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQscGFnZVByb3BzfSl7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgey4uLnBhZ2VQcm9wc30+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cclxuICAgICAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcz1hc3luYyh7Q29tcG9uZW50LGN0eH0pPT57XHJcbiAgY29uc3Qge3Rva2VufT0gcGFyc2VDb29raWVzKGN0eCk7XHJcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gIGNvbnN0IHByb3RlY3RlZFJvdXRlcz1cclxuICBjdHgucGF0aG5hbWU9PT1cIi9cIiB8fFxyXG4gIGN0eC5wYXRobmFtZT09PVwiL1t1c2VybmFtZV1cIiB8fFxyXG4gIGN0eC5wYXRobmFtZSA9PT1cIi9ub3RpZmljYXRpb25zXCIgfHxcclxuICBjdHgucGF0aG5hbWUgPT09XCIvcG9zdC9bcG9zdElkXVwiIHx8XHJcbiAgY3R4LnBhdGhuYW1lID09PVwiL21lc3NhZ2VzXCIgfHxcclxuICBjdHgucGF0aG5hbWUgPT09XCIvc2VhcmNoXCI7XHJcbiAgXHJcbiAgXHJcbiAgaWYoIXRva2VuKXtcclxuICAgIHByb3RlY3RlZFJvdXRlcyAmJiByZWRpcmVjdFVzZXIoY3R4LFwiL2xvZ2luXCIpO1xyXG4gIH1lbHNle1xyXG4gICAgaWYoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyl7XHJcbiAgICAgIHBhZ2VQcm9wcz1hd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgICB9XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXM9YXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9hdXRoYCx7XHJcbiAgICAgIGhlYWRlcnM6e0F1dGhvcml6YXRpb246dG9rZW59XHJcbiAgICB9KVxyXG4gICAgY29uc3Qge3VzZXIsdXNlckZvbGxvd1N0YXRzfSA9IHJlcy5kYXRhXHJcblxyXG4gICAgaWYodXNlcikgIXByb3RlY3RlZFJvdXRlcyAmJiByZWRpcmVjdFVzZXIoY3R4LFwiL1wiKTtcclxuICAgIHBhZ2VQcm9wcy51c2VyPXVzZXI7XHJcbiAgICBwYWdlUHJvcHMudXNlckZvbGxvd1N0YXRzPXVzZXJGb2xsb3dTdGF0cztcclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgIGRlc3Ryb3lDb29raWUoY3R4LFwidG9rZW5cIilcclxuICAgICAgcmVkaXJlY3RVc2VyKGN0eCwnL2xvZ2luJylcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCI7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tICcuL2NhdGNoRXJyb3JzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJVc2VyPWFzeW5jKHVzZXIscHJvZmlsZVBpY1VybCxzZXRFcnJvcixzZXRMb2FkaW5nKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzPWF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL3NpZ251cGAse3VzZXIscHJvZmlsZVBpY1VybH0pXHJcblxyXG4gICBzZXRUb2tlbihyZXMuZGF0YSk7XHJcblxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgY29uc3QgZXJyb3JNc2c9ICBjYXRjaEVycm9ycyhlcnJvcilcclxuICAgICAgc2V0RXJyb3IoZXJyb3JNc2cpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblVzZXI9YXN5bmModXNlcixzZXRFcnJvcixzZXRMb2FkaW5nKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzPWF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL2F1dGhgLHt1c2VyfSlcclxuXHJcbiAgIHNldFRva2VuKHJlcy5kYXRhKTtcclxuXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICBjb25zdCBlcnJvck1zZz0gIGNhdGNoRXJyb3JzKGVycm9yKVxyXG4gICAgICBzZXRFcnJvcihlcnJvck1zZylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZGlyZWN0VXNlciA9IChjdHgsbG9jYXRpb24pPT57XHJcbiAgaWYoY3R4LnJlcSl7XHJcbiAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIse0xvY2F0aW9uOmxvY2F0aW9ufSlcclxuICAgIGN0eC5yZXMuZW5kKClcclxuICB9ZWxzZXtcclxuICAgIFJvdXRlci5wdXNoKGxvY2F0aW9uKTtcclxuICB9XHJcbn1cclxuY29uc3Qgc2V0VG9rZW49dG9rZW49PntcclxuICAgIGNvb2tpZS5zZXQoXCJ0b2tlblwiLHRva2VuKVxyXG4gICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRVc2VyID0gZW1haWwgPT4ge1xyXG5cclxuY29va2llLnNldChcInVzZXJFbWFpbFwiLCBlbWFpbCk7XHJcbmNvb2tpZS5yZW1vdmUoXCJ0b2tlblwiKTtcclxuUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcblJvdXRlci5yZWxvYWQoKTtcclxuXHJcblxyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==