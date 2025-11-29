import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';

import cls from './Sidebar.module.scss';
import { SidebarItem } from './SidebarItem/SidebarItem';
import { getSidebarItems } from '../model/selectors/getSidebarItems';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { ColumnFlex } from '@/shared/ui/Stack/ColumnFlex/ColumnFlex';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemList = useSelector(getSidebarItems);
    const toggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={toggleSidebar}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.SIZE_L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <ColumnFlex role="navigation" gap="8" align="start" className={cls.items}>
                {sidebarItemList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        collapsed={collapsed}
                        item={item}
                    />
                ))}
            </ColumnFlex>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} className={cls.lang} />
            </div>
        </aside>
    );
});
