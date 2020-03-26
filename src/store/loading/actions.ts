import { LoadingState } from 'store/loading/types';
import { LOADING_SET_DATA } from 'store/loading/reducer';

export const changeLoadingStatusByName = (name: keyof LoadingState, newStatus: boolean) => {
  return {
    type: LOADING_SET_DATA,
    payload: {
      [name]: newStatus,
    },
  };
};

export const changeLoadingStatusByNameOnTrue = (name: keyof LoadingState) => (
  changeLoadingStatusByName(name, true)
);
export const changeLoadingStatusByNameOnFalse = (name: keyof LoadingState) => (
  changeLoadingStatusByName(name, false)
);
