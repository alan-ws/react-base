import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface KernelStore {
  loading: boolean;
}

const initialState: KernelStore = {
  loading: true,
};

export const kernelSlice = createSlice({
  name: 'kernel',
  initialState,
  reducers: {
    initiate() {},
    setLoadingState(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});
