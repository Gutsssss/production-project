import { lazy, Suspense } from 'react';
import { ArticleRaiingProps } from './ArticleRating';
import { Loader } from '@/shared/ui/Loader';

const ArticleRatingAsync = lazy(() => import('./ArticleRating')
    .then((module) => ({
        default: module.ArticleRating,
    })));

export const ArticleRatingLazy = (props:ArticleRaiingProps) => (
    <Suspense fallback={<Loader />}>
        <ArticleRatingAsync {...props} />
    </Suspense>
);
