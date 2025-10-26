import { lazy } from 'react';

export const ArticleDetailsPageLazy = lazy(() => import('./ArticleDetailsPage').then((module) => ({
    default: module.ArticleDetailsPage,
})));
