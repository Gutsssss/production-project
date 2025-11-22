import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StateProvider';
import { articlePageActions } from '../../model/slice/articlesPageSlice';
import {
    getArticlesPageHasMore, getArticlesPageLoading, getArticlesPageNum,
} from '../selectors/getArticlesPageSelectos';
import { fetchArticleList } from './fetchArticleList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlePageActions.setPage(page + 1));
            dispatch(fetchArticleList({
            }));
        }
    },
);
