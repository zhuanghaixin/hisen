(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{279:function(t,e,n){},280:function(t,e,n){},281:function(t,e,n){},282:function(t,e,n){},283:function(t,e,n){},295:function(t,e,n){"use strict";var s=n(279);n.n(s).a},296:function(t,e,n){"use strict";var s=n(280);n.n(s).a},297:function(t,e,n){"use strict";var s=n(281);n.n(s).a},298:function(t,e,n){"use strict";var s=n(282);n.n(s).a},299:function(t,e,n){"use strict";var s=n(283);n.n(s).a},301:function(t,e,n){"use strict";n(79),n(82),n(80);var s={name:"HisenLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;console.log(this.$children),this.$children.forEach((function(e){"HisenSider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},i=(n(295),n(34)),a=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"5bd10188",null);e.a=a.exports},302:function(t,e,n){"use strict";var s={name:"HisenSider",data:function(){return{visible:!0}},methods:{hide:function(){this.visible=!1},beforeLeave:function(t){console.log("beforeLeave"),console.log(t);t.clientWidth;t.style.marginLeft=-t.clientWidth+"px"}}},i=(n(296),n(34)),a=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"},on:{"before-leave":this.beforeLeave}},[this.visible?e("div",{staticClass:"sider"},[this._t("default"),this._v(" "),e("button",{on:{click:this.hide}},[this._v("close\n        ")])],2):this._e()])}),[],!1,null,"2d049448",null);e.a=a.exports},303:function(t,e,n){"use strict";var s={name:"HisenFooter"},i=(n(297),n(34)),a=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"5d0c6a26",null);e.a=a.exports},304:function(t,e,n){"use strict";var s={name:"HisenHeader"},i=(n(298),n(34)),a=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"5db623ca",null);e.a=a.exports},305:function(t,e,n){"use strict";var s={name:"HisenContent"},i=(n(299),n(34)),a=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"f3710e2c",null);e.a=a.exports},326:function(t,e,n){},369:function(t,e,n){"use strict";var s=n(326);n.n(s).a},385:function(t,e,n){"use strict";n.r(e);var s=n(301),i=n(302),a=n(303),o=n(304),c=n(305),r={name:"layout-demo-2",components:{"h-layout":s.a,"h-sider":i.a,"h-header":o.a,"h-footer":a.a,"h-content":c.a}},l=(n(369),n(34)),u=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"padding-top":"16px"}},[e("h-layout",{staticStyle:{height:"100vh"}},[e("h-header",{staticClass:"demo"},[this._v("Header")]),this._v(" "),e("h-layout",[e("h-sider",{staticClass:"demo"},[this._v("Sider")]),this._v(" "),e("h-content",{staticClass:"demo"},[this._v("Content")])],1),this._v(" "),e("h-footer",{staticClass:"demo"},[this._v("Footer")])],1)],1)}),[],!1,null,"af82ecba",null);e.default=u.exports}}]);