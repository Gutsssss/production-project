import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  size?:number,
  avatar:string,
  alt?:string
}

export const Avatar = (props: AvatarProps) => {
    const {
        className, size, avatar, alt,
    } = props;
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);
    return (
        <img src={avatar} alt={alt} style={styles} className={classNames(cls.Avatar, {}, [className])} />
    );
};
