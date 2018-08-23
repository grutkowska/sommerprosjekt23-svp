import * as React from 'react';
import InjectedIntlProps = ReactIntl.InjectedIntlProps;
import { injectIntl } from 'react-intl';
import getMessage from 'common/util/i18nUtils';

import DocumentTitle from 'react-document-title';
import Applikasjonsside from '../Applikasjonsside';
import Feilsidemelding from 'common/components/feilsidemelding/Feilsidemelding';
import { Søkerinfo } from '../../../types/søkerinfo';

const URL_PAPIRSØKNAD =
    'https://www.nav.no/no/Person/Skjemaer-for-privatpersoner/Skjemaer/Familie/' +
    'foreldrepenger-og-engangsstonad/Foreldrepenger+og+engangsst%C3%B8nad?method=mail&veiledertype=privatperson';

interface OwnProps {
    søkerinfo: Søkerinfo;
}

type Props = OwnProps & InjectedIntlProps;

const IkkeMyndig: React.StatelessComponent<Props> = (props: Props) => {
    const { intl, søkerinfo } = props;
    return (
        <Applikasjonsside visSpråkvelger={false} margin={false}>
            <DocumentTitle title={getMessage(intl, 'søknad.pageheading')} />
            <Feilsidemelding
                illustrasjon={{
                    tittel: getMessage(intl, 'ikkeMyndig.tittel', {
                        navn: søkerinfo.person.fornavn.toLowerCase()
                    }),
                    tekst: getMessage(intl, 'ikkeMyndig.ingress'),
                    lenke: {
                        url: URL_PAPIRSØKNAD,
                        tekst: getMessage(intl, 'ikkeMyndig.boblelenketekst')
                    }
                }}
                tittel={getMessage(intl, 'velkommen.tittel')}
                ingress={getMessage(intl, 'velkommen.ingress')}
            />
        </Applikasjonsside>
    );
};

export default injectIntl(IkkeMyndig);
