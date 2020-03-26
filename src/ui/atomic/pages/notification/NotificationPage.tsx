import * as React from 'react';
import UiMenu from 'ui/atomic/atoms/ui_menu/UiMenu';
import { useInitialDataIsLoaded } from 'ui/global_hooks/useInitialDataIsLoaded';
import { GAME_LOADING_NAMES } from 'store/loading/types';

type Props = {};

const NotificationPage: React.FC<Props> = React.memo(
  (props) => {
    useInitialDataIsLoaded(GAME_LOADING_NAMES.NOTIFICATION);

    return (
      <UiMenu allPointerEvents="none">
        <div>NotificationPage</div>
      </UiMenu>
    );
  },
);

export default NotificationPage;
