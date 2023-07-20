import { ExpansionCard, Table } from '@navikt/ds-react';

import './periodeKort.css';
import { guid } from '@navikt/fp-common';
import { svpPerioder } from 'app/types/svpTypesSommer';
import { formaterDato } from 'app/utils/dateUtils';
import { alleSvpPerioderSortert } from 'app/utils/periodeUtils';
import { førsteBokstavToUppercase } from '../periode-timeline/PeriodeTimeline';

interface Props {
    arbeidsgiverNavn: string;
    arbeidsgiverFarge?: string;
    ferdigBehandlet: boolean;
    svpPerioder?: svpPerioder[];
    oppholdsPerioder?: svpPerioder[];
    arbeidgiverIndex?: number;
}

const PeriodeKort: React.FunctionComponent<Props> = ({
    arbeidsgiverNavn,
    arbeidsgiverFarge,
    ferdigBehandlet,
    svpPerioder,
    oppholdsPerioder,
}: Props) => {
    const datoFormat = 'DD. MMM';
    //const intl = useIntl();

    const allePerioder = svpPerioder ? alleSvpPerioderSortert(svpPerioder!, oppholdsPerioder) : [];
    return (
        <div className="periodeKort">
            <ExpansionCard aria-label="Small-variant">
                <ExpansionCard.Header className="ekspansjonsKortTittel">
                    <div>
                        <div
                            style={{
                                backgroundColor: `${arbeidsgiverFarge}`,
                                borderRadius: '50%',
                                width: '20px',
                                height: '20px',
                                alignSelf: 'center',
                            }}
                        ></div>
                        <div
                            style={{
                                width: '20px',
                                // Bedre måte å gjøre dette på?? Spacinga
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
                        <Table zebraStripes>
                            <Table.Body>
                                {allePerioder?.map((periode) => {
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

                                            <Table.DataCell>
                                                <h4
                                                    style={{
                                                        margin: '5px',
                                                        paddingLeft: '40px',
                                                    }}
                                                >
                                                    {' '}
                                                    <b>{formaterDato(periode.fom, datoFormat)}</b> til{' '}
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
