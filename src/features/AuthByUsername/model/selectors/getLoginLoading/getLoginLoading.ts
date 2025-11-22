import { StateSchema } from '@/app/providers/StateProvider';

export const getLoginLoading = (state:StateSchema) => state.loginForm?.isLoading || false;
