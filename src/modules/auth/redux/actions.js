import { createAction } from 'redux-actions';
import { createFormAction } from 'redux-form-saga';

// Log in
export const LOGIN = 'LOGIN';
export const login = createFormAction(LOGIN);

// Log out
export const LOGOUT = 'LOGOUT';
export const logout = createAction(LOGOUT);

// Set token
export const SET_TOKEN = 'SET_TOKEN';
export const setToken = createAction(SET_TOKEN);
