import {GET_CHAMPIONS} from './actionTypes';

export const getChampions = (data) => ({
  type: GET_CHAMPIONS,
  payload: data,
});
