import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useEffect } from 'react';
import { ReducerList, useAcyncReducer } from '@/shared/lib/hooks/useAsyncReducer/useAcyncReducer';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import ViewIcon from '@/shared/assets/icons/eye_icon.svg';
import CalendarIcon from '@/shared/assets/icons/calendar_icon.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { ArticleBlockType } from '../../model/consts/ArticleConsts';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,
} from '../../model/selectors/getArticleDetails';
import { ArticleBlock } from '../../model/types/article';
import { articleDetailsReducer } from '../../../Article/model/slice/ArticleSlice';
import cls from './ArticleDetails.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  id:string
}

const initialReducers:ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsLoading);
    const error = useSelector(getArticleDetailsError);
    useAcyncReducer({ reducers: initialReducers, removeAfterUnmount: true });
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);
    const renderBlocks = useCallback((block:ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent className={cls.block} key={block.id} text={block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent className={cls.block} key={block.id} image={block} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent className={cls.block} key={block.id} block={block} />;
        default:
            return null;
        }
    }, []);
    let content;
    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width="20%" height={40} />
                <Skeleton className={cls.skeleton} width="40%" height={40} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        // eslint-disable-next-line i18next/no-literal-string
        content = <Text theme={TextTheme.ERROR} title="Произошла ошибка" align={TextAlign.CENTER} />;
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} avatar={article?.img} className={cls.avatar} />
                </div>
                <Text size={TextSize.L} className={cls.title} title={article?.title} text={article?.subtitle} />
                <div className={cls.articleInfo}>
                    <Icon Svg={ViewIcon} className={cls.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlocks)}
            </>
        );
    }
    return (
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            {content}
        </div>
    );
});
