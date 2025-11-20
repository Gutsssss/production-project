import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { useSelector } from 'react-redux';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Popups';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface avatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo(({ className }: avatarDropdownProps) => {
    const dispatch = useAppDispatch();
    const authdata = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);
    return (
        <Dropdown
            direction="bottom left"
            className={classNames('', {}, [className])}
            items={[
                ...(isAdminPanelAvailable ? [{ content: 'Админ', href: RouterPath.admin_panel }] : []),
                { content: 'Профиль', href: RouterPath.profile + authdata.id },
                { content: 'Выйти', onCLick: onLogout },
            ]}
            trigger={<Avatar size={40} avatar={authdata.avatar} />}
        />
    );
});
