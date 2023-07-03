import{j as r}from"./jsx-runtime-670450c2.js";import{w as a}from"./withIntl-cde7a662.js";import{w as c}from"./withRouter-f4e9be70.js";import{w as d,F as k}from"./ForeldrepengerStateMock-abe1d834.js";import{A as l}from"./AxiosMock-344dd773.js";import{_ as f}from"./søkerinfoKvinneMedEttBarn-8f2bf17a.js";import{_ as M}from"./soknadMedEttBarn-66625a0c.js";import{U as i}from"./Utenlandsopphold-40cb8965.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./IntlProvider-d4a32957.js";import"./validationUtils-303b9101.js";import"./index-4d501b15.js";import"./Link-40b5f3c6.js";import"./clsx.m-266f4de0.js";import"./index-7e4e529b.js";import"./Label-bbf0f831.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./useSøknad-ba09cce8.js";import"./dateUtils-29da93b8.js";import"./getTypedFormComponents-70ba8d25.js";import"./mapSøkerinfoDTO-89ebb576.js";import"./useFortsettSøknadSenere-923116af.js";import"./amplitude-982d123d.js";import"./api-1e1f8a8d.js";import"./apiInterceptor-89b892c5.js";import"./globalUtil-9d9e0ee4.js";import"./useOnValidSubmit-401ec60a.js";import"./useSaveLoadedRoute-6c170719.js";import"./AnnenForelder-5c5d4f7f.js";import"./vedleggUtils-f19a3037.js";import"./Attachment-a8e5b8d1.js";import"./periodeUtils-d458e0a9.js";import"./Periodene-a8cc750e.js";import"./index-47edccfa.js";import"./formUtils-130fa58c.js";const x=f,u=M,eo={title:"steps/Utenlandsopphold",component:i,decorators:[c,a,d]},h=({context:n,søkerinfo:s})=>r(l,{mock:m=>{m.onPost("/storage").reply(200,void 0)},children:r(k,{søknad:n,søkerinfo:s,children:r(i,{})})}),o=h.bind({});o.args={context:u,søkerinfo:x};var t,e,p;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`({
  context,
  søkerinfo
}) => {
  const restMock = (apiMock: MockAdapter) => {
    apiMock.onPost('/storage').reply(200, undefined);
  };
  return <AxiosMock mock={restMock}>
            <ForeldrepengerStateMock søknad={context} søkerinfo={søkerinfo}>
                <Utenlandsopphold />
            </ForeldrepengerStateMock>
        </AxiosMock>;
}`,...(p=(e=o.parameters)==null?void 0:e.docs)==null?void 0:p.source}}};const po=["Default"];export{o as Default,po as __namedExportsOrder,eo as default};
//# sourceMappingURL=Utenlandsopphold.stories-ff81f4b3.js.map
