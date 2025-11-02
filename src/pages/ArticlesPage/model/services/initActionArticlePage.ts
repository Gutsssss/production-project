import { articlePageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StateProvider';
import {
    getArticlesPageInited,
} from '../selectors/getArticlesPageSelectos';
import { fetchArticleList } from './fetchArticleList';

export const initActionArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/initActionArticlePage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticleList({
                page: 1,
            }));
        }
    },
);
