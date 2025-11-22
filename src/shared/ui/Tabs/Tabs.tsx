import { classNames } from '@/shared/lib/classNames/classNames';
import { ReactNode, useCallback } from 'react';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
    value:string,
    content:ReactNode
}

interface TabsProps<T extends string> {
  className?: string;
  tabs:TabItem[];
  value:T;
  onTabClick:(tab:TabItem) => void
}

export const Tabs = <T extends string>({
    className, tabs, value, onTabClick,
}: TabsProps<T>) => {
    const clickHandle = useCallback((tab:TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);
    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    onClick={clickHandle(tab)}
                    key={tab.value}
                    className={cls.tab}
                    theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
                >
                    {tab.value}
                </Card>
            ))}
        </div>
    );
};
