import PeriodeKort from 'app/components/periode-kort/PeriodeKort';
import { SvangerskapspengeSak } from 'app/types/SvangerskapspengeSak';
import { SøkerinfoDTO } from 'app/types/SøkerinfoDTO';
import { guid } from '@navikt/fp-common';
import { arbeidsgiverFarger, getArbeidsgiverNavn } from 'app/components/periode-timeline/PeriodeTimeline';
import { fargeRekkefølgeForTag } from 'app/components/periode-timeline/PeriodeTimelineView';

interface Props {
    sak: SvangerskapspengeSak;
    søker: SøkerinfoDTO;
}

/*
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
            navn: 'Frilanser',
            type: ArbeidsgiverInfoType.PRIVAT,
        };
    } else if (gjeldendeVedtakArbeidsforhold.aktivitet.type === 'SELVSTENDIG_NÆRINGSDRIVENDE') {
        return {
            navn: 'Selvstendig næringsdrivende',
            type: ArbeidsgiverInfoType.PRIVAT,
        };
    } else {
        return {
            navn: 'Type not found',
            type: ArbeidsgiverInfoType.PRIVAT,
        };
    }
};
*/

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
                                arbeidsgiverNavn={getArbeidsgiverNavn(
                                    søker.arbeidsforhold,
                                    arbeidsforhold.aktivitet.type,
                                    arbeidsforhold?.aktivitet?.arbeidsgiver?.id
                                )}
                                arbeidsgiverFarge={arbeidsgiverFarger[index]}
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
                        arbeidsgiverNavn={'Avslags årsak: ' + sak.gjeldendeVedtak?.avslagÅrsak.toString()}
                        ferdigBehandlet={true}
                    ></PeriodeKort>
                }
            </div>
        );
    } else if ('gjeldendeVedtak' in sak) {
        return (
            <div //className='periodeKortFellesDiv'
            /*
                style={{
                    borderColor: 'black',
                    backgroundColor: 'white',
                    border: '5px solid',
                }}
                */
            >
                {sak.gjeldendeVedtak &&
                    sak.gjeldendeVedtak.arbeidsforhold.map((arbeidsforhold, index) => {
                        return (
                            <PeriodeKort
                                key={guid()}
                                arbeidsgiverNavn={getArbeidsgiverNavn(
                                    søker.arbeidsforhold,
                                    arbeidsforhold.aktivitet.type,
                                    arbeidsforhold?.aktivitet?.arbeidsgiver?.id
                                )}
                                arbeidsgiverFarge={arbeidsgiverFarger[index]}
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
