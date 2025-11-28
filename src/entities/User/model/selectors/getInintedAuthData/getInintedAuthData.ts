import { StateSchema } from '@/app/providers/StoreProvider';

export const getInitedAuthData = (state:StateSchema) => state.user._ininted;
