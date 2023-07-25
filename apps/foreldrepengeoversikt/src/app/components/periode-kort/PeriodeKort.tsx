import { ExpansionCard, Table } from '@navikt/ds-react';

import './periodeKort.css';
import { guid } from '@navikt/fp-common';
import { oppholdsperioder, svpPerioder } from 'app/types/svpTypesSommer';
import { formaterDato } from 'app/utils/dateUtils';
import { alleSvpPerioderSortert } from 'app/utils/periodeUtils';
import {
    arbeidsgiverFargerSekundær,
    førsteBokstavToUppercase,
    getCurrentDato,
} from '../periode-timeline/PeriodeTimeline';
import dayjs from 'dayjs';
import { ArbeidsgiverSirkelkomponent } from '../arbeidsgiver_sirkelkomponent/arbeidsgiverSirkelkomponent';

const getFargetBakgrunn = (fom: string, tom: string, fargeIndex: number) => {
    if (
        dayjs(fom).isSame(getCurrentDato(), 'day') ||
        dayjs(tom).isSame(getCurrentDato(), 'day') ||
        dayjs(getCurrentDato()).isBetween(dayjs(fom), dayjs(tom), 'day')
    ) {
        return arbeidsgiverFargerSekundær[fargeIndex];
    } else return '';
};

let seAllePerioder = false;
export const setAllePerioder = () => {
    seAllePerioder = !seAllePerioder;
};

interface Props {
    arbeidsgiverNavn: string;
    arbeidsgiverFarge?: string;
    ferdigBehandlet: boolean;
    svpPerioder?: svpPerioder[];
    oppholdsPerioder?: oppholdsperioder[];
    arbeidgiverIndex?: number;
}
let fargeIndex = -1;
export const setFargeIndex = () => {
    fargeIndex = -1;
};
const PeriodeKort: React.FunctionComponent<Props> = ({
    arbeidsgiverNavn,
    arbeidsgiverFarge,
    ferdigBehandlet,
    svpPerioder,
    oppholdsPerioder,
}: Props) => {
    const datoFormat = 'DD. MMM. YYYY';
    const allePerioder = oppholdsPerioder ? alleSvpPerioderSortert(svpPerioder!, oppholdsPerioder) : [];
    //console.log(allePerioder);
    fargeIndex++;
    return (
        <div className="periodeKort">
            <ExpansionCard defaultOpen={true} aria-label="Small-variant">
                <ExpansionCard.Header className="ekspansjonsKortTittel">
                    <div>
                        <ArbeidsgiverSirkelkomponent arbeidsgiverFarge={arbeidsgiverFarge} />
                        <div
                            style={{
                                width: '20px',
                                // Bedre måte å gjøre spacinga på??
                            }}
                        ></div>

                        <div>
                            <h3
                                style={{
                                    margin: '0px',
                                }}
                            >
                                {førsteBokstavToUppercase(arbeidsgiverNavn)}
                            </h3>
                        </div>
                    </div>
                    {/*ferdigBehandlet ? (
                        <Tag variant="success" size="small">
                            <CheckmarkIcon title="a11y-title" className="statusTag" />
                            {window.innerWidth > 900 && 'Ferdig behandlet'}
                        </Tag>
                    ) : (
                        <Tag variant="info" size="small">
                            <ClockIcon title="a11y-title" className="statusTag" />
                            {window.innerWidth > 900 && 'Under behandlet'}
                        </Tag>
                    )*/}
                </ExpansionCard.Header>
                {allePerioder && (
                    <ExpansionCard.Content className="eksapansjonsKort">
                        <Table>
                            <Table.Body>
                                {allePerioder?.map((periode) => {
                                    console.log(periode.årsak);
                                    //console.log(fargeIndex, periode);
                                    const fullVisning = seAllePerioder
                                        ? true
                                        : !dayjs(periode.tom).isSameOrBefore(dayjs().subtract(1, 'day'));
                                    //if (periode != null) {
                                    if (fullVisning) {
                                        return (
                                            <Table.Row key={guid()} className="row">
                                                {/*
                                            {ferdigBehandlet && (
                                                <Table.DataCell className="cell">
                                                    {periode.resultat ? (
                                                        periode.resultat.resultatType === 'INNVILGET' ? (
                                                            <CheckmarkCircleIcon
                                                                title="a11y-title"
                                                                fontSize="1.7rem"
                                                                color="green"
                                                            />
                                                        ) : (
                                                            <XMarkOctagonIcon
                                                                title="a11y-title"
                                                                fontSize="1.7rem"
                                                                color="red"
                                                            />
                                                        )
                                                    ) : (
                                                        <ParasolBeachIcon title="a11y-title" />
                                                    )}
                                                </Table.DataCell>
                                            )}
                                                    */}

                                                <Table.DataCell
                                                    style={{
                                                        backgroundColor: getFargetBakgrunn(
                                                            periode.fom,
                                                            periode.tom,
                                                            fargeIndex
                                                        ),
                                                        mixBlendMode: `multiply`,
                                                    }}
                                                >
                                                    <h4
                                                        style={{
                                                            margin: '5px',
                                                            paddingLeft: '40px',
                                                        }}
                                                    >
                                                        {' '}
                                                        <b>{formaterDato(periode.fom, datoFormat)}</b> -{' '}
                                                        <b>{formaterDato(periode.tom, datoFormat)}</b>
                                                    </h4>
                                                    <p
                                                        style={{
                                                            margin: '5px',
                                                            paddingLeft: '40px',
                                                        }}
                                                    >
                                                        {!ferdigBehandlet
                                                            ? periode.type == 'INGEN'
                                                                ? 'Du kan ikke jobbe og har søkt om 100 prosent svangerskapspenger. '
                                                                : periode.type == 'DELVIS'
                                                                ? 'Du kan jobbe ' +
                                                                  periode.arbeidstidprosent +
                                                                  ' prosent og har søkt om svangerskapspenger for å dekke ditt lønnstap. '
                                                                : periode.type == 'HEL'
                                                                ? 'Du kan jobbe som vanlig og behøver ikke svangerskapspenger i denne perioden.'
                                                                : null
                                                            : periode.resultat
                                                            ? periode.type == 'INGEN'
                                                                ? 'Du kan ikke jobbe og får 100 prosent svangerskapspenger, tilsvarende 2000 kr pr dag. ' +
                                                                  førsteBokstavToUppercase(arbeidsgiverNavn) +
                                                                  ' betaler dine svangerskapspenger og får refundert det du har rett på. Kontakt ' +
                                                                  førsteBokstavToUppercase(arbeidsgiverNavn) +
                                                                  ' for flere detaljer.'
                                                                : periode.type == 'DELVIS'
                                                                ? 'Du jobber ' +
                                                                  periode.arbeidstidprosent +
                                                                  ' prosent og får ' +
                                                                  periode.resultat.utbetalingsgrad +
                                                                  ' prosent svangerskapspenger, tilsvarende 1000 kr pr dag.' +
                                                                  ' Pengene beregnes månedlig og betales av nav den 25. hver måned.'
                                                                : periode.type == 'HEL'
                                                                ? 'Du kan jobbe som vanlig og får derfor ikke svangerskapspenger i denne perioden.'
                                                                : null
                                                            : periode.årsak == 'FERIE'
                                                            ? 'Du har ferie og får derfor ikke svangerskapspenger i denne perioden.'
                                                            : periode.årsak == 'SYKEPENGER'
                                                            ? 'Du får sykepenger og får derfor ikke svangerskapspenger i denne perioden.'
                                                            : null}
                                                    </p>
                                                    {/*
                                                    periode.resultat ? (
                                                        <p
                                                            style={{
                                                                margin: '5px',
                                                                paddingLeft: '40px',
                                                            }}
                                                        >
                                                            {`Trenger ${periode.type} tilrettelegging`}{' '}
                                                            {periode &&
                                                                `på en
                                                            ${periode.arbeidstidprosent} prosent stilling. `}
                                                            {ferdigBehandlet &&
                                                                (periode.resultat.resultatType === 'INNVILGET'
                                                                    ? periode.type !== 'INGEN' &&
                                                                      `Du vil motta${' '}
                                                                ${
                                                                    periode.resultat.utbetalingsgrad
                                                                } prosent svangerskapspenger. `
                                                                    : ` ${periode.resultat.resultatType}`)}
                                                        </p>
                                                    ) : (
                                                        <p>Du har ferie</p>
                                                    )
                                                    */}
                                                </Table.DataCell>
                                            </Table.Row>
                                        );
                                    } else return null;
                                })}
                            </Table.Body>
                        </Table>
                    </ExpansionCard.Content>
                )}
            </ExpansionCard>
        </div>
    );
};
export default PeriodeKort;
