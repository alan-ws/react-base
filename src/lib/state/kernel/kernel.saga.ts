import { kernelSlice } from './kernel.slice';
import { put, take, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

function* initiate(): SagaIterator {
  yield put(kernelSlice.actions.setLoadingState());
  yield take(kernelSlice.actions.setLoadingState.type);
}

export function* kernelSaga(): SagaIterator {
  yield takeLatest(kernelSlice.actions.initiate.type, initiate);
}
