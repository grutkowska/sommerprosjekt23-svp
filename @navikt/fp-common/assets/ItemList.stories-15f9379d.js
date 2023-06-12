import{a as t,j as y}from"./jsx-runtime-68f49b4e.js";import{b as T}from"./bemUtils-f774aeb7.js";import{A as b}from"./ActionLink-1d37a695.js";import{g as k}from"./guid-c1767a53.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Link-b402adef.js";import"./clsx.m-1229b3e0.js";const d=e=>t("svg",{focusable:"false",role:"img","aria-hidden":"true",width:"24",height:"24",viewBox:"0 0 24 24",...e,children:t("path",{d:"M3.516 3.5h16v20h-16zm4-3h8v3h-8zm-6.5 3h22M7.516 7v12m4-12v12m4-12v12",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,fill:"none"})});try{d.displayName="TrashcanIkon",d.__docgenInfo={description:"",displayName:"TrashcanIkon",props:{}}}catch{}const m=({onClick:e,ariaLabel:r})=>t("button",{type:"button",className:"slettKnapp","aria-label":r,onClick:n=>{n.stopPropagation(),e()},children:t(d,{width:20,height:20})});try{m.displayName="SlettKnapp",m.__docgenInfo={description:"",displayName:"SlettKnapp",props:{ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const c=T("itemList"),l=c.child("item");function s({items:e,onDelete:r,onEdit:n,labelRenderer:p,iconRender:u,getItemId:g,getItemTitle:I}){return t("ol",{className:c.classNames(c.block),children:e.map(a=>{const o=I(a);return y("li",{className:l.block,children:[u&&t("span",{className:l.element("icon"),role:"presentation",children:u(a)}),t("span",{className:l.element("label"),children:p?p(a):n?t(b,{onClick:()=>n(a),children:o}):o}),r&&t("span",{className:l.element("delete"),children:t(m,{ariaLabel:`Fjern ${o}`,onClick:()=>r(a)})})]},g(a)||k())})})}try{s.displayName="ItemList",s.__docgenInfo={description:"",displayName:"ItemList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},getItemId:{defaultValue:null,description:"",name:"getItemId",required:!0,type:{name:"(item: T) => string | undefined"}},getItemTitle:{defaultValue:null,description:"",name:"getItemTitle",required:!0,type:{name:"(item: T) => string"}},labelRenderer:{defaultValue:null,description:"",name:"labelRenderer",required:!1,type:{name:"((item: T, onEdit?: ((item: T) => void)) => ReactNode)"}},iconRender:{defaultValue:null,description:"",name:"iconRender",required:!1,type:{name:"((item: T) => ReactNode)"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((item: T) => void)"}},onEdit:{defaultValue:null,description:"",name:"onEdit",required:!1,type:{name:"((item: T) => void)"}}}}}catch{}const R={title:"components/ItemList",component:s},N=e=>t(s,{...e}),i=N.bind({});i.args={getItemId:e=>e.id,getItemTitle:e=>e.title,items:[{title:"Test Item",id:"test"}]};var f,h,_;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"args => <ItemList {...args} />",...(_=(h=i.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const S=["Default"];export{i as Default,S as __namedExportsOrder,R as default};
//# sourceMappingURL=ItemList.stories-15f9379d.js.map