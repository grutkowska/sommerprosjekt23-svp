import { Dekningsgrad } from 'app/types/Dekningsgrad';
import { TilgjengeligeStønadskontoerDTO } from 'app/types/TilgjengeligeStønadskontoerDTO';
import { TilgjengeligStønadskonto } from 'app/types/TilgjengeligStønadskonto';
import dayjs from 'dayjs';
import { StønadskontoType } from 'uttaksplan/types/StønadskontoType';

const getAktivitetsFrieUkerForeldrepenger = (dekningsgrad: Dekningsgrad, startdatoUttak: string): number => {
    if (dekningsgrad === Dekningsgrad.HUNDRE_PROSENT) {
        return 15;
    } else {
        return dayjs(startdatoUttak).isBefore(dayjs(new Date(2019, 0, 1))) ? 15 : 19;
    }
};

const opprettAktivitetsFriKonto = (
    kontoer: TilgjengeligStønadskonto[],
    dekningsgrad: Dekningsgrad,
    startdatoUttak: string,
    erMorUfør: boolean
): TilgjengeligStønadskonto[] => {
    if (erMorUfør === false) {
        return kontoer;
    }

    const nyeKontoer: TilgjengeligStønadskonto[] = [];
    const aktivitetskravFrieDagerForeldrepenger = getAktivitetsFrieUkerForeldrepenger(dekningsgrad, startdatoUttak) * 5;

    nyeKontoer.push({ ...kontoer[0], dager: kontoer[0].dager - aktivitetskravFrieDagerForeldrepenger });
    nyeKontoer.push({ konto: StønadskontoType.AktivitetsfriKvote, dager: aktivitetskravFrieDagerForeldrepenger });

    return nyeKontoer;
};

const mapTilgjengeligStønadskontoDTOToTilgjengeligStønadskonto = (
    stønadskontoerDTO: TilgjengeligeStønadskontoerDTO,
    dekningsgrad: Dekningsgrad,
    startdatoUttak: string,
    erMorUfør: boolean
): TilgjengeligStønadskonto[] => {
    let tilgjengeligeStønadskontoer: TilgjengeligStønadskonto[] = [];

    Object.keys(stønadskontoerDTO.kontoer)
        .filter((konto: string) => konto !== StønadskontoType.Flerbarnsdager)
        .forEach((konto) => {
            tilgjengeligeStønadskontoer.push({
                konto: konto as StønadskontoType,
                dager: stønadskontoerDTO.kontoer[konto],
            });
        });

    tilgjengeligeStønadskontoer = opprettAktivitetsFriKonto(
        tilgjengeligeStønadskontoer,
        dekningsgrad,
        startdatoUttak,
        erMorUfør
    );

    return tilgjengeligeStønadskontoer;
};

export const getValgtStønadskontoFor80Og100Prosent = (
    kontoer80: TilgjengeligeStønadskontoerDTO,
    kontoer100: TilgjengeligeStønadskontoerDTO,
    familiehendelsesdato: string,
    erMorUfør: boolean
) => {
    const åttiProsent = mapTilgjengeligStønadskontoDTOToTilgjengeligStønadskonto(
        kontoer80,
        Dekningsgrad.ÅTTI_PROSENT,
        familiehendelsesdato,
        erMorUfør
    );
    const hundreProsent = mapTilgjengeligStønadskontoDTOToTilgjengeligStønadskonto(
        kontoer100,
        Dekningsgrad.HUNDRE_PROSENT,
        familiehendelsesdato,
        erMorUfør
    );
    return {
        [Dekningsgrad.ÅTTI_PROSENT]: åttiProsent,
        [Dekningsgrad.HUNDRE_PROSENT]: hundreProsent,
    };
};
