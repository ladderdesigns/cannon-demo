webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Meta */ \"./src/layout/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Main */ \"./src/templates/Main.tsx\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/chartInfo */ \"./src/utils/chartInfo.ts\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chartjs-plugin-annotation */ \"./node_modules/chartjs-plugin-annotation/src/index.js\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar options = {\n  responsive: true,\n  maintainAspectRatio: true,\n  title: {\n    display: true,\n    text: \"BAC Analysis - Robert Cannon M.D.\",\n    fontSize: 26,\n    fontFamily: \"'Helvetica'\",\n    fontColor: \"#374151http://127.0.0.1:4040  \"\n  },\n  annotation: {\n    annotations: [{\n      type: \"line\",\n      mode: \"horizontal\",\n      scaleID: \"y-axis-0\",\n      value: 0.16,\n      borderColor: \"rgba(0, 0, 0, 0.1)\",\n      borderWidth: 1,\n      label: {\n        enabled: false,\n        content: \"Test label\"\n      }\n    }]\n  },\n  scales: {\n    xAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Known Times (AM)\"\n      },\n      ticks: {\n        callback: function callback(value, index, values) {\n          if (value === \"2:58 AM\") {\n            return value;\n          }\n        }\n      }\n    }],\n    yAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Blood Alcohol Concentration (g/ml)\"\n      },\n      ticks: {\n        callback: function callback(value, index, values) {\n          console.log(value);\n        }\n      }\n    }]\n  }\n};\nvar initialData = {\n  labels: [\"(time unknown)\", \"12:42 AM\", \"(time unknown)\", \"2:58 AM\", \"(time unknown)\", \"(time unknown)\"],\n  datasets: [{\n    data: [null, null, null, 0.16, null, null],\n    label: \"One measurement\",\n    backgroundColor: \"#78350F\",\n    borderColor: \"#78350F\",\n    fill: false,\n    pointRadius: [0, 0, 0, 7, 0],\n    pointHoverBorderWidth: [0, 0, 0, 8, 0]\n  }]\n};\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioOneShown = _useState[0],\n      setScenarioOneShown = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioTwoShown = _useState2[0],\n      setScenarioTwoShown = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioThreeShown = _useState3[0],\n      setScenarioThreeShown = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialData),\n      data = _useState4[0],\n      setData = _useState4[1];\n\n  var applyScenarioOne = function applyScenarioOne() {\n    if (!scenarioOneShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioOne\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioOneShown(true);\n    }\n  };\n\n  var applyScenarioTwo = function applyScenarioTwo() {\n    if (!scenarioTwoShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioTwo\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioTwoShown(true);\n    }\n  };\n\n  var applyScenarioThree = function applyScenarioThree() {\n    if (!scenarioThreeShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioThree\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioThreeShown(true);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_templates_Main__WEBPACK_IMPORTED_MODULE_5__[\"Main\"], {\n    meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_layout_Meta__WEBPACK_IMPORTED_MODULE_4__[\"Meta\"], {\n      title: \"Cannon Demonstrative\",\n      description: \"The demonstrative for Dr. Robert Cannon - Gardner Consulting.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }, _this),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"mx-16 my-10\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex w-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__[\"Line\"], {\n          data: data,\n          width: 600,\n          height: 280,\n          options: options\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex justify-center w-full mt-12\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 py-2 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioOneShown ? \"opacity-25 text-green-700 border-green-500 hover:bg-green-500 hover:border-transparent\" : \"text-white bg-green-500 border-green-500 hover:border-transparent \"),\n          onClick: function onClick() {\n            return applyScenarioOne();\n          },\n          children: \"Scenario one\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 py-2 mx-16 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioTwoShown ? \"opacity-25 text-blue-700 border-blue-500 hover:bg-blue-500 hover:border-transparent\" : \"text-white bg-blue-500 border-blue-500 hover:border-transparent \"),\n          onClick: function onClick() {\n            return applyScenarioTwo();\n          },\n          children: \"Scenario two\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 py-2 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioThreeShown ? \"opacity-25 text-red-700 border-red-500 hover:bg-red-500 hover:border-transparent\" : \"text-white bg-red-500 border-red-500 hover:border-transparent \"),\n          onClick: function onClick() {\n            return applyScenarioThree();\n          },\n          children: \"Scenario three\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 156,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 121,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"lOjS2ksx/pKJuWWHuoJDqO7GIyw=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJmb250Q29sb3IiLCJhbm5vdGF0aW9uIiwiYW5ub3RhdGlvbnMiLCJ0eXBlIiwibW9kZSIsInNjYWxlSUQiLCJ2YWx1ZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJsYWJlbCIsImVuYWJsZWQiLCJjb250ZW50Iiwic2NhbGVzIiwieEF4ZXMiLCJzY2FsZUxhYmVsIiwibGFiZWxTdHJpbmciLCJ0aWNrcyIsImNhbGxiYWNrIiwiaW5kZXgiLCJ2YWx1ZXMiLCJ5QXhlcyIsImNvbnNvbGUiLCJsb2ciLCJpbml0aWFsRGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsImZpbGwiLCJwb2ludFJhZGl1cyIsInBvaW50SG92ZXJCb3JkZXJXaWR0aCIsIkluZGV4IiwidXNlU3RhdGUiLCJzY2VuYXJpb09uZVNob3duIiwic2V0U2NlbmFyaW9PbmVTaG93biIsInNjZW5hcmlvVHdvU2hvd24iLCJzZXRTY2VuYXJpb1R3b1Nob3duIiwic2NlbmFyaW9UaHJlZVNob3duIiwic2V0U2NlbmFyaW9UaHJlZVNob3duIiwic2V0RGF0YSIsImFwcGx5U2NlbmFyaW9PbmUiLCJ1cGRhdGVkRGF0YXNldHMiLCJzY2VuYXJpb09uZSIsImFwcGx5U2NlbmFyaW9Ud28iLCJzY2VuYXJpb1R3byIsImFwcGx5U2NlbmFyaW9UaHJlZSIsInNjZW5hcmlvVGhyZWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLFlBQVUsRUFBRSxJQURFO0FBRWRD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QUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLGtDQUFmO0FBQUEsZ0NBQ0U7QUFDRSxtQkFBUyxFQUNQLDhFQUNDLENBQUN5QyxnQkFBRCxHQUNHLHdGQURILEdBRUcsb0VBSEosQ0FGSjtBQU9FLGlCQUFPLEVBQUU7QUFBQSxtQkFBTU8sZ0JBQWdCLEVBQXRCO0FBQUEsV0FQWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVlFO0FBQ0UsbUJBQVMsRUFDUCxvRkFDQyxDQUFDTCxnQkFBRCxHQUNHLHFGQURILEdBRUcsa0VBSEosQ0FGSjtBQU9FLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVEsZ0JBQWdCLEVBQXRCO0FBQUEsV0FQWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRixlQXVCRTtBQUNFLG1CQUFTLEVBQ1AsOEVBQ0MsQ0FBQ04sa0JBQUQsR0FDRyxrRkFESCxHQUVHLGdFQUhKLENBRko7QUFPRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1RLGtCQUFrQixFQUF4QjtBQUFBLFdBUFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1ERCxDQWpGRDs7R0FBTWQsSzs7S0FBQUEsSztBQW1GU0Esb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgTWV0YSB9IGZyb20gXCIuLi9sYXlvdXQvTWV0YVwiO1xuaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuLi90ZW1wbGF0ZXMvTWFpblwiO1xuaW1wb3J0IHsgTGluZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCB7IHNjZW5hcmlvT25lLCBzY2VuYXJpb1R3bywgc2NlbmFyaW9UaHJlZSB9IGZyb20gXCIuLi91dGlscy9jaGFydEluZm9cIjtcbmltcG9ydCBcImNoYXJ0anMtcGx1Z2luLWFubm90YXRpb25cIjtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcblxuICB0aXRsZToge1xuICAgIGRpc3BsYXk6IHRydWUsXG4gICAgdGV4dDogXCJCQUMgQW5hbHlzaXMgLSBSb2JlcnQgQ2Fubm9uIE0uRC5cIixcbiAgICBmb250U2l6ZTogMjYsXG4gICAgZm9udEZhbWlseTogXCInSGVsdmV0aWNhJ1wiLFxuICAgIGZvbnRDb2xvcjogXCIjMzc0MTUxaHR0cDovLzEyNy4wLjAuMTo0MDQwICBcIixcbiAgfSxcbiAgYW5ub3RhdGlvbjoge1xuICAgIGFubm90YXRpb25zOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwibGluZVwiLFxuICAgICAgICBtb2RlOiBcImhvcml6b250YWxcIixcbiAgICAgICAgc2NhbGVJRDogXCJ5LWF4aXMtMFwiLFxuICAgICAgICB2YWx1ZTogMC4xNixcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjEpXCIsXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIGNvbnRlbnQ6IFwiVGVzdCBsYWJlbFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBzY2FsZXM6IHtcbiAgICB4QXhlczogW1xuICAgICAge1xuICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbFN0cmluZzogXCJLbm93biBUaW1lcyAoQU0pXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZTogU3RyaW5nLCBpbmRleCwgdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiMjo1OCBBTVwiKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIHlBeGVzOiBbXG4gICAgICB7XG4gICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiBcIkJsb29kIEFsY29ob2wgQ29uY2VudHJhdGlvbiAoZy9tbClcIixcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgdmFsdWVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG5cbmNvbnN0IGluaXRpYWxEYXRhID0ge1xuICBsYWJlbHM6IFtcbiAgICBcIih0aW1lIHVua25vd24pXCIsXG4gICAgXCIxMjo0MiBBTVwiLFxuICAgIFwiKHRpbWUgdW5rbm93bilcIixcbiAgICBcIjI6NTggQU1cIixcbiAgICBcIih0aW1lIHVua25vd24pXCIsXG4gICAgXCIodGltZSB1bmtub3duKVwiLFxuICBdLFxuICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGRhdGE6IFtudWxsLCBudWxsLCBudWxsLCAwLjE2LCBudWxsLCBudWxsXSxcbiAgICAgIGxhYmVsOiBcIk9uZSBtZWFzdXJlbWVudFwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM3ODM1MEZcIixcbiAgICAgIGJvcmRlckNvbG9yOiBcIiM3ODM1MEZcIixcbiAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgcG9pbnRSYWRpdXM6IFswLCAwLCAwLCA3LCAwXSxcbiAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogWzAsIDAsIDAsIDgsIDBdLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW3NjZW5hcmlvT25lU2hvd24sIHNldFNjZW5hcmlvT25lU2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2NlbmFyaW9Ud29TaG93biwgc2V0U2NlbmFyaW9Ud29TaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY2VuYXJpb1RocmVlU2hvd24sIHNldFNjZW5hcmlvVGhyZWVTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcblxuICBjb25zdCBhcHBseVNjZW5hcmlvT25lID0gKCkgPT4ge1xuICAgIGlmICghc2NlbmFyaW9PbmVTaG93bikge1xuICAgICAgbGV0IHVwZGF0ZWREYXRhc2V0cyA9IFsuLi5kYXRhLmRhdGFzZXRzLCBzY2VuYXJpb09uZV07XG4gICAgICBzZXREYXRhKHsgLi4uZGF0YSwgZGF0YXNldHM6IHVwZGF0ZWREYXRhc2V0cyB9KTtcbiAgICAgIHNldFNjZW5hcmlvT25lU2hvd24odHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFwcGx5U2NlbmFyaW9Ud28gPSAoKSA9PiB7XG4gICAgaWYgKCFzY2VuYXJpb1R3b1Nob3duKSB7XG4gICAgICBsZXQgdXBkYXRlZERhdGFzZXRzID0gWy4uLmRhdGEuZGF0YXNldHMsIHNjZW5hcmlvVHdvXTtcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBkYXRhc2V0czogdXBkYXRlZERhdGFzZXRzIH0pO1xuICAgICAgc2V0U2NlbmFyaW9Ud29TaG93bih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXBwbHlTY2VuYXJpb1RocmVlID0gKCkgPT4ge1xuICAgIGlmICghc2NlbmFyaW9UaHJlZVNob3duKSB7XG4gICAgICBsZXQgdXBkYXRlZERhdGFzZXRzID0gWy4uLmRhdGEuZGF0YXNldHMsIHNjZW5hcmlvVGhyZWVdO1xuICAgICAgc2V0RGF0YSh7IC4uLmRhdGEsIGRhdGFzZXRzOiB1cGRhdGVkRGF0YXNldHMgfSk7XG4gICAgICBzZXRTY2VuYXJpb1RocmVlU2hvd24odHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE1haW5cbiAgICAgIG1ldGE9e1xuICAgICAgICA8TWV0YVxuICAgICAgICAgIHRpdGxlPVwiQ2Fubm9uIERlbW9uc3RyYXRpdmVcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIGRlbW9uc3RyYXRpdmUgZm9yIERyLiBSb2JlcnQgQ2Fubm9uIC0gR2FyZG5lciBDb25zdWx0aW5nLlwiXG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0xNiBteS0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsXCI+XG4gICAgICAgICAgPExpbmUgZGF0YT17ZGF0YX0gd2lkdGg9ezYwMH0gaGVpZ2h0PXsyODB9IG9wdGlvbnM9e29wdGlvbnN9PjwvTGluZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbXQtMTJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcInB4LTQgcHktMiBmb250LXNlbWlib2xkIGJnLXRyYW5zcGFyZW50IGJvcmRlciByb3VuZGVkIGhvdmVyOnRleHQtd2hpdGUgIFwiICtcbiAgICAgICAgICAgICAgKCFzY2VuYXJpb09uZVNob3duXG4gICAgICAgICAgICAgICAgPyBcIm9wYWNpdHktMjUgdGV4dC1ncmVlbi03MDAgYm9yZGVyLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICA6IFwidGV4dC13aGl0ZSBiZy1ncmVlbi01MDAgYm9yZGVyLWdyZWVuLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBseVNjZW5hcmlvT25lKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2NlbmFyaW8gb25lXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgXCJweC00IHB5LTIgbXgtMTYgZm9udC1zZW1pYm9sZCBiZy10cmFuc3BhcmVudCBib3JkZXIgcm91bmRlZCBob3Zlcjp0ZXh0LXdoaXRlICBcIiArXG4gICAgICAgICAgICAgICghc2NlbmFyaW9Ud29TaG93blxuICAgICAgICAgICAgICAgID8gXCJvcGFjaXR5LTI1IHRleHQtYmx1ZS03MDAgYm9yZGVyLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgOiBcInRleHQtd2hpdGUgYmctYmx1ZS01MDAgYm9yZGVyLWJsdWUtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCBcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGx5U2NlbmFyaW9Ud28oKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTY2VuYXJpbyB0d29cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBcInB4LTQgcHktMiBmb250LXNlbWlib2xkIGJnLXRyYW5zcGFyZW50IGJvcmRlciByb3VuZGVkIGhvdmVyOnRleHQtd2hpdGUgIFwiICtcbiAgICAgICAgICAgICAgKCFzY2VuYXJpb1RocmVlU2hvd25cbiAgICAgICAgICAgICAgICA/IFwib3BhY2l0eS0yNSB0ZXh0LXJlZC03MDAgYm9yZGVyLXJlZC01MDAgaG92ZXI6YmctcmVkLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgIDogXCJ0ZXh0LXdoaXRlIGJnLXJlZC01MDAgYm9yZGVyLXJlZC01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXBwbHlTY2VuYXJpb1RocmVlKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2NlbmFyaW8gdGhyZWVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L01haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})