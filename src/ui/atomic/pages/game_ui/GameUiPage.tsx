import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { IoIosMenu } from 'react-icons/io';

import UiMenu from 'ui/atomic/atoms/ui_menu/UiMenu';
import { selectUiIsInGame } from 'store/ui/selectors';
import { GAME_LOADING_NAMES } from 'store/loading/types';
import { useInitialDataIsLoaded } from 'ui/global_hooks/useInitialDataIsLoaded';
import { Button } from 'ui/atomic/atoms/button/Button';
import { uiOpenConfig } from 'store/ui/actions';

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

const GameUiPage: React.FC<Props> = React.memo(
  (props) => {
    useInitialDataIsLoaded(GAME_LOADING_NAMES.GAME_UI);
    const isShowingMenu = useSelector(selectUiIsInGame);
    const dispath = useDispatch();

    const handleClickGoToConfig = React.useCallback(
      () => {
        dispath(uiOpenConfig());
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
            in game
          </div>
          <div>
          </div>
        </LoadingContainer>
      </UiMenu>
    );
  },
);

export default GameUiPage;
