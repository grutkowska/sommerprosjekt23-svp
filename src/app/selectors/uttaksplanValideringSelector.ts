import { createSelector } from 'reselect';
import { AppState } from '../redux/reducers';
import { UttaksplanValideringState } from '../redux/reducers/uttaksplanValideringReducer';
import { RegelAvvik, UttaksplanRegelTestresultat } from '../regler/uttaksplanValidering/types';

export const uttaksplanValideringSelector = (state: AppState): UttaksplanValideringState => state.uttaksplanValidering;

export const selectValideringTestResultat = createSelector([uttaksplanValideringSelector], (uttaksplanValidering):
    | UttaksplanRegelTestresultat
    | undefined => {
    return uttaksplanValidering.regelTestResultat;
});

export const selectUttaksplanAvvik = createSelector([selectValideringTestResultat], (testResultat): RegelAvvik[] => {
    return testResultat ? testResultat.avvik : [];
});