import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading.test', () => {
    test('get state', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: { isLoading: true },
        };
        expect(getLoginLoading(state as StateSchema)).toBe(true);
    });
    test('get state withot value', () => {
        const state:DeepPartial<StateSchema> = {
        };
        expect(getLoginLoading(state as StateSchema)).toBe(false);
    });
});
