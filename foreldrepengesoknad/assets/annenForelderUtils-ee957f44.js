import{d as n}from"./validationUtils-00d66cf2.js";import{n as o,A as c}from"./dateUtils-becbdc23.js";import{u as a}from"./constants-c4bc2eb8.js";import{x as F}from"./periodeUtils-1a4dc73e.js";import{d as m}from"./getTypedFormComponents-a42e978b.js";import"./index-f1f749bf.js";import"./jsx-runtime-670450c2.js";import"./index-7e4e529b.js";import{i as E}from"./AnnenForelder-5c5d4f7f.js";function d(t){const e=o(t).denneEllerNeste();return o(n(e).add(a.MAKS_PERMISJONSLENGDE_I_ÅR,"years").toDate()).denneEllerNeste()}const i=(t,e)=>({minDate:m(t),maxDate:m(e)}),D=t=>{const e=o(t).denneEllerNeste(),r=d(t);return{...i(e,r),weekendsNotSelectable:!0}},u=t=>{const e=o(n(t).toDate()).forrige(),r=o(e).trekkFra(a.MAKS_ANTALL_UKER_FORELDREPENGER_FØR_FØDSEL*5-1);return{...i(r,e),weekendsNotSelectable:!0}},l=t=>{const e=o(n(t).toDate()).forrige(),r=o(e).trekkFra(a.ANTALL_UKER_FORELDREPENGER_FØR_FØDSEL*5-1);return{...i(r,e),weekendsNotSelectable:!0}},g=t=>{const e=o(n(t).toDate()).forrige(),r=o(e).trekkFra(a.MAKS_ANTALL_UKER_FORELDREPENGER_FØR_FØDSEL*5-1),s=o(e).trekkFra(a.ANTALL_UKER_FORELDREPENGER_FØR_FØDSEL*5-1);return{...i(r,s),weekendsNotSelectable:!0}},k=(t,e)=>{const r=o(n(t).toDate()).denneEllerNeste(),s=d(n(e).toDate());return{...i(r,s),weekendsNotSelectable:!0}},R=t=>D(n(t).toDate()),_=t=>D(n(t).toDate()),S=(t,e,r)=>{const s=D(t);return r==="fødsel"&&c(t)?{...s,minDate:m(F(t,e))}:s},K={startdatoFørTermin:u,morsSisteUttaksdag:_,startdatoPermisjonFarMedmor:S,startdatoPermisjonAdopsjon:R,startdatoPermisjonAleneomsorgFarMedmor:k,startdatoFørTerminForeldrepengerFørFødselKonto:l,ekstrauttakFørFødsel:g},O=(t,e)=>E(t)&&e?!!t.erUfør:!1,T=t=>E(t)&&!!t.harRettPåForeldrepengerIEØS;export{O as g,T as h,K as u};
//# sourceMappingURL=annenForelderUtils-ee957f44.js.map