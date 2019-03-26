import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import getMessage from 'common/util/i18nUtils';
import JaNeiSpørsmål from '../components/ja-nei-spørsmål/JaNeiSpørsmål';
import EksternUrl from 'common/components/infoboks/EksternUrl';
import lenker from '../util/routing/lenker';
import { Validator } from 'common/lib/validation/types';

interface HarDuJobbetSomFrilansSiste10MndSpørsmålProps {
    harJobbetSomFrilansSiste10Mnd: boolean;
    onChange: (erFrilanser: boolean) => void;
    planInneholderFrilansaktivitet: boolean;
    validators?: Validator[];
}

type Props = HarDuJobbetSomFrilansSiste10MndSpørsmålProps & InjectedIntlProps;

const HarDuJobbetSomFrilansSiste10MndSpørsmål = (props: Props) => {
    const { onChange, harJobbetSomFrilansSiste10Mnd, planInneholderFrilansaktivitet, intl } = props;

    const validerFrilans = [
        {
            test: () => (planInneholderFrilansaktivitet ? harJobbetSomFrilansSiste10Mnd === true : true),
            failText: getMessage(intl, 'valideringsfeil.frilans.måBesvares')
        }
    ];

    return (
        <JaNeiSpørsmål
            spørsmål={getMessage(intl, 'harDuJobbetSomFrilansSiste10Mnd.spørsmål')}
            navn="harJobbetSomFrilansSiste10Mnd"
            valgtVerdi={harJobbetSomFrilansSiste10Mnd}
            onChange={(verdi) => onChange(verdi)}
            clsName="frilanseSiste10mnd"
            hjelpetekst={
                <EksternUrl
                    tekst="harDuJobbetSomFrilansSiste10Mnd.spørsmål.infoboksTekst"
                    url={lenker.frilanserInfoBoks}
                    lenkeTekst="hjemmeside"
                />
            }
            validators={validerFrilans}
        />
    );
};

export default injectIntl(HarDuJobbetSomFrilansSiste10MndSpørsmål);
