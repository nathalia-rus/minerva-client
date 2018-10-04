import { RSAA } from 'redux-api-middleware';
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './actionTypes'


export const registerUser = (payload) => {
  return {
    [RSAA]: {
      endpoint: 'http://localhost:3001/signup',
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type':'application/json'},
      types: [  REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE ]
    }
  };
}


export const logInStandard = (email, password) => ({
    [RSAA]: {
        endpoint: 'http://localhost:3001/login',
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: { 'Content-Type': 'application/json' },
        types: [ LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE ]
    }
});
