(function(t){function a(a){for(var n,i,o=a[0],l=a[1],c=a[2],d=0,h=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&h.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(a);while(h.length)h.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],n=!0,o=1;o<e.length;o++){var l=e[o];0!==s[l]&&(n=!1)}n&&(r.splice(a--,1),t=i(i.s=e[0]))}return t}var n={},s={app:0},r=[];function i(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)i.d(e,n,function(a){return t[a]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"3f1c":function(t,a,e){},4373:function(t,a,e){"use strict";e("47fe")},"47fe":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),s=(e("7f7f"),e("386d"),function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v(" Boardgame Prices ")]),a("div",{staticClass:"flex-container"},[a("div",{staticClass:"search",attrs:{id:"query"}},[a("p",[t._v(" Search for "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.querystring,expression:"querystring"}],attrs:{type:"text"},domProps:{value:t.querystring},on:{keypress:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.search.apply(null,arguments)},input:function(a){a.target.composing||(t.querystring=a.target.value)}}}),a("button",{on:{click:t.search}},[t._v("Search")])])]),a("label",{staticClass:"switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.showUnavailable,expression:"showUnavailable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showUnavailable)?t._i(t.showUnavailable,null)>-1:t.showUnavailable},on:{change:function(a){var e=t.showUnavailable,n=a.target,s=!!n.checked;if(Array.isArray(e)){var r=null,i=t._i(e,r);n.checked?i<0&&(t.showUnavailable=e.concat([r])):i>-1&&(t.showUnavailable=e.slice(0,i).concat(e.slice(i+1)))}else t.showUnavailable=s}}}),a("span",{staticClass:"slider round"}),a("p",{staticClass:"show"},[t._v("Show out of stock")])])]),a("hr"),a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns is-multiline"},t._l(t.shops,(function(e){return a("shopcontainer",{key:e.name,attrs:{title:e.name,results:e.data,searching:e.searching,showUnavailable:t.showUnavailable}})})),1)])])])}),r=[],i=(e("ac6a"),e("bc3a")),o=e.n(i),l=function(){var t=this,a=t._self._c;return a("div",{staticClass:"column is-3-desktop is-half-tablet"},[a("img",{staticClass:"title_img",attrs:{src:t.title_img}}),t.searching?a("img",{staticClass:"searching_img",attrs:{src:"/loading.gif"}}):t._e(),t._l(t.results,(function(e){return a("resultcontainer",{key:e.name,attrs:{data:e,showUnavailable:t.showUnavailable}})})),t.no_results?a("div",[t._v("No results")]):t._e()],2)},c=[],u=function(){var t=this,a=t._self._c;return t.showUnavailable||t.data.available?a("div",[a("table",{staticClass:"table"},[a("tr",[a("td",{staticClass:"image_td"},[a("img",{staticClass:"thumbnail",attrs:{src:t.data.imageUrl||"/na.png"}})]),a("td",{staticClass:"data_td"},[a("div",{staticClass:"name"},[a("a",{attrs:{href:t.data.itemUrl,target:"_blank"}},[t._v(t._s(t.data.name))])]),a("img",{staticClass:"availability_icon",attrs:{src:t.availability_icon}}),a("span",{staticClass:"price"},[t._v(t._s(t.data.price.toFixed(2))+t._s(t.data.currency))])])])])]):t._e()},d=[],h={props:["data","showUnavailable"],data:function(){return{availability_icon:this.data.available?"/yes.png":"/no.png"}}},p=h,f=(e("dea9"),e("2877")),v=Object(f["a"])(p,u,d,!1,null,"26068b53",null),b=v.exports,g={props:["title","results","searching","showUnavailable"],components:{resultcontainer:b},data:function(){return{title_img:"/".concat(this.title,".png")}},computed:{no_results:function(){return 0==this.results.length&&!this.searching}}},y=g,m=(e("4373"),Object(f["a"])(y,l,c,!1,null,"65ec4174",null)),_=m.exports,w="/",C={components:{shopcontainer:_},data:function(){return{querystring:"",shopIndex:{},shops:[],showUnavailable:!1}},methods:{search:function(){var t=this;this.shops.forEach((function(a){a.searching=!0,a.data=[],o.a.get(w+"query/"+a.name+"/"+t.querystring).then((function(a){var e=t.shopIndex[a.data.shop],n=t.shops[e];n.data=a.data.data,t.$set(t.shops,e,n),n.searching=!1}))})),o.a.get(w+"query/lautapelit/"+this.querystring).then((function(a){var e=t.shopIndex[a.data.shop],n=t.shops[e];n.data=a.data.data,t.$set(t.shops,e,n)}))}},mounted:function(){var t=this;o.a.get(w+"handlers").then((function(a){for(var e in a.data){var n=a.data[e],s=t.shops.push({name:n,data:[],searching:!1})-1;t.shopIndex[n]=s}}))}},x=C,U=(e("f2b9"),Object(f["a"])(x,s,r,!1,null,"469fa116",null)),k=U.exports;new n["a"]({el:"#app",render:function(t){return t(k)}})},"923d":function(t,a,e){},dea9:function(t,a,e){"use strict";e("3f1c")},f2b9:function(t,a,e){"use strict";e("923d")}});
//# sourceMappingURL=app.6af7a314.js.map