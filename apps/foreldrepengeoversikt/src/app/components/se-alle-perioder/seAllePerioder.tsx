import { bemUtils } from '@navikt/fp-common';
//import OversiktRoutes from 'app/routes/routes';

import { Link } from 'react-router-dom';

import './se-alle-perioder.css';
import { setAllePerioder } from '../periode-kort/PeriodeKort';

const SeAllePerioder = () => {
    const bem = bemUtils('se-alle-perioder');

    return (
        <Link
            to={'#0'}
            className={bem.element('linkContainer')}
            onClick={() => {
                setAllePerioder();
            }}
        >
            Se alle perioder
        </Link>
    );
};

export default SeAllePerioder;
