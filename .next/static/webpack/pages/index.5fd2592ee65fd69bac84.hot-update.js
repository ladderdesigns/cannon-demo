webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Meta */ \"./src/layout/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Main */ \"./src/templates/Main.tsx\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/chartInfo */ \"./src/utils/chartInfo.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar options = {\n  responsive: true,\n  maintainAspectRatio: true,\n  title: {\n    display: true,\n    text: \"BAC Analysis - Robert Cannon M.D.\",\n    fontSize: 24,\n    fontFamily: \"'Helvetica'\"\n  },\n  scales: {\n    xAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Known Times (AM)\"\n      },\n      ticks: {\n        callback: function callback(value, index, values) {\n          if (value === \"2:58 AM\") {\n            return value;\n          }\n        }\n      }\n    }],\n    yAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Blood Alcohol Concentration (g/ml)\"\n      },\n      ticks: {\n        callback: function callback(value, index, values) {\n          if (value === 0.16) {\n            return value;\n          }\n        }\n      }\n    }]\n  }\n};\nvar initialData = {\n  labels: [\"(time unknown)\", \"12:42 AM\", \"(time unknown)\", \"2:58 AM\", \"(time unknown)\", \"(time unknown)\"],\n  datasets: [{\n    data: [null, null, null, 0.16, null, null],\n    label: \"One measurement\",\n    backgroundColor: \"#374151\",\n    borderColor: \"#374151\",\n    fill: false,\n    pointRadius: [0, 0, 0, 7, 0],\n    pointHoverBorderWidth: [0, 0, 0, 8, 0]\n  }]\n};\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioOneShown = _useState[0],\n      setScenarioOneShown = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioTwoShown = _useState2[0],\n      setScenarioTwoShown = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioThreeShown = _useState3[0],\n      setScenarioThreeShown = _useState3[1];\n\n  var applyScenarioOne = function applyScenarioOne() {\n    if (!scenarioOneShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioOne\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioOneShown(true);\n    }\n  };\n\n  var applyScenarioTwo = function applyScenarioTwo() {\n    if (!scenarioTwoShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioTwo\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioTwoShown(true);\n    }\n  };\n\n  var applyScenarioThree = function applyScenarioThree() {\n    if (!scenarioThreeShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioThree\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioThreeShown(true);\n    }\n  };\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialData),\n      data = _useState4[0],\n      setData = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // only add user preferences if the user has logged in\n    console.log(\"data has changed\");\n  }, [data.datasets]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_templates_Main__WEBPACK_IMPORTED_MODULE_5__[\"Main\"], {\n    meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_layout_Meta__WEBPACK_IMPORTED_MODULE_4__[\"Meta\"], {\n      title: \"Cannon Demonstrative\",\n      description: \"The demonstrative for Dr. Robert Cannon - Gardner Consulting.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }, _this),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"m-8\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex w-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__[\"Line\"], {\n          data: data,\n          width: 600,\n          height: 280,\n          options: options\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex justify-center w-full h-16 mt-8\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 mx-16 text-white bg-green-500 rounded-lg shadow hover:bg-green-600\",\n          onClick: function onClick() {\n            return applyScenarioOne();\n          },\n          children: \"Scenario one\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 mx-16 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600\",\n          onClick: function onClick() {\n            return applyScenarioTwo();\n          },\n          children: \"Scenario two\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 mx-16 text-white bg-red-500 rounded-lg shadow hover:bg-red-600\",\n          onClick: function onClick() {\n            return applyScenarioThree();\n          },\n          children: \"Scenario three\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 110,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"SDxBic/iA7AcSkliy9pqZaig0XM=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJzY2FsZXMiLCJ4QXhlcyIsInNjYWxlTGFiZWwiLCJsYWJlbFN0cmluZyIsInRpY2tzIiwiY2FsbGJhY2siLCJ2YWx1ZSIsImluZGV4IiwidmFsdWVzIiwieUF4ZXMiLCJpbml0aWFsRGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiZGF0YSIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJmaWxsIiwicG9pbnRSYWRpdXMiLCJwb2ludEhvdmVyQm9yZGVyV2lkdGgiLCJJbmRleCIsInVzZVN0YXRlIiwic2NlbmFyaW9PbmVTaG93biIsInNldFNjZW5hcmlvT25lU2hvd24iLCJzY2VuYXJpb1R3b1Nob3duIiwic2V0U2NlbmFyaW9Ud29TaG93biIsInNjZW5hcmlvVGhyZWVTaG93biIsInNldFNjZW5hcmlvVGhyZWVTaG93biIsImFwcGx5U2NlbmFyaW9PbmUiLCJ1cGRhdGVkRGF0YXNldHMiLCJzY2VuYXJpb09uZSIsInNldERhdGEiLCJhcHBseVNjZW5hcmlvVHdvIiwic2NlbmFyaW9Ud28iLCJhcHBseVNjZW5hcmlvVGhyZWUiLCJzY2VuYXJpb1RocmVlIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNkQyxZQUFVLEVBQUUsSUFERTtBQUVkQyxxQkFBbUIsRUFBRSxJQUZQO0FBR2RDLE9BQUssRUFBRTtBQUNMQyxXQUFPLEVBQUUsSUFESjtBQUVMQyxRQUFJLEVBQUUsbUNBRkQ7QUFHTEMsWUFBUSxFQUFF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QkFBZ0IsRUFBdEI7QUFBQSxXQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBYUU7QUFDRSxtQkFBUyxFQUFDLHFFQURaO0FBRUUsaUJBQU8sRUFBRTtBQUFBLG1CQUFNRSxrQkFBa0IsRUFBeEI7QUFBQSxXQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLGVBaUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQ0QsQ0F6RUQ7O0dBQU1kLEs7O0tBQUFBLEs7QUEyRVNBLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IE1ldGEgfSBmcm9tIFwiLi4vbGF5b3V0L01ldGFcIjtcbmltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi4vdGVtcGxhdGVzL01haW5cIjtcbmltcG9ydCB7IExpbmUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5pbXBvcnQgeyBzY2VuYXJpb09uZSwgc2NlbmFyaW9Ud28sIHNjZW5hcmlvVGhyZWUgfSBmcm9tIFwiLi4vdXRpbHMvY2hhcnRJbmZvXCI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHJlc3BvbnNpdmU6IHRydWUsXG4gIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXG4gIHRpdGxlOiB7XG4gICAgZGlzcGxheTogdHJ1ZSxcbiAgICB0ZXh0OiBcIkJBQyBBbmFseXNpcyAtIFJvYmVydCBDYW5ub24gTS5ELlwiLFxuICAgIGZvbnRTaXplOiAyNCxcbiAgICBmb250RmFtaWx5OiBcIidIZWx2ZXRpY2EnXCIsXG4gIH0sXG4gIHNjYWxlczoge1xuICAgIHhBeGVzOiBbXG4gICAgICB7XG4gICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiBcIktub3duIFRpbWVzIChBTSlcIixcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlOiBTdHJpbmcsIGluZGV4LCB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCIyOjU4IEFNXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgeUF4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgbGFiZWxTdHJpbmc6IFwiQmxvb2QgQWxjb2hvbCBDb25jZW50cmF0aW9uIChnL21sKVwiLFxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMC4xNikge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG5cbmNvbnN0IGluaXRpYWxEYXRhID0ge1xuICBsYWJlbHM6IFtcbiAgICBcIih0aW1lIHVua25vd24pXCIsXG4gICAgXCIxMjo0MiBBTVwiLFxuICAgIFwiKHRpbWUgdW5rbm93bilcIixcbiAgICBcIjI6NTggQU1cIixcbiAgICBcIih0aW1lIHVua25vd24pXCIsXG4gICAgXCIodGltZSB1bmtub3duKVwiLFxuICBdLFxuICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGRhdGE6IFtudWxsLCBudWxsLCBudWxsLCAwLjE2LCBudWxsLCBudWxsXSxcbiAgICAgIGxhYmVsOiBcIk9uZSBtZWFzdXJlbWVudFwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzNzQxNTFcIixcbiAgICAgIGJvcmRlckNvbG9yOiBcIiMzNzQxNTFcIixcbiAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgcG9pbnRSYWRpdXM6IFswLCAwLCAwLCA3LCAwXSxcbiAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogWzAsIDAsIDAsIDgsIDBdLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW3NjZW5hcmlvT25lU2hvd24sIHNldFNjZW5hcmlvT25lU2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2NlbmFyaW9Ud29TaG93biwgc2V0U2NlbmFyaW9Ud29TaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY2VuYXJpb1RocmVlU2hvd24sIHNldFNjZW5hcmlvVGhyZWVTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgYXBwbHlTY2VuYXJpb09uZSA9ICgpID0+IHtcbiAgICBpZiAoIXNjZW5hcmlvT25lU2hvd24pIHtcbiAgICAgIGxldCB1cGRhdGVkRGF0YXNldHMgPSBbLi4uZGF0YS5kYXRhc2V0cywgc2NlbmFyaW9PbmVdO1xuICAgICAgc2V0RGF0YSh7IC4uLmRhdGEsIGRhdGFzZXRzOiB1cGRhdGVkRGF0YXNldHMgfSk7XG4gICAgICBzZXRTY2VuYXJpb09uZVNob3duKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhcHBseVNjZW5hcmlvVHdvID0gKCkgPT4ge1xuICAgIGlmICghc2NlbmFyaW9Ud29TaG93bikge1xuICAgICAgbGV0IHVwZGF0ZWREYXRhc2V0cyA9IFsuLi5kYXRhLmRhdGFzZXRzLCBzY2VuYXJpb1R3b107XG4gICAgICBzZXREYXRhKHsgLi4uZGF0YSwgZGF0YXNldHM6IHVwZGF0ZWREYXRhc2V0cyB9KTtcbiAgICAgIHNldFNjZW5hcmlvVHdvU2hvd24odHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFwcGx5U2NlbmFyaW9UaHJlZSA9ICgpID0+IHtcbiAgICBpZiAoIXNjZW5hcmlvVGhyZWVTaG93bikge1xuICAgICAgbGV0IHVwZGF0ZWREYXRhc2V0cyA9IFsuLi5kYXRhLmRhdGFzZXRzLCBzY2VuYXJpb1RocmVlXTtcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBkYXRhc2V0czogdXBkYXRlZERhdGFzZXRzIH0pO1xuICAgICAgc2V0U2NlbmFyaW9UaHJlZVNob3duKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBvbmx5IGFkZCB1c2VyIHByZWZlcmVuY2VzIGlmIHRoZSB1c2VyIGhhcyBsb2dnZWQgaW5cbiAgICBjb25zb2xlLmxvZyhcImRhdGEgaGFzIGNoYW5nZWRcIik7XG4gIH0sIFtkYXRhLmRhdGFzZXRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TWFpblxuICAgICAgbWV0YT17XG4gICAgICAgIDxNZXRhXG4gICAgICAgICAgdGl0bGU9XCJDYW5ub24gRGVtb25zdHJhdGl2ZVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgZGVtb25zdHJhdGl2ZSBmb3IgRHIuIFJvYmVydCBDYW5ub24gLSBHYXJkbmVyIENvbnN1bHRpbmcuXCJcbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsXCI+XG4gICAgICAgICAgPExpbmUgZGF0YT17ZGF0YX0gd2lkdGg9ezYwMH0gaGVpZ2h0PXsyODB9IG9wdGlvbnM9e29wdGlvbnN9PjwvTGluZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC0xNiBtdC04XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBteC0xNiB0ZXh0LXdoaXRlIGJnLWdyZWVuLTUwMCByb3VuZGVkLWxnIHNoYWRvdyBob3ZlcjpiZy1ncmVlbi02MDBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXBwbHlTY2VuYXJpb09uZSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNjZW5hcmlvIG9uZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgbXgtMTYgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCByb3VuZGVkLWxnIHNoYWRvdyBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBseVNjZW5hcmlvVHdvKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2NlbmFyaW8gdHdvXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBteC0xNiB0ZXh0LXdoaXRlIGJnLXJlZC01MDAgcm91bmRlZC1sZyBzaGFkb3cgaG92ZXI6YmctcmVkLTYwMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBseVNjZW5hcmlvVGhyZWUoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTY2VuYXJpbyB0aHJlZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICA8L01haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})