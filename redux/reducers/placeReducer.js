import { FETCH_CITY, LOADING, SAVE_DETAIL } from "../actions/types";

const initial_state = {
  loading: false,
  search1: "",
  search2: "",
  city: [],
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case FETCH_CITY:
      return { ...state, city: action.payload, loading: false };
    case SAVE_DETAIL:
      return { ...state, city: action.payload, loading: false };
    default:
      return state;
  }
};
