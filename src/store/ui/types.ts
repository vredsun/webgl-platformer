export enum GAME_STATUS {
  START_PAGE = 'START_PAGE',
  IN_GAME = 'IN_GAME',
  PAUSE = 'PAUSE',
}

export type UiState = {
  game_status: GAME_STATUS;
  is_open_config: boolean;
};
