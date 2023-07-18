import './periodeTimeline.css';
import {
    PeriodeTimelineView,
    Soyle,
    AlleBaner,
    YAkseAlleElementer,
    YAkseElement,
    BaneHeaderBoks,
    BaneHeader,
    DatoPil,
    DatoPilBane,
} from './PeriodeTimelineView';
import { SvangerskapspengeSak } from 'app/types/SvangerskapspengeSak';
import { SøkerinfoDTOArbeidsforhold } from 'app/types/SøkerinfoDTO';
import { Arbeidsforhold, svpPerioder } from 'app/types/svpTypesSommer';
import dayjs, { Dayjs } from 'dayjs';
import { guid } from '@navikt/fp-common';
import { formaterDato, get9månederFraTerminDato } from 'app/utils/dateUtils';
import { useDatoContext } from 'app/context/periodeTimelineContext';

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

const PeriodeTimeline: React.FunctionComponent<PeriodeTimelineProps> = ({ sak, søkerArbeidsforhold }) => {
    const { valgtDato, setValgtDato } = useDatoContext();
    const antallMnd = 9;
    const sluttDatoForSVP = dayjs(sak.familiehendelse?.termindato).subtract(21, 'day');
    const baneHoyde = getAntallSvangerskapsDager(sluttDatoForSVP.toString(), antallMnd);
    const timelineData = mapSvpSakTilPeriodeTimeline(sak, søkerArbeidsforhold);
    let currentPos = 0;
    const handlePosChange = (posX: number, posY: number) => {
        console.log('handlePosChange; totalHoyde: ', baneHoyde);
        //setState hindrer handleDragevent å kjøre
        setValgtDato(konverterGridPosTilDato(posY, dayjs(sak.familiehendelse?.termindato), baneHoyde));
    };
    const farger = ['blue', 'green'];
    console.log(
        'Er du der: ',
        dayjs(sak.familiehendelse?.termindato).daysInMonth() -
            parseInt(formaterDato(sak.familiehendelse?.termindato, 'D'))
    );

    return timelineData ? (
        <PeriodeTimelineView>
            <BaneHeaderBoks antall={timelineData?.length}>
                {timelineData?.map((arbeidsforhold, index) => {
                    return (
                        <BaneHeader key={guid()} nr={index + 1}>
                            {arbeidsforhold.navn}
                        </BaneHeader>
                    );
                })}
            </BaneHeaderBoks>
            <YAkseAlleElementer className="YAkseAlleElementer" height={baneHoyde.toString()}>
                {get9månederFraTerminDato(sak.familiehendelse?.termindato, antallMnd).map((månedNavn) => {
                    const daysInMonth = dayjs(månedNavn).daysInMonth();
                    let mndFormat = '';
                    {
                        if (dayjs().isSame(månedNavn, 'month'))
                            mndFormat = ' fkfkf '; //formaterDato(dayjs().toString(), 'DD-MMM');
                        else mndFormat = formaterDato(månedNavn, 'MMM');
                    }
                    //console.log((currentPos1 += daysInMonth) - daysInMonth);
                    if (dayjs().isSame(månedNavn, 'month')) {
                        return (
                            <YAkseElement
                                key={guid()}
                                startPos={(currentPos += daysInMonth) - daysInMonth}
                                height={daysInMonth}
                            >
                                <p
                                    style={{
                                        color: 'white',
                                    }}
                                >
                                    {mndFormat}
                                </p>
                            </YAkseElement>
                        );
                    } else {
                        return (
                            <YAkseElement
                                key={guid()}
                                startPos={(currentPos += daysInMonth) - daysInMonth}
                                height={daysInMonth}
                            >
                                <p
                                    style={{
                                        color: 'lightgrey',
                                    }}
                                >
                                    {mndFormat}
                                </p>
                            </YAkseElement>
                        );
                    }
                })}
            </YAkseAlleElementer>
            <AlleBaner antall={timelineData!.length.toString()} height={baneHoyde}>
                {timelineData!.map((bane, index) => {
                    return (
                        <>
                            {bane.perioder.map((periode) => {
                                return (
                                    <Soyle
                                        key={guid()}
                                        start={periode.start.toString()}
                                        slutt={periode.slutt.toString()}
                                        farge={farger[index]}
                                        columnNr={(index + 1).toString()}
                                    />
                                );
                            })}
                        </>
                    );
                })}
            </AlleBaner>
            <DatoPilBane height={baneHoyde}>
                <DatoPil key={guid()} nr={baneHoyde} nrColumns={timelineData!.length} onPosChange={handlePosChange}>
                    {formaterDato(valgtDato.toString(), 'DD-MMM')}
                </DatoPil>
            </DatoPilBane>
        </PeriodeTimelineView>
    ) : (
        <div></div>
    );
};

const konverterGridPosTilDato = (gridPos: number, sluttDato: Dayjs, totalGrid: number) => {
    console.log('KonverterGridDato; gridPos: ', gridPos, ' calcGrid: ', totalGrid - gridPos);
    return sluttDato.subtract(totalGrid - gridPos, 'day');
};

const getAntallSvangerskapsDager = (terminDato: string | undefined, antallMåneder: number) => {
    return dayjs(terminDato).diff(dayjs(terminDato).subtract(antallMåneder, 'M'), 'day');
};
const getPeriodeDag = (terminDato: string | undefined, dato: string) => {
    return dayjs(terminDato).diff(dayjs(dato), 'day');
};

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
export default PeriodeTimeline;
