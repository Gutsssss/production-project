import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StateProvider';
import { Article, ArticleView } from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ArticleType } from 'entities/Article/model/types/article';
import { ArtcileSortField } from 'entities/Article/model/consts/ArticleConsts';
import { SortOrder } from 'shared/types/SortOrder';
import { ArticlePageSchema } from '../types/ArticlePageSchema';
import { fetchArticleList } from '../services/fetchArticleList';

const articlesPageAdapter = createEntityAdapter<Article>();

export const getArticleList = articlesPageAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articlesPageAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesPageAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL_PLATE,
        page: 1,
        hasMore: true,
        _inited: false,
        sort: ArtcileSortField.CREATED,
        search: '',
        limit: 9,
        order: 'asc',
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action:PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action:PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action:PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action:PayloadAction<ArtcileSortField>) => {
            state.sort = action.payload;
        },
        setType: (state, action:PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        setSearch: (state, action:PayloadAction<string>) => {
            state.search = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.BIG_PLATE ? 3 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                if (action.meta.arg.replace) {
                    articlesPageAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticleList.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;
                if (action.meta.arg.replace) {
                    articlesPageAdapter.setAll(state, action.payload);
                } else {
                    articlesPageAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlePageReducer } = articlePageSlice;
export const { actions: articlePageActions } = articlePageSlice;
