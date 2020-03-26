import { UiState, GAME_STATUS } from 'store/ui/types';
import { createPath } from 'store/redux-utils';

const UI = createPath('UI');

export const UI_SET_DATA = UI`SET_DATA`;

export const uiInitialState: UiState = {
  game_status: GAME_STATUS.START_PAGE,
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
