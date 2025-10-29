import { classNames } from 'shared/lib/classNames/classNames';
import { ReducerList, useAcyncReducer } from 'shared/lib/useAsyncReducer/useAcyncReducer';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
    ValidateProfileErrors,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { ProfileCard } from 'entities/User';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useInintinalEffect } from 'shared/lib/hooks/useInintialEffect/useInintialEffect';
import { useParams } from 'react-router-dom';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
  className?: string;
}

const initialReducers:ReducerList = {
    profile: profileReducer,
};

export const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');
    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { id } = useParams();
    const validateErrorTranslation = {
        [ValidateProfileErrors.INVALID_AGE]: t('Некорректный возраст'),
        [ValidateProfileErrors.INVALID_CITY]: t('Некорректный Город'),
        [ValidateProfileErrors.INVALID_NAME]: t('Некорректное имя или фамилия'),
        [ValidateProfileErrors.SERVER_ERROR]: t('Серверная ошибка'),
        [ValidateProfileErrors.INVALID_DATA]: t('Данные не указаны'),
    };
    useAcyncReducer({ reducers: initialReducers, removeAfterUnmount: true });
    useInintinalEffect(() => {
        dispatch(fetchProfileData(id));
    });
    const onChangeFirstname = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);
    const onChangeLastname = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);
    const onChangeAge = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);
    const onChangeCity = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);
    const onChangeUsername = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((value?:string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);
    const onChangeCurrency = useCallback((value?:Currency) => {
        dispatch(profileActions.updateProfile({ currency: value || '' }));
    }, [dispatch]);
    const onChangeCountry = useCallback((value?:Country) => {
        dispatch(profileActions.updateProfile({ country: value || '' }));
    }, [dispatch]);
    return (
        <div className={classNames('', {}, [className])}>
            <ProfilePageHeader />
            {validateErrors?.length
            && validateErrors?.map((err) => (
                <Text
                    theme={TextTheme.ERROR}
                    key={err}
                    title={validateErrorTranslation[err]}
                />
            ))}
            <ProfileCard
                readonly={readonly}
                data={form}
                isLoading={isLoading}
                error={error}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </div>
    );
};
