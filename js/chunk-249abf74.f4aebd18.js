(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-249abf74"],{"17f6":function(t,e,i){},4501:function(t,e,i){t.exports=i.p+"img/img1.fe259af7.jpg"},"5d9a":function(t,e,i){t.exports=i.p+"img/img3.0b925144.jpg"},"692a":function(t,e,i){t.exports=i.p+"img/img2.8170ea46.jpg"},"92b4":function(t,e,i){t.exports=i.p+"img/img4.fa80aec6.jpg"},def6:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box",class:t.animateClass},[i("Head",{attrs:{title:"电影"}}),i("div",{staticClass:"m-box"},[i("p",{staticClass:"m-city",on:{click:t.gotoCity}},[t._v(t._s(t.city.name))]),t._e(),i("Carousel",{attrs:{id:"banner",swiperoptions:t.swiperOptions}},t._l(t.obj.banner,(function(t,e){return i("CarouselItem",{key:e},[i("img",{staticClass:"m-img",attrs:{src:t.images.large.replace(/img7/,"img3"),alt:"err"}})])})),1)],1),t._e()],1)},n=[],s=i("5530"),o=i("ed08"),c=i("2f62"),r={mixins:[o["c"],o["a"]],data:function(){return{imgs:[i("4501"),i("692a"),i("5d9a"),i("92b4")],mv:[],swiperOptions:{loop:!0,autoplay:!0,speed:1e3,pagination:{el:".swiper-pagination",clickable:!0},observer:!0},city:{}}},methods:Object(s["a"])({gotoCity:function(){this.$router.push({name:"city"})}},Object(c["b"])(["getBanner"])),computed:Object(s["a"])({},Object(c["e"])(["obj"])),created:function(){var t=this;setTimeout((function(){!t.obj.banner.length>0&&t.getBanner()}),1)},mounted:function(){if(localStorage.city){var t=JSON.parse(localStorage.city);this.city=t,console.log(t)}else this.$router.push({name:"city"})}},l=r,p=(i("f2cc"),i("2877")),u=Object(p["a"])(l,a,n,!1,null,null,null);e["default"]=u.exports},f2cc:function(t,e,i){"use strict";var a=i("17f6"),n=i.n(a);n.a}}]);
//# sourceMappingURL=chunk-249abf74.f4aebd18.js.map