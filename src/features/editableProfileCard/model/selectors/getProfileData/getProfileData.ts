import { StateSchema } from '@/app/providers/StateProvider';

export const getProfileData = (state:StateSchema) => state?.profile?.data;
