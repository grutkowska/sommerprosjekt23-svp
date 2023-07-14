import { ExpansionCard, Table, Tag, TagProps } from '@navikt/ds-react';

import './periodeKort.css';
import { guid } from '@navikt/fp-common';
import { svpPerioder } from 'app/types/svpTypesSommer';
import { CheckmarkCircleIcon, CheckmarkIcon, ClockIcon, ParasolBeachIcon, XMarkOctagonIcon } from '@navikt/aksel-icons';
import { formaterDato } from 'app/utils/dateUtils';
import { alleSvpPerioderSortert } from 'app/utils/periodeUtils';
import { ArbeidsgiverInfo } from 'app/types/ArbeidsgiverInfo';
//import { getSvpPeriodeType } from 'app/utils/periodeUtils';
//import { useIntl } from 'react-intl';

interface Props {
    title: ArbeidsgiverInfo;
    ferdigBehandlet: boolean;
    svpPerioder?: svpPerioder[];
    oppholdsPerioder?: svpPerioder[];
    arbeidgiverIndex?: number;
}

const PeriodeKort: React.FunctionComponent<Props> = ({
    title,
    ferdigBehandlet,
    svpPerioder,
    oppholdsPerioder,
    arbeidgiverIndex,
}: Props) => {
    const fargeRekkefølgeForTag: Array<TagProps['variant']> = [
        'info',
        'success',
        'warning',
        'error',
        'alt1',
        'alt2',
        'neutral',
    ];
    const datoFormat = 'DD. MMM';
    //const intl = useIntl();

    const allePerioder = svpPerioder ? alleSvpPerioderSortert(svpPerioder!, oppholdsPerioder) : [];
    return (
        <div className="periodeKort">
            <ExpansionCard aria-label="Small-variant">
                <ExpansionCard.Header className="ekspansjonsKortTittel">
                    <div id="dinSoknadArbeidsgiverNavn">
                        {arbeidgiverIndex ? (
                            <Tag variant={fargeRekkefølgeForTag[arbeidgiverIndex - 1]} size="small">
                                {title.navn}
                            </Tag>
                        ) : (
                            title.navn
                        )}
                        {title.id && `Org: ` + title.id}
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

                                            <Table.DataCell align="center" className="cell cellDato" scope="row">
                                                fra <b>{formaterDato(periode.fom, datoFormat)}</b>
                                                <br />
                                                til <b>{formaterDato(periode.tom, datoFormat)}</b>
                                            </Table.DataCell>

                                            <Table.DataCell className="cell" align="left">
                                                {periode.resultat ? (
                                                    <p>
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
