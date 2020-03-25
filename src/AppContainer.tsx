import * as React from 'react';

import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import store from 'store';
import UiContainer from 'ui/UiContainer';
import WebglContainer from 'webgl/WebglContainer';
import AllPointerEvents from 'ui/atomic/atoms/all_pointer_events/AllPointerEvents';

const App: React.FC<{}> = React.memo(
  () => {
    return (
      <React.Fragment>
        <AllPointerEvents isFull pointerEvents="all">
          <UiContainer />
          <WebglContainer />
        </AllPointerEvents>
      </React.Fragment>
    );
  },
);

export default hot(() => (
  <Provider store={store}>
    <App />
  </Provider>
));
