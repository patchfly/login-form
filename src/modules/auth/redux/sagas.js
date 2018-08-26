import { take, put, call, all } from 'redux-saga/effects';
import { login, LOGOUT, setToken } from './actions';
import { SubmissionError } from 'redux-form';
import Api from 'base/utils';
import authService from '../authService';

export function* loginFlow() {
  while (true) {
    const { payload: { email, password, remember }} = yield take(login.REQUEST);

    try {
      const response = yield call(authService.login, email, password);
      const token = response.token;
      yield put(login.success());
      if (remember) {
        yield call(Api.setCookie, 'token', token, {
          path: '/',
          expires: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
        });
      }
      yield put(setToken({token: token}));
    } catch(errorMessage) {
      const error = new SubmissionError({_error: errorMessage});
      yield put(login.failure(error));
    }
  }
}

export function* logoutFlow() {
  while (true) {
    yield take([LOGOUT, login.FAILURE]);
    yield call(Api.delCookie, 'token');
  }
}

export function* authSaga() {
  yield all([
    loginFlow(),
    logoutFlow()
  ]);
}
