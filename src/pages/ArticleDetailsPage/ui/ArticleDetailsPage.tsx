import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { addCommentForArticle, CommentList } from 'entities/Comment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInintinalEffect } from 'shared/lib/hooks/useInintialEffect/useInintialEffect';
import { useSelector } from 'react-redux';
import { ReducerList, useAcyncReducer } from 'shared/lib/useAsyncReducer/useAcyncReducer';
import { useCallback } from 'react';
import { AddCommentInArticle } from 'features/AddCommentInArticle';
import { Page } from 'widgets/Page/Page';
import cls from './ArticleDetailsPage.module.scss';
import { fetchArticleDetailsCommentsById } from '../model/services/fetchDetailsCommentsById';
import { getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsLoading } from '../model/selectors/getArticleDetailsCommentsData/getArticleDetailsCommentsData';
import {
    getArticleRecommendation,
} from '../model/slice/articlesDetailsPageRecommendationSlice';
import {
    getArticleDetailsPageRecommendationLoading,
} from '../model/selectors/getArticleDetailsPageRecommendationData/getArticleDetailsPageRecommendationData';
import { fetchArticleRecommendations } from '../model/services/fetchDetailsPageRecommendation';
import { articleDetailsPageReducer } from '../model/slice';
import { ArticleDetailsHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {

  className?: string;
}
const initialReducers:ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};
export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{id:string}>();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendation.selectAll);
    const isCommentsLoading = useSelector(getArticleDetailsCommentsLoading);
    const isRecommendationLoading = useSelector(getArticleDetailsPageRecommendationLoading);
    const onSendComment = useCallback((text:string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    useInintinalEffect(() => {
        dispatch(fetchArticleDetailsCommentsById(id));
        dispatch(fetchArticleRecommendations());
    });
    useAcyncReducer({ reducers: initialReducers, removeAfterUnmount: true });
    if (!id) {
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            {t('Статья не найдена')}
        </Page>;
    }
    return (
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetailsHeader />
            <ArticleDetails id={id} />
            <Text size={TextSize.L} className={cls.commentsTitle} title={t('Реуомендуем')} />
            <ArticleList
                articles={recommendations}
                isLoading={isRecommendationLoading}
                className={cls.recommendation}
                target="_blank"
            />
            <Text size={TextSize.L} className={cls.commentsTitle} title={t('Комментарии')} />
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
