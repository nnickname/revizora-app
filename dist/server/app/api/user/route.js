"use strict";(()=>{var e={};e.id=1356,e.ids=[1356],e.modules={58802:e=>{e.exports=require("bcrypt")},66860:e=>{e.exports=require("express")},11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},25528:e=>{e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},50852:e=>{e.exports=require("async_hooks")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},41808:e=>{e.exports=require("net")},71017:e=>{e.exports=require("path")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},71576:e=>{e.exports=require("string_decoder")},76224:e=>{e.exports=require("tty")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},75054:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>q,originalPathname:()=>v,requestAsyncStorage:()=>x,routeModule:()=>l,serverHooks:()=>g,staticGenerationAsyncStorage:()=>m,staticGenerationBailout:()=>y});var s={};t.r(s),t.d(s,{GET:()=>GET,POST:()=>POST}),t(78976);var o=t(10884),n=t(16132),a=t(66408),i=t(97168),u=t(58802),p=t.n(u),d=t(95798),c=t(43763);async function GET(e,r,t){try{await (0,a.Z)();let t=await (0,c.Z)(e,r);if(null===t)return d.Z.json({message:"Invalid token"});var s=await i.Z.findOne({_id:t});return d.Z.json({message:"User found",user:s})}catch(e){return d.Z.json({message:"Invalid token"})}}async function POST(e){try{await (0,a.Z)();let r="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t=[...Array(8)].map(e=>r[~~(Math.random()*r.length)]).join(""),s=p().hashSync(t.toString(),10),o=await e.json(),n={...o,password:s},u=new i.Z(n);if(u.markModified("users"),u.save(),u)return d.Z.json({message:"User registered",user:u,password:t});return d.Z.json({message:"User not registered"})}catch(e){return d.Z.json({message:"Invalid body or error"})}}let l=new o.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/user/route",pathname:"/api/user",filename:"route",bundlePath:"app/api/user/route"},resolvedPagePath:"C:\\Users\\barto\\OneDrive\\Desktop\\stockeado\\stockeado-mvp\\app\\api\\user\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:x,staticGenerationAsyncStorage:m,serverHooks:g,headerHooks:q,staticGenerationBailout:y}=l,v="/api/user/route"},43763:(e,r,t)=>{t.d(r,{Z:()=>middleware});var s=t(96721),o=t.n(s),n=t(24596);async function middleware(e,r){let t=(0,n.headers)().get("token");if(void 0===t)return null;try{let e=o().verify(t,"SECRET_EXAMPLE_KEY");if(e)return e._id}catch{return null}}}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[657,1788,4596,6721,6408,7168],()=>__webpack_exec__(75054));module.exports=t})();