(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{515:function(t,e,r){"use strict";r.r(e);r(308);var n=r(27),o=r(37),c=r(42),l=r(35),f=r(28),d=r(13),v=r(181),h=r(521);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var _=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(c.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"title",get:function(){return this.item.label}},{key:"url",get:function(){return this.item.url}}]),r}(v.Vue);_([Object(v.Prop)()],y.prototype,"item",void 0);var j=y=_([Object(v.Component)({components:{ShareButtons:h.default}})],y),O=r(103),w=r(142),x=r.n(w),k=r(235),C=r(218),R=r(470),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("v-menu",{attrs:{top:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{depressed:"",icon:""}},n),[r("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[t._v(" "),r("ShareButtons",{attrs:{url:t.url,title:t.title}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{ShareButtons:r(521).default}),x()(component,{VBtn:k.a,VIcon:C.a,VMenu:R.a})},521:function(t,e,r){"use strict";r.r(e);r(308);var n=r(27),o=r(37),c=r(42),l=r(35),f=r(28),d=r(13),v=r(181);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(c.a)(r,t);var e=h(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).baseUrl="https://shibusawa-foundation.github.io/labo1",t}return Object(o.a)(r,[{key:"twitterUrl",get:function(){return"https://twitter.com/intent/tweet?url="+this.url+"&text="+this.title}},{key:"facebookUrl",get:function(){return"https://www.facebook.com/sharer/sharer.php?u="+this.url}},{key:"pocketUrl",get:function(){return"http://getpocket.com/edit?url="+this.url}}]),r}(v.Vue);m([Object(v.Prop)({required:!0})],_.prototype,"url",void 0),m([Object(v.Prop)({required:!0})],_.prototype,"title",void 0);var y=_=m([v.Component],_),j=r(103),O=r(142),w=r.n(O),x=r(235),k=r(220),C=r(218),R=r(542),component=Object(j.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.twitterUrl}},n),[r("v-icon",[t._v("mdi-twitter")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Twitter"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.facebookUrl}},n),[r("v-icon",[t._v("mdi-facebook")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Facebook"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.pocketUrl}},n),[r("img",{staticStyle:{"font-size":"24px"},attrs:{src:t.baseUrl+"/img/icons/pocket.svg"}})])]}}])},[t._v(" "),r("span",[t._v(t._s("Pocket"))])])],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VBtn:x.a,VCard:k.a,VIcon:C.a,VTooltip:R.a})},543:function(t,e,r){var content=r(581);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("e6022664",content,!0,{sourceMap:!1})},544:function(t,e,r){var content=r(583);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("cdc2c944",content,!0,{sourceMap:!1})},545:function(t,e,r){var content=r(585);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("1dee1762",content,!0,{sourceMap:!1})},547:function(t,e,r){"use strict";r.r(e);r(308);var n=r(27),o=r(42),c=r(35),l=r(28),f=r(13),d=r(181),v=r(515);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(o.a)(r,t);var e=h(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(d.Vue);m([Object(d.Prop)({required:!0})],_.prototype,"item",void 0),m([Object(d.Prop)({default:300})],_.prototype,"width",void 0),m([Object(d.Prop)({default:400})],_.prototype,"height",void 0),m([Object(d.Prop)({default:!1})],_.prototype,"horizontal",void 0);var y=_=m([Object(d.Component)({components:{ResultOption:v.default}})],_),j=(r(580),r(103)),O=r(142),w=r.n(O),x=r(220),k=r(92),C=r(531),R=r(508),component=Object(j.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{class:t.horizontal?"":"mb-4",style:t.horizontal?"width: "+t.width+"px;":"",attrs:{"no-body":"",flat:"",outlined:""}},[r("div",{staticClass:"pa-4",style:t.horizontal?"width: "+t.width+"px; height: "+t.height+"px; overflow-y: auto;":""},[r("nuxt-link",{staticClass:"mr-2",attrs:{to:t.localePath({name:"item-id",params:{id:t.item._id}})}},[r("h4",{domProps:{innerHTML:t._s(t.$utils.formatArrayValue(t.item._source._label))}})]),t._v(" "),t.item._source.description?[r("div",{staticClass:"mt-2",domProps:{innerHTML:t._s(t.$utils.removeHead(t.$utils.xml2html(t.$utils.formatArrayValue(t.item._source.description),!0)))}})]:t._e()],2),t._v(" "),t.item.share_hide?t._e():[r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("ResultOption",{attrs:{item:{label:t.$utils.formatArrayValue(t.item._source._label),url:t.$utils.formatArrayValue(t.item._source._url)}}})],1)]],2)}),[],!1,null,null,null);e.default=component.exports;w()(component,{ResultOption:r(515).default}),w()(component,{VCard:x.a,VCardActions:k.a,VDivider:C.a,VSpacer:R.a})},548:function(t,e,r){"use strict";r.r(e);r(308);var n=r(27),o=r(42),c=r(35),l=r(28),f=r(13),d=r(181),v=r(547);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(o.a)(r,t);var e=h(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(d.Vue);m([Object(d.Prop)()],_.prototype,"width",void 0),m([Object(d.Prop)()],_.prototype,"height",void 0),m([Object(d.Prop)({default:[]})],_.prototype,"data",void 0);var y=_=m([Object(d.Component)({components:{CardItem:v.default}})],_),j=(r(582),r(103)),component=Object(j.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.data.length>0?r("div",[r("h3",{staticClass:"mt-10 pt-10 mb-4 text-center"},[t._v("\n    "+t._s(t.$t("more_like_this"))+"\n  ")]),t._v(" "),r("ul",{staticClass:"horizontal-list"},t._l(t.data,(function(e,n){return r("li",{key:n,staticClass:"item"},[r("CardItem",{key:"value_"+n,staticClass:"mt-2 mb-4",attrs:{horizontal:!0,item:e,width:t.width,height:t.height}})],1)})),0)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardItem:r(547).default})},580:function(t,e,r){"use strict";r(543)},581:function(t,e,r){(e=r(17)(!1)).push([t.i,"a{text-decoration:none}",""]),t.exports=e},582:function(t,e,r){"use strict";r(544)},583:function(t,e,r){(e=r(17)(!1)).push([t.i,".horizontal-list{overflow-x:auto;white-space:nowrap;-webkit-overflow-scrolling:touch;padding-left:0!important;padding-right:0}.item{display:inline-block;margin-right:16px}",""]),t.exports=e},584:function(t,e,r){"use strict";r(545)},585:function(t,e,r){(e=r(17)(!1)).push([t.i,"tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}",""]),t.exports=e},617:function(t,e,r){"use strict";r.r(e);r(26),r(70),r(68),r(32),r(232),r(51),r(52);var n=r(16),o=r(525),c=r(184),l=r(515),f=r(548),d={components:{ResultOption:l.default,HorizontalItems:f.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,f,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.payload,n=t.app,!r){e.next=5;break}return e.abrupt("return",{item:r});case 5:return l=n.context.params.id,f=o(c.a.appId,c.a.apiKey),d=f.initIndex("dev_MAIN"),e.next=10,d.getObject(l);case 10:return v=e.sent,e.abrupt("return",{item:v});case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{baseUrl:"https://shibusawa-foundation.github.io/labo1",moreLikeThisData:[],fields:["agential","spatial"]}},head:function(){var title=this.title;return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:this.url},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"}]}},computed:{dates:function(){var t=this.item.date,e=Object.keys(t),r=t[e[e.length-1]].split(" > "),data=[];return r.length>=1&&data.push({id:1,name:r[0],children:[],query:{"dev_MAIN[hierarchicalMenu][date.lvl0][0]":r[0]}}),r.length>=2&&data[0].children.push({id:2,name:r[1],children:[],query:{"dev_MAIN[hierarchicalMenu][date.lvl0][0]":r[0],"dev_MAIN[hierarchicalMenu][date.lvl0][1]":r[1]}}),3===r.length&&data[0].children[0].children.push({id:3,name:r[2],query:{"dev_MAIN[hierarchicalMenu][date.lvl0][0]":r[0],"dev_MAIN[hierarchicalMenu][date.lvl0][1]":r[1],"dev_MAIN[hierarchicalMenu][date.lvl0][2]":r[2]}}),data},categories:function(){var t=this.item.category,e=Object.keys(t),r=t[e[e.length-1]].split(" > ");return[{id:1,name:r[0],query:{"dev_MAIN[hierarchicalMenu][category.lvl0][0]":r[0]},children:[{id:2,name:r[1],query:{"dev_MAIN[hierarchicalMenu][category.lvl0][0]":r[0],"dev_MAIN[hierarchicalMenu][category.lvl0][1]":r[1]}}]}]},title:function(){return this.item.label},url:function(){return this.baseUrl+this.$route.path},jsonUrl:function(){return"https://".concat(c.a.appId,"-dsn.algolia.net/1/indexes/dev_MAIN/").concat(this.item.objectID,"?X-Algolia-API-Key=").concat(c.a.apiKey,"&X-Algolia-Application-Id=").concat(c.a.appId)},items:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"})},{text:this.$t("search"),disabled:!1,to:this.localePath({name:"search"})},{text:this.title}]}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,i,f,d,v,h,m,_,y,j,O,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=t.item,n=[],l=t.fields,i=0;i<l.length;i++)for(f=l[i],d=r[f],v=0;v<d.length;v++)n.push(d[v]);return h=o(c.a.appId,c.a.apiKey),m=h.initIndex("dev_MAIN"),e.next=8,m.search("",{similarQuery:n.join(" ")});case 8:for(_=e.sent,y=[],j=_.hits,O=1;O<j.length;O++)w=j[O],y.push({_id:w.objectID,_source:{_label:[w.label],description:["<p><b>"+t.$t("temporal")+"</b>: "+w.temporal+"</p>"+w.xml],_thumbnail:[],_url:[t.baseUrl+"/item/"+w.objectID]}});t.moreLikeThisData=y;case 13:case"end":return e.stop()}}),e)})))()},methods:{getQuery:function(label,t){var e={"dev_MAIN[sortBy]":"dev_MAIN"};return e["dev_MAIN[refinementList][".concat(label,"][0]")]=t,e},getValues:function(data){return data?Array.isArray(data)?data:[data]:[]},dwnData:function(){var t=this.item.objectID+".xml",data=this.item.xml,link=document.createElement("a");link.href="data:text/xml;charset=utf-8,"+encodeURIComponent(data),link.download=t,link.click()}}},v=(r(584),r(103)),h=r(142),m=r.n(h),_=r(522),y=r(235),j=r(220),O=r(510),w=r(218),x=r(177),k=r(57),C=r(535),R=r(542),I=r(621),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-4",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),t._v(" "),r("v-container",{staticClass:"py-10"},[r("p",{staticClass:"mb-5 text-center"},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[t.item.prev?r("v-btn",t._g({staticClass:"ma-1",attrs:{text:"",color:"primary",to:t.localePath({name:"item-id",params:{id:t.item.prev}})}},n),[r("v-icon",[t._v("mdi-chevron-left")])],1):t._e()]}}])},[t._v(" "),r("span",[t._v(t._s(t.$t("previous")))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[t.item.next?r("v-btn",t._g({staticClass:"ma-1",attrs:{text:"",color:"primary",to:t.localePath({name:"item-id",params:{id:t.item.next}})}},n),[r("v-icon",[t._v("mdi-chevron-right")])],1):t._e()]}}])},[t._v(" "),r("span",[t._v(t._s(t.$t("next")))])])],1),t._v(" "),r("v-card",{staticClass:"my-5",attrs:{flat:"",outlined:""}},[r("div",{staticClass:"pa-4"},[r("span",{domProps:{innerHTML:t._s(t.$utils.xml2html(t.item.xml,!0))}}),t._v(" "),r("v-sheet",{staticClass:"pa-3 mt-10",attrs:{color:"grey lighten-3"}},[r("b",{staticClass:"mr-2"},[t._v(t._s(t.$t("legend"))+":")]),t._v(" "),r("span",{staticClass:"mr-2 teiPersName"},[t._v(t._s(t.$t("agential")))]),t._v(" "),r("span",{staticClass:"mr-2 teiPlaceName"},[t._v(t._s(t.$t("spatial")))]),t._v(" "),r("span",{staticClass:"mr-2 teiDate"},[t._v(t._s(t.$t("date")))]),t._v(" "),r("span",{staticClass:"teiTime"},[t._v(t._s(t.$t("temporal")))])])],1)]),t._v(" "),r("div",{staticClass:"text-center mt-10"},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-4",attrs:{icon:""}},n),[r("a",[r("v-img",{attrs:{contain:"",width:"30px",src:t.baseUrl+"/img/icons/tei.png"},on:{click:function(e){return t.dwnData()}}})],1)])]}}])},[t._v(" "),r("span",[t._v("TEI/XML")])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-4",attrs:{icon:""}},n),[r("a",{attrs:{href:t.jsonUrl,target:"_blank"}},[r("v-img",{attrs:{contain:"",width:"30px",src:t.baseUrl+"/img/icons/json-logo.svg"}})],1)])]}}])},[t._v(" "),r("span",[t._v("JSON")])]),t._v(" "),r("ResultOption",{attrs:{item:{label:t.title,url:t.url}}})],1),t._v(" "),r("v-simple-table",{staticClass:"mt-10",scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",[r("tr",[r("td",{attrs:{width:"30%"}},[t._v(t._s(t.$t("category")))]),t._v(" "),r("td",{staticClass:"py-5",staticStyle:{"overflow-wrap":"break-word"}},[r("v-treeview",{attrs:{dense:"","open-all":"",items:t.categories},scopedSlots:t._u([{key:"label",fn:function(e){var n=e.item;return[r("nuxt-link",{attrs:{to:t.localePath({name:"search",query:n.query})}},[t._v(t._s(n.name))])]}}])})],1)]),t._v(" "),r("tr",[r("td",{attrs:{width:"30%"}},[t._v(t._s(t.$t("date")))]),t._v(" "),r("td",{staticClass:"py-5",staticStyle:{"overflow-wrap":"break-word"}},[r("v-treeview",{attrs:{dense:"","open-all":"",items:t.dates},scopedSlots:t._u([{key:"label",fn:function(e){var n=e.item;return[r("nuxt-link",{attrs:{to:t.localePath({name:"search",query:n.query})}},[t._v(t._s(n.name))])]}}])})],1)]),t._v(" "),t._l(t.fields,(function(e,n){return[t.item[e].length>0?r("tr",{key:n},[r("td",{attrs:{width:"30%"}},[t._v(t._s(t.$t(e)))]),t._v(" "),r("td",{staticClass:"py-5",staticStyle:{"overflow-wrap":"break-word"}},[t._l(t.getValues(t.item[e]),(function(n,o){return[r("span",{key:o,staticClass:"mr-4"},[r("nuxt-link",{attrs:{to:t.localePath({name:"entity-entity-id",params:{entity:e,id:n}})}},[t._v("\n                      "+t._s(n)+"\n                    ")]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var c=o.on;return[r("v-btn",t._g({attrs:{icon:"",to:t.localePath({name:"search",query:t.getQuery(e,n)})}},c),[r("v-icon",[t._v("mdi-magnify")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(t.$t("search")))])])],1)]}))],2)]):t._e()]}))],2)]},proxy:!0}])}),t._v(" "),r("HorizontalItems",{attrs:{data:t.moreLikeThisData}})],1),t._v(" "),r("v-sheet",{staticClass:"text-center pa-10 mt-10"},[r("small",[r("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("license")))]),t._v(" "),"ja"==t.$i18n.locale?[r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[r("img",{staticStyle:{"border-width":"0"},attrs:{alt:"クリエイティブ・コモンズ・ライセンス",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),r("br"),t._v("この作品は"),r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("クリエイティブ・コモンズ 表示 4.0 国際 ライセンス")]),t._v("の下に提供されています。\n      ")]:[r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[r("img",{staticStyle:{"border-width":"0"},attrs:{alt:"Creative Commons License",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),r("br"),t._v("This work is licensed under a\n        "),r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("Creative Commons Attribution 4.0 International License")]),t._v(".\n      ")]],2)])],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{ResultOption:r(515).default,HorizontalItems:r(548).default}),m()(component,{VBreadcrumbs:_.a,VBtn:y.a,VCard:j.a,VContainer:O.a,VIcon:w.a,VImg:x.a,VSheet:k.a,VSimpleTable:C.a,VTooltip:R.a,VTreeview:I.a})}}]);