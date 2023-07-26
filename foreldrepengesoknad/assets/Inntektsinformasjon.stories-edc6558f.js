import{j as t}from"./jsx-runtime-670450c2.js";import{w as M}from"./withIntl-7d0ac68c.js";import{w as x}from"./withRouter-f4e9be70.js";import{w as u,F as v}from"./ForeldrepengerStateMock-abe1d834.js";import{A as b}from"./AxiosMock-344dd773.js";import{_ as A}from"./soknadMedEttBarn-66625a0c.js";import{_ as I}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{I as c}from"./Inntektsinformasjon-3ae00b8b.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-fb799ed1.js";import"./validationUtils-303b9101.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-ba09cce8.js";import"./dateUtils-29da93b8.js";import"./getTypedFormComponents-70ba8d25.js";import"./mapSøkerinfoDTO-89ebb576.js";import"./useFortsettSøknadSenere-923116af.js";import"./amplitude-982d123d.js";import"./api-1e1f8a8d.js";import"./apiInterceptor-89b892c5.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-401ec60a.js";import"./useSaveLoadedRoute-6c170719.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-f19a3037.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-d458e0a9.js";import"./Periodene-a8cc750e.js";import"./useSøkerinfo-12a16e87.js";import"./InteractiveListElement-950c3c8a.js";import"./Næring-0a9020f8.js";import"./Skjemanummer-77149054.js";import"./formUtils-130fa58c.js";import"./index-47edccfa.js";import"./FormikFileUploader-a23b9102.js";import"./AttachmentList-d15eeb93.js";import"./Attachment-3d354798.js";import"./links-b36d21ab.js";import"./arbeidsforholdUtils-6c32a3d4.js";import"./_baseIteratee-c5cd7c61.js";import"./_baseUniq-4a4d2a1a.js";import"./constants-c4bc2eb8.js";const d=I,k=A,bo={title:"steps/Inntektsinformasjon",component:c,decorators:[x,M,u]},l=({context:f,søkerinfo:g})=>t(b,{mock:e=>{e.onPost("/storage/vedlegg").reply(200,{data:{}},{location:""}),e.onPost("/storage").reply(200,void 0)},children:t(v,{søknad:f,søkerinfo:g,children:t(c,{})})}),o=l.bind({});o.args={context:k,søkerinfo:d};const r=l.bind({});r.args={context:k,søkerinfo:{søker:{...d},arbeidsforhold:[{arbeidsgiverId:"1",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"Auto Joachim Bilpleie",stillingsprosent:80,fom:"2015-01-01"},{arbeidsgiverId:"2",arbeidsgiverIdType:"orgnr",arbeidsgiverNavn:"Taco Express",stillingsprosent:20,fom:"2019-01-01",tom:"2021-01-01"}]}};var n,i,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
                <Inntektsinformasjon />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
                <Inntektsinformasjon />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const Ao=["Default","HarArbeidsforhold"];export{o as Default,r as HarArbeidsforhold,Ao as __namedExportsOrder,bo as default};
//# sourceMappingURL=Inntektsinformasjon.stories-edc6558f.js.map
