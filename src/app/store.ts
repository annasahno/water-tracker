import { configureStore } from '@reduxjs/toolkit';
import waterReducer from '../store/waterSlice';

export const store = configureStore({
  reducer: {
    water: waterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;