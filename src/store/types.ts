import type { GameState } from 'store/game/types';
import type { UiState } from 'store/ui/types';
import type { LoadingState } from 'store/loading/types';

type ReduxState = {
  ui: UiState;
  game: GameState;
  loading: LoadingState;
};

export default ReduxState;
