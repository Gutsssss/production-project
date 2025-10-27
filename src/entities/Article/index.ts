export { Article } from './model/types/article';
export { ArticleDetailsSchema } from './model/types/ArticleDetailsSchema';
export { articleDetailsReducer, articleDetailsActions } from './model/slice/ArticleSlice';
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,

} from './model/selectors/getArticleDetails';
