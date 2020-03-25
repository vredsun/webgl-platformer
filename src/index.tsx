import * as React from 'react';
import * as ReactDom from 'react-dom';

import AppContainer from './AppContainer';
import GlobalStyle from 'ui/atomic/GlobalStyle';

ReactDom.render(
  <React.Fragment>
    <AppContainer />
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById('container'),
);
