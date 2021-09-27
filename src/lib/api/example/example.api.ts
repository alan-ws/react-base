import { version, Endpoint, request } from '../api';
import { ExampleRequest, ExampleResponse } from './example.types';

export const requests = {
  init: (queryObject: ExampleRequest): Endpoint<ExampleResponse> => ({
    data: {
      name: 'authApi.login',
      url: `api/${version}/shop/authentication-token`,
      method: 'GET',
      params: queryObject,
    },
    fetch() {
      return () => request<ExampleResponse>(this.data);
    },
  }),
};
