import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '@/features/editableProfileCard/model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '@/features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '@/features/editableProfileCard/model/services/updateProfileData';
import { profileActions } from '@/features/editableProfileCard/model/slices/ProfileSlice';
import cls from './ProfilePageHeader.module.scss';

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
