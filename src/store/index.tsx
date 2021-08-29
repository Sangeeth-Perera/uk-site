import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import User from './UserSlice';

export const store = configureStore({
  reducer: User,
});
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;