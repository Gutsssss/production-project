import { StateSchema } from 'app/providers/StateProvider';

export const getProfileValidateErrors = (state:StateSchema) => state?.profile?.validateErrors;
