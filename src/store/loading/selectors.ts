import type ReduxState from 'store/types';
import { GAME_LOADING_NAMES } from 'store/loading/types';

export const selectLoadingStore = (state: ReduxState) => state.loading;

export const selectIsLoadingStartPage = (state: ReduxState) => (
  selectLoadingStore(state)[GAME_LOADING_NAMES.START_PAGE]
);
export const selectIsLoadingGameUi = (state: ReduxState) => (
  selectLoadingStore(state)[GAME_LOADING_NAMES.GAME_UI]
);
export const selectIsLoadingPause = (state: ReduxState) => (
  selectLoadingStore(state)[GAME_LOADING_NAMES.PAUSE]
);
export const selectIsLoadingConfig = (state: ReduxState) => (
  selectLoadingStore(state)[GAME_LOADING_NAMES.CONFIG]
);
export const selectIsLoadingNotification = (state: ReduxState) => (
  selectLoadingStore(state)[GAME_LOADING_NAMES.NOTIFICATION]
);

export const selectIsInitialLoading = (state: ReduxState) => (
  selectIsLoadingStartPage(state)
  || selectIsLoadingGameUi(state)
  || selectIsLoadingPause(state)
  || selectIsLoadingConfig(state)
  || selectIsLoadingNotification(state)
);
