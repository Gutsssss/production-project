import { createSelector } from '@reduxjs/toolkit';
import { getRouterArticles, getRouterProfile } from '../../../../shared/const/router';
import { getRouterAbout, getRouterMain } from '@/shared/const/router';
import AboutIcon from '@/shared/assets/icons/about_icon.svg';
import HomeIcon from '@/shared/assets/icons/home_icon.svg';
import ProfileIcon from '@/shared/assets/icons/ProfileIcon.svg';
import ArticleIcon from '@/shared/assets/icons/article_icon.svg';
import { SidebarItemType } from '../types/items';
import { getUserAuthData } from '@/entities/User';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouterMain(),
                text: 'Главная',
                Icon: HomeIcon,
            },
            {
                path: getRouterAbout(),
                text: 'О сайте',
                Icon: AboutIcon,
            },
        ];
        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouterProfile(userData.id),
                    text: 'Профиль',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: getRouterArticles(),
                    text: 'Статьи',
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }
        return sidebarItemsList;
    },
);
