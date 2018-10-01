import * as auth from '../actions/actionTypes';

const initialState = {
    loggedIn: false,
    access: undefined,
    refresh: undefined,
    errors: {},
};

export default (state=initialState,action) => {
  switch(action.type) {
    case auth.LOG_IN_STANDARD:
      return {
        ...state,
        loggedIn: true,
      }
    case auth.LOG_OUT_STANDARD:
      return {
        ...state,
        loggedIn: false,
      }
    default:
      return state;
  }
}


export function isAuthenticated(state) {
  return state.loggedIn;
}
