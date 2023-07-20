import PeriodeTimeline from 'app/components/periode-timeline/PeriodeTimeline';
import { SammendragSoknad } from '../sammendragSoknad/SammendragSoknad';
import { useRef } from 'react';
import dayjs from 'dayjs';

export const PeriodeOversikt = () => {
    const valgtDatoRef = useRef(dayjs());
    return (
        <>
            <PeriodeTimeline />
            <SammendragSoknad />
        </>
    );
};
