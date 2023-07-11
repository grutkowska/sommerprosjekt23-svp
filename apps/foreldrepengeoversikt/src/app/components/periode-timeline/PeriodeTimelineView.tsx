import { bemUtils } from '@navikt/fp-common';
import './periodeTimelineView.css';

interface PeriodeTimelineViewProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export const PeriodeTimelineView: React.FC<PeriodeTimelineViewProps> = () => {
    const bem = bemUtils('periodeTimelineView');
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, auto)',
                height: 'fit-content',
            }}
        >
            <div
                style={{
                    display: 'grid',
                    gridColumn: '2',
                    gridTemplateRows: ' repeat(270, 2px) ',
                }}
            >
                <div className={bem.element('periode')} style={{ gridRow: '1/270', backgroundColor: 'pink' }}></div>
            </div>
        </div>
    );
};

export const Soyle = () => {
    return;
};

export const DatoKolonne = () => {
    return;
};

export const Bane = () => {
    return;
};

export const AlleBaner = () => {
    return;
};
