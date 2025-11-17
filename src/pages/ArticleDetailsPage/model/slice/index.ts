import { ReducersMapObject } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsPageRecomendationReducer } from './articlesDetailsPageRecommendationSlice';

export const articleDetailsPageReducer: ReducersMapObject<ArticleDetailsPageSchema> = ({
    comments: articleDetailsCommentsReducer,
    recommendation: articleDetailsPageRecomendationReducer,
});
