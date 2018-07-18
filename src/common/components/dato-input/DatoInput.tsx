import * as React from 'react';
import SkjemaInputElement from '../skjema-input-element/SkjemaInputElement';
import { Feil } from '../skjema-input-element/types';
import Datovelger, { Props as DatovelgerProps } from 'nav-datovelger';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import * as moment from 'moment';

export interface DatoInputProps extends DatovelgerProps {
    label: string | React.ReactNode;
    feil?: Feil;
}

export type Props = DatoInputProps & InjectedIntlProps;

class DatoInput extends React.Component<Props, {}> {
    render() {
        const { dato, label, feil, intl, ...rest } = this.props;
        return (
            <SkjemaInputElement id={this.props.id} feil={feil} label={label}>
                <Datovelger
                    {...rest}
                    dato={dato ? moment(dato).toDate() : dato}
                    locale={intl.locale}
                    inputProps={{ placeholder: 'dd.mm.åååå' }}
                />
            </SkjemaInputElement>
        );
    }
}

export default injectIntl(DatoInput);
