import { Profile, ProfileSchema } from './model/type/type';
import { profileReducer, profileActions } from './model/slice/ProfileSlice';
import { fetchProfileData } from './model/services/fetchProfileData';
import { updateProfileData } from './model/services/updateProfileData';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading';
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';

export {
    Profile,
    ProfileSchema,
    profileReducer,
    profileActions,
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileLoading,
    getProfileReadonly,
    getProfileForm,
    updateProfileData,
};
