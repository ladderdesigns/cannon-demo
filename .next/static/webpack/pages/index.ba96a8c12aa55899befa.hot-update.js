webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Meta */ \"./src/layout/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Main */ \"./src/templates/Main.tsx\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/chartInfo */ \"./src/utils/chartInfo.ts\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chartjs-plugin-annotation */ \"./node_modules/chartjs-plugin-annotation/src/index.js\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar options = {\n  responsive: true,\n  maintainAspectRatio: true,\n  legend: {\n    position: \"right\",\n    labels: {\n      fontSize: 12\n    }\n  },\n  title: {\n    display: true,\n    text: \"BAC Analysis - Robert Cannon M.D.\",\n    fontSize: 26,\n    fontFamily: \"'Helvetica'\",\n    fontColor: \"#374151http://127.0.0.1:4040  \"\n  },\n  annotation: {\n    annotations: [{\n      type: \"line\",\n      mode: \"horizontal\",\n      scaleID: \"y-axis-0\",\n      value: 0.16,\n      borderColor: \"rgba(0, 0, 0, 0.1)\",\n      borderWidth: 1,\n      borderDash: [10, 5],\n      showLine: false,\n      label: {\n        enabled: false,\n        content: \"Test label\"\n      }\n    }]\n  },\n  scales: {\n    xAxes: [{\n      scaleLabel: {\n        display: true,\n        fontSize: 20,\n        labelString: \"Known Times (AM)\"\n      },\n      ticks: {\n        callback: function callback(value) {\n          if (value === \"2:58 AM\") {\n            return value;\n          }\n        },\n        fontSize: 20\n      }\n    }],\n    yAxes: [{\n      scaleLabel: {\n        display: true,\n        fontSize: 20,\n        labelString: \"Blood Alcohol Concentration (g/ml)\"\n      },\n      gridLines: {\n        drawOnChartArea: false\n      },\n      ticks: {\n        min: 0,\n        max: 0.5,\n        stepSize: 0.04,\n        fontSize: 20,\n        callback: function callback(value) {\n          if (value === 0.16) {\n            return value;\n          }\n        }\n      }\n    }]\n  }\n};\nvar initialData = {\n  labels: [\"(time unknown)\", \"12:42 AM\", \"(time unknown)\", \"2:58 AM\", \"(time unknown)\", \"(time unknown)\"],\n  datasets: [{\n    data: [null, null, null, 0.16, null, null],\n    label: \"One measurement\",\n    backgroundColor: \"#78350F\",\n    showLine: false,\n    borderColor: \"#78350F\",\n    fill: false,\n    pointRadius: [0, 0, 0, 10, 0],\n    pointHoverBorderWidth: [0, 0, 0, 15, 0]\n  }]\n};\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioOneShown = _useState[0],\n      setScenarioOneShown = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioTwoShown = _useState2[0],\n      setScenarioTwoShown = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioThreeShown = _useState3[0],\n      setScenarioThreeShown = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialData),\n      data = _useState4[0],\n      setData = _useState4[1];\n\n  var applyScenarioOne = function applyScenarioOne() {\n    if (!scenarioOneShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioOne\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioOneShown(true);\n    }\n  };\n\n  var applyScenarioTwo = function applyScenarioTwo() {\n    if (!scenarioTwoShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioTwo\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioTwoShown(true);\n    }\n  };\n\n  var applyScenarioThree = function applyScenarioThree() {\n    if (!scenarioThreeShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioThree\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioThreeShown(true);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_templates_Main__WEBPACK_IMPORTED_MODULE_5__[\"Main\"], {\n    meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_layout_Meta__WEBPACK_IMPORTED_MODULE_4__[\"Meta\"], {\n      title: \"Cannon Demonstrative\",\n      description: \"The demonstrative for Dr. Robert Cannon - Gardner Consulting.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 9\n    }, _this),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"mx-16 my-10\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex w-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__[\"Line\"], {\n          data: data,\n          width: 600,\n          height: 300,\n          options: options\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 153,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 152,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex justify-center w-full mt-12 text-xl\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 py-2 font-semibold bg-transparent border rounded hover:text-white transition duration-300 ease-in-out  \" + (!scenarioOneShown ? \"opacity-25 text-green-700 border-green-500 hover:bg-green-500 hover:border-transparent\" : \"text-white bg-green-500 border-green-500 hover:border-transparent \"),\n          onClick: function onClick() {\n            return applyScenarioOne();\n          },\n          children: \"Scenario one\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 156,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"transition duration-300 ease-in-out px-4 py-2 mx-16 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioTwoShown ? \"opacity-25 text-blue-700 border-blue-500 hover:bg-blue-500 hover:border-transparent\" : \"text-white bg-blue-500 border-blue-500 hover:border-transparent \"),\n          onClick: function onClick() {\n            return applyScenarioTwo();\n          },\n          children: \"Scenario two\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 167,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"transition duration-300 ease-in-out px-4 py-2 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioThreeShown ? \"opacity-25 text-red-700 border-red-500 hover:bg-red-500 hover:border-transparent\" : \"text-white bg-red-500 border-red-500 hover:border-transparent \"),\n          onClick: function onClick() {\n            return applyScenarioThree();\n          },\n          children: \"Scenario three\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 178,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 155,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 143,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"lOjS2ksx/pKJuWWHuoJDqO7GIyw=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImxlZ2VuZCIsInBvc2l0aW9uIiwibGFiZWxzIiwiZm9udFNpemUiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwiZm9udEZhbWlseSIsImZvbnRDb2xvciIsImFubm90YXRpb24iLCJhbm5vdGF0aW9ucyIsInR5cGUiLCJtb2RlIiwic2NhbGVJRCIsInZhbHVlIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlckRhc2giLCJzaG93TGluZSIsImxhYmVsIiwiZW5hYmxlZCIsImNvbnRlbnQiLCJzY2FsZXMiLCJ4QXhlcyIsInNjYWxlTGFiZWwiLCJsYWJlbFN0cmluZyIsInRpY2tzIiwiY2FsbGJhY2siLCJ5QXhlcyIsImdyaWRMaW5lcyIsImRyYXdPbkNoYXJ0QXJlYSIsIm1pbiIsIm1heCIsInN0ZXBTaXplIiwiaW5pdGlhbERhdGEiLCJkYXRhc2V0cyIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsIiwicG9pbnRSYWRpdXMiLCJwb2ludEhvdmVyQm9yZGVyV2lkdGgiLCJJbmRleCIsInVzZVN0YXRlIiwic2NlbmFyaW9PbmVTaG93biIsInNldFNjZW5hcmlvT25lU2hvd24iLCJzY2VuYXJpb1R3b1Nob3duIiwic2V0U2NlbmFyaW9Ud29TaG93biIsInNjZW5hcmlvVGhyZWVTaG93biIsInNldFNjZW5hcmlvVGhyZWVTaG93biIsInNldERhdGEiLCJhcHBseVNjZW5hcmlvT25lIiwidXBkYXRlZERhdGFzZXRzIiwic2NlbmFyaW9PbmUiLCJhcHBseVNjZW5hcmlvVHdvIiwic2NlbmFyaW9Ud28iLCJhcHBseVNjZW5hcmlvVGhyZWUiLCJzY2VuYXJpb1RocmVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFD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QUFBO0FBQUEsaUJBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1ERCxDQWpGRDs7R0FBTWQsSzs7S0FBQUEsSztBQW1GU0Esb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgTWV0YSB9IGZyb20gXCIuLi9sYXlvdXQvTWV0YVwiO1xuaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuLi90ZW1wbGF0ZXMvTWFpblwiO1xuaW1wb3J0IHsgTGluZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCB7IHNjZW5hcmlvT25lLCBzY2VuYXJpb1R3bywgc2NlbmFyaW9UaHJlZSB9IGZyb20gXCIuLi91dGlscy9jaGFydEluZm9cIjtcbmltcG9ydCBcImNoYXJ0anMtcGx1Z2luLWFubm90YXRpb25cIjtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcblxuICBsZWdlbmQ6IHtcbiAgICBwb3NpdGlvbjogXCJyaWdodFwiLFxuICAgIGxhYmVsczoge1xuICAgICAgZm9udFNpemU6IDEyLFxuICAgIH0sXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZGlzcGxheTogdHJ1ZSxcbiAgICB0ZXh0OiBcIkJBQyBBbmFseXNpcyAtIFJvYmVydCBDYW5ub24gTS5ELlwiLFxuICAgIGZvbnRTaXplOiAyNixcbiAgICBmb250RmFtaWx5OiBcIidIZWx2ZXRpY2EnXCIsXG4gICAgZm9udENvbG9yOiBcIiMzNzQxNTFodHRwOi8vMTI3LjAuMC4xOjQwNDAgIFwiLFxuICB9LFxuICBhbm5vdGF0aW9uOiB7XG4gICAgYW5ub3RhdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICAgIG1vZGU6IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICBzY2FsZUlEOiBcInktYXhpcy0wXCIsXG4gICAgICAgIHZhbHVlOiAwLjE2LFxuICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIGJvcmRlckRhc2g6IFsxMCwgNV0sXG4gICAgICAgIHNob3dMaW5lOiBmYWxzZSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICBjb250ZW50OiBcIlRlc3QgbGFiZWxcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgc2NhbGVzOiB7XG4gICAgeEF4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiBcIktub3duIFRpbWVzIChBTSlcIixcbiAgICAgICAgfSxcblxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWU6IFN0cmluZykge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIjI6NTggQU1cIikge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgeUF4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiBcIkJsb29kIEFsY29ob2wgQ29uY2VudHJhdGlvbiAoZy9tbClcIixcbiAgICAgICAgfSxcbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgZHJhd09uQ2hhcnRBcmVhOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAwLjUsXG4gICAgICAgICAgc3RlcFNpemU6IDAuMDQsXG4gICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMC4xNikge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG5cbmNvbnN0IGluaXRpYWxEYXRhID0ge1xuICBsYWJlbHM6IFtcbiAgICBcIih0aW1lIHVua25vd24pXCIsXG4gICAgXCIxMjo0MiBBTVwiLFxuICAgIFwiKHRpbWUgdW5rbm93bilcIixcbiAgICBcIjI6NTggQU1cIixcbiAgICBcIih0aW1lIHVua25vd24pXCIsXG4gICAgXCIodGltZSB1bmtub3duKVwiLFxuICBdLFxuICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGRhdGE6IFtudWxsLCBudWxsLCBudWxsLCAwLjE2LCBudWxsLCBudWxsXSxcbiAgICAgIGxhYmVsOiBcIk9uZSBtZWFzdXJlbWVudFwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM3ODM1MEZcIixcbiAgICAgIHNob3dMaW5lOiBmYWxzZSxcbiAgICAgIGJvcmRlckNvbG9yOiBcIiM3ODM1MEZcIixcbiAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgcG9pbnRSYWRpdXM6IFswLCAwLCAwLCAxMCwgMF0sXG4gICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IFswLCAwLCAwLCAxNSwgMF0sXG4gICAgfSxcbiAgXSxcbn07XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbc2NlbmFyaW9PbmVTaG93biwgc2V0U2NlbmFyaW9PbmVTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY2VuYXJpb1R3b1Nob3duLCBzZXRTY2VuYXJpb1R3b1Nob3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NjZW5hcmlvVGhyZWVTaG93biwgc2V0U2NlbmFyaW9UaHJlZVNob3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbERhdGEpO1xuXG4gIGNvbnN0IGFwcGx5U2NlbmFyaW9PbmUgPSAoKSA9PiB7XG4gICAgaWYgKCFzY2VuYXJpb09uZVNob3duKSB7XG4gICAgICBsZXQgdXBkYXRlZERhdGFzZXRzID0gWy4uLmRhdGEuZGF0YXNldHMsIHNjZW5hcmlvT25lXTtcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBkYXRhc2V0czogdXBkYXRlZERhdGFzZXRzIH0pO1xuICAgICAgc2V0U2NlbmFyaW9PbmVTaG93bih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXBwbHlTY2VuYXJpb1R3byA9ICgpID0+IHtcbiAgICBpZiAoIXNjZW5hcmlvVHdvU2hvd24pIHtcbiAgICAgIGxldCB1cGRhdGVkRGF0YXNldHMgPSBbLi4uZGF0YS5kYXRhc2V0cywgc2NlbmFyaW9Ud29dO1xuICAgICAgc2V0RGF0YSh7IC4uLmRhdGEsIGRhdGFzZXRzOiB1cGRhdGVkRGF0YXNldHMgfSk7XG4gICAgICBzZXRTY2VuYXJpb1R3b1Nob3duKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhcHBseVNjZW5hcmlvVGhyZWUgPSAoKSA9PiB7XG4gICAgaWYgKCFzY2VuYXJpb1RocmVlU2hvd24pIHtcbiAgICAgIGxldCB1cGRhdGVkRGF0YXNldHMgPSBbLi4uZGF0YS5kYXRhc2V0cywgc2NlbmFyaW9UaHJlZV07XG4gICAgICBzZXREYXRhKHsgLi4uZGF0YSwgZGF0YXNldHM6IHVwZGF0ZWREYXRhc2V0cyB9KTtcbiAgICAgIHNldFNjZW5hcmlvVGhyZWVTaG93bih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TWFpblxuICAgICAgbWV0YT17XG4gICAgICAgIDxNZXRhXG4gICAgICAgICAgdGl0bGU9XCJDYW5ub24gRGVtb25zdHJhdGl2ZVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgZGVtb25zdHJhdGl2ZSBmb3IgRHIuIFJvYmVydCBDYW5ub24gLSBHYXJkbmVyIENvbnN1bHRpbmcuXCJcbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTE2IG15LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgICA8TGluZSBkYXRhPXtkYXRhfSB3aWR0aD17NjAwfSBoZWlnaHQ9ezMwMH0gb3B0aW9ucz17b3B0aW9uc30+PC9MaW5lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBtdC0xMiB0ZXh0LXhsXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJweC00IHB5LTIgZm9udC1zZW1pYm9sZCBiZy10cmFuc3BhcmVudCBib3JkZXIgcm91bmRlZCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICBcIiArXG4gICAgICAgICAgICAgICghc2NlbmFyaW9PbmVTaG93blxuICAgICAgICAgICAgICAgID8gXCJvcGFjaXR5LTI1IHRleHQtZ3JlZW4tNzAwIGJvcmRlci1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgOiBcInRleHQtd2hpdGUgYmctZ3JlZW4tNTAwIGJvcmRlci1ncmVlbi01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXBwbHlTY2VuYXJpb09uZSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNjZW5hcmlvIG9uZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIFwidHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgcHgtNCBweS0yIG14LTE2IGZvbnQtc2VtaWJvbGQgYmctdHJhbnNwYXJlbnQgYm9yZGVyIHJvdW5kZWQgaG92ZXI6dGV4dC13aGl0ZSAgXCIgK1xuICAgICAgICAgICAgICAoIXNjZW5hcmlvVHdvU2hvd25cbiAgICAgICAgICAgICAgICA/IFwib3BhY2l0eS0yNSB0ZXh0LWJsdWUtNzAwIGJvcmRlci1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgIDogXCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIGJvcmRlci1ibHVlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBseVNjZW5hcmlvVHdvKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2NlbmFyaW8gdHdvXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBweC00IHB5LTIgZm9udC1zZW1pYm9sZCBiZy10cmFuc3BhcmVudCBib3JkZXIgcm91bmRlZCBob3Zlcjp0ZXh0LXdoaXRlICBcIiArXG4gICAgICAgICAgICAgICghc2NlbmFyaW9UaHJlZVNob3duXG4gICAgICAgICAgICAgICAgPyBcIm9wYWNpdHktMjUgdGV4dC1yZWQtNzAwIGJvcmRlci1yZWQtNTAwIGhvdmVyOmJnLXJlZC01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICA6IFwidGV4dC13aGl0ZSBiZy1yZWQtNTAwIGJvcmRlci1yZWQtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCBcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGx5U2NlbmFyaW9UaHJlZSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNjZW5hcmlvIHRocmVlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9NYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})