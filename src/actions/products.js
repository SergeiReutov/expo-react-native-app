import { PRODUCTS } from './ActionTypes';

export const fetchProducts = (startsFrom, amount) => ({
  type: PRODUCTS.FETCH.REQUEST,
  startsFrom,
  amount,
});

export const clearError = () => ({
  type: PRODUCTS.ERROR.CLEAR,
});
