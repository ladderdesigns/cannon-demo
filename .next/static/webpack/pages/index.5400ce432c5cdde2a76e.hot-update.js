webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Meta */ \"./src/layout/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Main */ \"./src/templates/Main.tsx\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/chartInfo */ \"./src/utils/chartInfo.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar options = {\n  responsive: true,\n  maintainAspectRatio: true,\n  title: {\n    display: true,\n    text: \"BAC Analysis - Robert Cannon M.D.\",\n    fontSize: 24,\n    fontFamily: \"'Helvetica'\"\n  },\n  scales: {\n    xAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Known Times (AM)\"\n      },\n      ticks: {\n        callback: function callback(value, index, values) {\n          if (value === \"2:58 AM\") {\n            return value;\n          }\n        }\n      }\n    }],\n    yAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Blood Alcohol Concentration (g/ml)\"\n      },\n      ticks: {\n        callback: function callback(value, index, values) {}\n      }\n    }]\n  }\n};\nvar initialData = {\n  labels: [\"(time unknown)\", \"12:42 AM\", \"(time unknown)\", \"2:58 AM\", \"(time unknown)\", \"(time unknown)\"],\n  datasets: [{\n    data: [null, null, null, 0.16, null, null],\n    label: \"Genesis Petrillo\",\n    backgroundColor: \"#374151\",\n    borderColor: \"#374151\",\n    fill: false,\n    pointRadius: [1, 1, 8, 1, 1]\n  }]\n};\n\nvar Index = function Index() {\n  _s();\n\n  var applyScenarioOne = function applyScenarioOne() {\n    if (!data.datasets.some(function (scenario) {\n      return scenario.label == \"Medium\";\n    })) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioOne\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      console.log(data.datasets);\n    }\n  };\n\n  var applyScenarioTwo = function applyScenarioTwo() {\n    if (!data.datasets.some(function (scenario) {\n      return scenario.label == \"Low\";\n    })) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioTwo\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      console.log(data.datasets);\n    }\n  };\n\n  var applyScenarioThree = function applyScenarioThree() {\n    if (!data.datasets.some(function (scenario) {\n      return scenario.label == \"High\";\n    })) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioThree\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      console.log(data.datasets);\n    }\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(initialData),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // only add user preferences if the user has logged in\n    console.log(\"data has changed\");\n  }, [data.datasets]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_templates_Main__WEBPACK_IMPORTED_MODULE_5__[\"Main\"], {\n    meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_layout_Meta__WEBPACK_IMPORTED_MODULE_4__[\"Meta\"], {\n      title: \"Cannon Demonstrative\",\n      description: \"The demonstrative for Dr. Robert Cannon - Gardner Consulting.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }, _this),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"m-8\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex w-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__[\"Line\"], {\n          data: data,\n          width: 600,\n          height: 280,\n          options: options\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"flex justify-center w-full h-16 mt-8\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 mx-16 text-white bg-green-500 rounded-lg shadow hover:bg-green-600\",\n          onClick: function onClick() {\n            return applyScenarioOne();\n          },\n          children: \"Scenario One\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 mx-16 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600\",\n          onClick: function onClick() {\n            return applyScenarioTwo();\n          },\n          children: \"Scenario Two\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n          className: \"px-4 mx-16 text-white bg-red-500 rounded-lg shadow hover:bg-red-600\",\n          onClick: function onClick() {\n            return applyScenarioThree();\n          },\n          children: \"Scenario Three\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 101,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"A2wpUDj2vsVhzBQraLwic4bnRJI=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJzY2FsZXMiLCJ4QXhlcyIsInNjYWxlTGFiZWwiLCJsYWJlbFN0cmluZyIsInRpY2tzIiwiY2FsbGJhY2siLCJ2YWx1ZSIsImluZGV4IiwidmFsdWVzIiwieUF4ZXMiLCJpbml0aWFsRGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiZGF0YSIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJmaWxsIiwicG9pbnRSYWRpdXMiLCJJbmRleCIsImFwcGx5U2NlbmFyaW9PbmUiLCJzb21lIiwic2NlbmFyaW8iLCJ1cGRhdGVkRGF0YXNldHMiLCJzY2VuYXJpb09uZSIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwiYXBwbHlTY2VuYXJpb1R3byIsInNjZW5hcmlvVHdvIiwiYXBwbHlTY2VuYXJpb1RocmVlIiwic2NlbmFyaW9UaHJlZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLFlBQVUsRUFBRSxJQURFO0FBRWRDLHFCQUFtQixFQUFFLElBRlA7QUFHZEMsT0FBSyxFQUFFO0FBQ0xDLFdBQU8sRUFBRSxJQURKO0FBRUxDLFFBQUksRUFBRSxtQ0FGRDtBQUdMQyxZQUFRLEVBQUUsRUFITDtBQUlMQyxjQUFVLEVBQUU7QUFKUCxHQUhPO0FBU2RDLFFBQU0sRUFBRTtBQUNOQyxTQUFLLEVBQUUsQ0FDTDtBQUNFQyxnQkFBVSxFQUFFO0FBQ1ZOLGVBQU8sRUFBRSxJQURDO0FBRVZPLG1CQUFXLEVBQUU7QUFGSCxPQURk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QUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQWlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUNELENBckVEOztHQUFNWCxLOztLQUFBQSxLO0FBdUVTQSxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBNZXRhIH0gZnJvbSBcIi4uL2xheW91dC9NZXRhXCI7XG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4uL3RlbXBsYXRlcy9NYWluXCI7XG5pbXBvcnQgeyBMaW5lIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuaW1wb3J0IHsgc2NlbmFyaW9PbmUsIHNjZW5hcmlvVHdvLCBzY2VuYXJpb1RocmVlIH0gZnJvbSBcIi4uL3V0aWxzL2NoYXJ0SW5mb1wiO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICByZXNwb25zaXZlOiB0cnVlLFxuICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxuICB0aXRsZToge1xuICAgIGRpc3BsYXk6IHRydWUsXG4gICAgdGV4dDogXCJCQUMgQW5hbHlzaXMgLSBSb2JlcnQgQ2Fubm9uIE0uRC5cIixcbiAgICBmb250U2l6ZTogMjQsXG4gICAgZm9udEZhbWlseTogXCInSGVsdmV0aWNhJ1wiLFxuICB9LFxuICBzY2FsZXM6IHtcbiAgICB4QXhlczogW1xuICAgICAge1xuICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbFN0cmluZzogXCJLbm93biBUaW1lcyAoQU0pXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZTogU3RyaW5nLCBpbmRleCwgdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiMjo1OCBBTVwiKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIHlBeGVzOiBbXG4gICAgICB7XG4gICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiBcIkJsb29kIEFsY29ob2wgQ29uY2VudHJhdGlvbiAoZy9tbClcIixcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgdmFsdWVzKSB7fSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG5cbmNvbnN0IGluaXRpYWxEYXRhID0ge1xuICBsYWJlbHM6IFtcbiAgICBcIih0aW1lIHVua25vd24pXCIsXG4gICAgXCIxMjo0MiBBTVwiLFxuICAgIFwiKHRpbWUgdW5rbm93bilcIixcbiAgICBcIjI6NTggQU1cIixcbiAgICBcIih0aW1lIHVua25vd24pXCIsXG4gICAgXCIodGltZSB1bmtub3duKVwiLFxuICBdLFxuICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGRhdGE6IFtudWxsLCBudWxsLCBudWxsLCAwLjE2LCBudWxsLCBudWxsXSxcbiAgICAgIGxhYmVsOiBcIkdlbmVzaXMgUGV0cmlsbG9cIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzc0MTUxXCIsXG4gICAgICBib3JkZXJDb2xvcjogXCIjMzc0MTUxXCIsXG4gICAgICBmaWxsOiBmYWxzZSxcbiAgICAgIHBvaW50UmFkaXVzOiBbMSwgMSwgOCwgMSwgMV0sXG4gICAgfSxcbiAgXSxcbn07XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBhcHBseVNjZW5hcmlvT25lID0gKCkgPT4ge1xuICAgIGlmICghZGF0YS5kYXRhc2V0cy5zb21lKChzY2VuYXJpbykgPT4gc2NlbmFyaW8ubGFiZWwgPT0gXCJNZWRpdW1cIikpIHtcbiAgICAgIGxldCB1cGRhdGVkRGF0YXNldHMgPSBbLi4uZGF0YS5kYXRhc2V0cywgc2NlbmFyaW9PbmVdO1xuICAgICAgc2V0RGF0YSh7IC4uLmRhdGEsIGRhdGFzZXRzOiB1cGRhdGVkRGF0YXNldHMgfSk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGFzZXRzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXBwbHlTY2VuYXJpb1R3byA9ICgpID0+IHtcbiAgICBpZiAoIWRhdGEuZGF0YXNldHMuc29tZSgoc2NlbmFyaW8pID0+IHNjZW5hcmlvLmxhYmVsID09IFwiTG93XCIpKSB7XG4gICAgICBsZXQgdXBkYXRlZERhdGFzZXRzID0gWy4uLmRhdGEuZGF0YXNldHMsIHNjZW5hcmlvVHdvXTtcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBkYXRhc2V0czogdXBkYXRlZERhdGFzZXRzIH0pO1xuICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhc2V0cyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFwcGx5U2NlbmFyaW9UaHJlZSA9ICgpID0+IHtcbiAgICBpZiAoIWRhdGEuZGF0YXNldHMuc29tZSgoc2NlbmFyaW8pID0+IHNjZW5hcmlvLmxhYmVsID09IFwiSGlnaFwiKSkge1xuICAgICAgbGV0IHVwZGF0ZWREYXRhc2V0cyA9IFsuLi5kYXRhLmRhdGFzZXRzLCBzY2VuYXJpb1RocmVlXTtcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBkYXRhc2V0czogdXBkYXRlZERhdGFzZXRzIH0pO1xuICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhc2V0cyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIG9ubHkgYWRkIHVzZXIgcHJlZmVyZW5jZXMgaWYgdGhlIHVzZXIgaGFzIGxvZ2dlZCBpblxuICAgIGNvbnNvbGUubG9nKFwiZGF0YSBoYXMgY2hhbmdlZFwiKTtcbiAgfSwgW2RhdGEuZGF0YXNldHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxNYWluXG4gICAgICBtZXRhPXtcbiAgICAgICAgPE1ldGFcbiAgICAgICAgICB0aXRsZT1cIkNhbm5vbiBEZW1vbnN0cmF0aXZlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSBkZW1vbnN0cmF0aXZlIGZvciBEci4gUm9iZXJ0IENhbm5vbiAtIEdhcmRuZXIgQ29uc3VsdGluZy5cIlxuICAgICAgICAvPlxuICAgICAgfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgICA8TGluZSBkYXRhPXtkYXRhfSB3aWR0aD17NjAwfSBoZWlnaHQ9ezI4MH0gb3B0aW9ucz17b3B0aW9uc30+PC9MaW5lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLTE2IG10LThcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IG14LTE2IHRleHQtd2hpdGUgYmctZ3JlZW4tNTAwIHJvdW5kZWQtbGcgc2hhZG93IGhvdmVyOmJnLWdyZWVuLTYwMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBseVNjZW5hcmlvT25lKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2NlbmFyaW8gT25lXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBteC0xNiB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbGcgc2hhZG93IGhvdmVyOmJnLWJsdWUtNjAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGx5U2NlbmFyaW9Ud28oKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTY2VuYXJpbyBUd29cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IG14LTE2IHRleHQtd2hpdGUgYmctcmVkLTUwMCByb3VuZGVkLWxnIHNoYWRvdyBob3ZlcjpiZy1yZWQtNjAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGx5U2NlbmFyaW9UaHJlZSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNjZW5hcmlvIFRocmVlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvTWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})