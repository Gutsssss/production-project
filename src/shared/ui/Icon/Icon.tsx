import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg:React.VFC<React.SVGProps<SVGSVGElement>>
  inverted?:boolean;
  onOpen?:() => void
}

export const Icon = memo(({
    className, Svg, inverted, onOpen,
}: IconProps) => (
    <Svg onClick={onOpen} className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
));
