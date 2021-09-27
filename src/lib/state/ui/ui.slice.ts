import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UiStore {
  consoleLogValue?: string;
}

export const uiSliceInitialState: UiStore = {};

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiSliceInitialState,
  reducers: {
    initiateConsoleLog(): void {},
    setConsoleLogValue(state, action: PayloadAction<string>): void {
      state.consoleLogValue = action.payload;
    },
  },
});
