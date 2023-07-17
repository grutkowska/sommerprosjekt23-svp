import { bemUtils } from '@navikt/fp-common';
import { Tag, TagProps } from '@navikt/ds-react';
import './periodeTimelineView.css';

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
    columnNr: number;
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
                gridColumn: '1',
                gridRow: '2',
                gridTemplateRows: `repeat(${height}, 1px)`,
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
        <div className={bem.element('yAkseElement')} style={{ gridRow: `${startPos + 1}/${startPos + height}` }}>
            {children}
        </div>
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
                gridTemplateColumns: `repeat(${antall}, 1fr) 20px`,
                gridTemplateRows: `repeat(${height}, 1px)`,
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
            style={{
                display: 'grid',
                gridTemplateRows: `repeat(${height}, 1px)`,
                gridTemplateColumns: `50px auto 20px`,
            }}
        >
            {children}
        </div>
    );
};

interface DatoPilProps extends PeriodeTimelineViewProps {
    nr: number;
    nrColumns: number;
}

export const DatoPil: React.FC<DatoPilProps> = ({ nr, nrColumns, children }) => {
    const bem = bemUtils('periodeTimelineView');
    console.log('nr: ', nrColumns > 3 ? nrColumns + 1 : 3);
    return (
        <div
            className={bem.element('datoPil')}
            style={{
                display: 'grid',
                gridRow: `${nr - 9}`,
                gridColumn: `1/${4}`,
                gridTemplateColumns: `50px auto 20px`,
                //gridTemplateRows: `repeat(${height}, 1px)`,
            }}
            draggable={true}
            onDragStart={handleDrag}
        >
            <div>{children}</div>
            <div className={bem.element('datoPilStrek')}></div>
            <div
                style={{
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    gridColumn: 3,
                }}
            ></div>
        </div>
    );
};
function handleDrag(ev: React.DragEvent<HTMLDivElement>): void {
    const id = (ev.target as HTMLDivElement).id;
    ev.dataTransfer.setData('text/plain', id);
    console.log(ev.movementY.valueOf());
}
