import { RequestError } from '../types/api';
// change console.log with whatever error handling functions

export const handleError = (error: unknown): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log(error);
  }
};

export const handleNetworkError = (error: RequestError): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log(error);
  }
};
