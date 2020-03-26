import * as React from 'react';
import { useSelector } from 'react-redux';

import UiMenu from 'ui/atomic/atoms/ui_menu/UiMenu';
import { selectUiIsStartPage } from 'store/ui/selectors';
import { useInitialDataIsLoaded } from 'ui/global_hooks/useInitialDataIsLoaded';
import { GAME_LOADING_NAMES } from 'store/loading/types';
import { selectIsInitialLoading } from 'store/loading/selectors';

type Props = {};

const StartGamePage: React.FC<Props> = React.memo(
  (props) => {
    useInitialDataIsLoaded(GAME_LOADING_NAMES.START_PAGE);
    const isShowingMenu = useSelector(selectUiIsStartPage);
    const isInitialLoading = useSelector(selectIsInitialLoading);

    React.useEffect(
      () => {
        console.info({ isInitialLoading }); // @todo установку текущей страницы (эту)
      },
      [isInitialLoading],
    );

    return (
      <UiMenu allPointerEvents={isShowingMenu ? 'all' : 'none'}>
        <div>StartGamePage</div>
      </UiMenu>
    );
  },
);

export default StartGamePage;
