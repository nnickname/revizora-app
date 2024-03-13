exports.id=207,exports.ids=[207],exports.modules={78998:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(54997);let i=r.Z.create({baseURL:"https://stockeado-mvp.vercel.app/api",withCredentials:!0,headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Expose-Headers":"*","Access-Control-Allow-Credentials":"true"}})},30105:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(30784);s(3579);var i=s(81668);let getTotalPriceInventory=e=>{var t=0;return e?.map(e=>{t+=Number(e?.priceSelling)*e?.ammount}),String(t.toFixed(2))},getNoneStock=e=>{var t=0;return e?.map(e=>{e?.ammount<1&&t++}),String(t)},getLowStockAmmount=e=>{var t=0;return e?.map(e=>{e?.ammount<5&&t++}),String(t)},getTotalItemsSellings=(e,t)=>{var s=0;return e?.map(e=>{Number(e?.state)>0&&e?.items?.map(e=>{e.item._id===t&&(s=+Number(e?.ammount))})}),s},getTotalItemsSellingsValue=(e,t)=>{var s=0;return e?.map(e=>{Number(e?.state)>0&&e?.items?.map(e=>{e.item._id===t&&(s=+(Number(e?.ammount)*Number(e?.item?.priceSelling)))})}),s},getTotalBrands=e=>{var t,s=[];return e?.map(e=>{for(var r=0;r<s?.length;r++)t=s[r]===i.PX[e?.brand],0===r&&s.slice(0,1);t||s.push(i.PX[e?.brand])}),String(s?.length)},__WEBPACK_DEFAULT_EXPORT__=({items:e,orders:t,user:s})=>r.jsx("div",{className:"content-frame-container resume",children:(0,r.jsxs)("div",{style:{width:"100%",textAlign:"left"},children:[r.jsx("h1",{children:"Resumen de Inventario"}),(0,r.jsxs)("div",{className:"resumeContainer displayGridResponsive",style:{display:"flex"},children:[(0,r.jsxs)("div",{style:{padding:"1rem",paddingRight:"3rem",borderRight:"1px solid rgba(230, 230, 230, 0.5)"},children:[r.jsx("h1",{style:{color:"#1570EF",marginBottom:".3rem"},children:"Marcas"}),r.jsx("p",{children:getTotalBrands(e)})]}),(0,r.jsxs)("div",{style:{padding:"1rem",width:"100%",borderRight:"1px solid rgba(230, 230, 230, 0.5)"},children:[r.jsx("h1",{style:{color:"#E19133",marginBottom:".3rem"},children:"Total productos"}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:".3rem"},children:[r.jsx("p",{children:e?.length}),r.jsx("p",{children:getTotalPriceInventory(e)})]}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[r.jsx("p",{style:{color:"#858D9D",fontSize:".8rem"},children:"Productos"}),r.jsx("p",{style:{color:"#858D9D",fontSize:".8rem"},children:" Valor en soles"})]})]}),(0,r.jsxs)("div",{style:{padding:"1rem",width:"100%",borderRight:"1px solid rgba(230, 230, 230, 0.5)"},children:[r.jsx("h1",{style:{color:"#58D365",marginBottom:".3rem"},children:"Total ventas"}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:".3rem"},children:[r.jsx("p",{children:getTotalItemsSellings(t,String(s?._id))}),(0,r.jsxs)("p",{children:[" ",getTotalItemsSellingsValue(t,String(s?._id))]})]}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[r.jsx("p",{style:{color:"#858D9D",fontSize:".8rem"},children:"Unidades"}),r.jsx("p",{style:{color:"#858D9D",fontSize:".8rem"},children:" Valor en soles"})]})]}),(0,r.jsxs)("div",{style:{padding:"1rem",width:"100%"},children:[r.jsx("h1",{style:{color:"#F36960",marginBottom:".3rem"},children:"Bajo Stock"}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:".3rem"},children:[r.jsx("p",{children:getLowStockAmmount(e)}),(0,r.jsxs)("p",{children:[" ",getNoneStock(e)]})]}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[r.jsx("p",{style:{color:"#858D9D",fontSize:".8rem"},children:"productos"}),(0,r.jsxs)("p",{style:{color:"#858D9D",fontSize:".8rem"},children:[" ","sin stock"]})]})]})]})]})})},3579:()=>{}};