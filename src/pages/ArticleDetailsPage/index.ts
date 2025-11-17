export { ArticleDetailsPageLazy as ArticleDetailsPage } from './ui/ArticleDetailsPage.lazy';
export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
export {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsLoading,

} from './model/selectors/getArticleDetailsCommentsData/getArticleDetailsCommentsData';
export { fetchArticleDetailsCommentsById } from './model/services/fetchDetailsCommentsById';
export type { ArticleDetailsPageRecommendationSchema } from './model/types/ArticleDetailsPageRecomendationSchema';
export type { ArticleDetailsPageSchema } from './model/types/index';
export { articleDetailsPageReducer } from './model/slice/index';
