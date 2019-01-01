import * as R from 'ramda';
import { PRODUCTS } from 'actions/ActionTypes';

const initialState = {
  products: {},
  isLoading: false,
  error: null,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS.FETCH.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: initialState.error,
      };
    case PRODUCTS.FETCH.SUCCESS:
      return {
        ...state,
        products: R.indexBy(R.prop('id'), action.productsList),
        isLoading: false,
        error: initialState.error,
      };
    case PRODUCTS.FETCH.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case PRODUCTS.ERROR.CLEAR:
      return {
        ...state,
        error: initialState.error,
      };
    default:
      return state;
  }
}
