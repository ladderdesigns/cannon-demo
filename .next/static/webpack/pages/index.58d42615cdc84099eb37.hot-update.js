webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Meta */ \"./src/layout/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/Main */ \"./src/templates/Main.tsx\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_chartInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/chartInfo */ \"./src/utils/chartInfo.ts\");\n\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var x = {\n    a: \"\"\n  };\n\n  var applyOne = function applyOne() {\n    _utils_chartInfo__WEBPACK_IMPORTED_MODULE_5__[\"data\"].datasets.push(_utils_chartInfo__WEBPACK_IMPORTED_MODULE_5__[\"scenarioOne\"]);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // only add user preferences if the user has logged in\n    console.log(\"x has changed\");\n  }, [x]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_templates_Main__WEBPACK_IMPORTED_MODULE_3__[\"Main\"], {\n    meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layout_Meta__WEBPACK_IMPORTED_MODULE_2__[\"Meta\"], {\n      title: \"Cannon Demonstrative\",\n      description: \"The demonstrative for Dr. Robert Cannon - Gardner Consulting.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, _this),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"m-20\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__[\"Line\"], {\n        data: _utils_chartInfo__WEBPACK_IMPORTED_MODULE_5__[\"data\"],\n        options: _utils_chartInfo__WEBPACK_IMPORTED_MODULE_5__[\"options\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return applyOne();\n        },\n        children: \"Click me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwieCIsImEiLCJhcHBseU9uZSIsImRhdGEiLCJkYXRhc2V0cyIsInB1c2giLCJzY2VuYXJpb09uZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQUlDLENBQUMsR0FBRztBQUFFQyxLQUFDLEVBQUU7QUFBTCxHQUFSOztBQUNBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJDLHlEQUFJLENBQUNDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQkMsNERBQW5CO0FBQ0QsR0FGRDs7QUFJQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNELEdBSFEsRUFHTixDQUFDVCxDQUFELENBSE0sQ0FBVDtBQUtBLHNCQUNFLHFFQUFDLG9EQUFEO0FBQ0UsUUFBSSxlQUNGLHFFQUFDLGlEQUFEO0FBQ0UsV0FBSyxFQUFDLHNCQURSO0FBRUUsaUJBQVcsRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBLDRCQVFFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDRSxxRUFBQyxvREFBRDtBQUFNLFlBQUksRUFBRUcscURBQVo7QUFBa0IsZUFBTyxFQUFFTyx3REFBT0E7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTVIsUUFBUSxFQUFkO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQTNCRDs7R0FBTUgsSzs7S0FBQUEsSztBQTZCU0Esb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBNZXRhIH0gZnJvbSBcIi4uL2xheW91dC9NZXRhXCI7XG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4uL3RlbXBsYXRlcy9NYWluXCI7XG5pbXBvcnQgeyBMaW5lIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuaW1wb3J0IHsgb3B0aW9ucywgZGF0YSwgc2NlbmFyaW9PbmUgfSBmcm9tIFwiLi4vdXRpbHMvY2hhcnRJbmZvXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBsZXQgeCA9IHsgYTogXCJcIiB9O1xuICBjb25zdCBhcHBseU9uZSA9ICgpID0+IHtcbiAgICBkYXRhLmRhdGFzZXRzLnB1c2goc2NlbmFyaW9PbmUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gb25seSBhZGQgdXNlciBwcmVmZXJlbmNlcyBpZiB0aGUgdXNlciBoYXMgbG9nZ2VkIGluXG4gICAgY29uc29sZS5sb2coXCJ4IGhhcyBjaGFuZ2VkXCIpO1xuICB9LCBbeF0pO1xuXG4gIHJldHVybiAoXG4gICAgPE1haW5cbiAgICAgIG1ldGE9e1xuICAgICAgICA8TWV0YVxuICAgICAgICAgIHRpdGxlPVwiQ2Fubm9uIERlbW9uc3RyYXRpdmVcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIGRlbW9uc3RyYXRpdmUgZm9yIERyLiBSb2JlcnQgQ2Fubm9uIC0gR2FyZG5lciBDb25zdWx0aW5nLlwiXG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTIwXCI+XG4gICAgICAgIDxMaW5lIGRhdGE9e2RhdGF9IG9wdGlvbnM9e29wdGlvbnN9PjwvTGluZT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhcHBseU9uZSgpfT5DbGljayBtZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvTWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})