import { StateSchema } from '@/app/providers/StateProvider';

export const getLoginPassword = (state:StateSchema) => state.loginForm?.password || '';
