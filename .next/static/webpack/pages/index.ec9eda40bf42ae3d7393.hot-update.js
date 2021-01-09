webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Meta */ \"./src/layout/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Main */ \"./src/templates/Main.tsx\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/chartInfo */ \"./src/utils/chartInfo.ts\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chartjs-plugin-annotation */ \"./node_modules/chartjs-plugin-annotation/src/index.js\");\n/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioOneShown = _useState[0],\n      setScenarioOneShown = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioTwoShown = _useState2[0],\n      setScenarioTwoShown = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scenarioThreeShown = _useState3[0],\n      setScenarioThreeShown = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      oneMeasurementShown = _useState4[0],\n      setOneMeasurementShown = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"initialData\"]),\n      data = _useState5[0],\n      setData = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"config\"]),\n      options = _useState6[0],\n      setOptions = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    document.addEventListener(\"keyup\", function (e) {\n      if (e.key === \"p\") {\n        console.log(\"p is pressed\");\n        applyOneMeasurement();\n      }\n    });\n  }, []); // useKeyPress(\n  //   \"Escape\",\n  //   () => {\n  //     const value = applyOneMeasurement(data);\n  //     console.log(\"updated is \", value);\n  //     setData(value);\n  //     console.log(\"updatedData is \", data);\n  //   },\n  //   data\n  // );\n  // learn arrow functions vs regular\n  // pass in the value\n  // return the updated data object\n\n  function applyOneMeasurement() {\n    console.log(scenarioTwoShown);\n\n    if (!oneMeasurementShown) {\n      console.log(data.datasets);\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"oneMeasurement\"]]);\n      var updatedAnnotations = {\n        annotations: _utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"annotations\"]\n      };\n      options.scales.xAxes.ticks = true;\n      var updatedScales = options.scales; // set xAxes and yAxes\n\n      updatedScales.xAxes[0].ticks.display = true;\n      updatedScales.yAxes[0].ticks.display = true;\n      setOptions(_objectSpread(_objectSpread({}, options), {}, {\n        scales: updatedScales,\n        annotation: updatedAnnotations\n      }));\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n    }\n  }\n\n  var toggleScenarioOne = function toggleScenarioOne() {\n    if (!scenarioOneShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioOne\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioOneShown(true);\n    } else {\n      var _updatedDatasets = data.datasets.filter(function (dataset) {\n        return dataset.label !== \"Typical curve\";\n      });\n\n      console.log(\"updatedDataset is: \", _updatedDatasets);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: _updatedDatasets\n      }));\n      setScenarioOneShown(false);\n    }\n  };\n\n  var applyScenarioTwo = function applyScenarioTwo() {\n    if (!scenarioTwoShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioTwo\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioTwoShown(true);\n    } else {\n      var _updatedDatasets2 = data.datasets.filter(function (dataset) {\n        return dataset.label !== \"Possible curve #1\";\n      });\n\n      console.log(\"updatedDataset is: \", _updatedDatasets2);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: _updatedDatasets2\n      }));\n      setScenarioTwoShown(false);\n    }\n  };\n\n  var applyScenarioThree = function applyScenarioThree() {\n    if (!scenarioThreeShown) {\n      var updatedDatasets = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.datasets), [_utils_chartInfo__WEBPACK_IMPORTED_MODULE_7__[\"scenarioThree\"]]);\n      setData(_objectSpread(_objectSpread({}, data), {}, {\n        datasets: updatedDatasets\n      }));\n      setScenarioThreeShown(true);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_templates_Main__WEBPACK_IMPORTED_MODULE_5__[\"Main\"], {\n      meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_layout_Meta__WEBPACK_IMPORTED_MODULE_4__[\"Meta\"], {\n        title: \"Cannon Demonstrative\",\n        description: \"The demonstrative for Dr. Robert Cannon - Gardner Consulting.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 11\n      }, _this),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: \"mx-16 mt-20\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"flex w-full\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__[\"Line\"], {\n            data: data,\n            width: 600,\n            height: 300,\n            options: options\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"flex justify-center w-full mt-6 text-xl\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            id: \"typical\",\n            className: \"px-4 focus:outline-none focus:ring py-2 font-semibold bg-transparent border rounded hover:text-white transition duration-300 ease-in-out  \" + (!scenarioOneShown ? \"opacity-25 text-green-700 border-green-500 hover:bg-green-500 hover:border-transparent\" : \"text-white bg-green-500 border-green-500 hover:border-transparent \"),\n            onClick: function onClick() {\n              return toggleScenarioOne();\n            },\n            children: \"Typical Curve\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            id: \"possible1\",\n            className: \"transition focus:outline-none focus:ring outline-none duration-300 ease-in-out px-4 py-2 mx-16 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioTwoShown ? \"opacity-25 text-blue-700 border-blue-500 hover:bg-blue-500 hover:border-transparent\" : \"text-white bg-blue-500 border-blue-500 hover:border-transparent \"),\n            onClick: function onClick() {\n              return applyScenarioTwo();\n            },\n            children: \"Possible Curve #1\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n            id: \"possible2\",\n            className: \"transition focus:outline-none focus:ring outline-none duration-300 ease-in-out px-4 py-2 font-semibold bg-transparent border rounded hover:text-white  \" + (!scenarioThreeShown ? \"opacity-25 text-red-700 border-red-500 hover:bg-red-500 hover:border-transparent\" : \"text-white bg-red-500 border-red-500 hover:border-transparent \"),\n            onClick: function onClick() {\n              return applyScenarioThree();\n            },\n            children: \"Possible Curve #2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 149,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 111,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"SkTQ9YooAuczlj3Vzjb/LSsMjYQ=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJzY2VuYXJpb09uZVNob3duIiwic2V0U2NlbmFyaW9PbmVTaG93biIsInNjZW5hcmlvVHdvU2hvd24iLCJzZXRTY2VuYXJpb1R3b1Nob3duIiwic2NlbmFyaW9UaHJlZVNob3duIiwic2V0U2NlbmFyaW9UaHJlZVNob3duIiwib25lTWVhc3VyZW1lbnRTaG93biIsInNldE9uZU1lYXN1cmVtZW50U2hvd24iLCJpbml0aWFsRGF0YSIsImRhdGEiLCJzZXREYXRhIiwiY29uZmlnIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwiY29uc29sZSIsImxvZyIsImFwcGx5T25lTWVhc3VyZW1lbnQiLCJkYXRhc2V0cyIsInVwZGF0ZWREYXRhc2V0cyIsIm9uZU1lYXN1cmVtZW50IiwidXBkYXRlZEFubm90YXRpb25zIiwiYW5ub3RhdGlvbnMiLCJzY2FsZXMiLCJ4QXhlcyIsInRpY2tzIiwidXBkYXRlZFNjYWxlcyIsImRpc3BsYXkiLCJ5QXhlcyIsImFubm90YXRpb24iLCJ0b2dnbGVTY2VuYXJpb09uZSIsInNjZW5hcmlvT25lIiwiZmlsdGVyIiwiZGF0YXNldCIsImxhYmVsIiwiYXBwbHlTY2VuYXJpb1R3byIsInNjZW5hcmlvVHdvIiwiYXBwbHlTY2VuYXJpb1RocmVlIiwic2NlbmFyaW9UaHJlZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUM4QkMsc0RBQVEsQ0FBQyxLQUFELENBRHRDO0FBQUEsTUFDWEMsZ0JBRFc7QUFBQSxNQUNPQyxtQkFEUDs7QUFBQSxtQkFF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ImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBNZXRhIH0gZnJvbSBcIi4uL2xheW91dC9NZXRhXCI7XG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4uL3RlbXBsYXRlcy9NYWluXCI7XG5pbXBvcnQgeyBMaW5lIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuaW1wb3J0IHtcbiAgc2NlbmFyaW9PbmUsXG4gIHNjZW5hcmlvVHdvLFxuICBzY2VuYXJpb1RocmVlLFxuICBpbml0aWFsRGF0YSxcbiAgb25lTWVhc3VyZW1lbnQsXG4gIGFubm90YXRpb25zLFxuICBjb25maWcsXG59IGZyb20gXCIuLi91dGlscy9jaGFydEluZm9cIjtcbmltcG9ydCB1c2VLZXlQcmVzcyBmcm9tIFwiLi4vaG9va3MvdXNlS2V5UHJlc3NcIjtcbmltcG9ydCBcImNoYXJ0anMtcGx1Z2luLWFubm90YXRpb25cIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtzY2VuYXJpb09uZVNob3duLCBzZXRTY2VuYXJpb09uZVNob3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NjZW5hcmlvVHdvU2hvd24sIHNldFNjZW5hcmlvVHdvU2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2NlbmFyaW9UaHJlZVNob3duLCBzZXRTY2VuYXJpb1RocmVlU2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb25lTWVhc3VyZW1lbnRTaG93biwgc2V0T25lTWVhc3VyZW1lbnRTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoY29uZmlnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcInBcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInAgaXMgcHJlc3NlZFwiKTtcbiAgICAgICAgYXBwbHlPbmVNZWFzdXJlbWVudCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gdXNlS2V5UHJlc3MoXG4gIC8vICAgXCJFc2NhcGVcIixcbiAgLy8gICAoKSA9PiB7XG4gIC8vICAgICBjb25zdCB2YWx1ZSA9IGFwcGx5T25lTWVhc3VyZW1lbnQoZGF0YSk7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZWQgaXMgXCIsIHZhbHVlKTtcbiAgLy8gICAgIHNldERhdGEodmFsdWUpO1xuICAvLyAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVkRGF0YSBpcyBcIiwgZGF0YSk7XG4gIC8vICAgfSxcbiAgLy8gICBkYXRhXG4gIC8vICk7XG4gIC8vIGxlYXJuIGFycm93IGZ1bmN0aW9ucyB2cyByZWd1bGFyXG4gIC8vIHBhc3MgaW4gdGhlIHZhbHVlXG4gIC8vIHJldHVybiB0aGUgdXBkYXRlZCBkYXRhIG9iamVjdFxuXG4gIGZ1bmN0aW9uIGFwcGx5T25lTWVhc3VyZW1lbnQoKSB7XG4gICAgY29uc29sZS5sb2coc2NlbmFyaW9Ud29TaG93bik7XG4gICAgaWYgKCFvbmVNZWFzdXJlbWVudFNob3duKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGFzZXRzKTtcbiAgICAgIGxldCB1cGRhdGVkRGF0YXNldHMgPSBbLi4uZGF0YS5kYXRhc2V0cywgb25lTWVhc3VyZW1lbnRdO1xuICAgICAgbGV0IHVwZGF0ZWRBbm5vdGF0aW9ucyA9IHtcbiAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25zLFxuICAgICAgfTtcbiAgICAgIG9wdGlvbnMuc2NhbGVzLnhBeGVzLnRpY2tzID0gdHJ1ZTtcbiAgICAgIGxldCB1cGRhdGVkU2NhbGVzID0gb3B0aW9ucy5zY2FsZXM7XG4gICAgICAvLyBzZXQgeEF4ZXMgYW5kIHlBeGVzXG4gICAgICB1cGRhdGVkU2NhbGVzLnhBeGVzWzBdLnRpY2tzLmRpc3BsYXkgPSB0cnVlO1xuICAgICAgdXBkYXRlZFNjYWxlcy55QXhlc1swXS50aWNrcy5kaXNwbGF5ID0gdHJ1ZTtcbiAgICAgIHNldE9wdGlvbnMoe1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBzY2FsZXM6IHVwZGF0ZWRTY2FsZXMsXG4gICAgICAgIGFubm90YXRpb246IHVwZGF0ZWRBbm5vdGF0aW9ucyxcbiAgICAgIH0pO1xuXG4gICAgICBzZXREYXRhKHsgLi4uZGF0YSwgZGF0YXNldHM6IHVwZGF0ZWREYXRhc2V0cyB9KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB0b2dnbGVTY2VuYXJpb09uZSA9ICgpID0+IHtcbiAgICBpZiAoIXNjZW5hcmlvT25lU2hvd24pIHtcbiAgICAgIGxldCB1cGRhdGVkRGF0YXNldHM6IG9iamVjdFtdID0gWy4uLmRhdGEuZGF0YXNldHMsIHNjZW5hcmlvT25lXTtcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBkYXRhc2V0czogdXBkYXRlZERhdGFzZXRzIH0pO1xuICAgICAgc2V0U2NlbmFyaW9PbmVTaG93bih0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXBkYXRlZERhdGFzZXRzOiBvYmplY3RbXSA9IGRhdGEuZGF0YXNldHMuZmlsdGVyKChkYXRhc2V0KSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhc2V0LmxhYmVsICE9PSBcIlR5cGljYWwgY3VydmVcIjtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVkRGF0YXNldCBpczogXCIsIHVwZGF0ZWREYXRhc2V0cyk7XG4gICAgICBzZXREYXRhKHsgLi4uZGF0YSwgZGF0YXNldHM6IHVwZGF0ZWREYXRhc2V0cyB9KTtcbiAgICAgIHNldFNjZW5hcmlvT25lU2hvd24oZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhcHBseVNjZW5hcmlvVHdvID0gKCkgPT4ge1xuICAgIGlmICghc2NlbmFyaW9Ud29TaG93bikge1xuICAgICAgbGV0IHVwZGF0ZWREYXRhc2V0cyA9IFsuLi5kYXRhLmRhdGFzZXRzLCBzY2VuYXJpb1R3b107XG4gICAgICBzZXREYXRhKHsgLi4uZGF0YSwgZGF0YXNldHM6IHVwZGF0ZWREYXRhc2V0cyB9KTtcbiAgICAgIHNldFNjZW5hcmlvVHdvU2hvd24odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWREYXRhc2V0czogb2JqZWN0W10gPSBkYXRhLmRhdGFzZXRzLmZpbHRlcigoZGF0YXNldCkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YXNldC5sYWJlbCAhPT0gXCJQb3NzaWJsZSBjdXJ2ZSAjMVwiO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZWREYXRhc2V0IGlzOiBcIiwgdXBkYXRlZERhdGFzZXRzKTtcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBkYXRhc2V0czogdXBkYXRlZERhdGFzZXRzIH0pO1xuICAgICAgc2V0U2NlbmFyaW9Ud29TaG93bihmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFwcGx5U2NlbmFyaW9UaHJlZSA9ICgpID0+IHtcbiAgICBpZiAoIXNjZW5hcmlvVGhyZWVTaG93bikge1xuICAgICAgbGV0IHVwZGF0ZWREYXRhc2V0cyA9IFsuLi5kYXRhLmRhdGFzZXRzLCBzY2VuYXJpb1RocmVlXTtcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCBkYXRhc2V0czogdXBkYXRlZERhdGFzZXRzIH0pO1xuICAgICAgc2V0U2NlbmFyaW9UaHJlZVNob3duKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TWFpblxuICAgICAgICBtZXRhPXtcbiAgICAgICAgICA8TWV0YVxuICAgICAgICAgICAgdGl0bGU9XCJDYW5ub24gRGVtb25zdHJhdGl2ZVwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSBkZW1vbnN0cmF0aXZlIGZvciBEci4gUm9iZXJ0IENhbm5vbiAtIEdhcmRuZXIgQ29uc3VsdGluZy5cIlxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0xNiBtdC0yMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxMaW5lIGRhdGE9e2RhdGF9IHdpZHRoPXs2MDB9IGhlaWdodD17MzAwfSBvcHRpb25zPXtvcHRpb25zfT48L0xpbmU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBtdC02IHRleHQteGxcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgaWQ9XCJ0eXBpY2FsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICBcInB4LTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmcgcHktMiBmb250LXNlbWlib2xkIGJnLXRyYW5zcGFyZW50IGJvcmRlciByb3VuZGVkIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgIFwiICtcbiAgICAgICAgICAgICAgICAoIXNjZW5hcmlvT25lU2hvd25cbiAgICAgICAgICAgICAgICAgID8gXCJvcGFjaXR5LTI1IHRleHQtZ3JlZW4tNzAwIGJvcmRlci1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICA6IFwidGV4dC13aGl0ZSBiZy1ncmVlbi01MDAgYm9yZGVyLWdyZWVuLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlU2NlbmFyaW9PbmUoKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVHlwaWNhbCBDdXJ2ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGlkPVwicG9zc2libGUxXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb24gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmcgb3V0bGluZS1ub25lIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBweC00IHB5LTIgbXgtMTYgZm9udC1zZW1pYm9sZCBiZy10cmFuc3BhcmVudCBib3JkZXIgcm91bmRlZCBob3Zlcjp0ZXh0LXdoaXRlICBcIiArXG4gICAgICAgICAgICAgICAgKCFzY2VuYXJpb1R3b1Nob3duXG4gICAgICAgICAgICAgICAgICA/IFwib3BhY2l0eS0yNSB0ZXh0LWJsdWUtNzAwIGJvcmRlci1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgOiBcInRleHQtd2hpdGUgYmctYmx1ZS01MDAgYm9yZGVyLWJsdWUtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCBcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBseVNjZW5hcmlvVHdvKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFBvc3NpYmxlIEN1cnZlICMxXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgaWQ9XCJwb3NzaWJsZTJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvbiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyBvdXRsaW5lLW5vbmUgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IHB4LTQgcHktMiBmb250LXNlbWlib2xkIGJnLXRyYW5zcGFyZW50IGJvcmRlciByb3VuZGVkIGhvdmVyOnRleHQtd2hpdGUgIFwiICtcbiAgICAgICAgICAgICAgICAoIXNjZW5hcmlvVGhyZWVTaG93blxuICAgICAgICAgICAgICAgICAgPyBcIm9wYWNpdHktMjUgdGV4dC1yZWQtNzAwIGJvcmRlci1yZWQtNTAwIGhvdmVyOmJnLXJlZC01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LXdoaXRlIGJnLXJlZC01MDAgYm9yZGVyLXJlZC01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IFwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFwcGx5U2NlbmFyaW9UaHJlZSgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQb3NzaWJsZSBDdXJ2ZSAjMlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NYWluPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})