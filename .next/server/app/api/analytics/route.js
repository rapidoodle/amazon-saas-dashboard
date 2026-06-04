"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/analytics/route";
exports.ids = ["app/api/analytics/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fanalytics%2Froute&page=%2Fapi%2Fanalytics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalytics%2Froute.ts&appDir=%2FUsers%2Fralfhbryanperez%2FDocuments%2FClaude%2FProjects%2FSaaS%20Dashboard%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fralfhbryanperez%2FDocuments%2FClaude%2FProjects%2FSaaS%20Dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fanalytics%2Froute&page=%2Fapi%2Fanalytics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalytics%2Froute.ts&appDir=%2FUsers%2Fralfhbryanperez%2FDocuments%2FClaude%2FProjects%2FSaaS%20Dashboard%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fralfhbryanperez%2FDocuments%2FClaude%2FProjects%2FSaaS%20Dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ralfhbryanperez_Documents_Claude_Projects_SaaS_Dashboard_app_api_analytics_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/analytics/route.ts */ \"(rsc)/./app/api/analytics/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/analytics/route\",\n        pathname: \"/api/analytics\",\n        filename: \"route\",\n        bundlePath: \"app/api/analytics/route\"\n    },\n    resolvedPagePath: \"/Users/ralfhbryanperez/Documents/Claude/Projects/SaaS Dashboard/app/api/analytics/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ralfhbryanperez_Documents_Claude_Projects_SaaS_Dashboard_app_api_analytics_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/analytics/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhbmFseXRpY3MlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFuYWx5dGljcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFuYWx5dGljcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnJhbGZoYnJ5YW5wZXJleiUyRkRvY3VtZW50cyUyRkNsYXVkZSUyRlByb2plY3RzJTJGU2FhUyUyMERhc2hib2FyZCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZyYWxmaGJyeWFucGVyZXolMkZEb2N1bWVudHMlMkZDbGF1ZGUlMkZQcm9qZWN0cyUyRlNhYVMlMjBEYXNoYm9hcmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzBDO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Fhcy1kYXNoYm9hcmQvP2ZiOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3JhbGZoYnJ5YW5wZXJlei9Eb2N1bWVudHMvQ2xhdWRlL1Byb2plY3RzL1NhYVMgRGFzaGJvYXJkL2FwcC9hcGkvYW5hbHl0aWNzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hbmFseXRpY3Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hbmFseXRpY3NcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FuYWx5dGljcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9yYWxmaGJyeWFucGVyZXovRG9jdW1lbnRzL0NsYXVkZS9Qcm9qZWN0cy9TYWFTIERhc2hib2FyZC9hcHAvYXBpL2FuYWx5dGljcy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYW5hbHl0aWNzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fanalytics%2Froute&page=%2Fapi%2Fanalytics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalytics%2Froute.ts&appDir=%2FUsers%2Fralfhbryanperez%2FDocuments%2FClaude%2FProjects%2FSaaS%20Dashboard%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fralfhbryanperez%2FDocuments%2FClaude%2FProjects%2FSaaS%20Dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/analytics/route.ts":
/*!************************************!*\
  !*** ./app/api/analytics/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n\n\n\n\nasync function GET() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const now = new Date();\n    const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1);\n    // Revenue by month (last 6 months)\n    const orders = await _lib_db__WEBPACK_IMPORTED_MODULE_3__.prisma.order.findMany({\n        where: {\n            createdAt: {\n                gte: sixMonthsAgo\n            },\n            status: {\n                not: \"CANCELLED\"\n            }\n        },\n        select: {\n            total: true,\n            createdAt: true,\n            status: true\n        }\n    });\n    const monthMap = {};\n    for(let i = 5; i >= 0; i--){\n        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);\n        const key = d.toLocaleString(\"en-US\", {\n            month: \"short\",\n            year: \"numeric\"\n        });\n        monthMap[key] = {\n            revenue: 0,\n            orders: 0\n        };\n    }\n    for (const order of orders){\n        const key = new Date(order.createdAt).toLocaleString(\"en-US\", {\n            month: \"short\",\n            year: \"numeric\"\n        });\n        if (monthMap[key]) {\n            monthMap[key].revenue += order.total;\n            monthMap[key].orders += 1;\n        }\n    }\n    const revenueData = Object.entries(monthMap).map(([month, data])=>({\n            month,\n            revenue: Math.round(data.revenue),\n            orders: data.orders\n        }));\n    // Orders by status\n    const statusCounts = await _lib_db__WEBPACK_IMPORTED_MODULE_3__.prisma.order.groupBy({\n        by: [\n            \"status\"\n        ],\n        _count: {\n            id: true\n        }\n    });\n    const ordersByStatus = statusCounts.map((s)=>({\n            status: s.status,\n            count: s._count.id\n        }));\n    // Top products by revenue\n    const topProducts = await _lib_db__WEBPACK_IMPORTED_MODULE_3__.prisma.orderItem.groupBy({\n        by: [\n            \"productId\"\n        ],\n        _sum: {\n            price: true\n        },\n        _count: {\n            id: true\n        },\n        orderBy: {\n            _sum: {\n                price: \"desc\"\n            }\n        },\n        take: 5\n    });\n    const productIds = topProducts.map((p)=>p.productId);\n    const products = await _lib_db__WEBPACK_IMPORTED_MODULE_3__.prisma.product.findMany({\n        where: {\n            id: {\n                in: productIds\n            }\n        },\n        select: {\n            id: true,\n            name: true\n        }\n    });\n    const productMap = Object.fromEntries(products.map((p)=>[\n            p.id,\n            p.name\n        ]));\n    const topProductsData = topProducts.map((p)=>({\n            name: productMap[p.productId] ?? p.productId,\n            sales: p._count.id,\n            revenue: Math.round((p._sum.price ?? 0) * 100) / 100\n        }));\n    // Summary stats\n    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);\n    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);\n    const [thisMonthOrders, lastMonthOrders, totalCustomers, totalProducts] = await Promise.all([\n        _lib_db__WEBPACK_IMPORTED_MODULE_3__.prisma.order.aggregate({\n            where: {\n                createdAt: {\n                    gte: thisMonth\n                },\n                status: {\n                    not: \"CANCELLED\"\n                }\n            },\n            _sum: {\n                total: true\n            },\n            _count: {\n                id: true\n            }\n        }),\n        _lib_db__WEBPACK_IMPORTED_MODULE_3__.prisma.order.aggregate({\n            where: {\n                createdAt: {\n                    gte: lastMonth,\n                    lt: thisMonth\n                },\n                status: {\n                    not: \"CANCELLED\"\n                }\n            },\n            _sum: {\n                total: true\n            },\n            _count: {\n                id: true\n            }\n        }),\n        _lib_db__WEBPACK_IMPORTED_MODULE_3__.prisma.customer.count(),\n        _lib_db__WEBPACK_IMPORTED_MODULE_3__.prisma.product.count()\n    ]);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        revenueData,\n        ordersByStatus,\n        topProducts: topProductsData,\n        stats: {\n            totalRevenue: Math.round(thisMonthOrders._sum.total ?? 0),\n            totalOrders: thisMonthOrders._count.id,\n            totalCustomers,\n            totalProducts,\n            prevRevenue: Math.round(lastMonthOrders._sum.total ?? 0),\n            prevOrders: lastMonthOrders._count.id\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dCQUFHdkQsUUFBUTtvQkFBRVksS0FBSztnQkFBWTtZQUFFO1lBQ3BGNEIsTUFBTTtnQkFBRTFCLE9BQU87WUFBSztZQUNwQm1CLFFBQVE7Z0JBQUVDLElBQUk7WUFBSztRQUNyQjtRQUNBdkMsMkNBQU1BLENBQUNzRSxRQUFRLENBQUM1QixLQUFLO1FBQ3JCMUMsMkNBQU1BLENBQUNxRCxPQUFPLENBQUNYLEtBQUs7S0FDckI7SUFFRCxPQUFPN0MscURBQVlBLENBQUNNLElBQUksQ0FBQztRQUN2QnlCO1FBQ0FZO1FBQ0FHLGFBQWFlO1FBQ2JhLE9BQU87WUFDTEMsY0FBY3ZDLEtBQUtDLEtBQUssQ0FBQzRCLGdCQUFnQmpCLElBQUksQ0FBQzFCLEtBQUssSUFBSTtZQUN2RHNELGFBQWFYLGdCQUFnQnhCLE1BQU0sQ0FBQ0MsRUFBRTtZQUN0Q3lCO1lBQ0FDO1lBQ0FTLGFBQWF6QyxLQUFLQyxLQUFLLENBQUM2QixnQkFBZ0JsQixJQUFJLENBQUMxQixLQUFLLElBQUk7WUFDdER3RCxZQUFZWixnQkFBZ0J6QixNQUFNLENBQUNDLEVBQUU7UUFDdkM7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Fhcy1kYXNoYm9hcmQvLi9hcHAvYXBpL2FuYWx5dGljcy9yb3V0ZS50cz84OWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9kYlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIGlmICghc2Vzc2lvbikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcblxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBzaXhNb250aHNBZ28gPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgLSA1LCAxKTtcblxuICAvLyBSZXZlbnVlIGJ5IG1vbnRoIChsYXN0IDYgbW9udGhzKVxuICBjb25zdCBvcmRlcnMgPSBhd2FpdCBwcmlzbWEub3JkZXIuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBjcmVhdGVkQXQ6IHsgZ3RlOiBzaXhNb250aHNBZ28gfSxcbiAgICAgIHN0YXR1czogeyBub3Q6IFwiQ0FOQ0VMTEVEXCIgfSxcbiAgICB9LFxuICAgIHNlbGVjdDogeyB0b3RhbDogdHJ1ZSwgY3JlYXRlZEF0OiB0cnVlLCBzdGF0dXM6IHRydWUgfSxcbiAgfSk7XG5cbiAgY29uc3QgbW9udGhNYXA6IFJlY29yZDxzdHJpbmcsIHsgcmV2ZW51ZTogbnVtYmVyOyBvcmRlcnM6IG51bWJlciB9PiA9IHt9O1xuICBmb3IgKGxldCBpID0gNTsgaSA+PSAwOyBpLS0pIHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpIC0gaSwgMSk7XG4gICAgY29uc3Qga2V5ID0gZC50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHsgbW9udGg6IFwic2hvcnRcIiwgeWVhcjogXCJudW1lcmljXCIgfSk7XG4gICAgbW9udGhNYXBba2V5XSA9IHsgcmV2ZW51ZTogMCwgb3JkZXJzOiAwIH07XG4gIH1cblxuICBmb3IgKGNvbnN0IG9yZGVyIG9mIG9yZGVycykge1xuICAgIGNvbnN0IGtleSA9IG5ldyBEYXRlKG9yZGVyLmNyZWF0ZWRBdCkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7IG1vbnRoOiBcInNob3J0XCIsIHllYXI6IFwibnVtZXJpY1wiIH0pO1xuICAgIGlmIChtb250aE1hcFtrZXldKSB7XG4gICAgICBtb250aE1hcFtrZXldLnJldmVudWUgKz0gb3JkZXIudG90YWw7XG4gICAgICBtb250aE1hcFtrZXldLm9yZGVycyArPSAxO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJldmVudWVEYXRhID0gT2JqZWN0LmVudHJpZXMobW9udGhNYXApLm1hcCgoW21vbnRoLCBkYXRhXSkgPT4gKHtcbiAgICBtb250aCxcbiAgICByZXZlbnVlOiBNYXRoLnJvdW5kKGRhdGEucmV2ZW51ZSksXG4gICAgb3JkZXJzOiBkYXRhLm9yZGVycyxcbiAgfSkpO1xuXG4gIC8vIE9yZGVycyBieSBzdGF0dXNcbiAgY29uc3Qgc3RhdHVzQ291bnRzID0gYXdhaXQgcHJpc21hLm9yZGVyLmdyb3VwQnkoe1xuICAgIGJ5OiBbXCJzdGF0dXNcIl0sXG4gICAgX2NvdW50OiB7IGlkOiB0cnVlIH0sXG4gIH0pO1xuICBjb25zdCBvcmRlcnNCeVN0YXR1cyA9IHN0YXR1c0NvdW50cy5tYXAoKHMpID0+ICh7XG4gICAgc3RhdHVzOiBzLnN0YXR1cyxcbiAgICBjb3VudDogcy5fY291bnQuaWQsXG4gIH0pKTtcblxuICAvLyBUb3AgcHJvZHVjdHMgYnkgcmV2ZW51ZVxuICBjb25zdCB0b3BQcm9kdWN0cyA9IGF3YWl0IHByaXNtYS5vcmRlckl0ZW0uZ3JvdXBCeSh7XG4gICAgYnk6IFtcInByb2R1Y3RJZFwiXSxcbiAgICBfc3VtOiB7IHByaWNlOiB0cnVlIH0sXG4gICAgX2NvdW50OiB7IGlkOiB0cnVlIH0sXG4gICAgb3JkZXJCeTogeyBfc3VtOiB7IHByaWNlOiBcImRlc2NcIiB9IH0sXG4gICAgdGFrZTogNSxcbiAgfSk7XG5cbiAgY29uc3QgcHJvZHVjdElkcyA9IHRvcFByb2R1Y3RzLm1hcCgocCkgPT4gcC5wcm9kdWN0SWQpO1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHByaXNtYS5wcm9kdWN0LmZpbmRNYW55KHtcbiAgICB3aGVyZTogeyBpZDogeyBpbjogcHJvZHVjdElkcyB9IH0sXG4gICAgc2VsZWN0OiB7IGlkOiB0cnVlLCBuYW1lOiB0cnVlIH0sXG4gIH0pO1xuICBjb25zdCBwcm9kdWN0TWFwID0gT2JqZWN0LmZyb21FbnRyaWVzKHByb2R1Y3RzLm1hcCgocCkgPT4gW3AuaWQsIHAubmFtZV0pKTtcblxuICBjb25zdCB0b3BQcm9kdWN0c0RhdGEgPSB0b3BQcm9kdWN0cy5tYXAoKHApID0+ICh7XG4gICAgbmFtZTogcHJvZHVjdE1hcFtwLnByb2R1Y3RJZF0gPz8gcC5wcm9kdWN0SWQsXG4gICAgc2FsZXM6IHAuX2NvdW50LmlkLFxuICAgIHJldmVudWU6IE1hdGgucm91bmQoKHAuX3N1bS5wcmljZSA/PyAwKSAqIDEwMCkgLyAxMDAsXG4gIH0pKTtcblxuICAvLyBTdW1tYXJ5IHN0YXRzXG4gIGNvbnN0IHRoaXNNb250aCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgMSk7XG4gIGNvbnN0IGxhc3RNb250aCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSAtIDEsIDEpO1xuXG4gIGNvbnN0IFt0aGlzTW9udGhPcmRlcnMsIGxhc3RNb250aE9yZGVycywgdG90YWxDdXN0b21lcnMsIHRvdGFsUHJvZHVjdHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIHByaXNtYS5vcmRlci5hZ2dyZWdhdGUoe1xuICAgICAgd2hlcmU6IHsgY3JlYXRlZEF0OiB7IGd0ZTogdGhpc01vbnRoIH0sIHN0YXR1czogeyBub3Q6IFwiQ0FOQ0VMTEVEXCIgfSB9LFxuICAgICAgX3N1bTogeyB0b3RhbDogdHJ1ZSB9LFxuICAgICAgX2NvdW50OiB7IGlkOiB0cnVlIH0sXG4gICAgfSksXG4gICAgcHJpc21hLm9yZGVyLmFnZ3JlZ2F0ZSh7XG4gICAgICB3aGVyZTogeyBjcmVhdGVkQXQ6IHsgZ3RlOiBsYXN0TW9udGgsIGx0OiB0aGlzTW9udGggfSwgc3RhdHVzOiB7IG5vdDogXCJDQU5DRUxMRURcIiB9IH0sXG4gICAgICBfc3VtOiB7IHRvdGFsOiB0cnVlIH0sXG4gICAgICBfY291bnQ6IHsgaWQ6IHRydWUgfSxcbiAgICB9KSxcbiAgICBwcmlzbWEuY3VzdG9tZXIuY291bnQoKSxcbiAgICBwcmlzbWEucHJvZHVjdC5jb3VudCgpLFxuICBdKTtcblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgIHJldmVudWVEYXRhLFxuICAgIG9yZGVyc0J5U3RhdHVzLFxuICAgIHRvcFByb2R1Y3RzOiB0b3BQcm9kdWN0c0RhdGEsXG4gICAgc3RhdHM6IHtcbiAgICAgIHRvdGFsUmV2ZW51ZTogTWF0aC5yb3VuZCh0aGlzTW9udGhPcmRlcnMuX3N1bS50b3RhbCA/PyAwKSxcbiAgICAgIHRvdGFsT3JkZXJzOiB0aGlzTW9udGhPcmRlcnMuX2NvdW50LmlkLFxuICAgICAgdG90YWxDdXN0b21lcnMsXG4gICAgICB0b3RhbFByb2R1Y3RzLFxuICAgICAgcHJldlJldmVudWU6IE1hdGgucm91bmQobGFzdE1vbnRoT3JkZXJzLl9zdW0udG90YWwgPz8gMCksXG4gICAgICBwcmV2T3JkZXJzOiBsYXN0TW9udGhPcmRlcnMuX2NvdW50LmlkLFxuICAgIH0sXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsInByaXNtYSIsIkdFVCIsInNlc3Npb24iLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJub3ciLCJEYXRlIiwic2l4TW9udGhzQWdvIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsIm9yZGVycyIsIm9yZGVyIiwiZmluZE1hbnkiLCJ3aGVyZSIsImNyZWF0ZWRBdCIsImd0ZSIsIm5vdCIsInNlbGVjdCIsInRvdGFsIiwibW9udGhNYXAiLCJpIiwiZCIsImtleSIsInRvTG9jYWxlU3RyaW5nIiwibW9udGgiLCJ5ZWFyIiwicmV2ZW51ZSIsInJldmVudWVEYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsImRhdGEiLCJNYXRoIiwicm91bmQiLCJzdGF0dXNDb3VudHMiLCJncm91cEJ5IiwiYnkiLCJfY291bnQiLCJpZCIsIm9yZGVyc0J5U3RhdHVzIiwicyIsImNvdW50IiwidG9wUHJvZHVjdHMiLCJvcmRlckl0ZW0iLCJfc3VtIiwicHJpY2UiLCJvcmRlckJ5IiwidGFrZSIsInByb2R1Y3RJZHMiLCJwIiwicHJvZHVjdElkIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiaW4iLCJuYW1lIiwicHJvZHVjdE1hcCIsImZyb21FbnRyaWVzIiwidG9wUHJvZHVjdHNEYXRhIiwic2FsZXMiLCJ0aGlzTW9udGgiLCJsYXN0TW9udGgiLCJ0aGlzTW9udGhPcmRlcnMiLCJsYXN0TW9udGhPcmRlcnMiLCJ0b3RhbEN1c3RvbWVycyIsInRvdGFsUHJvZHVjdHMiLCJQcm9taXNlIiwiYWxsIiwiYWdncmVnYXRlIiwibHQiLCJjdXN0b21lciIsInN0YXRzIiwidG90YWxSZXZlbnVlIiwidG90YWxPcmRlcnMiLCJwcmV2UmV2ZW51ZSIsInByZXZPcmRlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/analytics/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n\n\n\nconst authOptions = {\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) return null;\n                const user = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) return null;\n                const isValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, user.password);\n                if (!isValid) return null;\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNrRTtBQUNwQztBQUNJO0FBRzNCLE1BQU1HLGNBQStCO0lBQzFDQyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxPQUFPO1FBQ0xDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0FDLFdBQVc7UUFDVFQsMkVBQW1CQSxDQUFDO1lBQ2xCVSxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQVE7Z0JBQ3ZDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsSUFBSSxDQUFDQSxhQUFhQyxTQUFTLENBQUNELGFBQWFJLFVBQVUsT0FBTztnQkFFMUQsTUFBTUUsT0FBTyxNQUFNZiwyQ0FBTUEsQ0FBQ2UsSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ3hDQyxPQUFPO3dCQUFFUCxPQUFPRCxZQUFZQyxLQUFLO29CQUFDO2dCQUNwQztnQkFFQSxJQUFJLENBQUNLLE1BQU0sT0FBTztnQkFFbEIsTUFBTUcsVUFBVSxNQUFNbkIsdURBQWMsQ0FBQ1UsWUFBWUksUUFBUSxFQUFFRSxLQUFLRixRQUFRO2dCQUN4RSxJQUFJLENBQUNLLFNBQVMsT0FBTztnQkFFckIsT0FBTztvQkFDTEUsSUFBSUwsS0FBS0ssRUFBRTtvQkFDWFYsT0FBT0ssS0FBS0wsS0FBSztvQkFDakJGLE1BQU1PLEtBQUtQLElBQUk7b0JBQ2ZhLE1BQU1OLEtBQUtNLElBQUk7Z0JBQ2pCO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRVQsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JTLE1BQU1KLEVBQUUsR0FBR0wsS0FBS0ssRUFBRTtnQkFDbEJJLE1BQU1ILElBQUksR0FBRyxLQUF5QkEsSUFBSTtZQUM1QztZQUNBLE9BQU9HO1FBQ1Q7UUFDQSxNQUFNdEIsU0FBUSxFQUFFQSxPQUFPLEVBQUVzQixLQUFLLEVBQUU7WUFDOUIsSUFBSXRCLFFBQVFhLElBQUksRUFBRTtnQkFDaEJiLFFBQVFhLElBQUksQ0FBQ0ssRUFBRSxHQUFHSSxNQUFNSixFQUFFO2dCQUMxQmxCLFFBQVFhLElBQUksQ0FBQ00sSUFBSSxHQUFHRyxNQUFNSCxJQUFJO1lBQ2hDO1lBQ0EsT0FBT25CO1FBQ1Q7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWFzLWRhc2hib2FyZC8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvZGJcIjtcbmltcG9ydCB7IFJvbGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsXG4gICAgZXJyb3I6IFwiL2xvZ2luXCIsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJjcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSByZXR1cm4gbnVsbDtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdXNlcikgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICByb2xlOiB1c2VyLnJvbGUsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XG4gICAgICAgIHRva2VuLnJvbGUgPSAodXNlciBhcyB7IHJvbGU6IFJvbGUgfSkucm9sZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkIGFzIHN0cmluZztcbiAgICAgICAgc2Vzc2lvbi51c2VyLnJvbGUgPSB0b2tlbi5yb2xlIGFzIFJvbGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwYWdlcyIsInNpZ25JbiIsImVycm9yIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpc1ZhbGlkIiwiY29tcGFyZSIsImlkIiwicm9sZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// Uses DATABASE_URL from .env\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : 0\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBQzlDLDhCQUE4QjtBQUU5QixNQUFNQyxrQkFBa0JDO0FBSWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUN0QixJQUFJSCx3REFBWUEsQ0FBQztJQUNmSSxLQUFLQyxLQUFzQyxHQUFHO1FBQUM7UUFBUztRQUFTO0tBQU8sR0FBRyxDQUFTO0FBQ3RGLEdBQUc7QUFFTCxJQUFJQSxJQUFxQyxFQUFFSixnQkFBZ0JFLE1BQU0sR0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWFzLWRhc2hib2FyZC8uL2xpYi9kYi50cz8xZGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuLy8gVXNlcyBEQVRBQkFTRV9VUkwgZnJvbSAuZW52XG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XG4gIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz9cbiAgbmV3IFByaXNtYUNsaWVudCh7XG4gICAgbG9nOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiID8gW1wicXVlcnlcIiwgXCJlcnJvclwiLCBcIndhcm5cIl0gOiBbXCJlcnJvclwiXSxcbiAgfSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsImxvZyIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fanalytics%2Froute&page=%2Fapi%2Fanalytics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalytics%2Froute.ts&appDir=%2FUsers%2Fralfhbryanperez%2FDocuments%2FClaude%2FProjects%2FSaaS%20Dashboard%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fralfhbryanperez%2FDocuments%2FClaude%2FProjects%2FSaaS%20Dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();