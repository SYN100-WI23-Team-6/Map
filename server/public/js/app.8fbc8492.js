(function(){"use strict";var e={67:function(e,o,t){var r=t(9242),s=t(3396);function l(e,o){const t=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(t)}var n=t(89);const a={},u=(0,n.Z)(a,[["render",l]]);var c=u,i=t(2483);const d={class:"h-screen relative"},p=(0,s._)("div",{id:"mapid",class:"h-full z-[1]"},null,-1);function v(e,o,t,r,l,n){const a=(0,s.up)("GeoErrorModal"),u=(0,s.up)("MapFeatures");return(0,s.wg)(),(0,s.iD)("div",d,[r.geoError?((0,s.wg)(),(0,s.j4)(a,{key:0,geoErrorMsg:r.geoErrorMsg,onCloseGeoError:r.closeGeoError},null,8,["geoErrorMsg","onCloseGeoError"])):(0,s.kq)("",!0),(0,s.Wm)(u,{fetchCoords:r.fetchCoords,coords:r.coords,onToggleSearchResults:r.toggleSearchResults,onGetGeolocation:r.getGeolocation,onPlotResult:r.plotResult,onRemoveResult:r.removeResult,searchResults:r.searchResults,class:"w-full md:w-auto absolute md:top-[40px] md:left-[60px] z-[2]"},null,8,["fetchCoords","coords","onToggleSearchResults","onGetGeolocation","onPlotResult","onRemoveResult","searchResults"]),p])}var f=t(3153),m=t.n(f),g=t(4870),h=t(7139);const x={class:"h-screen absolute w-full z-10 flex justify-center items-start pt-[125px] bg-black/50"},w={class:"flex flex-col bg-white w-[80%] sm:w-[450px] px-6 py-4 rounded-md"},y={class:"text-lg mb-1"},b=(0,s._)("p",{class:"text-sm mb-4"}," To take advantage of this application's features, please ensure location services are enabled ",-1);function R(e,o,t,r,l,n){return(0,s.wg)(),(0,s.iD)("div",x,[(0,s._)("div",w,[(0,s._)("h1",y,"Error: "+(0,h.zw)(this.geoErrorMsg),1),b,(0,s._)("button",{onClick:o[0]||(o[0]=o=>e.$emit("closeGeoError")),class:"self-start py-2 px-4 bg-red-500 text-white rounded-md text-sm"}," Close ")])])}var k={props:["geoErrorMsg"]};const _=(0,n.Z)(k,[["render",R]]);var C=_;const S={class:"w-full md:w-auto absolute md:top-[40px] md:left-[60px] z-[2] flex gap-4 px-6 py-8 md:px-0 md:py-0 bg-transparent"},z={class:"relative flex-1 md:min-w-[350px]"},j=(0,s._)("div",{class:"absolute top-0 left-[8px] h-full flex items-center"},[(0,s._)("i",{class:"fas fa-search"})],-1),E={class:"absolute mt-[8px] w-full"},H={key:0,class:"h-[200px] overflow-scroll bg-white rounded-md"},G={key:1},O=["onClick"],D=(0,s._)("i",{class:"fas fa-map-marker-alt"},null,-1),M={class:"text-[12px]"},T={key:1,class:"mt-[8px] px-4 py-3 bg-white rounded-md"},I={class:"text-lg"},L={class:"text-xs mb-1"},Y={class:"text-xs"};function Z(e,o,t,l,n,a){const u=(0,s.up)("LoadingSpinner");return(0,s.wg)(),(0,s.iD)("div",S,[(0,s._)("div",z,[(0,s.wy)((0,s._)("input",{class:"pl-9 pr-4 py-3 text-[14px] focus:outline-none w-full shadow-md rounded-md",type:"text",placeholder:"Start your search...","onUpdate:modelValue":o[0]||(o[0]=e=>l.searchQuery=e),onInput:o[1]||(o[1]=(...e)=>l.search&&l.search(...e)),onFocus:o[2]||(o[2]=o=>e.$emit("toggleSearchResults"))},null,544),[[r.nr,l.searchQuery]]),j,(0,s._)("div",E,[l.searchQuery&&t.searchResults?((0,s.wg)(),(0,s.iD)("div",H,[l.searchData?((0,s.wg)(),(0,s.iD)("div",G,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.searchData,((e,o)=>((0,s.wg)(),(0,s.iD)("div",{class:"px-4 py-2 flex gap-x-2 cursor-pointer hover:bg-slate-600 hover:text-white",key:o,onClick:o=>l.selectResult(e)},[D,(0,s._)("p",M,(0,h.zw)(e.place_name_en),1)],8,O)))),128))])):((0,s.wg)(),(0,s.j4)(u,{key:0}))])):(0,s.kq)("",!0),l.selectedResult?((0,s.wg)(),(0,s.iD)("div",T,[(0,s._)("i",{onClick:o[3]||(o[3]=(...e)=>l.removeResult&&l.removeResult(...e)),class:"flex justify-end far fa-times-circle"}),(0,s._)("h1",I,(0,h.zw)(l.selectedResult.text),1),(0,s._)("p",L,(0,h.zw)(l.selectedResult.properties.address)+", "+(0,h.zw)(l.selectedResult.city)+", "+(0,h.zw)(l.selectedResult.state),1),(0,s._)("p",Y,(0,h.zw)(l.selectedResult.properties.category),1)])):(0,s.kq)("",!0)])]),(0,s._)("div",{class:(0,h.C_)(["px-4 bg-white flex items-center shadow-md rounded-md min-h-[45px]",{"bg-slate-600":t.coords}]),onClick:o[4]||(o[4]=o=>e.$emit("getGeolocation"))},[(0,s._)("i",{class:(0,h.C_)(["fa fa-location-arrow 'text-slate-600' text-[18px]",{"text-white":t.coords,"animate-pulse":t.fetchCoords}])},null,2)],2)])}var J=t(5939);const N={class:"h-full w-full flex items-center justify-center"},q=(0,s._)("span",{class:"block w-[60px] h-[60px] border-[5px] border-solid border-transparent border-t-black rounded-full animate-spin"},null,-1),P=[q];function V(e,o,t,r,l,n){return(0,s.wg)(),(0,s.iD)("div",N,P)}var W={name:"loadingSpinner"};const $=(0,n.Z)(W,[["render",V]]);var U=$,F={props:["fetchCoords","coords","searchResults"],components:{LoadingSpinner:U},setup(e,{emit:o}){const t=(0,g.iH)(null),r=(0,g.iH)(null),s=(0,g.iH)(null),l=(0,g.iH)(null),n=()=>{clearTimeout(s.value),r.value=null,s.value=setTimeout((async()=>{if(""!==t.value){const o=new URLSearchParams({fuzzyMatch:!0,language:"en",limit:10,proximity:e.coords?`${e.coords.lng},${e.coords.lat}`:"0,0"}),s=await J.Z.get(`http://localhost:3000/api/search/${t.value}?${o}`);r.value=s.data.features}}),750)},a=e=>{l.value=e,o("plotResult",e.geometry)},u=()=>{l.value=null,o("removeResult")};return{searchQuery:t,search:n,searchData:r,selectResult:a,selectedResult:l,removeResult:u}}};const Q=(0,n.Z)(F,[["render",Z]]);var B=Q,X={name:"HomeView",components:{GeoErrorModal:C,MapFeatures:B},setup(){let e;(0,s.bv)((()=>{e=m().map("mapid",{zoomControl:!1}).setView([32.88077186403,-117.23756790425],10),m().tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9uYXRoYW55NjYiLCJhIjoiY2xlMHlzc3BqMGZ1cDNubGl5dWV1NWd3OSJ9.jqCgUpk3Ht1ruEl9vcaHDw",{maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1Ijoiam9uYXRoYW55NjYiLCJhIjoiY2xlMHlzc3BqMGZ1cDNubGl5dWV1NWd3OSJ9.jqCgUpk3Ht1ruEl9vcaHDw"}).addTo(e),e.on("moveend",(()=>{y()})),u()}));const o=(0,g.iH)(null),r=(0,g.iH)(null),l=(0,g.iH)(null),n=(0,g.iH)(null),a=(0,g.iH)(null),u=()=>{if(!o.value)return sessionStorage.getItem("coords")?(o.value=JSON.parse(sessionStorage.getItem("coords")),void d(o.value)):(r.value=!0,void navigator.geolocation.getCurrentPosition(c,i));o.value=null,sessionStorage.removeItem("coords"),e.removeLayer(l.value)},c=e=>{r.value=null;const t={lat:e.coords.latitude,lng:e.coords.longitude};sessionStorage.setItem("coords",JSON.stringify(t)),o.value=t,d(o.value)},i=e=>{r.value=null,n.value=!0,a.value=e.message},d=o=>{const r=m().icon({iconUrl:t(3266),iconSize:[35,35]});l.value=m().marker([o.lat,o.lng],{icon:r}).addTo(e),e.setView([o.lat,o.lng],10)},p=(0,g.iH)(null),v=o=>{p.value&&e.removeLayer(p.value);const r=m().icon({iconUrl:t(2929),iconSize:[35,35]});p.value=m().marker([o.coordinates[1],o.coordinates[0]],{icon:r}).addTo(e),e.setView([o.coordinates[1],o.coordinates[0]],13)},f=()=>{e.removeLayer(p.value)},h=()=>{a.value=null,n.value=null},x=(0,g.iH)(null),w=()=>{x.value=!x.value},y=()=>{x.value=null};return{geoError:n,closeGeoError:h,geoErrorMsg:a,fetchCoords:r,coords:o,getGeolocation:u,plotResult:v,searchResults:x,toggleSearchResults:w,closeSearchResults:y,removeResult:f}}};const K=(0,n.Z)(X,[["render",v]]);var A=K;const ee=[{path:"/",name:"home",component:A}],oe=(0,i.p7)({history:(0,i.PO)("/"),routes:ee});var te=oe;(0,r.ri)(c).use(te).mount("#app")},2929:function(e,o,t){e.exports=t.p+"img/map-marker-blue.48a8e449.svg"},3266:function(e,o,t){e.exports=t.p+"img/map-marker-red.d479dee5.svg"}},o={};function t(r){var s=o[r];if(void 0!==s)return s.exports;var l=o[r]={exports:{}};return e[r].call(l.exports,l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(o,r,s,l){if(!r){var n=1/0;for(i=0;i<e.length;i++){r=e[i][0],s=e[i][1],l=e[i][2];for(var a=!0,u=0;u<r.length;u++)(!1&l||n>=l)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(a=!1,l<n&&(n=l));if(a){e.splice(i--,1);var c=s();void 0!==c&&(o=c)}}return o}l=l||0;for(var i=e.length;i>0&&e[i-1][2]>l;i--)e[i]=e[i-1];e[i]=[r,s,l]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,r){var s,l,n=r[0],a=r[1],u=r[2],c=0;if(n.some((function(o){return 0!==e[o]}))){for(s in a)t.o(a,s)&&(t.m[s]=a[s]);if(u)var i=u(t)}for(o&&o(r);c<n.length;c++)l=n[c],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(i)},r=self["webpackChunkclient"]=self["webpackChunkclient"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(67)}));r=t.O(r)})();
//# sourceMappingURL=app.8fbc8492.js.map