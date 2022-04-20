import React from 'react';
import InteractiveListElement, {
    InteractiveListElementProps,
} from '../../../../common/components/skjema/elements/interactive-list-element/InteractiveListElement';
import { FrilansOppdrag } from '../../../types/søknad/FrilansInformasjon';
import getMessage from 'common/util/i18nUtils';
import { useIntl } from 'react-intl';
import { prettifyTidsperiode } from '../../../util/dates/dates';
import { mapTidsperiodeStringToTidsperiode } from '../../../util/tidsperiodeUtils';

interface FrilansOppdragListeElementProps extends InteractiveListElementProps {
    oppdrag: FrilansOppdrag;
}

const FrilansOppdragListElement: React.FunctionComponent<FrilansOppdragListeElementProps> = ({ oppdrag, ...rest }) => {
    const intl = useIntl();
    const deleteLinkText = getMessage(intl, 'slett.oppdrag');
    return (
        <InteractiveListElement
            title={oppdrag.navnPåArbeidsgiver}
            text={prettifyTidsperiode(mapTidsperiodeStringToTidsperiode(oppdrag.tidsperiode))}
            deleteLinkText={deleteLinkText}
            {...rest}
        />
    );
};

export default FrilansOppdragListElement;
