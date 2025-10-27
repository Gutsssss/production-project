import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById';
import { Article } from '../types/article';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    data: undefined,
    error: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, actions:PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = actions.payload;
            })
            .addCase(fetchArticleById.rejected, (state, actions:PayloadAction<string>) => {
                state.isLoading = false;
                state.error = actions.payload;
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
