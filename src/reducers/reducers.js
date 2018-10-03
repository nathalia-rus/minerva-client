import { combineReducers } from 'redux';
import authReducer, * as fromAuth from './authReducer';
import signupPageReducer from './page/signupPageReducer';
import {
  ON_DETECTED,
  ON_SEARCH,
  LOG_IN_GOOGLE,
  ADD_BOOK
} from '../actions/actionTypes'

const defaultState = {
  results: {},
  list: []
};

const defaultUserState = {
  user: {}
}

const onDetectedReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ON_DETECTED:
      return {
        ...state,
        results: action.result
      }
    case ON_SEARCH:
      return {
        ...state,
        list: action.list
      }
    default:
      return state;
  }
}

const userReducer = (state = defaultUserState, action) => {
  switch(action.type) {
    case LOG_IN_GOOGLE:
      return {
        ...state,
        user: action.user
      }
    case ADD_BOOK:
      return {
        ...state,
        user: {
          ...state.user,
          books: [
            ...state.user.books,
            action.book
          ]
        }
      }
    default:
      return state;
  }
}

// Combining all reducers.
export default combineReducers({
  auth: authReducer,
  signupPage: signupPageReducer,
  onDetectedReducer,
  userReducer
});

export const isAuthenticated = state => {
  return fromAuth.isAuthenticated(state.auth);
}
