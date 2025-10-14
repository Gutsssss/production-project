import { CounterActions, CounterReducer } from './CounterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    test('increment', () => {
        const state:CounterSchema = { value: 10 };
        expect(CounterReducer(state, CounterActions.increment())).toEqual({ value: 11 });
    });
    test('decrement', () => {
        const state:CounterSchema = { value: 10 };
        expect(CounterReducer(state, CounterActions.decrement())).toEqual({ value: 9 });
    });
    test('without state', () => {
        expect(CounterReducer(undefined, CounterActions.decrement())).toEqual({ value: -1 });
    });
});
