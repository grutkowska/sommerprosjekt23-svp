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
    SoyleBakgrunn,
} from './PeriodeTimelineView';
import { SvangerskapspengeSak } from 'app/types/SvangerskapspengeSak';
import { SøkerinfoDTOArbeidsforhold } from 'app/types/SøkerinfoDTO';
import { svpPerioder } from 'app/types/svpTypesSommer';
import dayjs from 'dayjs';
import { guid } from '@navikt/fp-common';
import { formaterDato, get9månederFraTerminDato } from 'app/utils/dateUtils';
import { useDatoContext } from 'app/context/periodeTimelineContext';
import { useCallback, useRef } from 'react';

const allebanerHeightFunc = (sak: SvangerskapspengeSak, antallMnd: number): number => {
    return (
        getAntallSvangerskapsDager(sak.familiehendelse?.termindato, antallMnd) +
        (dayjs(sak.familiehendelse?.termindato).daysInMonth() -
            parseInt(formaterDato(sak.familiehendelse?.termindato, 'D')))
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


const PeriodeTimeline: React.FunctionComponent<PeriodeTimelineProps> = ({ sak, søkerArbeidsforhold }) => {
    //const valgtDatoRef = useDatoContext();
    const antallMnd = 9;
    const sluttDatoForSVP = dayjs(sak.familiehendelse?.termindato).subtract(21, 'day');
    const baneHoyde = getAntallSvangerskapsDager(sluttDatoForSVP.toString(), antallMnd);
    const timelineData = mapSvpSakTilPeriodeTimeline(sak, søkerArbeidsforhold);
    const valgtDatoRef = useRef(dayjs());
    let currentPos = 0;
    const farger = ['blue', 'green'];
    //console.log('PeriodeTimeline rerender: ', valgtDato.toString(), 'Banehoyde: ', baneHoyde);
    const changeDatoTekst = (currentRelPos: number) => {
        //setValgtDato(konverterGridPosTilDato(currentRelPos, sluttDatoForSVP, baneHoyde));
        valgtDatoRef.current = konverterGridPosTilDato(currentRelPos, sluttDatoForSVP, baneHoyde);
        //console.log(valgtDatoRef.current.toString());
        return formaterDato(konverterGridPosTilDato(currentRelPos, sluttDatoForSVP, baneHoyde), 'DD - MMM');
    };

    const antallMnd = 9;
    const alleBanerHeight = allebanerHeightFunc(sak, antallMnd);
    const timelineData = mapSvpSakTilPeriodeTimeline(sak, søkerArbeidsforhold, antallMnd);
    let currentPos = 0;

    const oversteDato = dayjs(sak.familiehendelse?.termindato)
        .subtract(
            parseInt(formaterDato(sak.familiehendelse?.termindato, 'D')) -
                dayjs(sak.familiehendelse?.termindato).daysInMonth() +
                getAntallSvangerskapsDager(sak.familiehendelse?.termindato, antallMnd),
            'day'
        )
        .toISOString();
    let fomDato: string | undefined;
    let startDatoBakgrunnSoyle = 0;
    //let arbeidsType: string | undefined;
    let utbetalingsGrad: number;


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
                {get9månederFraTerminDato(sluttDatoForSVP.toString(), antallMnd).map((månedNavn) => {
                    const daysInMonth = dayjs(månedNavn).daysInMonth();

                    let mndFormat = '';
                    {
                        if (dayjs().isSame(månedNavn, 'month'))
                            mndFormat = ' fkfkf '; //formaterDato(dayjs().toString(), 'DD-MMM');
                        else mndFormat = formaterDato(månedNavn, 'MMM');
                    }
                    //console.log((currentPos1 += daysInMonth) - daysInMonth);
                    {
                        /* TODO : bruke context i If'en */
                    }
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
                })}
            </YAkseAlleElementer>

            <AlleBaner antall={timelineData!.length.toString()} height={baneHoyde}>

                {timelineData!.map((bane, index) => {
                    fomDato = sak.gjeldendeVedtak?.arbeidsforhold[index].behovFrom;
                    startDatoBakgrunnSoyle = dayjs(fomDato).diff(oversteDato, 'day');
                    console.log(
                        'oversteDato; ',
                        oversteDato,
                        'fom: ',
                        fomDato,
                        'termin: ',
                        sak.familiehendelse?.termindato,
                        'startDatoBakgrunn: ',
                      startDatoBakgrunnSoyle,
                        'antall dager fra termin:',
                        getAntallSvangerskapsDager(sak.familiehendelse?.termindato, antallMnd).toString()
                    );

                    return (

                        <Bane
                            key={guid()}
                            nr={(index + 1).toString()}
                            height={getAntallSvangerskapsDager(sak.familiehendelse?.termindato, antallMnd).toString()}
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
                                } else return <></>;

                            })}
                            <SoyleBakgrunn
                                key={guid()}
                                start={startDatoBakgrunnSoyle.toString()}
                                slutt={getAntallSvangerskapsDager(
                                    sak.familiehendelse?.termindato,
                                    antallMnd
                                ).toString()}
                                farge={'light' + arbeidsgiverFarger[index]}

                                opacity="100%"
                            />
                        </Bane>
                    );
                })}
            </AlleBaner>

            <DatoPilBane height={baneHoyde}>

                <DatoPil
                    key={guid()}
                    nr={getGridPos(dayjs().toString(), dayjs(sluttDatoForSVP).toString(), baneHoyde)}
                    nrColumns={timelineData!.length}

                    relBaneHeight={baneHoyde}
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

const getAntallSvangerskapsDager = (terminDato: string | undefined, antallMåneder: number) => {
    return dayjs(terminDato).diff(dayjs(terminDato).subtract(antallMåneder, 'M'), 'day');
};
const getDiffMellomDager = (terminDato: string | undefined, dato: string) => {
    return dayjs(terminDato).diff(dayjs(dato), 'day');
};
const getGridPos = (dato: string, sluttDato: string | undefined, totalGrid: number) => {
    console.log('Init grispos: ', totalGrid - dayjs(sluttDato).diff(dayjs(dato), 'day'));
    return totalGrid - dayjs(sluttDato).diff(dayjs(dato), 'day');
};

const mapTilretteleggingTilPeriode = (
    periode: svpPerioder,
    termin: string | undefined,
    antallMnd: number
): { start: number; slutt: number } => {
    return {
        start: getAntallSvangerskapsDager(termin, antallMnd) - getDiffMellomDager(termin, periode.fom),
        slutt: getAntallSvangerskapsDager(termin, antallMnd) - getDiffMellomDager(termin, periode.tom),
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
