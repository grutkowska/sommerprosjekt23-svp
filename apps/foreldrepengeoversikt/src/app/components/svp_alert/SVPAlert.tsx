import { Alert } from '@navikt/ds-react';
import { SvangerskapspengeSak } from 'app/types/SvangerskapspengeSak';
import { SøkerinfoDTO } from 'app/types/SøkerinfoDTO';
import { getTerminMinus21Dager } from '../periode-timeline/PeriodeTimeline';
import { formaterDato } from 'app/utils/dateUtils';

interface Props {
    sak: SvangerskapspengeSak;
    søker: SøkerinfoDTO;
}

export const SVPAlert: React.FC<Props> = ({ sak, søker }) => {
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
