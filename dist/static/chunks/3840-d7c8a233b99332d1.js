(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3840],{1338:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.Q=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var a={},s=e.split(o),i=(t||{}).decode||r,n=0;n<s.length;n++){var l=s[n],d=l.indexOf("=");if(!(d<0)){var c=l.substr(0,d).trim(),u=l.substr(++d,l.length).trim();'"'==u[0]&&(u=u.slice(1,-1)),void 0==a[c]&&(a[c]=function(e,t){try{return t(e)}catch(t){return e}}(u,i))}}return a},t.q=function(e,t,r){var o=r||{},i=o.encode||a;if("function"!=typeof i)throw TypeError("option encode is invalid");if(!s.test(e))throw TypeError("argument name is invalid");var n=i(t);if(n&&!s.test(n))throw TypeError("argument val is invalid");var l=e+"="+n;if(null!=o.maxAge){var d=o.maxAge-0;if(isNaN(d)||!isFinite(d))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(d)}if(o.domain){if(!s.test(o.domain))throw TypeError("option domain is invalid");l+="; Domain="+o.domain}if(o.path){if(!s.test(o.path))throw TypeError("option path is invalid");l+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(l+="; HttpOnly"),o.secure&&(l+="; Secure"),o.sameSite)switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var r=decodeURIComponent,a=encodeURIComponent,o=/; */,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},722:function(e,t,r){Promise.resolve().then(r.bind(r,7717))},7286:function(e,t,r){"use strict";var a=r(2173);t.Z=a.Z.create({baseURL:"https://stockeado.com/api",withCredentials:!0,headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Expose-Headers":"*","Access-Control-Allow-Credentials":"true"}})},7719:function(e,t,r){"use strict";r.d(t,{GA:function(){return i},PR:function(){return n},pH:function(){return s},r4:function(){return d},uz:function(){return l}});var a=r(9110),o=r(7286);let s=async(e,t)=>{try{var r,s;let i=new a.Z,n=await o.Z.post("/userr/login",{email:e,password:t});if((null==n?void 0:null===(r=n.data)||void 0===r?void 0:r.user)!==void 0)return i.set("access_token",null==n?void 0:null===(s=n.data)||void 0===s?void 0:s.token,{path:"/"}),!0;return!1}catch(e){return!1}},i=async e=>{try{var t;let r=await o.Z.get("/userr/login",{headers:{token:e}});return console.log(r),null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.user}catch(e){return null}},n=async()=>{try{var e;let t=new a.Z,r=t.get("access_token"),s=await o.Z.get("/userr",{headers:{token:r}});return null==s?void 0:null===(e=s.data)||void 0===e?void 0:e.user}catch(e){return null}},l=async e=>{try{var t;let r=await o.Z.post("/userr/edit",{...e});if((null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.user)!==void 0)return!0;return!1}catch(e){return!1}},d=async e=>{try{var t;let r=await o.Z.post("/userr/edit/create",{...e});if((null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.user)!==void 0)return!0;return!1}catch(e){return!1}}},7717:function(e,t,r){"use strict";r.r(t);var a=r(7437),o=r(1601),s=r(1396),i=r.n(s),n=r(2265),l=r(7483),d=r(7719),c=r(4033);t.default=()=>{let[e,t]=(0,n.useState)(""),[r,s]=(0,n.useState)(""),[u,p]=(0,n.useState)(""),[h,m]=(0,n.useState)(""),[x,b]=(0,n.useState)(),f=(0,c.useRouter)(),g=async()=>{if(console.log(x),"on"===x){if(""!==r&&""!==u&&""!==h){let t=await (0,d.r4)({name:r,lastname:"Complete",nameShop:e,phone:"Complete",image:"Complete",imageLogo:"Complete",direction:"Complete",password:u,email:h,visits:0});t&&(l.fn.success("Creaste tu cuenta","Creada"),setTimeout(()=>f.push("/signin"),1500))}else l.fn.error("Completa el formulario","Error")}else l.fn.error("Tienes que aceptar nuestros terminos y condiciones","Error")};return(0,a.jsxs)("div",{children:[(0,a.jsx)(o.default,{}),(0,a.jsxs)("section",{className:"relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]",children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"-mx-4 flex flex-wrap",children:(0,a.jsx)("div",{className:"w-full px-4",children:(0,a.jsxs)("div",{className:"shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]",children:[(0,a.jsx)("h3",{className:"mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl",children:"Crea tu cuenta"}),(0,a.jsx)("p",{className:"mb-11 text-center text-base font-medium text-body-color",children:"Crea tu cuenta gratis para explorar todas las funcionalidades de Stockeado."}),(0,a.jsxs)("form",{children:[(0,a.jsxs)("div",{className:"mb-8",children:[(0,a.jsxs)("label",{htmlFor:"name",className:"mb-3 block text-sm text-dark dark:text-white",children:[" ","Nombre"," "]}),(0,a.jsx)("input",{value:r,onChange:e=>s(e.target.value),type:"text",name:"name",placeholder:"",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"})]}),(0,a.jsxs)("div",{className:"mb-8",children:[(0,a.jsxs)("label",{htmlFor:"name",className:"mb-3 block text-sm text-dark dark:text-white",children:[" ","Nombre de tienda"," "]}),(0,a.jsx)("input",{value:e,onChange:e=>t(e.target.value),type:"text",name:"name",placeholder:"",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"})]}),(0,a.jsxs)("div",{className:"mb-8",children:[(0,a.jsxs)("label",{htmlFor:"email",className:"mb-3 block text-sm text-dark dark:text-white",children:[" ","Correo electr\xf3nico"," "]}),(0,a.jsx)("input",{value:h,onChange:e=>m(e.target.value),type:"email",name:"email",placeholder:"",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"})]}),(0,a.jsxs)("div",{className:"mb-8",children:[(0,a.jsxs)("label",{htmlFor:"password",className:"mb-3 block text-sm text-dark dark:text-white",children:[" ","Contrase\xf1a"," "]}),(0,a.jsx)("input",{value:u,onChange:e=>p(e.target.value),type:"password",name:"password",placeholder:"",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"})]}),(0,a.jsx)("div",{className:"mb-8 flex",children:(0,a.jsxs)("label",{htmlFor:"checkboxLabel",className:"flex cursor-pointer select-none text-sm font-medium text-body-color",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{value:x,onChange:e=>b(e.target.value),type:"checkbox",id:"checkboxLabel",className:"sr-only"}),(0,a.jsx)("div",{className:"box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10",children:(0,a.jsx)("span",{className:"opacity-0",children:(0,a.jsx)("svg",{width:"11",height:"8",viewBox:"0 0 11 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z",fill:"#3056D3",stroke:"#3056D3",strokeWidth:"0.4"})})})})]}),(0,a.jsxs)("span",{children:["Al crear esta cuenta aceptas nuestros",(0,a.jsxs)("a",{href:"/terms",target:"_blank",className:"text-primary hover:underline",children:[" ","Terminos y condiciones"," "]}),"y nuestra",(0,a.jsxs)("a",{href:"/privacy",target:"_blank",className:"text-primary hover:underline",children:[" ","Politica de privacidad"," "]})]})]})}),(0,a.jsx)("div",{className:"mb-6",children:(0,a.jsx)("button",{onClick:()=>g(),type:"button",className:"shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90",children:"Crear cuenta"})})]}),(0,a.jsxs)("p",{className:"text-center text-base font-medium text-body-color",children:["\xbfYa tienes una cuenta?"," ",(0,a.jsx)(i(),{href:"/signin",className:"text-primary hover:underline",children:"Iniciar sesi\xf3n"})]})]})})})}),(0,a.jsx)("div",{className:"absolute left-0 top-0 z-[-1]"})]})]})}},1601:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var a=r(7437),o=r(6691),s=r.n(o),i=r(1396),n=r.n(i),l=r(4033),d=r(2265),c=[{id:1,title:"Para talleres",path:"/marketplace",newTab:!0},{id:1,title:"Marketplace",path:"/marketplace",newTab:!0},{id:3,title:"Para proveedores",path:"/signup",newTab:!0}],u=()=>{let[e,t]=(0,d.useState)(!1),[r,o]=(0,d.useState)(!1),i=()=>{window.scrollY>=80?o(!0):o(!1)};(0,d.useEffect)(()=>{window.addEventListener("scroll",i)});let[u,p]=(0,d.useState)(-1),h=e=>{u===e?p(-1):p(e)},m=(0,l.usePathname)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("header",{style:{zIndex:55},className:"header left-0 top-0 z-40 flex w-full items-center ".concat(r?"dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition":"absolute bg-transparent"),children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"relative -mx-4 flex items-center justify-between",children:[(0,a.jsx)("div",{className:"w-60 max-w-full px-4 xl:mr-12",children:(0,a.jsxs)(n(),{href:"/dashboard",className:"header-logo block w-full ".concat(r?"py-5 lg:py-2":"py-8"," "),children:[(0,a.jsx)(s(),{src:"/images/logo/color.png",alt:"logo",width:140,height:30,className:"w-full dark:hidden"}),(0,a.jsx)(s(),{src:"/images/logo/white.png",alt:"logo",width:140,height:30,className:"hidden w-full dark:block"})]})}),(0,a.jsxs)("div",{className:"flex w-full items-center justify-between px-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("button",{onClick:()=>{t(!e)},id:"navbarToggler","aria-label":"Mobile Menu",className:"absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden",children:[(0,a.jsx)("span",{className:"relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ".concat(e?" top-[7px] rotate-45":" ")}),(0,a.jsx)("span",{className:"relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ".concat(e?"opacity-0 ":" ")}),(0,a.jsx)("span",{className:"relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ".concat(e?" top-[-8px] -rotate-45":" ")})]}),(0,a.jsx)("nav",{id:"navbarCollapse",className:"navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ".concat(e?"visibility top-full opacity-100":"invisible top-[120%] opacity-0"),children:(0,a.jsx)("ul",{className:"block lg:flex lg:space-x-12",children:c.map((e,t)=>(0,a.jsx)("li",{className:"group relative",children:e.path?(0,a.jsx)(n(),{href:e.path,className:"flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ".concat(m===e.path?"text-primary dark:text-white":"text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"),children:e.title}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{onClick:()=>h(t),className:"flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6",children:[e.title,(0,a.jsx)("span",{className:"pl-3",children:(0,a.jsx)("svg",{width:"25",height:"24",viewBox:"0 0 25 24",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z",fill:"currentColor"})})})]}),(0,a.jsx)("div",{className:"submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ".concat(u===t?"block":"hidden"),children:e.submenu.map((e,t)=>(0,a.jsx)(n(),{href:e.path,className:"block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3",children:e.title},t))})]})},t))})})]}),(0,a.jsxs)("div",{className:"flex items-center justify-end pr-16 lg:pr-0",children:[(0,a.jsx)(n(),{href:"/signup",className:"hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block",style:{color:"white",margin:".5rem",borderRadius:".5rem",backgroundImage:'linear-gradient(89deg, var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) /* {"name":"Azul prinicipal"} */ 0%, var(--token-1632e6e1-d1e5-427f-b435-20cb1e67f695, rgb(54, 98, 227)) /* {"name":"Azul claro"} */ 123.5068681091516%)'},children:"Registrarme"}),(0,a.jsx)(n(),{href:"/signin",className:"ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9",style:{backgroundColor:"transparent",color:"#3662E3",border:"1px solid #3662E3",borderRadius:".5rem"},children:"Iniciar sesi\xf3n"}),(0,a.jsx)("div",{})]})]})]})})})})}},1396:function(e,t,r){e.exports=r(6685)},9110:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var a=r(1338);function o(e,t){void 0===t&&(t={});var r,a=e&&"j"===e[0]&&":"===e[1]?e.substr(2):e;if(void 0===(r=t.doNotParse)&&(r=!a||"{"!==a[0]&&"["!==a[0]&&'"'!==a[0]),!r)try{return JSON.parse(a)}catch(e){}return e}var s=function(){return(s=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(){function e(e,t){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies="string"==typeof e?a.Q(e,t):"object"==typeof e&&null!==e?e:{},new Promise(function(){r.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}).catch(function(){})}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=a.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,r){return void 0===t&&(t={}),this._updateBrowserValues(r),o(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var r={};for(var a in this.cookies)r[a]=o(this.cookies[a],e);return r},e.prototype.set=function(e,t,r){var o;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=s(s({},this.cookies),((o={})[e]=t,o)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=a.q(e,t,r)),this._emitChange({name:e,value:t,options:r})},e.prototype.remove=function(e,t){var r=t=s(s({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=s({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=a.q(e,"",r)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}()}}]);