import axios, { AxiosRequestConfig } from 'axios';
import { handleNetworkError } from '../utils/errorHandling';
import Cookies from 'js-cookie';
import { CoreRequest, RequestHeaders, ResponseReturn } from '../types/api';

export type Endpoint<T> = {
  data: CoreRequest;
  fetch: () => () => Promise<ResponseReturn<T>>;
};

export const version = 'v2';
const baseURL = '';

export const defaultHeaders: RequestHeaders = {
  Accept: 'application/ld+json',
  'Content-Type': 'application/json',
};

export const request = async <ResponseData>(
  requestData: CoreRequest,
  jwtTokenOverride?: string,
): Promise<ResponseReturn<ResponseData>> => {
  const { url, method, data, params, headers: customHeaders, responseType } = requestData;
  const token = jwtTokenOverride || Cookies.get('token');
  const headers: RequestHeaders = {
    ...(customHeaders || defaultHeaders),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const options: AxiosRequestConfig = {
    url,
    baseURL,
    method,
    data,
    params,
    headers,
    responseType,
  };

  return axios(options)
    .then((response) => ({ response, error: null }))
    .catch(async (error) => {
      handleNetworkError(error);

      return { response: null, error };
    });
};
