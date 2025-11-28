import { createSelector } from '@reduxjs/toolkit';
import { RouterPath } from '@/shared/const/router';
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
                path: RouterPath.main,
                text: 'Главная',
                Icon: HomeIcon,
            },
            {
                path: RouterPath.about,
                text: 'О сайте',
                Icon: AboutIcon,
            },
        ];
        if (userData) {
            sidebarItemsList.push(
                {
                    path: RouterPath.profile + userData.id,
                    text: 'Профиль',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: RouterPath.articles,
                    text: 'Статьи',
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }
        return sidebarItemsList;
    },
);
