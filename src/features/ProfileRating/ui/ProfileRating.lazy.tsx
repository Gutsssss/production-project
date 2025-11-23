import { lazy, Suspense } from 'react';
import { ProfileRatingProps } from './ProfileRating';

const ProfileRatingAsync = lazy(() => import('./ProfileRating')
    .then((module) => ({
        default: module.ProfileRating,
    })));

export const ProfileRatingLazy = (props:ProfileRatingProps) => (
    <Suspense>
        <ProfileRatingAsync {...props} />
    </Suspense>
);
