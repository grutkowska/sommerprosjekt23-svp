import * as React from 'react';
import { connect } from 'react-redux';
import { InjectedIntlProps, injectIntl } from 'react-intl';

import AnnenForelderPersonaliaPartial from './partials/AnnenForelderPersonaliaPartial';
import AnnenForelderErKjentPartial from './partials/AnnenForelderErKjentPartial';

import Steg, { StegProps } from '../../../components/steg/Steg';
import { AppState } from '../../../redux/reducers';
import { RegistrertAnnenForelder } from '../../../types/søknad/AnnenForelder';
import { ForeldreansvarBarn } from '../../../types/søknad/Barn';
import { DispatchProps } from 'common/redux/types';
import { HistoryProps } from '../../../types/common';
import Person from '../../../types/Person';
import { erFarEllerMedmor } from '../../../util/domain/personUtil';
import { annenForelderErGyldig } from '../../../util/validation/steg/annenForelder';
import isAvailable from '../isAvailable';
import { StegID } from '../../../util/routing/stegConfig';

interface StateProps {
    personHentet: boolean;
    erSøkerFarEllerMedmor: boolean;
    registrertAnnenForelder: RegistrertAnnenForelder;
    visInformasjonVedOmsorgsovertakelse: boolean;
    shouldRenderAnnenForelderErKjentPartial: boolean;
    stegProps: StegProps;
}

type Props = StateProps & InjectedIntlProps & DispatchProps & HistoryProps;
class AnnenForelderSteg extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {
            personHentet,
            erSøkerFarEllerMedmor,
            registrertAnnenForelder,
            visInformasjonVedOmsorgsovertakelse,
            shouldRenderAnnenForelderErKjentPartial,
            stegProps
        } = this.props;

        if (personHentet) {
            return (
                <Steg {...stegProps}>
                    <React.Fragment>
                        <AnnenForelderPersonaliaPartial />
                        {shouldRenderAnnenForelderErKjentPartial && (
                            <AnnenForelderErKjentPartial
                                registrertAnnenForelder={
                                    registrertAnnenForelder
                                }
                                erFarEllerMedmor={erSøkerFarEllerMedmor}
                                visInformasjonVedOmsorgsovertakelse={
                                    visInformasjonVedOmsorgsovertakelse
                                }
                            />
                        )}
                    </React.Fragment>
                </Steg>
            );
        }
        return null;
    }
}

const mapStateToProps = (state: AppState, props: Props): StateProps => {
    const person = state.api.person as Person;
    const registrertAnnenForelder = state.api
        .registrertAnnenForelder as RegistrertAnnenForelder;
    const barn = state.søknad.barn as ForeldreansvarBarn;
    const søker = state.søknad.søker;
    const erSøkerFarEllerMedmor = erFarEllerMedmor(person.kjønn, søker.rolle);
    const annenForelder = state.søknad.annenForelder;

    const stegProps: StegProps = {
        id: StegID.ANNEN_FORELDER,
        renderFortsettKnapp: annenForelderErGyldig(
            state.søknad,
            person,
            registrertAnnenForelder
        ),
        history: props.history,
        isAvailable: isAvailable(StegID.ANNEN_FORELDER, state)
    };

    const shouldRenderAnnenForelderErKjentPartial =
        ((annenForelder.navn && annenForelder.fnr) ||
            registrertAnnenForelder) !== undefined;

    return {
        stegProps,
        personHentet: person !== undefined,
        erSøkerFarEllerMedmor,
        registrertAnnenForelder,
        shouldRenderAnnenForelderErKjentPartial,
        visInformasjonVedOmsorgsovertakelse:
            barn.omsorgsovertakelse && barn.omsorgsovertakelse.length > 0
    };
};

export default connect<StateProps, {}, {}>(mapStateToProps)(
    injectIntl(AnnenForelderSteg)
);
