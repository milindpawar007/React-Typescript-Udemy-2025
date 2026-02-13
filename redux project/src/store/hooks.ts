import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

type Dispatch = () => AppDispatch;

export const userCartDispatch: Dispatch = useDispatch;
export const userCartSelector: TypedUseSelectorHook<RootState> = useSelector;
