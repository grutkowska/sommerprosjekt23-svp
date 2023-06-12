import{n as k,S as p,T as v,b as Le,i as ye,C as Ee,s as G,y as X,$ as _e,z as ge,j as je,w as H,f as b,A as Z,P as R,d as x,G as W,o as V,B as ie,Z as P,a7 as ke,v as ee,U as O,I as L,a8 as te,V as q}from"./dateUtils-becbdc23.js";import{D as B}from"./Dekningsgrad-fced8842.js";import{g as A,d as g,i as Y}from"./validationUtils-00d66cf2.js";import{P as T,s as z}from"./Periodene-dd720f95.js";import{F as w,a0 as h,M as Ge}from"./periodeUtils-1a4dc73e.js";import{a as se,c as He,i as Ve,B as y}from"./useSøknad-54892a90.js";import"./jsx-runtime-670450c2.js";import"./index-7e4e529b.js";import"./index-f1f749bf.js";import{f as Ke}from"./velkommenUtils-40bb4bde.js";import{d as Q}from"./getTypedFormComponents-a42e978b.js";var re=(e=>(e.ORDINÆRT_ARBEID="ORDINÆRT_ARBEID",e.SELVSTENDIG_NÆRINGSDRIVENDE="SELVSTENDIG_NÆRINGSDRIVENDE",e.FRILANS="FRILANS",e.ANNET="ANNET",e))(re||{}),D=(e=>(e.UttakFellesperiodeAnnenForelder="FELLESPERIODE_ANNEN_FORELDER",e.UttakFedrekvoteAnnenForelder="FEDREKVOTE_ANNEN_FORELDER",e.UttakMødrekvoteAnnenForelder="MØDREKVOTE_ANNEN_FORELDER",e.UttakForeldrepengerAnnenForelder="FORELDREPENGER_ANNEN_FORELDER",e.Ingen="INGEN",e))(D||{}),I=(e=>(e.ADOPSJON="ADPSJN",e.OMSORGSOVERTAKELSE="OMSRGO",e.FØDSEL="FODSL",e.TERM="TERM",e))(I||{});const Fe=(e,t,r)=>{if(r!==void 0)return I.ADOPSJON;if(e!==void 0)return I.FØDSEL;if(t!==void 0)return I.TERM;throw new Error("Fødselsdato/ termindato/ omsorgsovertakelsedato mangler")};var U=(e=>(e.Ferie="LOVBESTEMT_FERIE",e.Arbeid="ARBEID",e.Sykdom="SØKER_SYKDOM",e.InstitusjonSøker="SØKER_INNLAGT",e.InstitusjonBarnet="BARN_INNLAGT",e.HvØvelse="HV_ØVELSE",e.NavTiltak="NAV_TILTAK",e.Fri="FRI",e))(U||{}),ve=(e=>(e.AVSLAG_HULL_MELLOM_FORELDRENES_PERIODER="AVSLAG_HULL_MELLOM_FORELDRENES_PERIODER",e.ANNET="ANNET",e))(ve||{}),pe=(e=>(e.fridag="fridag",e.avslåttPeriode="avslåttPeriode",e))(pe||{});const be=(e,t)=>{const r=v(e.tidsperiode).getAntallUttaksdager(),o={...e,tidsperiode:{fom:e.tidsperiode.fom,tom:k(t.tidsperiode.fom).forrige()}},n=v(o.tidsperiode).getAntallUttaksdager(),i=r-n,d=k(t.tidsperiode.tom).neste();if(Ee(e)){const a={...e,id:A(),tidsperiode:{fom:t.tidsperiode.fom,tom:e.tidsperiode.tom}};return[o,t,a]}else{const a={...e,id:A(),tidsperiode:{fom:d,tom:k(d).leggTil(i-1)}};return[o,t,a]}},Ae=(e,t)=>{const r={...e,tidsperiode:{fom:e.tidsperiode.fom,tom:k(t).forrige()}},o={...e,id:A(),tidsperiode:{fom:k(r.tidsperiode.tom).neste(),tom:e.tidsperiode.tom}};return[r,o]},we=(e,t)=>{const r={...e,konto:e.konto==p.Foreldrepenger?p.AktivitetsfriKvote:e.konto,morsAktivitetIPerioden:e.konto==p.Foreldrepenger?void 0:e.morsAktivitetIPerioden,erMorForSyk:e.konto==p.Foreldrepenger?void 0:e.erMorForSyk,tidsperiode:{fom:e.tidsperiode.fom,tom:k(t).forrige()}},o={...e,id:A(),tidsperiode:{fom:k(r.tidsperiode.tom).neste(),tom:e.tidsperiode.tom}};return[r,o]},Je=(e,t)=>{if(T([e]).finnOverlappendePerioder(t).length>0){const r=[g(e.tidsperiode.fom),g(e.tidsperiode.tom),g(t.tidsperiode.fom),g(t.tidsperiode.tom)],o=g.min(r),n=g.max(r),i=r.filter(d=>d!==o&&d!==n);return v({fom:g.min(i).toDate(),tom:g.max(i).toDate()}).getAntallUttaksdager()}return 0},Ut=({perioder:e,nyPeriode:t,familiehendelsesdato:r,harAktivitetskravIPeriodeUtenUttak:o,erAdopsjon:n,bareFarHarRett:i,erFarEllerMedmor:d,førsteUttaksdagNesteBarnsSak:a})=>{if(e.length===0)return[t];const s=t.tidsperiode.fom,l=t.tidsperiode.tom;if(g(s).isBefore(r,"day")&&g(l).isSameOrAfter(r,"day"))return[...e];const m=e.find(f=>v(f.tidsperiode).inneholderDato(s));if(m){if(Le(m)||ye(m))return[...e];const f=T(e).finnAlleForegåendePerioder(m),u=T(e).finnAllePåfølgendePerioder(m),c=v(t.tidsperiode).getAntallUttaksdager();if(g(m.tidsperiode.fom).isSame(s))return[...f,t,...T([m,...u]).forskyvPerioder(c)];const E=be(m,t);return Ee(m)?[...f,E[0],E[1],...T([E[2],...u]).forskyvPerioder(c)]:[...f,...E,...T(u).forskyvPerioder(c)]}else{const f=e[0],u=e[e.length-1],c=g(t.tidsperiode.fom),E=g(t.tidsperiode.tom);if(c.isBefore(f.tidsperiode.fom,"day")){const F=de(t.tidsperiode,f.tidsperiode);if(E.isSameOrAfter(f.tidsperiode.fom,"day")){if(c.isBefore(r,"day"))return[...e];const S=Je(f,t);return[t,...T(e).forskyvPerioder(S)]}return F?[t,...$(F,o,r,n,i,d,a),...e]:[t,...e]}else{const F=de(u.tidsperiode,t.tidsperiode);return F?[...e,...$(F,o,r,n,i,d,a),t]:[...e,t].sort(z)}}},Be=(e,t,r,o)=>{if(e.length<=1)return e;const n=[];let i={...e[0]};return e.forEach((d,a)=>{if(a!==0){if(i===void 0){i=d;return}if(H(i).erLik(d,!1,!0)&&H(i).erSammenhengende(d)){if(o&&G(d)&&d.ønskerSamtidigUttak&&G(i)&&i.ønskerSamtidigUttak){const l=T(o).finnOverlappendePerioder(i),m=T(o).finnOverlappendePerioder(d);if(m.length===0&&l.length>0||m.length>0&&l.length===0){n.push(i),i=d;return}}if(g(i.tidsperiode.tom).isBefore(t,"day")&&g(d.tidsperiode.tom).isSameOrAfter(k(t).denneEllerNeste())||r!==void 0&&g(i.tidsperiode.tom).isBefore(r,"day")&&g(d.tidsperiode.fom).isSameOrAfter(k(r).denneEllerNeste(),"day")){n.push(i),i=d;return}const s={fom:i.tidsperiode.fom,tom:d.tidsperiode.tom};i.tidsperiode={...s};return}else n.push(i);i=d}}),n.push(i),n},J=(e,t)=>t!==void 0&&W(e.tidsperiode,t)?Ae(e,t):[e],$=(e,t,r,o,n,i,d,a=pe.fridag)=>{if(b(r)){const m=k(r).denneEllerNeste(),f=k(m).leggTil(30),u=v(e).erInnenforFørsteSeksUker(r),c=g(e.fom).isBefore(f,"day")&&!o&&(n&&b(r)||i&&Z(r));if(t&&!c)return J(j(e,a),d);if(g(e.fom).isBefore(r,"day"))return J(N(e),d);if(u&&!o){if(g(e.tom).isBefore(f,"day"))return n&&b(r)||i&&Z(r)?[N(e)]:[j(e,a)];const E=v({fom:e.fom,tom:f}).getAntallUttaksdager()-2,F=v(e).getAntallUttaksdager()-E,S={fom:e.fom,tom:k(f).leggTil(-1)},K={fom:f,tom:k(f).leggTil(F-2)};if(n&&b(r)||i&&Z(r)){if(i&&!n)return[N(e)];const Ne=N(S),Me=j(K,a);return[Ne,Me]}const C=j(S,a),Ie=N(K);return[C,Ie]}return J(N(e),d)}return J(j(e,a),d)},j=(e,t)=>({id:A(),type:R.Hull,tidsperiode:e,årsak:t}),N=e=>({id:A(),type:R.PeriodeUtenUttak,tidsperiode:e}),de=(e,t)=>{const r={fom:k(e.tom).neste(),tom:k(t.fom).forrige()},o=v(r).getAntallUttaksdager();if(x(r)&&o>0)return r},Ot=e=>e.reduce((t,r,o)=>o===0&&X(r)?t:o===e.length-1?(ge(r)||X(r)||t.push(r),t):(t.push(r),t),[]),ae=(e,t,r,o,n,i,d)=>e.length===0?e:e.reduce((s,l,m)=>{if(m===0&&i){const E=k(r).denneEllerNeste();if(g(E).isBefore(l.tidsperiode.fom)){const F={fom:E,tom:k(l.tidsperiode.fom).forrige()};v(F).getAntallUttaksdager()>0&&s.push(...$(F,t,r,o,n,i,d))}}if(s.push(l),m===e.length-1)return s;const f=e[m+1],u={fom:k(l.tidsperiode.tom).neste(),tom:k(f.tidsperiode.fom).forrige()};return g(u.tom).isBefore(u.fom,"day")||!i&&g(u.tom).isBefore(r,"day")||v(u).getAntallUttaksdager()>0&&s.push(...$(u,t,r,o,n,i,d)),s},[]),le=(e,t)=>{const r=t.filter(n=>v(e.tidsperiode).inneholderDato(n.dato)),o=[];return r.length===2?[e]:(r.forEach((n,i)=>{if(i===0){o.push({...e,tidsperiode:{fom:n.dato,tom:void 0}});return}o[i-1].tidsperiode.tom=n.erFom?k(n.dato).forrige():n.dato,i<r.length-1&&o.push({...e,id:A(),tidsperiode:{fom:n.erFom?n.dato:k(n.dato).neste(),tom:void 0}})}),o.filter(n=>x(n.tidsperiode)))},Ye=(e,t)=>{const r=e.filter(s=>x(s.tidsperiode)).reduce((s,l)=>(s.push({dato:l.tidsperiode.fom,erFom:!0}),s.push({dato:l.tidsperiode.tom,erFom:!1}),s),[]),o=t.reduce((s,l)=>(s.push({dato:l.tidsperiode.fom,erFom:!0}),s.push({dato:l.tidsperiode.tom,erFom:!1}),s),[]),i=r.concat(o).sort((s,l)=>{if(s.dato.getTime()-l.dato.getTime()===0){if(!s.erFom)return 1;if(!l.erFom)return-1}return s.dato.getTime()-l.dato.getTime()}).filter((s,l,m)=>m.findIndex(f=>f.dato.getTime()===s.dato.getTime()&&f.erFom===s.erFom)===l),d=[],a=[];return e.forEach(s=>{const l=le(s,i);d.push(...l)}),t.forEach(s=>{const l=le(s,i);a.push(...l)}),{normaliserteEgnePerioder:d,normaliserteAnnenPartsPerioder:a}},$e=(e,t,r,o,n=!1)=>{if(t.length===0)return e;if(e.length===0)return t;const{normaliserteEgnePerioder:i,normaliserteAnnenPartsPerioder:d}=Ye(e,t),a=i.reduce((u,c)=>{const E=T(d).finnOverlappendePerioder(c);if(E.length===0)return G(c)&&c.ønskerSamtidigUttak&&n?(u.push({...c,ønskerSamtidigUttak:!1}),u):(u.push(c),u);if(X(c)||_e(c)||ge(c)){const F=E[0];return u.push({...F,visPeriodeIPlan:!0}),u}if(G(c)&&c.ønskerSamtidigUttak){const F=E[0];return u.push(c),je(F)||u.push({...F,visPeriodeIPlan:!1,ønskerSamtidigUttak:!0}),u}else return u.push(c),u},[]);a.sort(z);const s=e[0].tidsperiode.fom,l=d.filter(u=>g(u.tidsperiode.tom).isBefore(s,"day")),m=e[e.length-1].tidsperiode.tom,f=d.filter(u=>g(u.tidsperiode.fom).isAfter(m,"day"));return Be([...l,...a,...f],r,o,t)},fe=e=>H(e).getAntallUttaksdager()>0,xe=e=>x(e.tidsperiode),ze=(e,t,r)=>{if(e.length<=1)return e;const o=[],n=e.filter(s=>V(s)),d=[...e.filter(s=>!V(s)),...n];let a={...d[0]};return d.forEach((s,l)=>{if(l!==0){if(a===void 0){a=s;return}if(H(a).erLik(s,!1,!0)&&H(a).erSammenhengende(s)&&!g(s.tidsperiode.fom).isSame(t,"day")&&!(r!==void 0&&g(s.tidsperiode.fom).isSame(r,"day"))){a.tidsperiode.tom=s.tidsperiode.tom;return}else o.push(a);a=s}}),o.push(a),o.sort(z)},Ce=e=>{const{fom:t,tom:r}=e.tidsperiode,o=ie(t),n=ie(r);return o&&n?e:!o&&!n?{...e,tidsperiode:{fom:k(t).neste(),tom:k(r).forrige()}}:!o&&n?{...e,tidsperiode:{fom:k(t).neste(),tom:r}}:{...e,tidsperiode:{fom:t,tom:k(r).forrige()}}},_=(e,t)=>e.gjelderAnnenPart?t?w.mor:w.farMedmor:t?w.farMedmor:w.mor,Se=e=>{switch(e){case U.Arbeid:return O.Arbeid;case U.Ferie:return O.Ferie;case U.InstitusjonBarnet:return O.InstitusjonBarnet;case U.InstitusjonSøker:return O.InstitusjonSøker;case U.Sykdom:return O.Sykdom;case U.HvØvelse:return O.HvØvelse;case U.NavTiltak:return O.NavTiltak;case U.Fri:return O.Fri;default:return}},Ze=e=>{switch(e.kontoType){case p.Fedrekvote:return h.UttakFedrekvoteAnnenForelder;case p.Fellesperiode:return h.UttakFellesperiodeAnnenForelder;case p.Mødrekvote:return h.UttakMødrekvoteAnnenForelder;case p.Foreldrepenger:return h.UttakForeldrepengerAnnenForelder;case p.ForeldrepengerFørFødsel:return h.ForeldrepengerFørFødsel;default:return}},Pe=(e,t,r)=>{if(e)return e.toString();if(t)return r?(100-r).toString():"100"},qe=e=>e?p.AktivitetsfriKvote:p.Foreldrepenger,Qe=(e,t,r,o)=>{if(e&&!t.flerbarnsdager&&!t.samtidigUttak&&g(t.periode.fom).isBefore(g(r).add(6,"weeks"),"day")&&o!==p.AktivitetsfriKvote&&t.morsAktivitet!==Ge.Uføre)return!0},Xe=(e,t,r)=>{var F;const o=e.gradering!==void 0&&e.resultat.innvilget,n=P(e.periode),i=t.søkerErFarEllerMedmor&&!t.morHarRett&&!t.farMedmorErAleneOmOmsorg&&!t.harAnnenForelderTilsvarendeRettEØS;if(e.gjelderAnnenPart)return oe(e,t.søkerErFarEllerMedmor,r);const d=r!==void 0?r.find(S=>(v(P(S.periode)).erLik(n)||v(P(S.periode)).overlapper(n))&&S.guid!==e.guid):void 0;let a;d&&(a=d.samtidigUttak);const s=Pe(e.samtidigUttak,a,(F=e.gradering)==null?void 0:F.arbeidstidprosent),{termindato:l,fødselsdato:m,omsorgsovertakelsesdato:f}=t,u=ke(l,m,f),c=i?qe(e.resultat.trekkerMinsterett):e.kontoType;return{id:A(),type:R.Uttak,konto:c,tidsperiode:n,forelder:_(e,t.søkerErFarEllerMedmor),ønskerSamtidigUttak:e.samtidigUttak!==void 0,gradert:o,samtidigUttakProsent:s,ønskerFlerbarnsdager:t.antallBarn>1?e.flerbarnsdager:void 0,stillingsprosent:o?e.gradering.arbeidstidprosent.toString():void 0,arbeidsformer:o?[it(e.gradering.aktivitet.type)]:void 0,orgnumre:o&&e.gradering.aktivitet.arbeidsgiver!==void 0?[e.gradering.aktivitet.arbeidsgiver.id]:void 0,morsAktivitetIPerioden:e.morsAktivitet,erMorForSyk:Qe(t.søkerErFarEllerMedmor,e,u,c),angittAvAnnenPart:e.angittAvAnnenPart}},We=(e,t)=>e.gjelderAnnenPart?oe(e,t):{id:A(),type:R.Utsettelse,årsak:Se(e.utsettelseÅrsak),tidsperiode:P(e.periode),forelder:_(e,t),erArbeidstaker:!1,morsAktivitetIPerioden:e.morsAktivitet},et=(e,t)=>({id:A(),type:R.Info,infotype:ee.avslåttPeriode,tidsperiode:P(e.periode),avslåttPeriodeType:e.utsettelseÅrsak!==void 0?R.Utsettelse:R.Uttak,kontoType:e.kontoType,forelder:_(e,t),overskrives:!0,visPeriodeIPlan:!0}),oe=(e,t,r)=>{var l;const o=P(e.periode);if(e.utsettelseÅrsak!==void 0&&e.resultat.innvilget===!0)return{type:R.Info,infotype:ee.utsettelseAnnenPart,id:A(),årsak:Se(e.utsettelseÅrsak),tidsperiode:o,forelder:_(e,t),overskrives:!0,visPeriodeIPlan:!0};const n=r!==void 0&&!r.some(m=>(v(P(m.periode)).erLik(o)||v(P(m.periode)).overlapper(o))&&m.guid!==e.guid),i=Ze(e),d=r!==void 0?r.find(m=>(v(P(m.periode)).erLik(o)||v(P(m.periode)).overlapper(o))&&m.guid!==e.guid):void 0;let a;d&&(a=d.samtidigUttak);const s=Pe(e.samtidigUttak,a,(l=e.gradering)==null?void 0:l.arbeidstidprosent);return{type:R.Info,infotype:ee.uttakAnnenPart,id:A(),årsak:i,tidsperiode:o,forelder:_(e,t),overskrives:!0,gradert:e.gradering!==void 0,ønskerSamtidigUttak:s!==void 0,samtidigUttakProsent:s,stillingsprosent:e.gradering!==void 0?e.gradering.arbeidstidprosent.toString():void 0,visPeriodeIPlan:n}},tt=(e,t)=>({id:A(),forelder:_(e,t),konto:e.kontoType,tidsperiode:P(e.periode),type:R.Overføring,årsak:e.overføringÅrsak}),rt=(e,t,r)=>e.gjelderAnnenPart?oe(e,t.søkerErFarEllerMedmor,r):e.resultat.innvilget?e.utsettelseÅrsak!==void 0?We(e,t.søkerErFarEllerMedmor):e.overføringÅrsak!==void 0?tt(e,t.søkerErFarEllerMedmor):Xe(e,t,r):et(e,t.søkerErFarEllerMedmor),ot=e=>e.resultat.innvilget?!0:e.gjelderAnnenPart?!1:e.resultat.årsak!==ve.AVSLAG_HULL_MELLOM_FORELDRENES_PERIODER&&e.resultat.trekkerDager===!0,nt=(e,t,r)=>{const o=[];return e.forEach(n=>{W(n.tidsperiode,t)&&G(n)?we(n,t).forEach(d=>o.push(d)):r!==void 0&&W(n.tidsperiode,r)?Ae(n,r).forEach(d=>o.push(d)):o.push(n)}),o},Te=(e,t,r)=>{const o=e.filter(ot),n=o.map(E=>rt(E,t,o)),i=new Date(t.familiehendelseDato),d=nt(n,i,r),a=ze([...d].sort(z).filter(fe).map(Ce).filter(xe).filter(fe),i,r),s=!t.morHarRett&&t.farMedmorHarRett&&!t.harAnnenForelderTilsvarendeRettEØS,l=t.familiehendelseType===I.ADOPSJON,m=a.filter(E=>!V(E)),f=a.filter(E=>V(E)),u=!t.erDeltUttak&&s&&!t.farMedmorErAleneOmOmsorg,c=ae(m,u,i,l,s,t.søkerErFarEllerMedmor,r);return ae($e(c,f,i,r),u,i,l,s,t.søkerErFarEllerMedmor,r)};var ne=(e=>(e.ÅTTI_PROSENT="ÅTTI",e.HUNDRE_PROSENT="HUNDRE",e))(ne||{}),M=(e=>(e.BARE_SØKER_RETT="BARE_SØKER_RETT",e.ALENEOMSORG="ALENEOMSORG",e.BEGGE_RETT="BEGGE_RETT",e))(M||{});const it=e=>{switch(e){case re.SELVSTENDIG_NÆRINGSDRIVENDE:return q.selvstendignæringsdrivende;case re.FRILANS:return q.frilans;default:return q.arbeidstaker}},me=e=>{switch(e){case D.UttakFedrekvoteAnnenForelder:return p.Fedrekvote;case D.UttakFellesperiodeAnnenForelder:return p.Fellesperiode;case D.UttakMødrekvoteAnnenForelder:return p.Mødrekvote;default:return}},st=e=>{switch(e){case D.UttakFedrekvoteAnnenForelder:return h.UttakFedrekvoteAnnenForelder;case D.UttakFellesperiodeAnnenForelder:return h.UttakFellesperiodeAnnenForelder;case D.UttakMødrekvoteAnnenForelder:return h.UttakMødrekvoteAnnenForelder;default:return}},Re=(e,t)=>{const{oppholdÅrsak:r}=e,o={guid:A(),periode:{fom:e.fom,tom:e.tom},gjelderAnnenPart:t,resultat:e.resultat,kontoType:e.kontoType,flerbarnsdager:e.flerbarnsdager,gradering:e.gradering,utsettelseÅrsak:e.utsettelseÅrsak,overføringÅrsak:e.overføringÅrsak,samtidigUttak:e.samtidigUttak,morsAktivitet:e.morsAktivitet,oppholdÅrsak:st(e.oppholdÅrsak)};return r!==void 0&&t===!1&&(o.gjelderAnnenPart=!0,o.kontoType=me(r)),r!==void 0&&t&&(o.gjelderAnnenPart=!1,o.angittAvAnnenPart=!0,o.kontoType=me(r)),o},ue=e=>e.resultat.innvilget,Ue=(e,t,r)=>{const o=r.filter(i=>e.guid!==i.guid&&v(P(e.periode)).erLik(P(i.periode)));if(o.length===0)return!0;const n=o.filter(ue);return!(ue(e)===!1&&n.length>0)},ht=e=>{if(!(e===void 0||e===""||Object.keys(e).length===0||e.perioder.length===0))return L(e.perioder[0].fom)},Dt=(e,t,r,o,n)=>{if(e===void 0||e===""||Object.keys(e).length===0)return;const i=!0,d=e.perioder.map(u=>Re(u,i)).filter(Ue);let a;e.termindato!==void 0?a=e.termindato:(se(t)||He(t))&&t.termindato!==void 0&&(a=Q(t.termindato));const s=se(t)?Q(t.fødselsdatoer[0]):void 0,l=Ve(t)?Q(t.adopsjonsdato):void 0,m={dekningsgrad:e.dekningsgrad===ne.HUNDRE_PROSENT?B.HUNDRE_PROSENT:B.ÅTTI_PROSENT,antallBarn:e.antallBarn?e.antallBarn:t.antallBarn,morErAleneOmOmsorg:!1,morErUfør:!1,morHarRett:!0,farMedmorErAleneOmOmsorg:!1,farMedmorHarRett:!0,søkerErFarEllerMedmor:r,termindato:a,fødselsdato:s,omsorgsovertakelsesdato:l,erDeltUttak:!0,erBarnetFødt:s!==void 0,familiehendelseDato:o,familiehendelseType:Fe(s,a,l),harAnnenForelderTilsvarendeRettEØS:!1,ønskerJustertUttakVedFødsel:void 0,barn:[]},f=Te(d,m,n);return{saksnummer:"",erAnnenPartsSak:i,grunnlag:m,saksperioder:d,uttaksplan:f.filter(u=>V(u))}},dt=(e,t)=>{if(e===void 0||e===""||Object.keys(e).length===0)return;const r=!1,{dekningsgrad:o,familiehendelse:{fødselsdato:n,termindato:i,omsorgsovertakelse:d,antallBarn:a},harAnnenForelderTilsvarendeRettEØS:s,morUføretrygd:l,rettighetType:m,sakTilhørerMor:f,ønskerJustertUttakVedFødsel:u}=e,c=e.gjeldendeVedtak?e.gjeldendeVedtak.perioder:[],E=!f,F={dekningsgrad:o===ne.HUNDRE_PROSENT?B.HUNDRE_PROSENT:B.ÅTTI_PROSENT,antallBarn:a,morErAleneOmOmsorg:f&&m===M.ALENEOMSORG,morErUfør:l,morHarRett:f||m===M.BEGGE_RETT,farMedmorErAleneOmOmsorg:!f&&m===M.ALENEOMSORG,farMedmorHarRett:!f||m===M.BEGGE_RETT,søkerErFarEllerMedmor:E,termindato:i,fødselsdato:n,omsorgsovertakelsesdato:d,erDeltUttak:m===M.BEGGE_RETT,erBarnetFødt:n!==void 0,familiehendelseDato:ke(i,n,d),familiehendelseType:Fe(n,i,d),ønskerJustertUttakVedFødsel:n===void 0?u:void 0,harAnnenForelderTilsvarendeRettEØS:s},S=c.map(C=>Re(C,r)).filter(Ue),K=Te(S,F,t);return{saksnummer:e.saksnummer,erAnnenPartsSak:r,grunnlag:F,saksperioder:S,uttaksplan:K}},Oe=e=>e===I.TERM||e===I.FØDSEL?"fødsel":"adopsjon",at=(e,t)=>({erAleneOmOmsorg:t?e.farMedmorErAleneOmOmsorg:e.morErAleneOmOmsorg}),lt=(e,t,r)=>{const{søkerErFarEllerMedmor:o}=r,n=e.kjønn==="K";switch(t){case"fødsel":case"adopsjon":return n?o?"medmor":"mor":"far";default:return}},ce=(e,t)=>e&&e.fødselsdatoer?te(e.fødselsdatoer):t.fødselsdato?Array(t.antallBarn).fill(L(t.fødselsdato)):[],ft=(e,t,r)=>{switch(e){case"fødsel":return t.fødselsdato?{type:y.FØDT,antallBarn:t.antallBarn,fødselsdatoer:ce(r,t),termindato:t.termindato?L(t.termindato):void 0,fnr:r==null?void 0:r.fnr}:{type:y.UFØDT,antallBarn:t.antallBarn,termindato:L(t.termindato),terminbekreftelse:[]};case"adopsjon":return{type:y.ADOPTERT_STEBARN,adopsjonsdato:L(t.omsorgsovertakelsesdato),antallBarn:t.antallBarn,fødselsdatoer:ce(r,t),omsorgsovertakelse:[],fnr:r==null?void 0:r.fnr};default:return}},mt=(e,t,r,o,n)=>{switch(e){case"fødsel":case"adopsjon":return o?{fornavn:r.fornavn!==void 0&&r.fornavn!==""?r.fornavn:Y(n,"annen.forelder"),etternavn:r.etternavn,erUfør:t.morErUfør,harRettPåForeldrepengerINorge:!!t.morHarRett&&!t.harAnnenForelderTilsvarendeRettEØS,fnr:r.fnr,kanIkkeOppgis:!1,harRettPåForeldrepengerIEØS:t.harAnnenForelderTilsvarendeRettEØS}:{fornavn:r.fornavn!==void 0&&r.fornavn!==""?r.fornavn:Y(n,"annen.forelder"),etternavn:r.etternavn,harRettPåForeldrepengerINorge:!!t.farMedmorHarRett&&!t.harAnnenForelderTilsvarendeRettEØS,fnr:r.fnr,kanIkkeOppgis:!1,harRettPåForeldrepengerIEØS:t.harAnnenForelderTilsvarendeRettEØS};default:return}},ut=(e,t,r,o,n,i,d)=>{var m;if(i===void 0&&t===void 0||!d)return;const a=i!==void 0?e.find(f=>i.includes(f.fnr)&&f.annenForelder!==void 0):void 0,s=t!==void 0?e.filter(f=>Ke(f.fødselsdato,t)&&f.annenForelder!==void 0):[],l=a||s.length>0?s[0]:void 0;if(l!==void 0&&((m=l.annenForelder)==null?void 0:m.fnr)===d){const f=l.annenForelder,{fornavn:u}=f,c=u!==void 0&&u.trim()!==""?u:Y(n,"annen.forelder"),E={...f,fornavn:c};return mt(o,r,E,r.søkerErFarEllerMedmor,n)}},he=e=>e.fødselsdatoer!==void 0&&e.fødselsdatoer.length>0?{type:y.FØDT,antallBarn:e.antallBarn,fødselsdatoer:te(e.fødselsdatoer),fnr:e.fnr!==void 0&&e.fnr.length>0?e.fnr.filter(t=>!!t):void 0}:e.termindato!==void 0?{type:y.UFØDT,antallBarn:e.antallBarn,termindato:e.termindato}:{type:y.IKKE_UTFYLT,antallBarn:e.antallBarn,fødselsdatoer:e.fødselsdatoer?te(e.fødselsdatoer):[],fnr:e.fnr!==void 0&&e.fnr.length>0?e.fnr.filter(t=>!!t):void 0},ct=e=>e.annenForelder!==void 0?{fornavn:e.annenForelder.fornavn,etternavn:e.annenForelder.etternavn,fnr:e.annenForelder.fnr,kanIkkeOppgis:!1}:{kanIkkeOppgis:!1},It=e=>{const t=he(e),r=ct(e);return{barn:t,annenForelder:r,erEndringssøknad:!1}},De=(e,t,r,o,n,i)=>{const d=t!==void 0?t.fnr:void 0,a={fornavn:Y(e,"annen.forelder"),etternavn:"",fnr:d||"",harRettPåForeldrepengerINorge:r.søkerErFarEllerMedmor?!!r.morHarRett&&!r.harAnnenForelderTilsvarendeRettEØS:!!r.farMedmorHarRett&&!r.harAnnenForelderTilsvarendeRettEØS,harRettPåForeldrepengerIEØS:r.harAnnenForelderTilsvarendeRettEØS,kanIkkeOppgis:!1,erUfør:r.søkerErFarEllerMedmor?r.morErUfør:void 0};return ut(o.registrerteBarn,L(r.fødselsdato),r,n,e,i,d)||a},Nt=(e,t,r)=>{var l;const o=dt(e.sak,void 0),{grunnlag:n}=o,i=Oe(n.familiehendelseType),d=he(e),a=De(t,(l=e.sak)==null?void 0:l.annenPart,n,r,i,e.fnr),s={barn:d,annenForelder:a,erEndringssøknad:!1};if(e.sak!==void 0){const m={situasjon:e.sak.gjelderAdopsjon?"adopsjon":"fødsel",rolle:e.sak.sakTilhørerMor?void 0:"far"};s.søkersituasjon=m}return s},Mt=(e,t,r,o,n)=>{const{grunnlag:i,uttaksplan:d}=t,{dekningsgrad:a,familiehendelseType:s,søkerErFarEllerMedmor:l,ønskerJustertUttakVedFødsel:m}=i,f=Oe(s);if(!f)return;const u=at(i,l),c=ft(f,i,n),E=lt(e.person,f,i);if(!c||!E)return;const F=De(r,o,i,e,f,n==null?void 0:n.fnr);return{søker:u,søkersituasjon:{situasjon:f,rolle:E},barn:c,annenForelder:F,erEndringssøknad:!0,dekningsgrad:a,uttaksplan:d,saksnummer:t.saksnummer,ønskerJustertUttakVedFødsel:m}};export{ne as D,M as R,$e as a,Ot as b,we as c,Ae as d,ht as e,ae as f,$ as g,dt as h,Nt as i,It as j,Ut as l,Dt as m,Ye as n,Mt as o,Be as s};
//# sourceMappingURL=eksisterendeSakUtils-8ace25cf.js.map