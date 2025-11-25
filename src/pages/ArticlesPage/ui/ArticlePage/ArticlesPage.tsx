import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducerList, useAcyncReducer } from '@/shared/lib/hooks/useAsyncReducer/useAcyncReducer';
import { useInintinalEffect } from '@/shared/lib/hooks/useInintialEffect/useInintialEffect';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import {
    getArticlesPageError,
    getArticlesPageLoading,
    getArticlesPageView,
} from '../../model/selectors/getArticlesPageSelectos';
import { articlePageReducer, getArticleList } from '../../model/slice/articlesPageSlice';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage';
import { initActionArticlePage } from '../../model/services/initActionArticlePage';
import cls from './ArticlesPage.module.scss';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { Page } from '@/widgets/Page';

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
    const [searchParams] = useSearchParams();
    useAcyncReducer({ reducers, removeAfterUnmount: false });
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);
    useInintinalEffect(() => {
        dispatch(initActionArticlePage(searchParams));
    });
    if (error) {
        return (
            <Text align={TextAlign.CENTER} title={t('Возникла ошибка при получении статей')} />
        );
    }
    return (
        <Page className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticlePageFilters />
            <ArticleList
                className={cls.list}
                articles={articles}
                view={view}
                isLoading={isLoading}
                loadNextPart={onLoadNextPart}
            />
        </Page>
    );
};
