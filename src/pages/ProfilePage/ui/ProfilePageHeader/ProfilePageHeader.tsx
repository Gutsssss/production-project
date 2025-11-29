import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';

import cls from './ProfilePageHeader.module.scss';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from '@/features/editableProfileCard';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                {canEdit && (
                    <div className={cls.btnsWrapper}>
                        {readonly ? (
                            <Button
                                className={cls.editBtn}
                                onClick={onEdit}
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <>
                                <Button
                                    className={cls.editBtn}
                                    onClick={onCancelEdit}
                                    theme={ButtonTheme.OUTLINE_RED}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    className={cls.saveBtn}
                                    onClick={onSave}
                                    theme={ButtonTheme.OUTLINE}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
};
