import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { ArticleItemSkeleton } from '../ArticleItem/ArticleItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles:Article[];
  view?:ArticleView;
  target?:HTMLAttributeAnchorTarget
  isLoading?:boolean
}

const getSkeletons = (view:ArticleView) => new Array(view === ArticleView.SMALL_PLATE ? 9 : 3).fill(0).map((item, index) => (
    <ArticleItemSkeleton className={cls.card} key={index} view={view} />
));

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation();
    const {
        className, articles, isLoading, view = ArticleView.SMALL_PLATE, target,
    } = props;
    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} align={TextAlign.CENTER} />
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles?.map((article) => (
                <ArticleItem
                    target={target}
                    className={cls.card}
                    key={article.id}
                    view={view}
                    article={article}
                />
            ))}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
