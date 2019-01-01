import axios from 'axios';
import * as R from 'ramda';

const API_BASE_URL = 'https://node.alexdolgov.ru';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const createAPIRequest = (method, url, params) =>
  client.request({
    url,
    method,
    baseURL: API_BASE_URL,
    data: params,
  })
    .then(response => response.data)
    .catch(error => {
      const serverGeneratedError = R.path(['response', 'data', 'message'], error);
      if (serverGeneratedError) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error);
    });

export const GET = url => createAPIRequest('get', url);

export const POST = (url, params) => createAPIRequest('post', url, params);

export const PUT = (url, params) => createAPIRequest('put', url, params);

export const DELETE = url => createAPIRequest('delete', url);
