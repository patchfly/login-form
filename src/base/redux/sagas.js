import formActionSaga from 'redux-form-saga';
import { all } from 'redux-saga/effects';
import { authSaga } from 'modules/auth/redux/sagas';

export default function* rootSaga() {
  yield all([
    authSaga(),
    formActionSaga()
  ]);
}
