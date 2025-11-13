import { StateSchema } from 'app/providers/StateProvider';

export const getProfileForm = (state:StateSchema) => state?.profile?.form;
