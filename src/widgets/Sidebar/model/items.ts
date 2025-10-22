import React from 'react';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about_icon.svg';
import HomeIcon from 'shared/assets/icons/home_icon.svg';
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg';

export interface SidebarItemType {
    path?:string,
    Icon?:React.VFC<React.SVGProps<SVGSVGElement>>,
    text?:string,
    authOnly?:boolean
}

export const SidebarItemsList:SidebarItemType[] = [
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
    {
        path: RouterPath.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
    },
];
