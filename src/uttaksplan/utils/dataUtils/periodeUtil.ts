import { isWithinRange, isBefore, isSameDay, isAfter } from 'date-fns';
import {
    Periode,
    Uttaksperiode,
    Utsettelsesperiode,
    Tidsperiode,
    Periodetype,
    Oppholdsperiode,
    OppholdÅrsakType,
    OppholdOpphavType,
    StønadskontoType,
    StønadskontoUttak
} from '../../types';
import { uttaksdagUtil, tidsperiodeUtil } from './';
import { getTidsperiode } from 'uttaksplan/utils/dataUtils/tidsperiodeUtil';

export const perioderUtil = (perioder: Periode[]) => ({
    getOpphold: () => getOpphold(perioder),
    getPeriode: (id: string) => getPeriode(perioder, id),
    getUttak: () => getUttaksperioder(perioder),
    getUttakOgUtsettelser: () => getUttakOgUtsettelser(perioder),
    getUtsettelser: () => getUtsettelser(perioder),
    getAntallUttaksdager: (konto?: StønadskontoType) =>
        getAntallUttaksdagerIPerioderOgKonto(perioder, konto),
    getAntallUttaksdagerPerKonto: (): StønadskontoUttak =>
        getAntallUttaksdagerPerKonto(getUttaksperioder(perioder)),
    finnPeriodeMedDato: (dato: Date) => finnPeriodeMedDato(perioder, dato),
    finnOverlappendePerioder: (tidsperiode: Tidsperiode) =>
        finnOverlappendePerioder(perioder, tidsperiode),
    finnForegåendePerioder: (periode: Periode) =>
        finnPerioderFørPeriode(perioder, periode),
    finnPåfølgendePerioder: (periode: Periode) =>
        finnPerioderEtterPeriode(perioder, periode),
    fjernPerioder: (fjernes: Periode[]) => fjernPerioder(perioder, fjernes),
    forskyvPerioder: (uttaksdager: number) =>
        forskyvPerioder(perioder, uttaksdager),
    oppdaterPeriode: (periode: Periode) => oppdaterPeriode(perioder, periode)
});

export const periodeUtil = (periode: Periode) => ({
    setStartdato: (startdato: Date) => flyttPeriode(periode, startdato),
    erLik: (periode2: Periode) => erPerioderLike(periode, periode2),
    erSammenhengende: (periode2: Periode) =>
        erPerioderSammenhengende(periode, periode2),
    getAntallUttaksdager: () =>
        tidsperiodeUtil(periode.tidsperiode).getAntallUttaksdager(),
    finnOppholdsperioderVedEndretTidsperiode: (endretPeriode: Periode) =>
        finnOppholdVedEndretTidsperiode(
            periode,
            endretPeriode,
            'periodeendring'
        )
});

/**
 * Sorterer perioder ut fra startdato - asc
 * @param p1
 * @param p2
 */
export function sorterPerioder(p1: Periode, p2: Periode) {
    return p1.tidsperiode.startdato >= p2.tidsperiode.startdato ? 1 : -1;
}

function getPeriode(perioder: Periode[], id: string): Periode | undefined {
    return perioder.find((p) => p.id === id);
}

/**
 * Returnerer perioder som er uttaksperioder
 * @param perioder
 */
function getUttaksperioder(perioder: Periode[]): Uttaksperiode[] {
    return perioder.filter(
        (periode) => periode.type === Periodetype.Uttak
    ) as Uttaksperiode[];
}

/**
 * Returnerer perioder som er uttaksperioder
 * @param perioder
 */
function getUtsettelser(perioder: Periode[]): Utsettelsesperiode[] {
    return perioder.filter(
        (periode) => periode.type === Periodetype.Utsettelse
    ) as Utsettelsesperiode[];
}

/**
 * Returnerer perioder som er uttaksperioder
 * @param perioder
 */
function getOpphold(perioder: Periode[]): Oppholdsperiode[] {
    return perioder.filter(
        (periode) => periode.type === Periodetype.Opphold
    ) as Oppholdsperiode[];
}

/**
 * Returnerer Uttaksperioder eller Utsettelser fra perioder
 * @param perioder
 */
function getUttakOgUtsettelser(
    perioder: Periode[]
): Array<Uttaksperiode | Utsettelsesperiode> {
    return perioder.filter(
        (periode) =>
            periode.type === Periodetype.Utsettelse ||
            periode.type === Periodetype.Uttak
    ) as Utsettelsesperiode[];
}

/**
 * Finner periode som inneholder angitt dato
 * @param perioder
 * @param dato dato som periode skal inneholde
 */
function finnPeriodeMedDato(
    perioder: Periode[],
    dato: Date
): Periode | undefined {
    return perioder.find((periode) => {
        return isWithinRange(
            dato,
            periode.tidsperiode.startdato,
            periode.tidsperiode.sluttdato
        );
    });
}

/**
 * Finner perioder som berører tidsperiode
 * @param perioder Alle perioder
 * @param tidsperiode
 */
function finnOverlappendePerioder(
    perioder: Periode[],
    tidsperiode: Tidsperiode
): Periode[] {
    return perioder.filter((periode) => {
        const { startdato, sluttdato } = periode.tidsperiode;
        return (
            (isBefore(startdato, tidsperiode.sluttdato) ||
                isSameDay(startdato, tidsperiode.sluttdato)) &&
            (isAfter(sluttdato, tidsperiode.startdato) ||
                isSameDay(sluttdato, tidsperiode.startdato))
        );
    });
}

/**
 * Flytter periode til ny startdato, beholder samme antall uttaksdager
 * @param periode
 * @param startdato
 */
function flyttPeriode(periode: Periode, startdato: Date): Periode {
    return {
        ...periode,
        tidsperiode: tidsperiodeUtil(periode.tidsperiode).setStartdato(
            startdato
        )
    };
}

/**
 * Forskyver en periode med uttaksdager
 * @param periode
 * @param uttaksdager
 */
function forskyvPeriode(periode: Periode, uttaksdager: number): Periode {
    return flyttPeriode(
        periode,
        uttaksdagUtil(periode.tidsperiode.startdato).leggTil(uttaksdager)
    );
}

/**
 * Forskyver perioder med uttaksdager
 * @param perioder
 * @param uttaksdager
 */
function forskyvPerioder(perioder: Periode[], uttaksdager: number): Periode[] {
    return perioder.map((periode) => {
        if (periode.type === Periodetype.Utsettelse) {
            return periode;
        }
        return forskyvPeriode(periode, uttaksdager);
    });
}

/**
 * Finner alle perioder før periode ut fra startdato
 * @param perioder
 * @param periode
 */
function finnPerioderFørPeriode(
    perioder: Periode[],
    periode: Periode
): Periode[] {
    return perioder.filter((p) =>
        isBefore(p.tidsperiode.sluttdato, periode.tidsperiode.startdato)
    );
}

/**
 * Finner alle perioder etter periode ut fra startdato
 * @param perioder
 * @param periode
 */

function finnPerioderEtterPeriode(
    perioder: Periode[],
    periode: Periode
): Periode[] {
    return perioder.filter((p) =>
        isAfter(p.tidsperiode.startdato, periode.tidsperiode.sluttdato)
    );
}

/**
 * Sjekker om to perioder er kan slåes sammen til en periode.
 * Dvs. de er like signaturer (type, forelder, konto etc.) og har
 * tidsperioder som er sammenhengende
 * @param p1 periode 1
 * @param p2 periode 2
 */
function erPerioderLike(p1: Periode, p2: Periode) {
    if (p1.type !== Periodetype.Uttak || p2.type !== Periodetype.Uttak) {
        return false;
    }
    const getPeriodeFootprint = (periode: Uttaksperiode) =>
        `${periode.type}${periode.forelder}${periode.konto}${
            periode.låstForelder
        }`;
    const k1 = getPeriodeFootprint(p1);
    const k2 = getPeriodeFootprint(p2);
    return k1 === k2;
}

/**
 * Sjekker om to perioder er sammenhengende/dvs. det er ingen
 * uttaksdager mellom p1.sluttdato og p2.startdato
 * @param p1
 * @param p2
 */
function erPerioderSammenhengende(p1: Periode, p2: Periode) {
    const p1NesteUttaksdato = uttaksdagUtil(p1.tidsperiode.sluttdato).neste();
    const p2Startdato = p2.tidsperiode.startdato;
    return isSameDay(p1NesteUttaksdato, p2Startdato);
}

/**
 * Finner oppholdsperioder før og etter periode når tidsperiode
 * for en periode endres
 * @param prevPeriode Opprinnelig periode
 * @param periode Endret periode
 * @param opphav Hvor endringen kommer fra - settes på oppholdet
 */
function finnOppholdVedEndretTidsperiode(
    prevPeriode: Periode,
    periode: Periode,
    opphav: OppholdOpphavType
): Oppholdsperiode[] {
    const opphold: Oppholdsperiode[] = [];
    const diffStartdato = uttaksdagUtil(
        prevPeriode.tidsperiode.startdato
    ).uttaksdagerFremTilDato(periode.tidsperiode.startdato);
    if (diffStartdato > 0) {
        opphold.push({
            type: Periodetype.Opphold,
            årsak: OppholdÅrsakType.Ingen,
            forelder: periode.forelder,
            tidsperiode: getTidsperiode(
                prevPeriode.tidsperiode.startdato,
                diffStartdato
            ),
            opphav
        });
    }
    return opphold;
}

/**
 * Summerer opp antall uttaksdager i perioder, og evt. for gitt StønadstypeKonto
 * @param perioder
 * @param konto
 */
function getAntallUttaksdagerIPerioderOgKonto(
    perioder: Periode[],
    konto?: StønadskontoType
): number {
    const uttaksperioder = perioderUtil(perioder).getUttak();
    return uttaksperioder.reduce((dager: number, periode: Uttaksperiode) => {
        if (konto === undefined || periode.konto === konto) {
            return (
                dager +
                tidsperiodeUtil(periode.tidsperiode).getAntallUttaksdager()
            );
        }
        return dager;
    }, 0);
}

/**
 * Summerer antall uttaksdager i uttaksperioder og
 * grupperer dem per StønadstypeKonto
 * @param uttaksperioder
 */
function getAntallUttaksdagerPerKonto(
    uttaksperioder: Uttaksperiode[]
): StønadskontoUttak {
    const fordeling: StønadskontoUttak = new Map();
    fordeling.set(
        StønadskontoType.ForeldrepengerFørFødsel,
        getAntallUttaksdagerIPerioderOgKonto(
            uttaksperioder,
            StønadskontoType.ForeldrepengerFørFødsel
        )
    );
    fordeling.set(
        StønadskontoType.Foreldrepenger,
        getAntallUttaksdagerIPerioderOgKonto(
            uttaksperioder,
            StønadskontoType.Foreldrepenger
        )
    );
    fordeling.set(
        StønadskontoType.Mødrekvote,
        getAntallUttaksdagerIPerioderOgKonto(
            uttaksperioder,
            StønadskontoType.Mødrekvote
        )
    );
    fordeling.set(
        StønadskontoType.Fedrekvote,
        getAntallUttaksdagerIPerioderOgKonto(
            uttaksperioder,
            StønadskontoType.Fedrekvote
        )
    );
    fordeling.set(
        StønadskontoType.Fellesperiode,
        getAntallUttaksdagerIPerioderOgKonto(
            uttaksperioder,
            StønadskontoType.Fellesperiode
        )
    );
    fordeling.set(
        StønadskontoType.SamtidigUttak,
        getAntallUttaksdagerIPerioderOgKonto(
            uttaksperioder,
            StønadskontoType.SamtidigUttak
        )
    );
    return fordeling;
}

/**
 * Fjerner fjernes fra perioder
 * @param perioder
 * @param fjernes
 */
function fjernPerioder(perioder: Periode[], fjernes: Periode[]) {
    return perioder.filter(
        (p) => (fjernes.findIndex((f) => p.id === f.id) >= 0 ? false : true)
    );
}

/**
 * Erstatter periode i perioder
 * @param perioder
 * @param periode
 */
function oppdaterPeriode(perioder: Periode[], periode: Periode) {
    return perioder.map((p) => (p.id === periode.id ? periode : p));
}
