import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/providers/StateProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
