webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Meta */ \"./src/layout/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Main */ \"./src/templates/Main.tsx\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/chartInfo */ \"./src/utils/chartInfo.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar options = {\n  responsive: true,\n  maintainAspectRatio: true,\n  annotation: {\n    annotations: [{\n      type: \"line\",\n      mode: \"horizontal\",\n      scaleID: \"y-axis-0\",\n      value: 0.1,\n      borderColor: \"rgb(75, 192, 192)\",\n      borderWidth: 4,\n      label: {\n        enabled: true,\n        content: \"Test label\"\n      }\n    }]\n  },\n  title: {\n    display: true,\n    text: \"BAC Analysis - Robert Cannon M.D.\",\n    fontSize: 26,\n    fontFamily: \"'Helvetica'\",\n    fontColor: \"#374151http://127.0.0.1:4040  \"\n  },\n  scales: {\n    xAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Known Times (AM)\"\n      },\n      ticks: {\n        callback: function callback(value, index, values) {\n          if (value === \"2:58 AM\") {\n            return value;\n          }\n        }\n      }\n    }],\n    yAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Blood Alcohol Concentration (g/ml)\"\n      },\n      ticks: {\n        callback: function callback(value, index, values) {\n          if (value === 0.16) {\n            return value;\n          }\n        }\n      }\n    }]\n  }\n};\nvar initialData = {\n  labels: [\"(time unknown)\", \"12:42 AM\", \"(time unknown)\", \"2:58 AM\", \"(time unknown)\", \"(time unknown)\"],\n  datasets: [{\n    data: [null, null, null, 0.16, null, null],\n    label: \"One measurement\",\n    backgroundColor: \"#78350F\",\n    borderColor: \"#78350F\",\n    fill: false,\n    pointRadius: [0, 0, 0, 7, 0],\n    pointHoverBorderWidth: [0, 0, 0, 8, 0]\n  }]\n};\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioOneShown = _useState[0],\n      setScenarioOneShown = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioTwoShown = _useState2[0],\n      setScenarioTwoShown = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioThreeShown = _useState3[0],\n      setScenarioThreeShown = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialData),\n      data = _useState4[0],\n      setData = _useState4[1];\n\n  var applyScenarioOne = function applyScenarioOne() {\n    if (!scenarioOneShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioOne\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioOneShown(true);\n    }\n  };\n\n  var applyScenarioTwo = function applyScenarioTwo() {\n    if (!scenarioTwoShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioTwo\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioTwoShown(true);\n    }\n  };\n\n  var applyScenarioThree = function applyScenarioThree() {\n    if (!scenarioThreeShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioThree\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioThreeShown(true);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_templates_Main__WEBPACK_IMPORTED_MODULE_5__[\"Main\"], {\n    meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_layout_Meta__WEBPACK_IMPORTED_MODULE_4__[\"Meta\"], {\n      title: \"Cannon Demonstrative\",\n      description: \"The demonstrative for Dr. Robert Cannon - Gardner Consulting.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }, _this),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"mx-16 my-10\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex w-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__[\"Line\"], {\n          data: data,\n          width: 600,\n          height: 280,\n          options: options\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex justify-center w-full mt-12\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 py-2 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioOneShown ? \"opacity-25 text-green-700 border-green-500 hover:bg-green-500 hover:border-transparent\" : \"text-white bg-green-500 border-green-500 hover:border-transparent \"),\n          onClick: function onClick() {\n            return applyScenarioOne();\n          },\n          children: \"Scenario one\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 py-2 mx-16 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioTwoShown ? \"opacity-25 text-blue-700 border-blue-500 hover:bg-blue-500 hover:border-transparent\" : \"text-white bg-blue-500 border-blue-500 hover:border-transparent \"),\n          onClick: function onClick() {\n            return applyScenarioTwo();\n          },\n          children: \"Scenario two\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 py-2 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioThreeShown ? \"opacity-25 text-red-700 border-red-500 hover:bg-red-500 hover:border-transparent\" : \"text-white bg-red-500 border-red-500 hover:border-transparent \"),\n          onClick: function onClick() {\n            return applyScenarioThree();\n          },\n          children: \"Scenario three\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 156,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 121,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"lOjS2ksx/pKJuWWHuoJDqO7GIyw=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImFubm90YXRpb24iLCJhbm5vdGF0aW9ucyIsInR5cGUiLCJtb2RlIiwic2NhbGVJRCIsInZhbHVlIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImxhYmVsIiwiZW5hYmxlZCIsImNvbnRlbnQiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiZm9udENvbG9yIiwic2NhbGVzIiwieEF4ZXMiLCJzY2FsZUxhYmVsIiwibGFiZWxTdHJpbmciLCJ0aWNrcyIsImNhbGxiYWNrIiwiaW5kZXgiLCJ2YWx1ZXMiLCJ5QXhlcyIsImluaXRpYWxEYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbCIsInBvaW50UmFkaXVzIiwicG9pbnRIb3ZlckJvcmRlcldpZHRoIiwiSW5kZXgiLCJ1c2VTdGF0ZSIsInNjZW5hcmlvT25lU2hvd24iLCJzZXRTY2VuYXJpb09uZVNob3duIiwic2NlbmFyaW9Ud29TaG93biIsInNldFNjZW5hcmlvVHdvU2hvd24iLCJzY2VuYXJpb1RocmVlU2hvd24iLCJzZXRTY2VuYXJpb1RocmVlU2hvd24iLCJzZXREYXRhIiwiYXBwbHlTY2VuYXJpb09uZSIsInVwZGF0ZWREYXRhc2V0cyIsInNjZW5hcmlvT25lIiwiYXBwbHlTY2VuYXJpb1R3byIsInNjZW5hcmlvVHdvIiwiYXBwbHlTY2VuYXJpb1RocmVlIiwic2NlbmFyaW9UaHJlZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNkQyxZQUFVLEVBQUUsSUFERTtBQUVkQyxxQkFBbUIsRUFBRSxJQUZQO0FBR2RD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O0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUMsa0NBQWY7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQ1AsOEVBQ0MsQ0FBQ3VDLGdCQUFELEdBQ0csd0ZBREgsR0FFRyxvRUFISixDQUZKO0FBT0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNTyxnQkFBZ0IsRUFBdEI7QUFBQSxXQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBWUU7QUFDRSxtQkFBUyxFQUNQLG9GQUNDLENBQUNMLGdCQUFELEdBQ0cscUZBREgsR0FFRyxrRUFISixDQUZKO0FBT0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNUSxnQkFBZ0IsRUFBdEI7QUFBQSxXQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBdUJFO0FBQ0UsbUJBQVMsRUFDUCw4RUFDQyxDQUFDTixrQkFBRCxHQUNHLGtGQURILEdBRUcsZ0VBSEosQ0FGSjtBQU9FLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVEsa0JBQWtCLEVBQXhCO0FBQUEsV0FQWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbURELENBakZEOztHQUFNZCxLOztLQUFBQSxLO0FBbUZTQSxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBNZXRhIH0gZnJvbSBcIi4uL2xheW91dC9NZXRhXCI7XG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4uL3RlbXBsYXRlcy9NYWluXCI7XG5pbXBvcnQgeyBMaW5lIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuaW1wb3J0IHsgc2NlbmFyaW9PbmUsIHNjZW5hcmlvVHdvLCBzY2VuYXJpb1RocmVlIH0gZnJvbSBcIi4uL3V0aWxzL2NoYXJ0SW5mb1wiO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICByZXNwb25zaXZlOiB0cnVlLFxuICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxuICBhbm5vdGF0aW9uOiB7XG4gICAgYW5ub3RhdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICAgIG1vZGU6IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICBzY2FsZUlEOiBcInktYXhpcy0wXCIsXG4gICAgICAgIHZhbHVlOiAwLjEsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInJnYig3NSwgMTkyLCAxOTIpXCIsXG4gICAgICAgIGJvcmRlcldpZHRoOiA0LFxuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgY29udGVudDogXCJUZXN0IGxhYmVsXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZGlzcGxheTogdHJ1ZSxcbiAgICB0ZXh0OiBcIkJBQyBBbmFseXNpcyAtIFJvYmVydCBDYW5ub24gTS5ELlwiLFxuICAgIGZvbnRTaXplOiAyNixcbiAgICBmb250RmFtaWx5OiBcIidIZWx2ZXRpY2EnXCIsXG4gICAgZm9udENvbG9yOiBcIiMzNzQxNTFodHRwOi8vMTI3LjAuMC4xOjQwNDAgIFwiLFxuICB9LFxuICBzY2FsZXM6IHtcbiAgICB4QXhlczogW1xuICAgICAge1xuICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbFN0cmluZzogXCJLbm93biBUaW1lcyAoQU0pXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZTogU3RyaW5nLCBpbmRleCwgdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiMjo1OCBBTVwiKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIHlBeGVzOiBbXG4gICAgICB7XG4gICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiBcIkJsb29kIEFsY29ob2wgQ29uY2VudHJhdGlvbiAoZy9tbClcIixcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDAuMTYpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59O1xuXG5jb25zdCBpbml0aWFsRGF0YSA9IHtcbiAgbGFiZWxzOiBbXG4gICAgXCIodGltZSB1bmtub3duKVwiLFxuICAgIFwiMTI6NDIgQU1cIixcbiAgICBcIih0aW1lIHVua25vd24pXCIsXG4gICAgXCIyOjU4IEFNXCIsXG4gICAgXCIodGltZSB1bmtub3duKVwiLFxuICAgIFwiKHRpbWUgdW5rbm93bilcIixcbiAgXSxcbiAgZGF0YXNldHM6IFtcbiAgICB7XG4gICAgICBkYXRhOiBbbnVsbCwgbnVsbCwgbnVsbCwgMC4xNiwgbnVsbCwgbnVsbF0sXG4gICAgICBsYWJlbDogXCJPbmUgbWVhc3VyZW1lbnRcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNzgzNTBGXCIsXG4gICAgICBib3JkZXJDb2xvcjogXCIjNzgzNTBGXCIsXG4gICAgICBmaWxsOiBmYWxzZSxcbiAgICAgIHBvaW50UmFkaXVzOiBbMCwgMCwgMCwgNywgMF0sXG4gICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IFswLCAwLCAwLCA4LCAwXSxcbiAgICB9LFxuICBdLFxufTtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtzY2VuYXJpb09uZVNob3duLCBzZXRTY2VuYXJpb09uZVNob3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NjZW5hcmlvVHdvU2hvd24sIHNldFNjZW5hcmlvVHdvU2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2NlbmFyaW9UaHJlZVNob3duLCBzZXRTY2VuYXJpb1RocmVlU2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSk7XG5cbiAgY29uc3QgYXBwbHlTY2VuYXJpb09uZSA9ICgpID0+IHtcbiAgICBpZiAoIXNjZW5hcmlvT25lU2hvd24pIHtcbiAgICAgIGxldCB1cGRhdGVkRGF0YXNldHMgPSBbLi4uZGF0YS5kYXRhc2V0cywgc2NlbmFyaW9PbmVdO1xuICAgICAgc2V0RGF0YSh7IC4uLmRhdGEsIGRhdGFzZXRzOiB1cGRhdGVkRGF0YXNldHMgfSk7XG4gICAgICBzZXRTY2VuYXJpb09uZVNob3duKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhcHBseVNjZW5hcmlvVHdvID0gKCkgPT4ge1xuICAgIGlmICghc2NlbmFyaW9Ud29TaG93bikge1xuICAgICAgbGV0IHVwZGF0ZWREYXRhc2V0cyA9IFsuLi5kYXRhLmRhdGFzZXRzLCBzY2VuYXJpb1R3b107XG4gICAgICBzZXREYXRhKHsgLi4uZGF0YSwgZGF0YXNldHM6IHVwZGF0ZWREYXRhc2V0cyB9KTtcbiAgICAgIHNldFNjZW5hcmlvVHdvU2hvd24odHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFwcGx5U2NlbmFyaW9UaHJlZSA9ICgpID0+IHtcbiAgICBpZiAoIXNjZW5hcmlvVGhyZWVTaG93bikge1xuICAgICAgbGV0IHVwZGF0ZWREYXRhc2V0cyA9IFsuLi5kYXRhLmRhdGFzZXRzLCBzY2VuYXJpb1RocmVlXTtcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBkYXRhc2V0czogdXBkYXRlZERhdGFzZXRzIH0pO1xuICAgICAgc2V0U2NlbmFyaW9UaHJlZVNob3duKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxNYWluXG4gICAgICBtZXRhPXtcbiAgICAgICAgPE1ldGFcbiAgICAgICAgICB0aXRsZT1cIkNhbm5vbiBEZW1vbnN0cmF0aXZlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSBkZW1vbnN0cmF0aXZlIGZvciBEci4gUm9iZXJ0IENhbm5vbiAtIEdhcmRuZXIgQ29uc3VsdGluZy5cIlxuICAgICAgICAvPlxuICAgICAgfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMTYgbXktMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiPlxuICAgICAgICAgIDxMaW5lIGRhdGE9e2RhdGF9IHdpZHRoPXs2MDB9IGhlaWdodD17MjgwfSBvcHRpb25zPXtvcHRpb25zfT48L0xpbmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIG10LTEyXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJweC00IHB5LTIgZm9udC1zZW1pYm9sZCBiZy10cmFuc3BhcmVudCBib3JkZXIgcm91bmRlZCBob3Zlcjp0ZXh0LXdoaXRlICBcIiArXG4gICAgICAgICAgICAgICghc2NlbmFyaW9PbmVTaG93blxuICAgICAgICAgICAgICAgID8gXCJvcGFjaXR5LTI1IHRleHQtZ3JlZW4tNzAwIGJvcmRlci1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgOiBcInRleHQtd2hpdGUgYmctZ3JlZW4tNTAwIGJvcmRlci1ncmVlbi01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXBwbHlTY2VuYXJpb09uZSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNjZW5hcmlvIG9uZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIFwicHgtNCBweS0yIG14LTE2IGZvbnQtc2VtaWJvbGQgYmctdHJhbnNwYXJlbnQgYm9yZGVyIHJvdW5kZWQgaG92ZXI6dGV4dC13aGl0ZSAgXCIgK1xuICAgICAgICAgICAgICAoIXNjZW5hcmlvVHdvU2hvd25cbiAgICAgICAgICAgICAgICA/IFwib3BhY2l0eS0yNSB0ZXh0LWJsdWUtNzAwIGJvcmRlci1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgIDogXCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIGJvcmRlci1ibHVlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBseVNjZW5hcmlvVHdvKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2NlbmFyaW8gdHdvXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJweC00IHB5LTIgZm9udC1zZW1pYm9sZCBiZy10cmFuc3BhcmVudCBib3JkZXIgcm91bmRlZCBob3Zlcjp0ZXh0LXdoaXRlICBcIiArXG4gICAgICAgICAgICAgICghc2NlbmFyaW9UaHJlZVNob3duXG4gICAgICAgICAgICAgICAgPyBcIm9wYWNpdHktMjUgdGV4dC1yZWQtNzAwIGJvcmRlci1yZWQtNTAwIGhvdmVyOmJnLXJlZC01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICA6IFwidGV4dC13aGl0ZSBiZy1yZWQtNTAwIGJvcmRlci1yZWQtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCBcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGx5U2NlbmFyaW9UaHJlZSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNjZW5hcmlvIHRocmVlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9NYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})