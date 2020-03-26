import * as React from 'react';
import { useSelector } from 'react-redux';

import UiMenu from 'ui/atomic/atoms/ui_menu/UiMenu';
import { selectUiIsPause } from 'store/ui/selectors';
import { useInitialDataIsLoaded } from 'ui/global_hooks/useInitialDataIsLoaded';
import { GAME_LOADING_NAMES } from 'store/loading/types';

type Props = {};

const PausePage: React.FC<Props> = React.memo(
  (props) => {
    useInitialDataIsLoaded(GAME_LOADING_NAMES.PAUSE);
    const isShowingMenu = useSelector(selectUiIsPause);

    return (
      <UiMenu allPointerEvents={isShowingMenu ? 'all' : 'none'}>
        <div>PausePage</div>
      </UiMenu>
    );
  },
);

export default PausePage;
