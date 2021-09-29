import { getStore, RootState } from '../state/store';

export function makeTestStore(initialStore: Partial<RootState> = {}) {
  const store = getStore(initialStore);
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);
  return store;
}
