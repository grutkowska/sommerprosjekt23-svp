import './periodeTimeline.css';
import {
    PeriodeTimelineView,
    Soyle,
    Bane,
    AlleBaner,
    YAkseAlleElementer,
    YAkseElement,
    DatoPil,
    DatoPilBane,
    SoyleBakgrunn,
    SluttInfo,
} from './PeriodeTimelineView';
import { SvangerskapspengeSak } from 'app/types/SvangerskapspengeSak';
import { SøkerinfoDTOArbeidsforhold } from 'app/types/SøkerinfoDTO';
import { svpPerioder } from 'app/types/svpTypesSommer';
import { guid } from '@navikt/fp-common';
import { formaterDato, get9månederFraTerminDato } from 'app/utils/dateUtils';
import dayjs from 'dayjs';
import { FeedingBottleIcon } from '@navikt/aksel-icons';

export const arbeidsgiverFargerPrimær = ['#66CBEC', '#FFC166', '#66C786', '#C0B2D2', '#F68282', '#D9E366'];
export const arbeidsgiverFargerSekundær = ['#E0FAFF', '#FFF4E0', '#E3F8E7', '#EFECF4', '#FFE6E6', '#F9FCCC'];

const PeriodeTimeline: React.FunctionComponent<PeriodeTimelineProps> = ({ sak, søkerArbeidsforhold }) => {
    const antallMnd = 9;
    const alleBanerHeight = allebanerHeightFunc(dayjs(sak.familiehendelse?.termindato).toDate(), antallMnd);
    const timelineData = mapSvpSakTilPeriodeTimeline(sak, søkerArbeidsforhold, antallMnd);
    let currentPos = 0;
    const changeDatoTekst = () => {
        //(currentRelPos: number) => {
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
    let behovFromDato: string | undefined;
    let utbetalingsGrad: number;

    return timelineData ? (
        <PeriodeTimelineView>
            <YAkseAlleElementer className="YAkseAlleElementer" height={alleBanerHeight.toString()}>
                {get9månederFraTerminDato(getTerminMinus21Dager(sak.familiehendelse?.termindato), antallMnd).map(
                    (månedNavn) => {
                        const daysInMonth = dayjs(månedNavn).daysInMonth();
                        let isMånedNavnSameAsTermindatoMnd = '1px';
                        let mndFormat = '';
                        {
                            if (dayjs().isSame(månedNavn, 'month'))
                                mndFormat = ' fkfkf '; //formaterDato(dayjs().toString(), 'DD-MMM');
                            else mndFormat = formaterDato(månedNavn, 'MMM');
                        }
                        {
                            if (
                                dayjs(sak.familiehendelse?.termindato).isSame(månedNavn, 'month') &&
                                dayjs(sak.familiehendelse?.termindato).date() > 21 // <-- Kan være unødvendig sjekk dette
                            ) {
                                isMånedNavnSameAsTermindatoMnd = '0px';
                            }
                        }
                        if (dayjs().isSame(månedNavn, 'month')) {
                            //console.log('if løkke');
                            return (
                                <YAkseElement
                                    key={guid()}
                                    startPos={(currentPos += daysInMonth) - daysInMonth}
                                    height={daysInMonth}
                                    borderTykkelse={isMånedNavnSameAsTermindatoMnd}
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
                                    borderTykkelse={isMånedNavnSameAsTermindatoMnd}
                                >
                                    <p
                                        style={{
                                            textSizeAdjust: '10px',
                                            textTransform: 'uppercase',
                                            fontWeight: 'lighter',
                                            color: '#000000',
                                            opacity: '44%',
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
                    behovFromDato = sak.gjeldendeVedtak?.arbeidsforhold[index].behovFrom;
                    //startDatoBakgrunnSoyle = dayjs(fomDato).diff(oversteDato, 'day');

                    return (
                        <Bane
                            key={guid()}
                            nr={(index + 1).toString()}
                            bakgrunnFarge={arbeidsgiverFargerPrimær[index]}
                            height={alleBanerHeight.toString()}
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
                                                farge={arbeidsgiverFargerPrimær[index]}
                                            />
                                        </>
                                    );
                                }
                                return <></>;
                            })}
                            <SoyleBakgrunn
                                key={guid()}
                                start={behovFromkoordinat(
                                    sak.familiehendelse?.termindato,
                                    behovFromDato!,
                                    alleBanerHeight
                                ).toString()}
                                farge={arbeidsgiverFargerSekundær[index]}
                                slutt={getGridPos(
                                    getTerminMinus21Dager(sak.familiehendelse?.termindato),
                                    sak.familiehendelse?.termindato,
                                    alleBanerHeight
                                ).toString()}
                                opacity="100%"
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
                    relBaneHeight={alleBanerHeight}
                    handleTeksBoks={changeDatoTekst}
                />
            </DatoPilBane>
            <SluttInfo>
                <p>
                    <FeedingBottleIcon aria-hidden />{' '}
                    {formaterDato(sak.familiehendelse?.termindato, 'DD. MMMM YYYY').toUpperCase()}
                </p>
            </SluttInfo>
        </PeriodeTimelineView>
    ) : (
        <div></div>
    );
};

export const getCurrentDato = () => {
    return dayjs().toISOString();
};

const getGridPos = (dato: string, sluttDato: string | undefined, totalGrid: number) => {
    const sisteDagIMnd = dayjs(sluttDato).daysInMonth();
    /*
    console.log(
        'Init grispos: ',
        totalGrid - (dayjs(sluttDato).diff(dayjs(dato), 'day') + (sisteDagIMnd - dayjs(sluttDato).date())),
        'Total height: ',
        totalGrid
    );
    */
    return totalGrid - (dayjs(sluttDato).diff(dayjs(dato), 'day') + (sisteDagIMnd - dayjs(sluttDato).date()));
};

const allebanerHeightFunc = (sluttDato: Date, antallMnd: number): number => {
    const startDatoSVP = dayjs(getTerminMinus21Dager(sluttDato.toString())).subtract(antallMnd, 'M');
    //console.log('allebaner height kalk: ', startDatoSVP.toString(), 'fra 1. ', startDatoSVP.date());
    return (
        startDatoSVP.date() +
        getAntallSvangerskapsDager(dayjs(getTerminMinus21Dager(sluttDato.toString())).toString(), antallMnd) +
        (dayjs(getTerminMinus21Dager(sluttDato.toString())).daysInMonth() -
            parseInt(formaterDato(dayjs(getTerminMinus21Dager(sluttDato.toString())).toString(), 'D')))
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

export const getTerminMinus21Dager = (termindato: string | undefined) => {
    return dayjs(termindato).subtract(21, 'day').toISOString();
};

const getResterendeDager = (terminDato: string | undefined): number => {
    return dayjs(terminDato).daysInMonth() - dayjs(terminDato).date();
};

const behovFromkoordinat = (termindato: string | undefined, behovFrom: string, allebanerHeight: number) => {
    console.log('Termin: ', termindato, 'behovFrom: ', behovFrom, 'allebanerHeight: ', allebanerHeight);
    console.log('getREsteredend: ', dayjs(getTerminMinus21Dager(termindato)).diff(dayjs(behovFrom), 'day'));
    console.log('getDiffbehofrom: ', dayjs(getTerminMinus21Dager(termindato)).diff(dayjs(behovFrom), 'day'));
    return (
        allebanerHeight -
        (dayjs(getTerminMinus21Dager(termindato)).diff(dayjs(behovFrom), 'day') + getResterendeDager(termindato))
    );
};

const getAntallSvangerskapsDager = (sluttDato: string | undefined, antallMåneder: number) => {
    /*
    console.log(
        'slutt dato: ',
        sluttDato?.toString(),
        ' start dato: ',
        dayjs(sluttDato).subtract(antallMåneder, 'M').toString(),
        ' diff: ',
        dayjs(sluttDato).diff(dayjs(sluttDato).subtract(antallMåneder, 'M'), 'day')
    );
    */
    return dayjs(sluttDato).diff(dayjs(sluttDato).subtract(antallMåneder, 'M'), 'day');
};
const getPeriodeDag = (terminDato: string | undefined, dato: string) => {
    const restDager = dayjs(terminDato).daysInMonth() - dayjs(terminDato).date();
    return dayjs(terminDato).diff(dayjs(dato), 'day') + restDager;
};
//termindato - et absolut tall å regne ut ifra
const mapTilretteleggingTilPeriode = (
    periode: svpPerioder,
    termin: Date | undefined,
    antallMnd: number
): { start: number; slutt: number } => {
    return {
        start: allebanerHeightFunc(termin!, antallMnd) - getPeriodeDag(termin?.toString(), periode.fom),
        slutt: allebanerHeightFunc(termin!, antallMnd) - getPeriodeDag(termin?.toString(), periode.tom),
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
                    dayjs(getTerminMinus21Dager(sak.familiehendelse?.termindato)).toDate(),
                    antallMnd
                );
            }),
        };
    });
};

export default PeriodeTimeline;
