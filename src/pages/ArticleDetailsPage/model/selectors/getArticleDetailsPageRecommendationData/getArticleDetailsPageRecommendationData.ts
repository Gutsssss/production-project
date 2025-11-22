import { StateSchema } from '@/app/providers/StateProvider';

export const getArticleDetailsPageRecommendationError = (state:StateSchema) => state?.articleDetailsPage?.recommendation?.error;
export const getArticleDetailsPageRecommendationLoading = (state:StateSchema) => state?.articleDetailsPage?.recommendation?.isLoading;
