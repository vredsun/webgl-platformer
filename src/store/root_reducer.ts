import { combineReducers } from 'redux';
import type ReduxState from 'store/types';

import uiReducer from 'store/ui/reducer';
import gameReducer from 'store/game/reducer';
import loadingReducer from 'store/loading/reducer';

export default combineReducers<ReduxState>({
  ui: uiReducer,
  game: gameReducer,
  loading: loadingReducer,
});
