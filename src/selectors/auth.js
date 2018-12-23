import * as R from 'ramda';

export const getStateAuth = state => R.prop('auth', state);

export const getIsLoading = state => R.prop('isLoading', getStateAuth(state));

export const getError = state => R.prop('error', getStateAuth(state));
