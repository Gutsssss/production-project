import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducerList, useAcyncReducer } from 'shared/lib/useAsyncReducer/useAcyncReducer';
import { articlePageActions, articlePageReducer, getArticleList } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { useInintinalEffect } from 'shared/lib/hooks/useInintialEffect/useInintialEffect';
import { fetchArticleList } from 'pages/ArticlesPage/model/services/fetchArticleList';
import { useSelector } from 'react-redux';
import {
    getArticlesPageError,
    getArticlesPageLoading,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/getArticlesPageSelectos';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { useCallback } from 'react';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}
const reducers:ReducerList = {
    articlePage: articlePageReducer,
};
export const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const articles = useSelector(getArticleList.selectAll);
    const isLoading = useSelector(getArticlesPageLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const onChangeView = useCallback((view:ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);
    useAcyncReducer({ reducers });
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);
    useInintinalEffect(() => {
        dispatch(articlePageActions.initState());
        dispatch(fetchArticleList({
            page: 1,
        }));
    });
    if (error) {
        return (
            <Text align={TextAlign.CENTER} title={t('Возникла ошибка при получении статей')} />
        );
    }
    return (
        <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleViewSelector view={view} onViewClick={onChangeView} />
            <ArticleList articles={articles} view={view} isLoading={isLoading} />
        </Page>
    );
};
