import { LOGOUT, SET_TOKEN } from './actions';

const initialState = {
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        token: null,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload.token
      };
  }
  return state;
};
