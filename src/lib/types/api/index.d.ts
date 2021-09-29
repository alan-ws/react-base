import { AxiosError, AxiosResponse, Method, ResponseType } from 'axios';

type RequestResponse<T> = { response: AxiosResponse<T> | null };
type RequestError = { error: AxiosError | null };
type CoreRequest = {
  name: string;
  url: string;
  method: Method;
  headers?: any;
  params?: any;
  data?: any;
  responseType?: ResponseType;
};
type ResponseReturn<Data> = RequestResponse<Data> & RequestError;
type ContentType = 'application/json';
type RequestHeaders = {
  Accept: string;
  'Content-Type': ContentType;
  Authorization?: string;
};
