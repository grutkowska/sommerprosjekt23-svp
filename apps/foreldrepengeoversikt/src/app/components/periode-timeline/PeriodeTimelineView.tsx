import { bemUtils } from '@navikt/fp-common';
import './periodeTimelineView.css';

interface PeriodeTimelineViewProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export const PeriodeTimelineView: React.FC<PeriodeTimelineViewProps> = ({ children }) => {
    const bem = bemUtils('periodeTimelineView');
    return <div className={bem.block}>{children}</div>;
};
//export default PeriodeTimelineView;
interface SoyleProps extends PeriodeTimelineViewProps {
    start: string;
    slutt: string;
    farge: string;
}
export const Soyle: React.FC<SoyleProps> = ({ start, slutt, farge }) => {
    const bem = bemUtils('periodeTimelineView');
    console.log(start, slutt);
    return (
        <div
            className={bem.element('periode')}
            style={{ gridRow: `${start}/${slutt}`, backgroundColor: `light${farge}`, borderColor: `${farge}` }}
        ></div>
    );
};

export const DatoKolonne = () => {
    return (
        <div
            style={{
                display: 'grid',
                gridColumn: '2',
                gridTemplateRows: ' repeat(270, 2px) ',
            }}
        ></div>
    );
};

interface BaneProps extends PeriodeTimelineViewProps {
    nr: string;
    height?: string;
}

export const Bane: React.FC<BaneProps> = ({ children, nr, height }) => {
    const bem = bemUtils('periodeTimelineView');
    return (
        <div
            className={bem.element('bane')}
            style={{
                gridColumn: `${nr}`,
                gridTemplateRows: `repeat(${height}, 1px)`,
            }}
        >
            {children}
        </div>
    );
};

interface AlleBanerProps extends PeriodeTimelineViewProps {
    antall: string;
}

export const AlleBaner: React.FC<AlleBanerProps> = ({ children, antall }) => {
    const bem = bemUtils('periodeTimelineView');
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${antall}, auto)`,
                height: 'fit-content',
            }}
        >
            {children}
        </div>
    );
};
