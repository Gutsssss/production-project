import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StateProvider';
import { ArtcileSortField } from '@/entities/Article';
import { SortOrder } from '@/shared/types/SortOrder';
import { ArticleType } from '@/entities/Article/model/types/article';
import { articlePageActions } from '../../model/slice/articlesPageSlice';
import {
    getArticlesPageInited,
} from '../selectors/getArticlesPageSelectos';
import { fetchArticleList } from './fetchArticleList';

export const initActionArticlePage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/initActionArticlePage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getArticlesPageInited(getState());
        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArtcileSortField;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;
            if (orderFromUrl) {
                dispatch(articlePageActions.setOrder(orderFromUrl));
            }
            if (sortFromUrl) {
                dispatch(articlePageActions.setSort(sortFromUrl));
            }
            if (searchFromUrl) {
                dispatch(articlePageActions.setSearch(searchFromUrl));
            }
            if (typeFromUrl) {
                dispatch(articlePageActions.setType(typeFromUrl));
            }
            dispatch(articlePageActions.initState());
            dispatch(fetchArticleList({
            }));
        }
    },
);
