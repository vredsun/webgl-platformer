import { createPath } from 'store/redux-utils';
import { LoadingState, GAME_LOADING_NAMES } from 'store/loading/types';

const LOADING = createPath('LOADING');

export const LOADING_SET_DATA = LOADING`SET_DATA`;

export const loadingInitialState: LoadingState = {
  [GAME_LOADING_NAMES.START_PAGE]: true,
  [GAME_LOADING_NAMES.GAME_UI]: true,
  [GAME_LOADING_NAMES.PAUSE]: true,
  [GAME_LOADING_NAMES.CONFIG]: true,
  [GAME_LOADING_NAMES.NOTIFICATION]: true,
};

const loadingReducer = (state = loadingInitialState, action: { type: string; payload: Partial<LoadingState> }) => {
  switch (action.type) {
    case LOADING_SET_DATA: {
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

export default loadingReducer;
