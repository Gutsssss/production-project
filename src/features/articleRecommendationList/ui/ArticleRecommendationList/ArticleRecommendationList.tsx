import { useTranslation } from 'react-i18next';

import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { ColumnFlex } from '@/shared/ui/Stack';
import { ArticleList } from '@/entities/Article';
import { Text, TextSize } from '@/shared/ui/Text';
import { useArticleRecommendationsList } from '../../api/articleRecommendationApi';

interface ArticleRecommendationListProps {

    className?: string;

}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
    const { className } = props;

    const { t } = useTranslation();
    const { isLoading, data: articles, error } = useArticleRecommendationsList(3);
    if (isLoading || error) {
        return null;
    }
    return (

        <ColumnFlex justify="center" align="center" max className={classNames('', {}, [className])}>

            <Text size={TextSize.L} title={t('Рекомендуем')} />

            <ArticleList
                articles={articles}
                isLoading={isLoading}
                target="_blank"

            />

        </ColumnFlex>

    );
});
