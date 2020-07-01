import {GET_ROTATION} from '../rotation/actionTypes';

const initialState = {
  items: [],
};

const rotations = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROTATION:
      return action.payload;
    default:
      return state;
  }
};

export default rotations;
