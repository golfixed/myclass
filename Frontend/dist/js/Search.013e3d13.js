(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Search"],{"2d3b":function(e,s,t){"use strict";t.r(s);var i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"search-page"},[t("div",{staticClass:"search-bar app-default-border-gray"},[t("div",{staticClass:"panel"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],ref:"searchInput",staticClass:"app-default-searchbar",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.keyword},on:{input:function(s){s.target.composing||(e.keyword=s.target.value)}}}),t("div",{staticClass:"btn-close",on:{click:function(s){return e.$router.go(-1)}}},[t("label",[e._v("Close")])])])]),t("div",{staticClass:"search-result"},[t("div",{staticClass:"result-wrapper"},[e.searchResults.classrooms.length>0?t("div",{staticClass:"result-section"},[t("label",[e._v("Classrooms")]),t("div",{staticClass:"result-list"},[t("div",{staticClass:"list"},[e._l(e.searchResults.classroomsTop2,(function(s){return t("div",{key:s.id,staticClass:"class-item"},[t("div",{staticClass:"class-img"},[t("img",{attrs:{src:s.pic}})]),t("div",{staticClass:"class-name"},[t("h3",{staticClass:"textline textline-2"},[e._v(" "+e._s(s.code)+" "+e._s(s.title)+" ")]),t("label",[e._v("Section "+e._s(s.section))])])])})),this.searchResults.classrooms.length>2?t("div",{staticClass:"btn-showmore"},[t("label",[e._v(" show more")])]):e._e()],2)])]):e._e(),e.searchResults.contacts.length>0?t("div",{staticClass:"result-section second-sect"},[t("label",[e._v("Contacts")]),t("div",{staticClass:"result-list"},[t("div",{staticClass:"list"},e._l(e.searchResults.contactsTop2,(function(s){return t("div",{key:s.id,staticClass:"class-item"},[t("div",{staticClass:"class-img round-img"},[t("img",{attrs:{src:s.pic}})]),t("div",{staticClass:"class-name"},[t("h3",{staticClass:"textline textline-2"},[e._v(" "+e._s(s.fName)+" "+e._s(s.lName)+" ")]),t("label",[e._v("in "+e._s(s.from.code)+" "+e._s(s.from.title))])])])})),0),this.searchResults.contacts.length>2?t("div",{staticClass:"btn-showmore"},[t("label",[e._v(" show more")])]):e._e()])]):e._e()])])])},a=[],o={name:"search-page",data:function(){return{keyword:"",searchResults:{classrooms:[{id:0,code:"CPE 401",title:"Senior Project I",pic:"/img/mockup/class.png",section:1},{id:1,code:"CPE 100",title:"Basic Computer Programming super super",pic:"/img/mockup/class.png",section:3},{id:2,code:"GEN 352",title:"General Management",pic:"/img/mockup/class.png",section:1}],classroomsTop2:[{id:0,code:"CPE 401",title:"Senior Project I",pic:"/img/mockup/class.png",section:1},{id:1,code:"CPE 100",title:"Basic Computer Programming super super",pic:"/img/mockup/class.png",section:3}],contacts:[{id:0,fName:"Peerapong",lName:"Thammakaew",pic:"/img/mockup/profile.png",from:{code:"CPE 401",title:"Senior Project I"}},{id:1,fName:"Nithiwdee ",lName:"Wangviboonkij",pic:"/img/mockup/profile_volk.png",from:{code:"CPE 401",title:"Senior Project I"}},{id:2,fName:"Bhaksiree",lName:"Tongtago",pic:"/img/mockup/profile_my.png",from:{code:"CPE 401",title:"Senior Project I"}},{id:3,fName:"Bhaksiree",lName:"Tongtago",pic:"/img/mockup/profile_my.png",from:{code:"CPE 401",title:"Senior Project I"}},{id:4,fName:"Bhaksiree",lName:"Tongtago",pic:"/img/mockup/profile_my.png",from:{code:"CPE 401",title:"Senior Project I"}}],contactsTop2:[{id:0,fName:"Peerapong",lName:"Thammakaew",pic:"/img/mockup/profile.png",from:{code:"CPE 401",title:"Senior Project I"}},{id:1,fName:"Nithiwdee ",lName:"Wangviboonkij",pic:"/img/mockup/profile_volk.png",from:{code:"CPE 401",title:"Senior Project I"}}]}}},props:{},mounted:function(){this.autoFocus()},methods:{closeSearchPage:function(){this.$emit("closePage"),this.keyword=""},autoFocus:function(){this.$refs.searchInput.focus()}},computed:{screenheight:function(){return window.innerHeight},screenwidth:function(){return window.innerWidth}},created:function(){}},c=o,r=(t("8559"),t("2877")),l=Object(r["a"])(c,i,a,!1,null,"af02290a",null);s["default"]=l.exports},8559:function(e,s,t){"use strict";var i=t("da03"),a=t.n(i);a.a},da03:function(e,s,t){}}]);
//# sourceMappingURL=Search.013e3d13.js.map