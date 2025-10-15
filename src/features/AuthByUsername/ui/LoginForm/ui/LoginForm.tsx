import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={cls.LoginForm}>
            <Input
                autofocus
                type="text"
                placeholder={t('Имя пользователя')}
                className={classNames(cls.input, {}, [className])}
            />
            <Input
                type="text"
                placeholder={t('Пароль')}
                className={classNames(cls.input, {}, [className])}
            />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
