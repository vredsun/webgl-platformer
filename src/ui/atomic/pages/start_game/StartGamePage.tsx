import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import UiMenu from 'ui/atomic/atoms/ui_menu/UiMenu';
import { selectUiIsStartPage } from 'store/ui/selectors';
import { useInitialDataIsLoaded } from 'ui/global_hooks/useInitialDataIsLoaded';
import { GAME_LOADING_NAMES } from 'store/loading/types';
import { Button } from 'ui/atomic/atoms/button/Button';
import { uiGoToInGame, uiOpenConfig } from 'store/ui/actions';
import { IoIosMenu, IoIosPlay } from 'react-icons/io';

type Props = {};

const LoadingContainer = styled.div<{ isVisible: boolean }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  opacity: ${({ isVisible }) => isVisible ? 1 : 0};

  transition: opacity 500ms;
`;

const TopButtonsContainer = styled.div`
  display: flex;
  width: 100%;
`;

const StartGamePage: React.FC<Props> = React.memo(
  (props) => {
    useInitialDataIsLoaded(GAME_LOADING_NAMES.START_PAGE);
    const isShowingMenu = useSelector(selectUiIsStartPage);
    const dispath = useDispatch();

    const handleClickGoToConfig = React.useCallback(
      () => {
        dispath(uiOpenConfig());
      },
      [],
    );

    const handleClickGoToInGame = React.useCallback(
      () => {
        dispath(uiGoToInGame());
      },
      [],
    );

    return (
      <UiMenu allPointerEvents={isShowingMenu ? 'all' : 'none'}>
        <LoadingContainer isVisible={isShowingMenu}>
          <TopButtonsContainer>
            <Button onClick={handleClickGoToConfig}>
              <IoIosMenu />
            </Button>
          </TopButtonsContainer>
          <div>
            <Button onClick={handleClickGoToInGame}>
              <IoIosPlay />
            </Button>
          </div>
        </LoadingContainer>
      </UiMenu>
    );
  },
);

export default StartGamePage;
