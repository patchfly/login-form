import { call, take, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { SubmissionError } from 'redux-form';
import Api from 'base/utils';
import { cookieNames } from 'base/consts';
import { login, LOGOUT, setToken } from './actions';
import { loginFlow, logoutFlow } from './sagas';
import authService from '../authService';

const email = 'example@gmail.com';
const password = '123456';

const _sagaTest = (iterator, expectValue, nextArgs, method = 'next') => {
  const value = iterator[method](nextArgs).value;
  return () => expect(value).toEqual(expectValue);
};

describe('Login Flow', () => {
  const iterator = cloneableGenerator(loginFlow)();

  test('is invoked on login action', _sagaTest(iterator, take(login.REQUEST)));

  const happyIteratorRemember = iterator.clone();

  test(
    'makes request to authService with credentials',
    _sagaTest(
      iterator,
      call(authService.login, email, password),
      {
        payload: {
          email,
          password,
          remember: false
        }
      }
    )
  );

  test(
    'makes request to authService with credentials (+ remember)',
    _sagaTest(
      happyIteratorRemember,
      call(authService.login, email, password),
      {
        payload: {
          email,
          password,
          remember: true
        }
      }
    )
  );

  const unhappyIterator = iterator.clone();

  describe('Login success flow without cookies', () => {
    test(
      'sets success',
      _sagaTest(iterator, put(login.success()), {token: 'token'})
    );

    test(
      'sets token',
      _sagaTest(iterator, put(setToken({token: 'token'})))
    );
  });

  describe('Login success flow with cookies', () => {
    test(
      'sets success',
      _sagaTest(happyIteratorRemember, put(login.success()), {token: 'token'})
    );

    test(
      'saves token to cookie',
      _sagaTest(happyIteratorRemember, call(Api.setCookie, 'token', 'token', {
        path: '/',
        expires: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
      }))
    );

    test(
      'sets token',
      _sagaTest(happyIteratorRemember, put(setToken({token: 'token'})))
    );
  });

  describe('Login error flow', () => {
    const error = new SubmissionError({_error: 'Invalid email or password'});
    test(
      'handles error',
      _sagaTest(unhappyIterator, put(login.failure(error))),
      'Invalid email or password'
    );
  });
});

describe('Logout Flow', () => {
  const iterator = logoutFlow();

  test('is invoked on logout action and login in failure', _sagaTest(iterator, take([LOGOUT, login.FAILURE])));
  test('is deleting token from cookie', _sagaTest(iterator, call(Api.delCookie, cookieNames.token)));
});
