(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=r},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,s=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||s&&a}},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=l,t.default=void 0;var r=n(6495).Z,s=n(2648).Z,i=(0,n(1598).Z)(n(7294)),a=s(n(1585)),o=n(8e3),u=n(5850),c=n(9470);n(9475);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n=t.inAmpMode;return e.reduce(f,[]).reverse().concat(l(n).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(s){var i=!0,a=!1;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){a=!0;var o=s.key.slice(s.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(s.type){case"title":case"base":t.has(s.type)?i=!1:t.add(s.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var l=d[u];if(s.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var f=s.props[l],p=r[l]||new Set;"name"===l&&a||!p.has(f)?(p.add(f),r[l]=p):i=!1}}}return i}}()).reverse().map((function(e,t){var s=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var a=r({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,i.default.cloneElement(e,a)}return i.default.cloneElement(e,{key:s})}))}var h=function(e){var t=e.children,n=i.useContext(o.AmpStateContext),r=i.useContext(u.HeadManagerContext);return i.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:c.isInAmpMode(n)},t)};t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function o(){if(t&&t.mountedInstances){var s=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(s,e))}}if(s){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),o()}return i((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),i((function(){return t&&(t._pendingUpdate=o),function(){t&&(t._pendingUpdate=o)}})),a((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var r=(0,n(1598).Z)(n(7294));var s=!1,i=s?function(){}:r.useLayoutEffect,a=s?function(){}:r.useEffect},4244:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(9499),s=n(9008),i=n.n(s),a=n(7294),o=n(5893),u=function(){return(0,o.jsx)("div",{id:"loading",children:(0,o.jsx)("div",{className:"load-circle",children:(0,o.jsx)("span",{className:"one"})})})};n(3021),n(906);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){var t=e.Component,n=e.pageProps,r=(0,a.useState)(!0),s=r[0],c=r[1];return(0,a.useEffect)((function(){setTimeout((function(){c(!1)}),1e3)}),[]),(0,o.jsxs)(a.Fragment,{children:[(0,o.jsxs)(i(),{children:[(0,o.jsx)("title",{children:"Milo Cohen-Elyanow"}),(0,o.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:"/favicon.ico"}),(0,o.jsx)("link",{href:"static/plugin/bootstrap/css/bootstrap.min.css",rel:"stylesheet"}),(0,o.jsx)("link",{href:"static/plugin/font-awesome/css/all.min.css",rel:"stylesheet"}),(0,o.jsx)("link",{href:"static/plugin/et-line/style.css",rel:"stylesheet"}),(0,o.jsx)("link",{href:"static/plugin/themify-icons/themify-icons.css",rel:"stylesheet"}),(0,o.jsx)("link",{href:"static/plugin/owl-carousel/css/owl.carousel.min.css",rel:"stylesheet"}),(0,o.jsx)("link",{href:"static/plugin/magnific/magnific-popup.css",rel:"stylesheet"}),(0,o.jsx)("link",{href:"static/plugin/scroll/jquery.mCustomScrollbar.min.css",rel:"stylesheet"}),(0,o.jsx)("link",{href:"static/css/style.css",rel:"stylesheet"}),(0,o.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),(0,o.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",rel:"stylesheet"})]}),s&&(0,o.jsx)(u,{}),(0,o.jsx)(t,l({},n))]})}},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4244)}])},3021:function(){},906:function(){},9008:function(e,t,n){e.exports=n(2717)},9499:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(9898)}));var n=e.O();_N_E=n}]);