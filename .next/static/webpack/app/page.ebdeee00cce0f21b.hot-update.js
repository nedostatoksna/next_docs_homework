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

/***/ "(app-pages-browser)/./app/components/LazyLoadingDemo.jsx":
/*!********************************************!*\
  !*** ./app/components/LazyLoadingDemo.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ClientComponentExample; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n// Lazy loading помогает улучшить начальную производительность\n//  загрузки приложения за счет уменьшения объема JavaScript, \n// необходимого для визуализации маршрута.\n// Есть два способа реализовать отложенную загрузку в Next.js:\n// Использование динамического импорта с next/dynamic\n// С использованием React.lazy() с Suspense\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Client Components:\nconst ComponentA = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_app_components_componentA_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./componentA */ \"(app-pages-browser)/./app/components/componentA.jsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"C:\\\\Users\\\\Рита Мышка\\\\Documents\\\\web\\\\REACT\\\\next\\\\next_styling_optimization\\\\app\\\\components\\\\LazyLoadingDemo.jsx -> \" + \"./componentA\"\n        ]\n    }\n});\n_c = ComponentA;\nconst ComponentB = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_app_components_componentB_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./componentB */ \"(app-pages-browser)/./app/components/componentB.jsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"C:\\\\Users\\\\Рита Мышка\\\\Documents\\\\web\\\\REACT\\\\next\\\\next_styling_optimization\\\\app\\\\components\\\\LazyLoadingDemo.jsx -> \" + \"./componentB\"\n        ]\n    }\n});\n_c1 = ComponentB;\nconst ComponentC = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_app_components_componentC_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./componentC */ \"(app-pages-browser)/./app/components/componentC.jsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"C:\\\\Users\\\\Рита Мышка\\\\Documents\\\\web\\\\REACT\\\\next\\\\next_styling_optimization\\\\app\\\\components\\\\LazyLoadingDemo.jsx -> \" + \"./componentC\"\n        ]\n    },\n    ssr: false\n});\n_c2 = ComponentC;\nfunction ClientComponentExample() {\n    _s();\n    const [showMore, setShowMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Lazy Loading demo\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Рита Мышка\\\\Documents\\\\web\\\\REACT\\\\next\\\\next_styling_optimization\\\\app\\\\components\\\\LazyLoadingDemo.jsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ComponentA, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Рита Мышка\\\\Documents\\\\web\\\\REACT\\\\next\\\\next_styling_optimization\\\\app\\\\components\\\\LazyLoadingDemo.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            showMore && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ComponentB, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Рита Мышка\\\\Documents\\\\web\\\\REACT\\\\next\\\\next_styling_optimization\\\\app\\\\components\\\\LazyLoadingDemo.jsx\",\n                lineNumber: 31,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledButton, {\n                onClick: ()=>setShowMore(!showMore),\n                children: \"Toggle\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Рита Мышка\\\\Documents\\\\web\\\\REACT\\\\next\\\\next_styling_optimization\\\\app\\\\components\\\\LazyLoadingDemo.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ComponentC, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Рита Мышка\\\\Documents\\\\web\\\\REACT\\\\next\\\\next_styling_optimization\\\\app\\\\components\\\\LazyLoadingDemo.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Рита Мышка\\\\Documents\\\\web\\\\REACT\\\\next\\\\next_styling_optimization\\\\app\\\\components\\\\LazyLoadingDemo.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(ClientComponentExample, \"z+4BA/fiXyLj4HPnnELOZzQs4r4=\");\n_c3 = ClientComponentExample;\nconst StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.withConfig({\n    displayName: \"LazyLoadingDemo__StyledButton\",\n    componentId: \"sc-828bbf59-0\"\n})([\n    \"color:#a73a2e;font-weight:700;border:2px solid #a73a2e;padding:10px;font-family:var(--font-roboto-mono);\"\n]);\n_c4 = StyledButton;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"ComponentA\");\n$RefreshReg$(_c1, \"ComponentB\");\n$RefreshReg$(_c2, \"ComponentC\");\n$RefreshReg$(_c3, \"ClientComponentExample\");\n$RefreshReg$(_c4, \"StyledButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0xhenlMb2FkaW5nRGVtby5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsOERBQThEO0FBQzlELDhEQUE4RDtBQUM5RCwwQ0FBMEM7QUFDMUMsOERBQThEO0FBRTlELHFEQUFxRDtBQUNyRCwyQ0FBMkM7OztBQUlYO0FBQ0U7QUFDSTtBQUV0QyxxQkFBcUI7QUFDckIsTUFBTUcsYUFBYUYsd0RBQU9BLENBQUMsSUFBTSx3TkFBTzs7Ozs7OztLQUFsQ0U7QUFDTixNQUFNQyxhQUFhSCx3REFBT0EsQ0FBQyxJQUFNLHdOQUFPOzs7Ozs7O01BQWxDRztBQUNOLE1BQU1DLGFBQWFKLHdEQUFPQSxDQUFDLElBQU0sd05BQU87Ozs7OztJQUFtQkssS0FBSzs7TUFBMUREO0FBRVMsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV6QyxxQkFDRSw4REFBQ1U7O1lBQUk7MEJBRUwsOERBQUNDOzs7OzswQkFFQyw4REFBQ1I7Ozs7O1lBR0FLLDBCQUFZLDhEQUFDSjs7Ozs7MEJBQ2QsOERBQUNRO2dCQUFhQyxTQUFTLElBQU1KLFlBQVksQ0FBQ0Q7MEJBQVc7Ozs7OzswQkFHckQsOERBQUNIOzs7Ozs7Ozs7OztBQUdQO0dBbEJ3QkU7TUFBQUE7QUFvQnhCLE1BQU1LLGVBQWVWLHlEQUFNQSxDQUFDWSxNQUFNOzs7Ozs7TUFBNUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0xhenlMb2FkaW5nRGVtby5qc3g/M2VkYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMYXp5IGxvYWRpbmcg0L/QvtC80L7Qs9Cw0LXRgiDRg9C70YPRh9GI0LjRgtGMINC90LDRh9Cw0LvRjNC90YPRjiDQv9GA0L7QuNC30LLQvtC00LjRgtC10LvRjNC90L7RgdGC0YxcclxuLy8gINC30LDQs9GA0YPQt9C60Lgg0L/RgNC40LvQvtC20LXQvdC40Y8g0LfQsCDRgdGH0LXRgiDRg9C80LXQvdGM0YjQtdC90LjRjyDQvtCx0YrQtdC80LAgSmF2YVNjcmlwdCwgXHJcbi8vINC90LXQvtCx0YXQvtC00LjQvNC+0LPQviDQtNC70Y8g0LLQuNC30YPQsNC70LjQt9Cw0YbQuNC4INC80LDRgNGI0YDRg9GC0LAuXHJcbi8vINCV0YHRgtGMINC00LLQsCDRgdC/0L7RgdC+0LHQsCDRgNC10LDQu9C40LfQvtCy0LDRgtGMINC+0YLQu9C+0LbQtdC90L3Rg9GOINC30LDQs9GA0YPQt9C60YMg0LIgTmV4dC5qczpcclxuXHJcbi8vINCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC00LjQvdCw0LzQuNGH0LXRgdC60L7Qs9C+INC40LzQv9C+0YDRgtCwINGBIG5leHQvZHluYW1pY1xyXG4vLyDQoSDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtdC8IFJlYWN0LmxhenkoKSDRgSBTdXNwZW5zZVxyXG5cclxuJ3VzZSBjbGllbnQnXHJcbiBcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG4gXHJcbi8vIENsaWVudCBDb21wb25lbnRzOlxyXG5jb25zdCBDb21wb25lbnRBID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50QScpKVxyXG5jb25zdCBDb21wb25lbnRCID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50QicpKVxyXG5jb25zdCBDb21wb25lbnRDID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vY29tcG9uZW50QycpLCB7IHNzcjogZmFsc2UgfSlcclxuIFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGllbnRDb21wb25lbnRFeGFtcGxlKCkge1xyXG4gIGNvbnN0IFtzaG93TW9yZSwgc2V0U2hvd01vcmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgIExhenkgTG9hZGluZyBkZW1vXHJcbiAgICA8YnI+PC9icj5cclxuICAgICAgey8qIExvYWQgaW1tZWRpYXRlbHksIGJ1dCBpbiBhIHNlcGFyYXRlIGNsaWVudCBidW5kbGUgKi99XHJcbiAgICAgIDxDb21wb25lbnRBIC8+XHJcbiBcclxuICAgICAgey8qIExvYWQgb24gZGVtYW5kLCBvbmx5IHdoZW4vaWYgdGhlIGNvbmRpdGlvbiBpcyBtZXQgKi99XHJcbiAgICAgIHtzaG93TW9yZSAmJiA8Q29tcG9uZW50QiAvPn1cclxuICAgICAgPFN0eWxlZEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9yZSghc2hvd01vcmUpfT5Ub2dnbGU8L1N0eWxlZEJ1dHRvbj5cclxuIFxyXG4gICAgICB7LyogTG9hZCBvbmx5IG9uIHRoZSBjbGllbnQgc2lkZSAqL31cclxuICAgICAgPENvbXBvbmVudEMgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBjb2xvcjogI2E3M2EyZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNhNzNhMmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1yb2JvdG8tbW9ubyk7XHJcbmA7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZHluYW1pYyIsInN0eWxlZCIsIkNvbXBvbmVudEEiLCJDb21wb25lbnRCIiwiQ29tcG9uZW50QyIsInNzciIsIkNsaWVudENvbXBvbmVudEV4YW1wbGUiLCJzaG93TW9yZSIsInNldFNob3dNb3JlIiwiZGl2IiwiYnIiLCJTdHlsZWRCdXR0b24iLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/LazyLoadingDemo.jsx\n"));

/***/ })

});