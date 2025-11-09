import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabProps {
className?:string
  value?:string;
  onChangeType:(type:ArticleType) => void
}

export const ArticleTypeTab = memo(({ className, value, onChangeType }: ArticleTypeTabProps) => {
    const { t } = useTranslation();
    const tabItems = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все'),
        },
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.MATH,
            content: t('Математика'),
        },
        {
            value: ArticleType.ECONOMYC,
            content: t('Экономика'),
        },
    ], [t]);
    const onTabClick = useCallback((tab:TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);
    return (
        <Tabs className={className} tabs={tabItems} value={value} onTabClick={onTabClick} />
    );
});
