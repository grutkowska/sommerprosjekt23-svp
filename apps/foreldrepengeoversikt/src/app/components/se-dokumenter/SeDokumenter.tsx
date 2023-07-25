import { LinkPanel } from '@navikt/ds-react';
import { bemUtils } from '@navikt/fp-common';

import OversiktRoutes from 'app/routes/routes';

import { Link } from 'react-router-dom';

import './se-dokumenter.css';

const SeDokumenter = () => {
    const bem = bemUtils('se-dokumenter');

    return (
        <LinkPanel as={Link} to={OversiktRoutes.DOKUMENTER} border={false} className={bem.element('linkPanel')}>
            <LinkPanel.Title as="h2">
                <div className={bem.block}>Se dokumenter</div>
            </LinkPanel.Title>
            <LinkPanel.Description>Alle opplysninger brukt i saken din</LinkPanel.Description>
        </LinkPanel>
    );
};

export default SeDokumenter;
