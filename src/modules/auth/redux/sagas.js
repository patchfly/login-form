import { take, put, all } from 'redux-saga/effects';
import { login } from './actions';
import { SubmissionError } from 'redux-form';

export function* loginFlow() {
  while (true) {
    const { payload: { email, password }} = yield take(login.REQUEST);
    if (email !== 'test@test.pl' || password !== 'Password1') {
      const error = new SubmissionError({_error: 'Invalid email or password'});
      yield put(login.failure(error));
    } else {
      yield put(login.success());
    }
  }
}

export function* authSaga() {
  yield all([
    loginFlow()
  ]);
}
