import { LinkPanel } from '@navikt/ds-react';
import { bemUtils } from '@navikt/fp-common';
import { VirusIcon, PencilIcon, HospitalIcon, PiggybankIcon, PersonIcon, ParasolBeachIcon } from '@navikt/aksel-icons';

import OversiktRoutes from 'app/routes/routes';

import { Link } from 'react-router-dom';

import './se-dokumenter.css';

const SeDokumenter = () => {
    const bem = bemUtils('se-dokumenter');

    return (
        <LinkPanel as={Link} to={OversiktRoutes.DOKUMENTER} border={false} className={bem.element('linkPanel')}>
            <LinkPanel.Title as="h2">
                <div className={bem.block}>
                    <PersonIcon aria-hidden /> Se dokumentene i saken
                </div>
            </LinkPanel.Title>
            <LinkPanel.Description>Hei test</LinkPanel.Description>
        </LinkPanel>
    );
};

export default SeDokumenter;
