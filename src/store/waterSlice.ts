import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { WaterState } from '../types/types';

const initialState: WaterState = {
  amount: 0,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {
    addWater: (state, action: PayloadAction<number>) => {
      state.amount += action.payload;
    },
    removeWater: (state, action: PayloadAction<number>) => {
      state.amount -= action.payload;
    },
  },
});

export const { addWater, removeWater } = waterSlice.actions;
export default waterSlice.reducer;