import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsCommentsError = (state:StateSchema) => state?.articleDetailsPage?.comments?.error;
export const getArticleDetailsCommentsLoading = (state:StateSchema) => state?.articleDetailsPage?.comments?.isLoading;
