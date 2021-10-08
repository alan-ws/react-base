import { uiSlice } from './ui.slice';
import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { ResponseReturn } from '../../types/api';
import { request } from '../request/request.saga';
import { requests } from '../../api/icon/icon.api';

function* getIcon(): SagaIterator {
  const { response }: ResponseReturn<string> = yield call(
    request,
    requests.getIcon({ name: 'externalLink.svg' }),
  );

  if (!response) return;

  const blob = new Blob([response.data], { type: 'image/svg+xml' });
  yield put(uiSlice.actions.setIconUri(URL.createObjectURL(blob)));
}

export function* uiSaga(): SagaIterator {
  yield takeLatest(uiSlice.actions.getIcon.type, getIcon);
}
