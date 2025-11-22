import { StateSchema } from '@/app/providers/StateProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('get state', () => {
        const state:DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
