import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?:Profile) => {
    const {
        first, lastname, age, city,
    } = profile;
    const validateErrors:ValidateProfileError[] = [];
    if (!profile) {
        validateErrors.push(ValidateProfileError.NO_DATA);
    }
    if (!first || !lastname) {
        validateErrors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!age || !Number.isInteger(age)) {
        validateErrors.push(ValidateProfileError.INCORRECT_AGE);
    }
    if (!city) {
        validateErrors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }
    return validateErrors;
};
