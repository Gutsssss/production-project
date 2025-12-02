export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    // last
    NOT_FOUND = 'not_found'
}
export const getRouterMain = () => '/';
export const getRouterAbout = () => '/about';
export const getRouterProfile = (id:string) => `/profile/${id}`;
export const getRouterArticles = () => '/articles';
export const getRouterArticlesDetails = (id:string) => `/articles/${id}`;
export const getRouterArticlesCreate = () => '/articles/new';
export const getRouterArticlesEdit = (id:string) => `/articles/${id}/edit`;
export const getRouterAdmin = () => '/admin';
export const getRouterForbidden = () => '/forbidden';

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/',
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    [AppRoutes.NOT_FOUND]: '*',
};
