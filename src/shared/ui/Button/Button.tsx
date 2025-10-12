import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE='outline',
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
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme, square, size = ButtonSize.SIZE_M, ...otherProps
    } = props;

    const mods:Record<string, boolean> = {
        [cls.square]: square,
        [cls[size]]: true,
    };
    return (
        <button
            data-testid="button"
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
