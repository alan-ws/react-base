import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestName } from '../../types/api';

export interface RequestStore {
  requesting: Record<RequestName, boolean>;
  crashedWithError: { [name: string]: boolean };
}

const initialState: RequestStore = {
  requesting: {
    icon: false,
    auth: false,
  },
  crashedWithError: {},
};

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    requestStarted(state, action: PayloadAction<{ name: string }>) {
      state.requesting[action.payload.name] = true;
      delete state.crashedWithError[action.payload.name];
    },
    requestEnded(state, action: PayloadAction<{ name: string; crashedWithError: boolean }>) {
      state.requesting[action.payload.name] = false;
      state.crashedWithError[action.payload.name] = action.payload.crashedWithError;
    },
  },
});
