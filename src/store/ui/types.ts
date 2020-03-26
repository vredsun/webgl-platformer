export enum GAME_STATUS {
  START_PAGE = 'START_PAGE',
  IN_GAME = 'IN_GAME',
  PAUSE = 'PAUSE',
  CONFIG = 'CONFIG,'
}

export type UiState = {
  game_status: GAME_STATUS;
};
