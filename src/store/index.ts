import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import root_reducer from 'store/root_reducer';

const configureStore = (initialState?) => {
  const middlewares = [
  ];

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

