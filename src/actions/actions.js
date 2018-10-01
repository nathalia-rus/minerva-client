import {
  ON_DETECTED,
  ON_SEARCH,
  LOG_IN_GOOGLE,
  ADD_BOOK
} from './actionTypes'

export const onDetectedReducer = (result) => ({
  type: ON_DETECTED,
  result
});

export const onSearch = (list) => ({
  type: ON_SEARCH,
  list
})

export const logInGoogle = (user) => ({
  type: LOG_IN_GOOGLE,
  user
})

export const addLibrary = (book) => ({
  type: ADD_BOOK,
  book
})
