import { StateSchema } from 'app/providers/StateProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
    test('get state', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: { error: 'error' },
        };
        expect(getLoginError(state as StateSchema)).toBe('error');
    });
    test('get state withot value', () => {
        const state:DeepPartial<StateSchema> = {
        };
        expect(getLoginError(state as StateSchema)).toEqual('');
    });
});
