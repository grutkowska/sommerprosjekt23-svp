import { BodyShort, Link } from '@navikt/ds-react';

import { FileContent } from '@navikt/ds-icons';
import { bemUtils, formatDateExtended } from '@navikt/fp-common';
import { Dokument as DokumentType } from 'app/types/Dokument';
import DokumentAvsender from 'app/components/dokument-avsender/DokumentAvsender';

import './dokument.css';

interface Props {
    dokument: DokumentType;
}

const Dokument: React.FunctionComponent<Props> = ({ dokument }) => {
    const bem = bemUtils('dokument');
    const { tittel, type, mottatt } = dokument;

    return (
        <div className={bem.block}>
            <div className={bem.element('content')}>
                <FileContent className={bem.element('ikon')} />
                <div className={bem.element('link-icon')}>
                    <Link href={dokument.url} target="_blank">
                        {tittel}
                    </Link>
                </div>
                <BodyShort>{formatDateExtended(mottatt)}</BodyShort>
                <DokumentAvsender type={type} />
            </div>
        </div>
    );
};

export default Dokument;
