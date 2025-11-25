import {
    ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE='outline',
    OUTLINE_RED='outlineRed',
    BACKGROUND='background',
    BACKGROUND_INVERTED='backgroundInverted',
}

export enum ButtonSize {
    SIZE_M='sizeM',
    SIZE_L='sizeL',
    SIZE_XL='sizeXL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?:boolean;
    size?:ButtonSize;
    disabled?:boolean
    children?:ReactNode
}

export const Button = memo((props:ButtonProps) => {
    const {
        className, children, theme, square, disabled, size = ButtonSize.SIZE_M, ...otherProps
    } = props;

    const mods:Mods = {
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };
    return (
        <button
            data-testid="button"
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
