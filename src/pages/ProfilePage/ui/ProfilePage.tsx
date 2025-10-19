import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ReducerList, useAcyncReducer } from 'shared/lib/useAsyncReducer/useAcyncReducer';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
  className?: string;
}

const initialReducers:ReducerList = {
    profile: profileReducer,
};

export const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    useAcyncReducer({ reducers: initialReducers, removeAfterUnmount: true });
    return (
        <div className={classNames('', {}, [className])}>
            {t('PROFILE')}
        </div>
    );
};
