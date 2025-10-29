import { lazy } from 'react';

export const AddNewCommentFormLazy = lazy(() => import('./AddNewComment').then((module) => ({
    default: module.AddNewComment,
})));
