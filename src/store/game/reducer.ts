import type { GameState } from 'store/game/types';
import { createPath } from 'store/redux-utils';

const GAME = createPath('GAME');

export const GAME_SET_DATA = GAME`SET_DATA`;

export const gameInitialState: GameState = {

};

const gameReducer = (state = gameInitialState, action: { type: string; payload: Partial<GameState> }) => {
  switch (action.type) {
    case GAME_SET_DATA: {
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

export default gameReducer;
