import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import cls from './Dropdown.module.scss';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/const';
import popupCls from '../../styles/styles.module.scss';

export interface ItemsDropdown {
    disabled?:boolean
    content:ReactNode;
    href?:string;
    onCLick?:() => void;
}

interface DropdownProps {
    className?:string;
    items:ItemsDropdown[];
    trigger:ReactNode;
    direction?:DropdownDirection
}

export const Dropdown = (props :DropdownProps) => {
    const {
        className, items, trigger, direction,
    } = props;
    const classess = [mapDirectionClass[direction]];
    return (
        <Menu as="div" className={classNames(popupCls.popup, {}, [className])}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, classess)}>
                {items?.map((item, index) => {
                    const content = ({ active }:{active:boolean}) => (
                        // eslint-disable-next-line i18next/no-literal-string
                        <button
                            key={index}
                            disabled={item.disabled}
                            type="button"
                            onClick={item.onCLick}
                            className={classNames(cls.item, { [cls.active]: active }, [])}
                        >
                            {item.content}
                        </button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item key={index} as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
};
