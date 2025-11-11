import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import cls from './ListBox.module.scss';
import { Button, ButtonTheme } from '../Button/Button';
import { RowFlex } from '../Stack/RowFlex/RowFlex';

export interface ListOptions {
    value:string,
    content:ReactNode,
    disabled?:boolean
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'top left': cls.optionTopLeft,
    'top right': cls.optionTopRight,
    'bottom left': cls.optionBottomLeft,
    'bottom right': cls.optionBottomRight,
};

export interface ListBoxProps {
    className?:string,
    label?:string,
    options?:ListOptions[],
    value?:string,
    defaultValue?:string,
    onChange?:(value:string) => void,
    readonly?:boolean,
    direction?:DropdownDirection
}

export function Listbox(props:ListBoxProps) {
    const {
        className, value, label, onChange, defaultValue, options, readonly, direction = 'bottom left',
    } = props;
    const classess = [cls.options, mapDirectionClass[direction]];
    return (
        <RowFlex gap="4">
            {label && (
                <span>
                    {label}
                </span>
            )}
            <HListBox
                as="div"
                disabled={readonly}
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button as={Button!} theme={ButtonTheme.OUTLINE}>
                    {value ?? defaultValue}
                </HListBox.Button>
                <HListBox.Options className={classNames('', {}, classess)}>
                    {options?.map((item) => (

                        <HListBox.Option
                            key={item?.value}
                            value={item?.value}
                            disabled={item?.disabled}
                            as={Fragment}
                        >
                            {({ active }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
                                        },
                                        [cls.direction],
                                    )}
                                >
                                    {item?.content}
                                </li>
                            )}

                        </HListBox.Option>

                    ))}
                </HListBox.Options>
            </HListBox>
        </RowFlex>
    );
}
