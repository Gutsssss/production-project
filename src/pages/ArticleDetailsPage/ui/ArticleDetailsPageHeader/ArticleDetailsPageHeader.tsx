import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getRouterArticles, getRouterArticlesEdit } from '@/shared/const/router';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getCanEditArticle } from '../../model/selectors/getArticleDetails/article';
import cls from './ArticleDetailsPageHeader.module.scss';
import { useArticleDetailsData } from '@/entities/Article';

interface ArticleDetailsHeaderProps {
  className?: string;
}

export const ArticleDetailsHeader = memo(({ className }: ArticleDetailsHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const article = useArticleDetailsData();
    const canUserEdit = useSelector(getCanEditArticle);
    const onReturn = useCallback(() => {
        navigate(getRouterArticles());
    }, [navigate]);
    const onEditArticle = useCallback(() => {
        navigate(getRouterArticlesEdit(article?.id));
    }, [article?.id, navigate]);
    return (
        <div className={classNames(cls.ArticleDetailsHeader, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onReturn}>
                {t('Назад к списку')}
            </Button>
            {canUserEdit && (
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
});
