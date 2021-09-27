import { all } from 'redux-saga/effects';
import { uiSaga } from './ui/ui.saga';
import { kernelSaga } from './kernel/kernel.saga';

export default function* rootSaga(): Generator {
  yield all([kernelSaga(), uiSaga()]);
}
