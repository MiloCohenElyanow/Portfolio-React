"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 90:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/layout/PreLoader.js


const PreLoader = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "loading",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "load-circle",
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "one"
      })
    })
  });
};

/* harmony default export */ const layout_PreLoader = (PreLoader);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  const {
    0: load,
    1: setLoad
  } = (0,external_react_.useState)(true);
  (0,external_react_.useEffect)(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Milo Cohen-Elyanow"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "static/plugin/bootstrap/css/bootstrap.min.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "static/plugin/font-awesome/css/all.min.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "static/plugin/et-line/style.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "static/plugin/themify-icons/themify-icons.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "static/plugin/owl-carousel/css/owl.carousel.min.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "static/plugin/magnific/magnific-popup.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "static/plugin/scroll/jquery.mCustomScrollbar.min.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "static/css/style.css",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        rel: "stylesheet"
      })]
    }), load && /*#__PURE__*/jsx_runtime_.jsx(layout_PreLoader, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(90));
module.exports = __webpack_exports__;

})();