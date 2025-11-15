import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ReducerList, useAcyncReducer } from 'shared/lib/useAsyncReducer/useAcyncReducer';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInintinalEffect } from 'shared/lib/hooks/useInintialEffect/useInintialEffect';
import { ColumnFlex } from 'shared/ui/Stack/ColumnFlex/ColumnFlex';
import { ProfileCard } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import cls from './EditableProfileCard.module.scss';
import { profileActions, profileReducer } from '../../model/slices/ProfileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
    className?: string;
    id:string
}

const initialReducers:ReducerList = {
    profile: profileReducer,
};
export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const form = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const validateErrorTranslation = {
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректное имя или фамилия'),
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
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
    useAcyncReducer({ reducers: initialReducers, removeAfterUnmount: true });
    return (
        <ColumnFlex gap="8" max className={classNames(cls.EditableProfileCard, {}, [className])}>
            <EditableProfileCardHeader />
            {validateErrors?.length && validateErrors.map((err: ValidateProfileError) => (
                <Text
                    key={err}
                    theme={TextTheme.ERROR}
                    text={validateErrorTranslation[err]}
                    data-testid="EditableProfileCard.Error"
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
        </ColumnFlex>
    );
});
