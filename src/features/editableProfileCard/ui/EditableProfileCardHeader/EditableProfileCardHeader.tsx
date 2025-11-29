import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { RowFlex } from '@/shared/ui/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData';
import { profileActions } from '../../model/slices/ProfileSlice';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = ({ className }: EditableProfileCardHeaderProps) => {
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
        <RowFlex max gap="8" className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <RowFlex gap="8">
                    {readonly ? (
                        <Button
                            onClick={onEdit}
                            theme={ButtonTheme.OUTLINE}
                            data-testid="EditableProfileCardHeader.EditBtn"
                        >
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                onClick={onCancelEdit}
                                theme={ButtonTheme.OUTLINE_RED}
                                data-testid="EditableProfileCardHeader.CancelBtn"
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                onClick={onSave}
                                theme={ButtonTheme.OUTLINE}
                                data-testid="EditableProfileCardHeader.SaveBtn"
                            >
                                {t('Сохранить')}
                            </Button>
                        </>
                    )}
                </RowFlex>
            )}
        </RowFlex>
    );
};
