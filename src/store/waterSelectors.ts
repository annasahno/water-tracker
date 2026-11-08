import type { RootState } from '../app/store';

export const selectAmount = (state: RootState) => state.water.amount;