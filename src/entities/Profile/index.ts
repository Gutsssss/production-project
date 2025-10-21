import { Profile, ProfileSchema } from './model/type/type';
import { profileReducer, profileActions } from './model/slice/ProfileSlice';
import { fetchProfileData } from './model/services/fetchProfileData';

export {
    Profile, ProfileSchema, profileReducer, profileActions, fetchProfileData,
};
