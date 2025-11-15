import { lazy } from 'react';

export const ForbiddenPageLazy = lazy(() => import('./ForbiddenPage').then((module) => ({
    default: module.ForbiddenPage,
})));
