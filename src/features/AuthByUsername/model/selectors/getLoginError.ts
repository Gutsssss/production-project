import { StateSchema } from 'app/providers/StateProvider';

export const getLoginError = (state:StateSchema) => state.loginForm?.error || '';
