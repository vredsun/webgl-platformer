import { UiState, GAME_STATUS } from 'store/ui/types';
import { UI_SET_DATA } from 'store/ui/action_types';

export const uiInitialState: UiState = {
  game_status: GAME_STATUS.START_PAGE,
  is_open_config: false,
};

const uiReducer = (state = uiInitialState, action: { type: string; payload: Partial<UiState> }) => {
  switch (action.type) {
    case UI_SET_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default uiReducer;
