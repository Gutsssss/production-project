import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?:ReactNode,
    inintialState?:DeepPartial<StateSchema>
}

export const StoreProvider = (props:StoreProviderProps) => {
    const { children, inintialState } = props;
    const store = createReduxStore(inintialState as StateSchema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
