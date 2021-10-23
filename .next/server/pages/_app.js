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


var _jsxFileName = "C:\\Users\\Om Bindal\\Desktop\\newtocheck\\Voiceless_Saints\\components\\Layout\\HeadTags.js";


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


var _jsxFileName = "C:\\Users\\Om Bindal\\Desktop\\newtocheck\\Voiceless_Saints\\components\\Layout\\Layout.js";



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

var _jsxFileName = "C:\\Users\\Om Bindal\\Desktop\\newtocheck\\Voiceless_Saints\\components\\Layout\\Navbar.js";






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

var _jsxFileName = "C:\\Users\\Om Bindal\\Desktop\\newtocheck\\Voiceless_Saints\\components\\Layout\\Search.js";






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


var _jsxFileName = "C:\\Users\\Om Bindal\\Desktop\\newtocheck\\Voiceless_Saints\\components\\Layout\\Sidemenu.js";
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

var _jsxFileName = "C:\\Users\\Om Bindal\\Desktop\\newtocheck\\Voiceless_Saints\\pages\\_app.js";

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_app_js-node_modules_react-toastify_dist_ReactToastify_css-node_modu-b86d49","utils_baseUrl_js-utils_catchErrors_js","utils_authUser_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZFRhZ3MuanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9jb21wb25lbnRzL0xheW91dC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy8uL2NvbXBvbmVudHMvTGF5b3V0L1NpZGVtZW51LmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly92b2ljZWxlc3Mtc2FpbnRzL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vdm9pY2VsZXNzLXNhaW50cy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3ZvaWNlbGVzcy1zYWludHMvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkhlYWRUYWdzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VyIiwiY29udGV4dFJlZiIsImNyZWF0ZVJlZiIsIlJvdXRlciIsIm5wcm9ncmVzcyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdUb3AiLCJOYXZiYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0FjdGl2ZSIsInJvdXRlIiwicGF0aG5hbWUiLCJjYW5jZWwiLCJTZWFyY2hDb21wb25lbnQiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImxlbmd0aCIsInRyaW0iLCJDYW5jZWxUb2tlbiIsImF4aW9zIiwidG9rZW4iLCJjb29raWUiLCJyZXMiLCJiYXNlVXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjYW5jZWxUb2tlbiIsImNhbmNlbGVyIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIlJlc3VsdFJlbmRlcmVyIiwicmVzdWx0IiwidXNlcm5hbWUiLCJfaWQiLCJwcm9maWxlUGljVXJsIiwibmFtZSIsIlNpZGVNZW51IiwidW5yZWFkTm90aWZpY2F0aW9uIiwiZW1haWwiLCJ1bnJlYWRNZXNzYWdlIiwicXVlcnkiLCJsb2dvdXRVc2VyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwYXJzZUNvb2tpZXMiLCJwcm90ZWN0ZWRSb3V0ZXMiLCJyZWRpcmVjdFVzZXIiLCJ1c2VyRm9sbG93U3RhdHMiLCJkZXN0cm95Q29va2llIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsbUJBQ2Y7QUFBQSx5QkFDRSw4REFBQyxrREFBRDtBQUFBLDRCQUNFO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFBc0IsYUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFNLGFBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFNLFNBQUcsRUFBQyxNQUFWO0FBQWlCLFVBQUksRUFBQyxjQUF0QjtBQUFxQyxXQUFLLEVBQUMsT0FBM0M7QUFBbUQsVUFBSSxFQUFDO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFLRTtBQUFNLFNBQUcsRUFBQyxZQUFWO0FBQXVCLFVBQUksRUFBQyxVQUE1QjtBQUF1QyxVQUFJLEVBQUM7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQU9FO0FBQU0sU0FBRyxFQUFDLFlBQVY7QUFBdUIsVUFBSSxFQUFDLFVBQTVCO0FBQXVDLFVBQUksRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBUUU7QUFBTSxTQUFHLEVBQUMsWUFBVjtBQUF1QixVQUFJLEVBQUMsVUFBNUI7QUFBdUMsVUFBSSxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFERjs7QUFnQkEsK0RBQWVBLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmNvbnN0IEhlYWRUYWdzID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIHNpemVzPVwiMTYqMTZcIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuXHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL2xpc3RNZXNzYWdlcy5jc3NcIiAvPlxyXG5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3R5bGVzLmNzc1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL25wcm9ncmVzcy5jc3NcIiAvPlxyXG5cclxuICAgICAgPHRpdGxlPlZvaWNlbGVzcy1TYWludHM8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG4gIDwvPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkVGFncztcclxuIiwiaW1wb3J0IFJlYWN0LHtjcmVhdGVSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZFRhZ3MgZnJvbSBcIi4vSGVhZFRhZ3NcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcclxuXHJcbmltcG9ydCB7XHJcblxyXG5Db250YWluZXIsXHJcblZpc2liaWxpdHksXHJcbkdyaWQsXHJcblN0aWNreSxcclxuUmVmLFxyXG5EaXZpZGVyLFxyXG5TZWdtZW50XHJcblxyXG5cclxuXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbi8vaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBucHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU2lkZU1lbnUgZnJvbSBcIi4vU2lkZW1lbnVcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9TZWFyY2hcIjtcclxuZnVuY3Rpb24gTGF5b3V0KHtjaGlsZHJlbix1c2VyfSkge1xyXG5jb25zdCBjb250ZXh0UmVmID0gY3JlYXRlUmVmKCk7XHJcbiAgUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydD0oKSA9PiBucHJvZ3Jlc3Muc3RhcnQoKVxyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGU9KCk9Pm5wcm9ncmVzcy5kb25lKClcclxuICBSb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yPSgpPT5ucHJvZ3Jlc3MuZG9uZSgpXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRUYWdzIC8+XHJcblxyXG5cclxuXHJcbiAgICAgIHtcclxuICAgICAgIHVzZXIgPyAoXHJcbiAgICAgICAgICA8PlxyXG48ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDogXCIxcmVtXCIsbWFyZ2luUmlnaHQ6XCIxcmVtXCJ9fT5cclxuPFJlZiBpbm5lclJlZiA9IHtjb250ZXh0UmVmfT4gXHJcblxyXG48R3JpZD5cclxuXHJcbjxHcmlkLkNvbHVtbiBmbG9hdGVkPVwibGVmdFwiIHdpZHRoPXsyfT5cclxuPFN0aWNreSBjb250ZXh0PXtjb250ZXh0UmVmfT5cclxuXHJcbjxTaWRlTWVudSB1c2VyID0ge3VzZXJ9Lz5cclxuXHJcblxyXG48L1N0aWNreT5cclxuXHJcblxyXG48L0dyaWQuQ29sdW1uPlxyXG5cclxuXHJcblxyXG5cclxuPEdyaWQuQ29sdW1uIGZsb2F0ZWQ9XCJsZWZ0XCIgd2lkdGg9ezEwfT5cclxuPFZpc2liaWxpdHkgY29udGV4dCA9IHtjb250ZXh0UmVmfT57Y2hpbGRyZW59PC9WaXNpYmlsaXR5PlxyXG5cclxuXHJcbjwvR3JpZC5Db2x1bW4+XHJcblxyXG5cclxuXHJcbjxHcmlkLkNvbHVtbiBmbG9hdGVkPVwibGVmdFwiIHdpZHRoPXs0fT5cclxuPFN0aWNreSBjb250ZXh0PXtjb250ZXh0UmVmfT5cclxuPFNlZ21lbnQgYmFzaWM+XHJcbiAgPFNlYXJjaC8+XHJcbjwvU2VnbWVudD5cclxuXHJcblxyXG48L1N0aWNreT5cclxuXHJcblxyXG48L0dyaWQuQ29sdW1uPlxyXG5cclxuXHJcblxyXG48L0dyaWQ+XHJcbjwvUmVmPlxyXG48L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgPC8+XHJcblxyXG5cclxuICAgICAgICk6KFxyXG48PlxyXG5cclxuPE5hdmJhcj48L05hdmJhcj5cclxuXHJcbiAgICAgIDxDb250YWluZXIgdGV4dCBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjFyZW1cIiB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcblxyXG48Lz5cclxuXHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgIFxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7TWVudSxDb250YWluZXIsSWNvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaXNBY3RpdmU9IHJvdXRlID0+cm91dGVyLnBhdGhuYW1lID09PSByb3V0ZVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnUgZmx1aWQgYm9yZGVybGVzcz5cclxuICAgIDxDb250YWluZXIgdGV4dD5cclxuICAgICA8TGluayBocmVmPScvbG9naW4nPlxyXG4gICAgICA8TWVudS5JdGVtIGhlYWRlciBhY3RpdmU9e2lzQWN0aXZlKCcvbG9naW4nKX0+XHJcbiAgICAgICAgPEljb24gc2l6ZT1cImxhcmdlXCIgbmFtZT1cInNpZ24gaW5cIiAvPlxyXG4gICAgICAgIExvZ2luXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgIDwvTGluaz5cclxuICAgICA8TGluayBocmVmPScvc2lnbnVwJz5cclxuICAgICAgPE1lbnUuSXRlbSBoZWFkZXIgYWN0aXZlPXtpc0FjdGl2ZSgnL3NpZ251cCcpfT5cclxuICAgICAgICA8SWNvbiBzaXplPVwibGFyZ2VcIiBuYW1lPVwic2lnbnVwXCIgLz5cclxuICAgICAgICBTaWdudXBcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgPC9MaW5rPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgICA8L01lbnU+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpc3QsIEltYWdlLCBTZWFyY2ggfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcclxubGV0IGNhbmNlbDtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaENvbXBvbmVudCgpIHtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyBlID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHNldFRleHQodmFsdWUpO1xyXG4gICAgc2V0VGV4dCh2YWx1ZSk7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgLy9jaGFuZ2UgYWJvdmVcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNhbmNlbCAmJiBjYW5jZWwoKTtcclxuICAgICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlbjtcclxuICAgICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KFwidG9rZW5cIik7XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3NlYXJjaC8ke3ZhbHVlfWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IHRva2VuIH0sXHJcbiAgICAgICAgY2FuY2VsVG9rZW46IG5ldyBDYW5jZWxUb2tlbihjYW5jZWxlciA9PiB7XHJcbiAgICAgICAgICBjYW5jZWwgPSBjYW5jZWxlcjtcclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPT09IDApXHJcbiAgICAgIFxyXG4gICAgICB7XHJcbiAgICAgICAgICByZXN1bHRzLmxlbmd0aCA+IDAgJiYgc2V0UmVzdWx0cyhbXSk7XHJcbiAgICAgICAgICByZXR1cm4gc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFJlc3VsdHMocmVzLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBTZWFyY2hpbmdcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcblxyXG5pZih0ZXh0Lmxlbmd0aCA9PT0gMCAmJiBsb2FkaW5nKSBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgfSxbdGV4dF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2VhcmNoXHJcbiAgICAgIG9uQmx1cj17KCkgPT4ge1xyXG4gICAgICAgIHJlc3VsdHMubGVuZ3RoID4gMCAmJiBzZXRSZXN1bHRzKFtdKTtcclxuICAgICAgICBsb2FkaW5nICYmIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldFRleHQoXCJcIik7XHJcbiAgICAgIH19XHJcbiAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICByZXN1bHRSZW5kZXJlcj17UmVzdWx0UmVuZGVyZXJ9XHJcbiAgICAgIHJlc3VsdHM9e3Jlc3VsdHN9XHJcbiAgICAgIG9uU2VhcmNoQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIG1pbkNoYXJhY3RlcnM9ezF9XHJcbiAgICAgIG9uUmVzdWx0U2VsZWN0PXsoZSwgZGF0YSkgPT4gUm91dGVyLnB1c2goYC8ke2RhdGEucmVzdWx0LnVzZXJuYW1lfWApfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBSZXN1bHRSZW5kZXJlciA9ICh7IF9pZCwgcHJvZmlsZVBpY1VybCwgbmFtZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0IGtleT17X2lkfT5cclxuICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9maWxlUGljVXJsfSBhbHQ9XCJQcm9maWxlUGljXCIgYXZhdGFyIC8+XHJcbiAgICAgICAgPExpc3QuQ29udGVudCBoZWFkZXI9e25hbWV9IGFzPVwiYVwiIC8+XHJcbiAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgPC9MaXN0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hDb21wb25lbnQ7XHJcbiIsIi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHtMaXN0LEljb259IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vIGltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8gaW1wb3J0IHtsb2dvdXRVc2VyfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXV0aFVzZXJcIjtcclxuLy8gZnVuY3Rpb24gU2lkZU1lbnUoe3VzZXI6e3VucmVhZE5vdGlmaWNhdGlvbixlbWFpbCx1bnJlYWRNZXNzYWdlLHVzZXJuYW1lfX0pIHtcclxuLy8gY29uc3Qgcm91dGVyID11c2VSb3V0ZXIoKTtcclxuXHJcblxyXG4vLyBjb25zdCBpc0FjdGl2ZSA9IHJvdXRlID0+IHJvdXRlci5wYXRobmFtZSA9PT0gcm91dGU7XHJcblxyXG4vLyByZXR1cm4gKFxyXG5cclxuLy8gPD5cclxuXHJcbi8vIDxMaXN0PlxyXG5cclxuXHJcblxyXG4vLyA8TGluayBocmVmPVwiL1wiPlxyXG5cclxuLy8gPExpc3QuSXRlbSBhY3RpdmU9eyFpc0FjdGl2ZSgnLycpfT5cclxuXHJcbi8vIDxJY29uIG5hbWUgPSBcImhvbWVcIiBzaXplPVwibGFyZ2VcIiBjb2xvcj17aXNBY3RpdmUoJy8nKSAmJiAndGVhbCd9IC8+XHJcbi8vIDxMaXN0LkNvbnRlbnQ+XHJcbi8vIDxMaXN0LkhlYWRlciBjb250ZW50ID0gXCJIb21lXCIgLz5cclxuXHJcbi8vIDwvTGlzdC5Db250ZW50PlxyXG5cclxuLy8gPC9MaXN0Lkl0ZW0+XHJcblxyXG5cclxuXHJcbi8vIDwvTGluaz5cclxuXHJcblxyXG4vLyA8YnIgLz5cclxuXHJcbi8vIDxMaW5rIGhyZWY9XCIvbWVzc2FnZXNcIj5cclxuXHJcbi8vIDxMaXN0Lkl0ZW0gYWN0aXZlPXshaXNBY3RpdmUoJy9tZXNzYWdlcycpfT5cclxuXHJcbi8vIDxJY29uIG5hbWUgPSB7dW5yZWFkTWVzc2FnZSA/IFwiaGFuZCBwb2ludCByaWdodFwiOlwibWFpbCBvdXRsaW5lXCIgfSBzaXplPVwibGFyZ2VcIiBjb2xvcj17KGlzQWN0aXZlKCcvbWVzc2FnZXMnKSAmJiAndGVhbCcpfHwodW5yZWFkTWVzc2FnZSAmJlwib3JhbmdlXCIpfSAvPlxyXG4vLyA8TGlzdC5Db250ZW50PlxyXG4vLyA8TGlzdC5IZWFkZXIgY29udGVudCA9IFwiSG9tZVwiIC8+XHJcblxyXG4vLyA8L0xpc3QuQ29udGVudD5cclxuXHJcbi8vIDwvTGlzdC5JdGVtPlxyXG5cclxuXHJcblxyXG4vLyA8L0xpbms+XHJcblxyXG4vLyA8YnIgLz5cclxuXHJcbi8vIDxMaW5rIGhyZWY9XCIvbm90aWZpY2F0aW9uc1wiPlxyXG5cclxuLy8gPExpc3QuSXRlbSBhY3RpdmU9eyFpc0FjdGl2ZSgnL25vdGlmaWNhdGlvbnMnKX0+XHJcblxyXG4vLyA8SWNvbiBuYW1lID0ge3VucmVhZE5vdGlmaWNhdGlvbiA/IFwiaGFuZCBwb2ludCByaWdodFwiOlwiYmVsbCBvdXRsaW5lXCIgfSBzaXplPVwibGFyZ2VcIiBjb2xvcj17KGlzQWN0aXZlKCcvbm90aWZpY2F0aW9ucycpICYmICd0ZWFsJyl8fCh1bnJlYWROb3RpZmljYXRpb24gJiZcIm9yYW5nZVwiKX0gLz5cclxuLy8gPExpc3QuQ29udGVudD5cclxuLy8gPExpc3QuSGVhZGVyIGNvbnRlbnQgPSBcIk5vdGlmaWNhdGlvbnNcIiAvPlxyXG5cclxuLy8gPC9MaXN0LkNvbnRlbnQ+XHJcblxyXG4vLyA8L0xpc3QuSXRlbT5cclxuXHJcblxyXG5cclxuLy8gPC9MaW5rPlxyXG5cclxuXHJcblxyXG4vLyA8YnIgLz5cclxuXHJcbi8vIDxMaW5rIGhyZWY9XCIvbm90aWZpY2F0aW9uc1wiPlxyXG5cclxuLy8gPExpc3QuSXRlbSBhY3RpdmU9eyFpc0FjdGl2ZSgnL25vdGlmaWNhdGlvbnMnKX0+XHJcblxyXG4vLyA8SWNvbiBuYW1lID0ge3VucmVhZE5vdGlmaWNhdGlvbiA/IFwiaGFuZCBwb2ludCByaWdodFwiOlwiYmVsbCBvdXRsaW5lXCIgfSBzaXplPVwibGFyZ2VcIiBjb2xvcj17KGlzQWN0aXZlKCcvbm90aWZpY2F0aW9ucycpICYmICd0ZWFsJyl8fCh1bnJlYWROb3RpZmljYXRpb24gJiZcIm9yYW5nZVwiKX0gLz5cclxuLy8gPExpc3QuQ29udGVudD5cclxuLy8gPExpc3QuSGVhZGVyIGNvbnRlbnQgPSBcIk5vdGlmaWNhdGlvbnNcIiAvPlxyXG5cclxuLy8gPC9MaXN0LkNvbnRlbnQ+XHJcblxyXG4vLyA8L0xpc3QuSXRlbT5cclxuXHJcblxyXG5cclxuLy8gPC9MaW5rPlxyXG5cclxuXHJcbi8vIDxiciAvPlxyXG5cclxuXHJcbi8vIDxMaW5rIGhyZWY9IHtgLyR7dXNlcm5hbWV9YH0+XHJcbi8vIDxMaXN0Lkl0ZW0gYWN0aXZlID0ge3JvdXRlci5xdWVyeS51c2VybmFtZSA9PT0gdXNlcm5hbWV9PlxyXG5cclxuLy8gPEljb25cclxuLy8gbmFtZT1cInVzZXJcIlxyXG4vLyBzaXplPVwibGFyZ2VcIlxyXG4vLyBjb2xvcj17cm91dGVyLnF1ZXJ5LnVzZXJuYW1lID09PSB1c2VybmFtZSAmJiBcInRlYWxcIn1cclxuLy8gLz5cclxuXHJcbi8vIDxMaXN0LkNvbnRlbnQ+XHJcblxyXG4vLyA8TGlzdC5IZWFkZXIgY29udGVudD0gXCJBY2NvdW50XCIgLz5cclxuXHJcbi8vIDwvTGlzdC5Db250ZW50PlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyA8L0xpc3QuSXRlbT5cclxuXHJcbi8vIDwvTGluaz5cclxuXHJcblxyXG5cclxuLy8gPExpc3QuSXRlbSBvbkNsaWNrID0geygpID0+IGxvZ291dFVzZXIoZW1haWwpfSA+XHJcblxyXG4vLyA8SWNvbiBuYW1lID0gXCJsb2cgb3V0XCIgc2l6ZT1cImxhcmdlXCIgLz5cclxuLy8gPExpc3QuQ29udGVudD5cclxuXHJcbi8vIDxMaXN0LkhlYWRlciBjb250ZW50PVwiTG9nb3V0XCIgLz5cclxuXHJcbi8vIDwvTGlzdC5Db250ZW50PlxyXG5cclxuXHJcblxyXG4vLyA8L0xpc3QuSXRlbT5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyA8L0xpc3Q+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyA8Lz5cclxuLy8gKTtcclxuXHJcblxyXG5cclxuLy8gcmV0dXJuIDxkaXY+U2lkZU1lbnU8L2Rpdj47XHJcblxyXG5cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgU2lkZU1lbnU7XHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaXN0LCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGxvZ291dFVzZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXV0aFVzZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFNpZGVNZW51KHsgdXNlcjogeyB1bnJlYWROb3RpZmljYXRpb24sIGVtYWlsLCB1bnJlYWRNZXNzYWdlLCB1c2VybmFtZSB9IH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaXNBY3RpdmUgPSByb3V0ZSA9PiByb3V0ZXIucGF0aG5hbWUgPT09IHJvdXRlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpc3RcclxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjFyZW1cIiB9fVxyXG4gICAgICAgIHNpemU9XCJiaWdcIlxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICAgIHNlbGVjdGlvbj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPExpc3QuSXRlbSBhY3RpdmU9e2lzQWN0aXZlKFwiL1wiKX0+XHJcbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJob21lXCIgc2l6ZT1cImxhcmdlXCIgY29sb3I9e2lzQWN0aXZlKFwiL1wiKSAmJiBcInRlYWxcIn0gLz5cclxuICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIkhvbWVcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9tZXNzYWdlc1wiPlxyXG4gICAgICAgICAgPExpc3QuSXRlbSBhY3RpdmU9e2lzQWN0aXZlKFwiL21lc3NhZ2VzXCIpfT5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBuYW1lPXt1bnJlYWRNZXNzYWdlID8gXCJoYW5kIHBvaW50IHJpZ2h0XCIgOiBcIm1haWwgb3V0bGluZVwifVxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgY29sb3I9e1xyXG4gICAgICAgICAgICAgICAgKGlzQWN0aXZlKFwiL21lc3NhZ2VzXCIpICYmIFwidGVhbFwiKSB8fCAodW5yZWFkTWVzc2FnZSAmJiBcIm9yYW5nZVwiKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIk1lc3NhZ2VzXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbm90aWZpY2F0aW9uc1wiPlxyXG4gICAgICAgICAgPExpc3QuSXRlbSBhY3RpdmU9e2lzQWN0aXZlKFwiL25vdGlmaWNhdGlvbnNcIil9PlxyXG4gICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgIG5hbWU9e3VucmVhZE5vdGlmaWNhdGlvbiA/IFwiaGFuZCBwb2ludCByaWdodFwiIDogXCJiZWxsIG91dGxpbmVcIn1cclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPXtcclxuICAgICAgICAgICAgICAgIChpc0FjdGl2ZShcIi9ub3RpZmljYXRpb25zXCIpICYmIFwidGVhbFwiKSB8fFxyXG4gICAgICAgICAgICAgICAgKHVucmVhZE5vdGlmaWNhdGlvbiAmJiBcIm9yYW5nZVwiKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIk5vdGlmaWNhdGlvbnNcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke3VzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgPExpc3QuSXRlbSBhY3RpdmU9e3JvdXRlci5xdWVyeS51c2VybmFtZSA9PT0gdXNlcm5hbWV9PlxyXG4gICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VyXCJcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPXtyb3V0ZXIucXVlcnkudXNlcm5hbWUgPT09IHVzZXJuYW1lICYmIFwidGVhbFwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxMaXN0LkhlYWRlciBjb250ZW50PVwiQWNjb3VudFwiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8TGlzdC5JdGVtIG9uQ2xpY2s9eygpID0+IGxvZ291dFVzZXIoZW1haWwpfT5cclxuICAgICAgICAgIDxJY29uIG5hbWU9XCJsb2cgb3V0XCIgc2l6ZT1cImxhcmdlXCIgLz5cclxuICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxMaXN0LkhlYWRlciBjb250ZW50PVwiTG9nb3V0XCIgLz5cclxuICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlTWVudTtcclxuIiwiaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtwYXJzZUNvb2tpZXMsZGVzdHJveUNvb2tpZX0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IHtyZWRpcmVjdFVzZXJ9IGZyb20gXCIuLi91dGlscy9hdXRoVXNlclwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3NcIjtcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcyc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTXlBcHAoe0NvbXBvbmVudCxwYWdlUHJvcHN9KXtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB7Li4ucGFnZVByb3BzfT5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzPWFzeW5jKHtDb21wb25lbnQsY3R4fSk9PntcclxuICBjb25zdCB7dG9rZW59PSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuICBsZXQgcGFnZVByb3BzID0ge307XHJcbiAgY29uc3QgcHJvdGVjdGVkUm91dGVzPVxyXG4gIGN0eC5wYXRobmFtZT09PVwiL1wiIHx8XHJcbiAgY3R4LnBhdGhuYW1lPT09XCIvW3VzZXJuYW1lXVwiIHx8XHJcbiAgY3R4LnBhdGhuYW1lID09PVwiL25vdGlmaWNhdGlvbnNcIiB8fFxyXG4gIGN0eC5wYXRobmFtZSA9PT1cIi9wb3N0L1twb3N0SWRdXCIgfHxcclxuICBjdHgucGF0aG5hbWUgPT09XCIvbWVzc2FnZXNcIiB8fFxyXG4gIGN0eC5wYXRobmFtZSA9PT1cIi9zZWFyY2hcIjtcclxuICBcclxuICBcclxuICBpZighdG9rZW4pe1xyXG4gICAgcHJvdGVjdGVkUm91dGVzICYmIHJlZGlyZWN0VXNlcihjdHgsXCIvbG9naW5cIik7XHJcbiAgfWVsc2V7XHJcbiAgICBpZihDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKXtcclxuICAgICAgcGFnZVByb3BzPWF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgIH1cclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlcz1hd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL2F1dGhgLHtcclxuICAgICAgaGVhZGVyczp7QXV0aG9yaXphdGlvbjp0b2tlbn1cclxuICAgIH0pXHJcbiAgICBjb25zdCB7dXNlcix1c2VyRm9sbG93U3RhdHN9ID0gcmVzLmRhdGFcclxuXHJcbiAgICBpZih1c2VyKSAhcHJvdGVjdGVkUm91dGVzICYmIHJlZGlyZWN0VXNlcihjdHgsXCIvXCIpO1xyXG4gICAgcGFnZVByb3BzLnVzZXI9dXNlcjtcclxuICAgIHBhZ2VQcm9wcy51c2VyRm9sbG93U3RhdHM9dXNlckZvbGxvd1N0YXRzO1xyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgZGVzdHJveUNvb2tpZShjdHgsXCJ0b2tlblwiKVxyXG4gICAgICByZWRpcmVjdFVzZXIoY3R4LCcvbG9naW4nKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZXR1cm4geyBwYWdlUHJvcHMgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==