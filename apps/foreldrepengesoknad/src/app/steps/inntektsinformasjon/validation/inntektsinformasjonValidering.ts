import { isISODateString } from '@navikt/ds-datepicker';
import { hasValue, intlUtils } from '@navikt/fp-common';
import dayjs from 'dayjs';
import { IntlShape } from 'react-intl';

export const validateFrilansoppstartsDato = (intl: IntlShape) => (oppstartsdato: string) => {
    if (!hasValue(oppstartsdato)) {
        return intlUtils(intl, 'valideringsfeil.inntektsinformasjon.frilansoppstartsDato.påkrevd');
    }

    if (!isISODateString(oppstartsdato)) {
        return intlUtils(intl, 'valideringsfeil.inntektsinformasjon.frilansoppstartsDato.ugyldigDatoFormat');
    }

    if (dayjs().isBefore(dayjs(oppstartsdato), 'day')) {
        return intlUtils(intl, 'valideringsfeil.inntektsinformasjon.frilansoppstartsDato.kanIkkeVæreFremITid');
    }

    return undefined;
};
