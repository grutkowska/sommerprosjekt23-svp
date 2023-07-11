import { Sak } from 'app/types/Sak';
import './periodeTimeline.css';
import { PeriodeTimelineView, Soyle, Bane, AlleBaner } from './PeriodeTimelineView';
import { SvangerskapspengeSak } from 'app/types/SvangerskapspengeSak';
import { SøkerinfoDTOArbeidsforhold } from 'app/types/SøkerinfoDTO';
import { Arbeidsforhold, svpPerioder } from 'app/types/svpTypesSommer';
import dayjs from 'dayjs';

interface PeriodeTimelineProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    /**
     * Decides startingpoint in timeline.
     * Defaults to earliest date among the timeline periods.
     * @note Using this disables use of ZoomButtons. You will need to control zooming yourself.
     */
    sak: SvangerskapspengeSak;
    søkerArbeidsforhold: SøkerinfoDTOArbeidsforhold[];
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

const getAntallSvangerskapsDager = (terminDato: string, antallMåneder: number) => {
    return dayjs(terminDato).diff(dayjs(terminDato).subtract(antallMåneder, 'M'), 'day');
};
const getPeriodeDag = (terminDato: string, dato: string) => {
    return dayjs(terminDato).diff(dayjs(dato), 'day');
};
//termindato - et absolut tall å regne ut ifra
const mapTilretteleggingTilPeriode = (periode: svpPerioder) => {
    return {
        start: periode.fom,
        slutt: periode.tom,
    };
};
const mapSvpSakTilPeriodeTimeline = (sak: SvangerskapspengeSak, arbeidsforhold: SøkerinfoDTOArbeidsforhold[]) => {
    return sak.gjeldendeVedtak?.arbeidsforhold.map((arbeidsgiver) => {
        return {
            navn: getArbeidsgiverNavn(arbeidsforhold, arbeidsgiver),
            perioder: arbeidsgiver.tilrettelegginger.map((periode) => {
                mapTilretteleggingTilPeriode(periode);
            }),
        };
    });
};

const PeriodeTimeline: React.FunctionComponent<PeriodeTimelineProps> = ({ sak, søkerArbeidsforhold }) => {
    const start = '2022-11-01';
    const slutt = '2022-12-01';
    const termin = '2023-01-01';
    const antallMnd = 6;
    const startTall = getAntallSvangerskapsDager(termin, antallMnd) - getPeriodeDag(termin, start);
    const sluttTall = getAntallSvangerskapsDager(termin, antallMnd) - getPeriodeDag(termin, slutt);
    const startTall2 = getAntallSvangerskapsDager(termin, antallMnd) - getPeriodeDag(termin, '2022-09-01');
    const sluttTall2 = getAntallSvangerskapsDager(termin, antallMnd) - getPeriodeDag(termin, '2022-10-01');
    const totalTall = getAntallSvangerskapsDager(termin, antallMnd);
    console.log('start: ', startTall, 'slutt: ', sluttTall, 'total: ', totalTall);
    return (
        <PeriodeTimelineView>
            <AlleBaner antall="4">
                <Bane nr="1" height={getAntallSvangerskapsDager(termin, antallMnd).toString()}>
                    <Soyle start={startTall.toString()} slutt={sluttTall.toString()} />
                    <Soyle start={startTall2.toString()} slutt={sluttTall2.toString()} />
                </Bane>
            </AlleBaner>
        </PeriodeTimelineView>
    );
};

export default PeriodeTimeline;
