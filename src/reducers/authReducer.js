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
    default:
      return state;
  }
}


export function isAuthenticated(state) {
  return state.loggedIn;
}
