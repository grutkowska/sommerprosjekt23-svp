import { Regelgrunnlag, RegelTest, RegelTestresultat } from '../types';
import { uttaksplanErBareOpphold } from '../../../util/validation/uttaksplan/uttaksplanErBareOpphold';

export const erUttaksplanBareOppholdTest: RegelTest = (grunnlag: Regelgrunnlag): RegelTestresultat => {
    return { passerer: uttaksplanErBareOpphold(grunnlag.perioder) === false };
};