import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from 'entities/Article/model/types/article';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import ViewIcon from 'shared/assets/icons/eye_icon.svg';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleItemProps {
  className?: string;
  article:Article,
  view:ArticleView
}

export const ArticleItem = memo((props: ArticleItemProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { article, className, view = ArticleView.SMALL_PLATE } = props;
    const types = <Text text={article.type.join(',')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={ViewIcon} />
        </>
    );
    const onOpenArticle = useCallback(() => {
        navigate(RouterPath.article_details + article.id);
    }, [article.id, navigate]);
    if (view === ArticleView.BIG_PLATE) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} avatar={article.user?.avatar} />
                        <Text text={article.user?.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    <img alt={article.title} src={article.img} className={cls.img} />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle}>{t('Читать далее')}</Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
            <Card onClick={onOpenArticle} className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img alt={article.title} src={article.img} className={cls.img} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    );
});
