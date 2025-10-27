import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StateProvider';
import { articleDetailsReducer } from 'entities/Article';
import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice';

const defaultAsyncReducers:DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    articleDetails: articleDetailsReducer,
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
