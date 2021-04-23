import { FETCH_PRICE, LOADING } from "../actions/types";

const initial_state = {
  loading: false,
  PRICE_DETAIL: [],
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case FETCH_PRICE:
      return { ...state, pricedata: action.payload };
    default:
      return state;
  }
};
