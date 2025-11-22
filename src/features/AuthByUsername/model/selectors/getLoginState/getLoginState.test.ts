import { StateSchema } from '@/app/providers/StateProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('get state', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                username: '123', password: '123', isLoading: false, error: '',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: '123', password: '123', isLoading: false, error: '',
        });
    });
    test('get state withot value', () => {
        const state:DeepPartial<StateSchema> = {
        };
        expect(getLoginState(state as StateSchema)).toBe(undefined);
    });
});
