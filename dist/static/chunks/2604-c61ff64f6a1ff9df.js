(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2604],{1338:function(e,r){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */r.Q=function(e,r){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var i={},n=e.split(o),a=(r||{}).decode||t,l=0;l<n.length;l++){var s=n[l],d=s.indexOf("=");if(!(d<0)){var c=s.substr(0,d).trim(),u=s.substr(++d,s.length).trim();'"'==u[0]&&(u=u.slice(1,-1)),void 0==i[c]&&(i[c]=function(e,r){try{return r(e)}catch(r){return e}}(u,a))}}return i},r.q=function(e,r,t){var o=t||{},a=o.encode||i;if("function"!=typeof a)throw TypeError("option encode is invalid");if(!n.test(e))throw TypeError("argument name is invalid");var l=a(r);if(l&&!n.test(l))throw TypeError("argument val is invalid");var s=e+"="+l;if(null!=o.maxAge){var d=o.maxAge-0;if(isNaN(d)||!isFinite(d))throw TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(d)}if(o.domain){if(!n.test(o.domain))throw TypeError("option domain is invalid");s+="; Domain="+o.domain}if(o.path){if(!n.test(o.path))throw TypeError("option path is invalid");s+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw TypeError("option expires is invalid");s+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(s+="; HttpOnly"),o.secure&&(s+="; Secure"),o.sameSite)switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return s};var t=decodeURIComponent,i=encodeURIComponent,o=/; */,n=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},2123:function(e,r,t){"use strict";t.d(r,{$v:function(){return c},Dk:function(){return d},RF:function(){return u},RZ:function(){return s},Rd:function(){return a},SI:function(){return l},qU:function(){return n}});var i=t(9110),o=t(7286);let n=async e=>{try{var r;let t=await o.Z.get("/inventoryy/edit",{headers:{id:e}});if((null==t?void 0:null===(r=t.data)||void 0===r?void 0:r.deleted)!==void 0)return!0;return!1}catch(e){return!1}},a=async e=>{try{var r;let t=await o.Z.post("/inventoryy",{...e});if((null==t?void 0:null===(r=t.data)||void 0===r?void 0:r.item)!==void 0)return!0;return!1}catch(e){return!1}},l=async e=>{try{var r,t;let i=await o.Z.get("/inventoryy/load",{headers:{id:e}});if(console.log(i),(null==i?void 0:null===(r=i.data)||void 0===r?void 0:r.item)!==void 0)return null==i?void 0:null===(t=i.data)||void 0===t?void 0:t.item;return null}catch(e){return null}},s=async e=>{try{var r;let t=await o.Z.post("/inventoryy/load",{items:[...e]});if((null==t?void 0:null===(r=t.data)||void 0===r?void 0:r.item)!==void 0)return!0;return!1}catch(e){return!1}},d=async e=>{try{var r;let t=await o.Z.post("/inventoryy/edit",{...e});if((null==t?void 0:null===(r=t.data)||void 0===r?void 0:r.item)!==void 0)return!0;return!1}catch(e){return!1}},c=async()=>{try{var e;let r=new i.Z,t=r.get("access_token"),n=await o.Z.get("/inventoryy",{headers:{token:t}});return null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.items}catch(e){return null}},u=async e=>{try{let r=await o.Z.get("/inventoryy/marketplace",{headers:{id:e}});return null==r?void 0:r.data}catch(e){return null}}},7719:function(e,r,t){"use strict";t.d(r,{GA:function(){return a},PR:function(){return l},pH:function(){return n},r4:function(){return d},uz:function(){return s}});var i=t(9110),o=t(7286);let n=async(e,r)=>{try{var t,n;let a=new i.Z,l=await o.Z.post("/userr/login",{email:e,password:r});if((null==l?void 0:null===(t=l.data)||void 0===t?void 0:t.user)!==void 0)return a.set("access_token",null==l?void 0:null===(n=l.data)||void 0===n?void 0:n.token,{path:"/"}),!0;return!1}catch(e){return!1}},a=async e=>{try{var r;let t=await o.Z.get("/userr/login",{headers:{token:e}});return console.log(t),null==t?void 0:null===(r=t.data)||void 0===r?void 0:r.user}catch(e){return null}},l=async()=>{try{var e;let r=new i.Z,t=r.get("access_token"),n=await o.Z.get("/userr",{headers:{token:t}});return null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.user}catch(e){return null}},s=async e=>{try{var r;let t=await o.Z.post("/userr/edit",{...e});if((null==t?void 0:null===(r=t.data)||void 0===r?void 0:r.user)!==void 0)return!0;return!1}catch(e){return!1}},d=async e=>{try{var r;let t=await o.Z.post("/userr/edit/create",{...e});if((null==t?void 0:null===(r=t.data)||void 0===r?void 0:r.user)!==void 0)return!0;return!1}catch(e){return!1}}},2604:function(e,r,t){"use strict";t.r(r);var i=t(7437),o=t(2123),n=t(7719),a=t(2300),l=t(4033),s=t(2265);t(1131);var d=t(1550),c=t.n(d),u=t(793),m=t(2725);r.default=()=>{var e,r,t,d,p,h,x,v,g,y;let f=(0,l.useRouter)(),[b,k]=(0,s.useState)([]),[w,j]=(0,s.useState)(),[N,S]=(0,s.useState)(null),[C,E]=(0,s.useState)(0),T=async()=>{let e=(0,l.useSearchParams)(),r=e.get("id");if(null!==r&&(null==r?void 0:r.length)>0){let e=await (0,o.SI)(r),t=await (0,n.GA)(null==e?void 0:e.owner_id);j(e),S(t)}},F=()=>{if(C>0){let e=[{item:null!=w?w:{},ammount:C}];k(e),sessionStorage.setItem("cart",String(JSON.stringify(e))),f.push("/marketplace/payment")}},O=()=>{if(C>0){let e=[...b,{item:null!=w?w:{},ammount:C}];k(e),sessionStorage.setItem("cart",String(JSON.stringify(e)))}};return(0,s.useEffect)(()=>{T();let e=JSON.parse(sessionStorage.getItem("cart"));void 0!==e&&k(null!=e?e:[])},[]),(0,i.jsxs)("div",{children:[(0,i.jsx)(a.Z,{cartItems:b,setCart:k}),null===N?(0,i.jsx)(c(),{name:"chevron-collapse-outline",className:"rotateItem",color:"#1366D9",style:{fontSize:"1.5rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}):(0,i.jsxs)("div",{className:"viewitem",children:[(0,i.jsx)("div",{style:{paddingRight:"auto",paddingLeft:"auto",marginTop:"7rem"},children:(0,i.jsxs)("p",{style:{color:"grey",fontSize:".8rem",marginBottom:"1rem"},children:[" MarketPlace ","> "+(null==N?void 0:N.nameShop)]})}),(0,i.jsxs)("div",{className:"cardImage displayBlockResponsive",children:[(0,i.jsxs)("div",{style:{display:"flex",width:"100%"},className:"displayBlockResponsive",children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:"responsiveItemImage",style:{maxWidth:"350px",minHeight:"250px",border:"1px solid rgba(128, 128, 128, 0.219",borderRadius:".8rem"},src:null==w?void 0:w.image,alt:"Image Item"})}),(0,i.jsxs)("div",{style:{width:"100%",padding:"1rem"},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,i.jsxs)("p",{style:{color:"green",fontSize:".8rem"},children:[(0,i.jsx)(c(),{name:"checkmark-outline"})," En stock ","("+(null==w?void 0:w.ammount)+")"]}),(0,i.jsxs)("p",{style:{color:"grey",fontSize:".8rem"},children:[" SKU/ID: ",null==w?void 0:w._id]})]}),(0,i.jsx)("p",{style:{fontWeight:"500",fontSize:"1.1rem",marginTop:"1rem"},children:(null==w?void 0:w.name)+" "}),(0,i.jsxs)("p",{style:{color:"grey",fontSize:".8rem",marginTop:"1rem"},children:["Vendido por: ",(0,i.jsx)("span",{style:{cursor:"pointer",marginLeft:".5rem",color:"#0E7AFF"},onClick:()=>f.push("/marketplace/shop?id="+(null==N?void 0:N._id)),children:null==N?void 0:N.nameShop})]}),(0,i.jsxs)("p",{style:{fontWeight:"500",fontSize:"1.2rem",marginTop:"1rem"},children:["s/. ",null!==(e=Number(null==w?void 0:w.priceSelling).toFixed(2))&&void 0!==e?e:0]}),(0,i.jsx)("div",{style:{backgroundColor:"rgba(0, 0, 0, 0.1)",width:"100%",height:"1px",marginTop:"1rem"}}),(0,i.jsxs)("p",{style:{color:"grey",fontSize:".9rem",marginTop:"1rem"},children:["Marca: ",(0,i.jsx)("span",{style:{cursor:"pointer",marginLeft:".5rem",color:"black"},children:(null==w?void 0:w.brand)===0?"No definido":u.PX[null!==(r=null==w?void 0:w.brand)&&void 0!==r?r:0]})]}),(0,i.jsx)("div",{style:{backgroundColor:"rgba(0, 0, 0, 0.1)",width:"100%",height:"1px",marginTop:"1rem"}}),(0,i.jsxs)("p",{style:{color:"grey",fontSize:".9rem",marginTop:"1rem"},children:["N\xfamero de parte: ",(0,i.jsx)("span",{style:{cursor:"pointer",marginLeft:".5rem",color:"black"},children:null!==(t=null==w?void 0:w.numberPart)&&void 0!==t?t:"No definido"})]}),(0,i.jsxs)("p",{style:{color:"grey",fontSize:".9rem",marginTop:"1rem"},children:["Aplica para: ",(0,i.jsx)("span",{style:{cursor:"pointer",marginLeft:".5rem",color:"black"},children:null!==(d=null==w?void 0:w.description)&&void 0!==d?d:"No definido"})]})]})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{style:{border:"1px solid rgba(128, 128, 128, 0.219 !important",borderRadius:".5rem",padding:"1rem",minWidth:"180px"},children:[(0,i.jsx)("p",{children:"Cantidad"}),(0,i.jsx)("input",{value:String(C),onChange:e=>E(Number(e.target.value)),type:"number",max:Number(null!==(p=null==w?void 0:w.ammount)&&void 0!==p?p:0),min:0,name:"name",placeholder:"",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-3 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{padding:".5rem",borderLeft:"transparent",borderRight:"transparent",borderTop:"transparent"}}),(0,i.jsx)("p",{style:{marginTop:"1rem",color:"#8B96A5",fontSize:".8rem"},children:"Lima, Per\xfa"}),(0,i.jsx)("p",{style:{marginTop:".5rem",color:"#8B96A5",fontSize:".8rem"},children:"Env\xedo a domicilio"}),(0,i.jsxs)("p",{style:{marginTop:".5rem",color:"#8B96A5",fontSize:".8rem"},children:["Enviado por ",(0,i.jsx)("span",{style:{fontWeight:"700"},children:"Stockeado"})]}),(0,i.jsx)("button",{onClick:()=>F(),style:{marginTop:"1rem",borderRadius:".5rem",backgroundColor:"#127FFF",padding:".5rem",color:"white",width:"100%"},children:"Comprar ahora"}),(0,i.jsx)("button",{onClick:()=>O(),style:{marginTop:".5rem",borderRadius:".5rem",backgroundColor:"transparent",padding:".5rem",color:"#127FFF",border:"1px solid rgba(0, 0,0, .2)",width:"100%"},children:"A\xf1adir al carrito"})]})})]}),(0,i.jsxs)("div",{style:{marginTop:"1rem",width:"80%",backgroundColor:"white",borderRadius:".5rem",border:"1px solid rgba(128, 128, 128, 0.219)",marginBottom:"3rem",padding:"1rem"},className:"w100Responsive",children:[(0,i.jsxs)("div",{style:{display:"flex",width:"100%"},children:[(0,i.jsx)("p",{style:{color:"#0D6EFD",borderBottom:"1px solid #0D6EFD",width:"100%",padding:".5rem"},children:"Descripci\xf3n del producto"}),(0,i.jsx)("p",{style:{borderBottom:"1px solid grey",width:"100%",padding:".5rem"}})]}),(0,i.jsx)("p",{style:{width:"100%",marginTop:"1rem",fontSize:".9rem"},children:null!==(h=null==w?void 0:w.description)&&void 0!==h?h:"No se encontro una descripci\xf3n"}),(0,i.jsxs)("div",{style:{boxSizing:"border-box",width:"100%",marginTop:"1rem"},children:[(0,i.jsxs)("div",{style:{display:"flex",width:"100%"},children:[(0,i.jsx)("p",{style:{width:"100%",backgroundColor:"#EFF2F4",padding:".3rem",border:"1px solid rgba(0,0,0, 0.1)"},children:"Marca"}),(0,i.jsx)("p",{style:{width:"100%",backgroundColor:"transparent",padding:".3rem",border:"1px solid rgba(0,0,0, 0.1)"},children:(null==w?void 0:w.brand)===0?"No definido":u.PX[null!==(x=null==w?void 0:w.brand)&&void 0!==x?x:0]})]}),(0,i.jsxs)("div",{style:{display:"flex",width:"100%"},children:[(0,i.jsx)("p",{style:{width:"100%",backgroundColor:"#EFF2F4",padding:".3rem",border:"1px solid rgba(0,0,0, 0.1)"},children:"Modelo/Modelo de veh\xedculos compatibles"}),(0,i.jsx)("p",{style:{width:"100%",backgroundColor:"transparent",padding:".3rem",border:"1px solid rgba(0,0,0, 0.1)"},children:null!==(v=null==w?void 0:w.model)&&void 0!==v?v:"No definido"})]}),(0,i.jsxs)("div",{style:{display:"flex",width:"100%"},children:[(0,i.jsx)("p",{style:{width:"100%",backgroundColor:"#EFF2F4",padding:".3rem",border:"1px solid rgba(0,0,0, 0.1)"},children:"N\xfamero de parte"}),(0,i.jsx)("p",{style:{width:"100%",backgroundColor:"transparent",padding:".3rem",border:"1px solid rgba(0,0,0, 0.1)"},children:null!==(g=null==w?void 0:w.numberPart)&&void 0!==g?g:"No definido"})]}),(0,i.jsxs)("div",{style:{display:"flex",width:"100%"},children:[(0,i.jsx)("p",{style:{width:"100%",backgroundColor:"#EFF2F4",padding:".3rem",border:"1px solid rgba(0,0,0, 0.1)"},children:"SKU"}),(0,i.jsx)("p",{style:{width:"100%",backgroundColor:"transparent",padding:".3rem",border:"1px solid rgba(0,0,0, 0.1)"},children:null!==(y=null==w?void 0:w.sku)&&void 0!==y?y:"No definido"})]}),(0,i.jsxs)("div",{style:{display:"flex",width:"100%"},children:[(0,i.jsx)("p",{style:{width:"100%",backgroundColor:"#EFF2F4",padding:".3rem",border:"1px solid rgba(0,0,0, 0.1)"},children:"Enviado por"}),(0,i.jsx)("p",{style:{width:"100%",backgroundColor:"transparent",padding:".3rem",border:"1px solid rgba(0,0,0, 0.1)",fontWeight:"500"},children:"Stockeado"})]})]})]}),(0,i.jsx)(m.default,{})]})]})}},2725:function(e,r,t){"use strict";t.r(r);var i=t(7437),o=t(1550),n=t.n(o),a=t(6691),l=t.n(a),s=t(1396),d=t.n(s);r.default=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("footer",{className:"wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24","data-wow-delay":".1s",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"-mx-4 flex flex-wrap",children:[(0,i.jsx)("div",{className:"w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12",children:(0,i.jsxs)("div",{className:"mb-12 max-w-[360px] lg:mb-16",children:[(0,i.jsxs)(d(),{href:"/",className:"mb-8 inline-block",children:[(0,i.jsx)(l(),{src:"/images/logo/logopreferente.png",alt:"logo",className:"w-full dark:hidden",width:140,height:30,style:{transform:"translateX(-15%)"}}),(0,i.jsx)(l(),{src:"/images/logo/logopreferente.png",alt:"logo",className:"hidden w-full dark:block",width:140,height:30})]}),(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/company/stockeado/",className:"dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary",children:(0,i.jsx)(n(),{style:{color:"grey",fontSize:"1.5rem",margin:"1rem",cursor:"pointer"},name:"logo-linkedin"})}),(0,i.jsx)("a",{target:"_blank",href:"https://www.instagram.com/stockeado_/",className:"dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary",children:(0,i.jsx)(n(),{style:{color:"grey",fontSize:"1.5rem",margin:"1rem",cursor:"pointer"},name:"logo-instagram"})})]})]})}),(0,i.jsx)("div",{className:"w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12",children:(0,i.jsxs)("div",{className:"mb-12 lg:mb-16",children:[(0,i.jsx)("h2",{className:"mb-10 text-xl font-bold text-black dark:text-white",children:"Links"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/signup",className:"dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary",children:"Crear cuenta"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/signin",className:"dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary",children:"Ingresar"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/",className:"dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary",children:"Marketplace"})})]})]})}),(0,i.jsx)("div",{className:"w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12",children:(0,i.jsxs)("div",{className:"mb-12 lg:mb-16",children:[(0,i.jsx)("h2",{className:"mb-10 text-xl font-bold text-black dark:text-white",children:"Terms"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/privacy",className:"dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary",children:"Pol\xedtica de Privacidad"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/terms",className:"dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary",children:"T\xe9rminos y condiciones"})})]})]})}),(0,i.jsx)("div",{className:"w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12",children:(0,i.jsxs)("div",{className:"mb-12 lg:mb-16",children:[(0,i.jsx)("h2",{className:"mb-10 text-xl font-bold text-black dark:text-white",children:"Soporte"}),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{target:"_blank",href:"https://api.whatsapp.com/send?phone=+51941531016&text=\xbfEn que podemos ayudarte?",className:"dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary",children:"WhatsApp"})})})]})})]}),(0,i.jsx)("div",{className:"h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"}),(0,i.jsx)("div",{className:"py-8",children:(0,i.jsxs)("p",{className:"text-center text-base text-body-color dark:text-white",children:["Desarrollado por @Stockeado"," "]})})]})})})},793:function(e,r,t){"use strict";t.d(r,{FM:function(){return o},PX:function(){return i},rM:function(){return n}});let i=["Toyota","Nissan","Hyundai","BMW","Mercedes Benz","Kia","Chevrolet","Mitsubishi","Peugeot","Suzuki","Mazda","Volkswagen","Audi","Jeep","Land Rover","Volvo","Mini","Porsche","Geely","Otro"],o=["Partes de motor","Neumaticos","Otro"],n=["Genuino","Original","Alternativo"]},1131:function(){},9110:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var i=t(1338);function o(e,r){void 0===r&&(r={});var t,i=e&&"j"===e[0]&&":"===e[1]?e.substr(2):e;if(void 0===(t=r.doNotParse)&&(t=!i||"{"!==i[0]&&"["!==i[0]&&'"'!==i[0]),!t)try{return JSON.parse(i)}catch(e){}return e}var n=function(){return(n=Object.assign||function(e){for(var r,t=1,i=arguments.length;t<i;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},a=function(){function e(e,r){var t=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies="string"==typeof e?i.Q(e,r):"object"==typeof e&&null!==e?e:{},new Promise(function(){t.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}).catch(function(){})}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=i.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var r=0;r<this.changeListeners.length;++r)this.changeListeners[r](e)},e.prototype.get=function(e,r,t){return void 0===r&&(r={}),this._updateBrowserValues(t),o(this.cookies[e],r)},e.prototype.getAll=function(e,r){void 0===e&&(e={}),this._updateBrowserValues(r);var t={};for(var i in this.cookies)t[i]=o(this.cookies[i],e);return t},e.prototype.set=function(e,r,t){var o;"object"==typeof r&&(r=JSON.stringify(r)),this.cookies=n(n({},this.cookies),((o={})[e]=r,o)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=i.q(e,r,t)),this._emitChange({name:e,value:r,options:t})},e.prototype.remove=function(e,r){var t=r=n(n({},r),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=n({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=i.q(e,"",t)),this._emitChange({name:e,value:void 0,options:r})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var r=this.changeListeners.indexOf(e);r>=0&&this.changeListeners.splice(r,1)},e}()}}]);