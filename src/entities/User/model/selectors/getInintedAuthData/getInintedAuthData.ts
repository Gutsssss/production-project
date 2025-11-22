import { StateSchema } from '@/app/providers/StateProvider';

export const getInitedAuthData = (state:StateSchema) => state.user._ininted;
