import { Alert } from '@navikt/ds-react';
import { SvangerskapspengeSak } from 'app/types/SvangerskapspengeSak';
import { SøkerinfoDTO } from 'app/types/SøkerinfoDTO';

interface Props {
    sak: SvangerskapspengeSak;
    søker: SøkerinfoDTO;
}

export const SVPAlert: React.FC<Props> = ({ sak, søker }) => {
    console.log(sak, søker);
    return (
        <Alert variant="info">
            {'Du kan få foreldrepenger fra ${dato}. Derfor får du ikke svangerskapspenger etter dette.'}
        </Alert>
    );
};
