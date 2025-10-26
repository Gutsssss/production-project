import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { userReducer, userActions } from './model/slice/UserSlice';
import { User, UserSchema } from './model/types/User';
import { getInitedAuthData } from './model/selectors/getInintedAuthData/getInintedAuthData';

export {
    User, UserSchema, userReducer, userActions, getUserAuthData, ProfileCard, getInitedAuthData,
};
