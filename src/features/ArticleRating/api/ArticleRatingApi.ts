import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface getArticleRating {
    articleId:string
    userId:string,
}
interface rateArticleProps {
    rate:number,
    articleId:string,
    feedback?:string,
    userId:string
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], getArticleRating>({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                params: {
                    articleId,
                    userId,
                },
            }),
        }),
        rateArticle: build.mutation<void, rateArticleProps>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
