import { takeEvery, put, call } from 'redux-saga/effects';
import NavigationService from '~/navigation/NavigationService';
import { ToastService } from '~/components';
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
    yield put({ type: AUTH.LOGIN.SUCCESS });
    NavigationService.navigate('App');
  } catch (e) {
    yield put({ type: AUTH.LOGIN.FAILURE, error: e.message });
    ToastService.showToast(e.message);
  }
}

export const authSagas = [
  takeEvery(AUTH.LOGIN.REQUEST, login),
];
