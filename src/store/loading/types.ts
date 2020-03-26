export enum GAME_LOADING_NAMES {
  START_PAGE = 'START_PAGE',
  GAME_UI = 'GAME_UI',
  PAUSE = 'PAUSE',
  CONFIG = 'CONFIG',
  NOTIFICATION = 'NOTIFICATION',
}

export type LoadingState = {
  [k in GAME_LOADING_NAMES]: boolean;
};
