import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StateProvider';
import { Article } from '@/entities/Article';
import { ArticleDetailsPageRecommendationSchema } from '../types/ArticleDetailsPageRecomendationSchema';
import { fetchArticleRecommendations } from '../services/fetchDetailsPageRecommendation';

const recomendationAdapter = createEntityAdapter<Article>({});

export const getArticleRecommendation = recomendationAdapter.getSelectors<StateSchema>(
    (state) => state?.articleDetailsPage?.recommendation || recomendationAdapter.getInitialState(),
);

const articleDetailsPageRecomendationSlice = createSlice({
    name: 'articleDetailsPageRecomendationSlice',
    initialState: recomendationAdapter.getInitialState<ArticleDetailsPageRecommendationSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                recomendationAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsPageRecomendationReducer } = articleDetailsPageRecomendationSlice;
