// TODO: implement error logging
/*eslint no-console: ["error", { allow: ["warn"] }] */
import { takeEvery, put, call } from 'redux-saga/effects';
import NavigationService from '~/navigation/NavigationService';
import { SecureStore } from 'expo';
import { AUTH } from 'actions/ActionTypes';
import { POST } from 'utils/api';

function* login({ email, password }) {
  try {
    const response = yield call(POST, '/auth/local', {
      identifier: email,
      password,
    });
    SecureStore.setItemAsync('userToken', response.jwt);
    // yield put({ type: AUTH.LOGIN.SUCCESS });
    NavigationService.navigate('App');
  } catch (e) {
    console.warn(e.message);
    yield put({ type: AUTH.LOGIN.FAILURE, error: e.message });
  }
}

export const authSagas = [
  takeEvery(AUTH.LOGIN.REQUEST, login),
];
