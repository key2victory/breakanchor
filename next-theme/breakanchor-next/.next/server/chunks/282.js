exports.id = 282;
exports.ids = [282];
exports.modules = {

/***/ 5282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/layout/PreLoader.js

const PreLoader = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        id: "loading",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "load-circle",
            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "one"
            })
        })
    });
};
/* harmony default export */ const layout_PreLoader = (PreLoader);

// EXTERNAL MODULE: ./styles/glitch.css
var glitch = __webpack_require__(5188);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component, pageProps }) {
    const [load, setLoad] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoad(false);
        }, 1000);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Sergio - Portfolio Template"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "shortcut icon",
                        type: "image/x-icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "static/plugin/bootstrap/css/bootstrap.min.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "static/plugin/font-awesome/css/all.min.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "static/plugin/et-line/style.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "static/plugin/themify-icons/themify-icons.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "static/plugin/owl-carousel/css/owl.carousel.min.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "static/plugin/magnific/magnific-popup.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "static/plugin/scroll/jquery.mCustomScrollbar.min.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "static/css/style.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            load && /*#__PURE__*/ jsx_runtime.jsx(layout_PreLoader, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5188:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;