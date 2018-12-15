import * as R from 'ramda';

export const getStateProducts = state => R.prop('products', state);

export const getIsLoading = state => R.prop('isLoading', getStateProducts(state));

export const getError = state => R.prop('error', getStateProducts(state));

export const getProducts = state => R.prop('products', getStateProducts(state));

export const getProductsList = state => R.values(getProducts(state));

export const getProductById = (state, productId) => R.prop(productId, getProducts(state));
