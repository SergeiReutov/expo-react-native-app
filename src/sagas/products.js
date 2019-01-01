import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import { PRODUCTS } from 'actions/ActionTypes';
// import { GET } from 'utils/api';
import { getProducts } from './__mocks__';

function* fetchProducts({ startsFrom, amount }) {
  try {
    // TODO: call actual API
    // const response = yield call(GET, `/products`);
    yield call(delay, 2000);
    yield put({ type: PRODUCTS.FETCH.SUCCESS, productsList: getProducts(startsFrom, amount) });
  } catch (e) {
    yield put({ type: PRODUCTS.FETCH.FAILURE, error: {
      message: e.message,
      action: PRODUCTS.FETCH.REQUEST,
      params: {
        startsFrom,
        amount,
      },
    }});
  }
}

export const productsSagas = [
  takeEvery(PRODUCTS.FETCH.REQUEST, fetchProducts),
];
