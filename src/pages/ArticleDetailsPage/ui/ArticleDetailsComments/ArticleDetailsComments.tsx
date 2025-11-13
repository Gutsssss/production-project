import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ColumnFlex } from 'shared/ui/Stack/ColumnFlex/ColumnFlex';
import { addCommentForArticle, CommentList } from 'entities/Comment';
import { AddCommentInArticle } from 'features/AddCommentInArticle';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInintinalEffect } from 'shared/lib/hooks/useInintialEffect/useInintialEffect';
import { getArticleDetailsCommentsLoading } from
    '../../model/selectors/getArticleDetailsCommentsData/getArticleDetailsCommentsData';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { fetchArticleDetailsCommentsById } from '../../model/services/fetchDetailsCommentsById';

interface ArticleDetailsCommentsProps {
  className?: string;
  id:string
}

export const ArticleDetailsComments = memo(({ className, id }: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isCommentsLoading = useSelector(getArticleDetailsCommentsLoading);
    const onSendComment = useCallback((text:string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    useInintinalEffect(() => {
        dispatch(fetchArticleDetailsCommentsById(id));
    });
    return (
        <ColumnFlex align="start" gap="8" className={classNames('', {}, [className])}>
            <Text size={TextSize.L} title={t('Комментарии')} />
            <AddCommentInArticle onSend={onSendComment} />
            <CommentList
                isLoading={isCommentsLoading}
                comments={
                    comments
                }
            />
        </ColumnFlex>
    );
});
