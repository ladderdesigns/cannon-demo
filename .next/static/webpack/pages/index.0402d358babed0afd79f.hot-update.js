webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Meta */ \"./src/layout/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Main */ \"./src/templates/Main.tsx\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/chartInfo */ \"./src/utils/chartInfo.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar options = {\n  responsive: true,\n  maintainAspectRatio: true,\n  title: {\n    display: true,\n    text: \"BAC Analysis - Robert Cannon M.D.\",\n    fontSize: 24,\n    fontFamily: \"'Helvetica'\"\n  },\n  scales: {\n    xAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Known Times (AM)\"\n      },\n      ticks: {\n        callback: function callback(value, index, values) {\n          if (value === \"2:58 AM\") {\n            return value;\n          }\n        }\n      }\n    }],\n    yAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Blood Alcohol Concentration (g/ml)\"\n      },\n      ticks: {\n        callback: function callback(value, index, values) {\n          if (value === 0.16) {\n            return value;\n          }\n        }\n      }\n    }]\n  }\n};\nvar initialData = {\n  labels: [\"(time unknown)\", \"12:42 AM\", \"(time unknown)\", \"2:58 AM\", \"(time unknown)\", \"(time unknown)\"],\n  datasets: [{\n    data: [null, null, null, 0.16, null, null],\n    label: \"Genesis Petrillo\",\n    backgroundColor: \"#374151\",\n    borderColor: \"#374151\",\n    fill: false,\n    pointRadius: [0, 0, 0, 7, 0],\n    pointHoverBorderWidth: [0, 0, 0, 8, 0]\n  }]\n};\n\nvar Index = function Index() {\n  _s();\n\n  var applyScenarioOne = function applyScenarioOne() {\n    if (!data.datasets.some(function (scenario) {\n      return scenario.label == \"Medium\";\n    })) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioOne\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      console.log(data.datasets);\n    }\n  };\n\n  var applyScenarioTwo = function applyScenarioTwo() {\n    if (!data.datasets.some(function (scenario) {\n      return scenario.label == \"Low\";\n    })) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioTwo\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      console.log(data.datasets);\n    }\n  };\n\n  var applyScenarioThree = function applyScenarioThree() {\n    if (!data.datasets.some(function (scenario) {\n      return scenario.label == \"High\";\n    })) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioThree\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      console.log(data.datasets);\n    }\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialData),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // only add user preferences if the user has logged in\n    console.log(\"data has changed\");\n  }, [data.datasets]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_templates_Main__WEBPACK_IMPORTED_MODULE_5__[\"Main\"], {\n    meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_layout_Meta__WEBPACK_IMPORTED_MODULE_4__[\"Meta\"], {\n      title: \"Cannon Demonstrative\",\n      description: \"The demonstrative for Dr. Robert Cannon - Gardner Consulting.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }, _this),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"m-8\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex w-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__[\"Line\"], {\n          data: data,\n          width: 600,\n          height: 280,\n          options: options\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex justify-center w-full h-16 mt-8\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 mx-16 text-white bg-green-500 rounded-lg shadow hover:bg-green-600\",\n          onClick: function onClick() {\n            return applyScenarioOne();\n          },\n          children: \"Scenario One\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 mx-16 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600\",\n          onClick: function onClick() {\n            return applyScenarioTwo();\n          },\n          children: \"Scenario Two\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 mx-16 text-white bg-red-500 rounded-lg shadow hover:bg-red-600\",\n          onClick: function onClick() {\n            return applyScenarioThree();\n          },\n          children: \"Scenario Three\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"A2wpUDj2vsVhzBQraLwic4bnRJI=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJzY2FsZXMiLCJ4QXhlcyIsInNjYWxlTGFiZWwiLCJsYWJlbFN0cmluZyIsInRpY2tzIiwiY2FsbGJhY2siLCJ2YWx1ZSIsImluZGV4IiwidmFsdWVzIiwieUF4ZXMiLCJpbml0aWFsRGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiZGF0YSIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJmaWxsIiwicG9pbnRSYWRpdXMiLCJwb2ludEhvdmVyQm9yZGVyV2lkdGgiLCJJbmRleCIsImFwcGx5U2NlbmFyaW9PbmUiLCJzb21lIiwic2NlbmFyaW8iLCJ1cGRhdGVkRGF0YXNldHMiLCJzY2VuYXJpb09uZSIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwiYXBwbHlTY2VuYXJpb1R3byIsInNjZW5hcmlvVHdvIiwiYXBwbHlTY2VuYXJpb1RocmVlIiwic2NlbmFyaW9UaHJlZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLFlBQVUsRUFBRSxJQURFO0FBRWRDLHFCQUFtQixFQUFFLElBRlA7QUFHZEMsT0FBSyxFQUFFO0FBQ0xDLFdBQU8sRUFBRSxJQURKO0FBRUxDLFFBQUksRUFBRSxtQ0FGRDtBQUdMQyxZQUFRLEVBQUUsRUFITDtBQUlMQyxjQUFVLEVBQUU7QUFKUCxHQUhPO0FBU2RDLFFBQU0sRUFBRTtBQUNOQyxTQUFLLEVBQUUsQ0FDTDtBQUNFQyxnQkFBVSxFQUFFO0FBQ1ZOLGVBQU8sRUFBRSxJQURDO0FB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LGdCQUFnQixFQUF0QjtBQUFBLFdBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFhRTtBQUNFLG1CQUFTLEVBQUMscUVBRFo7QUFFRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1FLGtCQUFrQixFQUF4QjtBQUFBLFdBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFpQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFDRCxDQXJFRDs7R0FBTVgsSzs7S0FBQUEsSztBQXVFU0Esb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgTWV0YSB9IGZyb20gXCIuLi9sYXlvdXQvTWV0YVwiO1xuaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuLi90ZW1wbGF0ZXMvTWFpblwiO1xuaW1wb3J0IHsgTGluZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCB7IHNjZW5hcmlvT25lLCBzY2VuYXJpb1R3bywgc2NlbmFyaW9UaHJlZSB9IGZyb20gXCIuLi91dGlscy9jaGFydEluZm9cIjtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcbiAgdGl0bGU6IHtcbiAgICBkaXNwbGF5OiB0cnVlLFxuICAgIHRleHQ6IFwiQkFDIEFuYWx5c2lzIC0gUm9iZXJ0IENhbm5vbiBNLkQuXCIsXG4gICAgZm9udFNpemU6IDI0LFxuICAgIGZvbnRGYW1pbHk6IFwiJ0hlbHZldGljYSdcIixcbiAgfSxcbiAgc2NhbGVzOiB7XG4gICAgeEF4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgbGFiZWxTdHJpbmc6IFwiS25vd24gVGltZXMgKEFNKVwiLFxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWU6IFN0cmluZywgaW5kZXgsIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIjI6NTggQU1cIikge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICB5QXhlczogW1xuICAgICAge1xuICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbFN0cmluZzogXCJCbG9vZCBBbGNvaG9sIENvbmNlbnRyYXRpb24gKGcvbWwpXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAwLjE2KSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufTtcblxuY29uc3QgaW5pdGlhbERhdGEgPSB7XG4gIGxhYmVsczogW1xuICAgIFwiKHRpbWUgdW5rbm93bilcIixcbiAgICBcIjEyOjQyIEFNXCIsXG4gICAgXCIodGltZSB1bmtub3duKVwiLFxuICAgIFwiMjo1OCBBTVwiLFxuICAgIFwiKHRpbWUgdW5rbm93bilcIixcbiAgICBcIih0aW1lIHVua25vd24pXCIsXG4gIF0sXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgZGF0YTogW251bGwsIG51bGwsIG51bGwsIDAuMTYsIG51bGwsIG51bGxdLFxuICAgICAgbGFiZWw6IFwiR2VuZXNpcyBQZXRyaWxsb1wiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzNzQxNTFcIixcbiAgICAgIGJvcmRlckNvbG9yOiBcIiMzNzQxNTFcIixcbiAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgcG9pbnRSYWRpdXM6IFswLCAwLCAwLCA3LCAwXSxcbiAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogWzAsIDAsIDAsIDgsIDBdLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgYXBwbHlTY2VuYXJpb09uZSA9ICgpID0+IHtcbiAgICBpZiAoIWRhdGEuZGF0YXNldHMuc29tZSgoc2NlbmFyaW8pID0+IHNjZW5hcmlvLmxhYmVsID09IFwiTWVkaXVtXCIpKSB7XG4gICAgICBsZXQgdXBkYXRlZERhdGFzZXRzID0gWy4uLmRhdGEuZGF0YXNldHMsIHNjZW5hcmlvT25lXTtcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBkYXRhc2V0czogdXBkYXRlZERhdGFzZXRzIH0pO1xuICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhc2V0cyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFwcGx5U2NlbmFyaW9Ud28gPSAoKSA9PiB7XG4gICAgaWYgKCFkYXRhLmRhdGFzZXRzLnNvbWUoKHNjZW5hcmlvKSA9PiBzY2VuYXJpby5sYWJlbCA9PSBcIkxvd1wiKSkge1xuICAgICAgbGV0IHVwZGF0ZWREYXRhc2V0cyA9IFsuLi5kYXRhLmRhdGFzZXRzLCBzY2VuYXJpb1R3b107XG4gICAgICBzZXREYXRhKHsgLi4uZGF0YSwgZGF0YXNldHM6IHVwZGF0ZWREYXRhc2V0cyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YXNldHMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhcHBseVNjZW5hcmlvVGhyZWUgPSAoKSA9PiB7XG4gICAgaWYgKCFkYXRhLmRhdGFzZXRzLnNvbWUoKHNjZW5hcmlvKSA9PiBzY2VuYXJpby5sYWJlbCA9PSBcIkhpZ2hcIikpIHtcbiAgICAgIGxldCB1cGRhdGVkRGF0YXNldHMgPSBbLi4uZGF0YS5kYXRhc2V0cywgc2NlbmFyaW9UaHJlZV07XG4gICAgICBzZXREYXRhKHsgLi4uZGF0YSwgZGF0YXNldHM6IHVwZGF0ZWREYXRhc2V0cyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YXNldHMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBvbmx5IGFkZCB1c2VyIHByZWZlcmVuY2VzIGlmIHRoZSB1c2VyIGhhcyBsb2dnZWQgaW5cbiAgICBjb25zb2xlLmxvZyhcImRhdGEgaGFzIGNoYW5nZWRcIik7XG4gIH0sIFtkYXRhLmRhdGFzZXRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TWFpblxuICAgICAgbWV0YT17XG4gICAgICAgIDxNZXRhXG4gICAgICAgICAgdGl0bGU9XCJDYW5ub24gRGVtb25zdHJhdGl2ZVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgZGVtb25zdHJhdGl2ZSBmb3IgRHIuIFJvYmVydCBDYW5ub24gLSBHYXJkbmVyIENvbnN1bHRpbmcuXCJcbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsXCI+XG4gICAgICAgICAgPExpbmUgZGF0YT17ZGF0YX0gd2lkdGg9ezYwMH0gaGVpZ2h0PXsyODB9IG9wdGlvbnM9e29wdGlvbnN9PjwvTGluZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC0xNiBtdC04XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBteC0xNiB0ZXh0LXdoaXRlIGJnLWdyZWVuLTUwMCByb3VuZGVkLWxnIHNoYWRvdyBob3ZlcjpiZy1ncmVlbi02MDBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXBwbHlTY2VuYXJpb09uZSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNjZW5hcmlvIE9uZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgbXgtMTYgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCByb3VuZGVkLWxnIHNoYWRvdyBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBseVNjZW5hcmlvVHdvKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2NlbmFyaW8gVHdvXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBteC0xNiB0ZXh0LXdoaXRlIGJnLXJlZC01MDAgcm91bmRlZC1sZyBzaGFkb3cgaG92ZXI6YmctcmVkLTYwMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBseVNjZW5hcmlvVGhyZWUoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTY2VuYXJpbyBUaHJlZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICA8L01haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})