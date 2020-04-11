import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosArrowBack, IoIosExit } from 'react-icons/io';

import UiMenu from 'ui/atomic/atoms/ui_menu/UiMenu';
import { selectUiIsConfig, selectUiIsInGame } from 'store/ui/selectors';
import { GAME_LOADING_NAMES } from 'store/loading/types';
import { useInitialDataIsLoaded } from 'ui/global_hooks/useInitialDataIsLoaded';
import styled from 'styled-components';
import { Button } from 'ui/atomic/atoms/button/Button';
import { uiCloseConfig, uiGoToStartPage } from 'store/ui/actions';

type Props = {};

const Container = styled.div<{ isVisible: boolean  }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;

  background-color: grey;

  opacity: ${({ isVisible }) => isVisible ? 1 : 0};

  transition: opacity 500ms;
`;

const LeftPart = styled.div`
  height: 100vh;
  flex: 0 0 auto;
  width: 300px;
  background-color: yellow;
`;

const RightPart = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  flex: 1 1 auto;
  background-color: red;
`;

const TopButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const OpacityContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;;
  width: 100%;
  height: 100vh;

  background: blue;

  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  transition: opacity 500ms;
`;

enum PageConfig {
  GRAPHIC = 'GRAPHIC',
  AUDIO = 'AUDIO',
  LANG = 'LANG',
}

const ConfigPage: React.FC<Props> = React.memo(
  (props) => {
    const [whatIWantConfig, setWhatIWantConfig] = React.useState<PageConfig | null>(null);
    useInitialDataIsLoaded(GAME_LOADING_NAMES.CONFIG);
    const isInGame = useSelector(selectUiIsInGame);

    const isShowingMenu = useSelector(selectUiIsConfig);
    const dispath = useDispatch();

    const handleClickGoOutToConfig = React.useCallback(
      () => {
        dispath(
          uiCloseConfig(),
        );
      },
      [],
    );

    const handleClickGoToStartPage = React.useCallback(
      () => {
        handleClickGoOutToConfig();
        dispath(
          uiGoToStartPage(),
        );
      },
      [handleClickGoOutToConfig],
    );

    const handleSelectGraphic = React.useCallback(
      () => {
        setWhatIWantConfig(PageConfig.GRAPHIC);
      },
      [],
    );
    const handleSelectAudio = React.useCallback(
      () => {
        setWhatIWantConfig(PageConfig.AUDIO);
      },
      [],
    );
    const handleSelectLang = React.useCallback(
      () => {
        setWhatIWantConfig(PageConfig.LANG);
      },
      [],
    );

    return (
      <UiMenu allPointerEvents={isShowingMenu ? 'all' : 'none'}>
        <Container isVisible={isShowingMenu}>
          <LeftPart>
            <TopButtonsContainer>
              <Button onClick={handleClickGoOutToConfig}>
                <IoIosArrowBack />
              </Button>
              <Button onClick={handleSelectGraphic}>
                Настройки графики
              </Button>
              <Button onClick={handleSelectAudio}>
                Настройки звука
              </Button>
              <Button onClick={handleSelectLang}>
                Настройки языка
              </Button>
              {
                isInGame && (
                  <Button onClick={handleClickGoToStartPage}>
                    <IoIosExit />Покинуть игру
                  </Button>
                )
              }

            </TopButtonsContainer>
          </LeftPart>
          <RightPart>
            <OpacityContainer isVisible={whatIWantConfig === PageConfig.GRAPHIC}>
              GRAPHIC
            </OpacityContainer>
            <OpacityContainer isVisible={whatIWantConfig === PageConfig.AUDIO}>
              AUDIO
            </OpacityContainer>
            <OpacityContainer isVisible={whatIWantConfig === PageConfig.LANG}>
              LANG
            </OpacityContainer>
          </RightPart>
        </Container>
      </UiMenu>
    );
  },
);

export default ConfigPage;
