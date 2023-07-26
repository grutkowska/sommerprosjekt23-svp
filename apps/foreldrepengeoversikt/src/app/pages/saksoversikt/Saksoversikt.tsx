import { BodyShort, Loader } from '@navikt/ds-react';
import { bemUtils, intlUtils } from '@navikt/fp-common';
import Api from 'app/api/api';
import ContentSection from 'app/components/content-section/ContentSection';
import SeDokumenter from 'app/components/se-dokumenter/SeDokumenter';
import { useSetBackgroundColor } from 'app/hooks/useBackgroundColor';
import { useSetSelectedRoute } from 'app/hooks/useSelectedRoute';
import { useSetSelectedSak } from 'app/hooks/useSelectedSak';
import { useState } from 'react';
import OversiktRoutes from 'app/routes/routes';
import DinPlan from 'app/sections/din-plan/DinPlan';
import Oppgaver from 'app/sections/oppgaver/Oppgaver';
import Tidslinje from 'app/sections/tidslinje/Tidslinje';
import { HendelseType } from 'app/types/HendelseType';
import { MinidialogInnslag } from 'app/types/HistorikkInnslag';
import { SakOppslag } from 'app/types/SakOppslag';
import { SøkerinfoDTO } from 'app/types/SøkerinfoDTO';
import { Ytelse } from 'app/types/Ytelse';
import { getAlleYtelser, getFamiliehendelseDato, getNavnAnnenForelder } from 'app/utils/sakerUtils';
import { AxiosError } from 'axios';
import dayjs from 'dayjs';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';
import './saksoversikt.css';
import { RequestStatus } from 'app/types/RequestStatus';
import { SammendragSoknad } from 'app/sections/sammendragSoknad/SammendragSoknad';
import { SvangerskapspengeSak } from 'app/types/SvangerskapspengeSak';
import classNames from 'classnames';
import PeriodeTimeline from 'app/components/periode-timeline/PeriodeTimeline';
import { SvangerskapDashboardwrapper } from './SvangerskapDashboardWrapper';
import useDebounceOnWindowEvent from 'app/hooks/useDebounceOnWindowEvent';
import SeHeleProsessenLink from 'app/components/se-hele-prosessen/SeHeleProsessenLink';
import { SVPAlert } from 'app/components/svp_alert/SVPAlert';
import { AvslagsMelding } from 'app/sections/avslags-melding/AvslagsMelding';

interface Props {
    minidialogerData: MinidialogInnslag[] | undefined;
    minidialogerError: AxiosError | null;
    saker: SakOppslag;
    søkerinfo: SøkerinfoDTO;
}

const Saksoversikt: React.FunctionComponent<Props> = ({ minidialogerData, minidialogerError, saker, søkerinfo }) => {
    const intl = useIntl();
    const bem = bemUtils('saksoversikt');
    useSetBackgroundColor('blue');
    useSetSelectedRoute(OversiktRoutes.SAKSOVERSIKT);
    const navnPåSøker = søkerinfo.søker.fornavn;
    const params = useParams();
    const alleSaker = getAlleYtelser(saker);
    const [storSkjerm, setStorSkjerm] = useState(() => window.innerWidth > 800);
    //const [valgtDato, setValgtDato] = useState(dayjs());
    //const [arbeidsgiverFarger, setArbeidsgiverFarger] = useState([]);
    const gjeldendeSak = alleSaker.find((sak) => sak.saksnummer === params.saksnummer)!;
    useSetSelectedSak(gjeldendeSak);
    const navnAnnenForelder = getNavnAnnenForelder(søkerinfo, gjeldendeSak);
    const aktiveMinidialogerForSaken = minidialogerData
        ? minidialogerData.filter(
              ({ gyldigTil, aktiv, hendelse, saksnr }) =>
                  aktiv &&
                  saksnr === gjeldendeSak.saksnummer &&
                  dayjs(gyldigTil).isSameOrAfter(new Date(), 'days') &&
                  hendelse !== HendelseType.TILBAKEKREVING_FATTET_VEDTAK
          )
        : undefined;
    const planErVedtatt = gjeldendeSak?.åpenBehandling === undefined;
    let familiehendelsesdato = undefined;
    let annenPartFnr = undefined;
    let barnFnr = undefined;
    let annenPartVedtakIsSuspended = true;
    if (gjeldendeSak.ytelse === Ytelse.FORELDREPENGER) {
        familiehendelsesdato = getFamiliehendelseDato(gjeldendeSak.familiehendelse);
        annenPartFnr = gjeldendeSak.annenPart?.fnr;
        const barnFraSak =
            gjeldendeSak.barn && gjeldendeSak.barn.length > 0
                ? gjeldendeSak.barn.find((barn) => barn.fnr !== undefined)
                : undefined;
        barnFnr = barnFraSak ? barnFraSak.fnr : undefined;
        annenPartVedtakIsSuspended =
            !planErVedtatt || annenPartFnr === undefined || annenPartFnr === '' || familiehendelsesdato === undefined;
    }
    const { annenPartsVedtakData, annenPartsVedtakError, annenPartsVedtakRequestStatus } = Api.useGetAnnenPartsVedtak(
        annenPartFnr,
        barnFnr,
        familiehendelsesdato,
        annenPartVedtakIsSuspended
    );
    useDebounceOnWindowEvent(
        () => {
            setStorSkjerm(() => window.innerWidth > 1000);
        },
        100,
        'resize'
    );
    if (
        !annenPartVedtakIsSuspended &&
        annenPartsVedtakRequestStatus !== RequestStatus.FINISHED &&
        !annenPartsVedtakError
    ) {
        return (
            <div style={{ textAlign: 'center', padding: '12rem 0' }}>
                <Loader type="XXL" />
            </div>
        );
    }
    const gjeldendeSVPSak: SvangerskapspengeSak = gjeldendeSak as SvangerskapspengeSak;
    return (
        <div className={classNames(bem.block)}>
            {!gjeldendeSVPSak.gjeldendeVedtak?.avslagÅrsak ? (
                <SvangerskapDashboardwrapper
                    svangerskapSak={gjeldendeSak.ytelse === Ytelse.SVANGERSKAPSPENGER}
                    skjermStørreEnn800={storSkjerm}
                    componentA={<Tidslinje saker={saker} visHeleTidslinjen={false} søker={søkerinfo} />}
                    componentB={<SeHeleProsessenLink />}
                    componentC={
                        <PeriodeTimeline
                            sak={gjeldendeSak as SvangerskapspengeSak}
                            søkerArbeidsforhold={søkerinfo.arbeidsforhold}
                        />
                    }
                    componentD={<SammendragSoknad sak={gjeldendeSak as SvangerskapspengeSak} søker={søkerinfo} />}
                    componentE={
                        <ContentSection padding="none" className="svartBorder">
                            <SeDokumenter />
                        </ContentSection>
                    }
                    componentF={<SVPAlert sak={gjeldendeSak as SvangerskapspengeSak}></SVPAlert>}
                />
            ) : (
                <AvslagsMelding>
                    <BodyShort>
                        {gjeldendeSVPSak.gjeldendeVedtak?.avslagÅrsak === 'ARBEIDSGIVER_KAN_TILRETTELEGGE' ? (
                            <BodyShort>
                                Din arbeidsgiver kan tilrettelegge og du trenger derfor ikke svangerskapenger. Se
                                vedtaksbrev for mer informasjon.
                            </BodyShort>
                        ) : (
                            <BodyShort>Se vedtaksbrev</BodyShort>
                        )}
                    </BodyShort>
                </AvslagsMelding>
            )}
            {((aktiveMinidialogerForSaken && aktiveMinidialogerForSaken.length > 0) || minidialogerError) && (
                <ContentSection heading={intlUtils(intl, 'saksoversikt.oppgaver')} backgroundColor={'yellow'}>
                    <Oppgaver
                        minidialogerData={aktiveMinidialogerForSaken}
                        minidialogerError={minidialogerError}
                        saksnummer={gjeldendeSak.saksnummer}
                    />
                </ContentSection>
            )}
            {gjeldendeSak.ytelse === Ytelse.FORELDREPENGER && (
                <ContentSection heading={intlUtils(intl, 'saksoversikt.dinPlan')}>
                    <DinPlan
                        sak={gjeldendeSak}
                        visHelePlanen={false}
                        navnPåSøker={navnPåSøker}
                        navnAnnenForelder={navnAnnenForelder}
                        annenPartsPerioder={annenPartsVedtakData?.perioder}
                    />
                </ContentSection>
            )}
        </div>
    );
};

export default Saksoversikt;
