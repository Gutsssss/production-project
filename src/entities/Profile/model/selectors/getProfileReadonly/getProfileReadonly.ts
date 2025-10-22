import { StateSchema } from 'app/providers/StateProvider';

export const getProfileReadonly = (state:StateSchema) => state?.profile?.readonly;
