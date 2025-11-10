import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY ='primary',
    INVERTED = 'inverted',
    ERROR ='error',
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}
interface TextProps {
  className?: string;
  title?:string,
  text?:string,
  theme?:TextTheme,
  align?:TextAlign,
  size?: TextSize
}

const mapSizeHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className, title, text, theme = TextTheme.PRIMARY, size = TextSize.M, align = TextAlign.LEFT,
    } = props;
    const HeaderTag = mapSizeHeaderTag[size];
    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };
    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
