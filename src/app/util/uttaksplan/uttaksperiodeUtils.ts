import { StønadskontoType } from '../../types/uttaksplan/periodetyper';
import { DatoAvgrensninger } from '../../bolker/tidsperiode-bolk/TidsperiodeBolk';
import { Uttaksdagen } from './Uttaksdagen';
import { Permisjonsregler } from '../../types/uttaksplan/permisjonsregler';
import { Avgrensninger } from 'nav-datovelger';
import { Tidsperiode } from 'common/types';

const fellesUttakAvgrensninger: Avgrensninger = {
    helgedagerIkkeTillatt: true
};

export function getDatoavgrensningerForStønadskonto(
    konto: StønadskontoType,
    familiehendelsesdato: Date,
    permisjonsregler: Permisjonsregler,
    ugyldigeTidsperioder: Tidsperiode[]
): DatoAvgrensninger | undefined {
    if (konto === StønadskontoType.ForeldrepengerFørFødsel) {
        return getDatoavgrensningerForForeldrepengerFørFødsel(
            familiehendelsesdato,
            permisjonsregler,
            ugyldigeTidsperioder
        );
    }
    return {
        fra: {
            ...fellesUttakAvgrensninger,
            ugyldigeTidsperioder
        },
        til: { ...fellesUttakAvgrensninger, ugyldigeTidsperioder }
    };
}

function getDatoavgrensningerForForeldrepengerFørFødsel(
    familiehendelsesdato: Date,
    permisjonsregler: Permisjonsregler,
    ugyldigeTidsperioder: Tidsperiode[]
): DatoAvgrensninger {
    const avgrensninger: Avgrensninger = {
        ...fellesUttakAvgrensninger,
        minDato: Uttaksdagen(familiehendelsesdato).trekkFra(permisjonsregler.maksAntallUkerForeldrepengerFørFødsel * 5),
        maksDato: Uttaksdagen(familiehendelsesdato).forrige(),
        ugyldigeTidsperioder
    };
    return {
        fra: avgrensninger,
        til: avgrensninger
    };
}
