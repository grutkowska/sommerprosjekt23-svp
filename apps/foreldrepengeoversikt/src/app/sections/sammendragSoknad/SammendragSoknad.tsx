import PeriodeKort from 'app/components/periode-kort/PeriodeKort';

import { SvangerskapspengeSak } from 'app/types/SvangerskapspengeSak';
import { SøkerinfoDTO, SøkerinfoDTOArbeidsforhold } from 'app/types/SøkerinfoDTO';
import { formaterDato } from 'app/utils/dateUtils';
import { XMarkIcon, CheckmarkIcon } from '@navikt/aksel-icons';
import { Arbeidsforhold } from 'app/types/svpTypesSommer';

interface Props {
    sak: SvangerskapspengeSak;
    søker: SøkerinfoDTO;
}

const getArbeidsgiverNavn = (
    søkerArbeidsforhold: SøkerinfoDTOArbeidsforhold[],
    gjeldendeVedtakArbeidsforhold: Arbeidsforhold
) => {
    if (gjeldendeVedtakArbeidsforhold.aktivitet.type === 'ORDINÆRT_ARBEID') {
        const arbeidsforhold = søkerArbeidsforhold.find(
            (i) => i.arbeidsgiverId === gjeldendeVedtakArbeidsforhold.aktivitet.arbeidsgiver.id
        );
        return arbeidsforhold?.arbeidsgiverNavn.toLowerCase();
    } else if (gjeldendeVedtakArbeidsforhold.aktivitet.type === 'FRILANS') {
        return 'frilanser';
    } else if (gjeldendeVedtakArbeidsforhold.aktivitet.type === 'SELVSTENDIG_NÆRINGSDRIVENDE') {
        return 'selvstendig næringsdrivende';
    } else {
        return 'Type not found';
    }
};

export const SammendragSoknad: React.FC<Props> = ({ sak, søker }) => {
    const datoFormat = 'DD. MMMM';
    let melding;
    console.log(sak);
    if ('åpenBehandling' in sak) {
        return (
            <>
                <h2>Din søknad</h2>
                {sak.åpenBehandling &&
                    sak.åpenBehandling.søknad &&
                    sak.åpenBehandling.søknad.arbeidsforhold.map((arbeidsforhold) => {
                        return arbeidsforhold.tilrettelegginger.map((periode) => {
                            melding = (
                                <p>
                                    <b>
                                        {formaterDato(periode.fom, datoFormat)} -{' '}
                                        {formaterDato(periode.tom, datoFormat)}
                                    </b>{' '}
                                    jobber du hos{' '}
                                    {søker.arbeidsforhold
                                        ? søker.arbeidsforhold.find(
                                              (i) => i.arbeidsgiverId === arbeidsforhold.aktivitet.arbeidsgiver.id
                                          )?.arbeidsgiverNavn
                                        : 'undefined'}{' '}
                                    og har søkt om {periode.type} svangerskapspenger
                                </p>
                            );
                            return (
                                <PeriodeKort
                                    key={
                                        sak.åpenBehandling &&
                                        sak.åpenBehandling.søknad &&
                                        sak.åpenBehandling.søknad.arbeidsforhold.indexOf(arbeidsforhold)
                                    }
                                >
                                    {melding}
                                </PeriodeKort>
                            );
                        });
                    })}
            </>
        );
    } else if ('gjeldendeVedtak' in sak) {
        return (
            <>
                <h2>Dine vedtak</h2>
                {sak.gjeldendeVedtak &&
                    sak.gjeldendeVedtak.arbeidsforhold.map((arbeidsforhold) => {
                        return arbeidsforhold.tilrettelegginger.map((periode) => {
                            melding = (
                                <>
                                    <p>
                                        <b>
                                            {' '}
                                            {formaterDato(periode.fom, datoFormat)} -{' '}
                                            {formaterDato(periode.tom, datoFormat)}{' '}
                                        </b>
                                        jobber du hos{' '}
                                        {søker.arbeidsforhold &&
                                            getArbeidsgiverNavn(søker.arbeidsforhold, arbeidsforhold)}{' '}
                                        og mottar {100 - periode.arbeidstidprosent}% svangerskapspenger
                                        {periode.resultat.resultatType === 'INNVILGET' ? (
                                            <CheckmarkIcon title="a11y-title" fontSize="1rem" />
                                        ) : (
                                            <XMarkIcon title="a11y-title" fontSize="1rem" />
                                        )}
                                    </p>
                                </>
                            );
                            return (
                                <PeriodeKort
                                    key={
                                        sak.åpenBehandling &&
                                        sak.åpenBehandling.søknad &&
                                        sak.åpenBehandling.søknad.arbeidsforhold.indexOf(arbeidsforhold)
                                    }
                                >
                                    {melding}
                                </PeriodeKort>
                            );
                        });
                    })}
            </>
        );
    } else if ('sakAvsluttet' in sak) {
        return (
            <>
                <h2>Dine vedtak</h2>
                {sak.gjeldendeVedtak &&
                    sak.gjeldendeVedtak.arbeidsforhold.map((arbeidsforhold) => {
                        return arbeidsforhold.tilrettelegginger.map((periode) => {
                            melding = (
                                <>
                                    <p>
                                        <b>
                                            {formaterDato(periode.fom, datoFormat)} -{' '}
                                            {formaterDato(periode.tom, datoFormat)}
                                        </b>{' '}
                                        jobber du hos{' '}
                                        {søker.arbeidsforhold &&
                                            søker.arbeidsforhold.find(
                                                (i) => i.arbeidsgiverId === arbeidsforhold.aktivitet.arbeidsgiver.id
                                            )?.arbeidsgiverNavn}{' '}
                                        og mottar {100 - periode.arbeidstidprosent}% svangerskapspenger{' '}
                                        {periode.resultat.resultatType === 'INNVILGET' ? (
                                            <CheckmarkIcon title="a11y-title" fontSize="1rem" />
                                        ) : (
                                            <XMarkIcon title="a11y-title" fontSize="1rem" />
                                        )}
                                    </p>
                                </>
                            );
                            return (
                                <PeriodeKort
                                    key={
                                        sak.åpenBehandling &&
                                        sak.åpenBehandling.søknad &&
                                        sak.åpenBehandling.søknad.arbeidsforhold.indexOf(arbeidsforhold)
                                    }
                                >
                                    {melding}
                                </PeriodeKort>
                            );
                        });
                    })}
            </>
        );
    } else return <></>;
};
