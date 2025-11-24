import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ColumnFlex } from '@/shared/ui/Stack/ColumnFlex/ColumnFlex';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });
    if (isLoading) {
        return (
            <ColumnFlex gap="16" max className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton width="100%" border="8px" height="80" />
                <Skeleton width="100%" border="8px" height="80" />
                <Skeleton width="100%" border="8px" height="80" />
            </ColumnFlex>
        );
    }
    return (
        <ColumnFlex gap="16" max className={classNames(cls.NotificationList, {}, [className])}>
            {data?.map((item) => <NotificationItem item={item} key={item.id} />)}

        </ColumnFlex>
    );
});
