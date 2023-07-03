import{j as l}from"./jsx-runtime-670450c2.js";import{w as q}from"./withIntl-cde7a662.js";import{w as z}from"./withRouter-f4e9be70.js";import{w as H,F as J}from"./ForeldrepengerStateMock-abe1d834.js";import{A as Q}from"./AxiosMock-344dd773.js";import{_ as V}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{_ as W}from"./soknadMedEttBarn-66625a0c.js";import{A as D}from"./AnnenForelder-e0baae67.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-d4a32957.js";import"./validationUtils-303b9101.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-ba09cce8.js";import"./dateUtils-29da93b8.js";import"./getTypedFormComponents-70ba8d25.js";import"./mapSøkerinfoDTO-89ebb576.js";import"./useFortsettSøknadSenere-923116af.js";import"./amplitude-982d123d.js";import"./api-1e1f8a8d.js";import"./apiInterceptor-89b892c5.js";import"./globalUtil-9d9e0ee4.js";import"./FormikFileUploader-a23b9102.js";import"./AttachmentList-d15eeb93.js";import"./Attachment-3d354798.js";import"./vedleggUtils-f19a3037.js";import"./Attachment-a8e5b8d1.js";import"./Skjemanummer-77149054.js";import"./formUtils-130fa58c.js";import"./useOnValidSubmit-401ec60a.js";import"./useSaveLoadedRoute-6c170719.js";import"./AnnenForelder-5c5d4f7f.js";import"./periodeUtils-d458e0a9.js";import"./Periodene-a8cc750e.js";import"./index-47edccfa.js";import"./RegistrertePersonalia-9a4063cf.js";import"./personUtils-e983231b.js";import"./useSøkerinfo-12a16e87.js";import"./links-b36d21ab.js";const e=V,n=W,qn={title:"steps/AnnenForelder",component:D,decorators:[z,q,H]},r=({context:C,søkerinfo:Y})=>l(Q,{mock:m=>{m.onPost("/storage/vedlegg").reply(200,{data:{}},{location:""}),m.onPost("/storage").reply(200,void 0)},children:l(J,{søknad:C,søkerinfo:Y,children:l(D,{})})}),o=r.bind({});o.args={context:{...n,søknad:{...n.søknad,barn:{...n.søknad.barn,fnr:"21091981146"}}},søkerinfo:e};const t=r.bind({});t.args={context:{...n,søknad:{...n.søknad,annenForelder:{kanIkkeOppgis:!1}}},søkerinfo:{søker:{...e,barn:[]}}};const a=r.bind({});a.args={context:{...n,søknad:{...n.søknad,annenForelder:{fornavn:"annen forelder",kanIkkeOppgis:!1}}},søkerinfo:{søker:{...e,barn:[]}}};const s=r.bind({});s.args={context:{...n,søknad:{...n.søknad,annenForelder:{fornavn:"Tom",fnr:"123456789",kanIkkeOppgis:!1}}},søkerinfo:{søker:{...e,barn:[{fornavn:"Ben",annenForelder:{fnr:"999999999"}}]}}};const c=r.bind({});c.args={context:{...n,søknad:{...n.søknad,barn:{...n.søknad.barn,fnr:"21091981146"},søkersituasjon:{situasjon:"fødsel",rolle:"far"}}},søkerinfo:{søker:{...e.søker,fornavn:"LEALAUS",etternavn:"BÆREPOSE",kjønn:"M",barn:[{fnr:"21091981146",fødselsdato:"2021-03-15",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"TALENTFULL",etternavn:"MYGG"},fornavn:"KLØKTIG",etternavn:"MIDTPUNKT",kjønn:"K"}]}}};const k=r.bind({});k.args={context:{...n,søknad:{...n.søknad,barn:{type:"ufødt",antallBarn:"1",termindato:"2023-05-05"},søkersituasjon:{situasjon:"fødsel",rolle:"mor"},annenForelder:{kanIkkeOppgis:!1}}},søkerinfo:{...e,søker:{...e.søker,barn:[]}}};const i=r.bind({});i.args={context:{...n,søknad:{...n.søknad,barn:{type:"ufødt",antallBarn:"1",termindato:"2023-05-05"},søkersituasjon:{situasjon:"fødsel",rolle:"medmor"},annenForelder:{kanIkkeOppgis:!1}}},søkerinfo:{...e,søker:{...e.søker,kjønn:"K",barn:[]}}};const d=r.bind({});d.args={context:{...n,søknad:{...n.søknad,barn:{type:"ufødt",antallBarn:"1",termindato:"2023-05-05"},søkersituasjon:{situasjon:"fødsel",rolle:"far"},annenForelder:{kanIkkeOppgis:!1}}},søkerinfo:{...e,søker:{...e.søker,fornavn:"LEALAUS",etternavn:"BÆREPOSE",kjønn:"M",barn:[]}}};const p=r.bind({});p.args={context:{...n,søknad:{...n.søknad,barn:{type:"ufødt",antallBarn:"1",termindato:"2023-05-05"},søkersituasjon:{situasjon:"fødsel",rolle:"far"},annenForelder:{kanIkkeOppgis:!1}}},søkerinfo:{...e,søker:{...e.søker,fornavn:"LEALAUS",etternavn:"BÆREPOSE",kjønn:"M",barn:[],sivilstand:{type:"GIFT"}}}};var f,M,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
                <AnnenForelder />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(g=(M=o.parameters)==null?void 0:M.docs)==null?void 0:g.source}}};var u,F,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
                <AnnenForelder />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(x=(F=t.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var A,S,P;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
                <AnnenForelder />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(P=(S=a.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var v,b,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`({
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
                <AnnenForelder />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var O,B,j;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`({
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
                <AnnenForelder />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(j=(B=c.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var U,E,I;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`({
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
                <AnnenForelder />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(I=(E=k.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var L,T,_;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`({
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
                <AnnenForelder />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var w,G,h;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`({
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
                <AnnenForelder />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(h=(G=d.parameters)==null?void 0:G.docs)==null?void 0:h.source}}};var K,N,R;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`({
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
                <AnnenForelder />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const zn=["Default","SkalOppgiPersonalia","SkalOppgiPersonaliaNavnMangler","SkalOppgiPersonaliaFnrPåAnnenForelderOgBarnErUlike","ForFar","MorUfødtBarn","MedmorUfødtBarn","FarUfødtBarn","FarGiftUfødtBarn"];export{o as Default,p as FarGiftUfødtBarn,d as FarUfødtBarn,c as ForFar,i as MedmorUfødtBarn,k as MorUfødtBarn,t as SkalOppgiPersonalia,s as SkalOppgiPersonaliaFnrPåAnnenForelderOgBarnErUlike,a as SkalOppgiPersonaliaNavnMangler,zn as __namedExportsOrder,qn as default};
//# sourceMappingURL=AnnenForelder.stories-fa8c875b.js.map
