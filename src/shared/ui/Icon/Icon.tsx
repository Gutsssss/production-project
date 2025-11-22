import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg:React.VFC<React.SVGProps<SVGSVGElement>>
  inverted?:boolean;
  onOpen?:() => void
}

export const Icon = memo(({
    className, Svg, inverted, onOpen, ...otherProps
}: IconProps) => (
    <Svg onClick={onOpen} {...otherProps} className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
));
