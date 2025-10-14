import { StateSchema } from 'app/providers/StateProvider';

export const getCounter = (state:StateSchema) => state.counter;
