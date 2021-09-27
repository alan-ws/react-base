import { uiSlice } from './ui.slice';
import { put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

function* initiateConsoleLog(): SagaIterator {
  yield put(uiSlice.actions.setConsoleLogValue('you clicked it'));
}

export function* uiSaga(): SagaIterator {
  yield takeLatest(uiSlice.actions.initiateConsoleLog.type, initiateConsoleLog);
}
