import { classNames } from 'shared/lib/classNames/classNames';
import { ReducerList, useAcyncReducer } from 'shared/lib/useAsyncReducer/useAcyncReducer';
import { fetchProfileData, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { ProfileCard } from 'entities/User';

interface ProfilePageProps {
  className?: string;
}

const initialReducers:ReducerList = {
    profile: profileReducer,
};

export const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    useAcyncReducer({ reducers: initialReducers, removeAfterUnmount: true });
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <div className={classNames('', {}, [className])}>
            <ProfileCard />
        </div>
    );
};
