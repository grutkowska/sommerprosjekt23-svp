import"../sb-preview/runtime.mjs";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))m(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&m(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function m(o){if(o.ep)return;o.ep=!0;const e=s(o);fetch(o.href,e)}})();const R="modulepreload",T=function(r,_){return new URL(r,_).href},l={},t=function(_,s,m){if(!s||s.length===0)return _();const o=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=T(e,m),e in l)return;l[e]=!0;const n=e.endsWith(".css"),d=n?'[rel="stylesheet"]':"";if(!!m)for(let c=o.length-1;c>=0;c--){const a=o[c];if(a.href===e&&(!n||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":R,n||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),n)return new Promise((c,a)=>{i.addEventListener("load",c),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>_())},{createChannel:f}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:L}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:p}=__STORYBOOK_MODULE_PREVIEW_API__,E=f({page:"preview"});p.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;const{SERVER_CHANNEL_URL:u}=globalThis;if(u){const r=L({url:u});p.setServerChannel(r),window.__STORYBOOK_SERVER_CHANNEL__=r}const P={"./src/common/components/back-link/BackLink.stories.tsx":async()=>t(()=>import("./BackLink.stories-f36ac3f9.js"),["./BackLink.stories-f36ac3f9.js","./jsx-runtime-68f49b4e.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./index-10aa4e78.js","./index-91d768a6.js","./Link-b402adef.js","./clsx.m-1229b3e0.js","./Back-7222795b.js","./useId-987e8b65.js","./message-2444254f.js"],import.meta.url),"./src/common/components/banner/Banner.stories.tsx":async()=>t(()=>import("./Banner.stories-38fc425f.js"),["./Banner.stories-38fc425f.js","./jsx-runtime-68f49b4e.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./Banner-5e5a74f2.js","./bemUtils-f774aeb7.js","./Banner-977be5a0.css"],import.meta.url),"./src/common/components/block/Block.stories.tsx":async()=>t(()=>import("./Block.stories-07d084ce.js"),["./Block.stories-07d084ce.js","./jsx-runtime-68f49b4e.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./Block-52a5571f.js","./bemUtils-f774aeb7.js","./Block-44a8b832.css"],import.meta.url),"./src/common/components/dialogs/avbryt-soknad-dialog/AvbrytSoknadDialog.stories.tsx":async()=>t(()=>import("./AvbrytSoknadDialog.stories-fb7a951b.js"),["./AvbrytSoknadDialog.stories-fb7a951b.js","./jsx-runtime-68f49b4e.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./AvbrytSoknadDialog-c6b6cbef.js","./index-91d768a6.js","./intlUtils-adb52f84.js","./BekreftDialog-9542da8e.js","./Block-52a5571f.js","./bemUtils-f774aeb7.js","./Block-44a8b832.css","./clsx.m-1229b3e0.js","./index-96c5f47c.js","./index-4d501b15.js","./useId-987e8b65.js","./useId-b2a79601.js","./Label-90dbbed0.js","./Heading-3baa3074.js","./message-2444254f.js"],import.meta.url),"./src/common/components/dialogs/bekreft-dialog/BekreftDialog.stories.tsx":async()=>t(()=>import("./BekreftDialog.stories-40eef7d3.js"),["./BekreftDialog.stories-40eef7d3.js","./jsx-runtime-68f49b4e.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./BekreftDialog-9542da8e.js","./Block-52a5571f.js","./bemUtils-f774aeb7.js","./Block-44a8b832.css","./clsx.m-1229b3e0.js","./index-96c5f47c.js","./index-4d501b15.js","./useId-987e8b65.js","./useId-b2a79601.js","./Label-90dbbed0.js","./Heading-3baa3074.js"],import.meta.url),"./src/common/components/display-text-with-label/DisplayTextWithLabel.stories.tsx":async()=>t(()=>import("./DisplayTextWithLabel.stories-91f566ff.js"),["./DisplayTextWithLabel.stories-91f566ff.js","./jsx-runtime-68f49b4e.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./Heading-3baa3074.js","./clsx.m-1229b3e0.js","./BodyShort-a31e935f.js"],import.meta.url),"./src/common/components/info-block/InfoBlock.stories.tsx":async()=>t(()=>import("./InfoBlock.stories-e699b3ad.js"),["./InfoBlock.stories-e699b3ad.js","./jsx-runtime-68f49b4e.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./bemUtils-f774aeb7.js","./InfoBlock.stories-d4007ab6.css"],import.meta.url),"./src/common/components/item-list/ItemList.stories.tsx":async()=>t(()=>import("./ItemList.stories-15f9379d.js"),["./ItemList.stories-15f9379d.js","./jsx-runtime-68f49b4e.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./bemUtils-f774aeb7.js","./ActionLink-1d37a695.js","./Link-b402adef.js","./clsx.m-1229b3e0.js","./guid-c1767a53.js","./ItemList.stories-fb233bad.css"],import.meta.url),"./src/common/components/language-toggle/LanguageToggle.stories.tsx":async()=>t(()=>import("./LanguageToggle.stories-d697746d.js"),["./LanguageToggle.stories-d697746d.js","./jsx-runtime-68f49b4e.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./index-4d501b15.js","./index-91d768a6.js","./intlUtils-adb52f84.js","./Expand-de386e40.js","./useId-987e8b65.js","./LanguageToggle.stories-e5aceba2.css"],import.meta.url),"./src/common/components/picture-scanning-guide/PictureScanningGuide.stories.tsx":async()=>t(()=>import("./PictureScanningGuide.stories-1a9e6454.js"),["./PictureScanningGuide.stories-1a9e6454.js","./jsx-runtime-68f49b4e.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./index-91d768a6.js","./bemUtils-f774aeb7.js","./Heading-3baa3074.js","./clsx.m-1229b3e0.js","./intlUtils-adb52f84.js","./message-2444254f.js","./Link-b402adef.js","./PictureScanningGuide.stories-492adac3.css"],import.meta.url),"./src/common/components/progress-stepper/ProgressStepper.stories.tsx":async()=>t(()=>import("./ProgressStepper.stories-7c503c29.js"),["./ProgressStepper.stories-7c503c29.js","./jsx-runtime-68f49b4e.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./ProgressStepper-fae6762f.js","./guid-c1767a53.js","./Back-7222795b.js","./useId-987e8b65.js","./Expand-de386e40.js","./clsx.m-1229b3e0.js","./Label-90dbbed0.js","./BodyShort-a31e935f.js","./Heading-3baa3074.js","./ProgressStepper-fbb6c9bc.css"],import.meta.url),"./src/common/components/sidebanner/Sidebanner.stories.tsx":async()=>t(()=>import("./Sidebanner.stories-9db8bfd1.js"),["./Sidebanner.stories-9db8bfd1.js","./jsx-runtime-68f49b4e.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./bemUtils-f774aeb7.js","./Block-52a5571f.js","./Block-44a8b832.css","./clsx.m-1229b3e0.js","./useId-b2a79601.js","./Heading-3baa3074.js","./BodyShort-a31e935f.js","./Sidebanner.stories-f6293af9.css"],import.meta.url),"./src/common/components/step/Step.stories.tsx":async()=>t(()=>import("./Step.stories-97daa2d0.js"),["./Step.stories-97daa2d0.js","./jsx-runtime-68f49b4e.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./index-10aa4e78.js","./bemUtils-f774aeb7.js","./index-91d768a6.js","./intlUtils-adb52f84.js","./Banner-5e5a74f2.js","./Banner-977be5a0.css","./Heading-3baa3074.js","./clsx.m-1229b3e0.js","./Block-52a5571f.js","./Block-44a8b832.css","./ActionLink-1d37a695.js","./Link-b402adef.js","./AvbrytSoknadDialog-c6b6cbef.js","./BekreftDialog-9542da8e.js","./index-96c5f47c.js","./index-4d501b15.js","./useId-987e8b65.js","./useId-b2a79601.js","./Label-90dbbed0.js","./message-2444254f.js","./ProgressStepper-fae6762f.js","./guid-c1767a53.js","./Back-7222795b.js","./Expand-de386e40.js","./BodyShort-a31e935f.js","./ProgressStepper-fbb6c9bc.css","./Step.stories-2bfca3ab.css"],import.meta.url),"./src/common/components/utvidet-informasjon/UtvidetInformasjon.stories.tsx":async()=>t(()=>import("./UtvidetInformasjon.stories-49b8f982.js"),["./UtvidetInformasjon.stories-49b8f982.js","./jsx-runtime-68f49b4e.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./guid-c1767a53.js","./clsx.m-1229b3e0.js","./Expand-de386e40.js","./useId-987e8b65.js","./UtvidetInformasjon.stories-6a2eb3a8.css"],import.meta.url)};async function O(r){return P[r]()}O.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:I,PreviewWeb:S,ClientApi:v}=__STORYBOOK_MODULE_PREVIEW_API__,A=async()=>{const r=await Promise.all([t(()=>import("./config-1d45d958.js"),["./config-1d45d958.js","./index-d475d2ea.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./index-ba25e25a.js","./index-96c5f47c.js","./_getPrototype-349d8341.js","./index-4d501b15.js","./index-356e4a49.js","./isPlainObject-83554e39.js"],import.meta.url),t(()=>import("./preview-82c6d634.js"),["./preview-82c6d634.js","./index-d475d2ea.js","./index-7f92349d.js"],import.meta.url),t(()=>import("./preview-419167db.js"),[],import.meta.url),t(()=>import("./preview-bb5acd95.js"),["./preview-bb5acd95.js","./_commonjsHelpers-042e6b4d.js"],import.meta.url),t(()=>import("./preview-f96f0111.js"),["./preview-f96f0111.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-e6f1f377.js"),["./preview-e6f1f377.js","./index-d475d2ea.js"],import.meta.url),t(()=>import("./preview-62235626.js"),["./preview-62235626.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),t(()=>import("./preview-b1164a2e.js"),["./preview-b1164a2e.js","./index-d475d2ea.js"],import.meta.url),t(()=>import("./preview-643ac584.js"),["./preview-643ac584.js","./index-d475d2ea.js","./_commonjsHelpers-042e6b4d.js"],import.meta.url),t(()=>import("./preview-83b2c8e6.js"),["./preview-83b2c8e6.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./index-91d768a6.js","./index-d475d2ea.js","./pickBy-1edba60b.js","./_getPrototype-349d8341.js","./index-356e4a49.js","./isPlainObject-83554e39.js","./index-7f92349d.js"],import.meta.url),t(()=>import("./preview-cb205705.js"),["./preview-cb205705.js","./preview-53bb2668.css"],import.meta.url)]);return I(r)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new S;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new v({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:O,getProjectAnnotations:A});export{t as _};
//# sourceMappingURL=iframe-53bee175.js.map
