import {GET_CHAMPIONS} from './actionTypes';

const initialState = {
  items: [],
};

const champions = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAMPIONS:
      return action.payload;
    default:
      return state;
  }
};

export default champions;
