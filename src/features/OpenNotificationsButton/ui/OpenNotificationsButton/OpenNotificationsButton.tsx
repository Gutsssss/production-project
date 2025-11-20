import { memo } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-icon.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { NotificationList } from 'entities/Notifications';
import cls from './OpenNotificationsButton.module.scss';

interface OpenNotificationsButtonProps {
  className?: string;
}

export const OpenNotificationsButton = memo((props: OpenNotificationsButtonProps) => {
    const { className } = props;
    return (
        <Popover
            direction="bottom left"
            className={classNames(cls.OpenNotificationsButton, {}, [className])}
            trigger={(
                <Icon Svg={NotificationIcon} inverted />
            )}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
