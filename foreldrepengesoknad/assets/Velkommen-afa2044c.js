import{j as e,a as S,F as I}from"./jsx-runtime-670450c2.js";import{a as J,i as p,p as H,B as s,H as K,G as U,F as B,A as Y,b as $,c as z}from"./validationUtils-00d66cf2.js";import{r as D}from"./index-f1f749bf.js";import{u as Q,S as b,a}from"./mapSøkerinfoDTO-adbe2fb9.js";import{u as W}from"./useOnValidSubmit-0d8cf87d.js";import{u as w}from"./useSøknad-54892a90.js";import{g as X,s as Z,V,a as ee,v as te,S as L,b as f,B as ne,c as ae,d as re}from"./velkommenUtils-40bb4bde.js";import{D as se}from"./DinePlikter-c0bbb3d4.js";import{D as oe}from"./DinePersonopplysningerModal-99592e53.js";import{u as ie,s as le}from"./useSaveLoadedRoute-352242ea.js";import{h as de,o as me,i as ke,j as pe}from"./eksisterendeSakUtils-8ace25cf.js";import{u as ce}from"./useSøkerinfo-4e57f087.js";import{l as ue}from"./links-b36d21ab.js";import{B as ge}from"./Link-40b5f3c6.js";const y=({locale:c,saker:F,onChangeLocale:C})=>{const o=J(),T=w(),{dispatch:E,state:h}=Q(),[j,N]=D.useState(!1),v=z("velkommen"),O=ce(),{registrerteBarn:G}=O,u=X(F,G),P=[...u].sort(Z);ie(b.VELKOMMEN),D.useEffect(()=>{h.søknad.søker.språkkode!==c&&E(a.setSpråkkode(c))},[E,c,h.søknad.søker.språkkode]);const M=i=>{const t=i.valgteBarn===L.SØKNAD_GJELDER_NYTT_BARN?void 0:u.find(r=>r.id===i.valgteBarn),d=t!==void 0&&!!t.kanSøkeOmEndring,m=d&&t.sak!==void 0?F.find(r=>{var g;return r.saksnummer===((g=t.sak)==null?void 0:g.saksnummer)}):void 0,n=[a.setVelkommen(i.harForståttRettigheterOgPlikter),a.setErEndringssøknad(d)];let k;t!==void 0&&(k=re(t,P),n.push(a.setBarnFraNesteSak(k)));const l=k!==void 0?k.startdatoFørsteStønadsperiode:void 0,_=d&&m,A=t!==void 0&&t.sak!==void 0&&t.kanSøkeOmEndring===!1,q=!_&&!A&&t!==void 0;if(_){const r=de(m,l),g=me(h.søkerinfo,r,o,m.annenPart,t);n.push(a.updateCurrentRoute(b.UTTAKSPLAN)),n.push(a.setSøknad(g)),n.push(a.setEksisterendeSak(r)),n.push(a.setBrukerSvarteJaPåAutoJustering(r==null?void 0:r.grunnlag.ønskerJustertUttakVedFødsel)),n.push(a.setSøknadGjelderEtNyttBarn(!1))}else if(A){const r=ke(t,o,O);n.push(a.setSøknad(r)),n.push(a.setSøknadGjelderEtNyttBarn(!1))}else if(q){const r=pe(t);n.push(a.setSøknad(r)),n.push(a.setSøknadGjelderEtNyttBarn(!1))}else n.push(a.setSøknadGjelderEtNyttBarn(!0));return n},{handleSubmit:x,isSubmitting:R}=W(M,b.SØKERSITUASJON,i=>le(i));return e(V.FormikWrapper,{initialValues:ee(T.harGodkjentVilkår),onSubmit:x,renderForm:({values:i,setFieldValue:t})=>{const d=te.getVisbility({...i,selectableBarn:u}),m=i.valgteBarn,n=m===L.SØKNAD_GJELDER_NYTT_BARN?void 0:u.find(l=>l.id===m),k=n!==void 0&&n.kanSøkeOmEndring===!0?p(o,"velkommen.endreSøknad"):p(o,"velkommen.begynnMedSøknad");return S(V.Form,{includeButtons:!1,children:[e(H,{locale:c,availableLocales:["nb","nn"],toggle:l=>C(l)}),S("div",{className:v.block,children:[e(s,{children:e(K,{size:"xlarge",className:`${v.element("tittel")}`,children:p(o,"velkommen.tittel")})}),e(s,{padBottom:"l",children:S(U,{poster:!0,children:[e(s,{padBottom:"m",children:p(o,"velkommen.guidepanel.del1")})," ",e(s,{children:e(B,{id:"velkommen.guidepanel.del2",values:{a:l=>e("a",{className:"lenke",rel:"noopener noreferrer",href:ue.foreldrepenger,target:"_blank",children:l})}})})]})}),e(s,{padBottom:"l",visible:d.isVisible(f.valgteBarn),children:e(ne,{selectableBarn:P,visibility:d,formValues:i,setFieldValue:t})}),e(s,{padBottom:"l",visible:d.isVisible(f.harForståttRettigheterOgPlikter),children:e(Y,{variant:"info",children:p(o,"velkommen.lagring.info")})}),e(s,{padBottom:"l",visible:d.isVisible(f.harForståttRettigheterOgPlikter),children:e(V.ConfirmationCheckbox,{name:f.harForståttRettigheterOgPlikter,label:p(o,"velkommen.samtykke"),validate:ae(o),children:S(I,{children:[e(s,{padBottom:"l",children:e(B,{id:"velkommen.samtykkeIntro.del1"})}),e(s,{padBottom:"m",children:e(se,{})})]})})}),e(s,{padBottom:"l",children:e("div",{style:{textAlign:"center"},children:e($,{type:"submit",variant:"primary",disabled:R,loading:R,children:k})})}),e(ge,{className:v.element("personopplysningerLink"),children:e("a",{className:"lenke",href:"#",onClick:l=>{l.preventDefault(),N(!0)},children:e(B,{id:"velkommen.lesMerOmPersonopplysninger"})})}),e(oe,{isOpen:j,onRequestClose:()=>N(!1)})]})]})}})},_e=y;try{y.displayName="Velkommen",y.__docgenInfo={description:"",displayName:"Velkommen",props:{fornavn:{defaultValue:null,description:"",name:"fornavn",required:!0,type:{name:"string"}},onChangeLocale:{defaultValue:null,description:"",name:"onChangeLocale",required:!0,type:{name:"(locale: Locale) => void"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"nb"'},{value:'"nn"'},{value:'"en"'}]}},saker:{defaultValue:null,description:"",name:"saker",required:!0,type:{name:"Sak[]"}},fnr:{defaultValue:null,description:"",name:"fnr",required:!0,type:{name:"string"}}}}}catch{}export{_e as V};
//# sourceMappingURL=Velkommen-afa2044c.js.map
