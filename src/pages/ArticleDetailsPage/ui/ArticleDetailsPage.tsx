import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { ReducerList, useAcyncReducer } from 'shared/lib/useAsyncReducer/useAcyncReducer';
import { Page } from 'widgets/Page/Page';
import { ArticleRecommendationList } from 'features/articleRecommendationList';
import { ColumnFlex } from 'shared/ui/Stack/ColumnFlex/ColumnFlex';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../model/slice';
import { ArticleDetailsHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from './ArticleDetailsComments/ArticleDetailsComments';

interface ArticleDetailsPageProps {

  className?: string;
}
const initialReducers:ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};
export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{id:string}>();
    useAcyncReducer({ reducers: initialReducers, removeAfterUnmount: true });
    if (!id) {
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            {t('Статья не найдена')}
        </Page>;
    }
    return (
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ColumnFlex gap="16" max>
                <ArticleDetailsHeader />
                <ArticleDetails id={id} />
                <ArticleRecommendationList />
                <ArticleDetailsComments id={id} />
            </ColumnFlex>
        </Page>

    );
};
