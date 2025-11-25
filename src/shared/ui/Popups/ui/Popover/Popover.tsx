import { ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './Popover.module.scss';
import { mapDirectionClass } from '../../styles/const';
import popupCls from '../../styles/styles.module.scss';

interface PopoverProps {
  className?: string;
  trigger?:ReactNode;
  direction?:DropdownDirection;
  children?:ReactNode;
  onClose?:() => void
}

export const Popover = (props :PopoverProps) => {
    const {
        trigger, className, children, direction,
        onClose,
    } = props;
    const classess = [mapDirectionClass[direction]];
    return (
        <div onClick={onClose}>
            <Menu as="div" className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
                <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
                <Menu.Items className={classNames(cls.panel, {}, classess)}>
                    {children}
                </Menu.Items>
            </Menu>
        </div>
    );
};
