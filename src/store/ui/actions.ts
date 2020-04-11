import { UiState, GAME_STATUS } from 'store/ui/types';
import { UI_SET_DATA } from 'store/ui/action_types';

const uiChangeStatus = (game_status: UiState['game_status']) => {
  return {
    type: UI_SET_DATA,
    payload: {
      game_status,
    },
  };
};

const uiChangeConfigVisible = (is_open_config: boolean) => {
  return {
    type: UI_SET_DATA,
    payload: {
      is_open_config,
    },
  };
};

export const uiOpenConfig = () => uiChangeConfigVisible(true);
export const uiCloseConfig = () => uiChangeConfigVisible(false);
export const uiGoToInGame = () => uiChangeStatus(GAME_STATUS.IN_GAME);
export const uiGoToPause = () => uiChangeStatus(GAME_STATUS.PAUSE);
export const uiGoToStartPage= () => uiChangeStatus(GAME_STATUS.START_PAGE);
