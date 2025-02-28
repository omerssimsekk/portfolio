"use strict";(()=>{var e={};e.id=731,e.ids=[220,731],e.modules={15:e=>{e.exports=require("react")},43:(e,t,r)=>{e.exports=r(885).vendored.contexts.AmpContext},124:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{NEXT_REQUEST_META:function(){return r},addRequestMeta:function(){return a},getRequestMeta:function(){return n},removeRequestMeta:function(){return i},setRequestMeta:function(){return o}});let r=Symbol.for("NextInternalRequestMeta");function n(e,t){let n=e[r]||{};return"string"==typeof t?n[t]:n}function o(e,t){return e[r]=t,t}function a(e,t,r){let a=n(e);return a[t]=r,o(e,a)}function i(e,t){let r=n(e);return delete r[t],o(e,r)}},140:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let n=r(20),o=r(732),a=n._(r(15)),i=n._(r(604)),l=r(124),u={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s(e){let t,{req:r,res:n,err:o}=e,a=n&&n.statusCode?n.statusCode:o?o.statusCode:404;if(r){let e=(0,l.getRequestMeta)(r,"initURL");e&&(t=new URL(e).hostname)}return{statusCode:a,hostname:t}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class c extends a.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||u[e]||"An unexpected error has occurred";return(0,o.jsxs)("div",{style:d.error,children:[(0,o.jsx)(i.default,{children:(0,o.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,o.jsxs)("div",{style:d.desc,children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,o.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,o.jsx)("div",{style:d.wrap,children:(0,o.jsxs)("h2",{style:d.h2,children:[this.props.title||e?r:(0,o.jsxs)(o.Fragment,{children:["Application error: a client-side exception has occurred"," ",!!this.props.hostname&&(0,o.jsxs)(o.Fragment,{children:["while loading ",this.props.hostname]})," ","(see the browser console for more information)"]}),"."]})})]})]})}}c.displayName="ErrorPage",c.getInitialProps=s,c.origGetInitialProps=s,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},147:(e,t)=>{function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}return o.default=e,n&&n.set(e,o),o}},237:(e,t)=>{Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}});var r=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})},263:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=r(15),o=()=>{},a=()=>{};function i(e){var t;let{headManager:r,reduceComponentsToState:i}=e;function l(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(i(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),l(),o(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),o(()=>(r&&(r._pendingUpdate=l),()=>{r&&(r._pendingUpdate=l)})),a(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},361:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},413:(e,t,r)=>{r.r(t),r.d(t,{config:()=>g,default:()=>c,getServerSideProps:()=>h,getStaticPaths:()=>f,getStaticProps:()=>p,reportWebVitals:()=>y,routeModule:()=>x,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>_,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>m});var n=r(885),o=r(237),a=r(794),i=r(961),l=r.n(i),u=r(743),s=r.n(u),d=r(140);let c=(0,a.M)(d,"default"),p=(0,a.M)(d,"getStaticProps"),f=(0,a.M)(d,"getStaticPaths"),h=(0,a.M)(d,"getServerSideProps"),g=(0,a.M)(d,"config"),y=(0,a.M)(d,"reportWebVitals"),m=(0,a.M)(d,"unstable_getStaticProps"),b=(0,a.M)(d,"unstable_getStaticPaths"),_=(0,a.M)(d,"unstable_getStaticParams"),P=(0,a.M)(d,"unstable_getServerProps"),v=(0,a.M)(d,"unstable_getServerSideProps"),x=new n.PagesRouteModule({definition:{kind:o.A.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:s(),Document:l()},userland:d})},523:(e,t,r)=>{e.exports=r(885).vendored.contexts.HeadManagerContext},576:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},604:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let n=r(20),o=r(147),a=r(732),i=o._(r(15)),l=n._(r(263)),u=r(43),s=r(523),d=r(576);function c(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(862);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let a=!0,i=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){i=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?a=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!i)&&r.has(e)?a=!1:(r.add(e),n[t]=r)}}}}return a}}()).reverse().map((e,t)=>{let n=e.key||t;if(process.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,i.useContext)(u.AmpStateContext),n=(0,i.useContext)(s.HeadManagerContext);return(0,a.jsx)(l.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},732:e=>{e.exports=require("react/jsx-runtime")},743:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(20),o=r(732),a=n._(r(15)),i=r(761);async function l(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,i.loadGetInitialProps)(t,r)}}class u extends a.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,o.jsx)(e,{...t})}}u.origGetInitialProps=l,u.getInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},794:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},862:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},873:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[961],()=>r(413));module.exports=n})();