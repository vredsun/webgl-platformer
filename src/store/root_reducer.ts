import { combineReducers } from 'redux';

import uiReducer from 'store/ui/reducer';
import gameReducer from 'store/game/reducer';

export default combineReducers({
  ui: uiReducer,
  game: gameReducer,
});
