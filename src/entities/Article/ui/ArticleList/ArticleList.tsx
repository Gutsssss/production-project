/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import {
    HTMLAttributeAnchorTarget, memo, useCallback,
} from 'react';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { ArticleItemSkeleton } from '../ArticleItem/ArticleItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  isLoading?: boolean;
  loadNextPart?:() => void
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL_PLATE ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation();
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL_PLATE,
        target,
        loadNextPart,
    } = props;

    const renderArticleItem = useCallback((index: number, article: Article) => (
        <ArticleItem
            key={article.id}
            article={article}
            className={cls.item}
            view={view}
            target={target}
        />
    ), [view, target]);

    const Footer = useCallback(() => (
        <div style={{
            padding: '1rem',
            textAlign: 'center',
            background: '#f5f5f5',
        }}
        >
            {isLoading ?? getSkeletons(view)}
        </div>
    ), [isLoading, view]);

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text
                    size={TextSize.L}
                    title={t('Статьи не найдены')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        view === ArticleView.BIG_PLATE
            ? (
                <Virtuoso
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                    endReached={loadNextPart}
                    data={articles}
                    style={{ height: '1000px' }}
                    itemContent={renderArticleItem}
                    components={{ Footer }}
                    // Критически важные настройки для useWindowScroll:
                    totalListHeightChanged={(height) => {
                        // Это может помочь с паддингами
                        console.log('Total height:', height);
                    }}
                    alignToBottom={false}
                    increaseViewportBy={200} // Большое значение для плавности
                    overscan={20}
                />
            ) : (
                <VirtuosoGrid
                    components={{ Footer }}
                    style={{ height: '100%' }}
                    endReached={loadNextPart}
                    data={articles}
                    itemContent={renderArticleItem}
                />
            )
    );
});
