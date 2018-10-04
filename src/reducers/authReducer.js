import jwtDecode from 'jwt-decode';
import * as auth from '../actions/actionTypes';

const initialState = {
    access: undefined,
    refresh: undefined,
    errors: {},
};

export default (state=initialState,action) => {
  switch(action.type) {
    case auth.REGISTER_USER_SUCCESS:
      return {
        ...state,
        access: action.payload.auth_token,
      }
    case auth.LOGIN_REQUEST:
      console.log('LOGIN_REQUEST');
      return state;
    case auth.LOGIN_SUCCESS:
      return {
          access: {
              token: action.payload.access,
              ...jwtDecode(action.payload.access)
          },
          refresh: {
              token: action.payload.refresh,
              ...jwtDecode(action.payload.refresh)
          },
          errors: {}
      };
    default:
      return state;
  }
}


export function isAuthenticated(state) {
  return state.loggedIn;
}
