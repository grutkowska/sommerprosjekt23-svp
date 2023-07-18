import { createContext, useContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';

type DatoContext = {
    valgtDato: Dayjs;
    setValgtDato: (c: Dayjs) => void;
};
type ArbeidsgiverFargerContext = {
    arbeidsgiverFarger: string[];
    setArbeidsgiverFarger: (c: string[]) => void;
};

export const DatoContext = createContext<DatoContext>({
    valgtDato: dayjs(),
    setValgtDato: () => {},
});
export const ArbeidsgiverFargerContext = createContext<ArbeidsgiverFargerContext>({
    arbeidsgiverFarger: [],
    setArbeidsgiverFarger: () => {},
});
export const useDatoContext = () => useContext(DatoContext);

export const useArbeidsgiverFargerContext = () => useContext(ArbeidsgiverFargerContext);
