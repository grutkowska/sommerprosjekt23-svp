import { UttaksplanRegelgrunnlag } from '../types';
import { RegelTestresultat, RegelTest } from 'shared/regler/regelTypes';
import { getUgyldigUttak } from '../../../util/validation/uttaksplan/uttakMorValidation';

export const ferieEllerArbeidInnenforDeFørsteÅtteUkeneEtterTermindatoTest: RegelTest = (
    grunnlag: UttaksplanRegelgrunnlag
): RegelTestresultat => {
    if (grunnlag.søknadsinfo.søker.erMor) {
        const ugyldigePerioder = getUgyldigUttak(
            grunnlag.perioder,
            grunnlag.søknadsinfo.søknaden.familiehendelsesdato,
            grunnlag.søknadsinfo.søknaden.situasjon,
            grunnlag.søknadsinfo.søknaden.erFlerbarnssøknad,
            'mellomSyvOgÅtteUkerForMor'
        );

        const passerer = ugyldigePerioder.length === 0;
        return {
            passerer,
            info: ugyldigePerioder.map((periode) => ({
                periodeId: periode.id,
            })),
        };
    }

    return { passerer: true };
};
