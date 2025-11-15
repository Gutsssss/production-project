import { lazy } from 'react';

export const AdminPanelPageLazy = lazy(() => import('./AdminPanelPage').then((module) => ({
    default: module.AdminPanelPage,
})));
