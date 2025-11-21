import { memo, useCallback, useState } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-icon.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { NotificationList } from 'entities/Notifications';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
import { AnimationProvider } from 'shared/lib/ui/AnimationProvider';
import cls from './OpenNotificationsButton.module.scss';

interface OpenNotificationsButtonProps {
  className?: string;
}

export const OpenNotificationsButton = memo((props: OpenNotificationsButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);
    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);
    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);
    const isMobile = useDevice();
    const trigger = (
        <Icon onOpen={onOpenDrawer} Svg={NotificationIcon} inverted />
    );
    return (
        <div>
            {isMobile ? (
                <AnimationProvider>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            ) : (
                <Popover
                    onClose={onCloseDrawer}
                    direction="bottom left"
                    className={classNames(cls.OpenNotificationsButton, {}, [className])}
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            )}
        </div>
    );
});
