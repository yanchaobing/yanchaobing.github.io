(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae598"],{"0a4e":function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:e.animateClass},[t("Head",{attrs:{title:"个人中心",show:!0}}),e.token?t("div",[t("h3",{staticStyle:{"text-align":"center"}},[e._v("个人中心 Mine --- "+e._s(e.count))]),t("br"),t("h4",[e._v("token == "+e._s(e.token))]),t("h4",[e._v("用户名 ==== "+e._s(e.userInfo.username)+" / "+e._s(e.mobile)+" ")]),t("h4",[e._v("手机号码 ==== "+e._s(e.userInfo.mobile))]),t("h4",[e._v("nickname == "+e._s(e.nickname)+" ")]),t("van-button",{attrs:{type:"primary"},on:{click:function(n){return e.changeUsers({nickname:"NZ1903"})}}},[e._v("点击修改 nickname")]),t("UploadImg",{ref:"one"})],1):t("div",[t("h4",[e._v("亲,你还未登录哦,请马上去登录")])])],1)},c=[],a=t("5530"),o=t("ed08"),r=(t("a27e"),t("2f62")),i={mixins:[o["c"],o["a"]],data:function(){return{token:sessionStorage.token||"",count:1314}},computed:Object(a["a"])({},Object(r["e"])("users",["nickname","userInfo"])),methods:Object(a["a"])(Object(a["a"])({},Object(r["d"])("users",["changeUsers"])),Object(r["b"])("users",["getUsersAsync"])),created:function(){console.log(this.$store)},mounted:function(){this.getUsersAsync()}},u=i,l=t("2877"),d=Object(l["a"])(u,s,c,!1,null,null,null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0ae598.c2f9649e.js.map