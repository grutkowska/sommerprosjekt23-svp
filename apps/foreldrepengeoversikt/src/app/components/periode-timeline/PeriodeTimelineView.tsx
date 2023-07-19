import { bemUtils } from '@navikt/fp-common';
import { Tag, TagProps } from '@navikt/ds-react';
import './periodeTimelineView.css';
declare module '*.module.css';
declare module '*.module.scss';

const repeatPx = '2px';
const borderTykkelse = '2px';
const yAksePadding = '50px';
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
                display: 'grid',
                gridColumn: '1/4',
                gridRow: '2',
                gridTemplateRows: `repeat(${height}, ${repeatPx})`,
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
                gridTemplateRows: `repeat(${height}, ${repeatPx})`,
            }}
        >
            {children}
        </div>
    );
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
                gridTemplateRows: `repeat(${height}, ${repeatPx})`,
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
                gridTemplateRows: `repeat(${height}, ${repeatPx})`,
                gridTemplateColumns: `${gridTemplate}`,
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
                gridTemplateColumns: `${gridTemplate}` + ' 20px',
                //gridTemplateRows: `repeat(${height}, ${repeatPx})`,
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
