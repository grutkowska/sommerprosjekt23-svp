import { bemUtils } from '@navikt/fp-common';
import { Tag, TagProps } from '@navikt/ds-react';
import './periodeTimelineView.css';

import { useState } from 'react';
import '../../img/transparent-background-pattern.jpg';
import dayjs from 'dayjs';
declare module '*.module.css';
declare module '*.module.scss';

const borderTykkelse = '1px';
const yAksePadding = '70px';
const gridTemplate = yAksePadding + ' auto';

interface PeriodeTimelineViewProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export const PeriodeTimelineView: React.FC<PeriodeTimelineViewProps> = ({ children }) => {
    const bem = bemUtils('periodeTimelineView');
    return <div className={bem.block}>{children}</div>;
};
interface BaneHeaderBoksProps extends PeriodeTimelineViewProps {
    antall: number;
}
export const BaneHeaderBoks: React.FC<BaneHeaderBoksProps> = ({ children, antall }) => {
    const bem = bemUtils('periodeTimelineView');
    return (
        <div
            className={bem.element('baneHeaderBoks')}
            style={{
                gridTemplateColumns: `repeat(${antall}, 1fr) 20px`,
            }}
        >
            {children}
        </div>
    );
};

const fargeRekkefølgeForTag: Array<TagProps['variant']> = [
    'info',
    'success',
    'warning',
    'error',
    'alt1',
    'alt2',
    'neutral',
];

interface BaneHeaderProps extends PeriodeTimelineViewProps {
    farge?: string;
    nr: number;
}
export const BaneHeader: React.FC<BaneHeaderProps> = ({ children, nr }) => {
    return (
        <div
            style={{
                gridColumn: `${nr}`,
                justifyContent: 'center',
                display: 'flex',
            }}
        >
            {<Tag variant={fargeRekkefølgeForTag[nr - 1]}>{children}</Tag>}
        </div>
    );
};

interface SoyleProps extends PeriodeTimelineViewProps {
    start: string;
    slutt: string;
    farge: string;
    opacity?: string;
}
export const Soyle: React.FC<SoyleProps> = ({ start, slutt, farge, opacity }) => {
    const bem = bemUtils('periodeTimelineView');
    return (
        <div
            className={bem.element('periode')}
            style={{
                gridRow: `${start}/${slutt}`,
                backgroundColor: `${farge}`,
                borderColor: `${farge}`,
                opacity: `${opacity}`,
                zIndex: 2,
                mixBlendMode: `multiply`,
            }}
        ></div>
    );
};

interface SoyleBakgrunnProps extends PeriodeTimelineViewProps {
    start: string;
    slutt: string;
    farge: string;
    opacity?: string;
}
export const SoyleBakgrunn: React.FC<SoyleBakgrunnProps> = ({ start, slutt, farge, opacity }) => {
    const bem = bemUtils('periodeTimelineView');
    console.log('startDatoSoyle: ', start);
    return (
        <div
            className={bem.element('periode')}
            style={{
                gridRow: `${start}/${slutt}`,
                backgroundColor: `${farge}`,
                borderColor: `${farge}`,
                opacity: `${opacity}`,
                position: `absolute`,
                width: `100%`,
                zIndex: 1,
                mixBlendMode: `multiply`,
            }}
        ></div>
    );
};
interface YAkseAlleElementerProps extends PeriodeTimelineViewProps {
    height: string;
}

export const YAkseAlleElementer: React.FC<YAkseAlleElementerProps> = ({ children, height }) => {
    return (
        <div
            style={{
                height: '100%',
                display: 'grid',
                gridColumn: '1/4',
                gridRow: '2/  2',
                gridTemplateRows: `repeat(${height}, 1fr)`,
                gridTemplateColumns: `${gridTemplate}`,
            }}
        >
            {children}
        </div>
    );
};

interface YAkseElementProps extends PeriodeTimelineViewProps {
    height: number;
    startPos: number;
}
export const YAkseElement: React.FC<YAkseElementProps> = ({ children, height, startPos }) => {
    //console.log(`${startPos} / ${startPos + height}`);

    const bem = bemUtils('periodeTimelineView');
    return (
        <>
            <div
                className={bem.element('yAkseElement')}
                style={{
                    gridRow: `${startPos + 1}/${startPos + height}`,
                    gridColumn: '1',
                    borderBottom: `${borderTykkelse}` + ' lightgrey solid',
                }}
            >
                {children}
            </div>
            <div
                className={bem.element('yAkseElement')}
                style={{
                    gridRow: `${startPos + 1}/${startPos + height}`,
                    gridColumn: '2',
                    borderBottom: `${borderTykkelse}` + ' lightgrey solid',
                }}
            >
                <p style={{ color: 'white', opacity: '0%' }}>empty</p>
            </div>
        </>
    );
};

interface BaneProps extends PeriodeTimelineViewProps {
    nr: string;
    height?: string;
    bakgrunnFarge?: string;
}

export const Bane: React.FC<BaneProps> = ({ children, nr, height }) => {
    const bem = bemUtils('periodeTimelineView');
    return (
        <div
            className={bem.element('bane')}
            style={{
                gridColumn: `${nr}`,
                gridRow: `1/${height}`,
                gridTemplateRows: `repeat(${height}, 1fr)`,
            }}
        >
            {children}
        </div>
    );
};

//interface SluttInfoProps extends PeriodeTimelineViewProps {}

export const SluttInfo: React.FC<PeriodeTimelineViewProps> = ({ children }) => {
    const bem = bemUtils('periodeTimelineView');
    return <div className={bem.element('sluttInfo')}>{children}</div>;
};

interface AlleBanerProps extends PeriodeTimelineViewProps {
    antall: string;
    height: number;
}

export const AlleBaner: React.FC<AlleBanerProps> = ({ children, antall, height }) => {
    const bem = bemUtils('periodeTimelineView');
    return (
        <div
            className={bem.element('alleBaner')}
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${antall}, 1fr)`,
                gridTemplateRows: `repeat(${height}, 1fr)`,
            }}
        >
            {children}
        </div>
    );
};

interface DatoPilBaneProps extends PeriodeTimelineViewProps {
    height?: number;
}

export const DatoPilBane: React.FC<DatoPilBaneProps> = ({ children, height }) => {
    const bem = bemUtils('periodeTimelineView');
    return (
        <div
            className={bem.element('datoPilbane')}
            id="pilBanen"
            style={{
                display: 'grid',
                gridTemplateRows: `repeat(${height}, 1fr)`,
                gridTemplateColumns: `${gridTemplate}`,
            }}
        >
            {children}
        </div>
    );
};

export const getCurrentDato = () => {
    return dayjs().toISOString();
};

interface DatoPilProps extends PeriodeTimelineViewProps {
    nr: number;
    nrColumns?: number;
    onPosChange?: (posX: number, posY: number) => void;
    relBaneHeight: number;
    handleTeksBoks: (relativePos: number) => string;
}

export const DatoPil: React.FC<DatoPilProps> = ({ nr, relBaneHeight, handleTeksBoks }) => {
    const bem = bemUtils('periodeTimelineView');
    const baneHeightInPx = document.getElementById('pilBanen')?.getBoundingClientRect().height;
    const relBanePx = relBaneHeight / baneHeightInPx!;
    const [yPos, setYPos] = useState<number>(Math.round(nr - 10));
    function handleDrag(e: React.DragEvent<HTMLDivElement>): void {
        e.dataTransfer.effectAllowed = 'none';
        const newYPos = e.clientY - document.getElementById('pilBanen')!.getBoundingClientRect().top;
        const boundYPos = newYPos < 1 ? 1 : newYPos > baneHeightInPx! ? baneHeightInPx! : newYPos;
        const gridBanePos = boundYPos * relBanePx;
        setYPos(Math.round(gridBanePos!));
    }
    function handleDragEnd(e: React.DragEvent<HTMLDivElement>): void {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const newYPos = e.clientY - document.getElementById('pilBanen')!.getBoundingClientRect().top;
        const boundYPos = newYPos < 1 ? 1 : newYPos > baneHeightInPx! ? baneHeightInPx! : newYPos;
        const gridBanePos = boundYPos * relBanePx;
        setYPos(Math.round(gridBanePos!));
    }
    return (
        <div
            className={bem.element('datoPil')}
            style={{
                display: 'grid',
                gridRow: `${yPos}`,
                gridColumn: `1/${4}`,
                gridTemplateColumns: `${gridTemplate}` + ' 20px',
                //gridTemplateRows: `repeat(${height}, ${repeatPx})`
            }}
            draggable={false}
            onDragStart={(e) => {
                e.dataTransfer.effectAllowed = 'none';
            }}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
        >
            <div className={bem.element('datoPilTekst')}>
                <p>{handleTeksBoks(yPos!)}</p>
            </div>
            <div className={bem.element('datoPilStrek')}></div>
            <div
                style={{
                    alignSelf: 'center',
                    backgroundColor: 'black',
                    borderRadius: '5px',
                    gridColumn: 3,
                    width: '10px',
                    height: '10px',
                    cursor: 'move',
                }}
            ></div>
        </div>
    );
};
