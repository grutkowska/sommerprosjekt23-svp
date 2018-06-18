import * as React from 'react';
import { connect } from 'react-redux';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import Modal from 'nav-frontend-modal';

import { DispatchProps } from 'common/redux/types';
import {
    lukkPeriodeDialog,
    opprettEllerOppdaterPeriode,
    slettPeriode
} from 'uttaksplan/redux/actions';
import {
    Permisjonsregler,
    Periodetype,
    Uttaksperiode,
    Periode,
    Dekningsgrad
} from 'uttaksplan/types';

import UttaksperiodeSkjema from 'uttaksplan/skjema/uttaksperiodeSkjema/UttaksperiodeSkjema';
import { getUgyldigeTidsperioderForUttaksperiode } from 'uttaksplan/utils/periodeskjemaUtils';
import { UttaksplanAppState } from 'uttaksplan/redux/types';
import { getPermisjonsregler } from 'uttaksplan/data/permisjonsregler';

interface StateProps {
    isOpen: boolean;
    termindato: Date;
    periode?: Uttaksperiode;
    perioder: Periode[];
    dekningsgrad: Dekningsgrad;
    permisjonsregler: Permisjonsregler;
    navnForelder1?: string;
    navnForelder2?: string;
}

type Props = StateProps & DispatchProps & InjectedIntlProps;

const PeriodeDialog: React.StatelessComponent<Props> = (props: Props) => {
    const periodetype = Periodetype.Uttak;
    const {
        isOpen,
        periode,
        perioder,
        permisjonsregler,
        navnForelder1,
        navnForelder2,
        dekningsgrad,
        termindato
    } = props;
    if (!isOpen) {
        return null;
    }
    return (
        <Modal
            isOpen={props.isOpen}
            contentLabel={props.intl.formatMessage({
                id: `uttaksplan.periodedialog.${periodetype}.tittel`
            })}
            onRequestClose={() => props.dispatch(lukkPeriodeDialog())}
            className="periodeSkjemaDialog">
            <UttaksperiodeSkjema
                periode={periode}
                ugyldigeTidsperioder={getUgyldigeTidsperioderForUttaksperiode(
                    perioder
                )}
                termindato={termindato}
                dekningsgrad={dekningsgrad}
                permisjonsregler={permisjonsregler}
                navnForelder1={navnForelder1}
                navnForelder2={navnForelder2}
                onChange={(p) => props.dispatch(opprettEllerOppdaterPeriode(p))}
                onFjern={(p) => props.dispatch(slettPeriode(p))}
            />
        </Modal>
    );
};

const mapStateToProps = (state: UttaksplanAppState): StateProps | undefined => {
    const { form, periode } = state.uttaksplan;
    const { termindato, dekningsgrad } = form;
    if (
        !termindato ||
        !dekningsgrad ||
        !periode.dialogErApen ||
        periode.valgtPeriode === undefined ||
        periode.valgtPeriode.periodetype !== Periodetype.Uttak
    ) {
        return undefined;
    }
    return {
        isOpen: true,
        periode: periode.valgtPeriode.periode as Uttaksperiode,
        perioder: periode.perioder,
        termindato,
        dekningsgrad,
        permisjonsregler: getPermisjonsregler(termindato),
        navnForelder1: form.navnForelder1,
        navnForelder2: form.navnForelder2
    };
};

export default connect(mapStateToProps)(injectIntl(PeriodeDialog));
