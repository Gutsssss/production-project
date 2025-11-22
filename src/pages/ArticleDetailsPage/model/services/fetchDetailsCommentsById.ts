import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StateProvider';
import { Comment } from '@/entities/Comment';

export const fetchArticleDetailsCommentsById = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>(
    'articleDetails/fetchArticleDetailsCommentsById',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        if (!articleId) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
