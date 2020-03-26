import type ReduxState from 'store/types';
import { GAME_STATUS } from 'store/ui/types';

export const selectUiStore = (state: ReduxState) => state.ui;

export const selectUiIsStartPage = (state: ReduxState) => selectUiStore(state).game_status === GAME_STATUS.START_PAGE;
export const selectUiIsInGame = (state: ReduxState) => selectUiStore(state).game_status === GAME_STATUS.IN_GAME;
export const selectUiIsPause = (state: ReduxState) => selectUiStore(state).game_status === GAME_STATUS.PAUSE;
export const selectUiIsConfig = (state: ReduxState) => selectUiStore(state).game_status === GAME_STATUS.CONFIG;
