import { bemUtils } from '@navikt/fp-common';
import { Tag, TagProps } from '@navikt/ds-react';
import './periodeTimelineView.css';
import { useState } from 'react';
import '../../img/transparent-background-pattern.jpg';
import { renderToStaticMarkup } from 'react-dom/server';

interface PeriodeTimelineViewProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export const PeriodeTimelineView: React.FC<PeriodeTimelineViewProps> = ({ children }) => {
    const bem = bemUtils('periodeTimelineView');
    return <div className={bem.block}>{children}</div>;
};
//export default PeriodeTimelineView;
interface BaneHeaderBoksProps extends PeriodeTimelineViewProps {
    antall: number;
}
export const BaneHeaderBoks: React.FC<BaneHeaderBoksProps> = ({ children, antall }) => {
    const bem = bemUtils('periodeTimelineView');
    return (
        <div
            className={bem.element('baneHeaderBoks')}
            style={{
                gridTemplateColumns: `repeat(${antall}, 1fr) 10px`,
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
    columnNr: string;
}
export const Soyle: React.FC<SoyleProps> = ({ start, slutt, farge, columnNr }) => {
    const bem = bemUtils('periodeTimelineView');
    return (
        <div
            className={bem.element('periode')}
            style={{
                gridRow: `${start}/${slutt}`,
                backgroundColor: `light${farge}`,
                borderColor: `${farge}`,
                gridColumn: `${columnNr}`,
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
                display: 'grid',
                gridColumn: '1/4',
                gridRow: '2',
                gridTemplateRows: `repeat(${height}, 1fr)`,
                gridTemplateColumns: '50px auto 20px',
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
                    borderBottom: '1px lightgrey solid',
                }}
            >
                {children}
            </div>
            <div
                className={bem.element('yAkseElement')}
                style={{
                    gridRow: `${startPos + 1}/${startPos + height}`,
                    gridColumn: '2',
                    borderBottom: '1px lightgrey solid',
                }}
            >
                <p style={{ color: 'white' }}>empty</p>
            </div>
        </>
    );
};

interface BaneProps extends PeriodeTimelineViewProps {
    nr: string;
}

export const Bane: React.FC<BaneProps> = ({ children, nr }) => {
    const bem = bemUtils('periodeTimelineView');
    return (
        <div
            className={bem.element('bane')}
            style={{
                gridColumn: `${nr}`,
            }}
        >
            {children}
        </div>
    );
};

interface AlleBanerProps extends PeriodeTimelineViewProps {
    antall: string;
    height?: number;
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
                gridTemplateColumns: `70px auto 20px`,
            }}
        >
            {children}
        </div>
    );
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
    const [yPos, setYPos] = useState<number | undefined>(nr - 8);
    const baneHeightInPx = document.getElementById('pilBanen')?.getBoundingClientRect().height;
    const relBanePx = relBaneHeight / baneHeightInPx!;
    console.log(
        'Utsiden: relBanePx: ',
        relBanePx,
        'baneHeightInPx: ',
        baneHeightInPx,
        ' relBaneHeight: ',
        relBaneHeight
    );
    function handleDrag(e: React.DragEvent<HTMLDivElement>): void {
        console.log(
            'Innsiden: Mouseypos: ',
            e.clientY,
            'rammeTop',
            document.getElementById('pilBanen')!.getBoundingClientRect().top
        );
        e.dataTransfer.effectAllowed = 'none';
        const newYPos = e.clientY - document.getElementById('pilBanen')!.getBoundingClientRect().top;
        const boundYPos = newYPos < 1 ? 1 : newYPos > baneHeightInPx! ? baneHeightInPx! : newYPos;
        const gridBanePos = boundYPos * relBanePx;
        setYPos(Math.round(gridBanePos!));
        //console.log('Innsiden: ypos: ', yPos, 'calculatedYPos: ', boundYPos, 'newYPos: ', newYPos);
    }
    function handleDragEnd(e: React.DragEvent<HTMLDivElement>): void {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const newYPos = e.clientY - document.getElementById('pilBanen')!.getBoundingClientRect().top;
        const boundYPos = newYPos < 1 ? 1 : newYPos > baneHeightInPx! ? baneHeightInPx! : newYPos;
        const gridBanePos = boundYPos * relBanePx;
        setYPos(Math.round(gridBanePos!));
    }
    //console.log('Utsiden: relBanePx: ', relBanePx, 'Nr input: ', nr);

    return (
        <div
            className={bem.element('datoPil')}
            style={{
                display: 'grid',
                gridRow: `${yPos}`,
                gridColumn: `1/${4}`,
                gridTemplateColumns: `70px auto 20px`,
            }}
            draggable={true}
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
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    gridColumn: 3,
                    width: '20px',
                    height: '20px',
                    cursor: 'move',
                }}
            ></div>
        </div>
    );
};
