import { StoryFn } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import EngangsstønadContextProvider from '../../context/EngangsstønadContext';
import Umyndig from './Umyndig';
import IntlProvider from 'intl/IntlProvider';

import '@navikt/ds-css';
import '../../styles/globals.less';

export default {
    title: 'Umyndig',
    component: Umyndig,
    decorators: [withRouter],
};

const Template: StoryFn<any> = () => {
    return (
        <EngangsstønadContextProvider>
            <IntlProvider språkkode="nb">
                <Umyndig
                    person={{
                        fnr: '11111111111',
                        fornavn: 'Henrikke',
                        etternavn: 'Ibsen',
                        mellomnavn: '',
                        kjønn: 'K',
                        fødselsdato: '1979-01-28',
                        bankkonto: {
                            kontonummer: '49875234987',
                            banknavn: 'Storebank',
                        },
                        adresse: '123 Oslo',
                    }}
                />
            </IntlProvider>
        </EngangsstønadContextProvider>
    );
};

export const VisSide = Template.bind({});
