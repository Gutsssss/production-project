import { lazy } from 'react';

export const ArticleEditPageLazy = lazy(() => import('./ArticleEditPage').then((module) => ({
    default: module.ArticleEditPage,
})));
