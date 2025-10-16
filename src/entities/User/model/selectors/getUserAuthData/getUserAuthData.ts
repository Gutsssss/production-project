import { StateSchema } from 'app/providers/StateProvider';

export const getUserAuthData = (state:StateSchema) => state.user.authData;
