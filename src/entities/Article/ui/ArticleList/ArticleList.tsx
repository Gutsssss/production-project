import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import { ArticleItemSkeleton } from '../ArticleItem/ArticleItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles:Article[];
  view?:ArticleView;
  isLoading?:boolean
}

const getSkeletons = (view:ArticleView) => new Array(view === ArticleView.SMALL_PLATE ? 9 : 3).fill(0).map((item, index) => (
    <ArticleItemSkeleton className={cls.card} key={index} view={view} />
));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, articles, isLoading, view = ArticleView.SMALL_PLATE,
    } = props;
    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className])}>
                {getSkeletons(view)}
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            {articles?.map((article) => (<ArticleItem key={article.id} view={view} article={article} />))}
        </div>
    );
});
