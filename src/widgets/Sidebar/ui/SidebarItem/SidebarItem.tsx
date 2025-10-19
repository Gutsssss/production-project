import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item?:SidebarItemType
  collapsed:boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <AppLink
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>

        </AppLink>
    );
});
