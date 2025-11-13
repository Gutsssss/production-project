import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cls from './Flex.module.scss';

export type JustifyFlex = 'start' | 'end' | 'center' | 'between';
export type AlignFlex = 'start' | 'end' | 'center';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<JustifyFlex, string> = {
    start: cls.justifyStart,
    end: cls.justifyEnd,
    center: cls.justifyCenter,
    between: cls.justifyBetween,
};

const alignClasses: Record<AlignFlex, string> = {
    start: cls.alignStart,
    end: cls.alignEnd,
    center: cls.alignCenter,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};
type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

export interface FlexProps extends DivProps{
  className?: string;
  children:ReactNode;
  justify?:JustifyFlex;
  align?:AlignFlex;
  direction?:FlexDirection;
  gap?:FlexGap;
  max?:boolean
}

export const Flex = (props: FlexProps) => {
    const {
        className, children, gap, max, direction = 'row', justify = 'start', align = 'center',
    } = props;
    const classess = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];
    const mods: Mods = {
        [cls.max]: max,
    };
    return (
        <div className={classNames(cls.Flex, mods, classess)}>
            {children}
        </div>
    );
};
