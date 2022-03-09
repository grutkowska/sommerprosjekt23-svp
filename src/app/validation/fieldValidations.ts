import { SkjemaelementFeil } from 'common/lib/validation/types';
import { date1YearAgo, date1YearAhead } from 'app/util/validation/values';
import { NavFrontendSkjemaFeil, YesOrNo } from '@navikt/sif-common-formik/lib';
import { isFødselsnummerFormatValid, isSixteenOrOlder } from 'app/util/validation/fødselsnummer';
import { dateRangesCollide, dateRangesExceedsRange } from 'app/util/dates/dates';
import { BostedUtland } from 'app/steg/utenlandsopphold/bostedUtlandListAndDialog/types';
import { IntlShape } from 'react-intl';
import getMessage from 'common/util/i18nUtils';

const textRegex = /^[0-9a-zA-ZÁáĄąÂâĀāĂăßČčĆćÇçĎďĐđÐðĔĕÉéĘęĖėÈèËëÊêĒēĢģİiĮįÍíÎîÏïĪīĶķŁłŊŋŇňŃńŅņÑñÞþŠšŚśŞşŤťŦŧŢţŲųŪūÚúŮůÝýŽžŹźŻżÕõÔôÓóÖöÜüÄäŒœÆæØøÅå .'\-/\n%§\\!?@_()+:;,="&]*$/;
const textGyldigRegex = /[0-9a-zA-ZÁáĄąÂâĀāĂăßČčĆćÇçĎďĐđÐðĔĕÉéĘęĖėÈèËëÊêĒēĢģİiĮįÍíÎîÏïĪīĶķŁłŊŋŇňŃńŅņÑñÞþŠšŚśŞşŤťŦŧŢţŲųŪūÚúŮůÝýŽžŹźŻżÕõÔôÓóÖöÜüÄäŒœÆæØøÅå .'\-/\n%§\\!?@_()+:;,="&]*/g;
export const commonFieldErrorRenderer = (intl: IntlShape, error: any): NavFrontendSkjemaFeil => {
    if (typeof error === 'object' && error.key !== undefined) {
        return intl.formatMessage({ id: error.key }, error.values);
    }
    if (typeof error === 'string') {
        return error;
    }
    return error !== undefined;
};

export const validateYesOrNoIsAnswered = (answer: YesOrNo, errorIntlKey: string): SkjemaelementFeil => {
    if (answer === YesOrNo.UNANSWERED || answer === undefined) {
        return fieldIsRequiredError(errorIntlKey);
    }
    return undefined;
};

export const validateAnnenForelderInformert = (answer: YesOrNo, fornavn: string): SkjemaelementFeil => {
    if (answer !== YesOrNo.YES) {
        return createFieldValidationError('erAnnenForelderInformert.veilederIkkeInformert', { navn: fornavn });
    }

    return undefined;
};

export const hasValue = (v: any) => v !== '' && v !== undefined && v !== null;

export const fieldIsRequiredError = (errorMsg: string) => createFieldValidationError(errorMsg);

export const validateRequiredTextInputField = (
    value: any,
    feltNavn: string,
    errorMsg: string,
    intl: IntlShape
): SkjemaelementFeil => {
    const requiredFieldIsEmptyError = validateRequiredField(value, errorMsg);
    if (requiredFieldIsEmptyError) {
        return requiredFieldIsEmptyError;
    }

    return validateTextInputField(value, feltNavn, intl);
};

export const getIllegalChars = (value: any): string => {
    const kunUgyldigeTegn = value.replace(textGyldigRegex, '');
    const ugyldigStringSet = new Set(kunUgyldigeTegn.split(''));
    return Array.from(ugyldigStringSet).join('');
};

export const getIllegalCharsErrorMessage = (value: any, feltNavn: string, intl: IntlShape): string => {
    const ugyldigeTegn = getIllegalChars(value).replace(/[\t]/g, 'Tabulatortegn');
    return getMessage(intl, 'valideringsfeil.fritekst.kanIkkeInneholdeTegn', {
        feltNavn: feltNavn,
        ugyldigeTegn: ugyldigeTegn,
    });
};

export const validateTextHasLegalChars = (value: any): boolean => textRegex.test(value);

const validateTextInputField = (value: any, feltNavn: string, intl: IntlShape): SkjemaelementFeil => {
    if (!validateTextHasLegalChars(value)) {
        const msg = getIllegalCharsErrorMessage(value, feltNavn, intl);
        return createFieldValidationError(msg);
    }
    return undefined;
};

export const validateRequiredField = (value: any, errorMsg: string): SkjemaelementFeil => {
    if (!hasValue(value)) {
        return fieldIsRequiredError(errorMsg);
    }
    return undefined;
};

export const validateFieldWithInput = (value: any, errorMsg: string): SkjemaelementFeil => {
    if (hasValue(value) && value === 'a') {
        return fieldIsRequiredError(errorMsg);
    }
    return undefined;
};

export const createFieldValidationError = <T extends string>(key: T | undefined, values?: any): SkjemaelementFeil => {
    return key
        ? {
              key,
              values,
          }
        : undefined;
};

export const validateUtenlandsoppholdSiste12Mnd = (utenlandsopphold: BostedUtland[]): SkjemaelementFeil => {
    if (utenlandsopphold.length === 0) {
        return createFieldValidationError('valideringsfeil.utenlandsopphold_ikke_registrert');
    }
    const dateRanges = utenlandsopphold.map((u) => ({ from: u.fom, to: u.tom }));
    if (dateRangesCollide(dateRanges)) {
        return createFieldValidationError('valideringsfeil.utenlandsopphold.overlapp');
    }
    if (dateRangesExceedsRange(dateRanges, { from: date1YearAgo.toDate(), to: new Date() })) {
        return createFieldValidationError('valideringsfeil.utenlandsopphold_utenfor_periode');
    }

    return undefined;
};

export const validateUtenlandsoppholdNeste12Mnd = (utenlandsopphold: BostedUtland[]): SkjemaelementFeil => {
    if (utenlandsopphold.length === 0) {
        return createFieldValidationError('valideringsfeil.utenlandsopphold_ikke_registrert');
    }
    const dateRanges = utenlandsopphold.map((u) => ({ from: u.fom, to: u.tom }));
    if (dateRangesCollide(dateRanges)) {
        return createFieldValidationError('valideringsfeil.utenlandsopphold.overlapp');
    }
    if (dateRangesExceedsRange(dateRanges, { from: new Date(), to: date1YearAhead.toDate() })) {
        return createFieldValidationError('valideringsfeil.utenlandsopphold_utenfor_periode');
    }
    return undefined;
};

export const validateFødselsnummer = (
    fnrInput: string,
    erUtenlandskFnr: boolean,
    søkersFødselsnummer: string
): SkjemaelementFeil => {
    const fnr = fnrInput !== undefined ? fnrInput.trimEnd() : fnrInput;
    const validFnrResult = isFødselsnummerFormatValid(fnr);

    if (erUtenlandskFnr) {
        if (fnr === undefined || fnr === '') {
            return createFieldValidationError('valideringsfeil.fødselsnummer.required');
        }

        return undefined;
    }

    if (fnr === søkersFødselsnummer) {
        return createFieldValidationError('valideringsfeil.fødselsnummer.ugyldigEgetFødselsnummer');
    }

    if (!erUtenlandskFnr && !isSixteenOrOlder(fnr, validFnrResult) && validFnrResult === 'F') {
        return createFieldValidationError('valideringsfeil.fødselsnummer.underSeksten');
    }

    return validFnrResult === 'F' || validFnrResult === 'D'
        ? undefined
        : createFieldValidationError('valideringsfeil.fødselsnummer.ugyldigFødselsnummer');
};
