import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import cls from './ArticleEditPage.module.scss';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
  className?: string;
}

export const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{id:string}>();
    const isEdit = Boolean(id);
    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            <Text title={isEdit ? t(`Редактирование статьи с id:${id}`) : 'Создание статьи'} />
        </Page>
    );
});
