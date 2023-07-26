import{j as m}from"./jsx-runtime-670450c2.js";import{w as V}from"./withIntl-7d0ac68c.js";import{w as q}from"./withRouter-f4e9be70.js";import{w as z,F as J}from"./ForeldrepengerStateMock-abe1d834.js";import{A as Q}from"./AxiosMock-344dd773.js";import{B as l}from"./useSøknad-ba09cce8.js";import{O as Y}from"./OmBarnet-d7be83aa.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-fb799ed1.js";import"./validationUtils-303b9101.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./mapSøkerinfoDTO-89ebb576.js";import"./getTypedFormComponents-70ba8d25.js";import"./dateUtils-29da93b8.js";import"./useFortsettSøknadSenere-923116af.js";import"./amplitude-982d123d.js";import"./api-1e1f8a8d.js";import"./apiInterceptor-89b892c5.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-401ec60a.js";import"./useSaveLoadedRoute-6c170719.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-f19a3037.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-d458e0a9.js";import"./Periodene-a8cc750e.js";import"./useSøkerinfo-12a16e87.js";import"./FormikFileUploader-a23b9102.js";import"./AttachmentList-d15eeb93.js";import"./Attachment-3d354798.js";import"./Skjemanummer-77149054.js";import"./links-b36d21ab.js";import"./index-47edccfa.js";import"./formUtils-130fa58c.js";import"./RegistrertePersonalia-13724a5d.js";import"./personUtils-e983231b.js";import"./velkommenUtils-04fad1ce.js";const W={søker:{fnr:"19047815714",fornavn:"TALENTFULL",etternavn:"MYGG",kjønn:"K",fødselsdato:"1978-04-19",barn:[{fnr:"21091981146",fødselsdato:"2021-03-15",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"KLØKTIG",etternavn:"MIDTPUNKT",kjønn:"M"},{fnr:"31091981146",fødselsdato:"2022-08-02",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"SNILT",etternavn:"MIDTPUNKT",kjønn:"M"},{fnr:"31091981147",fødselsdato:"2022-08-02",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"LYST",etternavn:"MIDTPUNKT",kjønn:"M"}]}},X=[{arbeidsgiverId:"896929119",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"SAUEFABRIKK",stillingsprosent:100,fom:"2017-03-24"},{arbeidsgiverId:"896929119",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"SAUEFABRIKK",stillingsprosent:100,fom:"2017-03-24"}],Z={søker:{fnr:"21430354032",fornavn:"Hes",etternavn:"Mandagsbil",kjønn:"K",fødselsdato:"2003-03-21",bankkonto:{kontonummer:"",banknavn:""},barn:[{fnr:"21091981146",fødselsdato:"2023-03-01",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"KLØKTIG",etternavn:"MIDTPUNKT",kjønn:"M"},{fnr:"31091981147",fødselsdato:"2023-03-02",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"SNILT",etternavn:"MIDTPUNKT",kjønn:"M"},{fnr:"31091981148",fødselsdato:"2023-03-01",dødsdato:"2023-03-02",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"LYST",etternavn:"MIDTPUNKT",kjønn:"M"}]},arbeidsforhold:X},$=4,ee="/soknad/om-barnet",ne={søknad:{type:"foreldrepenger",harGodkjentVilkår:!0,søkersituasjon:{situasjon:"fødsel",rolle:"mor"},barn:{fnr:["21091981146"],type:"født",fødselsdatoer:["2021-03-15"],antallBarn:"1",datoForAleneomsorg:"",dokumentasjonAvAleneomsorg:[]},annenForelder:{kanIkkeOppgis:!0},søker:{språkkode:"nb"},informasjonOmUtenlandsopphold:{tidligereOpphold:[],senereOpphold:[]},erEndringssøknad:!1},version:$,currentRoute:ee,søknadGjelderEtNyttBarn:!0},r=W,e=ne,re=Z,Je={title:"steps/OmBarnet",component:Y,decorators:[q,V,z]},n=({context:C,søkerinfo:H})=>m(Q,{mock:f=>{f.onPost("/storage/vedlegg").reply(200,{data:{}},{location:""}),f.onPost("/storage").reply(200,void 0)},children:m(J,{søknad:C,søkerinfo:H,children:m(Y,{})})}),o=n.bind({});o.args={context:{...e,søknad:{...e.søknad,barn:void 0}},søkerinfo:r};const t=n.bind({});t.args={context:{...e,søknad:{...e.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"far"},barn:void 0}},søkerinfo:{...r,kjønn:"M"}};const s=n.bind({});s.args={context:{...e,søknad:{...e.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"medmor"},barn:void 0}},søkerinfo:r};const a=n.bind({});a.args={context:{...e,søknad:{...e.søknad,søkersituasjon:{situasjon:"adopsjon",rolle:"mor"}}},søkerinfo:r};const d=n.bind({});d.args={context:{...e,søknad:{...e.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"far"},barn:{antallBarn:1,fnr:["21091981146"],fødselsdatoer:[new Date("2021-03-15")],type:l.FØDT}},søknadGjelderEtNyttBarn:!1},søkerinfo:r};const i=n.bind({});i.args={context:{...e,søknad:{...e.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"mor"},barn:{antallBarn:2,fnr:["31091981146","31091981147"],fødselsdatoer:[new Date("2022-08-02"),new Date("2022-08-02")],type:l.FØDT}},søknadGjelderEtNyttBarn:!1},søkerinfo:r};const c=n.bind({});c.args={context:{...e,søknad:{...e.søknad,søkersituasjon:{situasjon:"adopsjon",rolle:"mor"},barn:{antallBarn:1,fnr:["21091981146"],fødselsdatoer:[new Date("2021-03-15")],type:l.FØDT}},søknadGjelderEtNyttBarn:!1},søkerinfo:r};const k=n.bind({});k.args={context:{...e,søknad:{...e.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"mor"},barn:{antallBarn:3,fnr:["21091981146","31091981147","31091981148"],fødselsdatoer:[new Date("2023-01-02")],type:l.FØDT}},søknadGjelderEtNyttBarn:!1},søkerinfo:re};const p=n.bind({});p.args={context:{...e,søknad:{...e.søknad,søkersituasjon:{situasjon:"fødsel",rolle:"mor"},barn:{antallBarn:1,fnr:void 0,fødselsdatoer:[new Date("2023-01-02")],type:l.FØDT}},søknadGjelderEtNyttBarn:!1},søkerinfo:{...r,registrerteBarn:[]}};var M,g,u;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var v,x,A;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(A=(x=t.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var F,S,B;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var j,y,E;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(E=(y=a.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var P,b,T;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(T=(b=d.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var D,O,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(L=(O=i.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var R,I,U;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(U=(I=c.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var N,K,w;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(w=(K=k.parameters)==null?void 0:K.docs)==null?void 0:w.source}}};var h,G,_;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage/vedlegg').reply(200, {
      data: {}
    }, {
      location: ''
    });
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <OmBarnet />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(_=(G=p.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};const Qe=["Default","FarFødsel","MedmorFødsel","ForAdopsjon","RegistrertBarnFødselFar","RegistrertBarnFødselMor","RegistrertBarnAdopsjonMor","RegistrertBarnTrillingerDerEnErDød","SøknadPåUregistrertBarnSomErFødt"];export{o as Default,t as FarFødsel,a as ForAdopsjon,s as MedmorFødsel,c as RegistrertBarnAdopsjonMor,d as RegistrertBarnFødselFar,i as RegistrertBarnFødselMor,k as RegistrertBarnTrillingerDerEnErDød,p as SøknadPåUregistrertBarnSomErFødt,Qe as __namedExportsOrder,Je as default};
//# sourceMappingURL=OmBarnet.stories-555d786b.js.map
