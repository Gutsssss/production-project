import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const isLoading = useSelector(getProfileLoading);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const error = useSelector(getProfileError);
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    placeholder={t('Имя')}
                    value={data?.first}
                    className={cls.input}
                />
                <Input
                    placeholder={t('Фамилия')}
                    value={data?.lastname}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
