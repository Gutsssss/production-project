import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage/ui/AppImage';
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';
import UserAvatar from '../../assets/icons/avatar-icon.svg';

interface AvatarProps {
  className?: string;
  size?:number,
  avatar:string,
  alt?:string,
  inverted?:boolean
}

export const Avatar = (props: AvatarProps) => {
    const {
        className, size = 100, avatar, alt, inverted,
    } = props;
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);
    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon inverted={inverted} Svg={UserAvatar} width={size} height={size} />;
    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={avatar}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};
