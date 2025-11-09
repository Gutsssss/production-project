import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { t } from 'i18next';
import { Comment } from '../../model/types/Comment';
import cls from './CommentList.module.scss';
import { CommentItem } from '../CommentItem/CommentItem';

interface CommentListProps {
  className?: string;
  comments?:Comment[]
  isLoading:boolean
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => (
    <div className={classNames(cls.CommentList, {}, [className])}>
        {comments.length
            ? comments?.map((comment) => (
                <CommentItem
                    key={comment.id}
                    isLoading={isLoading}
                    comment={comment}
                />
            )) : <Text text={t('Список комментариев пуст')} />}
    </div>
));
