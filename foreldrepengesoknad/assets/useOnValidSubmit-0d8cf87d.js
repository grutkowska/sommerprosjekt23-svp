import{r as e}from"./index-f1f749bf.js";import{u as b,S as c,a as g}from"./mapSøkerinfoDTO-adbe2fb9.js";import{r as N}from"./api-dc1b3239.js";import{a as v}from"./useSaveLoadedRoute-352242ea.js";import{d as C}from"./useSøknad-54892a90.js";const _=(m,s,i)=>{const{dispatch:n,state:r}=b(),o=C(),[u,S]=e.useState(!1),[d,f]=e.useState(!1),[a,p]=e.useState(void 0);return e.useEffect(()=>{u&&i(r).then(()=>{s===c.SØKNAD_SENDT?o(s):o(r.currentRoute)}).catch(t=>{t.response&&(t.response.status===401||t.response.status===403)?N():p(t)})},[u,o,s,r,i]),e.useEffect(()=>{if(a)throw v(a),new Error(a)},[a]),{handleSubmit:t=>{f(!0);const h=m(t),l=s===c.SØKNAD_SENDT?void 0:n(g.updateCurrentRoute(s));Promise.all([l,...h.map(E=>n(E))]).then(()=>S(!0))},isSubmitting:d}};export{_ as u};
//# sourceMappingURL=useOnValidSubmit-0d8cf87d.js.map
