import * as R from 'ramda';
import axios from 'axios';
import { REQUEST } from 'constants/api';

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleResponse = response => response.data;

const handleError = error => {
  const defaultErrorMessage = 'Something went wrong';
  const errorMessage = R.pathOr(defaultErrorMessage, ['response', 'data', 'error', 'message'], error);
  throw new Error(errorMessage);
};

const createRequest = (type, url, params) => {
  let requestPromise;
  switch (type) {
    case REQUEST.GET: {
      requestPromise = client.get(url);
      break;
    }
    case REQUEST.POST: {
      requestPromise = client.post(url, params);
      break;
    }
    case REQUEST.PUT: {
      requestPromise = client.put(url, params);
      break;
    }
    case REQUEST.DELETE: {
      requestPromise = client.delete(url);
      break;
    }
    default: return null;
  }
  return requestPromise
    .then(response => handleResponse(response))
    .catch(error => handleError(error));
};

export const GET = url => createRequest(REQUEST.GET, url);

export const POST = (url, params) => createRequest(REQUEST.POST, url, params);

export const PUT = (url, params) => createRequest(REQUEST.PUT, url, params);

export const DELETE = url => createRequest(REQUEST.DELETE, url);
