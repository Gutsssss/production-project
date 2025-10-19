import { StoreProvider } from './ui/StateProvider';
import { createReduxStore, AppDispatch } from './config/store';
import {
    type StateSchema,
    type ReduxStoreWithManager,
    type ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
};
