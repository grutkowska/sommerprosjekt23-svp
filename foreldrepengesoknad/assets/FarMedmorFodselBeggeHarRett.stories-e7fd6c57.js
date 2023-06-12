import{j as s}from"./jsx-runtime-670450c2.js";import{w as S}from"./withIntl-e344dbbf.js";import{w as F}from"./withRouter-28f7e065.js";import{w as O,F as A}from"./ForeldrepengerStateMock-2db4abe4.js";import{A as N}from"./AxiosMock-c2718ae9.js";import{R as U}from"./api-dc1b3239.js";import{s as l,a as f}from"./stønadskontoDeltUttak100-ce558aaf.js";import{U as g}from"./UttaksplanInfo-8cf5e2ff.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-48f85a36.js";import"./validationUtils-00d66cf2.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-54892a90.js";import"./dateUtils-becbdc23.js";import"./getTypedFormComponents-a42e978b.js";import"./mapSøkerinfoDTO-adbe2fb9.js";import"./useFortsettSøknadSenere-d27349ce.js";import"./amplitude-982d123d.js";import"./globalUtil-9d9e0ee4.js";import"./apiInterceptor-0530a171.js";import"./AnnenForelder-5c5d4f7f.js";import"./personUtils-c468cfc0.js";import"./Personkort-28ae0a51.js";import"./periodeUtils-1a4dc73e.js";import"./Dekningsgrad-fced8842.js";import"./useSøkerinfo-4e57f087.js";import"./index-47edccfa.js";import"./annenForelderUtils-ee957f44.js";import"./constants-c4bc2eb8.js";import"./LenkeKnapp-ee13c829.js";import"./InfoOmSøknaden-3afdd360.js";import"./Sirkelmaske-ec3a109e.js";import"./Foreldrepar-6ec4b3fc.js";import"./InnholdMedIllustrasjon-d5122f52.js";import"./links-b36d21ab.js";import"./Periodene-dd720f95.js";import"./useOnValidSubmit-0d8cf87d.js";import"./useSaveLoadedRoute-352242ea.js";import"./vedleggUtils-c5e558a5.js";import"./Attachment-a8e5b8d1.js";import"./eksisterendeSakUtils-8ace25cf.js";import"./velkommenUtils-40bb4bde.js";import"./Fieldset-b0352ef9.js";import"./formUtils-b1c6ed9d.js";const T={søker:{fnr:"19047815714",fornavn:"TALENTFULL",etternavn:"MYGG",kjønn:"M",fødselsdato:"1978-04-19",barn:[{fnr:"21091981146",fødselsdato:"2021-03-15",annenForelder:{fnr:"12038517080",fødselsdato:"1985-03-12",fornavn:"LEALAUS",etternavn:"BÆREPOSE"},fornavn:"KLØKTIG",etternavn:"MIDTPUNKT",kjønn:"M"}]}},R=4,I="/soknad/uttaksplan-info",L={søknad:{type:"foreldrepenger",harGodkjentVilkår:!0,søkersituasjon:{situasjon:"fødsel",rolle:"far"},barn:{type:"født",fødselsdatoer:["2021-06-14"],antallBarn:"1",datoForAleneomsorg:"",dokumentasjonAvAleneomsorg:[]},annenForelder:{etternavn:"dfg",fornavn:"dfg",fnr:"02068629902",utenlandskFnr:!1,kanIkkeOppgis:!1,harRettPåForeldrepengerINorge:!0,erInformertOmSøknaden:!0},søker:{erAleneOmOmsorg:!1,språkkode:"nb"},informasjonOmUtenlandsopphold:{tidligereOpphold:[],senereOpphold:[]},erEndringssøknad:!1},version:R,currentRoute:I,søknadGjelderEtNyttBarn:!0},x="/innsyn/v2/annenPartVedtak",a="/uttak-url/konto",u=T,r=L,Lt={title:"steps/uttaksplan-info/FarMedmorFødselBeggeHarRett",component:g,decorators:[F,S,O]},M=o=>s(N,{mock:n=>{n.onPost(x).replyOnce(200,void 0,U.FINISHED),n.onGet(a).replyOnce(200,o.stønadskonto100),n.onGet(a).replyOnce(200,o.stønadskonto80)},children:s(A,{søknad:o.context,søkerinfo:o.søkerinfo,children:s(g,{})})}),t=M.bind({});t.args={stønadskonto100:l,stønadskonto80:f,context:r,søkerinfo:u};const e=M.bind({});e.args={stønadskonto100:l,stønadskonto80:f,context:{...r,søknad:{...r.søknad,barn:{...r.søknad.barn,fødselsdatoer:["2022-08-02"]}}},søkerinfo:u};var p,i,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost(UTTAKSPLAN_ANNEN_URL).replyOnce(200, undefined, RequestStatus.FINISHED);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto100);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto80);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={(args.context as ForeldrepengesøknadContextState)} søkerinfo={(args.søkerinfo as SøkerinfoDTO)}>
                <UttaksplanInfo />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var k,m,c;e.parameters={...e.parameters,docs:{...(k=e.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost(UTTAKSPLAN_ANNEN_URL).replyOnce(200, undefined, RequestStatus.FINISHED);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto100);
    apiMock.onGet(STØNADSKONTO_URL).replyOnce(200, args.stønadskonto80);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={(args.context as ForeldrepengesøknadContextState)} søkerinfo={(args.søkerinfo as SøkerinfoDTO)}>
                <UttaksplanInfo />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const xt=["UttaksplanInfoFarMedmorFødselBeggeHarRett","UttaksplanInfoFarMedmorFødselBeggeHarRettFødselEtterWLB"];export{t as UttaksplanInfoFarMedmorFødselBeggeHarRett,e as UttaksplanInfoFarMedmorFødselBeggeHarRettFødselEtterWLB,xt as __namedExportsOrder,Lt as default};
//# sourceMappingURL=FarMedmorFodselBeggeHarRett.stories-e7fd6c57.js.map
