export { ArticleDetailsPageLazy as ArticleDetailsPage } from './ui/ArticleDetailsPage.lazy';
export { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
export {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsLoading,

} from './model/selectors/getArticleDetailsCommentsData/getArticleDetailsCommentsData';
export { fetchArticleDetailsCommentsById } from './model/services/fetchDetailsCommentsById';
export { ArticleDetailsPageRecommendationSchema } from './model/types/ArticleDetailsPageRecomendationSchema';
export { ArticleDetailsPageSchema } from './model/types/index';
export { articleDetailsPageReducer } from './model/slice/index';
