import { StoryFn } from '@storybook/react';
import MockAdapter from 'axios-mock-adapter';

import søkerinfo from './../storybook/storyData/svp/case12_2_jobber_frilanser_og_sykepleie/sokerinfo.json';
import saker from './../storybook/storyData/svp/case12_2_jobber_frilanser_og_sykepleie/saker.json';
import dokumenter from './../storybook/storyData/svp/case12_2_jobber_frilanser_og_sykepleie/dokumenter.json';
import tidslinjeHendelser from './../storybook/storyData/svp/case12_2_jobber_frilanser_og_sykepleie/tidslinjeHendelser.json';
import manglendeVedlegg from './../storybook/storyData/svp/case12_2_jobber_frilanser_og_sykepleie/manglendeVedlegg.json';

import AppContainer from './AppContainer';
import { AxiosInstance } from './api/apiInterceptor';

import '@navikt/ds-css';

export default {
    title: 'SVP_case12_2_jobber_frilanser_og_sykepleie',
    component: AppContainer,
    parameters: {
        mockData: [
            {
                url: 'test/innsyn/v2/saker/oppdatert',
                method: 'GET',
                status: 200,
                response: {
                    data: true,
                },
            },
        ],
    },
};

const Template: StoryFn<any> = () => {
    const apiMock = new MockAdapter(AxiosInstance);
    apiMock.onGet('/sokerinfo').reply(200, søkerinfo);
    apiMock.onGet('/innsyn/v2/saker').reply(200, saker);
    apiMock.onGet('/dokument/alle').reply(200, dokumenter);
    apiMock.onGet('/innsyn/tidslinje').reply(200, tidslinjeHendelser);
    apiMock.onGet('/historikk/vedlegg').reply(200, manglendeVedlegg);
    apiMock.onGet('/minidialog').reply(200, []);
    apiMock.onPost('/soknad/ettersen').reply(200, {});

    return <AppContainer />;
};

export const VisApp12 = Template.bind({});