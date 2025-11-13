import { StateSchema } from 'app/providers/StateProvider';

export const getProfileError = (state:StateSchema) => state?.profile?.error || '';
