import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './LanguageSwitcher.module.scss';
import { Button, ButtonTheme } from '../../shared/ui/Button/Button';

interface LanguageSwitcherProps {
    className?: string;
    short?:boolean
}

export const LanguageSwitcher = memo(({ className, short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            onClick={toggleLang}
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.Lang, {}, [className])}
        >
            {short ? t('Короткая версия') : t('Язык')}
        </Button>
    );
});
