import { call, put } from 'redux-saga/effects';
import { HttpEndpoint } from '../../api/api';
import { requestSlice } from './request.slice';
import { AxiosError } from 'axios';
import { SagaIterator } from 'redux-saga';
import { ResponseReturn } from '../../types/api';

export function* request<T>(endpoint: HttpEndpoint<T>): SagaIterator {
  yield put(requestSlice.actions.requestStarted({ name: endpoint.data.name }));

  const data: ResponseReturn<T> = yield call(endpoint.fetch());
  const errorData: AxiosError<ErrorData> | undefined = data.error as AxiosError<ErrorData>;

  if (errorData) yield call(errorHandler, errorData);

  yield put(
    requestSlice.actions.requestEnded({ name: endpoint.data.name, crashedWithError: !!errorData }),
  );

  return data;
}

type ErrorData = {
  violations?: { message?: string }[];
};

const errors = (
  errorData?: ErrorData,
): { [type: string]: { message?: string; title?: string } } => ({
  default: {
    message: 'There was a problem on our end.',
    title: 'Something went wrong.',
  },
  ConstraintViolationList: {
    message: errorData?.violations?.[0]?.message,
  },
});

export function* errorHandler(errorResponse: AxiosError<ErrorData>): SagaIterator {
  const errorData: ErrorData | undefined = errorResponse.response?.data;

  if (errorResponse?.response?.status === 404) return;

  const errorIsEmpty: boolean = !!errorResponse && !errorResponse.response;
  const showDefaultByStatusCode: boolean =
    !!errorResponse?.response?.status && [500].includes(errorResponse?.response?.status);
  const typeToUse = errorIsEmpty || showDefaultByStatusCode ? 'default' : undefined;

  if (!typeToUse) return;

  const { message, title } = errors(errorData)[typeToUse];

  if (message && title) {
    // send notification
  }
}
