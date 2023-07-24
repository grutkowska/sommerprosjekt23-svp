import { createContext, useContext } from 'react';
/*
type DatoContext = {
    valgtDato: Dayjs;
    setValgtDato: (c: Dayjs) => void;
};*/
type ArbeidsgiverFargerContext = {
    arbeidsgiverFarger: string[];
    setArbeidsgiverFarger: (c: string[]) => void;
};
//const valgtDatoRef = useRef(dayjs());
export const DatoContext = createContext('');

export const ArbeidsgiverFargerContext = createContext<ArbeidsgiverFargerContext>({
    arbeidsgiverFarger: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setArbeidsgiverFarger: () => {},
});
export const useDatoContext = () => useContext(DatoContext);

export const useArbeidsgiverFargerContext = () => useContext(ArbeidsgiverFargerContext);
