import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback, useState } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername }
    from '../../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../../model/selectors/getLoginState';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);
    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);
    return (
        <div className={cls.LoginForm}>
            <Text title={t('Форма авторизации')} />
            {error
             && (
                 <Text
                     text={t('Неправильно введены логин или пароль')}
                     theme={TextTheme.ERROR}
                 />
             )}
            <Input
                autofocus
                type="text"
                placeholder={t('Имя пользователя')}
                className={classNames(cls.input, {}, [className])}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                placeholder={t('Пароль')}
                className={classNames(cls.input, {}, [className])}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
