module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/layout/Meta.tsx":
/*!*****************************!*\
  !*** ./src/layout/Meta.tsx ***!
  \*****************************/
/*! exports provided: Meta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Meta\", function() { return Meta; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/layout/Meta.tsx\";\n\n\n\nconst Config = {\n  site_name: \"Cannon Demonstrative\",\n  title: \"Cannon Demonstrative\",\n  description: \"The demonstrative for Dr. Robert Cannon - Gardner Consulting.\",\n  locale: \"en\"\n};\n\nconst Meta = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      charSet: \"UTF-8\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width,initial-scale=1\"\n    }, \"viewport\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"apple-touch-icon\",\n      href: `${\"\"}/apple-touch-icon.png`\n    }, \"apple\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"icon\",\n      type: \"image/png\",\n      sizes: \"32x32\",\n      href: `${\"\"}/favicon-32x32.png`\n    }, \"icon32\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"icon\",\n      type: \"image/png\",\n      sizes: \"16x16\",\n      href: `${\"\"}/favicon-16x16.png`\n    }, \"icon16\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n      rel: \"icon\",\n      href: `${\"\"}/favicon.ico`\n    }, \"favicon\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_seo__WEBPACK_IMPORTED_MODULE_2__[\"NextSeo\"], {\n    title: props.title,\n    description: props.description,\n    canonical: props.canonical,\n    openGraph: {\n      title: props.title,\n      description: props.description,\n      url: props.canonical,\n      locale: Config.locale,\n      site_name: Config.site_name\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L01ldGEudHN4PzYxNGIiXSwibmFtZXMiOlsiQ29uZmlnIiwic2l0ZV9uYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxvY2FsZSIsIk1ldGEiLCJwcm9wcyIsInByb2Nlc3MiLCJjYW5vbmljYWwiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUc7QUFDYkMsV0FBUyxFQUFFLHNCQURFO0FBRWJDLE9BQUssRUFBRSxzQkFGTTtBQUdiQyxhQUFXLEVBQUUsK0RBSEE7QUFJYkMsUUFBTSxFQUFFO0FBSkssQ0FBZjs7QUFhQSxNQUFNQyxJQUFJLEdBQUlDLEtBQUQsaUJBQ1g7QUFBQSwwQkFDRSxxRUFBQyxnREFBRDtBQUFBLDRCQUNFO0FBQU0sYUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQ0UsVUFBSSxFQUFDLFVBRFA7QUFFRSxhQUFPLEVBQUM7QUFGVixPQUdNLFVBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQU9FO0FBQ0UsU0FBRyxFQUFDLGtCQUROO0FBRUUsVUFBSSxFQUFHLEdBQUVDLEVBQW9CO0FBRi9CLE9BR00sT0FITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBWUU7QUFDRSxTQUFHLEVBQUMsTUFETjtBQUVFLFVBQUksRUFBQyxXQUZQO0FBR0UsV0FBSyxFQUFDLE9BSFI7QUFJRSxVQUFJLEVBQUcsR0FBRUEsRUFBb0I7QUFKL0IsT0FLTSxRQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsZUFtQkU7QUFDRSxTQUFHLEVBQUMsTUFETjtBQUVFLFVBQUksRUFBQyxXQUZQO0FBR0UsV0FBSyxFQUFDLE9BSFI7QUFJRSxVQUFJLEVBQUcsR0FBRUEsRUFBb0I7QUFKL0IsT0FLTSxRQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJGLGVBMEJFO0FBQ0UsU0FBRyxFQUFDLE1BRE47QUFFRSxVQUFJLEVBQUcsR0FBRUEsRUFBb0I7QUFGL0IsT0FHTSxTQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBaUNFLHFFQUFDLGdEQUFEO0FBQ0UsU0FBSyxFQUFFRCxLQUFLLENBQUNKLEtBRGY7QUFFRSxlQUFXLEVBQUVJLEtBQUssQ0FBQ0gsV0FGckI7QUFHRSxhQUFTLEVBQUVHLEtBQUssQ0FBQ0UsU0FIbkI7QUFJRSxhQUFTLEVBQUU7QUFDVE4sV0FBSyxFQUFFSSxLQUFLLENBQUNKLEtBREo7QUFFVEMsaUJBQVcsRUFBRUcsS0FBSyxDQUFDSCxXQUZWO0FBR1RNLFNBQUcsRUFBRUgsS0FBSyxDQUFDRSxTQUhGO0FBSVRKLFlBQU0sRUFBRUosTUFBTSxDQUFDSSxNQUpOO0FBS1RILGVBQVMsRUFBRUQsTUFBTSxDQUFDQztBQUxUO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDRjtBQUFBLGdCQURGIiwiZmlsZSI6Ii4vc3JjL2xheW91dC9NZXRhLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBDb25maWcgPSB7XG4gIHNpdGVfbmFtZTogXCJDYW5ub24gRGVtb25zdHJhdGl2ZVwiLFxuICB0aXRsZTogXCJDYW5ub24gRGVtb25zdHJhdGl2ZVwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGUgZGVtb25zdHJhdGl2ZSBmb3IgRHIuIFJvYmVydCBDYW5ub24gLSBHYXJkbmVyIENvbnN1bHRpbmcuXCIsXG4gIGxvY2FsZTogXCJlblwiLFxufTtcblxudHlwZSBJTWV0YVByb3BzID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjYW5vbmljYWw/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBNZXRhID0gKHByb3BzOiBJTWV0YVByb3BzKSA9PiAoXG4gIDw+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgPG1ldGFcbiAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICBrZXk9XCJ2aWV3cG9ydFwiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgIGhyZWY9e2Ake3Byb2Nlc3MuZW52LmJhc2VVcmx9L2FwcGxlLXRvdWNoLWljb24ucG5nYH1cbiAgICAgICAga2V5PVwiYXBwbGVcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgIGhyZWY9e2Ake3Byb2Nlc3MuZW52LmJhc2VVcmx9L2Zhdmljb24tMzJ4MzIucG5nYH1cbiAgICAgICAga2V5PVwiaWNvbjMyXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgIHNpemVzPVwiMTZ4MTZcIlxuICAgICAgICBocmVmPXtgJHtwcm9jZXNzLmVudi5iYXNlVXJsfS9mYXZpY29uLTE2eDE2LnBuZ2B9XG4gICAgICAgIGtleT1cImljb24xNlwiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgIGhyZWY9e2Ake3Byb2Nlc3MuZW52LmJhc2VVcmx9L2Zhdmljb24uaWNvYH1cbiAgICAgICAga2V5PVwiZmF2aWNvblwiXG4gICAgICAvPlxuICAgIDwvSGVhZD5cbiAgICA8TmV4dFNlb1xuICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxuICAgICAgZGVzY3JpcHRpb249e3Byb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgY2Fub25pY2FsPXtwcm9wcy5jYW5vbmljYWx9XG4gICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgIHVybDogcHJvcHMuY2Fub25pY2FsLFxuICAgICAgICBsb2NhbGU6IENvbmZpZy5sb2NhbGUsXG4gICAgICAgIHNpdGVfbmFtZTogQ29uZmlnLnNpdGVfbmFtZSxcbiAgICAgIH19XG4gICAgLz5cbiAgPC8+XG4pO1xuXG5leHBvcnQgeyBNZXRhIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layout/Meta.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: chartConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chartConfig\", function() { return chartConfig; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Meta */ \"./src/layout/Meta.tsx\");\n/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/Main */ \"./src/templates/Main.tsx\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"react-chartjs-2\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_chartInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/chartInfo */ \"./src/utils/chartInfo.ts\");\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/pages/index.tsx\";\n\n\n\n\n\nconst chartConfig = {\n  type: \"line\",\n  data: {}\n};\n\nconst Index = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_templates_Main__WEBPACK_IMPORTED_MODULE_3__[\"Main\"], {\n  meta: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layout_Meta__WEBPACK_IMPORTED_MODULE_2__[\"Meta\"], {\n    title: \"Cannon Demonstrative\",\n    description: \"The demonstrative for Dr. Robert Cannon - Gardner Consulting.\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 7\n  }, undefined),\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"m-20\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__[\"Line\"], {\n      data: _utils_chartInfo__WEBPACK_IMPORTED_MODULE_5__[\"data\"],\n      options: _utils_chartInfo__WEBPACK_IMPORTED_MODULE_5__[\"options\"]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 14,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiY2hhcnRDb25maWciLCJ0eXBlIiwiZGF0YSIsIkluZGV4Iiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLEdBQUc7QUFDekJDLE1BQUksRUFBRSxNQURtQjtBQUV6QkMsTUFBSSxFQUFFO0FBRm1CLENBQXBCOztBQUtQLE1BQU1DLEtBQUssR0FBRyxtQkFDWixxRUFBQyxvREFBRDtBQUNFLE1BQUksZUFDRixxRUFBQyxpREFBRDtBQUNFLFNBQUssRUFBQyxzQkFEUjtBQUVFLGVBQVcsRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBLDBCQVFFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSwyQkFDRSxxRUFBQyxvREFBRDtBQUFNLFVBQUksRUFBRUQscURBQVo7QUFBa0IsYUFBTyxFQUFFRSx3REFBT0E7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUFnQmVELG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgTWV0YSB9IGZyb20gXCIuLi9sYXlvdXQvTWV0YVwiO1xuaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuLi90ZW1wbGF0ZXMvTWFpblwiO1xuaW1wb3J0IHsgTGluZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCB7IG9wdGlvbnMsIHNjZW5hcmlvT25lLCBkYXRhIH0gZnJvbSBcIi4uL3V0aWxzL2NoYXJ0SW5mb1wiO1xuXG5leHBvcnQgY29uc3QgY2hhcnRDb25maWcgPSB7XG4gIHR5cGU6IFwibGluZVwiLFxuICBkYXRhOiB7fSxcbn07XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8TWFpblxuICAgIG1ldGE9e1xuICAgICAgPE1ldGFcbiAgICAgICAgdGl0bGU9XCJDYW5ub24gRGVtb25zdHJhdGl2ZVwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIGRlbW9uc3RyYXRpdmUgZm9yIERyLiBSb2JlcnQgQ2Fubm9uIC0gR2FyZG5lciBDb25zdWx0aW5nLlwiXG4gICAgICAvPlxuICAgIH1cbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yMFwiPlxuICAgICAgPExpbmUgZGF0YT17ZGF0YX0gb3B0aW9ucz17b3B0aW9uc30+PC9MaW5lPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+PC9kaXY+XG4gIDwvTWFpbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/templates/Main.tsx":
/*!********************************!*\
  !*** ./src/templates/Main.tsx ***!
  \********************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return Main; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/jacob/Documents/cannon-demo/src/templates/Main.tsx\";\n\n\nconst Main = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  children: props.children\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 8,\n  columnNumber: 37\n}, undefined);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL01haW4udHN4Pzc0NmUiXSwibmFtZXMiOlsiTWFpbiIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBT0EsTUFBTUEsSUFBSSxHQUFJQyxLQUFELGlCQUF1QjtBQUFBLFlBQU1BLEtBQUssQ0FBQ0M7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXBDIiwiZmlsZSI6Ii4vc3JjL3RlbXBsYXRlcy9NYWluLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBJTWFpblByb3BzID0ge1xuICBtZXRhOiBSZWFjdE5vZGU7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuXG5jb25zdCBNYWluID0gKHByb3BzOiBJTWFpblByb3BzKSA9PiA8ZGl2Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XG5cbmV4cG9ydCB7IE1haW4gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/templates/Main.tsx\n");

/***/ }),

/***/ "./src/utils/chartInfo.ts":
/*!********************************!*\
  !*** ./src/utils/chartInfo.ts ***!
  \********************************/
/*! exports provided: options, data, scenarioThree, scenarioTwo, scenarioOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return options; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scenarioThree\", function() { return scenarioThree; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scenarioTwo\", function() { return scenarioTwo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scenarioOne\", function() { return scenarioOne; });\nconst options = {\n  title: {\n    display: true,\n    text: \"BAC Analysis - Robert Cannon M.D.\",\n    fontSize: 24,\n    fontFamily: \"'Helvetica'\"\n  },\n  scales: {\n    xAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Known Times (AM)\"\n      },\n      ticks: {\n        callback: function (value, index, values) {\n          if (value === \"2:58 AM\") {\n            return value;\n          }\n        }\n      }\n    }],\n    yAxes: [{\n      scaleLabel: {\n        display: true,\n        labelString: \"Blood Alcohol Concentration (g/ml)\"\n      },\n      ticks: {\n        callback: function (value, index, values) {}\n      }\n    }]\n  }\n};\nconst data = {\n  labels: [\"(time unknown)\", \"12:42 AM\", \"(time unknown)\", \"2:58 AM\", \"(time unknown)\", \"(time unknown)\"],\n  datasets: [{\n    data: [null, null, null, 0.16, null, null],\n    label: \"Genesis Petrillo\",\n    backgroundColor: \"#374151\",\n    borderColor: \"#374151\",\n    fill: false\n  }]\n};\nconst scenarioThree = {\n  data: [0.0, 0.162, 0.474, 0.16, 0.06, 0.04],\n  label: \"High\",\n  backgroundColor: \"#EF4444\",\n  borderColor: \"#EF4444\",\n  fill: false\n};\nconst scenarioTwo = {\n  data: [0.0, 0.09, 0.356, 0.16, 0.095, 0.04],\n  label: \"Medium\",\n  backgroundColor: \"#10B981\",\n  borderColor: \"#10B981\",\n  fill: false\n};\nconst scenarioOne = {\n  data: [0.0, 0.042, 0.244, 0.16, 0.084, 0.05],\n  label: \"Low\",\n  backgroundColor: \"#3B82F6\",\n  borderColor: \"#3B82F6\",\n  fill: false\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2hhcnRJbmZvLnRzPzc2MGUiXSwibmFtZXMiOlsib3B0aW9ucyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJzY2FsZXMiLCJ4QXhlcyIsInNjYWxlTGFiZWwiLCJsYWJlbFN0cmluZyIsInRpY2tzIiwiY2FsbGJhY2siLCJ2YWx1ZSIsImluZGV4IiwidmFsdWVzIiwieUF4ZXMiLCJkYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiZmlsbCIsInNjZW5hcmlvVGhyZWUiLCJzY2VuYXJpb1R3byIsInNjZW5hcmlvT25lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxPQUFPLEdBQUc7QUFDckJDLE9BQUssRUFBRTtBQUNMQyxXQUFPLEVBQUUsSUFESjtBQUVMQyxRQUFJLEVBQUUsbUNBRkQ7QUFHTEMsWUFBUSxFQUFFLEVBSEw7QUFJTEMsY0FBVSxFQUFFO0FBSlAsR0FEYztBQU9yQkMsUUFBTSxFQUFFO0FBQ05DLFNBQUssRUFBRSxDQUNMO0FBQ0VDLGdCQUFVLEVBQUU7QUFDVk4sZUFBTyxFQUFFLElBREM7QUFFVk8sbUJBQVcsRUFBRTtBQUZILE9BRGQ7QUFLRUMsV0FBSyxFQUFFO0FBQ0xDLGdCQUFRLEVBQUUsVUFBVUMsS0FBVixFQUF5QkMsS0FBekIsRUFBZ0NDLE1BQWhDLEVBQXdDO0FBQ2hELGNBQUlGLEtBQUssS0FBSyxTQUFkLEVBQXlCO0FBQ3ZCLG1CQUFPQSxLQUFQO0FBQ0Q7QUFDRjtBQUxJO0FBTFQsS0FESyxDQUREO0FBZ0JORyxTQUFLLEVBQUUsQ0FDTDtBQUNFUCxnQkFBVSxFQUFFO0FBQ1ZOLGVBQU8sRUFBRSxJQURDO0FBRVZPLG1CQUFXLEVBQUU7QUFGSCxPQURkO0FBS0VDLFdBQUssRUFBRTtBQUNMQyxnQkFBUSxFQUFFLFVBQVVDLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQyxDQUFFO0FBRHZDO0FBTFQsS0FESztBQWhCRDtBQVBhLENBQWhCO0FBcUNBLE1BQU1FLElBQUksR0FBRztBQUNsQkMsUUFBTSxFQUFFLENBQ04sZ0JBRE0sRUFFTixVQUZNLEVBR04sZ0JBSE0sRUFJTixTQUpNLEVBS04sZ0JBTE0sRUFNTixnQkFOTSxDQURVO0FBU2xCQyxVQUFRLEVBQUUsQ0FDUjtBQUNFRixRQUFJLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsQ0FEUjtBQUVFRyxTQUFLLEVBQUUsa0JBRlQ7QUFHRUMsbUJBQWUsRUFBRSxTQUhuQjtBQUlFQyxlQUFXLEVBQUUsU0FKZjtBQUtFQyxRQUFJLEVBQUU7QUFMUixHQURRO0FBVFEsQ0FBYjtBQW9CQSxNQUFNQyxhQUFhLEdBQUc7QUFDM0JQLE1BQUksRUFBRSxDQUFDLEdBQUQsRUFBTSxLQUFOLEVBQWEsS0FBYixFQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQyxJQUFoQyxDQURxQjtBQUUzQkcsT0FBSyxFQUFFLE1BRm9CO0FBRzNCQyxpQkFBZSxFQUFFLFNBSFU7QUFJM0JDLGFBQVcsRUFBRSxTQUpjO0FBSzNCQyxNQUFJLEVBQUU7QUFMcUIsQ0FBdEI7QUFRQSxNQUFNRSxXQUFXLEdBQUc7QUFDekJSLE1BQUksRUFBRSxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksS0FBWixFQUFtQixJQUFuQixFQUF5QixLQUF6QixFQUFnQyxJQUFoQyxDQURtQjtBQUV6QkcsT0FBSyxFQUFFLFFBRmtCO0FBR3pCQyxpQkFBZSxFQUFFLFNBSFE7QUFJekJDLGFBQVcsRUFBRSxTQUpZO0FBS3pCQyxNQUFJLEVBQUU7QUFMbUIsQ0FBcEI7QUFRQSxNQUFNRyxXQUFXLEdBQUc7QUFDekJULE1BQUksRUFBRSxDQUFDLEdBQUQsRUFBTSxLQUFOLEVBQWEsS0FBYixFQUFvQixJQUFwQixFQUEwQixLQUExQixFQUFpQyxJQUFqQyxDQURtQjtBQUV6QkcsT0FBSyxFQUFFLEtBRmtCO0FBR3pCQyxpQkFBZSxFQUFFLFNBSFE7QUFJekJDLGFBQVcsRUFBRSxTQUpZO0FBS3pCQyxNQUFJLEVBQUU7QUFMbUIsQ0FBcEIiLCJmaWxlIjoiLi9zcmMvdXRpbHMvY2hhcnRJbmZvLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSB7XG4gIHRpdGxlOiB7XG4gICAgZGlzcGxheTogdHJ1ZSxcbiAgICB0ZXh0OiBcIkJBQyBBbmFseXNpcyAtIFJvYmVydCBDYW5ub24gTS5ELlwiLFxuICAgIGZvbnRTaXplOiAyNCxcbiAgICBmb250RmFtaWx5OiBcIidIZWx2ZXRpY2EnXCIsXG4gIH0sXG4gIHNjYWxlczoge1xuICAgIHhBeGVzOiBbXG4gICAgICB7XG4gICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiBcIktub3duIFRpbWVzIChBTSlcIixcbiAgICAgICAgfSxcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlOiBTdHJpbmcsIGluZGV4LCB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCIyOjU4IEFNXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgeUF4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgbGFiZWxTdHJpbmc6IFwiQmxvb2QgQWxjb2hvbCBDb25jZW50cmF0aW9uIChnL21sKVwiLFxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCB2YWx1ZXMpIHt9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gIGxhYmVsczogW1xuICAgIFwiKHRpbWUgdW5rbm93bilcIixcbiAgICBcIjEyOjQyIEFNXCIsXG4gICAgXCIodGltZSB1bmtub3duKVwiLFxuICAgIFwiMjo1OCBBTVwiLFxuICAgIFwiKHRpbWUgdW5rbm93bilcIixcbiAgICBcIih0aW1lIHVua25vd24pXCIsXG4gIF0sXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgZGF0YTogW251bGwsIG51bGwsIG51bGwsIDAuMTYsIG51bGwsIG51bGxdLFxuICAgICAgbGFiZWw6IFwiR2VuZXNpcyBQZXRyaWxsb1wiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzNzQxNTFcIixcbiAgICAgIGJvcmRlckNvbG9yOiBcIiMzNzQxNTFcIixcbiAgICAgIGZpbGw6IGZhbHNlLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgY29uc3Qgc2NlbmFyaW9UaHJlZSA9IHtcbiAgZGF0YTogWzAuMCwgMC4xNjIsIDAuNDc0LCAwLjE2LCAwLjA2LCAwLjA0XSxcbiAgbGFiZWw6IFwiSGlnaFwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VGNDQ0NFwiLFxuICBib3JkZXJDb2xvcjogXCIjRUY0NDQ0XCIsXG4gIGZpbGw6IGZhbHNlLFxufTtcblxuZXhwb3J0IGNvbnN0IHNjZW5hcmlvVHdvID0ge1xuICBkYXRhOiBbMC4wLCAwLjA5LCAwLjM1NiwgMC4xNiwgMC4wOTUsIDAuMDRdLFxuICBsYWJlbDogXCJNZWRpdW1cIixcbiAgYmFja2dyb3VuZENvbG9yOiBcIiMxMEI5ODFcIixcbiAgYm9yZGVyQ29sb3I6IFwiIzEwQjk4MVwiLFxuICBmaWxsOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBzY2VuYXJpb09uZSA9IHtcbiAgZGF0YTogWzAuMCwgMC4wNDIsIDAuMjQ0LCAwLjE2LCAwLjA4NCwgMC4wNV0sXG4gIGxhYmVsOiBcIkxvd1wiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNCODJGNlwiLFxuICBib3JkZXJDb2xvcjogXCIjM0I4MkY2XCIsXG4gIGZpbGw6IGZhbHNlLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/chartInfo.ts\n");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-seo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlb1wiPzJjYmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1zZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-seo\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-chartjs-2\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jaGFydGpzLTJcIj84MDlkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWNoYXJ0anMtMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNoYXJ0anMtMlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-chartjs-2\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });