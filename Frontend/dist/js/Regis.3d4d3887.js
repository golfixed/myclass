(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Regis"],{"0604":function(e,t,a){},b97f:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"navi-bar"}},[a("div",{staticClass:"left"},[a("div",{staticClass:"btn-back",on:{click:function(t){return e.$router.go(-1)}}},[e._m(0),a("label",[e._v("Back")])])]),a("div",{staticClass:"center"},[a("label",[e._v(e._s(e.pageName))])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"icon"},[a("img",{attrs:{src:"/img/btn/chevron.png"}})])}],n={name:"topNavibar",props:{pageName:String}},r=n,l=(a("babd"),a("2877")),o=Object(l["a"])(r,s,i,!1,null,null,null);t["a"]=o.exports},babd:function(e,t,a){"use strict";var s=a("0604"),i=a.n(s);i.a},cf53:function(e,t,a){"use strict";var s=a("d50e"),i=a.n(s);i.a},d50e:function(e,t,a){},dee4:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"welcome-page"},[a("topNavi"),a("div",{staticClass:"content-page"},[a("div",{staticClass:"wrapper"},[e._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:e.regis.fname,expression:"regis.fname"}],attrs:{type:"text",placeholder:"Firstname"},domProps:{value:e.regis.fname},on:{input:function(t){t.target.composing||e.$set(e.regis,"fname",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.regis.lname,expression:"regis.lname"}],attrs:{type:"text",placeholder:"Lastname"},domProps:{value:e.regis.lname},on:{input:function(t){t.target.composing||e.$set(e.regis,"lname",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.regis.email,expression:"regis.email"}],attrs:{type:"email",placeholder:"E-mail"},domProps:{value:e.regis.email},on:{input:function(t){t.target.composing||e.$set(e.regis,"email",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.regis.password,expression:"regis.password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.regis.password},on:{input:function(t){t.target.composing||e.$set(e.regis,"password",t.target.value)}}}),a("div",{staticClass:"btn-wrapper"},[1==e.allFilled?a("button",{staticClass:"sign-in",on:{click:function(t){return e.signUp()}}},[e._m(1)]):e._e(),0==e.allFilled?a("button",{staticClass:"sign-in grey"},[e._m(2)]):e._e()]),e._m(3),a("button",[a("router-link",{attrs:{to:"/home"}},[a("div",{staticClass:"single-land btn-fb"},[a("div",{staticClass:"img-wrapper"},[a("img",{attrs:{src:"/img/btn/facebook.png"}})]),a("label",[e._v("Sign up with Facebook")])])])],1)])]),e._m(4)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-header"},[a("h1",{staticClass:"pagename"},[e._v("Sign up with email")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"single-land"},[a("label",[e._v("Sign Up")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"single-land"},[a("label",[e._v("Sign Up")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hr-line"},[a("div"),a("label",[e._v("or")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bottom-sec"},[a("div",{staticClass:"wrapper"},[a("label",{staticClass:"bottom-label"},[e._v("Already had an account?")]),a("label",{staticClass:"bottom-btn"},[e._v("Reset password")])])])}],n=a("b97f"),r=a("bb36"),l={name:"Register-Page",components:{topNavi:n["a"]},data:function(){return{regis:{fname:"",lname:"",email:"",password:""}}},methods:{signUp:function(){var e={firstname:this.regis.fname,lastname:this.regis.lname,email:this.regis.email,password:this.regis.password};r["a"].post("/register",e).then((function(e){console.log(e)}))}},computed:{allFilled:function(){return""!=this.regis.fname&&""!=this.regis.lname&&""!=this.regis.email&&""!=this.regis.password}}},o=l,c=(a("cf53"),a("2877")),m=Object(c["a"])(o,s,i,!1,null,"1a2b5979",null);t["default"]=m.exports}}]);
//# sourceMappingURL=Regis.3d4d3887.js.map