/* eslint-disable no-unused-vars */
import {
    EnhancedStore, Reducer, ReducersMapObject,
    UnknownAction,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from '@/entities/Article';
import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { ProfileSchema } from '@/features/editableProfileCard';
import { ScrollSaveSchema } from '@/features/ScrollSave';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { ArticlePageSchema } from '@/pages/ArticlesPage';
import { rtkApi } from '@/shared/api/rtkApi';
import { AddCommentSchema } from '@/entities/Comment';

export interface StateSchema {
    counter:CounterSchema
    user:UserSchema,
    scrollSave:ScrollSaveSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
    profile?:ProfileSchema,
    loginForm?:LoginSchema,
    articleDetails?:ArticleDetailsSchema,
    addCommentForm?:AddCommentSchema,
    articlePage?:ArticlePageSchema,
    articleDetailsPage?:ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce:Reducer<StateSchema, UnknownAction>,
    add: (key:StateSchemaKey, reducer:Reducer | any) => void,
    remove: (key:StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager:ReducerManager
}

export interface ThunkExtraArg {
    api:AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue:T,
    extra:ThunkExtraArg,
    state:StateSchema
}
