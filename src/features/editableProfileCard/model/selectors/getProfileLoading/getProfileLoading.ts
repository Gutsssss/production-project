import { StateSchema } from '@/app/providers/StateProvider';

export const getProfileLoading = (state:StateSchema) => state?.profile?.isLoading || false;
