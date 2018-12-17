import axios from 'axios';

const API_BASE_URL = 'https://node.alexdolgov.ru';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const GET = url => client.get(`${API_BASE_URL}${url}`);

// TODO: refactor response handling to one generic function
export const POST = (url, params) => client.post(`${API_BASE_URL}${url}`, params)
  .then(response => response.data)
  .catch(error => {
    throw new Error(error.response.data.message);
  });

export const PUT = (url, params) => client.put(`${API_BASE_URL}${url}`, params);

export const DELETE = url => client.post(`${API_BASE_URL}${url}`);
