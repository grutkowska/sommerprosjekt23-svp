import VisibilityFunction from '../../../types/dom/Visibility';
import { SøkerRolle, Søkersituasjon } from '../../../types/søknad/Søknad';

interface SøkerRolleSpørsmålVisibleData {
    situasjon?: Søkersituasjon;
    roller: SøkerRolle[];
}
const papirsøknadInfoVisible: VisibilityFunction<Søkersituasjon | undefined> = (situasjon?: Søkersituasjon) => {
    return situasjon === Søkersituasjon.FORELDREANSVAR;
};

const søkerRolleSpørsmålVisible: VisibilityFunction<SøkerRolleSpørsmålVisibleData> = (
    data: SøkerRolleSpørsmålVisibleData
) => {
    return data.roller.length > 0 && data.situasjon !== Søkersituasjon.FORELDREANSVAR && data.situasjon !== undefined;
};

export default {
    papirsøknadInfo: papirsøknadInfoVisible,
    søkerRolleSpørsmål: søkerRolleSpørsmålVisible
};
