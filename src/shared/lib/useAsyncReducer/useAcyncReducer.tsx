import { Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StateProvider';
import { StateSchemaKey } from 'app/providers/StateProvider/config/StateSchema';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
    [name in StateSchemaKey]?: ReducersMapObject<any> | Reducer<any>
}

interface useAsyncReducerProps {
    reducers:ReducerList,
    removeAfterUnmount?:boolean
}

export const useAcyncReducer = (props:useAsyncReducerProps) => {
    const { reducers, removeAfterUnmount = true } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@ININT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
