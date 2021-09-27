import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootState from './rootState';
import { handleError } from '../utils/errorHandling';
import { kernelSlice } from './kernel/kernel.slice';
import { uiSlice } from './ui/ui.slice';

const sagaMiddleware = createSagaMiddleware({
  onError: (error) => handleError(error),
});

export const getStore = (preloadedState = {}) =>
  configureStore({
    reducer: {
      kernel: kernelSlice.reducer,
      ui: uiSlice.reducer,
    },
    preloadedState,
    middleware: [sagaMiddleware],
  });

export const store = getStore();

sagaMiddleware.run(rootState);

export type RootState = ReturnType<typeof store.getState>;
