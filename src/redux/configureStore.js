import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
  // Hot reload reducers
  if (module.hot) {
    module.hot.accept('./reducers', () =>
      // eslint-disable-next-line global-require
      store.replaceReducer(require('./reducers')),
    );
  }

  return store;
}
