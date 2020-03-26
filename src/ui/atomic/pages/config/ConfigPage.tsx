import * as React from 'react';
import { useSelector } from 'react-redux';

import UiMenu from 'ui/atomic/atoms/ui_menu/UiMenu';
import { selectUiIsConfig } from 'store/ui/selectors';
import { GAME_LOADING_NAMES } from 'store/loading/types';
import { useInitialDataIsLoaded } from 'ui/global_hooks/useInitialDataIsLoaded';

type Props = {};

const ConfigPage: React.FC<Props> = React.memo(
  (props) => {
    useInitialDataIsLoaded(GAME_LOADING_NAMES.CONFIG);
    const isShowingMenu = useSelector(selectUiIsConfig);

    return (
      <UiMenu allPointerEvents={isShowingMenu ? 'all' : 'none'}>
        <div>ConfigPage</div>
      </UiMenu>
    );
  },
);

export default ConfigPage;
