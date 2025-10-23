import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StateProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileErrors } from '../../type/type';

describe('getProfileValidateErrors.test', () => {
    test('get error', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileErrors.INVALID_AGE],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileErrors.INVALID_AGE]);
    });
    test('without error', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {

            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
