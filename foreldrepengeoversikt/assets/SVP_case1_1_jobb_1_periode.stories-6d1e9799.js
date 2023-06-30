import{j as i}from"./index-dbb5eeba.js";import{A as t,s as a,a as p,b as l,c as d,d as c,t as k,m}from"./AppContainer-77351a14.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-4d501b15.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";const j={title:"Case 1",component:t},y=()=>{const e=new a(p);return e.onGet("/sokerinfo").reply(200,l),e.onGet("/innsyn/v2/saker").reply(200,d),e.onGet("/dokument/alle").reply(200,c),e.onGet("/innsyn/tidslinje").reply(200,k),e.onGet("/historikk/vedlegg").reply(200,m),e.onGet("/minidialog").reply(200,[]),e.onPost("/soknad/ettersen").reply(200,{}),i(t,{})},n=y.bind({});var o,r,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const apiMock = new MockAdapter(AxiosInstance);
  apiMock.onGet('/sokerinfo').reply(200, søkerinfo);
  apiMock.onGet('/innsyn/v2/saker').reply(200, saker);
  apiMock.onGet('/dokument/alle').reply(200, dokumenter);
  apiMock.onGet('/innsyn/tidslinje').reply(200, tidslinjeHendelser);
  apiMock.onGet('/historikk/vedlegg').reply(200, manglendeVedlegg);
  apiMock.onGet('/minidialog').reply(200, []);
  apiMock.onPost('/soknad/ettersen').reply(200, {});
  return <AppContainer />;
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const x=["VisApp2"];export{n as VisApp2,x as __namedExportsOrder,j as default};
//# sourceMappingURL=SVP_case1_1_jobb_1_periode.stories-6d1e9799.js.map
