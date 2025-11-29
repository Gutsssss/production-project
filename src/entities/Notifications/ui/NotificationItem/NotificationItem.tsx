import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Notification } from '../../model/Notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  item:Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { item, className } = props;
    const content = (
        <Card theme={CardTheme.OUTLINED} className={classNames(cls.NotificationItem, {}, [className])}>
            <Text text={item.description} title={item.title} />
        </Card>
    );
    if (item.href) {
        return (
            <a className={cls.link} target="_blank" href={item.href} rel="noreferrer">
                {content}
            </a>
        );
    }
    return (
        content
    );
});
