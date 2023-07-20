import './periodeTimeline.css';
import {
    PeriodeTimelineView,
    Soyle,
    Bane,
    AlleBaner,
    YAkseAlleElementer,
    YAkseElement,
    BaneHeaderBoks,
    BaneHeader,
    DatoPil,
    DatoPilBane,
    SoyleBakgrunn,
} from './PeriodeTimelineView';
import { SvangerskapspengeSak } from 'app/types/SvangerskapspengeSak';
import { SøkerinfoDTOArbeidsforhold } from 'app/types/SøkerinfoDTO';
import { svpPerioder } from 'app/types/svpTypesSommer';
import { guid } from '@navikt/fp-common';
import { formaterDato, get9månederFraTerminDato } from 'app/utils/dateUtils';
import dayjs, { Dayjs } from 'dayjs';

export const arbeidsgiverFarger = ['blue', 'green'];

const PeriodeTimeline: React.FunctionComponent<PeriodeTimelineProps> = ({ sak, søkerArbeidsforhold }) => {
    //const valgtDatoRef = useDatoContext();
    const antallMnd = 9;
    const alleBanerHeight = allebanerHeightFunc(sak, antallMnd);
    const timelineData = mapSvpSakTilPeriodeTimeline(sak, søkerArbeidsforhold, antallMnd);
    let currentPos = 0;
    const changeDatoTekst = (currentRelPos: number) => {
        //setValgtDato(konverterGridPosTilDato(currentRelPos, sluttDatoForSVP, baneHoyde));
        /*
        valgtDatoRef.current = konverterGridPosTilDato(
            currentRelPos,
            dayjs(getTerminMinus21Dager(sak.familiehendelse?.termindato)),
            alleBanerHeight
        );
        */
        //console.log(valgtDatoRef.current.toString());
        /*
        return formaterDato(
            konverterGridPosTilDato(
                currentRelPos,
                dayjs(getTerminMinus21Dager(sak.familiehendelse?.termindato)),
                alleBanerHeight
            ).toISOString(),
            'DD - MMM'
        );
        */
        return formaterDato(dayjs().toDate(), 'DD - MMM');
    };

    const oversteDato = dayjs(sak.familiehendelse?.termindato)
        .subtract(
            parseInt(formaterDato(getTerminMinus21Dager(sak.familiehendelse?.termindato), 'D')) -
                dayjs(getTerminMinus21Dager(sak.familiehendelse?.termindato)).daysInMonth() +
                getAntallSvangerskapsDager(getTerminMinus21Dager(sak.familiehendelse?.termindato), antallMnd),
            'day'
        )
        .toISOString();
    let fomDato: string | undefined;
    let startDatoBakgrunnSoyle = 0;
    //let arbeidsType: string | undefined;
    let utbetalingsGrad: number;
    console.log('Allebaner: ', alleBanerHeight);
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

            <YAkseAlleElementer className="YAkseAlleElementer" height={alleBanerHeight.toString()}>
                {get9månederFraTerminDato(getTerminMinus21Dager(sak.familiehendelse?.termindato), antallMnd).map(
                    (månedNavn) => {
                        const daysInMonth = dayjs(månedNavn).daysInMonth();

                        //console.log(månedNavn);
                        let mndFormat = '';
                        {
                            if (dayjs().isSame(månedNavn, 'month'))
                                mndFormat = ' fkfkf '; //formaterDato(dayjs().toString(), 'DD-MMM');
                            else mndFormat = formaterDato(månedNavn, 'MMM');
                        }
                        //console.log((currentPos1 += daysInMonth) - daysInMonth);
                        if (dayjs().isSame(månedNavn, 'month')) {
                            //console.log('if løkke');
                            return (
                                <YAkseElement
                                    key={guid()}
                                    startPos={(currentPos += daysInMonth) - daysInMonth}
                                    height={daysInMonth}
                                >
                                    <p
                                        style={{
                                            color: 'white',
                                            opacity: '0%',
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
                    }
                )}
            </YAkseAlleElementer>
            <AlleBaner antall={timelineData!.length.toString()} height={alleBanerHeight}>
                {timelineData!.map((bane, index) => {
                    fomDato = sak.gjeldendeVedtak?.arbeidsforhold[index].behovFrom;
                    startDatoBakgrunnSoyle = dayjs(fomDato).diff(oversteDato, 'day');
                    console.log(
                        'oversteDato; ',
                        oversteDato,
                        'fom: ',
                        fomDato,
                        'termin-21dager: ',
                        getTerminMinus21Dager(sak.familiehendelse?.termindato),
                        'startDatoBakgrunn: ',
                        startDatoBakgrunnSoyle,
                        'antall dager fra termin:',
                        getAntallSvangerskapsDager(
                            getTerminMinus21Dager(sak.familiehendelse?.termindato),
                            antallMnd
                        ).toString()
                    );

                    return (
                        <Bane
                            key={guid()}
                            nr={(index + 1).toString()}
                            height={getAntallSvangerskapsDager(
                                getTerminMinus21Dager(sak.familiehendelse?.termindato),
                                antallMnd
                            ).toString()}
                            bakgrunnFarge={arbeidsgiverFarger[index]}
                        >
                            {bane.perioder.map((periode, periodeIndex) => {
                                //arbeidsType =
                                //    sak.gjeldendeVedtak?.arbeidsforhold[index].tilrettelegginger[periodeIndex].type;
                                utbetalingsGrad =
                                    sak.gjeldendeVedtak!.arbeidsforhold[index].tilrettelegginger[periodeIndex].resultat
                                        .utbetalingsgrad;
                                if (utbetalingsGrad > 0) {
                                    return (
                                        <>
                                            <Soyle
                                                key={guid()}
                                                start={periode.start.toString()}
                                                slutt={periode.slutt.toString()}
                                                farge={arbeidsgiverFarger[index]}
                                            />
                                        </>
                                    );
                                } // return <></>;
                                else
                                    return (
                                        <>
                                            <Soyle
                                                key={guid()}
                                                start={periode.start.toString()}
                                                slutt={periode.slutt.toString()}
                                                farge={'lightgrey'}
                                                opacity="100%"
                                            />
                                        </>
                                    );
                            })}
                            <SoyleBakgrunn
                                key={guid()}
                                start={startDatoBakgrunnSoyle.toString()}
                                slutt={getAntallSvangerskapsDager(
                                    getTerminMinus21Dager(sak.familiehendelse?.termindato),
                                    antallMnd
                                ).toString()}
                                farge={'light' + arbeidsgiverFarger[index]}
                                opacity="50%"
                            />
                        </Bane>
                    );
                })}
            </AlleBaner>

            <DatoPilBane height={alleBanerHeight}>
                <DatoPil
                    key={guid()}
                    nr={getGridPos(
                        dayjs().toString(),
                        dayjs(getTerminMinus21Dager(sak.familiehendelse?.termindato)).toString(),
                        alleBanerHeight
                    )}
                    nrColumns={timelineData!.length}
                    relBaneHeight={alleBanerHeight}
                    handleTeksBoks={changeDatoTekst}
                />
            </DatoPilBane>
        </PeriodeTimelineView>
    ) : (
        <div></div>
    );
};

const konverterGridPosTilDato = (gridPos: number, sluttDato: Dayjs, totalGrid: number) => {
    //console.log('KonverterGridDato; gridPos: ', gridPos, ' calcGrid: ', totalGrid - gridPos);
    return sluttDato.subtract(totalGrid - gridPos, 'day');
};

const getGridPos = (dato: string, sluttDato: string | undefined, totalGrid: number) => {
    console.log('Init grispos: ', totalGrid - dayjs(sluttDato).diff(dayjs(dato), 'day'));
    return totalGrid - dayjs(sluttDato).diff(dayjs(dato), 'day');
};

const allebanerHeightFunc = (sak: SvangerskapspengeSak, antallMnd: number): number => {
    return (
        getAntallSvangerskapsDager(
            dayjs(getTerminMinus21Dager(sak.familiehendelse?.termindato)).toString(),
            antallMnd
        ) +
        (dayjs(getTerminMinus21Dager(sak.familiehendelse?.termindato)).daysInMonth() -
            parseInt(formaterDato(dayjs(getTerminMinus21Dager(sak.familiehendelse?.termindato)).toString(), 'D')))
    );
};

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

export const førsteBokstavToUppercase = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
export const getArbeidsgiverNavn = (
    søkerArbeidsforhold: SøkerinfoDTOArbeidsforhold[] | undefined,
    arbeidsForholdType: string,
    arbeidsgiverID?: string
): string => {
    if (arbeidsForholdType === 'ORDINÆRT_ARBEID') {
        const arbeidsforhold = søkerArbeidsforhold
            ? søkerArbeidsforhold.find((i) => i.arbeidsgiverId === arbeidsgiverID)
            : undefined;
        return førsteBokstavToUppercase(arbeidsforhold!.arbeidsgiverNavn) || '';
        //return arbeidsforhold?.arbeidsgiverNavn.toLowerCase() || '';
    } else if (arbeidsForholdType === 'FRILANS') {
        return 'Frilanser';
    } else if (arbeidsForholdType === 'SELVSTENDIG_NÆRINGSDRIVENDE') {
        return 'Selvstendig næringsdrivende';
    } else {
        return 'Type not found';
    }
};

const getTerminMinus21Dager = (termindato: string | undefined) => {
    return dayjs(termindato).subtract(21, 'day').toISOString();
};

const getAntallSvangerskapsDager = (terminDato: string | undefined, antallMåneder: number) => {
    return dayjs(terminDato).diff(dayjs(terminDato).subtract(antallMåneder, 'M'), 'day');
};
const getPeriodeDag = (terminDato: string | undefined, dato: string) => {
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
    arbeidsforhold: SøkerinfoDTOArbeidsforhold[] | undefined,
    antallMnd: number
) => {
    return sak.gjeldendeVedtak?.arbeidsforhold.map((arbeidsgiver) => {
        return {
            navn: getArbeidsgiverNavn(
                arbeidsforhold,
                arbeidsgiver.aktivitet.type,
                arbeidsgiver?.aktivitet?.arbeidsgiver?.id
            ),
            perioder: arbeidsgiver.tilrettelegginger.map((periode): { start: number; slutt: number } => {
                return mapTilretteleggingTilPeriode(
                    periode,
                    getTerminMinus21Dager(sak.familiehendelse?.termindato),
                    antallMnd
                );
            }),
        };
    });
};

export default PeriodeTimeline;
