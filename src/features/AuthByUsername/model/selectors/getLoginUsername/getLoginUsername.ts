import { StateSchema } from 'app/providers/StateProvider';

export const getLoginUsername = (state:StateSchema) => state.loginForm?.username || '';
