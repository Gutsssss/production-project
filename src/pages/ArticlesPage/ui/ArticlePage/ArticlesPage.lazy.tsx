import { lazy } from 'react';

export const ArticlesPageLazy = lazy(() => import('./ArticlesPage').then((module) => ({
    default: module.ArticlesPage,
})));
