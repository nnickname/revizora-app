(()=>{var e={};e.id=6220,e.ids=[6220],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},41790:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page-experimental.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},74792:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>g,tree:()=>d});var o=t(67096),a=t(16132),s=t(37284),n=t.n(s),i=t(32564),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(r,l);let d=["",{children:["configuration",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,32084)),"C:\\Users\\barto\\OneDrive\\Desktop\\stockeado\\stockeado-mvp\\app\\configuration\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,78865)),"C:\\Users\\barto\\OneDrive\\Desktop\\stockeado\\stockeado-mvp\\app\\configuration\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,35345)),"C:\\Users\\barto\\OneDrive\\Desktop\\stockeado\\stockeado-mvp\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"]}],u=["C:\\Users\\barto\\OneDrive\\Desktop\\stockeado\\stockeado-mvp\\app\\configuration\\page.tsx"],c="/configuration/page",p={require:t,loadChunk:()=>Promise.resolve()},g=new o.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/configuration/page",pathname:"/configuration",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},89089:(e,r,t)=>{Promise.resolve().then(t.bind(t,51952))},78998:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var o=t(54997);let a=o.Z.create({baseURL:"https://stockeado-mvp.vercel.app/api",withCredentials:!0,headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Expose-Headers":"*","Access-Control-Allow-Credentials":"true"}})},51952:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>layout});var o=t(30784),a=t(57114),s=t(96692),n=t(9885),i=t(25105);t(81651);var l=t(40089);let d={src:"/_next/static/media/background2.205c3b96.jpeg"};var u=t(99816),c=t.n(u);let layout=()=>{let e=(0,a.useRouter)(),[r,t]=(0,n.useState)(null),[u,p]=(0,n.useState)(null),[g,m]=(0,n.useState)(null),[x,b]=(0,n.useState)(null),[h,f]=(0,n.useState)(null),[k,y]=(0,n.useState)(null),[v,w]=(0,n.useState)(null),[_,C]=(0,n.useState)(null),toUser=async()=>{let o=await (0,i.PR)();null==o&&e.push("/signin"),t(o),p(r?.image??""),m(r?.imageLogo??"")};(0,n.useEffect)(()=>{toUser()},[]);let validateForm=async()=>{let e={_id:r?._id,image:u??r?.image,imageLogo:g??r?.imageLogo,direction:x??r?.direction,name:h??r?.name,lastName:k??r?.lastname,nameShop:_??r?.nameShop,phone:v??r?.phone},t=await (0,i.uz)(e);t&&window.location.reload()},onChangeImage=async e=>{let r=e.target.files[0],t=new FileReader;t.readAsDataURL(r),t.onload=()=>{p(t.result)},t.onerror=e=>{console.log(e)}},onChangeImageLogo=async e=>{let r=e.target.files[0],t=new FileReader;t.readAsDataURL(r),t.onload=()=>{m(t.result)},t.onerror=e=>{console.log(e)}};return o.jsx("div",{children:null===r?o.jsx(c(),{name:"chevron-collapse-outline",className:"rotateItem",color:"#1366D9",style:{fontSize:"1.5rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}):o.jsx(s.Z,{user:r,route:"configuration",frameContennt:(0,o.jsxs)("div",{className:"configurationContent",children:[o.jsx("div",{className:"banner",children:(0,o.jsxs)("label",{htmlFor:"imageBanner",style:{cursor:"pointer",width:"100%",padding:"1rem"},children:[o.jsx("img",{src:""!==u?u:d.src,alt:"Banner",style:{marginRight:"auto",marginLeft:"auto"}}),o.jsx("input",{accept:"image",id:"imageBanner",onChange:onChangeImage,type:"file",placeholder:"Subir archivo",style:{visibility:"hidden",display:"none"}})]})}),(0,o.jsxs)("div",{className:"container",children:[(0,o.jsxs)("label",{htmlFor:"imageLogo",style:{cursor:"pointer"},children:[o.jsx("img",{style:{width:"150px",height:"150px",borderRadius:"100%",padding:"1rem",marginRight:"auto",marginLeft:"auto"},src:""!==g?g:l.Z.src,alt:"Logo"}),o.jsx("input",{accept:"image",id:"imageLogo",onChange:onChangeImageLogo,type:"file",placeholder:"Subir archivo",style:{visibility:"hidden",display:"none"}})]}),o.jsx("h1",{style:{color:"rgba(0,0,0, 0.8)",fontSize:"1.2rem",marginTop:"1rem"},children:"Configura tu usuario"}),o.jsx("div",{style:{marginTop:"1rem"},children:o.jsx("input",{value:_,onChange:e=>C(e.target.value),placeholder:"Nombre de tienda ("+r?.nameShop+")",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[o.jsx("input",{value:h,onChange:e=>f(e.target.value),placeholder:"Nombre ("+r?.name+")",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),o.jsx("input",{value:k,onChange:e=>y(e.target.value),placeholder:"Apellido ("+r?.lastname+")",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[o.jsx("input",{value:x,onChange:e=>b(e.target.value),placeholder:"Direcci\xf3n ("+r?.direction+")",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),o.jsx("input",{value:v,onChange:e=>w(e.target.value),placeholder:"Whatsapp ("+r?.phone+")",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),o.jsx("div",{style:{width:"100%",marginTop:"1rem",textAlign:"right"},children:o.jsx("button",{onClick:()=>validateForm(),className:"inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5",style:{color:"#3662E3",background:"transparent",fontWeight:"400",fontSize:"1rem"},children:"Guardar"})})]})]})})})}},78865:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>n,__esModule:()=>s,default:()=>l});var o=t(95153);let a=(0,o.createProxy)(String.raw`C:\Users\barto\OneDrive\Desktop\stockeado\stockeado-mvp\app\configuration\layout.tsx`),{__esModule:s,$$typeof:n}=a,i=a.default,l=i},32084:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__,metadata:()=>s});var o=t(4656),a=t(78865);let s={title:"Stockeado - Configuraci\xf3n",description:"Mira tu Resumen en Stockeado"},__WEBPACK_DEFAULT_EXPORT__=()=>o.jsx(o.Fragment,{children:o.jsx(a.default,{})})},4656:(e,r,t)=>{"use strict";e.exports=t(67096).vendored["react-rsc"].ReactJsxRuntime},81651:()=>{},10713:(e,r,t)=>{"use strict";e.exports=t(10316).vendored.contexts.RouterContext}};var r=require("../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[657,3431,4185,4997,9816,8284,6903,5105,6692],()=>__webpack_exec__(74792));module.exports=t})();