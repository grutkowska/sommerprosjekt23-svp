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
import dayjs from 'dayjs';
import { guid } from '@navikt/fp-common';
import { formaterDato, get9månederFraTerminDato } from 'app/utils/dateUtils';

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
                return mapTilretteleggingTilPeriode(periode, sak.familiehendelse?.termindato, antallMnd);
            }),
        };
    });
};


export const arbeidsgiverFarger = ['blue', 'green'];

const PeriodeTimeline: React.FunctionComponent<PeriodeTimelineProps> = ({ sak, søkerArbeidsforhold }) => {
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
            <YAkseAlleElementer className="YAkseAlleElementer" height={antallMnd.toString()}>
                {get9månederFraTerminDato(sak.familiehendelse?.termindato, antallMnd).map((månedNavn) => {
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
                })}
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
            <DatoPilBane height={alleBanerHeight}>
                <DatoPil
                    key={guid()}
                    nr={
                        getAntallSvangerskapsDager(sak.familiehendelse?.termindato, antallMnd) -
                        dayjs(sak.familiehendelse?.termindato).diff(dayjs(), 'day')
                    }
                    nrColumns={timelineData!.length}
                >
                    {formaterDato(dayjs().toString(), 'DD-MMM')}
                </DatoPil>
            </DatoPilBane>
        </PeriodeTimelineView>
    ) : (
        <div></div>
    );
};

export default PeriodeTimeline;
