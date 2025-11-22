import { AppDispatch } from '@/app/providers/StateProvider';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
