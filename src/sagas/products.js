import { takeEvery, put/*, call */ } from 'redux-saga/effects';
import { PRODUCTS } from 'actions/ActionTypes';
// import { GET } from 'utils/api';
import { PRODUCTS_LIST } from './__mocks__';

function* fetchProducts() {
  try {
    // TODO: call actual API
    // const response = yield call(GET, `/products`);
    yield put({ type: PRODUCTS.FETCH.SUCCESS, productsList: PRODUCTS_LIST });
  } catch (e) {
    yield put({ type: PRODUCTS.FETCH.FAILURE, error: e.message });
  }
}

export const productsSagas = [
  takeEvery(PRODUCTS.FETCH.REQUEST, fetchProducts),
];
