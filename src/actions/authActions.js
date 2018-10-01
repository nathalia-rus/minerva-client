import { RSAA } from 'redux-api-middleware';
import {
  LOG_IN_STANDARD,
  LOG_OUT_STANDARD,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from './actionTypes'


export const logInStandard = () => ({
  type: LOG_IN_STANDARD,
})

export const logOutStandard = () => ({
  type: LOG_OUT_STANDARD,
})

export const registerUser = (payload) => {
  return {
    [RSAA]: {
      endpoint: '/api/auth-user',
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type':'application/json'},
      types: [  REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE ]
    }
  };
}
