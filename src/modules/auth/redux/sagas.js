import { take, put, call, all } from 'redux-saga/effects';
import { login, LOGOUT, setToken } from './actions';
import { SubmissionError } from 'redux-form';
import Api from 'base/utils';

export function* loginFlow() {
  while (true) {
    const { payload: { email, password, remember }} = yield take(login.REQUEST);
    if (email !== 'test@test.pl' || password !== 'Password1') {
      const error = new SubmissionError({_error: 'Invalid email or password'});
      yield put(login.failure(error));
    } else {
      yield put(login.success());
      const token = 'token';
      if (remember) {
        yield call(Api.setCookie, 'token', token, {
          path: '/',
          expires: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
        });
      }
      yield put(setToken({token: token}));
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
