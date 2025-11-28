import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('get state', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: { password: '1123' },
        };
        expect(getLoginPassword(state as StateSchema)).toBe('1123');
    });
    test('get state withot value', () => {
        const state:DeepPartial<StateSchema> = {
        };
        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});
