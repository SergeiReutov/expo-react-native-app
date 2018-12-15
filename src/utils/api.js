import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const GET = url => client.get(`${API_BASE_URL}${url}`)
  .then(response => response.toJSON());

export const POST = (url, params) => client.post(`${API_BASE_URL}${url}`, params)
  .then(response => response.toJSON());

export const PUT = (url, params) => client.put(`${API_BASE_URL}${url}`, params)
  .then(response => response.toJSON());

export const DELETE = url => client.post(`${API_BASE_URL}${url}`)
  .then(response => response.toJSON());
