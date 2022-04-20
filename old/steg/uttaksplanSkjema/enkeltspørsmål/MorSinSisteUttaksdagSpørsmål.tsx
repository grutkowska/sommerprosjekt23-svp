import * as React from 'react';
import DatoInput from 'common/components/skjema/wrappers/DatoInput';
import getMessage from 'common/util/i18nUtils';
import { useIntl } from 'react-intl';
import UttaksplanSkjemaSpørsmål, { UttaksplanSkjemaspørsmålProps } from '../UttaksplanSkjemaSpørsmål';
import { uttaksplanDatoavgrensninger } from '../../../util/validation/uttaksplan/uttaksplanDatoavgrensninger';
import { getNavnGenitivEierform } from '../../../util/tekstUtils';
import { erGyldigDato } from 'app/util/validation/common';

interface OwnProps {
    navnMor: string;
    familiehendelsesdato: Date;
}

type Props = OwnProps & UttaksplanSkjemaspørsmålProps;

const MorSinSisteUttaksdagSpørsmål: React.FunctionComponent<Props> = ({ visible, navnMor, familiehendelsesdato }) => {
    const intl = useIntl();
    return (
        <UttaksplanSkjemaSpørsmål
            visible={visible}
            render={(data, onChange) => (
                <DatoInput
                    name="morSinSisteUttaksdag"
                    id="morSinSisteUttaksdag"
                    label={getMessage(intl, 'spørsmål.morSinSisteUttaksdag.label', {
                        navnMor: getNavnGenitivEierform(navnMor, intl.locale),
                    })}
                    onChange={(morSinSisteUttaksdag) => onChange({ morSinSisteUttaksdag })}
                    dato={data.morSinSisteUttaksdag}
                    datoAvgrensinger={uttaksplanDatoavgrensninger.morsSisteUttaksdag(familiehendelsesdato)}
                    validators={
                        data.morSinSisteUttaksdag
                            ? [
                                  erGyldigDato(
                                      data.morSinSisteUttaksdag,
                                      getMessage(intl, 'valideringsfeil.spørsmål.morSinSisteUttaksdag.gyldigDato', {
                                          navnMor: getNavnGenitivEierform(navnMor, intl.locale),
                                      })
                                  ),
                              ]
                            : undefined
                    }
                />
            )}
        />
    );
};

export default MorSinSisteUttaksdagSpørsmål;
