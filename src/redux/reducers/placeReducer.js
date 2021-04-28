import {
  CAR_LIST,
  CITY_ID,
  FETCH_CITY,
  FETCH_PRICE,
  FETCH_STATE,
  LOADING,
  MESSAGE,
} from "../actions/types";

const initial_state = {
  loading: false,
  search1: "",
  search2: "",
  message: "",
  cityid: 164,
  statedata: [],
  city: [],
  price: [],
  carlist: [],
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case CITY_ID:
      return { ...state, cityid: action.payload, loading: false };
    case FETCH_STATE:
      return { ...state, statedata: action.payload, loading: false };
    case FETCH_CITY:
      return { ...state, city: action.payload, loading: false };
    case FETCH_PRICE:
      return { ...state, price: action.payload, message: "", loading: false };
    case CAR_LIST:
      return { ...state, carlist: action.payload, loading: false };
    case MESSAGE:
      return { ...state, message: action.payload, loading: false };
    default:
      return state;
  }
};
