webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Meta */ \"./src/layout/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Main */ \"./src/templates/Main.tsx\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/chartInfo */ \"./src/utils/chartInfo.ts\");\n/* harmony import */ var _hooks_useKeyPress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useKeyPress */ \"./src/hooks/useKeyPress.tsx\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! chartjs-plugin-annotation */ \"./node_modules/chartjs-plugin-annotation/src/index.js\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioOneShown = _useState[0],\n      setScenarioOneShown = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioTwoShown = _useState2[0],\n      setScenarioTwoShown = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioThreeShown = _useState3[0],\n      setScenarioThreeShown = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      oneMeasurementShown = _useState4[0],\n      setOneMeasurementShown = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"initialData\"]),\n      data = _useState5[0],\n      setData = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"config\"]),\n      options = _useState6[0],\n      setOptions = _useState6[1];\n\n  Object(_hooks_useKeyPress__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"Escape\", function () {\n    setOneMeasurementShown(true);\n    setData(applyOneMeasurement(data));\n  }, data); // learn arrow functions vs regular\n  // pass in the value\n  // return the updated data object\n\n  function applyOneMeasurement(data) {\n    if (!oneMeasurementShown) {\n      console.log(\"data is \", data);\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"oneMeasurement\"]]);\n      var updatedAnnotations = {\n        annotations: _utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"annotations\"]\n      };\n      options.scales.xAxes.ticks = true;\n      var updatedScales = options.scales; // set xAxes and yAxes\n\n      updatedScales.xAxes[0].ticks.display = true;\n      updatedScales.yAxes[0].ticks.display = true;\n      setOptions(_objectSpread(_objectSpread({}, options), {}, {\n        scales: updatedScales,\n        annotation: updatedAnnotations\n      }));\n      data = _objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      });\n      return data;\n    }\n\n    return data;\n  }\n\n  var toggleScenarioOne = function toggleScenarioOne() {\n    if (!scenarioOneShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioOne\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioOneShown(true);\n    } // const updatedDatasets = data.datasets.map(dataset => {\n    //   // if this task has the same ID as the edited task\n    //     if (dataset. === task.id) {\n    //       //\n    //       return {...task, name: newName}\n    //     }\n    //     return task;\n    //   });\n    // console.log(data.datasets);\n    // setScenarioOneShown(false);\n\n  };\n\n  var applyScenarioTwo = function applyScenarioTwo() {\n    if (!scenarioTwoShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioTwo\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioTwoShown(true);\n    }\n  };\n\n  var applyScenarioThree = function applyScenarioThree() {\n    if (!scenarioThreeShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioThree\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioThreeShown(true);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_templates_Main__WEBPACK_IMPORTED_MODULE_5__[\"Main\"], {\n      meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_layout_Meta__WEBPACK_IMPORTED_MODULE_4__[\"Meta\"], {\n        title: \"Cannon Demonstrative\",\n        description: \"The demonstrative for Dr. Robert Cannon - Gardner Consulting.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 11\n      }, _this),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"mx-16 mt-20\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"flex w-full\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__[\"Line\"], {\n            data: data,\n            width: 600,\n            height: 300,\n            options: options\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"flex justify-center w-full mt-6 text-xl\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            id: \"typical\",\n            className: \"px-4 focus:outline-none focus:ring py-2 font-semibold bg-transparent border rounded hover:text-white transition duration-300 ease-in-out  \" + (!scenarioOneShown ? \"opacity-25 text-green-700 border-green-500 hover:bg-green-500 hover:border-transparent\" : \"text-white bg-green-500 border-green-500 hover:border-transparent \"),\n            onClick: function onClick() {\n              return toggleScenarioOne();\n            },\n            children: \"Typical Curve\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            id: \"possible1\",\n            className: \"transition focus:outline-none focus:ring outline-none duration-300 ease-in-out px-4 py-2 mx-16 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioTwoShown ? \"opacity-25 text-blue-700 border-blue-500 hover:bg-blue-500 hover:border-transparent\" : \"text-white bg-blue-500 border-blue-500 hover:border-transparent \"),\n            onClick: function onClick() {\n              return applyScenarioTwo();\n            },\n            children: \"Possible Curve #1\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            id: \"possible2\",\n            className: \"transition focus:outline-none focus:ring outline-none duration-300 ease-in-out px-4 py-2 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioThreeShown ? \"opacity-25 text-red-700 border-red-500 hover:bg-red-500 hover:border-transparent\" : \"text-white bg-red-500 border-red-500 hover:border-transparent \"),\n            onClick: function onClick() {\n              return applyScenarioThree();\n            },\n            children: \"Possible Curve #2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"ZId1smLPleB6SChot9URyu88o+M=\", false, function () {\n  return [_hooks_useKeyPress__WEBPACK_IMPORTED_MODULE_8__[\"default\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJzY2VuYXJpb09uZVNob3duIiwic2V0U2NlbmFyaW9PbmVTaG93biIsInNjZW5hcmlvVHdvU2hvd24iLCJzZXRTY2VuYXJpb1R3b1Nob3duIiwic2NlbmFyaW9UaHJlZVNob3duIiwic2V0U2NlbmFyaW9UaHJlZVNob3duIiwib25lTWVhc3VyZW1lbnRTaG93biIsInNldE9uZU1lYXN1cmVtZW50U2hvd24iLCJpbml0aWFsRGF0YSIsImRhdGEiLCJzZXREYXRhIiwiY29uZmlnIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1c2VLZXlQcmVzcyIsImFwcGx5T25lTWVhc3VyZW1lbnQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlZERhdGFzZXRzIiwiZGF0YXNldHMiLCJvbmVNZWFzdXJlbWVudCIsInVwZGF0ZWRBbm5vdGF0aW9ucyIsImFubm90YXRpb25zIiwic2NhbGVzIiwieEF4ZXMiLCJ0aWNrcyIsInVwZGF0ZWRTY2FsZXMiLCJkaXNwbGF5IiwieUF4ZXMiLCJhbm5vdGF0aW9uIiwidG9nZ2xlU2NlbmFyaW9PbmUiLCJzY2VuYXJpb09uZSIsImFwcGx5U2NlbmFyaW9Ud28iLCJzY2VuYXJpb1R3byIsImFwcGx5U2NlbmFyaW9UaHJlZSIsInNjZW5hcmlvVGhyZWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDOEJDLHNEQUFRLENBQUMsS0FBRCxDQUR0QztBQUFBLE1BQ1hDLGdCQURXO0FBQUEsTUFDT0MsbUJBRFA7O0FBQUEsbUJBRThCRixzREFBUSxDQUFDLEtBQUQsQ0FGdEM7QUFBQSxNQUVYRyxnQkFGVztBQUFBLE1BRU9DLG1CQUZQ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QkFBTThCLGtCQUFrQixFQUF4QjtBQUFBLGFBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0RELENBdElEOztHQUFNcEMsSztVQVFKZ0IsMEQ7OztLQVJJaEIsSztBQXdJU0Esb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgTWV0YSB9IGZyb20gXCIuLi9sYXlvdXQvTWV0YVwiO1xuaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuLi90ZW1wbGF0ZXMvTWFpblwiO1xuaW1wb3J0IHsgTGluZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCB7XG4gIHNjZW5hcmlvT25lLFxuICBzY2VuYXJpb1R3byxcbiAgc2NlbmFyaW9UaHJlZSxcbiAgaW5pdGlhbERhdGEsXG4gIG9uZU1lYXN1cmVtZW50LFxuICBhbm5vdGF0aW9ucyxcbiAgY29uZmlnLFxufSBmcm9tIFwiLi4vdXRpbHMvY2hhcnRJbmZvXCI7XG5pbXBvcnQgdXNlS2V5UHJlc3MgZnJvbSBcIi4uL2hvb2tzL3VzZUtleVByZXNzXCI7XG5pbXBvcnQgXCJjaGFydGpzLXBsdWdpbi1hbm5vdGF0aW9uXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbc2NlbmFyaW9PbmVTaG93biwgc2V0U2NlbmFyaW9PbmVTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY2VuYXJpb1R3b1Nob3duLCBzZXRTY2VuYXJpb1R3b1Nob3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NjZW5hcmlvVGhyZWVTaG93biwgc2V0U2NlbmFyaW9UaHJlZVNob3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW29uZU1lYXN1cmVtZW50U2hvd24sIHNldE9uZU1lYXN1cmVtZW50U2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSk7XG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKGNvbmZpZyk7XG5cbiAgdXNlS2V5UHJlc3MoXG4gICAgXCJFc2NhcGVcIixcbiAgICAoKSA9PiB7XG4gICAgICBzZXRPbmVNZWFzdXJlbWVudFNob3duKHRydWUpO1xuICAgICAgc2V0RGF0YShhcHBseU9uZU1lYXN1cmVtZW50KGRhdGEpKTtcbiAgICB9LFxuICAgIGRhdGFcbiAgKTtcbiAgLy8gbGVhcm4gYXJyb3cgZnVuY3Rpb25zIHZzIHJlZ3VsYXJcbiAgLy8gcGFzcyBpbiB0aGUgdmFsdWVcbiAgLy8gcmV0dXJuIHRoZSB1cGRhdGVkIGRhdGEgb2JqZWN0XG5cbiAgZnVuY3Rpb24gYXBwbHlPbmVNZWFzdXJlbWVudChkYXRhOiBvYmplY3QpIHtcbiAgICBpZiAoIW9uZU1lYXN1cmVtZW50U2hvd24pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBpcyBcIiwgZGF0YSk7XG4gICAgICBsZXQgdXBkYXRlZERhdGFzZXRzID0gWy4uLmRhdGEuZGF0YXNldHMsIG9uZU1lYXN1cmVtZW50XTtcbiAgICAgIGxldCB1cGRhdGVkQW5ub3RhdGlvbnMgPSB7XG4gICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9ucyxcbiAgICAgIH07XG4gICAgICBvcHRpb25zLnNjYWxlcy54QXhlcy50aWNrcyA9IHRydWU7XG4gICAgICBsZXQgdXBkYXRlZFNjYWxlcyA9IG9wdGlvbnMuc2NhbGVzO1xuICAgICAgLy8gc2V0IHhBeGVzIGFuZCB5QXhlc1xuICAgICAgdXBkYXRlZFNjYWxlcy54QXhlc1swXS50aWNrcy5kaXNwbGF5ID0gdHJ1ZTtcbiAgICAgIHVwZGF0ZWRTY2FsZXMueUF4ZXNbMF0udGlja3MuZGlzcGxheSA9IHRydWU7XG4gICAgICBzZXRPcHRpb25zKHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgc2NhbGVzOiB1cGRhdGVkU2NhbGVzLFxuICAgICAgICBhbm5vdGF0aW9uOiB1cGRhdGVkQW5ub3RhdGlvbnMsXG4gICAgICB9KTtcblxuICAgICAgZGF0YSA9IHsgLi4uZGF0YSwgZGF0YXNldHM6IHVwZGF0ZWREYXRhc2V0cyB9O1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgY29uc3QgdG9nZ2xlU2NlbmFyaW9PbmUgPSAoKSA9PiB7XG4gICAgaWYgKCFzY2VuYXJpb09uZVNob3duKSB7XG4gICAgICBsZXQgdXBkYXRlZERhdGFzZXRzID0gWy4uLmRhdGEuZGF0YXNldHMsIHNjZW5hcmlvT25lXTtcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBkYXRhc2V0czogdXBkYXRlZERhdGFzZXRzIH0pO1xuICAgICAgc2V0U2NlbmFyaW9PbmVTaG93bih0cnVlKTtcbiAgICB9XG4gICAgLy8gY29uc3QgdXBkYXRlZERhdGFzZXRzID0gZGF0YS5kYXRhc2V0cy5tYXAoZGF0YXNldCA9PiB7XG4gICAgLy8gICAvLyBpZiB0aGlzIHRhc2sgaGFzIHRoZSBzYW1lIElEIGFzIHRoZSBlZGl0ZWQgdGFza1xuICAgIC8vICAgICBpZiAoZGF0YXNldC4gPT09IHRhc2suaWQpIHtcbiAgICAvLyAgICAgICAvL1xuICAgIC8vICAgICAgIHJldHVybiB7Li4udGFzaywgbmFtZTogbmV3TmFtZX1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gdGFzaztcbiAgICAvLyAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuZGF0YXNldHMpO1xuICAgIC8vIHNldFNjZW5hcmlvT25lU2hvd24oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGFwcGx5U2NlbmFyaW9Ud28gPSAoKSA9PiB7XG4gICAgaWYgKCFzY2VuYXJpb1R3b1Nob3duKSB7XG4gICAgICBsZXQgdXBkYXRlZERhdGFzZXRzID0gWy4uLmRhdGEuZGF0YXNldHMsIHNjZW5hcmlvVHdvXTtcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBkYXRhc2V0czogdXBkYXRlZERhdGFzZXRzIH0pO1xuICAgICAgc2V0U2NlbmFyaW9Ud29TaG93bih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXBwbHlTY2VuYXJpb1RocmVlID0gKCkgPT4ge1xuICAgIGlmICghc2NlbmFyaW9UaHJlZVNob3duKSB7XG4gICAgICBsZXQgdXBkYXRlZERhdGFzZXRzID0gWy4uLmRhdGEuZGF0YXNldHMsIHNjZW5hcmlvVGhyZWVdO1xuICAgICAgc2V0RGF0YSh7IC4uLmRhdGEsIGRhdGFzZXRzOiB1cGRhdGVkRGF0YXNldHMgfSk7XG4gICAgICBzZXRTY2VuYXJpb1RocmVlU2hvd24odHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxNYWluXG4gICAgICAgIG1ldGE9e1xuICAgICAgICAgIDxNZXRhXG4gICAgICAgICAgICB0aXRsZT1cIkNhbm5vbiBEZW1vbnN0cmF0aXZlXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIGRlbW9uc3RyYXRpdmUgZm9yIERyLiBSb2JlcnQgQ2Fubm9uIC0gR2FyZG5lciBDb25zdWx0aW5nLlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTE2IG10LTIwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiPlxuICAgICAgICAgICAgPExpbmUgZGF0YT17ZGF0YX0gd2lkdGg9ezYwMH0gaGVpZ2h0PXszMDB9IG9wdGlvbnM9e29wdGlvbnN9PjwvTGluZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIG10LTYgdGV4dC14bFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBpZD1cInR5cGljYWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIFwicHgtNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyBweS0yIGZvbnQtc2VtaWJvbGQgYmctdHJhbnNwYXJlbnQgYm9yZGVyIHJvdW5kZWQgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCAgXCIgK1xuICAgICAgICAgICAgICAgICghc2NlbmFyaW9PbmVTaG93blxuICAgICAgICAgICAgICAgICAgPyBcIm9wYWNpdHktMjUgdGV4dC1ncmVlbi03MDAgYm9yZGVyLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LXdoaXRlIGJnLWdyZWVuLTUwMCBib3JkZXItZ3JlZW4tNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCBcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVTY2VuYXJpb09uZSgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBUeXBpY2FsIEN1cnZlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgaWQ9XCJwb3NzaWJsZTFcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvbiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyBvdXRsaW5lLW5vbmUgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IHB4LTQgcHktMiBteC0xNiBmb250LXNlbWlib2xkIGJnLXRyYW5zcGFyZW50IGJvcmRlciByb3VuZGVkIGhvdmVyOnRleHQtd2hpdGUgIFwiICtcbiAgICAgICAgICAgICAgICAoIXNjZW5hcmlvVHdvU2hvd25cbiAgICAgICAgICAgICAgICAgID8gXCJvcGFjaXR5LTI1IHRleHQtYmx1ZS03MDAgYm9yZGVyLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICA6IFwidGV4dC13aGl0ZSBiZy1ibHVlLTUwMCBib3JkZXItYmx1ZS01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IFwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGx5U2NlbmFyaW9Ud28oKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUG9zc2libGUgQ3VydmUgIzFcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBpZD1cInBvc3NpYmxlMlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIG91dGxpbmUtbm9uZSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgcHgtNCBweS0yIGZvbnQtc2VtaWJvbGQgYmctdHJhbnNwYXJlbnQgYm9yZGVyIHJvdW5kZWQgaG92ZXI6dGV4dC13aGl0ZSAgXCIgK1xuICAgICAgICAgICAgICAgICghc2NlbmFyaW9UaHJlZVNob3duXG4gICAgICAgICAgICAgICAgICA/IFwib3BhY2l0eS0yNSB0ZXh0LXJlZC03MDAgYm9yZGVyLXJlZC01MDAgaG92ZXI6YmctcmVkLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgOiBcInRleHQtd2hpdGUgYmctcmVkLTUwMCBib3JkZXItcmVkLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXBwbHlTY2VuYXJpb1RocmVlKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFBvc3NpYmxlIEN1cnZlICMyXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01haW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})