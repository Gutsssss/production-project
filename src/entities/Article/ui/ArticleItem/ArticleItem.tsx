import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import ViewIcon from '@/shared/assets/icons/eye_icon.svg';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { getRouterArticlesDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';

import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import cls from './ArticleItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlockType, ArticleView } from '../../model/consts/ArticleConsts';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppImage } from '@/shared/ui/AppImage/ui/AppImage';

interface ArticleItemProps {
  className?: string;
  article:Article,
  view:ArticleView,
  target?:HTMLAttributeAnchorTarget
}

export const ArticleItem = memo((props: ArticleItemProps) => {
    const { t } = useTranslation();
    const {
        article, className, view = ArticleView.SMALL_PLATE, target,
    } = props;
    const types = <Text text={article.type.join(',')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={ViewIcon} />
        </>
    );
    if (view === ArticleView.BIG_PLATE) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div data-testid="AatticleItem" className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} avatar={article.user?.avatar} />
                        <Text text={article.user?.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    <AppImage
                        fallback={<Skeleton width="100%" height="200px" />}
                        alt={article.title}
                        src={article.img}
                        className={cls.img}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink target={target} to={getRouterArticlesDetails(article.id)}>
                            <Button>{t('Читать далее')}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <AppLink
            target={target}
            to={getRouterArticlesDetails(article.id)}
            className={classNames(cls.ArticleItem, {}, [className, cls[view]])}
        >
            <Card data-testid="AatticleItem" className={cls.card}>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width="200px" height="200px" />}
                        alt={article.title}
                        src={article.img}
                        className={cls.img}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
