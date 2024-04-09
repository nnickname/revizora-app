"use strict";
(() => {
var exports = {};
exports.id = 3938;
exports.ids = [3938];
exports.modules = {

/***/ 67096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 66860:
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 50852:
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 2097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/userr/edit/create/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./app/api/db.ts
var db = __webpack_require__(66971);
// EXTERNAL MODULE: ./models/userModel.ts
var userModel = __webpack_require__(17486);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(67096);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./app/api/midd/_middleware.api.ts
var _middleware_api = __webpack_require__(28342);
;// CONCATENATED MODULE: ./app/api/userr/edit/create/route.ts





async function POST(req) {
    try {
        if ((0,_middleware_api/* default */.Z)()) {
            await (0,db/* default */.Z)();
            let body = await req.json();
            let encryptedrandPassword = external_bcrypt_default().hashSync(body?.password.toString(), 10);
            const object = {
                ...body,
                password: encryptedrandPassword
            };
            var responseUser = await userModel/* default */.Z.findOne({
                email: body.email
            });
            if (responseUser !== null) return next_response/* default */.Z.json({
                message: "User already registered"
            });
            const addingUser = new userModel/* default */.Z(object);
            addingUser.markModified("users");
            addingUser.save();
            if (addingUser) {
                return next_response/* default */.Z.json({
                    message: "User registered",
                    user: addingUser,
                    password: encryptedrandPassword
                });
            } else return next_response/* default */.Z.json({
                message: "User not registered"
            });
        }
        return next_response/* default */.Z.json({
            message: "Invalid auth"
        });
    } catch (errors) {
        return next_response/* default */.Z.json({
            message: "Invalid body or error"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fuserr%2Fedit%2Fcreate%2Froute&name=app%2Fapi%2Fuserr%2Fedit%2Fcreate%2Froute&pagePath=private-next-app-dir%2Fapi%2Fuserr%2Fedit%2Fcreate%2Froute.ts&appDir=C%3A%5CUsers%5Cbarto%5COneDrive%5CDesktop%5Cstockeado%5Cstockeado-mvp%5Capp&appPaths=%2Fapi%2Fuserr%2Fedit%2Fcreate%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/userr/edit/create/route",
        pathname: "/api/userr/edit/create",
        filename: "route",
        bundlePath: "app/api/userr/edit/create/route"
    },
    resolvedPagePath: "C:\\Users\\barto\\OneDrive\\Desktop\\stockeado\\stockeado-mvp\\app\\api\\userr\\edit\\create\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/userr/edit/create/route";


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ 28342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ middlewareApi)
/* harmony export */ });
function middlewareApi() {
    return true;
// DONT WORK ENV
/*const token = headers().get('Authorization'); 
    const foo = process.env.NEXT_PUBLIC_API_TOKEN;
    if (typeof foo === 'undefined') {
        throw new Error("Env var `foo` is not defined")
    }
    if (token === null) {
        return false
    } else {
        if(token === foo){
            return true
        }
        return false;   
    }
    */ }


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8478,1835,3680,6971,7486], () => (__webpack_exec__(2097)));
module.exports = __webpack_exports__;

})();