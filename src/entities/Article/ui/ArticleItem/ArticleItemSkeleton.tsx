import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import {
    ArticleView,
} from 'entities/Article/model/types/article';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleItem.module.scss';

interface ArticleItemProps {
  className?: string;
  view:ArticleView
}

export const ArticleItemSkeleton = memo((props: ArticleItemProps) => {
    const { className, view } = props;
    if (view === ArticleView.BIG_PLATE) {
        return (
            <div className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton height={30} width={30} border="50%" />
                        <Skeleton height={16} width={150} className={cls.username} />
                        <Skeleton height={16} width={150} className={cls.date} />
                    </div>
                    <Skeleton height={24} width={300} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton height={200} className={cls.img} />
                    <Skeleton height={16} width={100} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton height={16} width={130} />
                </div>
                <Skeleton width={150} className={cls.title} />
            </Card>
        </div>
    );
});
