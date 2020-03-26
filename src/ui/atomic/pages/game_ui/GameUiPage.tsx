import * as React from 'react';
import { useSelector } from 'react-redux';

import UiMenu from 'ui/atomic/atoms/ui_menu/UiMenu';
import { selectUiIsInGame } from 'store/ui/selectors';
import { GAME_LOADING_NAMES } from 'store/loading/types';
import { useInitialDataIsLoaded } from 'ui/global_hooks/useInitialDataIsLoaded';

type Props = {};

const GameUiPage: React.FC<Props> = React.memo(
  (props) => {
    useInitialDataIsLoaded(GAME_LOADING_NAMES.GAME_UI);
    const isShowingMenu = useSelector(selectUiIsInGame);

    return (
      <UiMenu allPointerEvents={isShowingMenu ? 'all' : 'none'}>
        <div>GameUiPage</div>
      </UiMenu>
    );
  },
);

export default GameUiPage;
