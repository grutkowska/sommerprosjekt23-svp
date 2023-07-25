import { bemUtils } from '@navikt/fp-common';
import OversiktRoutes from 'app/routes/routes';

import { Link } from 'react-router-dom';

import './se-hele-prosessen.css';

const SeHeleProsessenLink = () => {
    const bem = bemUtils('se-hele-prosessen');

    return (
        <div className={bem.element('linkContainer')}>
            <Link style={{ paddingTop: '8px' }} to={OversiktRoutes.TIDSLINJEN} className={bem.element('link')}>
                Se hele prosessen
            </Link>
        </div>
    );
};

export default SeHeleProsessenLink;
