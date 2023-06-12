import{R as $,r as Y}from"./index-f1f749bf.js";import{j as rt,k as vt,m as gt,n as wt,o as bt,p as Et,q as St,r as Ot,s as et,a as F}from"./globals-b60e87b3.js";var V="storybook/react-router-v6",Lt="reactRouter",T={CLEAR:"".concat(V,"/clear"),NAVIGATION:"".concat(V,"/navigation"),STORY_LOADED:"".concat(V,"/story-loaded"),ROUTE_MATCHES:"".concat(V,"/route-matches"),ACTION_INVOKED:"".concat(V,"/action_invoked"),ACTION_SETTLED:"".concat(V,"/action_settled"),LOADER_INVOKED:"".concat(V,"/loader_invoked"),LOADER_SETTLED:"".concat(V,"/loader_settled")},Tt=function(){var o=rt();return"".concat(o.pathname).concat(o.search).concat(o.hash)},pt=$.createContext([]),dt=function(){return $.useContext(pt)};function At(n,o){return It(n)||Rt(n,o)||Dt(n,o)||Pt()}function Pt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dt(n,o){if(n){if(typeof n=="string")return nt(n,o);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return nt(n,o)}}function nt(n,o){(o==null||o>n.length)&&(o=n.length);for(var a=0,l=new Array(o);a<o;a++)l[a]=n[a];return l}function Rt(n,o){var a=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var l,p,h,f,d=[],u=!0,b=!1;try{if(h=(a=a.call(n)).next,o===0){if(Object(a)!==a)return;u=!1}else for(;!(u=(l=h.call(a)).done)&&(d.push(l.value),d.length!==o);u=!0);}catch(S){b=!0,p=S}finally{try{if(!u&&a.return!=null&&(f=a.return(),Object(f)!==f))return}finally{if(b)throw p}}return d}}function It(n){if(Array.isArray(n))return n}var Nt=function(){var o=Y.useRef(0),a=rt(),l=vt(),p=gt(),h=At(p,1),f=h[0],d=wt(),u=dt(),b={};f.forEach(function(A,O){b[O]=A});var S=Tt(),m=u.map(function(A){return[A.route.path,A.params]});return function(A){switch(A){case T.STORY_LOADED:{var O={url:S,path:a.pathname,routeParams:l,searchParams:b,routeMatches:m,hash:a.hash,routeState:a.state};return{key:"".concat(T.STORY_LOADED,"_").concat(o.current++),type:T.STORY_LOADED,data:O}}case T.NAVIGATION:{var E={url:S,path:a.pathname,routeParams:l,searchParams:b,hash:a.hash,routeState:a.state,routeMatches:m,navigationType:d};return{key:"".concat(T.NAVIGATION,"_").concat(o.current++),type:T.NAVIGATION,data:E}}case T.ROUTE_MATCHES:return{key:"".concat(T.ROUTE_MATCHES,"_").concat(o.current++),type:T.ROUTE_MATCHES,data:{matches:m}}}}};function Q(n){return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Q(n)}function X(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */X=function(){return n};var n={},o=Object.prototype,a=o.hasOwnProperty,l=Object.defineProperty||function(e,t,r){e[t]=r.value},p=typeof Symbol=="function"?Symbol:{},h=p.iterator||"@@iterator",f=p.asyncIterator||"@@asyncIterator",d=p.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch{u=function(r,i,c){return r[i]=c}}function b(e,t,r,i){var c=t&&t.prototype instanceof A?t:A,s=Object.create(c.prototype),y=new _(i||[]);return l(s,"_invoke",{value:G(e,r,y)}),s}function S(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(i){return{type:"throw",arg:i}}}n.wrap=b;var m={};function A(){}function O(){}function E(){}var N={};u(N,h,function(){return this});var v=Object.getPrototypeOf,D=v&&v(v(j([])));D&&D!==o&&a.call(D,h)&&(N=D);var L=E.prototype=A.prototype=Object.create(N);function C(e){["next","throw","return"].forEach(function(t){u(e,t,function(r){return this._invoke(t,r)})})}function k(e,t){function r(c,s,y,g){var w=S(e[c],e,s);if(w.type!=="throw"){var R=w.arg,P=R.value;return P&&Q(P)=="object"&&a.call(P,"__await")?t.resolve(P.__await).then(function(I){r("next",I,y,g)},function(I){r("throw",I,y,g)}):t.resolve(P).then(function(I){R.value=I,y(R)},function(I){return r("throw",I,y,g)})}g(w.arg)}var i;l(this,"_invoke",{value:function(s,y){function g(){return new t(function(w,R){r(s,y,w,R)})}return i=i?i.then(g,g):g()}})}function G(e,t,r){var i="suspendedStart";return function(c,s){if(i==="executing")throw new Error("Generator is already running");if(i==="completed"){if(c==="throw")throw s;return U()}for(r.method=c,r.arg=s;;){var y=r.delegate;if(y){var g=H(y,r);if(g){if(g===m)continue;return g}}if(r.method==="next")r.sent=r._sent=r.arg;else if(r.method==="throw"){if(i==="suspendedStart")throw i="completed",r.arg;r.dispatchException(r.arg)}else r.method==="return"&&r.abrupt("return",r.arg);i="executing";var w=S(e,t,r);if(w.type==="normal"){if(i=r.done?"completed":"suspendedYield",w.arg===m)continue;return{value:w.arg,done:r.done}}w.type==="throw"&&(i="completed",r.method="throw",r.arg=w.arg)}}}function H(e,t){var r=t.method,i=e.iterator[r];if(i===void 0)return t.delegate=null,r==="throw"&&e.iterator.return&&(t.method="return",t.arg=void 0,H(e,t),t.method==="throw")||r!=="return"&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var c=S(i,e.iterator,t.arg);if(c.type==="throw")return t.method="throw",t.arg=c.arg,t.delegate=null,m;var s=c.arg;return s?s.done?(t[e.resultName]=s.value,t.next=e.nextLoc,t.method!=="return"&&(t.method="next",t.arg=void 0),t.delegate=null,m):s:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function K(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(K,this),this.reset(!0)}function j(e){if(e){var t=e[h];if(t)return t.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length)){var r=-1,i=function c(){for(;++r<e.length;)if(a.call(e,r))return c.value=e[r],c.done=!1,c;return c.value=void 0,c.done=!0,c};return i.next=i}}return{next:U}}function U(){return{value:void 0,done:!0}}return O.prototype=E,l(L,"constructor",{value:E,configurable:!0}),l(E,"constructor",{value:O,configurable:!0}),O.displayName=u(E,d,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t=typeof e=="function"&&e.constructor;return!!t&&(t===O||(t.displayName||t.name)==="GeneratorFunction")},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,u(e,d,"GeneratorFunction")),e.prototype=Object.create(L),e},n.awrap=function(e){return{__await:e}},C(k.prototype),u(k.prototype,f,function(){return this}),n.AsyncIterator=k,n.async=function(e,t,r,i,c){c===void 0&&(c=Promise);var s=new k(b(e,t,r,i),c);return n.isGeneratorFunction(t)?s:s.next().then(function(y){return y.done?y.value:s.next()})},C(L),u(L,d,"Generator"),u(L,h,function(){return this}),u(L,"toString",function(){return"[object Generator]"}),n.keys=function(e){var t=Object(e),r=[];for(var i in t)r.push(i);return r.reverse(),function c(){for(;r.length;){var s=r.pop();if(s in t)return c.value=s,c.done=!1,c}return c.done=!0,c}},n.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!t)for(var r in this)r.charAt(0)==="t"&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if(t.type==="throw")throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(R,P){return y.type="throw",y.arg=t,r.next=R,P&&(r.method="next",r.arg=void 0),!!P}for(var c=this.tryEntries.length-1;c>=0;--c){var s=this.tryEntries[c],y=s.completion;if(s.tryLoc==="root")return i("end");if(s.tryLoc<=this.prev){var g=a.call(s,"catchLoc"),w=a.call(s,"finallyLoc");if(g&&w){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(g){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!w)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,r){for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i];if(c.tryLoc<=this.prev&&a.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var s=c;break}}s&&(t==="break"||t==="continue")&&s.tryLoc<=r&&r<=s.finallyLoc&&(s=null);var y=s?s.completion:{};return y.type=t,y.arg=r,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(y)},complete:function(t,r){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),M(i),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc===t){var c=i.completion;if(c.type==="throw"){var s=c.arg;M(i)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,i){return this.delegate={iterator:j(t),resultName:r,nextLoc:i},this.method==="next"&&(this.arg=void 0),m}},n}function at(n,o,a,l,p,h,f){try{var d=n[h](f),u=d.value}catch(b){a(b);return}d.done?o(u):Promise.resolve(u).then(l,p)}function kt(n){return function(){var o=this,a=arguments;return new Promise(function(l,p){var h=n.apply(o,a);function f(u){at(h,l,p,f,d,"next",u)}function d(u){at(h,l,p,f,d,"throw",u)}f(void 0)})}}function Gt(){var n={};return n.promise=new Promise(function(o,a){n.resolve=o,n.reject=a}),n}function jt(n){var o={};return n.forEach(function(a,l){if(a instanceof File){o[l]={filename:a.name,filesize:a.size,filetype:a.type};return}o[l]=a}),o}function ot(n){return Z.apply(this,arguments)}function Z(){return Z=kt(X().mark(function n(o){var a,l,p;return X().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:a=o.clone(),l=a.headers.get("content-type")||"",p=void 0,f.t0=!0,f.next=f.t0===l.startsWith("text")?6:f.t0===l.startsWith("application/json")?10:f.t0===l.startsWith("multipart/form-data")||f.t0===l.startsWith("application/x-www-form-urlencoded")?14:20;break;case 6:return f.next=8,a.text();case 8:return p=f.sent,f.abrupt("break",23);case 10:return f.next=12,a.json();case 12:return p=f.sent,f.abrupt("break",23);case 14:return f.t1=jt,f.next=17,a.formData();case 17:return f.t2=f.sent,p=(0,f.t1)(f.t2),f.abrupt("break",23);case 20:return f.next=22,a.arrayBuffer().then(function(d){return d.byteLength});case 22:f.sent;case 23:return f.abrupt("return",p);case 24:case"end":return f.stop()}},n)})),Z.apply(this,arguments)}function J(n,o){return Mt(n)||Ct(n,o)||$t(n,o)||_t()}function _t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $t(n,o){if(n){if(typeof n=="string")return it(n,o);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return it(n,o)}}function it(n,o){(o==null||o>n.length)&&(o=n.length);for(var a=0,l=new Array(o);a<o;a++)l[a]=n[a];return l}function Ct(n,o){var a=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var l,p,h,f,d=[],u=!0,b=!1;try{if(h=(a=a.call(n)).next,o===0){if(Object(a)!==a)return;u=!1}else for(;!(u=(l=h.call(a)).done)&&(d.push(l.value),d.length!==o);u=!0);}catch(S){b=!0,p=S}finally{try{if(!u&&a.return!=null&&(f=a.return(),Object(f)!==f))return}finally{if(b)throw p}}return d}}function Mt(n){if(Array.isArray(n))return n}const{addons:Yt}=__STORYBOOK_MODULE_ADDONS__;var Ht=function(o){var a=o.children,l=Yt.getChannel(),p=rt(),h=Y.useState(),f=J(h,2),d=f[0],u=f[1],b=Y.useState(!1),S=J(b,2),m=S[0],A=S[1],O=Y.useState([]),E=J(O,2),N=E[0],v=E[1],D=Nt(),L=dt(),C=Y.useRef(Gt());return Y.useLayoutEffect(function(){u(p)}),Y.useEffect(function(){m&&C.current.resolve()},[m]),Y.useEffect(function(){v(L);var k=setTimeout(function(){m||(A(!0),l.emit(T.STORY_LOADED,D(T.STORY_LOADED)))},0);return function(){return clearTimeout(k)}},[m,L]),Y.useEffect(function(){d!==void 0&&d.key!==p.key&&C.current.promise.then(function(){l.emit(T.NAVIGATION,D(T.NAVIGATION))})},[p]),Y.useEffect(function(){m&&L.length>N.length&&(v(L),l.emit(T.ROUTE_MATCHES,D(T.ROUTE_MATCHES)))},[L]),$.createElement($.Fragment,null,a)};function Ut(n,o){return Wt(n)||Bt(n,o)||Kt(n,o)||Vt()}function Vt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kt(n,o){if(n){if(typeof n=="string")return ut(n,o);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ut(n,o)}}function ut(n,o){(o==null||o>n.length)&&(o=n.length);for(var a=0,l=new Array(o);a<o;a++)l[a]=n[a];return l}function Bt(n,o){var a=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var l,p,h,f,d=[],u=!0,b=!1;try{if(h=(a=a.call(n)).next,o===0){if(Object(a)!==a)return;u=!1}else for(;!(u=(l=h.call(a)).done)&&(d.push(l.value),d.length!==o);u=!0);}catch(S){b=!0,p=S}finally{try{if(!u&&a.return!=null&&(f=a.return(),Object(f)!==f))return}finally{if(b)throw p}}return d}}function Wt(n){if(Array.isArray(n))return n}var qt=function(o){var a=o.children,l=o.routePath,p=o.routeParams,h=o.searchParams,f=o.routeState,d=o.browserPath,u=o.hydrationData,b=Y.useState(),S=Ut(b,2),m=S[0],A=S[1];return Y.useLayoutEffect(function(){var O=bt(l||"",p),E=new URLSearchParams(h).toString(),N=E.length>0?"?".concat(E):"",v={search:N,state:f};d!==void 0&&(v.pathname=d),d===void 0&&O!==""&&(v.pathname=O);var D=Et(a),L=St(D,{initialEntries:[v],hydrationData:u});A(L)},[]),m!==void 0&&module&&module.hot&&module.hot.dispose&&module.hot.dispose(function(){return m.dispose()}),m===void 0?null:$.createElement(Ot,{router:m,fallbackElement:$.createElement(zt,null)})};function zt(){return $.createElement("p",null,"Performing initial data load")}function x(n){return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},x(n)}function tt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */tt=function(){return n};var n={},o=Object.prototype,a=o.hasOwnProperty,l=Object.defineProperty||function(e,t,r){e[t]=r.value},p=typeof Symbol=="function"?Symbol:{},h=p.iterator||"@@iterator",f=p.asyncIterator||"@@asyncIterator",d=p.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch{u=function(r,i,c){return r[i]=c}}function b(e,t,r,i){var c=t&&t.prototype instanceof A?t:A,s=Object.create(c.prototype),y=new _(i||[]);return l(s,"_invoke",{value:G(e,r,y)}),s}function S(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(i){return{type:"throw",arg:i}}}n.wrap=b;var m={};function A(){}function O(){}function E(){}var N={};u(N,h,function(){return this});var v=Object.getPrototypeOf,D=v&&v(v(j([])));D&&D!==o&&a.call(D,h)&&(N=D);var L=E.prototype=A.prototype=Object.create(N);function C(e){["next","throw","return"].forEach(function(t){u(e,t,function(r){return this._invoke(t,r)})})}function k(e,t){function r(c,s,y,g){var w=S(e[c],e,s);if(w.type!=="throw"){var R=w.arg,P=R.value;return P&&x(P)=="object"&&a.call(P,"__await")?t.resolve(P.__await).then(function(I){r("next",I,y,g)},function(I){r("throw",I,y,g)}):t.resolve(P).then(function(I){R.value=I,y(R)},function(I){return r("throw",I,y,g)})}g(w.arg)}var i;l(this,"_invoke",{value:function(s,y){function g(){return new t(function(w,R){r(s,y,w,R)})}return i=i?i.then(g,g):g()}})}function G(e,t,r){var i="suspendedStart";return function(c,s){if(i==="executing")throw new Error("Generator is already running");if(i==="completed"){if(c==="throw")throw s;return U()}for(r.method=c,r.arg=s;;){var y=r.delegate;if(y){var g=H(y,r);if(g){if(g===m)continue;return g}}if(r.method==="next")r.sent=r._sent=r.arg;else if(r.method==="throw"){if(i==="suspendedStart")throw i="completed",r.arg;r.dispatchException(r.arg)}else r.method==="return"&&r.abrupt("return",r.arg);i="executing";var w=S(e,t,r);if(w.type==="normal"){if(i=r.done?"completed":"suspendedYield",w.arg===m)continue;return{value:w.arg,done:r.done}}w.type==="throw"&&(i="completed",r.method="throw",r.arg=w.arg)}}}function H(e,t){var r=t.method,i=e.iterator[r];if(i===void 0)return t.delegate=null,r==="throw"&&e.iterator.return&&(t.method="return",t.arg=void 0,H(e,t),t.method==="throw")||r!=="return"&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var c=S(i,e.iterator,t.arg);if(c.type==="throw")return t.method="throw",t.arg=c.arg,t.delegate=null,m;var s=c.arg;return s?s.done?(t[e.resultName]=s.value,t.next=e.nextLoc,t.method!=="return"&&(t.method="next",t.arg=void 0),t.delegate=null,m):s:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function K(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(K,this),this.reset(!0)}function j(e){if(e){var t=e[h];if(t)return t.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length)){var r=-1,i=function c(){for(;++r<e.length;)if(a.call(e,r))return c.value=e[r],c.done=!1,c;return c.value=void 0,c.done=!0,c};return i.next=i}}return{next:U}}function U(){return{value:void 0,done:!0}}return O.prototype=E,l(L,"constructor",{value:E,configurable:!0}),l(E,"constructor",{value:O,configurable:!0}),O.displayName=u(E,d,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t=typeof e=="function"&&e.constructor;return!!t&&(t===O||(t.displayName||t.name)==="GeneratorFunction")},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,u(e,d,"GeneratorFunction")),e.prototype=Object.create(L),e},n.awrap=function(e){return{__await:e}},C(k.prototype),u(k.prototype,f,function(){return this}),n.AsyncIterator=k,n.async=function(e,t,r,i,c){c===void 0&&(c=Promise);var s=new k(b(e,t,r,i),c);return n.isGeneratorFunction(t)?s:s.next().then(function(y){return y.done?y.value:s.next()})},C(L),u(L,d,"Generator"),u(L,h,function(){return this}),u(L,"toString",function(){return"[object Generator]"}),n.keys=function(e){var t=Object(e),r=[];for(var i in t)r.push(i);return r.reverse(),function c(){for(;r.length;){var s=r.pop();if(s in t)return c.value=s,c.done=!1,c}return c.done=!0,c}},n.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!t)for(var r in this)r.charAt(0)==="t"&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if(t.type==="throw")throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(R,P){return y.type="throw",y.arg=t,r.next=R,P&&(r.method="next",r.arg=void 0),!!P}for(var c=this.tryEntries.length-1;c>=0;--c){var s=this.tryEntries[c],y=s.completion;if(s.tryLoc==="root")return i("end");if(s.tryLoc<=this.prev){var g=a.call(s,"catchLoc"),w=a.call(s,"finallyLoc");if(g&&w){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(g){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!w)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,r){for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i];if(c.tryLoc<=this.prev&&a.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var s=c;break}}s&&(t==="break"||t==="continue")&&s.tryLoc<=r&&r<=s.finallyLoc&&(s=null);var y=s?s.completion:{};return y.type=t,y.arg=r,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(y)},complete:function(t,r){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),M(i),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc===t){var c=i.completion;if(c.type==="throw"){var s=c.arg;M(i)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,i){return this.delegate={iterator:j(t),resultName:r,nextLoc:i},this.method==="next"&&(this.arg=void 0),m}},n}function st(n,o,a,l,p,h,f){try{var d=n[h](f),u=d.value}catch(b){a(b);return}d.done?o(u):Promise.resolve(u).then(l,p)}function Ft(n){return function(){var o=this,a=arguments;return new Promise(function(l,p){var h=n.apply(o,a);function f(u){st(h,l,p,f,d,"next",u)}function d(u){st(h,l,p,f,d,"throw",u)}f(void 0)})}}var yt=function(){return function(){var o=Ft(tt().mark(function a(l,p){var h,f,d,u,b,S,m,A,O,E;return tt().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:v.t0=l,v.next=v.t0===T.ACTION_INVOKED?3:v.t0===T.ACTION_SETTLED?11:v.t0===T.LOADER_INVOKED?12:v.t0===T.LOADER_SETTLED?15:16;break;case 3:return h=p,f=h.request,d=h.params,u=h.context,v.t1=f.url,v.t2=f.method,v.next=8,ot(f);case 8:return v.t3=v.sent,b={url:v.t1,method:v.t2,body:v.t3},v.abrupt("return",{type:T.ACTION_INVOKED,data:{params:d,request:b,context:u}});case 11:return v.abrupt("return",{type:T.ACTION_SETTLED,data:p});case 12:return S=p,m=S.request,A=S.params,O=S.context,E={url:m.url,method:m.method,body:ot(m)},v.abrupt("return",{type:T.LOADER_INVOKED,data:{params:A,request:E,context:O}});case 15:return v.abrupt("return",{type:T.LOADER_SETTLED,data:p});case 16:case"end":return v.stop()}},a)}));return function(a,l){return o.apply(this,arguments)}}()};function B(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */B=function(){return n};var n={},o=Object.prototype,a=o.hasOwnProperty,l=Object.defineProperty||function(e,t,r){e[t]=r.value},p=typeof Symbol=="function"?Symbol:{},h=p.iterator||"@@iterator",f=p.asyncIterator||"@@asyncIterator",d=p.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch{u=function(r,i,c){return r[i]=c}}function b(e,t,r,i){var c=t&&t.prototype instanceof A?t:A,s=Object.create(c.prototype),y=new _(i||[]);return l(s,"_invoke",{value:G(e,r,y)}),s}function S(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(i){return{type:"throw",arg:i}}}n.wrap=b;var m={};function A(){}function O(){}function E(){}var N={};u(N,h,function(){return this});var v=Object.getPrototypeOf,D=v&&v(v(j([])));D&&D!==o&&a.call(D,h)&&(N=D);var L=E.prototype=A.prototype=Object.create(N);function C(e){["next","throw","return"].forEach(function(t){u(e,t,function(r){return this._invoke(t,r)})})}function k(e,t){function r(c,s,y,g){var w=S(e[c],e,s);if(w.type!=="throw"){var R=w.arg,P=R.value;return P&&W(P)=="object"&&a.call(P,"__await")?t.resolve(P.__await).then(function(I){r("next",I,y,g)},function(I){r("throw",I,y,g)}):t.resolve(P).then(function(I){R.value=I,y(R)},function(I){return r("throw",I,y,g)})}g(w.arg)}var i;l(this,"_invoke",{value:function(s,y){function g(){return new t(function(w,R){r(s,y,w,R)})}return i=i?i.then(g,g):g()}})}function G(e,t,r){var i="suspendedStart";return function(c,s){if(i==="executing")throw new Error("Generator is already running");if(i==="completed"){if(c==="throw")throw s;return U()}for(r.method=c,r.arg=s;;){var y=r.delegate;if(y){var g=H(y,r);if(g){if(g===m)continue;return g}}if(r.method==="next")r.sent=r._sent=r.arg;else if(r.method==="throw"){if(i==="suspendedStart")throw i="completed",r.arg;r.dispatchException(r.arg)}else r.method==="return"&&r.abrupt("return",r.arg);i="executing";var w=S(e,t,r);if(w.type==="normal"){if(i=r.done?"completed":"suspendedYield",w.arg===m)continue;return{value:w.arg,done:r.done}}w.type==="throw"&&(i="completed",r.method="throw",r.arg=w.arg)}}}function H(e,t){var r=t.method,i=e.iterator[r];if(i===void 0)return t.delegate=null,r==="throw"&&e.iterator.return&&(t.method="return",t.arg=void 0,H(e,t),t.method==="throw")||r!=="return"&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var c=S(i,e.iterator,t.arg);if(c.type==="throw")return t.method="throw",t.arg=c.arg,t.delegate=null,m;var s=c.arg;return s?s.done?(t[e.resultName]=s.value,t.next=e.nextLoc,t.method!=="return"&&(t.method="next",t.arg=void 0),t.delegate=null,m):s:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function K(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(K,this),this.reset(!0)}function j(e){if(e){var t=e[h];if(t)return t.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length)){var r=-1,i=function c(){for(;++r<e.length;)if(a.call(e,r))return c.value=e[r],c.done=!1,c;return c.value=void 0,c.done=!0,c};return i.next=i}}return{next:U}}function U(){return{value:void 0,done:!0}}return O.prototype=E,l(L,"constructor",{value:E,configurable:!0}),l(E,"constructor",{value:O,configurable:!0}),O.displayName=u(E,d,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t=typeof e=="function"&&e.constructor;return!!t&&(t===O||(t.displayName||t.name)==="GeneratorFunction")},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,u(e,d,"GeneratorFunction")),e.prototype=Object.create(L),e},n.awrap=function(e){return{__await:e}},C(k.prototype),u(k.prototype,f,function(){return this}),n.AsyncIterator=k,n.async=function(e,t,r,i,c){c===void 0&&(c=Promise);var s=new k(b(e,t,r,i),c);return n.isGeneratorFunction(t)?s:s.next().then(function(y){return y.done?y.value:s.next()})},C(L),u(L,d,"Generator"),u(L,h,function(){return this}),u(L,"toString",function(){return"[object Generator]"}),n.keys=function(e){var t=Object(e),r=[];for(var i in t)r.push(i);return r.reverse(),function c(){for(;r.length;){var s=r.pop();if(s in t)return c.value=s,c.done=!1,c}return c.done=!0,c}},n.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!t)for(var r in this)r.charAt(0)==="t"&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if(t.type==="throw")throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(R,P){return y.type="throw",y.arg=t,r.next=R,P&&(r.method="next",r.arg=void 0),!!P}for(var c=this.tryEntries.length-1;c>=0;--c){var s=this.tryEntries[c],y=s.completion;if(s.tryLoc==="root")return i("end");if(s.tryLoc<=this.prev){var g=a.call(s,"catchLoc"),w=a.call(s,"finallyLoc");if(g&&w){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(g){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!w)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,r){for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i];if(c.tryLoc<=this.prev&&a.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var s=c;break}}s&&(t==="break"||t==="continue")&&s.tryLoc<=r&&r<=s.finallyLoc&&(s=null);var y=s?s.completion:{};return y.type=t,y.arg=r,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(y)},complete:function(t,r){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),M(i),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc===t){var c=i.completion;if(c.type==="throw"){var s=c.arg;M(i)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,i){return this.delegate={iterator:j(t),resultName:r,nextLoc:i},this.method==="next"&&(this.arg=void 0),m}},n}function ct(n,o,a,l,p,h,f){try{var d=n[h](f),u=d.value}catch(b){a(b);return}d.done?o(u):Promise.resolve(u).then(l,p)}function mt(n){return function(){var o=this,a=arguments;return new Promise(function(l,p){var h=n.apply(o,a);function f(u){ct(h,l,p,f,d,"next",u)}function d(u){ct(h,l,p,f,d,"throw",u)}f(void 0)})}}function W(n){return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},W(n)}function q(){return q=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(n[l]=a[l])}return n},q.apply(this,arguments)}function Jt(n,o){return xt(n)||Zt(n,o)||Xt(n,o)||Qt()}function Qt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xt(n,o){if(n){if(typeof n=="string")return ft(n,o);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ft(n,o)}}function ft(n,o){(o==null||o>n.length)&&(o=n.length);for(var a=0,l=new Array(o);a<o;a++)l[a]=n[a];return l}function Zt(n,o){var a=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var l,p,h,f,d=[],u=!0,b=!1;try{if(h=(a=a.call(n)).next,o===0){if(Object(a)!==a)return;u=!1}else for(;!(u=(l=h.call(a)).done)&&(d.push(l.value),d.length!==o);u=!0);}catch(S){b=!0,p=S}finally{try{if(!u&&a.return!=null&&(f=a.return(),Object(f)!==f))return}finally{if(b)throw p}}return d}}function xt(n){if(Array.isArray(n))return n}const{addons:tr}=__STORYBOOK_MODULE_ADDONS__;var rr=function(o){var a,l=o.children,p=o.browserPath,h=o.routePath,f=h===void 0?"*":h,d=o.routeParams,u=o.routeHandle,b=o.searchParams,S=o.routeState,m=o.outlet,A=o.hydrationData,O=o.action,E=o.loader,N=o.errorElement,v=tr.getChannel(),D=Y.useState([]),L=Jt(D,2),C=L[0],k=L[1];et.Provider._context=new Proxy((a=et.Provider._context)!==null&&a!==void 0?a:{},{set:function(M,_,j){return _==="_currentValue"&&k(function(U){return j!==void 0&&j.matches.length>U.length?j.matches:U}),Reflect.set(M,_,j)}});var G=er(m)?m:{element:m},H={element:G.element,handle:G.handle,errorElement:G.errorElement,action:G.action!==void 0?lt(v,G.action):void 0,loader:G.loader!==void 0?ht(v,G.loader):void 0};return $.createElement(pt.Provider,{value:C},$.createElement(qt,{routePath:f,routeParams:d,routeState:S,searchParams:b,browserPath:p,hydrationData:A},$.createElement(F,{path:f,handle:u,action:O!==void 0?lt(v,O):void 0,loader:E!==void 0?ht(v,E):void 0,errorElement:N,element:$.createElement(Ht,null,l)},G.element!==void 0&&G.path===void 0&&$.createElement(F,q({index:!0},H)),G.element!==void 0&&$.createElement(F,q({path:G.path},H)))))};function er(n){return n!==null&&W(n)==="object"&&Object.prototype.hasOwnProperty.call(n,"element")}function lt(n,o){var a=yt();return function(){var l=mt(B().mark(function p(h){var f;return B().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(o!==void 0){u.next=2;break}return u.abrupt("return");case 2:return u.t0=n,u.t1=T.ACTION_INVOKED,u.next=6,a(T.ACTION_INVOKED,h);case 6:return u.t2=u.sent,u.t0.emit.call(u.t0,u.t1,u.t2),u.next=10,o(h);case 10:return f=u.sent,u.t3=n,u.t4=T.ACTION_SETTLED,u.next=15,a(T.ACTION_SETTLED,f);case 15:return u.t5=u.sent,u.t3.emit.call(u.t3,u.t4,u.t5),u.abrupt("return",f);case 18:case"end":return u.stop()}},p)}));return function(p){return l.apply(this,arguments)}}()}function ht(n,o){var a=yt();return function(){var l=mt(B().mark(function p(h){var f;return B().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(o!==void 0){u.next=2;break}return u.abrupt("return");case 2:return u.t0=n,u.t1=T.LOADER_INVOKED,u.next=6,a(T.LOADER_INVOKED,h);case 6:return u.t2=u.sent,u.t0.emit.call(u.t0,u.t1,u.t2),u.next=10,o(h);case 10:return f=u.sent,u.t3=n,u.t4=T.LOADER_SETTLED,u.next=15,a(T.LOADER_SETTLED,f);case 15:return u.t5=u.sent,u.t3.emit.call(u.t3,u.t4,u.t5),u.abrupt("return",f);case 18:case"end":return u.stop()}},p)}));return function(p){return l.apply(this,arguments)}}()}function z(n){return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},z(n)}const{makeDecorator:nr}=__STORYBOOK_MODULE_ADDONS__;var ir=nr({name:"withRouter",parameterName:Lt,wrapper:function(o,a,l){var p=l.parameters,h=p===void 0?{}:p,f=h.routePath,d=f===void 0?"*":f,u=h.routeParams,b=h.routeState,S=h.routeHandle,m=h.searchParams,A=h.outlet,O=h.browserPath,E=h.loader,N=h.action,v=h.errorElement,D=h.hydrationData;if(typeof d!="string")throw new Error("React Router decorator : `path` must be a string");if(u!==void 0&&z(u)!=="object")throw new Error("React Router decorator : `params` must be an object with strings as values");if(m!==void 0&&z(m)!=="object")throw new Error("React Router decorator : `search` must be an object with strings as values");return $.createElement(rr,{browserPath:O,routePath:d,routeParams:u,searchParams:m,routeState:b,routeHandle:S,outlet:A,loader:E,action:N,errorElement:v,hydrationData:D},o(a))}});module&&module.hot&&module.hot.decline&&module.hot.decline();export{ir as w};
//# sourceMappingURL=index-0b403b20.js.map
