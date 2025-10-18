import { StateSchema } from 'app/providers/StateProvider';

export const getLoginState = (state:StateSchema) => state?.loginForm;
