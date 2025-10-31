import { StateSchema } from 'app/providers/StateProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageLoading = (state:StateSchema) => state.articlePage?.isLoading || false;
export const getArticlesPageError = (state:StateSchema) => state.articlePage?.error;
export const getArticlesPageView = (state:StateSchema) => state.articlePage?.view || ArticleView.SMALL_PLATE;
