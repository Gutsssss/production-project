import { Profile, ValidateProfileErrors } from '../../type/type';

export const validateProfileData = (profile?:Profile) => {
    const {
        first, lastname, age, city,
    } = profile;
    const validateErrors:ValidateProfileErrors[] = [];
    if (!profile) {
        validateErrors.push(ValidateProfileErrors.INVALID_DATA);
    }
    if (!first || !lastname) {
        validateErrors.push(ValidateProfileErrors.INVALID_NAME);
    }
    if (!age || !Number.isInteger(age)) {
        validateErrors.push(ValidateProfileErrors.INVALID_AGE);
    }
    if (!city) {
        validateErrors.push(ValidateProfileErrors.INVALID_CITY);
    }
    return validateErrors;
};
