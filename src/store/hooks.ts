import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

export const Dispatch = useDispatch.withTypes<AppDispatch>()
export const Selector = useSelector.withTypes<RootState>()