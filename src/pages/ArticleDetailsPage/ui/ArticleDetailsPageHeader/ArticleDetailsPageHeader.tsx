import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/getArticleDetails/article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsHeaderProps {
  className?: string;
}

export const ArticleDetailsHeader = memo(({ className }: ArticleDetailsHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);
    const canUserEdit = useSelector(getCanEditArticle);
    const onReturn = useCallback(() => {
        navigate(RouterPath.articles);
    }, [navigate]);
    const onEditArticle = useCallback(() => {
        navigate(`${RouterPath.articles}/${article?.id}/edit`);
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
