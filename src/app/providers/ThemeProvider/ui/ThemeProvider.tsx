import { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../lib/ThemeContext';

interface ThemeProviderProps {
    inintialTheme?:Theme
}
const defaultTheme = (localStorage
    .getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { inintialTheme, children } = props;
    const [theme, setTheme] = useState<Theme>(inintialTheme || defaultTheme);

    const defaultOptions = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );
    return (
        <ThemeContext.Provider value={defaultOptions}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
