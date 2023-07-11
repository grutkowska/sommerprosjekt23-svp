import { Sak } from 'app/types/Sak';
import './periodeTimeline.css';
import { PeriodeTimelineView, Soyle, Bane, AlleBaner } from './PeriodeTimelineView';
import { SvangerskapspengeSak } from 'app/types/SvangerskapspengeSak';
import { SøkerinfoDTOArbeidsforhold } from 'app/types/SøkerinfoDTO';
import { Arbeidsforhold, svpPerioder } from 'app/types/svpTypesSommer';
import dayjs from 'dayjs';
import { guid } from '@navikt/fp-common';

interface PeriodeTimelineProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    /**
     * Decides startingpoint in timeline.
     * Defaults to earliest date among the timeline periods.
     * @note Using this disables use of ZoomButtons. You will need to control zooming yourself.
     */
    sak: SvangerskapspengeSak;
    søkerArbeidsforhold: SøkerinfoDTOArbeidsforhold[] | undefined;
}

const getArbeidsgiverNavn = (
    søkerArbeidsforhold: SøkerinfoDTOArbeidsforhold[] | undefined,
    gjeldendeVedtakArbeidsforhold: Arbeidsforhold
): string => {
    if (gjeldendeVedtakArbeidsforhold.aktivitet.type === 'ORDINÆRT_ARBEID') {
        const arbeidsforhold = søkerArbeidsforhold
            ? søkerArbeidsforhold.find(
                  (i) => i.arbeidsgiverId === gjeldendeVedtakArbeidsforhold.aktivitet.arbeidsgiver.id
              )
            : undefined;
        return arbeidsforhold?.arbeidsgiverNavn || '';
        //return arbeidsforhold?.arbeidsgiverNavn.toLowerCase() || '';
    } else if (gjeldendeVedtakArbeidsforhold.aktivitet.type === 'FRILANS') {
        return 'frilanser';
    } else if (gjeldendeVedtakArbeidsforhold.aktivitet.type === 'SELVSTENDIG_NÆRINGSDRIVENDE') {
        return 'selvstendig næringsdrivende';
    } else {
        return 'Type not found';
    }
};

const getAntallSvangerskapsDager = (terminDato: string | undefined, antallMåneder: number) => {
    return dayjs(terminDato).diff(dayjs(terminDato).subtract(antallMåneder, 'M'), 'day');
};
const getPeriodeDag = (terminDato: string | undefined, dato: string) => {
    console.log(terminDato, dato);
    return dayjs(terminDato).diff(dayjs(dato), 'day');
};
//termindato - et absolut tall å regne ut ifra
const mapTilretteleggingTilPeriode = (
    periode: svpPerioder,
    termin: string | undefined,
    antallMnd: number
): { start: number; slutt: number } => {
    return {
        start: getAntallSvangerskapsDager(termin, antallMnd) - getPeriodeDag(termin, periode.fom),
        slutt: getAntallSvangerskapsDager(termin, antallMnd) - getPeriodeDag(termin, periode.tom),
    };
};
const mapSvpSakTilPeriodeTimeline = (
    sak: SvangerskapspengeSak,
    arbeidsforhold: SøkerinfoDTOArbeidsforhold[] | undefined
) => {
    return sak.gjeldendeVedtak?.arbeidsforhold.map((arbeidsgiver) => {
        return {
            navn: getArbeidsgiverNavn(arbeidsforhold, arbeidsgiver),
            perioder: arbeidsgiver.tilrettelegginger.map((periode): { start: number; slutt: number } => {
                return mapTilretteleggingTilPeriode(periode, sak.familiehendelse?.termindato, 10);
            }),
        };
    });
};

const PeriodeTimeline: React.FunctionComponent<PeriodeTimelineProps> = ({ sak, søkerArbeidsforhold }) => {
    const start = '2022-11-01';
    const slutt = '2022-12-01';
    const termin = '2023-01-01';
    const antallMnd = 10;
    const startTall = getAntallSvangerskapsDager(termin, antallMnd) - getPeriodeDag(termin, start);
    const sluttTall = getAntallSvangerskapsDager(termin, antallMnd) - getPeriodeDag(termin, slutt);
    //const startTall2 = getAntallSvangerskapsDager(termin, antallMnd) - getPeriodeDag(termin, '2022-09-01');
    //const sluttTall2 = getAntallSvangerskapsDager(termin, antallMnd) - getPeriodeDag(termin, '2022-10-01');
    const totalTall = getAntallSvangerskapsDager(termin, antallMnd);
    console.log('start: ', startTall, 'slutt: ', sluttTall, 'total: ', totalTall);
    const timelineData = mapSvpSakTilPeriodeTimeline(sak, søkerArbeidsforhold);
    return (
        <PeriodeTimelineView>
            <AlleBaner antall={timelineData!.length.toString()}>
                {timelineData!.map((bane, index) => {
                    return (
                        <Bane
                            key={guid()}
                            nr={(index + 1).toString()}
                            height={getAntallSvangerskapsDager(sak.familiehendelse?.termindato, antallMnd).toString()}
                        >
                            {bane.perioder.map((periode) => {
                                console.log(
                                    getAntallSvangerskapsDager(sak.familiehendelse?.termindato, antallMnd),
                                    getPeriodeDag(sak.familiehendelse?.termindato, periode.start.toString())
                                );
                                return (
                                    <Soyle
                                        key={guid()}
                                        start={periode.start.toString()}
                                        slutt={periode.slutt.toString()}
                                        farge="green"
                                    />
                                );
                            })}
                        </Bane>
                    );
                })}
            </AlleBaner>
        </PeriodeTimelineView>
    );
};

export default PeriodeTimeline;
