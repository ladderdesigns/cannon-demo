webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Meta */ \"./src/layout/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Main */ \"./src/templates/Main.tsx\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/chartInfo */ \"./src/utils/chartInfo.ts\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chartjs-plugin-annotation */ \"./node_modules/chartjs-plugin-annotation/src/index.js\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar options = {\n  responsive: true,\n  maintainAspectRatio: true,\n  title: {\n    display: true,\n    text: \"BAC Analysis - Robert Cannon M.D.\",\n    fontSize: 26,\n    fontFamily: \"'Helvetica'\",\n    fontColor: \"#374151http://127.0.0.1:4040  \"\n  },\n  annotation: {\n    annotations: [{\n      type: \"line\",\n      mode: \"horizontal\",\n      scaleID: \"y-axis-0\",\n      value: 0.16,\n      borderColor: \"rgba(0, 0, 0, 0.1)\",\n      borderWidth: 1,\n      borderDash: [20, 5],\n      showLine: false,\n      label: {\n        enabled: false,\n        content: \"Test label\"\n      }\n    }]\n  },\n  scales: {\n    xAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Known Times (AM)\"\n      },\n      ticks: {\n        callback: function callback(value) {\n          if (value === \"2:58 AM\") {\n            return value;\n          }\n        }\n      }\n    }],\n    yAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Blood Alcohol Concentration (g/ml)\"\n      },\n      gridLines: {\n        drawOnChartArea: false\n      },\n      ticks: {\n        min: 0,\n        max: 0.5,\n        stepSize: 0.04,\n        callback: function callback(value) {\n          if (value === 0.16) {\n            return value;\n          }\n        }\n      }\n    }]\n  }\n};\nvar initialData = {\n  labels: [\"(time unknown)\", \"12:42 AM\", \"(time unknown)\", \"2:58 AM\", \"(time unknown)\", \"(time unknown)\"],\n  datasets: [{\n    data: [null, null, null, 0.16, null, null],\n    label: \"One measurement\",\n    backgroundColor: \"#78350F\",\n    showLine: false,\n    borderColor: \"#78350F\",\n    fill: false,\n    pointRadius: [0, 0, 0, 7, 0],\n    pointHoverBorderWidth: [0, 0, 0, 8, 0]\n  }]\n};\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioOneShown = _useState[0],\n      setScenarioOneShown = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioTwoShown = _useState2[0],\n      setScenarioTwoShown = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioThreeShown = _useState3[0],\n      setScenarioThreeShown = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialData),\n      data = _useState4[0],\n      setData = _useState4[1];\n\n  var applyScenarioOne = function applyScenarioOne() {\n    if (!scenarioOneShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioOne\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioOneShown(true);\n    }\n  };\n\n  var applyScenarioTwo = function applyScenarioTwo() {\n    if (!scenarioTwoShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioTwo\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioTwoShown(true);\n    }\n  };\n\n  var applyScenarioThree = function applyScenarioThree() {\n    if (!scenarioThreeShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioThree\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioThreeShown(true);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_templates_Main__WEBPACK_IMPORTED_MODULE_5__[\"Main\"], {\n    meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_layout_Meta__WEBPACK_IMPORTED_MODULE_4__[\"Meta\"], {\n      title: \"Cannon Demonstrative\",\n      description: \"The demonstrative for Dr. Robert Cannon - Gardner Consulting.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 9\n    }, _this),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"mx-16 my-10\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex w-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__[\"Line\"], {\n          data: data,\n          width: 600,\n          height: 280,\n          options: options\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex justify-center w-full mt-12\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 py-2 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioOneShown ? \"opacity-25 text-green-700 border-green-500 hover:bg-green-500 hover:border-transparent\" : \"text-white bg-green-500 border-green-500 hover:border-transparent \"),\n          onClick: function onClick() {\n            return applyScenarioOne();\n          },\n          children: \"Scenario one\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 146,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 py-2 mx-16 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioTwoShown ? \"opacity-25 text-blue-700 border-blue-500 hover:bg-blue-500 hover:border-transparent\" : \"text-white bg-blue-500 border-blue-500 hover:border-transparent \"),\n          onClick: function onClick() {\n            return applyScenarioTwo();\n          },\n          children: \"Scenario two\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 py-2 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioThreeShown ? \"opacity-25 text-red-700 border-red-500 hover:bg-red-500 hover:border-transparent\" : \"text-white bg-red-500 border-red-500 hover:border-transparent \"),\n          onClick: function onClick() {\n            return applyScenarioThree();\n          },\n          children: \"Scenario three\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 168,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 133,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"lOjS2ksx/pKJuWWHuoJDqO7GIyw=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJmb250Q29sb3IiLCJhbm5vdGF0aW9uIiwiYW5ub3RhdGlvbnMiLCJ0eXBlIiwibW9kZSIsInNjYWxlSUQiLCJ2YWx1ZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJEYXNoIiwic2hvd0xpbmUiLCJsYWJlbCIsImVuYWJsZWQiLCJjb250ZW50Iiwic2NhbGVzIiwieEF4ZXMiLCJzY2FsZUxhYmVsIiwibGFiZWxTdHJpbmciLCJ0aWNrcyIsImNhbGxiYWNrIiwieUF4ZXMiLCJncmlkTGluZXMiLCJkcmF3T25DaGFydEFyZWEiLCJtaW4iLCJtYXgiLCJzdGVwU2l6ZSIsImluaXRpYWxEYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbCIsInBvaW50UmFkaXVzIiwicG9pbnRIb3ZlckJvcmRlcldpZHRoIiwiSW5kZXgiLCJ1c2VTdGF0ZSIsInNjZW5hcmlvT25lU2hvd24iLCJzZXRTY2VuYXJpb09uZVNob3duIiwic2NlbmFyaW9Ud29TaG93biIsInNldFNjZW5hcmlvVHdvU2hvd24iLCJzY2VuYXJpb1RocmVlU2hvd24iLCJzZXRTY2VuYXJpb1RocmVlU2hvd24iLCJzZXREYXRhIiwiYXBwbHlTY2VuYXJpb09uZSIsInVwZGF0ZWREYXRhc2V0cyIsInNjZW5hcmlvT25lIiwiYXBwbHlTY2VuYXJpb1R3byIsInNjZW5hcmlvVHdvIiwiYXBwbHlTY2VuYXJpb1RocmVlIiwic2NlbmFyaW9UaHJlZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFF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bXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBNZXRhIH0gZnJvbSBcIi4uL2xheW91dC9NZXRhXCI7XG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4uL3RlbXBsYXRlcy9NYWluXCI7XG5pbXBvcnQgeyBMaW5lIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuaW1wb3J0IHsgc2NlbmFyaW9PbmUsIHNjZW5hcmlvVHdvLCBzY2VuYXJpb1RocmVlIH0gZnJvbSBcIi4uL3V0aWxzL2NoYXJ0SW5mb1wiO1xuaW1wb3J0IFwiY2hhcnRqcy1wbHVnaW4tYW5ub3RhdGlvblwiO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICByZXNwb25zaXZlOiB0cnVlLFxuICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxuXG4gIHRpdGxlOiB7XG4gICAgZGlzcGxheTogdHJ1ZSxcbiAgICB0ZXh0OiBcIkJBQyBBbmFseXNpcyAtIFJvYmVydCBDYW5ub24gTS5ELlwiLFxuICAgIGZvbnRTaXplOiAyNixcbiAgICBmb250RmFtaWx5OiBcIidIZWx2ZXRpY2EnXCIsXG4gICAgZm9udENvbG9yOiBcIiMzNzQxNTFodHRwOi8vMTI3LjAuMC4xOjQwNDAgIFwiLFxuICB9LFxuICBhbm5vdGF0aW9uOiB7XG4gICAgYW5ub3RhdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICAgIG1vZGU6IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICBzY2FsZUlEOiBcInktYXhpcy0wXCIsXG4gICAgICAgIHZhbHVlOiAwLjE2LFxuICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgIGJvcmRlckRhc2g6IFsyMCwgNV0sXG4gICAgICAgIHNob3dMaW5lOiBmYWxzZSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICBjb250ZW50OiBcIlRlc3QgbGFiZWxcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgc2NhbGVzOiB7XG4gICAgeEF4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgbGFiZWxTdHJpbmc6IFwiS25vd24gVGltZXMgKEFNKVwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZTogU3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiMjo1OCBBTVwiKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIHlBeGVzOiBbXG4gICAgICB7XG4gICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiBcIkJsb29kIEFsY29ob2wgQ29uY2VudHJhdGlvbiAoZy9tbClcIixcbiAgICAgICAgfSxcbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgZHJhd09uQ2hhcnRBcmVhOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiAwLjUsXG4gICAgICAgICAgc3RlcFNpemU6IDAuMDQsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAwLjE2KSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufTtcblxuY29uc3QgaW5pdGlhbERhdGEgPSB7XG4gIGxhYmVsczogW1xuICAgIFwiKHRpbWUgdW5rbm93bilcIixcbiAgICBcIjEyOjQyIEFNXCIsXG4gICAgXCIodGltZSB1bmtub3duKVwiLFxuICAgIFwiMjo1OCBBTVwiLFxuICAgIFwiKHRpbWUgdW5rbm93bilcIixcbiAgICBcIih0aW1lIHVua25vd24pXCIsXG4gIF0sXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgZGF0YTogW251bGwsIG51bGwsIG51bGwsIDAuMTYsIG51bGwsIG51bGxdLFxuICAgICAgbGFiZWw6IFwiT25lIG1lYXN1cmVtZW50XCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzc4MzUwRlwiLFxuICAgICAgc2hvd0xpbmU6IGZhbHNlLFxuICAgICAgYm9yZGVyQ29sb3I6IFwiIzc4MzUwRlwiLFxuICAgICAgZmlsbDogZmFsc2UsXG4gICAgICBwb2ludFJhZGl1czogWzAsIDAsIDAsIDcsIDBdLFxuICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiBbMCwgMCwgMCwgOCwgMF0sXG4gICAgfSxcbiAgXSxcbn07XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbc2NlbmFyaW9PbmVTaG93biwgc2V0U2NlbmFyaW9PbmVTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY2VuYXJpb1R3b1Nob3duLCBzZXRTY2VuYXJpb1R3b1Nob3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NjZW5hcmlvVGhyZWVTaG93biwgc2V0U2NlbmFyaW9UaHJlZVNob3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbERhdGEpO1xuXG4gIGNvbnN0IGFwcGx5U2NlbmFyaW9PbmUgPSAoKSA9PiB7XG4gICAgaWYgKCFzY2VuYXJpb09uZVNob3duKSB7XG4gICAgICBsZXQgdXBkYXRlZERhdGFzZXRzID0gWy4uLmRhdGEuZGF0YXNldHMsIHNjZW5hcmlvT25lXTtcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBkYXRhc2V0czogdXBkYXRlZERhdGFzZXRzIH0pO1xuICAgICAgc2V0U2NlbmFyaW9PbmVTaG93bih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXBwbHlTY2VuYXJpb1R3byA9ICgpID0+IHtcbiAgICBpZiAoIXNjZW5hcmlvVHdvU2hvd24pIHtcbiAgICAgIGxldCB1cGRhdGVkRGF0YXNldHMgPSBbLi4uZGF0YS5kYXRhc2V0cywgc2NlbmFyaW9Ud29dO1xuICAgICAgc2V0RGF0YSh7IC4uLmRhdGEsIGRhdGFzZXRzOiB1cGRhdGVkRGF0YXNldHMgfSk7XG4gICAgICBzZXRTY2VuYXJpb1R3b1Nob3duKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhcHBseVNjZW5hcmlvVGhyZWUgPSAoKSA9PiB7XG4gICAgaWYgKCFzY2VuYXJpb1RocmVlU2hvd24pIHtcbiAgICAgIGxldCB1cGRhdGVkRGF0YXNldHMgPSBbLi4uZGF0YS5kYXRhc2V0cywgc2NlbmFyaW9UaHJlZV07XG4gICAgICBzZXREYXRhKHsgLi4uZGF0YSwgZGF0YXNldHM6IHVwZGF0ZWREYXRhc2V0cyB9KTtcbiAgICAgIHNldFNjZW5hcmlvVGhyZWVTaG93bih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TWFpblxuICAgICAgbWV0YT17XG4gICAgICAgIDxNZXRhXG4gICAgICAgICAgdGl0bGU9XCJDYW5ub24gRGVtb25zdHJhdGl2ZVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgZGVtb25zdHJhdGl2ZSBmb3IgRHIuIFJvYmVydCBDYW5ub24gLSBHYXJkbmVyIENvbnN1bHRpbmcuXCJcbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTE2IG15LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgICA8TGluZSBkYXRhPXtkYXRhfSB3aWR0aD17NjAwfSBoZWlnaHQ9ezI4MH0gb3B0aW9ucz17b3B0aW9uc30+PC9MaW5lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBtdC0xMlwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIFwicHgtNCBweS0yIGZvbnQtc2VtaWJvbGQgYmctdHJhbnNwYXJlbnQgYm9yZGVyIHJvdW5kZWQgaG92ZXI6dGV4dC13aGl0ZSAgXCIgK1xuICAgICAgICAgICAgICAoIXNjZW5hcmlvT25lU2hvd25cbiAgICAgICAgICAgICAgICA/IFwib3BhY2l0eS0yNSB0ZXh0LWdyZWVuLTcwMCBib3JkZXItZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgIDogXCJ0ZXh0LXdoaXRlIGJnLWdyZWVuLTUwMCBib3JkZXItZ3JlZW4tNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCBcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGx5U2NlbmFyaW9PbmUoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTY2VuYXJpbyBvbmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcInB4LTQgcHktMiBteC0xNiBmb250LXNlbWlib2xkIGJnLXRyYW5zcGFyZW50IGJvcmRlciByb3VuZGVkIGhvdmVyOnRleHQtd2hpdGUgIFwiICtcbiAgICAgICAgICAgICAgKCFzY2VuYXJpb1R3b1Nob3duXG4gICAgICAgICAgICAgICAgPyBcIm9wYWNpdHktMjUgdGV4dC1ibHVlLTcwMCBib3JkZXItYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICA6IFwidGV4dC13aGl0ZSBiZy1ibHVlLTUwMCBib3JkZXItYmx1ZS01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXBwbHlTY2VuYXJpb1R3bygpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNjZW5hcmlvIHR3b1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIFwicHgtNCBweS0yIGZvbnQtc2VtaWJvbGQgYmctdHJhbnNwYXJlbnQgYm9yZGVyIHJvdW5kZWQgaG92ZXI6dGV4dC13aGl0ZSAgXCIgK1xuICAgICAgICAgICAgICAoIXNjZW5hcmlvVGhyZWVTaG93blxuICAgICAgICAgICAgICAgID8gXCJvcGFjaXR5LTI1IHRleHQtcmVkLTcwMCBib3JkZXItcmVkLTUwMCBob3ZlcjpiZy1yZWQtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgOiBcInRleHQtd2hpdGUgYmctcmVkLTUwMCBib3JkZXItcmVkLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBseVNjZW5hcmlvVGhyZWUoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTY2VuYXJpbyB0aHJlZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})