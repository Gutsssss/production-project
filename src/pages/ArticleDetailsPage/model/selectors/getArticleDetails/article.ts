import { createSelector } from '@reduxjs/toolkit';
import { Article, getArticleDetailsData } from 'entities/Article';
import { getUserAuthData, User } from 'entities/User';

export const getCanEditArticle = createSelector(
    getUserAuthData,
    getArticleDetailsData,
    (user:User, article:Article) => {
        if (!article || !user) {
            return false;
        }
        return user?.id === article?.user?.id;
    },
);
