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
exports.id = "app/api/customers/route";
exports.ids = ["app/api/customers/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcustomers%2Froute&page=%2Fapi%2Fcustomers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcustomers%2Froute.ts&appDir=%2FUsers%2Fralfhbryanperez%2FDocuments%2FClaude%2FProjects%2FSaaS%20Dashboard%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fralfhbryanperez%2FDocuments%2FClaude%2FProjects%2FSaaS%20Dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcustomers%2Froute&page=%2Fapi%2Fcustomers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcustomers%2Froute.ts&appDir=%2FUsers%2Fralfhbryanperez%2FDocuments%2FClaude%2FProjects%2FSaaS%20Dashboard%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fralfhbryanperez%2FDocuments%2FClaude%2FProjects%2FSaaS%20Dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ralfhbryanperez_Documents_Claude_Projects_SaaS_Dashboard_app_api_customers_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/customers/route.ts */ \"(rsc)/./app/api/customers/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/customers/route\",\n        pathname: \"/api/customers\",\n        filename: \"route\",\n        bundlePath: \"app/api/customers/route\"\n    },\n    resolvedPagePath: \"/Users/ralfhbryanperez/Documents/Claude/Projects/SaaS Dashboard/app/api/customers/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ralfhbryanperez_Documents_Claude_Projects_SaaS_Dashboard_app_api_customers_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/customers/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjdXN0b21lcnMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmN1c3RvbWVycyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmN1c3RvbWVycyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnJhbGZoYnJ5YW5wZXJleiUyRkRvY3VtZW50cyUyRkNsYXVkZSUyRlByb2plY3RzJTJGU2FhUyUyMERhc2hib2FyZCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZyYWxmaGJyeWFucGVyZXolMkZEb2N1bWVudHMlMkZDbGF1ZGUlMkZQcm9qZWN0cyUyRlNhYVMlMjBEYXNoYm9hcmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzBDO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Fhcy1kYXNoYm9hcmQvP2JkNzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3JhbGZoYnJ5YW5wZXJlei9Eb2N1bWVudHMvQ2xhdWRlL1Byb2plY3RzL1NhYVMgRGFzaGJvYXJkL2FwcC9hcGkvY3VzdG9tZXJzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jdXN0b21lcnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jdXN0b21lcnNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2N1c3RvbWVycy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9yYWxmaGJyeWFucGVyZXovRG9jdW1lbnRzL0NsYXVkZS9Qcm9qZWN0cy9TYWFTIERhc2hib2FyZC9hcHAvYXBpL2N1c3RvbWVycy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY3VzdG9tZXJzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcustomers%2Froute&page=%2Fapi%2Fcustomers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcustomers%2Froute.ts&appDir=%2FUsers%2Fralfhbryanperez%2FDocuments%2FClaude%2FProjects%2FSaaS%20Dashboard%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fralfhbryanperez%2FDocuments%2FClaude%2FProjects%2FSaaS%20Dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/customers/route.ts":
/*!************************************!*\
  !*** ./app/api/customers/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var _lib_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/permissions */ \"(rsc)/./lib/permissions.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/types.js\");\n\n\n\n\n\n\nconst createSchema = zod__WEBPACK_IMPORTED_MODULE_5__.object({\n    name: zod__WEBPACK_IMPORTED_MODULE_5__.string().min(1),\n    email: zod__WEBPACK_IMPORTED_MODULE_5__.string().email(),\n    phone: zod__WEBPACK_IMPORTED_MODULE_5__.string().optional(),\n    address: zod__WEBPACK_IMPORTED_MODULE_5__.string().optional(),\n    city: zod__WEBPACK_IMPORTED_MODULE_5__.string().optional(),\n    country: zod__WEBPACK_IMPORTED_MODULE_5__.string().optional()\n});\nasync function GET(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const { searchParams } = new URL(req.url);\n    const page = parseInt(searchParams.get(\"page\") ?? \"1\");\n    const limit = parseInt(searchParams.get(\"limit\") ?? \"20\");\n    const search = searchParams.get(\"search\") ?? \"\";\n    const where = search ? {\n        OR: [\n            {\n                name: {\n                    contains: search,\n                    mode: \"insensitive\"\n                }\n            },\n            {\n                email: {\n                    contains: search,\n                    mode: \"insensitive\"\n                }\n            },\n            {\n                city: {\n                    contains: search,\n                    mode: \"insensitive\"\n                }\n            }\n        ]\n    } : {};\n    const [customers, total] = await Promise.all([\n        _lib_db__WEBPACK_IMPORTED_MODULE_3__.prisma.customer.findMany({\n            where,\n            include: {\n                _count: {\n                    select: {\n                        orders: true\n                    }\n                }\n            },\n            orderBy: {\n                createdAt: \"desc\"\n            },\n            skip: (page - 1) * limit,\n            take: limit\n        }),\n        _lib_db__WEBPACK_IMPORTED_MODULE_3__.prisma.customer.count({\n            where\n        })\n    ]);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        customers,\n        total,\n        page,\n        limit\n    });\n}\nasync function POST(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    if (!(0,_lib_permissions__WEBPACK_IMPORTED_MODULE_4__.hasPermission)(session.user.role, \"customers:create\")) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Forbidden\"\n    }, {\n        status: 403\n    });\n    const body = await req.json();\n    const parsed = createSchema.safeParse(body);\n    if (!parsed.success) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: parsed.error.flatten()\n    }, {\n        status: 400\n    });\n    try {\n        const customer = await _lib_db__WEBPACK_IMPORTED_MODULE_3__.prisma.customer.create({\n            data: parsed.data\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(customer, {\n            status: 201\n        });\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Email already in use\"\n        }, {\n            status: 409\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsTUFBTXBDLDJDQUFNQSxDQUFDb0MsUUFBUSxDQUFDbUIsTUFBTSxDQUFDO1lBQUVDLE1BQU1MLE9BQU9LLElBQUk7UUFBQztRQUNsRSxPQUFPM0QscURBQVlBLENBQUNvQixJQUFJLENBQUNtQixVQUFVO1lBQUVqQixRQUFRO1FBQUk7SUFDbkQsRUFBRSxPQUFNO1FBQ04sT0FBT3RCLHFEQUFZQSxDQUFDb0IsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBdUIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDNUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhYXMtZGFzaGJvYXJkLy4vYXBwL2FwaS9jdXN0b21lcnMvcm91dGUudHM/NjljOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvZGJcIjtcbmltcG9ydCB7IGhhc1Blcm1pc3Npb24gfSBmcm9tIFwiQC9saWIvcGVybWlzc2lvbnNcIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmNvbnN0IGNyZWF0ZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgbmFtZTogei5zdHJpbmcoKS5taW4oMSksXG4gIGVtYWlsOiB6LnN0cmluZygpLmVtYWlsKCksXG4gIHBob25lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGFkZHJlc3M6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgY2l0eTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBjb3VudHJ5OiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICBpZiAoIXNlc3Npb24pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG5cbiAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxLnVybCk7XG4gIGNvbnN0IHBhZ2UgPSBwYXJzZUludChzZWFyY2hQYXJhbXMuZ2V0KFwicGFnZVwiKSA/PyBcIjFcIik7XG4gIGNvbnN0IGxpbWl0ID0gcGFyc2VJbnQoc2VhcmNoUGFyYW1zLmdldChcImxpbWl0XCIpID8/IFwiMjBcIik7XG4gIGNvbnN0IHNlYXJjaCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJzZWFyY2hcIikgPz8gXCJcIjtcblxuICBjb25zdCB3aGVyZSA9IHNlYXJjaFxuICAgID8ge1xuICAgICAgICBPUjogW1xuICAgICAgICAgIHsgbmFtZTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiBcImluc2Vuc2l0aXZlXCIgYXMgY29uc3QgfSB9LFxuICAgICAgICAgIHsgZW1haWw6IHsgY29udGFpbnM6IHNlYXJjaCwgbW9kZTogXCJpbnNlbnNpdGl2ZVwiIGFzIGNvbnN0IH0gfSxcbiAgICAgICAgICB7IGNpdHk6IHsgY29udGFpbnM6IHNlYXJjaCwgbW9kZTogXCJpbnNlbnNpdGl2ZVwiIGFzIGNvbnN0IH0gfSxcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICA6IHt9O1xuXG4gIGNvbnN0IFtjdXN0b21lcnMsIHRvdGFsXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBwcmlzbWEuY3VzdG9tZXIuZmluZE1hbnkoe1xuICAgICAgd2hlcmUsXG4gICAgICBpbmNsdWRlOiB7IF9jb3VudDogeyBzZWxlY3Q6IHsgb3JkZXJzOiB0cnVlIH0gfSB9LFxuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgICBza2lwOiAocGFnZSAtIDEpICogbGltaXQsXG4gICAgICB0YWtlOiBsaW1pdCxcbiAgICB9KSxcbiAgICBwcmlzbWEuY3VzdG9tZXIuY291bnQoeyB3aGVyZSB9KSxcbiAgXSk7XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgY3VzdG9tZXJzLCB0b3RhbCwgcGFnZSwgbGltaXQgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIGlmICghc2Vzc2lvbikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgaWYgKCFoYXNQZXJtaXNzaW9uKHNlc3Npb24udXNlci5yb2xlLCBcImN1c3RvbWVyczpjcmVhdGVcIikpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRm9yYmlkZGVuXCIgfSwgeyBzdGF0dXM6IDQwMyB9KTtcblxuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgY29uc3QgcGFyc2VkID0gY3JlYXRlU2NoZW1hLnNhZmVQYXJzZShib2R5KTtcbiAgaWYgKCFwYXJzZWQuc3VjY2VzcykgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IHBhcnNlZC5lcnJvci5mbGF0dGVuKCkgfSwgeyBzdGF0dXM6IDQwMCB9KTtcblxuICB0cnkge1xuICAgIGNvbnN0IGN1c3RvbWVyID0gYXdhaXQgcHJpc21hLmN1c3RvbWVyLmNyZWF0ZSh7IGRhdGE6IHBhcnNlZC5kYXRhIH0pO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihjdXN0b21lciwgeyBzdGF0dXM6IDIwMSB9KTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRW1haWwgYWxyZWFkeSBpbiB1c2VcIiB9LCB7IHN0YXR1czogNDA5IH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwicHJpc21hIiwiaGFzUGVybWlzc2lvbiIsInoiLCJjcmVhdGVTY2hlbWEiLCJvYmplY3QiLCJuYW1lIiwic3RyaW5nIiwibWluIiwiZW1haWwiLCJwaG9uZSIsIm9wdGlvbmFsIiwiYWRkcmVzcyIsImNpdHkiLCJjb3VudHJ5IiwiR0VUIiwicmVxIiwic2Vzc2lvbiIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsInBhZ2UiLCJwYXJzZUludCIsImdldCIsImxpbWl0Iiwic2VhcmNoIiwid2hlcmUiLCJPUiIsImNvbnRhaW5zIiwibW9kZSIsImN1c3RvbWVycyIsInRvdGFsIiwiUHJvbWlzZSIsImFsbCIsImN1c3RvbWVyIiwiZmluZE1hbnkiLCJpbmNsdWRlIiwiX2NvdW50Iiwic2VsZWN0Iiwib3JkZXJzIiwib3JkZXJCeSIsImNyZWF0ZWRBdCIsInNraXAiLCJ0YWtlIiwiY291bnQiLCJQT1NUIiwidXNlciIsInJvbGUiLCJib2R5IiwicGFyc2VkIiwic2FmZVBhcnNlIiwic3VjY2VzcyIsImZsYXR0ZW4iLCJjcmVhdGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/customers/route.ts\n");

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

/***/ }),

/***/ "(rsc)/./lib/permissions.ts":
/*!****************************!*\
  !*** ./lib/permissions.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PERMISSIONS: () => (/* binding */ PERMISSIONS),\n/* harmony export */   ROLE_COLORS: () => (/* binding */ ROLE_COLORS),\n/* harmony export */   ROLE_LABELS: () => (/* binding */ ROLE_LABELS),\n/* harmony export */   hasPermission: () => (/* binding */ hasPermission),\n/* harmony export */   requirePermission: () => (/* binding */ requirePermission)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PERMISSIONS = {\n    // Orders\n    \"orders:read\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN,\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.MANAGER,\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.VIEWER\n    ],\n    \"orders:create\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN,\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.MANAGER\n    ],\n    \"orders:update\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN,\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.MANAGER\n    ],\n    \"orders:delete\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN\n    ],\n    // Products\n    \"products:read\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN,\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.MANAGER,\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.VIEWER\n    ],\n    \"products:create\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN,\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.MANAGER\n    ],\n    \"products:update\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN,\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.MANAGER\n    ],\n    \"products:delete\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN\n    ],\n    // Customers\n    \"customers:read\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN,\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.MANAGER,\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.VIEWER\n    ],\n    \"customers:create\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN,\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.MANAGER\n    ],\n    \"customers:update\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN,\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.MANAGER\n    ],\n    \"customers:delete\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN\n    ],\n    // Users (admin only)\n    \"users:read\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN\n    ],\n    \"users:create\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN\n    ],\n    \"users:update\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN\n    ],\n    \"users:delete\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN\n    ],\n    // Analytics\n    \"analytics:read\": [\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.ADMIN,\n        _prisma_client__WEBPACK_IMPORTED_MODULE_0__.Role.MANAGER\n    ]\n};\nfunction hasPermission(role, permission) {\n    return PERMISSIONS[permission].includes(role);\n}\nfunction requirePermission(role, permission) {\n    if (!hasPermission(role, permission)) {\n        throw new Error(`Forbidden: requires ${permission}`);\n    }\n}\nconst ROLE_LABELS = {\n    ADMIN: \"Admin\",\n    MANAGER: \"Manager\",\n    VIEWER: \"Viewer\"\n};\nconst ROLE_COLORS = {\n    ADMIN: \"bg-red-100 text-red-800\",\n    MANAGER: \"bg-blue-100 text-blue-800\",\n    VIEWER: \"bg-gray-100 text-gray-800\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcGVybWlzc2lvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzQztBQUUvQixNQUFNQyxjQUFjO0lBQ3pCLFNBQVM7SUFDVCxlQUFlO1FBQUNELGdEQUFJQSxDQUFDRSxLQUFLO1FBQUVGLGdEQUFJQSxDQUFDRyxPQUFPO1FBQUVILGdEQUFJQSxDQUFDSSxNQUFNO0tBQUM7SUFDdEQsaUJBQWlCO1FBQUNKLGdEQUFJQSxDQUFDRSxLQUFLO1FBQUVGLGdEQUFJQSxDQUFDRyxPQUFPO0tBQUM7SUFDM0MsaUJBQWlCO1FBQUNILGdEQUFJQSxDQUFDRSxLQUFLO1FBQUVGLGdEQUFJQSxDQUFDRyxPQUFPO0tBQUM7SUFDM0MsaUJBQWlCO1FBQUNILGdEQUFJQSxDQUFDRSxLQUFLO0tBQUM7SUFFN0IsV0FBVztJQUNYLGlCQUFpQjtRQUFDRixnREFBSUEsQ0FBQ0UsS0FBSztRQUFFRixnREFBSUEsQ0FBQ0csT0FBTztRQUFFSCxnREFBSUEsQ0FBQ0ksTUFBTTtLQUFDO0lBQ3hELG1CQUFtQjtRQUFDSixnREFBSUEsQ0FBQ0UsS0FBSztRQUFFRixnREFBSUEsQ0FBQ0csT0FBTztLQUFDO0lBQzdDLG1CQUFtQjtRQUFDSCxnREFBSUEsQ0FBQ0UsS0FBSztRQUFFRixnREFBSUEsQ0FBQ0csT0FBTztLQUFDO0lBQzdDLG1CQUFtQjtRQUFDSCxnREFBSUEsQ0FBQ0UsS0FBSztLQUFDO0lBRS9CLFlBQVk7SUFDWixrQkFBa0I7UUFBQ0YsZ0RBQUlBLENBQUNFLEtBQUs7UUFBRUYsZ0RBQUlBLENBQUNHLE9BQU87UUFBRUgsZ0RBQUlBLENBQUNJLE1BQU07S0FBQztJQUN6RCxvQkFBb0I7UUFBQ0osZ0RBQUlBLENBQUNFLEtBQUs7UUFBRUYsZ0RBQUlBLENBQUNHLE9BQU87S0FBQztJQUM5QyxvQkFBb0I7UUFBQ0gsZ0RBQUlBLENBQUNFLEtBQUs7UUFBRUYsZ0RBQUlBLENBQUNHLE9BQU87S0FBQztJQUM5QyxvQkFBb0I7UUFBQ0gsZ0RBQUlBLENBQUNFLEtBQUs7S0FBQztJQUVoQyxxQkFBcUI7SUFDckIsY0FBYztRQUFDRixnREFBSUEsQ0FBQ0UsS0FBSztLQUFDO0lBQzFCLGdCQUFnQjtRQUFDRixnREFBSUEsQ0FBQ0UsS0FBSztLQUFDO0lBQzVCLGdCQUFnQjtRQUFDRixnREFBSUEsQ0FBQ0UsS0FBSztLQUFDO0lBQzVCLGdCQUFnQjtRQUFDRixnREFBSUEsQ0FBQ0UsS0FBSztLQUFDO0lBRTVCLFlBQVk7SUFDWixrQkFBa0I7UUFBQ0YsZ0RBQUlBLENBQUNFLEtBQUs7UUFBRUYsZ0RBQUlBLENBQUNHLE9BQU87S0FBQztBQUM5QyxFQUFXO0FBSUosU0FBU0UsY0FBY0MsSUFBVSxFQUFFQyxVQUFzQjtJQUM5RCxPQUFPLFdBQVksQ0FBQ0EsV0FBVyxDQUFxQkMsUUFBUSxDQUFDRjtBQUMvRDtBQUVPLFNBQVNHLGtCQUFrQkgsSUFBVSxFQUFFQyxVQUFzQjtJQUNsRSxJQUFJLENBQUNGLGNBQWNDLE1BQU1DLGFBQWE7UUFDcEMsTUFBTSxJQUFJRyxNQUFNLENBQUMsb0JBQW9CLEVBQUVILFdBQVcsQ0FBQztJQUNyRDtBQUNGO0FBRU8sTUFBTUksY0FBb0M7SUFDL0NULE9BQU87SUFDUEMsU0FBUztJQUNUQyxRQUFRO0FBQ1YsRUFBRTtBQUVLLE1BQU1RLGNBQW9DO0lBQy9DVixPQUFPO0lBQ1BDLFNBQVM7SUFDVEMsUUFBUTtBQUNWLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWFzLWRhc2hib2FyZC8uL2xpYi9wZXJtaXNzaW9ucy50cz8wMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvbGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IFBFUk1JU1NJT05TID0ge1xuICAvLyBPcmRlcnNcbiAgXCJvcmRlcnM6cmVhZFwiOiBbUm9sZS5BRE1JTiwgUm9sZS5NQU5BR0VSLCBSb2xlLlZJRVdFUl0sXG4gIFwib3JkZXJzOmNyZWF0ZVwiOiBbUm9sZS5BRE1JTiwgUm9sZS5NQU5BR0VSXSxcbiAgXCJvcmRlcnM6dXBkYXRlXCI6IFtSb2xlLkFETUlOLCBSb2xlLk1BTkFHRVJdLFxuICBcIm9yZGVyczpkZWxldGVcIjogW1JvbGUuQURNSU5dLFxuXG4gIC8vIFByb2R1Y3RzXG4gIFwicHJvZHVjdHM6cmVhZFwiOiBbUm9sZS5BRE1JTiwgUm9sZS5NQU5BR0VSLCBSb2xlLlZJRVdFUl0sXG4gIFwicHJvZHVjdHM6Y3JlYXRlXCI6IFtSb2xlLkFETUlOLCBSb2xlLk1BTkFHRVJdLFxuICBcInByb2R1Y3RzOnVwZGF0ZVwiOiBbUm9sZS5BRE1JTiwgUm9sZS5NQU5BR0VSXSxcbiAgXCJwcm9kdWN0czpkZWxldGVcIjogW1JvbGUuQURNSU5dLFxuXG4gIC8vIEN1c3RvbWVyc1xuICBcImN1c3RvbWVyczpyZWFkXCI6IFtSb2xlLkFETUlOLCBSb2xlLk1BTkFHRVIsIFJvbGUuVklFV0VSXSxcbiAgXCJjdXN0b21lcnM6Y3JlYXRlXCI6IFtSb2xlLkFETUlOLCBSb2xlLk1BTkFHRVJdLFxuICBcImN1c3RvbWVyczp1cGRhdGVcIjogW1JvbGUuQURNSU4sIFJvbGUuTUFOQUdFUl0sXG4gIFwiY3VzdG9tZXJzOmRlbGV0ZVwiOiBbUm9sZS5BRE1JTl0sXG5cbiAgLy8gVXNlcnMgKGFkbWluIG9ubHkpXG4gIFwidXNlcnM6cmVhZFwiOiBbUm9sZS5BRE1JTl0sXG4gIFwidXNlcnM6Y3JlYXRlXCI6IFtSb2xlLkFETUlOXSxcbiAgXCJ1c2Vyczp1cGRhdGVcIjogW1JvbGUuQURNSU5dLFxuICBcInVzZXJzOmRlbGV0ZVwiOiBbUm9sZS5BRE1JTl0sXG5cbiAgLy8gQW5hbHl0aWNzXG4gIFwiYW5hbHl0aWNzOnJlYWRcIjogW1JvbGUuQURNSU4sIFJvbGUuTUFOQUdFUl0sXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBQZXJtaXNzaW9uID0ga2V5b2YgdHlwZW9mIFBFUk1JU1NJT05TO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzUGVybWlzc2lvbihyb2xlOiBSb2xlLCBwZXJtaXNzaW9uOiBQZXJtaXNzaW9uKTogYm9vbGVhbiB7XG4gIHJldHVybiAoUEVSTUlTU0lPTlNbcGVybWlzc2lvbl0gYXMgcmVhZG9ubHkgUm9sZVtdKS5pbmNsdWRlcyhyb2xlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVQZXJtaXNzaW9uKHJvbGU6IFJvbGUsIHBlcm1pc3Npb246IFBlcm1pc3Npb24pOiB2b2lkIHtcbiAgaWYgKCFoYXNQZXJtaXNzaW9uKHJvbGUsIHBlcm1pc3Npb24pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBGb3JiaWRkZW46IHJlcXVpcmVzICR7cGVybWlzc2lvbn1gKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgUk9MRV9MQUJFTFM6IFJlY29yZDxSb2xlLCBzdHJpbmc+ID0ge1xuICBBRE1JTjogXCJBZG1pblwiLFxuICBNQU5BR0VSOiBcIk1hbmFnZXJcIixcbiAgVklFV0VSOiBcIlZpZXdlclwiLFxufTtcblxuZXhwb3J0IGNvbnN0IFJPTEVfQ09MT1JTOiBSZWNvcmQ8Um9sZSwgc3RyaW5nPiA9IHtcbiAgQURNSU46IFwiYmctcmVkLTEwMCB0ZXh0LXJlZC04MDBcIixcbiAgTUFOQUdFUjogXCJiZy1ibHVlLTEwMCB0ZXh0LWJsdWUtODAwXCIsXG4gIFZJRVdFUjogXCJiZy1ncmF5LTEwMCB0ZXh0LWdyYXktODAwXCIsXG59O1xuIl0sIm5hbWVzIjpbIlJvbGUiLCJQRVJNSVNTSU9OUyIsIkFETUlOIiwiTUFOQUdFUiIsIlZJRVdFUiIsImhhc1Blcm1pc3Npb24iLCJyb2xlIiwicGVybWlzc2lvbiIsImluY2x1ZGVzIiwicmVxdWlyZVBlcm1pc3Npb24iLCJFcnJvciIsIlJPTEVfTEFCRUxTIiwiUk9MRV9DT0xPUlMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/permissions.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcustomers%2Froute&page=%2Fapi%2Fcustomers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcustomers%2Froute.ts&appDir=%2FUsers%2Fralfhbryanperez%2FDocuments%2FClaude%2FProjects%2FSaaS%20Dashboard%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fralfhbryanperez%2FDocuments%2FClaude%2FProjects%2FSaaS%20Dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();