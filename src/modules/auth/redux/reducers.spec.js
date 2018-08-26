import reducer from './reducers';
import { LOGOUT, SET_TOKEN } from './actions';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        token: null,
      }
    );
  });

  it('should handle SET_TOKEN', () => {
    expect(
      reducer(null, {
        type: SET_TOKEN,
        payload: {
          token: '123'
        }
      })
    ).toEqual(
      {
        token: '123',
      }
    );

    expect(
      reducer({
        token: 123
      }, {
        type: SET_TOKEN,
        payload: {
          token: '345'
        }
      })
    ).toEqual(
      {
        token: '345',
      }
    );
  });

  it('should handle LOGOUT', () => {
    expect(
      reducer(null, {
        type: LOGOUT,
      })
    ).toEqual(
      {
        token: null,
      }
    );

    expect(
      reducer({
        token: 555
      }, {
        type: LOGOUT
      })
    ).toEqual(
      {
        token: null,
      }
    );
  });
});
