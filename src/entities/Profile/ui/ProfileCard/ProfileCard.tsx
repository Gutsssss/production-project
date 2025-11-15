import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/Input/Input';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { ColumnFlex } from 'shared/ui/Stack/ColumnFlex/ColumnFlex';
import { RowFlex } from 'shared/ui/Stack/RowFlex/RowFlex';
import { Profile } from '../../model/type/type';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?:Profile;
  isLoading?:boolean,
  error?:string,
  readonly?:boolean
  onChangeFirstname?:(value?:string) => void
  onChangeLastname?:(value?:string) => void
  onChangeAge?:(value?:string) => void
  onChangeCity?:(value?:string) => void
  onChangeUsername?:(value?:string) => void
  onChangeAvatar?:(value?:string) => void
  onChangeCurrency?:(currency?:Currency) => void
  onChangeCountry?:(country?:Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');
    if (isLoading) {
        return (
            <RowFlex className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </RowFlex>
        );
    }
    if (error) {
        return (
            <RowFlex className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте перезагрузить страницу')}
                    align={TextAlign.CENTER}
                />
            </RowFlex>
        );
    }
    const mods:Mods = {
        [cls.editing]: readonly,
    };
    return (
        <ColumnFlex gap="8" className={classNames(cls.ProfileCard, mods, [className])}>
            <RowFlex justify="center" className={cls.avatarWrapper}>
                <Avatar avatar={data?.avatar} alt={data?.avatar} size={150} />
            </RowFlex>
            <Input
                placeholder={t('Имя')}
                value={data?.first}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                placeholder={t('Фамилия')}
                value={data?.lastname}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <Input
                placeholder={t('Возраст')}
                value={data?.age}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
                type="number"
            />
            <Input
                placeholder={t('Город')}
                value={data?.city}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                placeholder={t('Имя пользователя')}
                value={data?.username}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                placeholder={t('Аватар пользователя')}
                value={data?.avatar}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </ColumnFlex>
    );
};
