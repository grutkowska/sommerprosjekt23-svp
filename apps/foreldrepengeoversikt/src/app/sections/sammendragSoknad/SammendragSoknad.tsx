import PeriodeKort from 'app/components/periode-kort/PeriodeKort';

import { SvangerskapspengeSak } from 'app/types/SvangerskapspengeSak';
import { SøkerinfoDTO, SøkerinfoDTOArbeidsforhold } from 'app/types/SøkerinfoDTO';

import { guid } from '@navikt/fp-common';

import { Arbeidsforhold } from 'app/types/svpTypesSommer';
import { ArbeidsgiverInfo } from 'app/types/ArbeidsgiverInfo';
import { ArbeidsgiverInfoType } from 'app/types/ArbeidsgiverInfoType';
//import { intlUtils } from '@navikt/fp-common';
//import { IntlShape, useIntl } from 'react-intl';

//import { FormattedMessage } from 'react-intl';

interface Props {
    sak: SvangerskapspengeSak;
    søker: SøkerinfoDTO;
}

const getArbeidsgiverNavn = (
    søkerArbeidsforhold: SøkerinfoDTOArbeidsforhold[] | undefined,
    gjeldendeVedtakArbeidsforhold: Arbeidsforhold
): ArbeidsgiverInfo => {
    if (gjeldendeVedtakArbeidsforhold.aktivitet.type === 'ORDINÆRT_ARBEID') {
        const arbeidsforhold = søkerArbeidsforhold
            ? søkerArbeidsforhold.find(
                  (i) => i.arbeidsgiverId === gjeldendeVedtakArbeidsforhold.aktivitet.arbeidsgiver.id
              )
            : undefined;
        return {
            navn: arbeidsforhold?.arbeidsgiverNavn || '',
            id: arbeidsforhold?.arbeidsgiverId,
            type: ArbeidsgiverInfoType.ORGANISASJON,
        };
    } else if (gjeldendeVedtakArbeidsforhold.aktivitet.type === 'FRILANS') {
        return {
            navn: 'frilans',
            type: ArbeidsgiverInfoType.PRIVAT,
        };
    } else if (gjeldendeVedtakArbeidsforhold.aktivitet.type === 'SELVSTENDIG_NÆRINGSDRIVENDE') {
        return {
            navn: 'selvstendig næringsdrivende',
            type: ArbeidsgiverInfoType.PRIVAT,
        };
    } else {
        return {
            navn: 'Type not found',
            type: ArbeidsgiverInfoType.PRIVAT,
        };
    }
};

export const SammendragSoknad: React.FC<Props> = ({ sak, søker }) => {
    //const intl = useIntl();

    if ('åpenBehandling' in sak) {
        return (
            <div>
                {sak.åpenBehandling &&
                    sak.åpenBehandling.søknad &&
                    sak.åpenBehandling.søknad.arbeidsforhold.map((arbeidsforhold, index) => {
                        return (
                            <PeriodeKort
                                key={guid()}
                                title={getArbeidsgiverNavn(søker.arbeidsforhold, arbeidsforhold)}
                                ferdigBehandlet={false}
                                svpPerioder={arbeidsforhold.tilrettelegginger}
                                oppholdsPerioder={arbeidsforhold.oppholdsperioder}
                                arbeidgiverIndex={index + 1}
                            ></PeriodeKort>
                        );
                    })}
            </div>
        );
    } else if (sak.sakAvsluttet) {
        return (
            <div>
                <h2>Din søknad er avslått</h2>
                {
                    <PeriodeKort
                        title={{
                            navn: 'Avslags årsak: ' + sak.gjeldendeVedtak?.avslagÅrsak,
                            type: ArbeidsgiverInfoType.PRIVAT,
                        }}
                        ferdigBehandlet={true}
                    ></PeriodeKort>
                }
            </div>
        );
    } else if ('gjeldendeVedtak' in sak) {
        return (
            <div>
                {sak.gjeldendeVedtak &&
                    sak.gjeldendeVedtak.arbeidsforhold.map((arbeidsforhold, index) => {
                        return (
                            <PeriodeKort
                                key={guid()}
                                title={getArbeidsgiverNavn(søker.arbeidsforhold, arbeidsforhold)}
                                ferdigBehandlet={true}
                                svpPerioder={arbeidsforhold.tilrettelegginger}
                                oppholdsPerioder={arbeidsforhold.oppholdsperioder}
                                arbeidgiverIndex={index + 1}
                            ></PeriodeKort>
                        );
                    })}
            </div>
        );
    } else return <></>;
};
