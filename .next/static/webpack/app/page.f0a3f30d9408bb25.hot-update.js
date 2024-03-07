"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/VideoPage.jsx":
/*!**************************************!*\
  !*** ./app/components/VideoPage.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ VideoPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _vercel_blob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vercel/blob */ \"(app-pages-browser)/./node_modules/@vercel/blob/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction VideoPage() {\n    return(// suspens позволяет показывать fallback, пока видео не загрузится\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading video...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Рита Мышка\\\\Documents\\\\web\\\\REACT\\\\next\\\\next_styling_optimization\\\\app\\\\components\\\\VideoPage.jsx\",\n            lineNumber: 7,\n            columnNumber: 27\n        }, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VideoComponent, {\n            fileName: \"houseShort-TNj7PxBZxQKIxGpc6n86UUmOEkAYtC.mp4\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Рита Мышка\\\\Documents\\\\web\\\\REACT\\\\next\\\\next_styling_optimization\\\\app\\\\components\\\\VideoPage.jsx\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Рита Мышка\\\\Documents\\\\web\\\\REACT\\\\next\\\\next_styling_optimization\\\\app\\\\components\\\\VideoPage.jsx\",\n        lineNumber: 7,\n        columnNumber: 7\n    }, this));\n}\n_c = VideoPage;\n// <video> для самостоятельно хостящихся файлов\n//   - включать fallback\n//  - субтитры\n//  - обеспечить навигацию с помощью клавиатуры и совместимость с программами чтения экрана\n// <iframe> для видео с внешних платформ\nasync function VideoComponent(param) {\n    let { fileName } = param;\n    let token = \"************\";\n    const { items } = await (0,_vercel_blob__WEBPACK_IMPORTED_MODULE_2__.list)({\n        prefix: fileName,\n        limit: 1,\n        token\n    });\n    const { url } = items[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"40px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n            controls: true,\n            preload: \"none\",\n            \"aria-label\": \"Video player\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: url,\n                    type: \"video/mp4\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Рита Мышка\\\\Documents\\\\web\\\\REACT\\\\next\\\\next_styling_optimization\\\\app\\\\components\\\\VideoPage.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"track\", {\n                    src: \"/path/to/captions.vtt\",\n                    kind: \"subtitles\",\n                    srcLang: \"en\",\n                    label: \"English\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Рита Мышка\\\\Documents\\\\web\\\\REACT\\\\next\\\\next_styling_optimization\\\\app\\\\components\\\\VideoPage.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this),\n                \"Your browser does not support the video tag.\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Рита Мышка\\\\Documents\\\\web\\\\REACT\\\\next\\\\next_styling_optimization\\\\app\\\\components\\\\VideoPage.jsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Рита Мышка\\\\Documents\\\\web\\\\REACT\\\\next\\\\next_styling_optimization\\\\app\\\\components\\\\VideoPage.jsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_c1 = VideoComponent;\nvar _c, _c1;\n$RefreshReg$(_c, \"VideoPage\");\n$RefreshReg$(_c1, \"VideoComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1ZpZGVvUGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1DO0FBQ0g7QUFFakIsU0FBU0U7SUFDcEIsT0FDSSxrRUFBa0U7a0JBQ3BFLDhEQUFDRCwyQ0FBUUE7UUFBQ0Usd0JBQVUsOERBQUNDO3NCQUFFOzs7Ozs7a0JBQ3JCLDRFQUFDQztZQUFlQyxVQUFTOzs7Ozs7Ozs7OztBQUcvQjtLQVBzQko7QUFReEIsK0NBQStDO0FBQy9DLHdCQUF3QjtBQUN4QixjQUFjO0FBQ2QsMkZBQTJGO0FBRTNGLHdDQUF3QztBQUV4QyxlQUFlRyxlQUFnQixLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7SUFFM0IsSUFBSUMsUUFBUTtJQUVaLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTVIsa0RBQUlBLENBQUM7UUFDekJTLFFBQVFIO1FBQ1JJLE9BQU87UUFDUEg7SUFDRjtJQUNBLE1BQU0sRUFBRUksR0FBRyxFQUFFLEdBQUdILEtBQUssQ0FBQyxFQUFFO0lBRTFCLHFCQUNJLDhEQUFDSTtRQUFJQyxPQUFPO1lBQUVDLFNBQVM7UUFBTTtrQkFDekIsNEVBQUNDO1lBQU1DLFFBQVE7WUFBQ0MsU0FBUTtZQUFPQyxjQUFXOzs4QkFDdEMsOERBQUNDO29CQUFPQyxLQUFLVDtvQkFBS1UsTUFBSzs7Ozs7OzhCQUN2Qiw4REFBQ0M7b0JBQ0RGLEtBQUk7b0JBQ0pHLE1BQUs7b0JBQ0xDLFNBQVE7b0JBQ1JDLE9BQU07Ozs7OztnQkFDSjs7Ozs7Ozs7Ozs7O0FBS2hCO01BekJhcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVmlkZW9QYWdlLmpzeD83MDAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3QgfSBmcm9tICdAdmVyY2VsL2Jsb2InXHJcbmltcG9ydCB7IFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb1BhZ2UoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIHN1c3BlbnMg0L/QvtC30LLQvtC70Y/QtdGCINC/0L7QutCw0LfRi9Cy0LDRgtGMIGZhbGxiYWNrLCDQv9C+0LrQsCDQstC40LTQtdC+INC90LUg0LfQsNCz0YDRg9C30LjRgtGB0Y9cclxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8cD5Mb2FkaW5nIHZpZGVvLi4uPC9wPn0+IFxyXG4gICAgICAgIDxWaWRlb0NvbXBvbmVudCBmaWxlTmFtZT1cImhvdXNlU2hvcnQtVE5qN1B4Qlp4UUtJeEdwYzZuODZVVW1PRWtBWXRDLm1wNFwiIC8+XHJcbiAgICAgIDwvU3VzcGVuc2U+XHJcbiAgICApXHJcbiAgfVxyXG4vLyA8dmlkZW8+INC00LvRjyDRgdCw0LzQvtGB0YLQvtGP0YLQtdC70YzQvdC+INGF0L7RgdGC0Y/RidC40YXRgdGPINGE0LDQudC70L7QslxyXG4vLyAgIC0g0LLQutC70Y7Rh9Cw0YLRjCBmYWxsYmFja1xyXG4vLyAgLSDRgdGD0LHRgtC40YLRgNGLXHJcbi8vICAtINC+0LHQtdGB0L/QtdGH0LjRgtGMINC90LDQstC40LPQsNGG0LjRjiDRgSDQv9C+0LzQvtGJ0YzRjiDQutC70LDQstC40LDRgtGD0YDRiyDQuCDRgdC+0LLQvNC10YHRgtC40LzQvtGB0YLRjCDRgSDQv9GA0L7Qs9GA0LDQvNC80LDQvNC4INGH0YLQtdC90LjRjyDRjdC60YDQsNC90LBcclxuXHJcbi8vIDxpZnJhbWU+INC00LvRjyDQstC40LTQtdC+INGBINCy0L3QtdGI0L3QuNGFINC/0LvQsNGC0YTQvtGA0LxcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFZpZGVvQ29tcG9uZW50ICh7IGZpbGVOYW1lIH0pIHtcclxuXHJcbiAgICBsZXQgdG9rZW4gPSBcIioqKioqKioqKioqKlwiO1xyXG5cclxuICAgIGNvbnN0IHsgaXRlbXMgfSA9IGF3YWl0IGxpc3Qoe1xyXG4gICAgICAgIHByZWZpeDogZmlsZU5hbWUsXHJcbiAgICAgICAgbGltaXQ6IDEsXHJcbiAgICAgICAgdG9rZW5cclxuICAgICAgfSlcclxuICAgICAgY29uc3QgeyB1cmwgfSA9IGl0ZW1zWzBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICc0MHB4J319PlxyXG4gICAgICAgICAgICA8dmlkZW8gY29udHJvbHMgcHJlbG9hZD1cIm5vbmVcIiBhcmlhLWxhYmVsPVwiVmlkZW8gcGxheWVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17dXJsfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgICAgICAgIDx0cmFja1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL3BhdGgvdG8vY2FwdGlvbnMudnR0XCJcclxuICAgICAgICAgICAgICAgIGtpbmQ9XCJzdWJ0aXRsZXNcIlxyXG4gICAgICAgICAgICAgICAgc3JjTGFuZz1cImVuXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRW5nbGlzaFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cclxuICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9Il0sIm5hbWVzIjpbImxpc3QiLCJTdXNwZW5zZSIsIlZpZGVvUGFnZSIsImZhbGxiYWNrIiwicCIsIlZpZGVvQ29tcG9uZW50IiwiZmlsZU5hbWUiLCJ0b2tlbiIsIml0ZW1zIiwicHJlZml4IiwibGltaXQiLCJ1cmwiLCJkaXYiLCJzdHlsZSIsInBhZGRpbmciLCJ2aWRlbyIsImNvbnRyb2xzIiwicHJlbG9hZCIsImFyaWEtbGFiZWwiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIiwidHJhY2siLCJraW5kIiwic3JjTGFuZyIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/VideoPage.jsx\n"));

/***/ })

});