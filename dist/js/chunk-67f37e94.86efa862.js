(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67f37e94"],{"62cc":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"login"},[a("AuthSection",[a("LoginForm")],1)],1)},r=[],s=a("c068"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("AuthContainer",{staticClass:"login"},[a("MainTitle",{staticClass:"login__title"},[t._v("Логин")]),a("Form",{ref:"form",staticClass:"login__form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("CustomInput",{staticClass:"login__input",attrs:{placeholder:"Email",autocomplete:"email",name:"email",rules:t.emailRules},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),a("CustomInput",{staticClass:"login__input",attrs:{placeholder:"Password",type:"password",autocomplete:"current-password",name:"password",rules:t.passwordRules},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),a("Button",{staticClass:"login__btn",attrs:{type:"submit",loading:t.loading}},[t._v(" Вход ")])],1)],1)},o=[],l=a("1da1"),u=a("5530"),c=(a("96cf"),a("4060")),m=a("2f62"),p=a("8b5f"),f=a("fbe5"),d=a("ae2c"),b=a("3627"),h=a("bd0c"),g={name:"Login",components:{AuthContainer:p["a"],Form:f["a"],MainTitle:d["a"],CustomInput:b["a"],Button:h["a"]},data:function(){return{loading:!1,formData:{email:"",password:""}}},computed:{rules:function(){return{emailValidation:c["b"],passwordValidation:c["d"],isRequired:c["c"]}},emailRules:function(){return[this.rules.isRequired,this.rules.emailValidation]},passwordRules:function(){return[this.rules.isRequired]}},methods:Object(u["a"])(Object(u["a"])({},Object(m["b"])("auth",["login"])),{},{handleSubmit:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.$refs.form,n=a.validate(),!n){e.next=17;break}return e.prev=3,t.loading=!0,e.next=7,t.login(t.formData);case 7:t.$router.push({name:"homepage"}),a.reset(),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),t.$notify({type:"error",title:"Произошла ошибка",text:e.t0.message});case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,11,14,17]])})))()}})},w=g,_=(a("a9b0"),a("2877")),v=Object(_["a"])(w,i,o,!1,null,"297875b9",null),C=v.exports,x={name:"LoginPage",components:{AuthSection:s["a"],LoginForm:C}},D=x,R=Object(_["a"])(D,n,r,!1,null,"62949ce2",null);e["default"]=R.exports},a9b0:function(t,e,a){"use strict";a("c800")},c800:function(t,e,a){}}]);
//# sourceMappingURL=chunk-67f37e94.86efa862.js.map