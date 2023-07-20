import { createContext, useContext, useRef } from 'react';
import dayjs from 'dayjs';
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
    setArbeidsgiverFarger: () => {},
});
export const useDatoContext = () => useContext(DatoContext);

export const useArbeidsgiverFargerContext = () => useContext(ArbeidsgiverFargerContext);
