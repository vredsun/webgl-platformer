import * as React from 'react';
import UiMenu from 'ui/atomic/atoms/ui_menu/UiMenu';

import LoadingPage from 'ui/atomic/pages/loading/LoadingPage';

type Props = {};

const StartGamePage = React.lazy(() => (
  import(/* webpackChunkName: "@StartGamePage" */ 'ui/atomic/pages/start_game/StartGamePage')
));
const GameUiPage = React.lazy(() => (
  import(/* webpackChunkName: "@GameUiPage" */ 'ui/atomic/pages/game_ui/GameUiPage')
));
const PausePage = React.lazy(() => (
  import(/* webpackChunkName: "@PausePage" */ 'ui/atomic/pages/pause/PausePage')
));
const ConfigPage = React.lazy(() => (
  import(/* webpackChunkName: "@ConfigPage" */ 'ui/atomic/pages/config/ConfigPage')
));
const NotificationPage = React.lazy(() => (
  import(/* webpackChunkName: "@NotificationPage" */ 'ui/atomic/pages/notification/NotificationPage')
));

const UiContainer: React.FC<Props> = React.memo(
  (props) => {
    return (
      <UiMenu allPointerEvents="none">
        <React.Suspense fallback={null}>
          <StartGamePage />
          <GameUiPage />
          <PausePage />
          <ConfigPage />
          <NotificationPage />
        </React.Suspense>
        <LoadingPage />
      </UiMenu>
    );
  },
);

export default UiContainer;
