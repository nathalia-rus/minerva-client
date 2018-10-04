import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers';
import { apiMiddleware } from 'redux-api-middleware';
// import { loadState, saveState } from './localStorage'

// const persistedState = loadState();
const store = createStore(
  reducers,
  // persistedState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(apiMiddleware)
);

store.subscribe(() => {
  // saveState(store.getState());
  // console.log(store.getState());
  // saveState({
  //   auth: {
  //     access: store.getState().auth.access
  //   }
  // });
});


ReactDOM.render(
  <Provider store={store}>
      <Root/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
