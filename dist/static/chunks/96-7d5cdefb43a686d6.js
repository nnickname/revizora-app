(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96],{7286:function(e,t,s){"use strict";var l=s(2173);t.Z=l.Z.create({baseURL:"https://www.stockeado.com/api",withCredentials:!0,headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Expose-Headers":"*","Access-Control-Allow-Credentials":"true"}})},2300:function(e,t,s){"use strict";s.d(t,{Z:function(){return u},m:function(){return h}});var l=s(7437),r=s(6691),i=s.n(r),a=s(1396),o=s.n(a),n=s(4033),d=s(2265);s(2340);var c=s(1550),m=s.n(c),x=s(6807);let h=(e,t,s)=>{var l=0;return t&&(l=s),null==e||e.map(e=>{var t;l+=Number(null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.priceSelling)*(null==e?void 0:e.ammount)}),String(l)};var u=e=>{var t;let{cartItems:s,setCart:r}=e,a=(0,n.useRouter)(),[c,u]=(0,d.useState)(!1),[p,b]=(0,d.useState)(!1),g=()=>{window.scrollY>=80?b(!0):b(!1)};(0,d.useEffect)(()=>{window.addEventListener("scroll",g)});let[v,y]=(0,d.useState)(-1),[j,k]=(0,d.useState)(!1),[f,w]=(0,d.useState)(""),N=async()=>{if((null==f?void 0:f.length)>3){var e=null==f?void 0:f.replace(/%20/g," ");a.push("/marketplace/searchus?name="+String(e))}};return(0,l.jsx)("div",{style:{zIndex:55,width:"100%"},children:(0,l.jsx)("header",{style:{zIndex:55,width:"100%"},className:"header left-0 top-0 flex w-full items-center ".concat(p?"dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition":"absolute bg-transparent"),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"relative -mx-4 flex items-center justify-between",children:[(0,l.jsxs)("div",{className:"py-8 px-4",children:[(0,l.jsx)("img",{onClick:()=>a.push("/dashboard"),style:{cursor:"pointer",display:"none",width:"50px"},className:"showResponsive",src:"/_next/static/media/favicon.8adc2b25.png",alt:"logo"}),(0,l.jsxs)(o(),{href:"/dashboard",className:"header-logo block w-full hideResponsive",children:[(0,l.jsx)(i(),{src:"/images/logo/color.png",alt:"logo",width:140,height:30,className:"w-full dark:hidden"}),(0,l.jsx)(i(),{src:"/images/logo/white.png",alt:"logo",width:140,height:30,className:"hidden w-full dark:block"})]})]}),(0,l.jsxs)("div",{className:"input-search",children:[(0,l.jsx)(m(),{name:"search-outline",className:"iconinput hideResponsive"}),(0,l.jsx)("input",{value:f,onChange:e=>w(e.target.value),placeholder:"Busca por nombre de producto",type:"text"}),(0,l.jsx)("button",{onClick:()=>N(),children:"Buscar"})]}),(0,l.jsxs)("div",{className:"cart cartResponsive",onClick:()=>a.push("/signin"),children:[(0,l.jsx)(m(),{style:{fontSize:"1.2rem"},name:"person-outline"}),(0,l.jsx)("p",{children:"Cuenta"})]}),(0,l.jsx)(x.Popover,{containerStyle:{minWidth:"350px",backgroundColor:"white",padding:"1rem",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"0rem 0rem .5rem .5rem"},isOpen:j,positions:["bottom","left","right","top"],content:(0,l.jsxs)("div",{style:{marginTop:"1.5rem"},children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"1rem"},children:[(0,l.jsx)("p",{className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:"Imagen"}),(0,l.jsx)("p",{className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:"Nombre"}),(0,l.jsx)("p",{className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:"Cantidad"}),(0,l.jsx)("p",{className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:"Precio"}),(0,l.jsx)("p",{className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:"Action"})]}),(null==s?void 0:s.length)===0?(0,l.jsx)("p",{style:{textAlign:"center",color:"grey"},children:"Todavia no a\xf1adiste nada"}):"",null==s?void 0:s.map((e,t)=>{var i,a,o,n;let d=(null==e?void 0:null===(i=e.item)||void 0===i?void 0:i.name)+" "+(null==e?void 0:null===(a=e.item)||void 0===a?void 0:a.model);return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",borderBottom:"1px solid rgba(220, 220, 220, .3)"},children:[(0,l.jsx)("img",{style:{width:"35px",maxHeight:"35px"},src:null==e?void 0:null===(o=e.item)||void 0===o?void 0:o.image,alt:"Product Image"}),(0,l.jsxs)("p",{style:{maxWidth:"100px"},className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:[d.substring(0,30),"..."]}),(0,l.jsx)("p",{className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:String(null==e?void 0:e.ammount)}),(0,l.jsxs)("p",{className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:["s/. ",Number(null==e?void 0:null===(n=e.item)||void 0===n?void 0:n.priceSelling).toFixed(2)]}),(0,l.jsx)("button",{onClick:()=>{r(s.filter((e,s)=>t!==s)),sessionStorage.setItem("cart",JSON.stringify(s.filter((e,s)=>t!==s)))},style:{color:"#ff6347"},children:(0,l.jsx)(m(),{name:"trash-outline",color:"#ff6347"})})]})},t)})]}),(0,l.jsxs)("div",{style:{marginTop:"1rem",display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("p",{style:{fontSize:"1.1rem"},children:"Total"}),(0,l.jsxs)("p",{children:["s/. ",Number(h(s,!1,0)).toFixed(2)]})]}),(0,l.jsx)("button",{onClick:()=>a.push("/marketplace/payment"),style:{padding:".5rem",textAlign:"center",width:"100%",background:"linear-gradient(180deg, #127FFF 0%, #3662E3 100%)",color:"white"},children:"Ir a pagar"})]}),children:(0,l.jsx)("div",{className:"cart cartResponsive",style:{marginLeft:"1rem",marginRight:"1rem"},onClick:()=>k(!j),children:(0,l.jsxs)("div",{style:{position:"relative",width:"max-content"},children:[(0,l.jsx)("div",{style:{position:"absolute",right:"-.5rem",top:"-.5rem",fontSize:".85rem",borderRadius:"100%",background:"rgba(0,0,0, 0.1)",width:"1.2rem",height:"1.2rem",fontWeight:"500",color:"#3662E3"},children:" "+(null!==(t=null==s?void 0:s.length)&&void 0!==t?t:0)+" "}),(0,l.jsx)(m(),{style:{fontSize:"1.2rem"},name:"cart-outline"}),(0,l.jsx)("p",{children:"Carrito"})]})})})]})})})})}},2340:function(){}}]);