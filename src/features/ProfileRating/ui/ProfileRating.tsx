import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useGetProfileRating, useRateProfile } from '../api/ProfileRatingApi';

export interface ProfileRatingProps {
  className?: string;
  profileId:string
}

export const ProfileRating = memo(({ className, profileId }: ProfileRatingProps) => {
    const userData = useSelector(getUserAuthData);
    const { t } = useTranslation();
    const { data, isLoading } = useGetProfileRating({ profileId, userId: userData?.id ?? '' });
    const [rateProfileMutation] = useRateProfile();
    const rating = data?.[0];
    const handleRateProfile = useCallback((starsCount:number, feedback?:string) => {
        try {
            rateProfileMutation({
                profileId,
                rate: starsCount,
                userId: userData?.id ?? '',
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [profileId, rateProfileMutation, userData?.id]);
    const onAccept = useCallback((starsCount:number, feedback?:string) => {
        handleRateProfile(starsCount, feedback);
    }, [handleRateProfile]);
    const onCancel = useCallback((starsCount:number) => {
        handleRateProfile(starsCount);
    }, [handleRateProfile]);
    if (isLoading) {
        return (
            null
        );
    }
    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            hasFeedback
            title={t('Оцените профиль')}
            feedbackTitle={t('Оставьте отзыв')}
        />
    );
});
