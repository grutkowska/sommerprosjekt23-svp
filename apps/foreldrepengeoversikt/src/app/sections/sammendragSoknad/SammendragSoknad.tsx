import PeriodeKort from 'app/components/periode-kort/PeriodeKort';
import { SvangerskapspengeSak } from 'app/types/SvangerskapspengeSak';
import { SøkerinfoDTO } from 'app/types/SøkerinfoDTO';
import { bemUtils, guid } from '@navikt/fp-common';
import { arbeidsgiverFargerPrimær, getArbeidsgiverNavn } from 'app/components/periode-timeline/PeriodeTimeline';

import SeAllePerioder from 'app/components/se-alle-perioder/seAllePerioder';

import './sammendrag-soknad.css';

interface Props {
    sak: SvangerskapspengeSak;
    søker: SøkerinfoDTO;
}

export const SammendragSoknad: React.FC<Props> = ({ sak, søker }) => {
    //const intl = useIntl();
    const bem = bemUtils('periodeKort-felles-div');

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
                                arbeidsgiverFarge={arbeidsgiverFargerPrimær[index]}
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
            <>
                <div className={bem.element('periodekort')}>
                    {sak.gjeldendeVedtak &&
                        sak.gjeldendeVedtak.arbeidsforhold.map((arbeidsforhold, index) => {
                            return (
                                <>
                                    <PeriodeKort
                                        key={guid()}
                                        arbeidsgiverNavn={getArbeidsgiverNavn(
                                            søker.arbeidsforhold,
                                            arbeidsforhold.aktivitet.type,
                                            arbeidsforhold?.aktivitet?.arbeidsgiver?.id
                                        )}
                                        arbeidsgiverFarge={arbeidsgiverFargerPrimær[index]}
                                        ferdigBehandlet={true}
                                        svpPerioder={arbeidsforhold.tilrettelegginger}
                                        oppholdsPerioder={arbeidsforhold.oppholdsperioder}
                                        arbeidgiverIndex={index + 1}
                                    ></PeriodeKort>
                                    {sak!.gjeldendeVedtak!.arbeidsforhold.length > index + 1 ? (
                                        <div key={guid()} className={bem.element('skillelinje')}>
                                            {' '}
                                        </div>
                                    ) : null}
                                </>
                            );
                        })}
                </div>
                <div style={{ margin: '10px' }}></div>
                <div style={{ display: 'flex', justifyContent: 'end' }}>{SeAllePerioder()}</div>
            </>
        );
    } else return <></>;
};
