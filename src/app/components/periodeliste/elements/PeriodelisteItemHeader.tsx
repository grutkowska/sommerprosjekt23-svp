import * as React from 'react';
import classnames from 'classnames';
import BEMHelper from 'common/util/bem';
import { Element, Normaltekst, EtikettLiten } from 'nav-frontend-typografi';

import { Tidsperiode } from 'common/types';
import AriaText from 'common/components/aria/AriaText';
import UttaksplanIkon, { UttaksplanIkonKeys } from '../../uttaksplan-ikon/UttaksplanIkon';
import { måned3bokstaver, måned, år } from 'common/util/datoUtils';

import './periodeheader.less';

type AdvarselType = 'advarsel' | 'feil';

export interface Advarsel {
    tittel?: string;
    beskrivelse: string;
    type: AdvarselType;
}

interface Props {
    isOpen?: boolean;
    tittel: string;
    ikon: React.ReactNode | undefined;
    beskrivelse?: React.ReactNode;
    advarsel?: Advarsel;
    tidsperiode?: Tidsperiode;
    ariaTekst?: string;
    type: 'periode' | 'info';
}

const BEM = BEMHelper('periodelisteItemHeader');

const getIkonForAdvarsel = (advarsel: Advarsel): UttaksplanIkonKeys => {
    if (advarsel.type === 'advarsel') {
        return UttaksplanIkonKeys.advarsel;
    }
    return UttaksplanIkonKeys.feil;
};

const renderDagMnd = (dato: Date): JSX.Element =>
    dato ? (
        <div className={BEM.element('dagmnd')}>
            <span className={BEM.element('dagmnd__dato')}>
                {dato.getDate()}. {måned3bokstaver(dato)}.
            </span>
            <EtikettLiten tag="span" className={BEM.element('dagmnd__mnd')}>
                <abbr title={`${måned(dato)} ${år(dato)}`}>{år(dato)}</abbr>
            </EtikettLiten>
        </div>
    ) : (
        <div className={BEM.element('dagmnd')}>-</div>
    );

const PeriodelisteItemHeader: React.StatelessComponent<Props> = ({
    type,
    isOpen,
    ariaTekst,
    ikon,
    tittel,
    beskrivelse,
    advarsel,
    tidsperiode
}) => {
    return (
        <div className={BEM.modifier(type)}>
            {ariaTekst && <AriaText>{ariaTekst}</AriaText>}
            <div
                role={ariaTekst ? 'presentation' : undefined}
                aria-hidden={true}
                className={classnames(BEM.className, 'typo-normal', {
                    [BEM.modifier('apnet')]: isOpen
                })}>
                <div className={BEM.element('ikon')} role="presentation" aria-hidden={true}>
                    {ikon}
                </div>
                <div className={BEM.element('beskrivelse')}>
                    <Element tag="h1">{tittel}</Element>
                    {beskrivelse && <Normaltekst>{beskrivelse}</Normaltekst>}
                </div>
                {advarsel && (
                    <div className={BEM.element('advarsel')}>
                        <span role="presentation">
                            <UttaksplanIkon ikon={getIkonForAdvarsel(advarsel)} title={advarsel.beskrivelse} />
                        </span>
                    </div>
                )}
                {tidsperiode && (
                    <div className={BEM.element('tidsrom')}>
                        {renderDagMnd(tidsperiode.fom)}
                        -
                        {renderDagMnd(tidsperiode.tom)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PeriodelisteItemHeader;