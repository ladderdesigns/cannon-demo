webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/Meta */ \"./src/layout/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/Main */ \"./src/templates/Main.tsx\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_chartInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/chartInfo */ \"./src/utils/chartInfo.ts\");\n\n\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar options = {\n  title: {\n    display: true,\n    text: \"BAC Analysis - Robert Cannon M.D.\",\n    fontSize: 24,\n    fontFamily: \"'Helvetica'\"\n  },\n  scales: {\n    xAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Known Times (AM)\"\n      },\n      ticks: {\n        callback: function callback(value, index, values) {\n          if (value === \"2:58 AM\") {\n            return value;\n          }\n        }\n      }\n    }],\n    yAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Blood Alcohol Concentration (g/ml)\"\n      },\n      ticks: {\n        callback: function callback(value, index, values) {}\n      }\n    }]\n  }\n};\nvar initialData = {\n  labels: [\"(time unknown)\", \"12:42 AM\", \"(time unknown)\", \"2:58 AM\", \"(time unknown)\", \"(time unknown)\"],\n  datasets: [{\n    data: [null, null, null, 0.16, null, null],\n    label: \"Genesis Petrillo\",\n    backgroundColor: \"#374151\",\n    borderColor: \"#374151\",\n    fill: false\n  }]\n};\n\nvar Index = function Index() {\n  _s();\n\n  var applyOne = function applyOne() {\n    var updatedDatasets = _objectSpread(_objectSpread({}, initialData.datasets), {}, {\n      scenarioOne: _utils_chartInfo__WEBPACK_IMPORTED_MODULE_6__[\"scenarioOne\"]\n    });\n\n    console.log(\"updatedDatasets is \", updatedDatasets);\n    setData(_objectSpread(_objectSpread({}, data), {}, {\n      datasets: updatedDatasets\n    }));\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(initialData),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    // only add user preferences if the user has logged in\n    console.log(\"data has changed\");\n  }, [data.datasets]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_templates_Main__WEBPACK_IMPORTED_MODULE_4__[\"Main\"], {\n    meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_layout_Meta__WEBPACK_IMPORTED_MODULE_3__[\"Meta\"], {\n      title: \"Cannon Demonstrative\",\n      description: \"The demonstrative for Dr. Robert Cannon - Gardner Consulting.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }, _this),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"m-20\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__[\"Line\"], {\n        data: data,\n        options: options\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return applyOne();\n        },\n        children: \"Click me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"A2wpUDj2vsVhzBQraLwic4bnRJI=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwiZm9udFNpemUiLCJmb250RmFtaWx5Iiwic2NhbGVzIiwieEF4ZXMiLCJzY2FsZUxhYmVsIiwibGFiZWxTdHJpbmciLCJ0aWNrcyIsImNhbGxiYWNrIiwidmFsdWUiLCJpbmRleCIsInZhbHVlcyIsInlBeGVzIiwiaW5pdGlhbERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImRhdGEiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiZmlsbCIsIkluZGV4IiwiYXBwbHlPbmUiLCJ1cGRhdGVkRGF0YXNldHMiLCJzY2VuYXJpb09uZSIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBQ2RDLE9BQUssRUFBRTtBQUNMQyxXQUFPLEVBQUUsSUFESjtBQUVMQyxRQUFJLEVBQUUsbUNBRkQ7QUFHTEMsWUFBUSxFQUFFLEVBSEw7QUFJTEMsY0FBVSxFQUFFO0FBSlAsR0FETztBQU9kQyxRQUFNLEVBQUU7QUFDTkMsU0FBSyxFQUFFLENBQ0w7QUFDRUMsZ0JBQVUsRUFBRTtBQUNWTixlQUFPLEVBQUUsSUFEQztBQUVWTyxtQkFBVyxFQUFFO0FBRkgsT0FEZDtBQUtFQyxXQUFLLEVBQUU7QUFDTEMsZ0JBQVEsRUFBRSxrQkFBVUMsS0FBVixFQUF5QkMsS0FBekIsRUFBZ0NDLE1BQWhDLEVBQXdDO0FBQ2hELGNBQUlGLEtBQUssS0FBSyxTQUFkLEVBQXlCO0FBQ3ZCLG1CQUFPQSxLQUFQO0FBQ0Q7QUFDRjtBQUxJO0FBTFQsS0FESyxDQUREO0FBZ0JORyxTQUFLLEVBQUUsQ0FDTDtBQUNFUCxnQkFBVSxFQUFFO0FBQ1ZOLGVBQU8sRUFBRSxJQURDO0FBRVZPLG1CQUFXLEVBQUU7QUFGSCxPQURkO0FBS0VDLFdBQUssRUFBRTtBQUNMQyxnQkFBUSxFQUFFLGtCQUFVQyxLQUFWLEVBQWlCQyxLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0MsQ0FBRTtBQUR2QztBQUxULEtBREs7QUFoQkQ7QUFQTSxDQUFoQjtBQXFDQSxJQUFNRSxXQUFXLEdBQUc7QUFDbEJDLFFBQU0sRUFBRSxDQUNOLGdCQURNLEVBRU4sVUFGTSxFQUdOLGdCQUhNLEVBSU4sU0FKTSxFQUtOLGdCQUxNLEVBTU4sZ0JBTk0sQ0FEVTtBQVNsQkMsVUFBUSxFQUFFLENBQ1I7QUFDRUMsUUFBSSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLENBRFI7QUFFRUMsU0FBSyxFQUFFLGtCQUZUO0FBR0VDLG1CQUFlLEVBQUUsU0FIbkI7QUFJRUMsZUFBVyxFQUFFLFNBSmY7QUFLRUMsUUFBSSxFQUFFO0FBTFIsR0FEUTtBQVRRLENBQXBCOztBQW9CQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBSUMsZUFBZSxtQ0FBUVYsV0FBVyxDQUFDRSxRQUFwQjtBQUE4QlMsaUJBQVcsRUFBWEEsNERBQVdBO0FBQXpDLE1BQW5COztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ0gsZUFBbkM7QUFDQUksV0FBTyxpQ0FBTVgsSUFBTjtBQUFZRCxjQUFRLEVBQUVRO0FBQXRCLE9BQVA7QUFDRCxHQUpEOztBQURrQixrQkFPTUssc0RBQVEsQ0FBQ2YsV0FBRCxDQVBkO0FBQUEsTUFPWEcsSUFQVztBQUFBLE1BT0xXLE9BUEs7O0FBU2xCRSx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBSixXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNELEdBSFEsRUFHTixDQUFDVixJQUFJLENBQUNELFFBQU4sQ0FITSxDQUFUO0FBS0Esc0JBQ0UscUVBQUMsb0RBQUQ7QUFDRSxRQUFJLGVBQ0YscUVBQUMsaURBQUQ7QUFDRSxXQUFLLEVBQUMsc0JBRFI7QUFFRSxpQkFBVyxFQUFDO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUEsNEJBUUU7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNFLHFFQUFDLG9EQUFEO0FBQU0sWUFBSSxFQUFFQyxJQUFaO0FBQWtCLGVBQU8sRUFBRW5CO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU15QixRQUFRLEVBQWQ7QUFBQSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBOUJEOztHQUFNRCxLOztLQUFBQSxLO0FBZ0NTQSxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBNZXRhIH0gZnJvbSBcIi4uL2xheW91dC9NZXRhXCI7XG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4uL3RlbXBsYXRlcy9NYWluXCI7XG5pbXBvcnQgeyBMaW5lIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuaW1wb3J0IHsgc2NlbmFyaW9PbmUsIHNjZW5hcmlvVHdvLCBzY2VuYXJpb1RocmVlIH0gZnJvbSBcIi4uL3V0aWxzL2NoYXJ0SW5mb1wiO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICB0aXRsZToge1xuICAgIGRpc3BsYXk6IHRydWUsXG4gICAgdGV4dDogXCJCQUMgQW5hbHlzaXMgLSBSb2JlcnQgQ2Fubm9uIE0uRC5cIixcbiAgICBmb250U2l6ZTogMjQsXG4gICAgZm9udEZhbWlseTogXCInSGVsdmV0aWNhJ1wiLFxuICB9LFxuICBzY2FsZXM6IHtcbiAgICB4QXhlczogW1xuICAgICAge1xuICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbFN0cmluZzogXCJLbm93biBUaW1lcyAoQU0pXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZTogU3RyaW5nLCBpbmRleCwgdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiMjo1OCBBTVwiKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIHlBeGVzOiBbXG4gICAgICB7XG4gICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiBcIkJsb29kIEFsY29ob2wgQ29uY2VudHJhdGlvbiAoZy9tbClcIixcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgdmFsdWVzKSB7fSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG5cbmNvbnN0IGluaXRpYWxEYXRhID0ge1xuICBsYWJlbHM6IFtcbiAgICBcIih0aW1lIHVua25vd24pXCIsXG4gICAgXCIxMjo0MiBBTVwiLFxuICAgIFwiKHRpbWUgdW5rbm93bilcIixcbiAgICBcIjI6NTggQU1cIixcbiAgICBcIih0aW1lIHVua25vd24pXCIsXG4gICAgXCIodGltZSB1bmtub3duKVwiLFxuICBdLFxuICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGRhdGE6IFtudWxsLCBudWxsLCBudWxsLCAwLjE2LCBudWxsLCBudWxsXSxcbiAgICAgIGxhYmVsOiBcIkdlbmVzaXMgUGV0cmlsbG9cIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzc0MTUxXCIsXG4gICAgICBib3JkZXJDb2xvcjogXCIjMzc0MTUxXCIsXG4gICAgICBmaWxsOiBmYWxzZSxcbiAgICB9LFxuICBdLFxufTtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IGFwcGx5T25lID0gKCkgPT4ge1xuICAgIGxldCB1cGRhdGVkRGF0YXNldHMgPSB7IC4uLmluaXRpYWxEYXRhLmRhdGFzZXRzLCBzY2VuYXJpb09uZSB9O1xuICAgIGNvbnNvbGUubG9nKFwidXBkYXRlZERhdGFzZXRzIGlzIFwiLCB1cGRhdGVkRGF0YXNldHMpO1xuICAgIHNldERhdGEoeyAuLi5kYXRhLCBkYXRhc2V0czogdXBkYXRlZERhdGFzZXRzIH0pO1xuICB9O1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIG9ubHkgYWRkIHVzZXIgcHJlZmVyZW5jZXMgaWYgdGhlIHVzZXIgaGFzIGxvZ2dlZCBpblxuICAgIGNvbnNvbGUubG9nKFwiZGF0YSBoYXMgY2hhbmdlZFwiKTtcbiAgfSwgW2RhdGEuZGF0YXNldHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxNYWluXG4gICAgICBtZXRhPXtcbiAgICAgICAgPE1ldGFcbiAgICAgICAgICB0aXRsZT1cIkNhbm5vbiBEZW1vbnN0cmF0aXZlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSBkZW1vbnN0cmF0aXZlIGZvciBEci4gUm9iZXJ0IENhbm5vbiAtIEdhcmRuZXIgQ29uc3VsdGluZy5cIlxuICAgICAgICAvPlxuICAgICAgfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yMFwiPlxuICAgICAgICA8TGluZSBkYXRhPXtkYXRhfSBvcHRpb25zPXtvcHRpb25zfT48L0xpbmU+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYXBwbHlPbmUoKX0+Q2xpY2sgbWU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICA8L01haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})