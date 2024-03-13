(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{4482:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.Q=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var o={},a=e.split(n),i=(t||{}).decode||r,s=0;s<a.length;s++){var l=a[s],d=l.indexOf("=");if(!(d<0)){var c=l.substr(0,d).trim(),u=l.substr(++d,l.length).trim();'"'==u[0]&&(u=u.slice(1,-1)),void 0==o[c]&&(o[c]=function(e,t){try{return t(e)}catch(t){return e}}(u,i))}}return o},t.q=function(e,t,r){var n=r||{},i=n.encode||o;if("function"!=typeof i)throw TypeError("option encode is invalid");if(!a.test(e))throw TypeError("argument name is invalid");var s=i(t);if(s&&!a.test(s))throw TypeError("argument val is invalid");var l=e+"="+s;if(null!=n.maxAge){var d=n.maxAge-0;if(isNaN(d)||!isFinite(d))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(d)}if(n.domain){if(!a.test(n.domain))throw TypeError("option domain is invalid");l+="; Domain="+n.domain}if(n.path){if(!a.test(n.path))throw TypeError("option path is invalid");l+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(l+="; HttpOnly"),n.secure&&(l+="; Secure"),n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var r=decodeURIComponent,o=encodeURIComponent,n=/; */,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},378:function(e,t,r){Promise.resolve().then(r.bind(r,6543))},980:function(e,t,r){"use strict";var o=r(2173);t.Z=o.Z.create({baseURL:"https://stockeado-mvp.vercel.app/api",withCredentials:!0,headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Expose-Headers":"*","Access-Control-Allow-Credentials":"true"}})},7543:function(e,t,r){"use strict";r.d(t,{GA:function(){return getUserById},PR:function(){return getUser},pH:function(){return loginUser},r4:function(){return createUser},uz:function(){return editUser}});var o=r(9110),n=r(980);let loginUser=async(e,t)=>{try{var r,a;let i=new o.Z,s=await n.Z.post("/user/login",{email:e,password:t});if((null==s?void 0:null===(r=s.data)||void 0===r?void 0:r.user)!==void 0)return i.set("access_token",null==s?void 0:null===(a=s.data)||void 0===a?void 0:a.token,{path:"/"}),!0;return!1}catch(e){return!1}},getUserById=async e=>{try{var t;let r=await n.Z.get("/user/login",{headers:{token:e}});return console.log(r),null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.user}catch(e){return null}},getUser=async()=>{try{var e;let t=new o.Z,r=t.get("access_token"),a=await n.Z.get("/user",{headers:{token:r}});return null==a?void 0:null===(e=a.data)||void 0===e?void 0:e.user}catch(e){return null}},editUser=async e=>{try{var t;let r=await n.Z.post("/user/edit",{...e});if((null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.user)!==void 0)return!0;return!1}catch(e){return!1}},createUser=async e=>{try{var t;let r=await n.Z.post("/user/edit/create",{...e});if((null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.user)!==void 0)return!0;return!1}catch(e){return!1}}},6543:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return layout}});var o=r(6705),n=r(4033),a=r(5630),i=r(955),s=r(7543);r(1251);var l=r(4214),d={src:"/_next/static/media/background2.205c3b96.jpeg"},c=r(1550),u=r.n(c),layout=()=>{let e=(0,n.useRouter)(),[t,r]=(0,i.useState)(null),[c,h]=(0,i.useState)(null),[p,g]=(0,i.useState)(null),[m,v]=(0,i.useState)(null),[f,y]=(0,i.useState)(null),[b,k]=(0,i.useState)(null),[x,A]=(0,i.useState)(null),[C,w]=(0,i.useState)(null),toUser=async()=>{var o,n;let a=await (0,s.PR)();null==a&&e.push("/signin"),r(a),h(null!==(o=null==t?void 0:t.image)&&void 0!==o?o:""),g(null!==(n=null==t?void 0:t.imageLogo)&&void 0!==n?n:"")};(0,i.useEffect)(()=>{toUser()},[]);let validateForm=async()=>{let e={_id:null==t?void 0:t._id,image:null!=c?c:null==t?void 0:t.image,imageLogo:null!=p?p:null==t?void 0:t.imageLogo,direction:null!=m?m:null==t?void 0:t.direction,name:null!=f?f:null==t?void 0:t.name,lastName:null!=b?b:null==t?void 0:t.lastname,nameShop:null!=C?C:null==t?void 0:t.nameShop,phone:null!=x?x:null==t?void 0:t.phone},r=await (0,s.uz)(e);r&&window.location.reload()},onChangeImage=async e=>{let t=e.target.files[0],r=new FileReader;r.readAsDataURL(t),r.onload=()=>{h(r.result)},r.onerror=e=>{console.log(e)}},onChangeImageLogo=async e=>{let t=e.target.files[0],r=new FileReader;r.readAsDataURL(t),r.onload=()=>{g(r.result)},r.onerror=e=>{console.log(e)}};return(0,o.jsx)("div",{children:null===t?(0,o.jsx)(u(),{name:"chevron-collapse-outline",className:"rotateItem",color:"#1366D9",style:{fontSize:"1.5rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}):(0,o.jsx)(a.Z,{user:t,route:"configuration",frameContennt:(0,o.jsxs)("div",{className:"configurationContent",children:[(0,o.jsx)("div",{className:"banner",children:(0,o.jsxs)("label",{htmlFor:"imageBanner",style:{cursor:"pointer",width:"100%",padding:"1rem"},children:[(0,o.jsx)("img",{src:""!==c?c:d.src,alt:"Banner",style:{marginRight:"auto",marginLeft:"auto"}}),(0,o.jsx)("input",{accept:"image",id:"imageBanner",onChange:onChangeImage,type:"file",placeholder:"Subir archivo",style:{visibility:"hidden",display:"none"}})]})}),(0,o.jsxs)("div",{className:"container",children:[(0,o.jsxs)("label",{htmlFor:"imageLogo",style:{cursor:"pointer"},children:[(0,o.jsx)("img",{style:{width:"150px",height:"150px",borderRadius:"100%",padding:"1rem",marginRight:"auto",marginLeft:"auto"},src:""!==p?p:l.Z.src,alt:"Logo"}),(0,o.jsx)("input",{accept:"image",id:"imageLogo",onChange:onChangeImageLogo,type:"file",placeholder:"Subir archivo",style:{visibility:"hidden",display:"none"}})]}),(0,o.jsx)("h1",{style:{color:"rgba(0,0,0, 0.8)",fontSize:"1.2rem",marginTop:"1rem"},children:"Configura tu usuario"}),(0,o.jsx)("div",{style:{marginTop:"1rem"},children:(0,o.jsx)("input",{value:C,onChange:e=>w(e.target.value),placeholder:"Nombre de tienda ("+(null==t?void 0:t.nameShop)+")",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)("input",{value:f,onChange:e=>y(e.target.value),placeholder:"Nombre ("+(null==t?void 0:t.name)+")",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,o.jsx)("input",{value:b,onChange:e=>k(e.target.value),placeholder:"Apellido ("+(null==t?void 0:t.lastname)+")",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)("input",{value:m,onChange:e=>v(e.target.value),placeholder:"Direcci\xf3n ("+(null==t?void 0:t.direction)+")",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,o.jsx)("input",{value:x,onChange:e=>A(e.target.value),placeholder:"Whatsapp ("+(null==t?void 0:t.phone)+")",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,o.jsx)("div",{style:{width:"100%",marginTop:"1rem",textAlign:"right"},children:(0,o.jsx)("button",{onClick:()=>validateForm(),className:"inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5",style:{color:"#3662E3",background:"transparent",fontWeight:"400",fontSize:"1rem"},children:"Guardar"})})]})]})})})}},5630:function(e,t,r){"use strict";var o=r(6705),n=r(7187),a=r(4214);r(7449);var i=r(6691),s=r.n(i),l=r(1550),d=r.n(l),c=r(955),u=r(9110),h=r(4033);t.Z=e=>{let{user:t,frameContennt:r,route:i}=e,l=(0,h.useRouter)(),p=new u.Z,[g,m]=(0,c.useState)(!0);return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"responsiveButtonViewNavigation",style:{display:"none",width:"100%",textAlign:"right"},children:(0,o.jsx)("button",{style:{fontSize:".9rem",color:"grey",position:"absolute",top:"1rem",right:"1rem"},onClick:()=>m(!g),children:g?"Esconder barra de navegaci\xf3n":"Mostrar barra de navegaci\xf3n"})}),(0,o.jsxs)("div",{className:"sideBar",children:[(0,o.jsxs)("div",{className:"sidebarCustomStyle",style:{display:g?"block":"none"},children:[(0,o.jsx)(s(),{src:n.Z,alt:"Logo"}),(0,o.jsx)("img",{className:"avatar",alt:"",src:(null==t?void 0:t.imageLogo)!==""?null==t?void 0:t.imageLogo:a.Z.src}),(0,o.jsx)("h1",{className:"title",children:null==t?void 0:t.nameShop}),(0,o.jsx)("div",{style:{marginTop:"3rem"}}),(0,o.jsxs)("div",{className:"list",onClick:()=>l.push("/hub"),children:[(0,o.jsx)(d(),{style:{color:"dashboard"===i?"#1570EF":"black"},className:"icon",name:"home-outline"}),(0,o.jsx)("p",{style:{color:"dashboard"===i?"#1570EF":"black"},className:"text",children:"Dashboard"})]}),(0,o.jsxs)("div",{className:"list",onClick:()=>l.push("/inventory"),children:[(0,o.jsx)(d(),{style:{color:"inventory"===i?"#1570EF":"black"},className:"icon",name:"cart-outline"}),(0,o.jsx)("p",{style:{color:"inventory"===i?"#1570EF":"black"},className:"text",children:"Inventario Web"})]}),(0,o.jsxs)("div",{className:"list",children:[(0,o.jsx)(d(),{style:{color:"request"===i?"#1570EF":"black"},className:"icon",name:"person-outline"}),(0,o.jsx)("p",{style:{color:"request"===i?"#1570EF":"black"},className:"text",children:"Solicitudes"})]}),(0,o.jsxs)("div",{onClick:()=>l.push("/orders"),className:"list",children:[(0,o.jsx)(d(),{style:{color:"orders"===i?"#1570EF":"black"},className:"icon",name:"mail-unread-outline"}),(0,o.jsx)("p",{style:{color:"orders"===i?"#1570EF":"black"},className:"text",children:"Ordenes finales"})]}),(0,o.jsx)("div",{style:{marginTop:"3rem"}}),(0,o.jsxs)("div",{onClick:()=>l.push("/configuration"),className:"list",children:[(0,o.jsx)(d(),{style:{color:"configuration"===i?"#1570EF":"black"},className:"icon",name:"settings-outline"}),(0,o.jsx)("p",{style:{color:"configuration"===i?"#1570EF":"black"},className:"text",children:"Configuraci\xf3n"})]}),(0,o.jsxs)("div",{className:"list logout",onClick:async()=>{await p.remove("access_token"),setTimeout(()=>{window.location.reload()},1500)},children:[(0,o.jsx)(d(),{className:"icon",name:"log-out-outline"}),(0,o.jsx)("p",{className:"text",children:"Cerrar sesi\xf3n"})]})]}),(0,o.jsx)("div",{className:"sideBarContainer",children:r})]})]})}},1251:function(){},7449:function(){},4214:function(e,t){"use strict";t.Z={src:"/_next/static/media/blueimage.a34531f7.png",height:194,width:259,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGAQMAAADEy024AAAAA1BMVEUAAP79f+LBAAAACklEQVR42mNAAgAADAABbcxrYQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},7187:function(e,t){"use strict";t.Z={src:"/_next/static/media/logopreferente.bbc72056.png",height:200,width:640,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAYElEQVR42g3HOxKCMBSG0e8nN+Irlkgtu3C0Y+duwYYZVkHBmwROd/SsPkFyArpr8c6BKX9U3MvaA4tJ+qa01Znd2rj2l1N4eTuXY9yGwvnQGOgH8S9ljhRngQcZR4BxB15DGcQuhSZBAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3}},9110:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var o=r(4482);function readCookie(e,t){void 0===t&&(t={});var r,o=e&&"j"===e[0]&&":"===e[1]?e.substr(2):e;if(void 0===(r=t.doNotParse)&&(r=!o||"{"!==o[0]&&"["!==o[0]&&'"'!==o[0]),!r)try{return JSON.parse(o)}catch(e){}return e}var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=function(){function Cookies(e,t){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies="string"==typeof e?o.Q(e,t):"object"==typeof e&&null!==e?e:{},new Promise(function(){r.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}).catch(function(){})}return Cookies.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=o.Q(document.cookie,e))},Cookies.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},Cookies.prototype.get=function(e,t,r){return void 0===t&&(t={}),this._updateBrowserValues(r),readCookie(this.cookies[e],t)},Cookies.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var r={};for(var o in this.cookies)r[o]=readCookie(this.cookies[o],e);return r},Cookies.prototype.set=function(e,t,r){var n;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=__assign(__assign({},this.cookies),((n={})[e]=t,n)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=o.q(e,t,r)),this._emitChange({name:e,value:t,options:r})},Cookies.prototype.remove=function(e,t){var r=t=__assign(__assign({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=__assign({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=o.q(e,"",r)),this._emitChange({name:e,value:void 0,options:t})},Cookies.prototype.addChangeListener=function(e){this.changeListeners.push(e)},Cookies.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},Cookies}()}}]);