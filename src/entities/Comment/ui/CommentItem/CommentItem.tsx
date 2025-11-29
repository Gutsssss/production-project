import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { RouterPath } from '@/shared/const/router';
import { ColumnFlex } from '@/shared/ui/Stack';
import { Comment } from '../../model/types/Comment';
import cls from './CommentItem.module.scss';

interface CommentItemProps {
  className?: string;
  comment:Comment;
  isLoading?:boolean
}

export const CommentItem = memo(({ className, comment, isLoading }: CommentItemProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentItem, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton className={cls.avatar} width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} />
                </div>
                <Skeleton className={cls.commentBody} width={200} height={30} />
            </div>
        );
    }
    return (
        <ColumnFlex gap="8" max className={classNames(cls.CommentItem, {}, [className])}>
            <AppLink to={`${RouterPath.profile}${comment.user.id}`} className={cls.header}>
                {comment?.user?.avatar ? <Avatar className={cls.avatar} size={30} avatar={comment?.user?.avatar} /> : null}
                <Text title={comment?.user?.username} />
            </AppLink>
            <Text className={cls.commentBody} text={comment?.text} />
        </ColumnFlex>
    );
});
