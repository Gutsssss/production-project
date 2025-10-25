import { useContext } from 'react';
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

interface UseThemeResults {
    toggleTheme: () => void;
    theme?: Theme;
}

export const useTheme = (): UseThemeResults => {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        let newTheme:Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.GREEN:
            newTheme = Theme.DARK;
            break;
        case Theme.LIGHT:
            newTheme = Theme.GREEN;
            break;
        default:
            newTheme = Theme.LIGHT;
        }
        setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme, toggleTheme };
};
