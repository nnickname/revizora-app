"use strict";exports.id=5639,exports.ids=[5639],exports.modules={85639:(e,a,r)=>{r.d(a,{ZP:()=>s});var t=r(11185),n=r.n(t);let i=new t.Schema({name:{type:String,required:[!0,"Please provide a name."],maxlength:[60,"Name cannot be more than 60 characters"]},lastname:{type:String,required:[!0,"Please provide a lastname."],maxlength:[60,"Name cannot be more than 60 characters"]},direction:{type:String,required:[!0,"Please provide a direction."],maxlength:[60,"Name cannot be more than 60 characters"]},maxDate:{type:String,required:[!0,"Please provide a Date."]},state:{type:Number,required:[!0,"Please provide a state."],maxlength:[60,"Name cannot be more than 60 characters"]},items:{type:Object,required:[!0,"Please provide a items."]},payType:{type:Number,required:[!0,"Please provide a pay type."]}}),s=n().models.orders||(0,t.model)("orders",i)}};