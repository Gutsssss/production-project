import { StateSchema } from '@/app/providers/StateProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('get state', () => {
        const state:DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
