import { createReduxStore, AppDispatch } from './config/store';
import {
    type StateSchema,
    type ReduxStoreWithManager,
    type ThunkConfig,
    type StateSchemaKey,
} from './config/StateSchema';

export { StoreProvider } from './ui/StoreProvider';
export {
    createReduxStore,
    StateSchemaKey,
    StateSchema,
    ReduxStoreWithManager,
    type AppDispatch,
    ThunkConfig,
};
