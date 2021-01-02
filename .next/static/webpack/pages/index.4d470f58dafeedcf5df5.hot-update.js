webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Meta */ \"./src/layout/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/Main */ \"./src/templates/Main.tsx\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_chartInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/chartInfo */ \"./src/utils/chartInfo.ts\");\n\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var applyOne = function applyOne() {\n    _utils_chartInfo__WEBPACK_IMPORTED_MODULE_5__[\"data\"].datasets.push(_utils_chartInfo__WEBPACK_IMPORTED_MODULE_5__[\"scenarioOne\"]);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    // only add user preferences if the user has logged in\n    window.location.reload();\n  }, [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_5__[\"data\"].datasets]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_templates_Main__WEBPACK_IMPORTED_MODULE_3__[\"Main\"], {\n    meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layout_Meta__WEBPACK_IMPORTED_MODULE_2__[\"Meta\"], {\n      title: \"Cannon Demonstrative\",\n      description: \"The demonstrative for Dr. Robert Cannon - Gardner Consulting.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, _this),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"m-20\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__[\"Line\"], {\n        data: _utils_chartInfo__WEBPACK_IMPORTED_MODULE_5__[\"data\"],\n        options: _utils_chartInfo__WEBPACK_IMPORTED_MODULE_5__[\"options\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return applyOne();\n        },\n        children: \"Click me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwiYXBwbHlPbmUiLCJkYXRhIiwiZGF0YXNldHMiLCJwdXNoIiwic2NlbmFyaW9PbmUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQkMseURBQUksQ0FBQ0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CQyw0REFBbkI7QUFDRCxHQUZEOztBQUlBQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0QsR0FIUSxFQUdOLENBQUNQLHFEQUFJLENBQUNDLFFBQU4sQ0FITSxDQUFUO0FBS0Esc0JBQ0UscUVBQUMsb0RBQUQ7QUFDRSxRQUFJLGVBQ0YscUVBQUMsaURBQUQ7QUFDRSxXQUFLLEVBQUMsc0JBRFI7QUFFRSxpQkFBVyxFQUFDO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUEsNEJBUUU7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNFLHFFQUFDLG9EQUFEO0FBQU0sWUFBSSxFQUFFRCxxREFBWjtBQUFrQixlQUFPLEVBQUVRLHdEQUFPQTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNVCxRQUFRLEVBQWQ7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBMUJEOztHQUFNRCxLOztLQUFBQSxLO0FBNEJTQSxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IE1ldGEgfSBmcm9tIFwiLi4vbGF5b3V0L01ldGFcIjtcbmltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi4vdGVtcGxhdGVzL01haW5cIjtcbmltcG9ydCB7IExpbmUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5pbXBvcnQgeyBvcHRpb25zLCBkYXRhLCBzY2VuYXJpb09uZSB9IGZyb20gXCIuLi91dGlscy9jaGFydEluZm9cIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IGFwcGx5T25lID0gKCkgPT4ge1xuICAgIGRhdGEuZGF0YXNldHMucHVzaChzY2VuYXJpb09uZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBvbmx5IGFkZCB1c2VyIHByZWZlcmVuY2VzIGlmIHRoZSB1c2VyIGhhcyBsb2dnZWQgaW5cbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0sIFtkYXRhLmRhdGFzZXRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TWFpblxuICAgICAgbWV0YT17XG4gICAgICAgIDxNZXRhXG4gICAgICAgICAgdGl0bGU9XCJDYW5ub24gRGVtb25zdHJhdGl2ZVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgZGVtb25zdHJhdGl2ZSBmb3IgRHIuIFJvYmVydCBDYW5ub24gLSBHYXJkbmVyIENvbnN1bHRpbmcuXCJcbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMjBcIj5cbiAgICAgICAgPExpbmUgZGF0YT17ZGF0YX0gb3B0aW9ucz17b3B0aW9uc30+PC9MaW5lPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFwcGx5T25lKCl9PkNsaWNrIG1lPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+PC9kaXY+XG4gICAgPC9NYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})