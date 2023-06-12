import{j as s,a as y}from"./jsx-runtime-670450c2.js";import{h as o,a as k,B as l,i as n,S as A,b as F}from"./validationUtils-00d66cf2.js";import"./index-7e4e529b.js";import"./index-f1f749bf.js";import{S as j,a as B}from"./mapSøkerinfoDTO-adbe2fb9.js";import{u as C}from"./useOnValidSubmit-0d8cf87d.js";import{u as R}from"./useSøknad-54892a90.js";import{u as V,a as _,s as x}from"./useFortsettSøknadSenere-d27349ce.js";import{g as I}from"./getTypedFormComponents-a42e978b.js";import{Q as T}from"./index-47edccfa.js";import{u as Q}from"./useSøkerinfo-4e57f087.js";import{u as w,s as K}from"./useSaveLoadedRoute-352242ea.js";var t=(e=>(e.situasjon="situasjon",e.rolle="rolle",e))(t||{});const d={situasjon:"",rolle:""},N=e=>e?{rolle:o(e.rolle)?e.rolle:d.rolle,situasjon:o(e.situasjon)?e.situasjon:d.situasjon}:d,u=I(),m=({kjønn:e})=>{const r=k();return e==="M"?null:s(l,{margin:"xl",children:s(u.RadioGroup,{name:t.rolle,radios:[{label:n(r,"søkersituasjon.radioButton.mor"),value:"mor"},{label:n(r,"søkersituasjon.radioButton.medmor"),value:"medmor"}],legend:n(r,"søkersituasjon.text.rolle")})})};try{m.displayName="VelgRolle",m.__docgenInfo={description:"",displayName:"VelgRolle",props:{kjønn:{defaultValue:null,description:"",name:"kjønn",required:!0,type:{name:"enum",value:[{value:'"M"'},{value:'"K"'}]}}}}}catch{}const M={[t.situasjon]:{isIncluded:()=>!0,isAnswered:({situasjon:e})=>o(e)},[t.rolle]:{isIncluded:({søkerKjønn:e})=>e==="K",isAnswered:({rolle:e})=>o(e),visibilityFilter:({situasjon:e})=>o(e)}},O=T(M),E=e=>({situasjon:e.situasjon,rolle:o(e.rolle)?e.rolle:"far"}),G=()=>{const e=k(),r=R(),S=Q(),{kjønn:c}=S.person,g=i=>{const a=E(i);return[B.setSøkersituasjon(a)]},{handleSubmit:f,isSubmitting:p}=C(g,j.OM_BARNET,i=>K(i)),b=V(),v=_();return w(j.SØKERSITUASJON),s(u.FormikWrapper,{initialValues:N(r.søkersituasjon),onSubmit:f,renderForm:({values:i})=>{const a=O.getVisbility({...i,søkerKjønn:c}),h=a.areAllQuestionsAnswered();return s(A,{bannerTitle:n(e,"søknad.pageheading"),activeStepId:"søkersituasjon",pageTitle:n(e,"søknad.søkersituasjon"),onCancel:b,onContinueLater:v,steps:x(e,!1),children:s(u.Form,{includeButtons:!1,children:y("div",{children:[s(l,{children:s(u.RadioGroup,{name:t.situasjon,radios:[{label:n(e,"søkersituasjon.radioButton.fødsel"),value:"fødsel"},{label:n(e,"søkersituasjon.radioButton.adopsjon"),value:"adopsjon"}],legend:n(e,"søkersituasjon.text.situasjon")})}),s(l,{visible:a.isVisible(t.rolle),children:s(m,{kjønn:c})}),h&&s(l,{textAlignCenter:!0,margin:"l",children:s(F,{type:"submit",disabled:p,loading:p,children:n(e,"søknad.gåVidere")})})]})})})}})},D=G;export{D as S};
//# sourceMappingURL=Søkersituasjon-564124cd.js.map
