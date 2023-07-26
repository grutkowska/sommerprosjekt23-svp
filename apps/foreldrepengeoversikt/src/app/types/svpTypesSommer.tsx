export interface GjeldendeVedtak {
    arbeidsforhold: Arbeidsforhold[];
    avslagÅrsak: string;
}

export interface Arbeidsforhold {
    aktivitet: Aktivitet;
    avslutningsÅrsak?: string; //Enum??
    behovFrom: string;
    oppholdsperioder: [];
    tilrettelegginger: svpPerioder[];
}

export interface svpPerioder {
    fom: string;
    tom: string;
    type: string; // Enums??
    arbeidstidprosent: number;
    resultat: ResultatSammendrag;
    årsak: string; // Enums??
    oppholdKilde: string;
}

export interface oppholdsperioder extends svpPerioder {
    årsak: string; // Enums??
    oppholdKilde: string;
}

interface Aktivitet {
    arbeidsgiver: Arbeidsgiver;
    type: string;
}

interface Arbeidsgiver {
    id: string;
    type: string;
}

interface ResultatSammendrag {
    resultatType: string; //Enum??
    utbetalingsgrad: number;
}

export interface Søknad {
    arbeidsforhold: Arbeidsforhold[];
    tilstand: string; // Enum??
}
