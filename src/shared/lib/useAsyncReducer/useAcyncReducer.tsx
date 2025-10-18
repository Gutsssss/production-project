import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StateProvider';
import { StateSchemaKey } from 'app/providers/StateProvider/config/StateSchema';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface useAsyncReducerProps {
    reducers:ReducerList,
    removeAfterUnmount?:boolean
}

export const useAcyncReducer = (props:useAsyncReducerProps) => {
    const { reducers, removeAfterUnmount = false } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]:ReducerListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@ININT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]:ReducerListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
