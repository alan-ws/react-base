import { HttpEndpoint, httpRequest } from '../api';
import { IconRequest, IconResponse } from './icon.types';

export const requests = {
  getIcon: (queryObject?: IconRequest): HttpEndpoint<IconResponse> => ({
    data: {
      name: 'icon',
      url: `/icons/${queryObject.name}`,
      method: 'GET',
    },
    fetch() {
      return () => httpRequest<IconResponse>(this.data);
    },
  }),
};
