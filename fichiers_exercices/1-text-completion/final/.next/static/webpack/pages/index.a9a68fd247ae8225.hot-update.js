"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Loading = (param)=>{\n    let { isVisible  } = param;\n    return isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"mt-4 text-center\",\n        children: \"Loading ...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Workspace\\\\MonProjet_git\\\\OpenAI\\\\openAI-GPT-3286183\\\\fichiers_exercices\\\\1-text-completion\\\\final\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 49\n    }, undefined);\n};\n_c = Loading;\nconst Result = (param)=>{\n    let { result , isVisible  } = param;\n    return isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"mt-5 text-center\",\n        style: {\n            width: \"60%\"\n        },\n        children: result\n    }, void 0, false, {\n        fileName: \"D:\\\\Workspace\\\\MonProjet_git\\\\OpenAI\\\\openAI-GPT-3286183\\\\fichiers_exercices\\\\1-text-completion\\\\final\\\\pages\\\\index.js\",\n        lineNumber: 10,\n        columnNumber: 7\n    }, undefined);\n};\n_c1 = Result;\nfunction Home() {\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [isPending, loading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function generate() {\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                input\n            })\n        });\n        const data = await response.json();\n        if (response.status !== 200) {\n            throw data.error || new Error(\"Request failed with status \".concat(response.status));\n        }\n        return {\n            result: {}\n        };\n    }\n    async function handleOnSubmit(event) {\n        event.preventDefault();\n        loading(true);\n        try {\n        // generate\n        } catch (error) {\n            console.error(error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" \\uD83D\\uDD0D - OpenAI-Facts Search\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\MonProjet_git\\\\OpenAI\\\\openAI-GPT-3286183\\\\fichiers_exercices\\\\1-text-completion\\\\final\\\\pages\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\",\n                        rel: \"stylesheet\",\n                        integrity: \"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\MonProjet_git\\\\OpenAI\\\\openAI-GPT-3286183\\\\fichiers_exercices\\\\1-text-completion\\\\final\\\\pages\\\\index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\MonProjet_git\\\\OpenAI\\\\openAI-GPT-3286183\\\\fichiers_exercices\\\\1-text-completion\\\\final\\\\pages\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"#1abc9c\"\n                                },\n                                children: \"Facts\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\MonProjet_git\\\\OpenAI\\\\openAI-GPT-3286183\\\\fichiers_exercices\\\\1-text-completion\\\\final\\\\pages\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"#e74c3c\"\n                                },\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\MonProjet_git\\\\OpenAI\\\\openAI-GPT-3286183\\\\fichiers_exercices\\\\1-text-completion\\\\final\\\\pages\\\\index.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Workspace\\\\MonProjet_git\\\\OpenAI\\\\openAI-GPT-3286183\\\\fichiers_exercices\\\\1-text-completion\\\\final\\\\pages\\\\index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleOnSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ref: ref,\n                                type: \"text\",\n                                name: \"title\",\n                                placeholder: \"search ...\",\n                                onChange: (e)=>setInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\MonProjet_git\\\\OpenAI\\\\openAI-GPT-3286183\\\\fichiers_exercices\\\\1-text-completion\\\\final\\\\pages\\\\index.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Workspace\\\\MonProjet_git\\\\OpenAI\\\\openAI-GPT-3286183\\\\fichiers_exercices\\\\1-text-completion\\\\final\\\\pages\\\\index.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Workspace\\\\MonProjet_git\\\\OpenAI\\\\openAI-GPT-3286183\\\\fichiers_exercices\\\\1-text-completion\\\\final\\\\pages\\\\index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loading, {\n                        isVisible: isPending,\n                        input: input\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\MonProjet_git\\\\OpenAI\\\\openAI-GPT-3286183\\\\fichiers_exercices\\\\1-text-completion\\\\final\\\\pages\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Result, {\n                        isVisible: !isPending,\n                        result: result\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\MonProjet_git\\\\OpenAI\\\\openAI-GPT-3286183\\\\fichiers_exercices\\\\1-text-completion\\\\final\\\\pages\\\\index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\MonProjet_git\\\\OpenAI\\\\openAI-GPT-3286183\\\\fichiers_exercices\\\\1-text-completion\\\\final\\\\pages\\\\index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Workspace\\\\MonProjet_git\\\\OpenAI\\\\openAI-GPT-3286183\\\\fichiers_exercices\\\\1-text-completion\\\\final\\\\pages\\\\index.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"S4HW/NaDwSJ0kempuLjLqGqf2AE=\");\n_c2 = Home;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Loading\");\n$RefreshReg$(_c1, \"Result\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNZO0FBQ0Q7QUFFeEMsTUFBTUksVUFBVSxTQUFtQkM7UUFBbEIsRUFBRUEsVUFBUyxFQUFFO1dBQUtBLDJCQUFhLDhEQUFDQztRQUFHQyxXQUFVO2tCQUFtQjs7Ozs7O0FBQWU7S0FBMUZIO0FBRU4sTUFBTUksU0FBUyxTQUEyQjtRQUExQixFQUFFQyxPQUFNLEVBQUVKLFVBQVMsRUFBRTtJQUNuQyxPQUNFQSwyQkFDRSw4REFBQ0s7UUFBRUgsV0FBVTtRQUFtQkksT0FBTztZQUFFQyxPQUFPO1FBQU07a0JBQ25ESDs7Ozs7O0FBSVQ7TUFSTUQ7QUFVUyxTQUFTSyxPQUFPOztJQUM3QixNQUFNQyxNQUFNWiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ3ZCLE1BQU0sQ0FBQ2EsV0FBV0MsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzNDLE1BQU0sQ0FBQ1EsUUFBUVEsVUFBVSxHQUFHaEIsK0NBQVFBLENBQUMsSUFBSTtJQUN6QyxNQUFNLENBQUNpQixPQUFPQyxTQUFTLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUVuQyxlQUFlbUIsV0FBVztRQUN4QixNQUFNQyxXQUFXLE1BQU1DLE1BQU0saUJBQWlCO1lBQzVDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRVQ7WUFBTTtRQUMvQjtRQUNBLE1BQU1VLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtRQUNoQyxJQUFJUixTQUFTUyxNQUFNLEtBQUssS0FBSztZQUMzQixNQUNFRixLQUFLRyxLQUFLLElBQUksSUFBSUMsTUFBTSw4QkFBOEMsT0FBaEJYLFNBQVNTLE1BQU0sR0FDckU7UUFDSixDQUFDO1FBQ0QsT0FBTztZQUFFckIsUUFBUSxDQUFDO1FBQUU7SUFDdEI7SUFFQSxlQUFld0IsZUFBZUMsS0FBSyxFQUFFO1FBQ25DQSxNQUFNQyxjQUFjO1FBQ3BCbkIsUUFBUSxJQUFJO1FBQ1osSUFBSTtRQUNGLFdBQVc7UUFFYixFQUFFLE9BQU9lLE9BQU87WUFDZEssUUFBUUwsS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNNOzswQkFDQyw4REFBQ3JDLGtEQUFJQTs7a0NBQ0gsOERBQUNzQztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsS0FBSTt3QkFDSkMsV0FBVTt3QkFDVkMsYUFBWTs7Ozs7Ozs7Ozs7OzBCQUloQiw4REFBQ0M7Z0JBQUtyQyxXQUFXSiwrREFBVzs7a0NBQzFCLDhEQUFDMEM7OzBDQUNDLDhEQUFDQztnQ0FBS25DLE9BQU87b0NBQUVvQyxPQUFPO2dDQUFVOzBDQUFHOzs7Ozs7NEJBQWE7MENBQ2hELDhEQUFDRDtnQ0FBS25DLE9BQU87b0NBQUVvQyxPQUFPO2dDQUFVOzBDQUFHOzs7Ozs7Ozs7Ozs7a0NBRXJDLDhEQUFDQzt3QkFBS0MsVUFBVWhCOzswQ0FDZCw4REFBQ2Y7Z0NBQ0NKLEtBQUtBO2dDQUNMb0MsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsVUFBVSxDQUFDQyxJQUFNbkMsU0FBU21DLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzBDQUUxQyw4REFBQ0M7Z0NBQU9QLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7OztrQ0FFeEIsOERBQUM5Qzt3QkFBUUMsV0FBV1U7d0JBQVdHLE9BQU9BOzs7Ozs7a0NBQ3RDLDhEQUFDVjt3QkFBT0gsV0FBVyxDQUFDVTt3QkFBV04sUUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkvQyxDQUFDO0dBbEV1Qkk7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBMb2FkaW5nID0gKHsgaXNWaXNpYmxlIH0pID0+IGlzVmlzaWJsZSAmJiA8aDIgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWNlbnRlclwiPkxvYWRpbmcgLi4uPC9oMj47XHJcblxyXG5jb25zdCBSZXN1bHQgPSAoeyByZXN1bHQsIGlzVmlzaWJsZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIGlzVmlzaWJsZSAmJiAoXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTUgdGV4dC1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogXCI2MCVcIiB9fT5cclxuICAgICAgICB7cmVzdWx0fVxyXG4gICAgICA8L3A+XHJcbiAgICApXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtpc1BlbmRpbmcsIGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlucHV0IH0pLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgIHRocm93IChcclxuICAgICAgICBkYXRhLmVycm9yIHx8IG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YClcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHJlc3VsdDoge30gfTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZU9uU3VibWl0KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGdlbmVyYXRlXHJcbiAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPiDwn5SNIC0gT3BlbkFJLUZhY3RzIFNlYXJjaDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjEuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC0xQm1FNGtXQnE3OGlZaEZsZHZLdWhmVEFVNmF1VTh0VDk0V3JIZnRqRGJyQ0VYU1Uxb0JvcXlsMlF2WjZqSVczXCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8aDM+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjMWFiYzljXCIgfX0+RmFjdHM8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI2U3NGMzY1wiIH19PlNlYXJjaDwvc3Bhbj5cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggLi4uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxMb2FkaW5nIGlzVmlzaWJsZT17aXNQZW5kaW5nfSBpbnB1dD17aW5wdXR9IC8+XHJcbiAgICAgICAgPFJlc3VsdCBpc1Zpc2libGU9eyFpc1BlbmRpbmd9IHJlc3VsdD17cmVzdWx0fSAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJzdHlsZXMiLCJMb2FkaW5nIiwiaXNWaXNpYmxlIiwiaDIiLCJjbGFzc05hbWUiLCJSZXN1bHQiLCJyZXN1bHQiLCJwIiwic3R5bGUiLCJ3aWR0aCIsIkhvbWUiLCJyZWYiLCJpc1BlbmRpbmciLCJsb2FkaW5nIiwic2V0UmVzdWx0IiwiaW5wdXQiLCJzZXRJbnB1dCIsImdlbmVyYXRlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJFcnJvciIsImhhbmRsZU9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJocmVmIiwicmVsIiwiaW50ZWdyaXR5IiwiY3Jvc3NvcmlnaW4iLCJtYWluIiwiaDMiLCJzcGFuIiwiY29sb3IiLCJmb3JtIiwib25TdWJtaXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});