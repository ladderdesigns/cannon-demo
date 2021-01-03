webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Meta */ \"./src/layout/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Main */ \"./src/templates/Main.tsx\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/chartInfo */ \"./src/utils/chartInfo.ts\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chartjs-plugin-annotation */ \"./node_modules/chartjs-plugin-annotation/src/index.js\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar options = {\n  responsive: true,\n  maintainAspectRatio: true,\n  legend: {\n    position: \"right\",\n    labels: {\n      fontSize: 16\n    }\n  },\n  title: {\n    display: true,\n    text: \"BAC Analysis - Robert Cannon M.D.\",\n    fontSize: 26,\n    fontFamily: \"'Helvetica'\",\n    fontColor: \"#374151http://127.0.0.1:4040  \"\n  },\n  annotation: {\n    annotations: [{\n      type: \"line\",\n      mode: \"horizontal\",\n      scaleID: \"y-axis-0\",\n      value: 0.16,\n      borderColor: \"rgba(0, 0, 0, 0.1)\",\n      borderWidth: 1,\n      borderDash: [10, 5],\n      showLine: false,\n      label: {\n        enabled: false,\n        content: \"Test label\"\n      }\n    }]\n  },\n  scales: {\n    xAxes: [{\n      scaleLabel: {\n        display: true,\n        fontSize: 20,\n        labelString: \"Known Times (AM)\"\n      },\n      ticks: {\n        callback: function callback(value) {\n          if (value === \"2:58 AM\") {\n            return value;\n          }\n        },\n        fontSize: 20\n      }\n    }],\n    yAxes: [{\n      scaleLabel: {\n        display: true,\n        fontSize: 20,\n        labelString: \"Blood Alcohol Concentration (g/ml)\"\n      },\n      gridLines: {\n        drawOnChartArea: false\n      },\n      ticks: {\n        min: 0,\n        max: 0.5,\n        stepSize: 0.04,\n        fontSize: 20,\n        callback: function callback(value) {\n          if (value === 0.16) {\n            return value;\n          }\n        }\n      }\n    }]\n  }\n};\nvar initialData = {\n  labels: [\"(time unknown)\", \"12:42 AM\", \"(time unknown)\", \"2:58 AM\", \"(time unknown)\", \"(time unknown)\"],\n  datasets: [{\n    data: [null, null, null, 0.16, null, null],\n    label: \"One measurement\",\n    backgroundColor: \"#78350F\",\n    showLine: false,\n    borderColor: \"#78350F\",\n    fill: false,\n    pointRadius: [0, 0, 0, 10, 0],\n    pointHoverBorderWidth: [0, 0, 0, 15, 0]\n  }]\n};\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioOneShown = _useState[0],\n      setScenarioOneShown = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioTwoShown = _useState2[0],\n      setScenarioTwoShown = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioThreeShown = _useState3[0],\n      setScenarioThreeShown = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialData),\n      data = _useState4[0],\n      setData = _useState4[1];\n\n  var applyScenarioOne = function applyScenarioOne() {\n    if (!scenarioOneShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioOne\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioOneShown(true);\n    }\n  };\n\n  var applyScenarioTwo = function applyScenarioTwo() {\n    if (!scenarioTwoShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioTwo\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioTwoShown(true);\n    }\n  };\n\n  var applyScenarioThree = function applyScenarioThree() {\n    if (!scenarioThreeShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioThree\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioThreeShown(true);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: \"h-screen \",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_templates_Main__WEBPACK_IMPORTED_MODULE_5__[\"Main\"], {\n      meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_layout_Meta__WEBPACK_IMPORTED_MODULE_4__[\"Meta\"], {\n        title: \"Cannon Demonstrative\",\n        description: \"The demonstrative for Dr. Robert Cannon - Gardner Consulting.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 146,\n        columnNumber: 11\n      }, _this),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"mx-8 mt-10\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"flex w-full\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__[\"Line\"], {\n            data: data,\n            width: 600,\n            height: 300,\n            options: options\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 154,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 153,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"flex justify-center w-full mt-6 text-xl\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            className: \"px-4 py-2 font-semibold bg-transparent border rounded hover:text-white transition duration-300 ease-in-out  \" + (!scenarioOneShown ? \"opacity-25 text-green-700 border-green-500 hover:bg-green-500 hover:border-transparent\" : \"text-white bg-green-500 border-green-500 hover:border-transparent \"),\n            onClick: function onClick() {\n              return applyScenarioOne();\n            },\n            children: \"Scenario one\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 157,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            className: \"transition duration-300 ease-in-out px-4 py-2 mx-16 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioTwoShown ? \"opacity-25 text-blue-700 border-blue-500 hover:bg-blue-500 hover:border-transparent\" : \"text-white bg-blue-500 border-blue-500 hover:border-transparent \"),\n            onClick: function onClick() {\n              return applyScenarioTwo();\n            },\n            children: \"Scenario two\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 168,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            className: \"transition duration-300 ease-in-out px-4 py-2 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioThreeShown ? \"opacity-25 text-red-700 border-red-500 hover:bg-red-500 hover:border-transparent\" : \"text-white bg-red-500 border-red-500 hover:border-transparent \"),\n            onClick: function onClick() {\n              return applyScenarioThree();\n            },\n            children: \"Scenario three\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 179,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 156,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 152,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 143,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"lOjS2ksx/pKJuWWHuoJDqO7GIyw=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImxlZ2VuZCIsInBvc2l0aW9uIiwibGFiZWxzIiwiZm9udFNpemUiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwiZm9udEZhbWlseSIsImZvbnRDb2xvciIsImFubm90YXRpb24iLCJhbm5vdGF0aW9ucyIsInR5cGUiLCJtb2RlIiwic2NhbGVJRCIsInZhbHVlIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlckRhc2giLCJzaG93TGluZSIsImxhYmVsIiwiZW5hYmxlZCIsImNvbnRlbnQiLCJzY2FsZXMiLCJ4QXhlcyIsInNjYWxlTGFiZWwiLCJsYWJlbFN0cmluZyIsInRpY2tzIiwiY2FsbGJhY2siLCJ5QXhlcyIsImdyaWRMaW5lcyIsImRyYXdPbkNoYXJ0QXJlYSIsIm1pbiIsIm1heCIsInN0ZXBTaXplIiwiaW5pdGlhbERhdGEiLCJkYXRhc2V0cyIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWxsIiwicG9pbnRSYWRpdXMiLCJwb2ludEhvdmVyQm9yZGVyV2lkdGgiLCJJbmRleCIsInVzZVN0YXRlIiwic2NlbmFyaW9PbmVTaG93biIsInNldFNjZW5hcmlvT25lU2hvd24iLCJzY2VuYXJpb1R3b1Nob3duIiwic2V0U2NlbmFyaW9Ud29TaG93biIsInNjZW5hcmlvVGhyZWVTaG93biIsInNldFNjZW5hcmlvVGhyZWVTaG93biIsInNldERhdGEiLCJhcHBseVNjZW5hcmlvT25lIiwidXBkYXRlZERhdGFzZXRzIiwic2NlbmFyaW9PbmUiLCJhcHBseVNjZW5hcmlvVHdvIiwic2NlbmFyaW9Ud28iLCJhcHBseVNjZW5hcmlvVGhyZWUiLCJzY2VuYXJpb1RocmVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFD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QXhCO0FBQUEsYUFQWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxREQsQ0FuRkQ7O0dBQU1kLEs7O0tBQUFBLEs7QUFxRlNBLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IE1ldGEgfSBmcm9tIFwiLi4vbGF5b3V0L01ldGFcIjtcbmltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi4vdGVtcGxhdGVzL01haW5cIjtcbmltcG9ydCB7IExpbmUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5pbXBvcnQgeyBzY2VuYXJpb09uZSwgc2NlbmFyaW9Ud28sIHNjZW5hcmlvVGhyZWUgfSBmcm9tIFwiLi4vdXRpbHMvY2hhcnRJbmZvXCI7XG5pbXBvcnQgXCJjaGFydGpzLXBsdWdpbi1hbm5vdGF0aW9uXCI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHJlc3BvbnNpdmU6IHRydWUsXG4gIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXG5cbiAgbGVnZW5kOiB7XG4gICAgcG9zaXRpb246IFwicmlnaHRcIixcbiAgICBsYWJlbHM6IHtcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICB9LFxuICB9LFxuICB0aXRsZToge1xuICAgIGRpc3BsYXk6IHRydWUsXG4gICAgdGV4dDogXCJCQUMgQW5hbHlzaXMgLSBSb2JlcnQgQ2Fubm9uIE0uRC5cIixcbiAgICBmb250U2l6ZTogMjYsXG4gICAgZm9udEZhbWlseTogXCInSGVsdmV0aWNhJ1wiLFxuICAgIGZvbnRDb2xvcjogXCIjMzc0MTUxaHR0cDovLzEyNy4wLjAuMTo0MDQwICBcIixcbiAgfSxcbiAgYW5ub3RhdGlvbjoge1xuICAgIGFubm90YXRpb25zOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwibGluZVwiLFxuICAgICAgICBtb2RlOiBcImhvcml6b250YWxcIixcbiAgICAgICAgc2NhbGVJRDogXCJ5LWF4aXMtMFwiLFxuICAgICAgICB2YWx1ZTogMC4xNixcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjEpXCIsXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICBib3JkZXJEYXNoOiBbMTAsIDVdLFxuICAgICAgICBzaG93TGluZTogZmFsc2UsXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgY29udGVudDogXCJUZXN0IGxhYmVsXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHNjYWxlczoge1xuICAgIHhBeGVzOiBbXG4gICAgICB7XG4gICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgICBsYWJlbFN0cmluZzogXCJLbm93biBUaW1lcyAoQU0pXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlOiBTdHJpbmcpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCIyOjU4IEFNXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIHlBeGVzOiBbXG4gICAgICB7XG4gICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgICBsYWJlbFN0cmluZzogXCJCbG9vZCBBbGNvaG9sIENvbmNlbnRyYXRpb24gKGcvbWwpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgIGRyYXdPbkNoYXJ0QXJlYTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogMC41LFxuICAgICAgICAgIHN0ZXBTaXplOiAwLjA0LFxuICAgICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDAuMTYpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59O1xuXG5jb25zdCBpbml0aWFsRGF0YSA9IHtcbiAgbGFiZWxzOiBbXG4gICAgXCIodGltZSB1bmtub3duKVwiLFxuICAgIFwiMTI6NDIgQU1cIixcbiAgICBcIih0aW1lIHVua25vd24pXCIsXG4gICAgXCIyOjU4IEFNXCIsXG4gICAgXCIodGltZSB1bmtub3duKVwiLFxuICAgIFwiKHRpbWUgdW5rbm93bilcIixcbiAgXSxcbiAgZGF0YXNldHM6IFtcbiAgICB7XG4gICAgICBkYXRhOiBbbnVsbCwgbnVsbCwgbnVsbCwgMC4xNiwgbnVsbCwgbnVsbF0sXG4gICAgICBsYWJlbDogXCJPbmUgbWVhc3VyZW1lbnRcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNzgzNTBGXCIsXG4gICAgICBzaG93TGluZTogZmFsc2UsXG4gICAgICBib3JkZXJDb2xvcjogXCIjNzgzNTBGXCIsXG4gICAgICBmaWxsOiBmYWxzZSxcbiAgICAgIHBvaW50UmFkaXVzOiBbMCwgMCwgMCwgMTAsIDBdLFxuICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiBbMCwgMCwgMCwgMTUsIDBdLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW3NjZW5hcmlvT25lU2hvd24sIHNldFNjZW5hcmlvT25lU2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2NlbmFyaW9Ud29TaG93biwgc2V0U2NlbmFyaW9Ud29TaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY2VuYXJpb1RocmVlU2hvd24sIHNldFNjZW5hcmlvVGhyZWVTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcblxuICBjb25zdCBhcHBseVNjZW5hcmlvT25lID0gKCkgPT4ge1xuICAgIGlmICghc2NlbmFyaW9PbmVTaG93bikge1xuICAgICAgbGV0IHVwZGF0ZWREYXRhc2V0cyA9IFsuLi5kYXRhLmRhdGFzZXRzLCBzY2VuYXJpb09uZV07XG4gICAgICBzZXREYXRhKHsgLi4uZGF0YSwgZGF0YXNldHM6IHVwZGF0ZWREYXRhc2V0cyB9KTtcbiAgICAgIHNldFNjZW5hcmlvT25lU2hvd24odHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFwcGx5U2NlbmFyaW9Ud28gPSAoKSA9PiB7XG4gICAgaWYgKCFzY2VuYXJpb1R3b1Nob3duKSB7XG4gICAgICBsZXQgdXBkYXRlZERhdGFzZXRzID0gWy4uLmRhdGEuZGF0YXNldHMsIHNjZW5hcmlvVHdvXTtcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBkYXRhc2V0czogdXBkYXRlZERhdGFzZXRzIH0pO1xuICAgICAgc2V0U2NlbmFyaW9Ud29TaG93bih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXBwbHlTY2VuYXJpb1RocmVlID0gKCkgPT4ge1xuICAgIGlmICghc2NlbmFyaW9UaHJlZVNob3duKSB7XG4gICAgICBsZXQgdXBkYXRlZERhdGFzZXRzID0gWy4uLmRhdGEuZGF0YXNldHMsIHNjZW5hcmlvVGhyZWVdO1xuICAgICAgc2V0RGF0YSh7IC4uLmRhdGEsIGRhdGFzZXRzOiB1cGRhdGVkRGF0YXNldHMgfSk7XG4gICAgICBzZXRTY2VuYXJpb1RocmVlU2hvd24odHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBcIj5cbiAgICAgIDxNYWluXG4gICAgICAgIG1ldGE9e1xuICAgICAgICAgIDxNZXRhXG4gICAgICAgICAgICB0aXRsZT1cIkNhbm5vbiBEZW1vbnN0cmF0aXZlXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIGRlbW9uc3RyYXRpdmUgZm9yIERyLiBSb2JlcnQgQ2Fubm9uIC0gR2FyZG5lciBDb25zdWx0aW5nLlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTggbXQtMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsXCI+XG4gICAgICAgICAgICA8TGluZSBkYXRhPXtkYXRhfSB3aWR0aD17NjAwfSBoZWlnaHQ9ezMwMH0gb3B0aW9ucz17b3B0aW9uc30+PC9MaW5lPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbXQtNiB0ZXh0LXhsXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgXCJweC00IHB5LTIgZm9udC1zZW1pYm9sZCBiZy10cmFuc3BhcmVudCBib3JkZXIgcm91bmRlZCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICBcIiArXG4gICAgICAgICAgICAgICAgKCFzY2VuYXJpb09uZVNob3duXG4gICAgICAgICAgICAgICAgICA/IFwib3BhY2l0eS0yNSB0ZXh0LWdyZWVuLTcwMCBib3JkZXItZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgOiBcInRleHQtd2hpdGUgYmctZ3JlZW4tNTAwIGJvcmRlci1ncmVlbi01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IFwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGx5U2NlbmFyaW9PbmUoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2NlbmFyaW8gb25lXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IHB4LTQgcHktMiBteC0xNiBmb250LXNlbWlib2xkIGJnLXRyYW5zcGFyZW50IGJvcmRlciByb3VuZGVkIGhvdmVyOnRleHQtd2hpdGUgIFwiICtcbiAgICAgICAgICAgICAgICAoIXNjZW5hcmlvVHdvU2hvd25cbiAgICAgICAgICAgICAgICAgID8gXCJvcGFjaXR5LTI1IHRleHQtYmx1ZS03MDAgYm9yZGVyLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICA6IFwidGV4dC13aGl0ZSBiZy1ibHVlLTUwMCBib3JkZXItYmx1ZS01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IFwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGx5U2NlbmFyaW9Ud28oKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2NlbmFyaW8gdHdvXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IHB4LTQgcHktMiBmb250LXNlbWlib2xkIGJnLXRyYW5zcGFyZW50IGJvcmRlciByb3VuZGVkIGhvdmVyOnRleHQtd2hpdGUgIFwiICtcbiAgICAgICAgICAgICAgICAoIXNjZW5hcmlvVGhyZWVTaG93blxuICAgICAgICAgICAgICAgICAgPyBcIm9wYWNpdHktMjUgdGV4dC1yZWQtNzAwIGJvcmRlci1yZWQtNTAwIGhvdmVyOmJnLXJlZC01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LXdoaXRlIGJnLXJlZC01MDAgYm9yZGVyLXJlZC01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IFwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGx5U2NlbmFyaW9UaHJlZSgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTY2VuYXJpbyB0aHJlZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NYWluPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})