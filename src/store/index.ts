import { createStore, applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import root_reducer from 'store/root_reducer';
import type ReduxState from 'store/types';
import { createLogger } from 'redux-logger';

const loggerReduxMiddleware = createLogger({
  collapsed: true,
});

const configureStore = (initialState?: ReduxState) => {
  const middlewares: Array<Middleware<any, ReduxState, any>> = [
  ];

  if (__DEV__) {
    middlewares.push(loggerReduxMiddleware);
  }

  const store = createStore(
    root_reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        ...middlewares,
      ),
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('store/root_reducer', () => {
      const nextRootReducer = require('store/root_reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

const store = configureStore();

export default store;

