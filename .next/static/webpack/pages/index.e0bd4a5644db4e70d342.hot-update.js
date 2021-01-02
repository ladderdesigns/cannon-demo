webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Meta */ \"./src/layout/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Main */ \"./src/templates/Main.tsx\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/chartInfo */ \"./src/utils/chartInfo.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar options = {\n  responsive: true,\n  maintainAspectRatio: true,\n  title: {\n    display: true,\n    text: \"BAC Analysis - Robert Cannon M.D.\",\n    fontSize: 24,\n    fontFamily: \"'Helvetica'\"\n  },\n  scales: {\n    xAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Known Times (AM)\"\n      },\n      ticks: {\n        callback: function callback(value, index, values) {\n          if (value === \"2:58 AM\") {\n            return value;\n          }\n        }\n      }\n    }],\n    yAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Blood Alcohol Concentration (g/ml)\"\n      },\n      ticks: {\n        callback: function callback(value, index, values) {\n          if (value === 0.16) {\n            return value;\n          }\n        }\n      }\n    }]\n  }\n};\nvar initialData = {\n  labels: [\"(time unknown)\", \"12:42 AM\", \"(time unknown)\", \"2:58 AM\", \"(time unknown)\", \"(time unknown)\"],\n  datasets: [{\n    data: [null, null, null, 0.16, null, null],\n    label: \"One measurement\",\n    backgroundColor: \"#374151\",\n    borderColor: \"#374151\",\n    fill: false,\n    pointRadius: [0, 0, 0, 7, 0],\n    pointHoverBorderWidth: [0, 0, 0, 8, 0]\n  }]\n};\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioOneShown = _useState[0],\n      setScenarioOneShown = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioTwoShown = _useState2[0],\n      setScenarioTwoShown = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioThreeShown = _useState3[0],\n      setScenarioThreeShown = _useState3[1];\n\n  var applyScenarioOne = function applyScenarioOne() {\n    if (!scenarioOneShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioOne\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioOneShown(true);\n    }\n  };\n\n  var applyScenarioTwo = function applyScenarioTwo() {\n    if (!scenarioTwoShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioTwo\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n    }\n  };\n\n  var applyScenarioThree = function applyScenarioThree() {\n    if (!scenarioThreeShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioThree\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n    }\n  };\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialData),\n      data = _useState4[0],\n      setData = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // only add user preferences if the user has logged in\n    console.log(\"data has changed\");\n  }, [data.datasets]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_templates_Main__WEBPACK_IMPORTED_MODULE_5__[\"Main\"], {\n    meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_layout_Meta__WEBPACK_IMPORTED_MODULE_4__[\"Meta\"], {\n      title: \"Cannon Demonstrative\",\n      description: \"The demonstrative for Dr. Robert Cannon - Gardner Consulting.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }, _this),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"m-8\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex w-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__[\"Line\"], {\n          data: data,\n          width: 600,\n          height: 280,\n          options: options\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex justify-center w-full h-16 mt-8\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 mx-16 text-white bg-green-500 rounded-lg shadow hover:bg-green-600\",\n          onClick: function onClick() {\n            return applyScenarioOne();\n          },\n          children: \"Scenario one\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 mx-16 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600\",\n          onClick: function onClick() {\n            return applyScenarioTwo();\n          },\n          children: \"Scenario two\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 mx-16 text-white bg-red-500 rounded-lg shadow hover:bg-red-600\",\n          onClick: function onClick() {\n            return applyScenarioThree();\n          },\n          children: \"Scenario three\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 108,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"SDxBic/iA7AcSkliy9pqZaig0XM=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJzY2FsZXMiLCJ4QXhlcyIsInNjYWxlTGFiZWwiLCJsYWJlbFN0cmluZyIsInRpY2tzIiwiY2FsbGJhY2siLCJ2YWx1ZSIsImluZGV4IiwidmFsdWVzIiwieUF4ZXMiLCJpbml0aWFsRGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiZGF0YSIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJmaWxsIiwicG9pbnRSYWRpdXMiLCJwb2ludEhvdmVyQm9yZGVyV2lkdGgiLCJJbmRleCIsInVzZVN0YXRlIiwic2NlbmFyaW9PbmVTaG93biIsInNldFNjZW5hcmlvT25lU2hvd24iLCJzY2VuYXJpb1R3b1Nob3duIiwic2V0U2NlbmFyaW9Ud29TaG93biIsInNjZW5hcmlvVGhyZWVTaG93biIsInNldFNjZW5hcmlvVGhyZWVTaG93biIsImFwcGx5U2NlbmFyaW9PbmUiLCJ1cGRhdGVkRGF0YXNldHMiLCJzY2VuYXJpb09uZSIsInNldERhdGEiLCJhcHBseVNjZW5hcmlvVHdvIiwic2NlbmFyaW9Ud28iLCJhcHBseVNjZW5hcmlvVGhyZWUiLCJzY2VuYXJpb1RocmVlIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNkQyxZQUFVLEVBQUUsSUFERTtBQUVkQyxxQkFBbUIsRUFBRSxJQUZQO0FBR2RDLE9BQUssRUFBRTtBQUNMQyxXQUFPLEVBQUUsSUFESjtBQUVMQyxRQUFJLEVBQUUsbUNBRkQ7QUFHTEMsWUFBUSxFQUFF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ZUFhRTtBQUNFLG1CQUFTLEVBQUMscUVBRFo7QUFFRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1FLGtCQUFrQixFQUF4QjtBQUFBLFdBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFpQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFDRCxDQXZFRDs7R0FBTWQsSzs7S0FBQUEsSztBQXlFU0Esb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgTWV0YSB9IGZyb20gXCIuLi9sYXlvdXQvTWV0YVwiO1xuaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuLi90ZW1wbGF0ZXMvTWFpblwiO1xuaW1wb3J0IHsgTGluZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCB7IHNjZW5hcmlvT25lLCBzY2VuYXJpb1R3bywgc2NlbmFyaW9UaHJlZSB9IGZyb20gXCIuLi91dGlscy9jaGFydEluZm9cIjtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcbiAgdGl0bGU6IHtcbiAgICBkaXNwbGF5OiB0cnVlLFxuICAgIHRleHQ6IFwiQkFDIEFuYWx5c2lzIC0gUm9iZXJ0IENhbm5vbiBNLkQuXCIsXG4gICAgZm9udFNpemU6IDI0LFxuICAgIGZvbnRGYW1pbHk6IFwiJ0hlbHZldGljYSdcIixcbiAgfSxcbiAgc2NhbGVzOiB7XG4gICAgeEF4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgbGFiZWxTdHJpbmc6IFwiS25vd24gVGltZXMgKEFNKVwiLFxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWU6IFN0cmluZywgaW5kZXgsIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIjI6NTggQU1cIikge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICB5QXhlczogW1xuICAgICAge1xuICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbFN0cmluZzogXCJCbG9vZCBBbGNvaG9sIENvbmNlbnRyYXRpb24gKGcvbWwpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAwLjE2KSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufTtcblxuY29uc3QgaW5pdGlhbERhdGEgPSB7XG4gIGxhYmVsczogW1xuICAgIFwiKHRpbWUgdW5rbm93bilcIixcbiAgICBcIjEyOjQyIEFNXCIsXG4gICAgXCIodGltZSB1bmtub3duKVwiLFxuICAgIFwiMjo1OCBBTVwiLFxuICAgIFwiKHRpbWUgdW5rbm93bilcIixcbiAgICBcIih0aW1lIHVua25vd24pXCIsXG4gIF0sXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgZGF0YTogW251bGwsIG51bGwsIG51bGwsIDAuMTYsIG51bGwsIG51bGxdLFxuICAgICAgbGFiZWw6IFwiT25lIG1lYXN1cmVtZW50XCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM3NDE1MVwiLFxuICAgICAgYm9yZGVyQ29sb3I6IFwiIzM3NDE1MVwiLFxuICAgICAgZmlsbDogZmFsc2UsXG4gICAgICBwb2ludFJhZGl1czogWzAsIDAsIDAsIDcsIDBdLFxuICAgICAgcG9pbnRIb3ZlckJvcmRlcldpZHRoOiBbMCwgMCwgMCwgOCwgMF0sXG4gICAgfSxcbiAgXSxcbn07XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbc2NlbmFyaW9PbmVTaG93biwgc2V0U2NlbmFyaW9PbmVTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY2VuYXJpb1R3b1Nob3duLCBzZXRTY2VuYXJpb1R3b1Nob3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NjZW5hcmlvVGhyZWVTaG93biwgc2V0U2NlbmFyaW9UaHJlZVNob3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBhcHBseVNjZW5hcmlvT25lID0gKCkgPT4ge1xuICAgIGlmICghc2NlbmFyaW9PbmVTaG93bikge1xuICAgICAgbGV0IHVwZGF0ZWREYXRhc2V0cyA9IFsuLi5kYXRhLmRhdGFzZXRzLCBzY2VuYXJpb09uZV07XG4gICAgICBzZXREYXRhKHsgLi4uZGF0YSwgZGF0YXNldHM6IHVwZGF0ZWREYXRhc2V0cyB9KTtcbiAgICAgIHNldFNjZW5hcmlvT25lU2hvd24odHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFwcGx5U2NlbmFyaW9Ud28gPSAoKSA9PiB7XG4gICAgaWYgKCFzY2VuYXJpb1R3b1Nob3duKSB7XG4gICAgICBsZXQgdXBkYXRlZERhdGFzZXRzID0gWy4uLmRhdGEuZGF0YXNldHMsIHNjZW5hcmlvVHdvXTtcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBkYXRhc2V0czogdXBkYXRlZERhdGFzZXRzIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhcHBseVNjZW5hcmlvVGhyZWUgPSAoKSA9PiB7XG4gICAgaWYgKCFzY2VuYXJpb1RocmVlU2hvd24pIHtcbiAgICAgIGxldCB1cGRhdGVkRGF0YXNldHMgPSBbLi4uZGF0YS5kYXRhc2V0cywgc2NlbmFyaW9UaHJlZV07XG4gICAgICBzZXREYXRhKHsgLi4uZGF0YSwgZGF0YXNldHM6IHVwZGF0ZWREYXRhc2V0cyB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbERhdGEpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gb25seSBhZGQgdXNlciBwcmVmZXJlbmNlcyBpZiB0aGUgdXNlciBoYXMgbG9nZ2VkIGluXG4gICAgY29uc29sZS5sb2coXCJkYXRhIGhhcyBjaGFuZ2VkXCIpO1xuICB9LCBbZGF0YS5kYXRhc2V0c10pO1xuXG4gIHJldHVybiAoXG4gICAgPE1haW5cbiAgICAgIG1ldGE9e1xuICAgICAgICA8TWV0YVxuICAgICAgICAgIHRpdGxlPVwiQ2Fubm9uIERlbW9uc3RyYXRpdmVcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIGRlbW9uc3RyYXRpdmUgZm9yIERyLiBSb2JlcnQgQ2Fubm9uIC0gR2FyZG5lciBDb25zdWx0aW5nLlwiXG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiPlxuICAgICAgICAgIDxMaW5lIGRhdGE9e2RhdGF9IHdpZHRoPXs2MDB9IGhlaWdodD17MjgwfSBvcHRpb25zPXtvcHRpb25zfT48L0xpbmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtMTYgbXQtOFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgbXgtMTYgdGV4dC13aGl0ZSBiZy1ncmVlbi01MDAgcm91bmRlZC1sZyBzaGFkb3cgaG92ZXI6YmctZ3JlZW4tNjAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGx5U2NlbmFyaW9PbmUoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTY2VuYXJpbyBvbmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IG14LTE2IHRleHQtd2hpdGUgYmctYmx1ZS01MDAgcm91bmRlZC1sZyBzaGFkb3cgaG92ZXI6YmctYmx1ZS02MDBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXBwbHlTY2VuYXJpb1R3bygpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNjZW5hcmlvIHR3b1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgbXgtMTYgdGV4dC13aGl0ZSBiZy1yZWQtNTAwIHJvdW5kZWQtbGcgc2hhZG93IGhvdmVyOmJnLXJlZC02MDBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXBwbHlTY2VuYXJpb1RocmVlKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2NlbmFyaW8gdGhyZWVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+PC9kaXY+XG4gICAgPC9NYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})