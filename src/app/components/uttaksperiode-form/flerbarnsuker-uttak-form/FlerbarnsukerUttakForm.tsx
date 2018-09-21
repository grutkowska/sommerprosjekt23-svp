import * as React from 'react';
import SkalDuVæreHjemmeSamtidigMedDenAndreForelderenSpørsmål from '../../../sp\u00F8rsm\u00E5l/SkalDuV\u00E6reHjemmeSamtidigMedDenAndreForelderenSp\u00F8rsm\u00E5l';
import Block from 'common/components/block/Block';
import Veilederinfo from 'common/components/veileder-info/Veilederinfo';
import { FormattedMessage } from 'react-intl';

export interface Props {
    ønskerSamtidigUttak: boolean | undefined;
    onChange: (ønskerSamtidigUttak: boolean) => void;
}

class FlerbarnsukerUttakForm extends React.Component<Props, {}> {
    render() {
        const { ønskerSamtidigUttak, onChange } = this.props;
        const visVeileder = ønskerSamtidigUttak === true;
        return (
            <>
                <Block margin={visVeileder ? 's' : 'm'}>
                    <SkalDuVæreHjemmeSamtidigMedDenAndreForelderenSpørsmål
                        ønskerSamtidigUttak={ønskerSamtidigUttak}
                        onChange={onChange}
                    />
                </Block>
                <Block margin="xs" visible={visVeileder}>
                    <Veilederinfo>
                        <FormattedMessage id="uttak.flerbarnsuker.samtidigUttak.veileder" />
                    </Veilederinfo>
                </Block>
            </>
        );
    }
}
export default FlerbarnsukerUttakForm;
