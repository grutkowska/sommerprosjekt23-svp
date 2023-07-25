import { ExpansionCard, Table } from '@navikt/ds-react';

import './periodeKort.css';
import { guid } from '@navikt/fp-common';
import { svpPerioder } from 'app/types/svpTypesSommer';
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
    oppholdsPerioder?: svpPerioder[];
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

    const allePerioder = svpPerioder ? alleSvpPerioderSortert(svpPerioder!, oppholdsPerioder) : [];
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
                                    console.log(fargeIndex, periode);
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

                                                    {periode.resultat ? (
                                                        <p
                                                            style={{
                                                                margin: '5px',
                                                                paddingLeft: '40px',
                                                            }}
                                                        >
                                                            {`Trenger ${periode.type} tilrettelegging`}{' '}
                                                            {periode.type !== 'INGEN' &&
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
                                                    )}
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
