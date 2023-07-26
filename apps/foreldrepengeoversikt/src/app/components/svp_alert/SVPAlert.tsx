import { Alert } from '@navikt/ds-react';
import { SvangerskapspengeSak } from 'app/types/SvangerskapspengeSak';
import { getTerminMinus21Dager } from '../periode-timeline/PeriodeTimeline';
import { formaterDato } from 'app/utils/dateUtils';

interface Props {
    sak: SvangerskapspengeSak;
}

export const SVPAlert: React.FC<Props> = ({ sak }) => {
    const terminMinus21DagerTilTekst = formaterDato(
        getTerminMinus21Dager(sak.familiehendelse?.termindato),
        'D. MMMM YYYY'
    );
    return (
        <Alert variant="info">
            {'Du kan få foreldrepenger fra ' +
                terminMinus21DagerTilTekst +
                '. Derfor får du ikke svangerskapspenger etter dette.'}
        </Alert>
    );
};
