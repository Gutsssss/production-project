import { StateSchema } from 'app/providers/StateProvider';

export const getArticleDetailsData = (state:StateSchema) => state?.articleDetails?.data;
export const getArticleDetailsLoading = (state:StateSchema) => state?.articleDetails?.isLoading || false;
export const getArticleDetailsError = (state:StateSchema) => state?.articleDetails?.error;
