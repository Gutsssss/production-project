import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticleDetailsPageRecommendationSchema } from './ArticleDetailsPageRecomendationSchema';

export interface ArticleDetailsPageSchema {
    comments:ArticleDetailsCommentsSchema,
    recommendation:ArticleDetailsPageRecommendationSchema
}
