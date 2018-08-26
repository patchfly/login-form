import formActionSaga from 'redux-form-saga';
import { call, all, put } from 'redux-saga/effects';
import { authSaga } from 'modules/auth/redux/sagas';
import { setToken } from 'modules/auth/redux/actions';
import Api from 'base/utils';
import { cookieNames } from 'base/consts';

function* initialSaga() {
  const token = yield call(Api.getCookie, cookieNames.token);
  if (token) {
    yield put(setToken({token: token}));
  }
}

export default function* rootSaga() {
  yield all([
    authSaga(),
    formActionSaga(),
    initialSaga()
  ]);
}
