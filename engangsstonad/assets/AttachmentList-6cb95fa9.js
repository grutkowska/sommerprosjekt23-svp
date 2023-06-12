import{j as w,a as ue}from"./jsx-runtime-670450c2.js";import{X as Je,u as ve,Z as Ke,c as We,V as Ge,h as Xe,b as Qe,N as Ze}from"./IntlProvider-57b8ad96.js";import"./index-f1f749bf.js";const Ye=()=>{const e=document.getElementById("nav:appSettings"),t=JSON.parse(e.text);return{REST_API_URL:t.REST_API_URL,LOGIN_URL:t.LOGIN_URL,APP_VERSION:t.APP_VERSION}},Nn=Ye();function Ae(e,t){return function(){return e.apply(t,arguments)}}const{toString:Oe}=Object.prototype,{getPrototypeOf:re}=Object,se=(e=>t=>{const n=Oe.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),g=e=>(e=e.toLowerCase(),t=>se(t)===e),$=e=>t=>typeof t===e,{isArray:L}=Array,B=$("undefined");function et(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&P(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ge=g("ArrayBuffer");function tt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ge(e.buffer),t}const nt=$("string"),P=$("function"),Ne=$("number"),oe=e=>e!==null&&typeof e=="object",rt=e=>e===!0||e===!1,I=e=>{if(se(e)!=="object")return!1;const t=re(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},st=g("Date"),ot=g("File"),it=g("Blob"),at=g("FileList"),ct=e=>oe(e)&&P(e.pipe),lt=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Oe.call(e)===t||P(e.toString)&&e.toString()===t)},ut=g("URLSearchParams"),ft=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function U(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Te(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const xe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Pe=e=>!B(e)&&e!==xe;function Q(){const{caseless:e}=Pe(this)&&this||{},t={},n=(r,s)=>{const o=e&&Te(t,s)||s;I(t[o])&&I(r)?t[o]=Q(t[o],r):I(r)?t[o]=Q({},r):L(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&U(arguments[r],n);return t}const dt=(e,t,n,{allOwnKeys:r}={})=>(U(t,(s,o)=>{n&&P(s)?e[o]=Ae(s,n):e[o]=s},{allOwnKeys:r}),e),pt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ht=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},mt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&re(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},yt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},bt=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Ne(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Et=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&re(Uint8Array)),wt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},St=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Rt=g("HTMLFormElement"),At=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),fe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ot=g("RegExp"),_e=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};U(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},gt=e=>{_e(e,(t,n)=>{if(P(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(P(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Nt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return L(e)?r(e):r(String(e).split(t)),n},Tt=()=>{},xt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),K="abcdefghijklmnopqrstuvwxyz",de="0123456789",Ce={DIGIT:de,ALPHA:K,ALPHA_DIGIT:K+K.toUpperCase()+de},Pt=(e=16,t=Ce.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function _t(e){return!!(e&&P(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ct=e=>{const t=new Array(10),n=(r,s)=>{if(oe(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=L(r)?[]:{};return U(r,(i,c)=>{const d=n(i,s+1);!B(d)&&(o[c]=d)}),t[s]=void 0,o}}return r};return n(e,0)},a={isArray:L,isArrayBuffer:ge,isBuffer:et,isFormData:lt,isArrayBufferView:tt,isString:nt,isNumber:Ne,isBoolean:rt,isObject:oe,isPlainObject:I,isUndefined:B,isDate:st,isFile:ot,isBlob:it,isRegExp:Ot,isFunction:P,isStream:ct,isURLSearchParams:ut,isTypedArray:Et,isFileList:at,forEach:U,merge:Q,extend:dt,trim:ft,stripBOM:pt,inherits:ht,toFlatObject:mt,kindOf:se,kindOfTest:g,endsWith:yt,toArray:bt,forEachEntry:wt,matchAll:St,isHTMLForm:Rt,hasOwnProperty:fe,hasOwnProp:fe,reduceDescriptors:_e,freezeMethods:gt,toObjectSet:Nt,toCamelCase:At,noop:Tt,toFiniteNumber:xt,findKey:Te,global:xe,isContextDefined:Pe,ALPHABET:Ce,generateString:Pt,isSpecCompliantForm:_t,toJSONObject:Ct};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Le=m.prototype,Fe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Fe[e]={value:e}});Object.defineProperties(m,Fe);Object.defineProperty(Le,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Le);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Lt=null;function Z(e){return a.isPlainObject(e)||a.isArray(e)}function Be(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function pe(e,t,n){return e?e.concat(t).map(function(s,o){return s=Be(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Ft(e){return a.isArray(e)&&!e.some(Z)}const Bt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function V(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,A){return!a.isUndefined(A[h])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,A){let S=f;if(f&&!A&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Ft(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(S=a.toArray(f)))return h=Be(h),S.forEach(function(j,Ve){!(a.isUndefined(j)||j===null)&&t.append(i===!0?pe([h],Ve,o):i===null?h:h+"[]",l(j))}),!1}return Z(f)?!0:(t.append(pe(A,h,o),l(f)),!1)}const p=[],E=Object.assign(Bt,{defaultVisitor:u,convertValue:l,isVisitable:Z});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(S,_){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(_)?_.trim():_,h,E))===!0&&y(S,h?h.concat(_):[_])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function he(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ie(e,t){this._pairs=[],e&&V(e,this,t)}const De=ie.prototype;De.append=function(t,n){this._pairs.push([t,n])};De.toString=function(t){const n=t?function(r){return t.call(this,r,he)}:he;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Dt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ue(e,t,n){if(!t)return e;const r=n&&n.encode||Dt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ie(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ut{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const me=Ut,ke={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kt=typeof URLSearchParams<"u"?URLSearchParams:ie,jt=typeof FormData<"u"?FormData:null,It=typeof Blob<"u"?Blob:null,Mt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),qt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),R={isBrowser:!0,classes:{URLSearchParams:kt,FormData:jt,Blob:It},isStandardBrowserEnv:Mt,isStandardBrowserWebWorkerEnv:qt,protocols:["http","https","file","blob","url","data"]};function Ht(e,t){return V(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function zt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function $t(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function je(e){function t(n,r,s,o){let i=n[o++];const c=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=$t(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(zt(r),s,n,0)}),n}return null}const Vt={"Content-Type":void 0};function Jt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const J={transitional:ke,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(je(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ht(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return V(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Jt(t)):t}],transformResponse:[function(t){const n=this.transitional||J.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){J.headers[t]={}});a.forEach(["post","put","patch"],function(t){J.headers[t]=a.merge(Vt)});const ae=J,vt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Kt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&vt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ye=Symbol("internals");function F(e){return e&&String(e).trim().toLowerCase()}function M(e){return e===!1||e==null?e:a.isArray(e)?e.map(M):String(e)}function Wt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Gt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function W(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Xt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Qt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class v{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,d,l){const u=F(d);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(s,u);(!p||s[p]===void 0||l===!0||l===void 0&&s[p]!==!1)&&(s[p||d]=M(c))}const i=(c,d)=>a.forEach(c,(l,u)=>o(l,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Gt(t)?i(Kt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=F(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Wt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=F(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||W(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=F(i),i){const c=a.findKey(r,i);c&&(!n||W(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||W(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=M(s),delete n[o];return}const c=t?Xt(o):String(o).trim();c!==o&&delete n[o],n[c]=M(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ye]=this[ye]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=F(i);r[c]||(Qt(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}v.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(v.prototype);a.freezeMethods(v);const O=v;function G(e,t){const n=this||ae,r=t||n,s=O.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ie(e){return!!(e&&e.__CANCEL__)}function k(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(k,m,{__CANCEL__:!0});function Zt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Yt=R.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,c){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function en(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function tn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Me(e,t){return e&&!en(t)?tn(e,t):t}const nn=R.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function rn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function sn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),u=r[o];i||(i=l),n[s]=d,r[s]=l;let p=o,E=0;for(;p!==s;)E+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const y=u&&l-u;return y?Math.round(E*1e3/y):void 0}}function be(e,t){let n=0;const r=sn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,d=r(c),l=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:d||void 0,estimated:d&&i&&l?(i-o)/d:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const on=typeof XMLHttpRequest<"u",an=on&&function(e){return new Promise(function(n,r){let s=e.data;const o=O.from(e.headers).normalize(),i=e.responseType;let c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(s)&&(R.isStandardBrowserEnv||R.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+f))}const u=Me(e.baseURL,e.url);l.open(e.method.toUpperCase(),Ue(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function p(){if(!l)return;const y=O.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:y,config:e,request:l};Zt(function(S){n(S),d()},function(S){r(S),d()},h),l=null}if("onloadend"in l?l.onloadend=p:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(p)},l.onabort=function(){l&&(r(new m("Request aborted",m.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||ke;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,l)),l=null},R.isStandardBrowserEnv){const y=(e.withCredentials||nn(u))&&e.xsrfCookieName&&Yt.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(f,h){l.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",be(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",be(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=y=>{l&&(r(!y||y.type?new k(null,e,l):y),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const E=rn(u);if(E&&R.protocols.indexOf(E)===-1){r(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}l.send(s||null)})},q={http:Lt,xhr:an};a.forEach(q,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const cn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?q[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(q,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:q};function X(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function Ee(e){return X(e),e.headers=O.from(e.headers),e.data=G.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),cn.getAdapter(e.adapter||ae.adapter)(e).then(function(r){return X(e),r.data=G.call(e,e.transformResponse,r),r.headers=O.from(r.headers),r},function(r){return Ie(r)||(X(e),r&&r.response&&(r.response.data=G.call(e,e.transformResponse,r.response),r.response.headers=O.from(r.response.headers))),Promise.reject(r)})}const we=e=>e instanceof O?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(l,u,p){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:p},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,p){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,p)}else return r(l,u,p)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,p){if(p in t)return r(l,u);if(p in e)return r(void 0,l)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>s(we(l),we(u),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const p=d[u]||s,E=p(e[u],t[u],u);a.isUndefined(E)&&p!==c||(n[u]=E)}),n}const qe="1.3.5",ce={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ce[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Se={};ce.transitional=function(t,n,r){function s(o,i){return"[Axios v"+qe+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Se[i]&&(Se[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function ln(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],d=c===void 0||i(c,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const Y={assertOptions:ln,validators:ce},N=Y.validators;class z{constructor(t){this.defaults=t,this.interceptors={request:new me,response:new me}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Y.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Y.assertOptions(s,{encode:N.function,serialize:N.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=O.concat(i,o);const c=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const l=[];this.interceptors.response.forEach(function(h){l.push(h.fulfilled,h.rejected)});let u,p=0,E;if(!d){const f=[Ee.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,l),E=f.length,u=Promise.resolve(n);p<E;)u=u.then(f[p++],f[p++]);return u}E=c.length;let y=n;for(p=0;p<E;){const f=c[p++],h=c[p++];try{y=f(y)}catch(A){h.call(this,A);break}}try{u=Ee.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,E=l.length;p<E;)u=u.then(l[p++],l[p++]);return u}getUri(t){t=C(this.defaults,t);const n=Me(t.baseURL,t.url);return Ue(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){z.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(C(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}z.prototype[t]=n(),z.prototype[t+"Form"]=n(!0)});const H=z;class le{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new k(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new le(function(s){t=s}),cancel:t}}}const un=le;function fn(e){return function(n){return e.apply(null,n)}}function dn(e){return a.isObject(e)&&e.isAxiosError===!0}const ee={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ee).forEach(([e,t])=>{ee[t]=e});const pn=ee;function He(e){const t=new H(e),n=Ae(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return He(C(e,s))},n}const b=He(ae);b.Axios=H;b.CanceledError=k;b.CancelToken=un;b.isCancel=Ie;b.VERSION=qe;b.toFormData=V;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=fn;b.isAxiosError=dn;b.mergeConfig=C;b.AxiosHeaders=O;b.formToJSON=e=>je(a.isHTMLForm(e)?new FormData(e):e);b.HttpStatusCode=pn;b.default=b;const Tn=b,T=()=>Math.floor((1+Math.random())*65536).toString().substring(1),hn=()=>`${T()}${T()}-${T()}-${T()}-${T()}-${T()}${T()}${T()}`,mn=()=>"V".concat(hn().replace(/-/g,"")),xn=(e,t,n)=>({id:mn(),file:e,filename:e.name,filesize:e.size,uploaded:!1,pending:!1,type:t,skjemanummer:n}),Pn=({pending:e,uploaded:t,filesize:n})=>e===!1&&t===!1||n===0;const te=({onClick:e,ariaLabel:t})=>w("button",{type:"button",className:"slettKnapp","aria-label":t,onClick:n=>{n.stopPropagation(),e()},children:w(Je,{width:20,height:20})});try{te.displayName="SlettKnapp",te.__docgenInfo={description:"",displayName:"SlettKnapp",props:{ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}var D={},yn={get exports(){return D},set exports(e){D=e}};/*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */yn.exports=Sn;D.format=ze;D.parse=$e;var bn=/\B(?=(\d{3})+(?!\d))/g,En=/(?:\.0*|(\.[^0]+)0+)$/,x={b:1,kb:1<<10,mb:1<<20,gb:1<<30,tb:Math.pow(1024,4),pb:Math.pow(1024,5)},wn=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;function Sn(e,t){return typeof e=="string"?$e(e):typeof e=="number"?ze(e,t):null}function ze(e,t){if(!Number.isFinite(e))return null;var n=Math.abs(e),r=t&&t.thousandsSeparator||"",s=t&&t.unitSeparator||"",o=t&&t.decimalPlaces!==void 0?t.decimalPlaces:2,i=!!(t&&t.fixedDecimals),c=t&&t.unit||"";(!c||!x[c.toLowerCase()])&&(n>=x.pb?c="PB":n>=x.tb?c="TB":n>=x.gb?c="GB":n>=x.mb?c="MB":n>=x.kb?c="KB":c="B");var d=e/x[c.toLowerCase()],l=d.toFixed(o);return i||(l=l.replace(En,"$1")),r&&(l=l.split(".").map(function(u,p){return p===0?u.replace(bn,r):u}).join(".")),l+s+c}function $e(e){if(typeof e=="number"&&!isNaN(e))return e;if(typeof e!="string")return null;var t=wn.exec(e),n,r="b";return t?(n=parseFloat(t[1]),r=t[4].toLowerCase()):(n=parseInt(e,10),r="b"),isNaN(n)?null:Math.floor(x[r]*n)}const Rn=e=>D(e,{unitSeparator:" ",thousandsSeparator:" ",decimalPlaces:1,fixedDecimals:!1});const ne=({attachment:e,showFileSize:t,onDelete:n})=>{const r=ve(),s=Qe("attachment"),o=Ke(s.block,{[s.modifier("pending")]:e.pending});return ue("div",{className:o,children:[e.pending&&w("div",{className:s.element("spinner"),children:w(We,{type:"S"})}),w(Ge,{className:s.element("icon"),width:20,height:20}),ue("div",{className:s.element("filename"),children:[e.url?w(Xe,{href:e.url,target:"_blank",children:e.filename}):w("span",{children:e.filename}),t&&w("div",{children:Rn(e.filesize)})]}),n&&w("span",{className:s.element("deleteButton"),children:w(te,{onClick:()=>n(e),ariaLabel:r.formatMessage({id:"vedlegg.arialabel.slett"},{navn:e.filename})})})]})};try{ne.displayName="Attachment",ne.__docgenInfo={description:"",displayName:"Attachment",props:{attachment:{defaultValue:null,description:"",name:"attachment",required:!0,type:{name:"Attachment"}},showFileSize:{defaultValue:null,description:"",name:"showFileSize",required:!1,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((file: Attachment) => void)"}}}}}catch{}const Re=e=>{const{attachments:t,showFileSize:n,onDelete:r}=e;return w("ul",{className:"attachmentList",children:t.map(s=>w("li",{children:w(ne,{attachment:s,onDelete:r,showFileSize:n})},Ze()))})};try{Re.displayName="AttachmentList",Re.__docgenInfo={description:"",displayName:"AttachmentList",props:{attachments:{defaultValue:null,description:"",name:"attachments",required:!0,type:{name:"Attachment[]"}},showFileSize:{defaultValue:null,description:"",name:"showFileSize",required:!1,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((file: Attachment) => void)"}}}}}catch{}export{Re as A,Nn as E,Tn as a,Pn as i,xn as m};
//# sourceMappingURL=AttachmentList-6cb95fa9.js.map
