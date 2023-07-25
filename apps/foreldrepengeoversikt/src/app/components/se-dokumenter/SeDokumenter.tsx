import { BodyShort, Detail, LinkPanel } from '@navikt/ds-react';
import { bemUtils } from '@navikt/fp-common';

import OversiktRoutes from 'app/routes/routes';

import { Link } from 'react-router-dom';

import './se-dokumenter.css';

const SeDokumenter = () => {
    const bem = bemUtils('se-dokumenter');

    return (
        <LinkPanel as={Link} to={OversiktRoutes.DOKUMENTER} border={false} className={bem.element('linkPanel')}>
            <BodyShort size="medium">
                <div className={bem.block}>
                    <b>Se dokumenter</b>
                </div>
            </BodyShort>
            <Detail>Alle opplysninger brukt i saken din</Detail>
        </LinkPanel>
    );
};

export default SeDokumenter;
