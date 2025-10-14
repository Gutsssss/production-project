import { configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { type StateSchema } from './StateSchema';

export const createReduxStore = (inintialState?:StateSchema) => configureStore<StateSchema>({
    reducer: {
        counter: CounterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: inintialState,
});
