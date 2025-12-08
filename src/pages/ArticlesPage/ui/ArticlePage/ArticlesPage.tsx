import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducerList, useAcyncReducer } from '@/shared/lib/hooks/useAsyncReducer/useAcyncReducer';
import { useInintinalEffect } from '@/shared/lib/hooks/useInintialEffect/useInintialEffect';
import { Text, TextAlign } from '@/shared/ui/Text';
import { articlePageReducer, getArticleList } from '../../model/slice/articlesPageSlice';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage';
import { initActionArticlePage } from '../../model/services/initActionArticlePage';
import cls from './ArticlesPage.module.scss';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { Page } from '@/widgets/Page';
import { getArticlesPageLoading, getArticlesPageError, getArticlesPageView } from '../../model/selectors/getArticlesPageSelectos';

interface ArticlesPageProps {
  className?: string;
}
const reducers:ReducerList = {
    articlePage: articlePageReducer,
};
export const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
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
        <Page data-testid="ArticlesPage" className={classNames(cls.ArticlesPage, {}, [className])}>
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
