import OversiktRoutes from 'app/routes/routes';
import { useSetBackgroundColor } from 'app/hooks/useBackgroundColor';
import { useSetSelectedRoute } from 'app/hooks/useSelectedRoute';

import Tidslinje from 'app/sections/tidslinje/Tidslinje';
import './tidslinje-page.css';
import { bemUtils } from '@navikt/fp-common';
import { SøkerinfoDTO } from 'app/types/SøkerinfoDTO';
import { SakOppslag } from 'app/types/SakOppslag';
interface Props {
    søker: SøkerinfoDTO | undefined;
    saker: SakOppslag;
}

const TidslinjePage: React.FunctionComponent<Props> = ({ søker, saker }) => {
    const bem = bemUtils('tidslinje-page');
    useSetBackgroundColor('white');
    useSetSelectedRoute(OversiktRoutes.TIDSLINJEN);

    return (
        <div className={bem.element('div')}>
            <Tidslinje saker={saker} visHeleTidslinjen={true} søker={søker} />
        </div>
    );
};

export default TidslinjePage;
