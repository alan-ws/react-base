import { version, Endpoint, request } from '../api';
import { ExampleRequest, ExampleResponse } from './example.types';

export const requests = {
  init: (queryObject: ExampleRequest): Endpoint<ExampleResponse> => ({
    data: {
      name: 'api.example',
      url: `api/${version}/example`,
      method: 'GET',
      params: queryObject,
    },
    fetch() {
      return () => request<ExampleResponse>(this.data);
    },
  }),
};
