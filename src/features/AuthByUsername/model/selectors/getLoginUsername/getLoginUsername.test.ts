import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('get state', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: { username: '1123' },
        };
        expect(getLoginUsername(state as StateSchema)).toBe('1123');
    });
    test('get state withot value', () => {
        const state:DeepPartial<StateSchema> = {
        };
        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});
