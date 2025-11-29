import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../api/ArticleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRaiingProps {
  className?: string;
  articleId:string;
}

export const ArticleRating = memo((props: ArticleRaiingProps) => {
    const { articleId, className } = props;
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({ articleId, userId: userData?.id ?? '' });
    const { t } = useTranslation();
    const rating = data?.[0];
    const [rateArticleMutation] = useRateArticle();
    const rateArticleHandle = useCallback((starsCount:number, feedback?:string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,

            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);
    const onAccept = useCallback((starsCount:number, feedback?:string) => {
        rateArticleHandle(starsCount, feedback);
    }, [rateArticleHandle]);
    const onCancel = useCallback((starsCount:number) => {
        rateArticleHandle(starsCount);
    }, [rateArticleHandle]);
    if (isLoading) {
        return (
            <Skeleton width="100%" height={140} />
        );
    }
    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте отзыв')}
            hasFeedback
        />
    );
});
