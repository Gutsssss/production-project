import { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
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
  size?: TextSize,
  'data-testid'?:string
}

const mapSizeHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        size = TextSize.M,
        align = TextAlign.LEFT,
        'data-testid': dataTestid = 'Text',
    } = props;
    const HeaderTag = mapSizeHeaderTag[size];
    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };
    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestid}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && <p className={cls.text} data-testid={`${dataTestid}.Paragraph`}>{text}</p>}
        </div>
    );
});
