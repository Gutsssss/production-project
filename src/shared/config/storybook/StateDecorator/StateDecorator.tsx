/* eslint-disable areuss-plugin/layer-imports */
import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername';
import { articleDetailsReducer } from '@/entities/Article';
import { profileReducer } from '@/features/editableProfileCard';
import { addCommentFormReducer } from '@/entities/Comment';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage';
import { ReducerList } from '@/shared/lib/hooks/useAsyncReducer/useAcyncReducer';

const defaultAsyncReducers:ReducerList = {
    loginForm: loginReducer,
    articleDetails: articleDetailsReducer,
    profile: profileReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StateDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?:DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
