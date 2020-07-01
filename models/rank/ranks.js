import {GET_RANK} from '../rank/actionTypes';

const initialState = {
  items: [],
};

const ranks = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANK:
      return [...action.payload]
        .sort(function compare(a, b) {
          if (a.leaguePoints < b.leaguePoints) {
            return 1;
          }
          if (a.leaguePoints > b.leaguePoints) {
            return -1;
          }
          return 0;
        })
        .slice(0, 50);
    default:
      return state;
  }
};

export default ranks;
