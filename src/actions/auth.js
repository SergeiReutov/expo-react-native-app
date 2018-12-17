import { AUTH } from './ActionTypes';

export const login = ({ email, password }) => ({
  type: AUTH.LOGIN.REQUEST,
  email,
  password,
});
