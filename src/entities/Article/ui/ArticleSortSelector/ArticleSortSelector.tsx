import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import { SortOrder } from '@/shared/types/SortOrder';
import { ArtcileSortField } from '../../model/consts/ArticleConsts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort:ArtcileSortField,
  order:SortOrder,
  onChangeSort:(newSort:ArtcileSortField) => void,
  onChangeOrder:(newOrder:SortOrder) => void,
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, sort, order, onChangeOrder, onChangeSort,
    } = props;
    const { t } = useTranslation();
    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);
    const sortFieldOptions = useMemo<SelectOption<ArtcileSortField>[]>(() => [
        {
            value: ArtcileSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArtcileSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArtcileSortField.VIEWS,
            content: t('просмотрам'),
        },
    ], [t]);
    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArtcileSortField> label={t('Сортировать ПО')} options={sortFieldOptions} value={sort} onChange={onChangeSort} />
            <Select label={t('по')} options={orderOptions} value={order} onChange={onChangeOrder} />
        </div>
    );
});
