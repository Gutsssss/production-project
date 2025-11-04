import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { addCommentForArticle, CommentList } from 'entities/Comment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInintinalEffect } from 'shared/lib/hooks/useInintialEffect/useInintialEffect';
import { useSelector } from 'react-redux';
import { useAcyncReducer } from 'shared/lib/useAsyncReducer/useAcyncReducer';
import { useCallback } from 'react';
import { AddCommentInArticle } from 'features/AddCommentInArticle';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import cls from './ArticleDetailsPage.module.scss';
import { fetchArticleDetailsCommentsById } from '../model/services/fetchDetailsCommentsById';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsLoading } from '../model/selectors/getArticleDetailsCommentsData/getArticleDetailsCommentsData';

interface ArticleDetailsPageProps {
  className?: string;
}
const initialReducers = {
    articleDetailsComments: articleDetailsCommentsReducer,
};
export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { id } = useParams<{id:string}>();
    const dispatch = useAppDispatch();
    const onReturn = useCallback(() => {
        navigate(RouterPath.articles);
    }, [navigate]);
    const comments = useSelector(getArticleComments.selectAll);
    const isCommentsLoading = useSelector(getArticleDetailsCommentsLoading);
    const onSendComment = useCallback((text:string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    useInintinalEffect(() => {
        dispatch(fetchArticleDetailsCommentsById(id));
    });
    useAcyncReducer({ reducers: initialReducers, removeAfterUnmount: true });
    if (!id) {
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            {t('Статья не найдена')}
        </Page>;
    }
    return (
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onReturn}>
                {t('Назад к списку')}
            </Button>
            <ArticleDetails id={id} />
            <Text className={cls.commentsTitle} title={t('Комментарии')} />
            <AddCommentInArticle onSend={onSendComment} />
            <CommentList
                isLoading={isCommentsLoading}
                comments={
                    comments
                }
            />
        </Page>

    );
};
