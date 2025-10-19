import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { FC, memo } from 'react';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import cls from './ThemeSwitcher.module.scss';
import { Button, ButtonTheme } from '../Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props:ThemeSwitcherProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
