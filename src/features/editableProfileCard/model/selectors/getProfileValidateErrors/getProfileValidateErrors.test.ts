import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileValidateErrors.test', () => {
    test('get error', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('without error', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {

            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
