import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/providers/StateProvider';
import { getArticleDetailsData } from 'entities/Article';
import { fetchArticleDetailsCommentsById } from 'pages/ArticleDetailsPage';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
    >(
        'comment/addCommentForArticle',
        async (text, thunkApi) => {
            const {
                extra, dispatch, rejectWithValue, getState,
            } = thunkApi;

            const userData = getUserAuthData(getState());
            const article = getArticleDetailsData(getState());

            if (!userData || !text || !article) {
                return rejectWithValue('no data');
            }

            try {
                const response = await extra.api.post<Comment>('/comments', {
                    articleId: article.id,
                    userId: userData.id,
                    text,
                });

                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchArticleDetailsCommentsById(article.id));

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
