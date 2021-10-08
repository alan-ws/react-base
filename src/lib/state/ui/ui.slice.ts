import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IStore {
  iconUri?: string;
}

export const initialStore: IStore = {};

export const uiSlice = createSlice({
  name: 'ui',
  initialState: initialStore,
  reducers: {
    getIcon(_, action: PayloadAction<{ name?: string }>) {},
    setIconUri(state, action: PayloadAction<string>) {
      state.iconUri = action.payload;
    },
  },
});
