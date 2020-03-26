import * as React from 'react';
import { GAME_LOADING_NAMES } from 'store/loading/types';
import { useDispatch } from 'react-redux';
import { changeLoadingStatusByNameOnFalse } from 'store/loading/actions';

export const useInitialDataIsLoaded = (key: GAME_LOADING_NAMES) => {
  const dispatch = useDispatch();

  React.useEffect(
    () => {
      dispatch(
        changeLoadingStatusByNameOnFalse(key),
      );
    },
    [],
  );
};
